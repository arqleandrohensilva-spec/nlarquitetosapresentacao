import React, { useEffect, useState } from 'react';
import { createClient } from "@supabase/supabase-js";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { FileCheck, Loader2 } from "lucide-react";
import { toast } from "sonner";

const nlSupabase = createClient(
  "https://krzuroijejfozljhchok.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyenVyb2lqZWpmb3psamhjaG9rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5Mjg4MjEsImV4cCI6MjA5MzUwNDgyMX0.mFMFfY8TdviFVzHvfKYUrZENpcT4wdyW-52-CUNqsOo",
);

interface ClienteFichaProps {
  leadName: string;
}

const slugify = (text: string) => {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\\u0300-\\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\\s+/g, '-')
    .replace(/[^\\w-]+/g, '')
    .replace(/--+/g, '-');
};

const valorPorExtenso = (valorStr: string): string => {
  const valor = parseFloat(valorStr.replace(/[\\sR$.]/g, '').replace(',', '.')) || 0;
  if (valor === 0) return 'zero reais';
  
  // Implementação simplificada para o exemplo, em produção usar biblioteca como 'extenso'
  return `${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} reais`;
};

const ClienteFicha = ({ leadName }: ClienteFichaProps) => {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [generatingContract, setGeneratingContract] = useState(false);
  const [propostaId, setPropostaId] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // 1. Encontrar a proposta no NL OS que corresponde ao cliente
        const { data: propostas } = await nlSupabase
          .from("proposals")
          .select("id, nome_cliente")
          .ilike("nome_cliente", `%${leadName}%`);

        if (propostas && propostas.length > 0) {
          const proposalId = propostas[0].id;
          setPropostaId(proposalId);

          // 2. Buscar as visualizações dessa proposta
          const { data: views } = await nlSupabase
            .from("proposal_views")
            .select("*")
            .eq("proposal_id", proposalId)
            .order("viewed_at", { ascending: false });

          if (views && views.length > 0) {
            // Consolidar stats (usando a visualização mais recente ou média?)
            // O usuário pediu: "Vista 1 vez · 2 min 34s"
            // Vou usar a visualização mais recente para o detalhamento de seções
            const lastView = views[0];
            const totalAcessos = views.length;
            
            setStats({
              acessos: totalAcessos,
              tempoTotal: lastView.tempo_segundos || 0,
              secoes: lastView.secoes_tempo || {}
            });
          }
        }
      } catch (err) {
        console.error("Erro ao buscar stats da ficha:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [leadName]);

  if (loading) return <div className="animate-pulse h-24 bg-gray-100 rounded-sm" />;
  if (!stats) return <div className="text-[10px] font-mono text-muted-foreground uppercase">Nenhuma atividade de proposta detectada</div>;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} min ${secs}s`;
  };

  const secoesLabels: Record<string, string> = {
    'secao-introducao': 'Introdução',
    'secao-metodo': 'Método',
    'secao-planos': 'Planos',
    'secao-valores': 'Valores',
    'secao-contato': 'Contato'
  };

  const secoesData = Object.entries(stats.secoes)
    .filter(([id]) => secoesLabels[id])
    .map(([id, time]) => ({
      id,
      label: secoesLabels[id],
      time: Math.round((time as number) / 1000)
    }))
    .sort((a, b) => b.time - a.time);

  const maxTime = Math.max(...secoesData.map(s => s.time), 1);

  const handleGerarContrato = async () => {
    try {
      setGeneratingContract(true);
      
      // 1. Buscar dados completos do Lead e Proposta
      const { data: leadData } = await nlSupabase
        .from("leads")
        .select("*")
        .ilike("nome", `%${leadName}%`)
        .single();

      if (!leadData) throw new Error("Lead não encontrado");

      const { data: propData } = await nlSupabase
        .from("proposals")
        .select("*, calculos_proposta(*)")
        .eq("id", propostaId)
        .single();

      if (!propData) throw new Error("Proposta não encontrada");

      const calculo = propData.calculos_proposta?.[0];
      const valorTotalNum = propData.tipo === 'Completo' ? (calculo?.valor_completo || 0) : (calculo?.valor_executivo || 0);
      const valorTotal = valorTotalNum.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
      
      const marco1Val = Math.round(valorTotalNum * 0.3);
      const marco2Val = Math.round(valorTotalNum * 0.4);
      const marco3Val = valorTotalNum - marco1Val - marco2Val;

      const ano = new Date().getFullYear();
      const slug = `${slugify(leadName)}-contrato-${ano}`;
      const dataHoje = new Date().toLocaleDateString('pt-BR');

      // Hash dos últimos 4 dígitos do CPF como PIN de acesso ao contrato
      const cpfDigits = (leadData.cpf || "").replace(/\D/g, "");
      const pinSource = cpfDigits.slice(-4);
      let pinHash: string | null = null;
      if (pinSource.length === 4) {
        const hashBuf = await crypto.subtle.digest(
          "SHA-256",
          new TextEncoder().encode(pinSource),
        );
        pinHash = Array.from(new Uint8Array(hashBuf))
          .map((b) => b.toString(16).padStart(2, "0"))
          .join("");
      }

      // 2. Salvar no Supabase externo
      const { error: insertError } = await supabase
        .from('contratos_clientes')
        .insert({
          slug,
          pin_hash: pinHash,
          nome_cliente: leadData.nome,
          cpf_cliente: leadData.cpf || "[CPF]",
          nacionalidade: leadData.nacionalidade || "brasileiro(a)",
          estado_civil: leadData.estado_civil || "[Estado Civil]",
          profissao: leadData.profissao || "[Profissão]",
          endereco_cliente: leadData.cidade ? `${leadData.cidade}${leadData.estado ? ` - ${leadData.estado}` : ''}` : "[Endereço Cliente]",
          endereco_imovel: propData.cidade || "[Endereço Imóvel]",
          tipo_projeto: propData.tipo || "ARQ+INT",
          plano: propData.plano || "Executivo",
          area_construida: propData.area?.toString() || "[Área]",
          area_terreno: "[Área Terreno]",
          prazo_briefing: "5",
          prazo_estudo: "15",
          prazo_legal: "10",
          prazo_executivo: "30",
          prazo_semanas: "12",
          prazo_total_dias: "65",
          valor_total: valorTotal,
          valor_total_extenso: valorPorExtenso(valorTotal),
          marco1_valor: marco1Val.toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
          marco1_extenso: valorPorExtenso(marco1Val.toString()),
          marco2_valor: marco2Val.toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
          marco2_extenso: valorPorExtenso(marco2Val.toString()),
          marco3_valor: marco3Val.toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
          marco3_extenso: valorPorExtenso(marco3Val.toString()),
          numero: "001",
          ano: ano.toString(),
          data: dataHoje
        });

      if (insertError) throw insertError;

      toast.success("Contrato gerado com sucesso!");
      window.open(`https://proposta.nl.arq.br/contrato/${slug}`, '_blank');

    } catch (err: any) {
      console.error("Erro ao gerar contrato:", err);
      toast.error(`Erro: ${err.message || "Falha ao gerar contrato"}`);
    } finally {
      setGeneratingContract(false);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]">
            Vista {stats.acessos} {stats.acessos === 1 ? 'vez' : 'vezes'} · {formatTime(stats.tempoTotal)}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="h-px bg-[#E8E4DF] w-full" />
        
        {secoesData.length > 0 ? (
          <div className="space-y-3">
            {secoesData.map((secao) => (
              <div key={secao.id} className="space-y-1.5">
                <div className="flex justify-between items-center text-[9px] font-mono uppercase tracking-tight">
                  <span className="text-[#1A1A1A] w-20 truncate">{secao.label}</span>
                  <span className="text-[#999999]">{secao.time}s</span>
                </div>
                <div className="h-1.5 bg-[#E8E4DF] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#8B7355] transition-all duration-1000 ease-out"
                    style={{ width: `${(secao.time / maxTime) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-[9px] font-mono text-muted-foreground uppercase italic text-center py-4">
            Aguardando análise de navegação...
          </p>
        )}
      </div>

      <div className="pt-2">
        <Button 
          onClick={handleGerarContrato}
          disabled={generatingContract || !propostaId}
          variant="outline"
          className="w-full border-[#8B7355]/30 text-[#8B7355] hover:bg-[#8B7355]/5 text-[10px] font-mono uppercase tracking-widest h-9 rounded-none"
        >
          {generatingContract ? (
            <Loader2 className="w-3 h-3 mr-2 animate-spin" />
          ) : (
            <FileCheck className="w-3 h-3 mr-2" />
          )}
          Gerar Contrato
        </Button>
      </div>
    </div>
  );
};

export default ClienteFicha;