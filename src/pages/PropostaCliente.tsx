import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import PropostaArqint from "./PropostaArqint";
import PropostaInt from "./PropostaInt";
import PropostaComercial from "./PropostaComercial";
import { PropostaProvider } from "@/hooks/use-proposta-context";
import { PropostaParams } from "@/hooks/use-proposta-params-types";

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
          
          // Incrementar acessos
          await supabase
            .from("propostas_clientes")
            .update({ 
              acessos: (data.acessos || 0) + 1,
              ultimo_acesso: new Date().toISOString()
            })
            .eq("id", data.id);
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

  // Mapear dados do banco para o formato esperado pelo hook
  const contextValue: PropostaParams = {
    nome: propostaData.nome_cliente || "[Nome do Cliente]",
    tipo: propostaData.tipo_negocio || "[Tipo de Negócio]",
    cidade: propostaData.cidade || "[Cidade]",
    estado: propostaData.estado || "SP",
    area: propostaData.area || "[XXX]",
    objetivo: propostaData.objetivo || "[Descrição breve do objetivo do cliente]",
    data: new Date(propostaData.criado_em).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }),
    plano: "",
    valor_executivo: propostaData.valor_executivo || 'Sob consulta',
    valor_completo: propostaData.valor_completo || 'Sob consulta',
    validade: propostaData.validade || '30 dias corridos',
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
