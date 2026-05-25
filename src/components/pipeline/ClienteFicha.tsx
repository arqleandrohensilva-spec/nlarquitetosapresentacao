import React, { useEffect, useState } from 'react';
import { createClient } from "@supabase/supabase-js";
import { cn } from "@/lib/utils";

const nlSupabase = createClient(
  "https://krzuroijejfozljhchok.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyenVyb2lqZWpmb3psamhjaG9rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5Mjg4MjEsImV4cCI6MjA5MzUwNDgyMX0.mFMFfY8TdviFVzHvfKYUrZENpcT4wdyW-52-CUNqsOo",
);

interface ClienteFichaProps {
  leadName: string;
}

const ClienteFicha = ({ leadName }: ClienteFichaProps) => {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

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
    </div>
  );
};

export default ClienteFicha;