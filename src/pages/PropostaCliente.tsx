import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import PropostaArqint from "./PropostaArqint";
import PropostaInt from "./PropostaInt";
import PropostaComercial from "./PropostaComercial";
import { useToast } from "@/components/ui/use-toast";

const PropostaCliente = () => {
  const { tipo, slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [propostaData, setPropostaData] = useState<any>(null);
  const { toast } = useToast();
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
      <div className="min-h-screen bg-background flex items-center justify-center font-display">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-muted-foreground animate-pulse tracking-widest uppercase text-[10px]">Carregando Proposta...</p>
        </div>
      </div>
    );
  }

  if (!propostaData) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="w-20 h-px bg-primary/40 mx-auto" />
          <h1 className="font-display text-4xl md:text-5xl text-foreground">Proposta não encontrada</h1>
          <p className="font-display italic text-muted-foreground text-lg">
            O link acessado pode estar incorreto ou a proposta não está mais disponível.
          </p>
          <div className="pt-8">
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

  // Mapear dados do banco para os props dos componentes
  const componentProps = {
    nome: propostaData.nome_cliente || "[Nome do Cliente]",
    validade: propostaData.validade || "30 dias corridos",
    // Adicionar outros campos conforme necessário, as propostas usam usePropostaParams
    // que lê da URL ou de um estado global. 
    // Como os componentes já usam usePropostaParams, vamos precisar injetar ou adaptar.
  };

  // Renderizar o componente correto
  switch (tipo) {
    case "arqint":
      return <PropostaArqint />;
    case "int":
      return <PropostaInt />;
    case "comercial":
      return <PropostaComercial />;
    default:
      return <div>Tipo de proposta inválido.</div>;
  }
};

export default PropostaCliente;
