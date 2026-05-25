import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { createClient } from "@supabase/supabase-js";
import PropostaArqint from "./PropostaArqint";
import PropostaInt from "./PropostaInt";
import PropostaComercial from "./PropostaComercial";
import { PropostaProvider } from "@/hooks/use-proposta-context";
import { PropostaParams } from "@/hooks/use-proposta-params-types";

const nlSupabase = createClient(
  "https://krzuroijejfozljhchok.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyenVyb2lqZWpmb3psamhjaG9rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5Mjg4MjEsImV4cCI6MjA5MzUwNDgyMX0.mFMFfY8TdviFVzHvfKYUrZENpcT4wdyW-52-CUNqsOo",
);

const PropostaCliente = () => {
  const { tipo, slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [propostaData, setPropostaData] = useState<any>(null);
  const navigate = useNavigate();
  const proposalIdRef = useRef<string | null>(null);

  useEffect(() => {
    const fetchProposta = async () => {
      try {
        const { data, error } = await supabase
          .from("propostas_clientes")
          .select("*")
          .eq("slug", slug)
          .eq("tipo", tipo)
          .single();

        if (error) throw error;

        if (data) {
          setPropostaData(data);

          await supabase
            .from("propostas_clientes")
            .update({
              acessos: (data.acessos || 0) + 1,
              ultimo_acesso: new Date().toISOString(),
            })
            .eq("id", data.id);

          try {
            const { data: propostas } = await nlSupabase
              .from("proposals")
              .select("id, link_proposta")
              .not("link_proposta", "is", null);

            const proposta = propostas?.find((p: any) => {
              const link = (p.link_proposta || "").toLowerCase();
              return link.endsWith(`/${slug}`) || link.includes(`/${tipo}/${slug}`);
            });

            if (proposta?.id) {
              proposalIdRef.current = proposta.id;
              await nlSupabase.from("proposal_views").insert({
                proposal_id: proposta.id,
                viewed_at: new Date().toISOString(),
              });
            }
          } catch (trackErr) {
            console.error("Erro ao registrar tracking:", trackErr);
          }
        }
      } catch (err) {
        console.error("Erro ao buscar proposta:", err);
        setPropostaData(null);
      } finally {
        setLoading(false);
      }
    };

    if (tipo && slug) {
      fetchProposta();
    }
  }, [tipo, slug]);

  // 1. Tracking de tempo total
  useEffect(() => {
    const startTime = Date.now();
    
    return () => {
      const tempoSegundos = Math.round((Date.now() - startTime) / 1000);
      
      if (proposalIdRef.current) {
        nlSupabase
          .from("proposal_views")
          .update({ tempo_segundos: tempoSegundos })
          .eq("proposal_id", proposalIdRef.current)
          .order("viewed_at", { ascending: false })
          .limit(1);
      }
    };
  }, []);

  // 2. Tracking de seções
  useEffect(() => {
    const secoes: Record<string, number> = {};
    const temposSecao: Record<string, number> = {};
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.id;
        if (entry.isIntersecting) {
          secoes[id] = Date.now();
        } else if (secoes[id]) {
          temposSecao[id] = (temposSecao[id] || 0) + (Date.now() - secoes[id]);
          delete secoes[id];
        }
      });
    }, { threshold: 0.5 });

    // Observar elementos com id começando com "secao-"
    const elements = document.querySelectorAll('[id^="secao-"]');
    elements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
      // Salvar tempos das seções no NL OS
      if (Object.keys(temposSecao).length > 0 && proposalIdRef.current) {
        nlSupabase
          .from("proposal_views")
          .update({ secoes_tempo: temposSecao })
          .eq("proposal_id", proposalIdRef.current)
          .order("viewed_at", { ascending: false })
          .limit(1);
      }
    };
  }, [loading]); // Re-executar quando o conteúdo carregar

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center font-display">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-primary/60 animate-pulse tracking-widest uppercase text-[10px]">Carregando Proposta...</p>
        </div>
      </div>
    );
  }

  if (!propostaData) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="w-20 h-px bg-primary/40 mx-auto" />
          <h1 className="font-display text-4xl md:text-5xl text-foreground">Proposta não encontrada</h1>
          <p className="font-display italic text-muted-foreground text-lg">
            O link acessado pode estar incorreto ou a proposta não está mais disponível.
          </p>
          <div className="pt-8 text-center flex justify-center">
            <button
              onClick={() => navigate("/")}
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary hover:text-primary/70 transition-colors"
            >
              Voltar ao Início
            </button>
          </div>
        </div>
      </div>
    );
  }

  const contextValue: PropostaParams = {
    nome: propostaData.nome_cliente || "[Nome do Cliente]",
    tipo: propostaData.tipo_negocio || "[Tipo de Negócio]",
    cidade: propostaData.cidade || "[Cidade]",
    estado: propostaData.estado || "SP",
    area: propostaData.area || "[XXX]",
    objetivo: propostaData.objetivo || "[Descrição breve do objetivo do cliente]",
    data: new Date(propostaData.criado_em).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    plano: "",
    valor_executivo: propostaData.valor_executivo || "Sob consulta",
    valor_completo: propostaData.valor_completo || "Sob consulta",
    validade: propostaData.validade || "30 dias corridos",
  };

  return (
    <PropostaProvider value={contextValue}>
      {tipo === "arqint" && <PropostaArqint />}
      {tipo === "int" && <PropostaInt />}
      {tipo === "comercial" && <PropostaComercial />}
    </PropostaProvider>
  );
};

export default PropostaCliente;
