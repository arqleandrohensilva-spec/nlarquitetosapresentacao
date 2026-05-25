import { useEffect, useState } from "react";
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
