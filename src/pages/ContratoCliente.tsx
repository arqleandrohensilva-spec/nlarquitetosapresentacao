import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const ContratoCliente = () => {
  const { slug } = useParams();
  const [contrato, setContrato] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Modo preview ou busca no banco
    if (slug === "preview") {
      setContrato({
        numero: "NL-2026-000",
        nome_cliente: "CLIENTE EXEMPLO",
        cpf_cliente: "000.000.000-00",
        data: "30 de maio de 2026"
      });
      setLoading(false);
      return;
    }

    const fetchContrato = async () => {
      const { data, error } = await supabase
        .from("contratos_clientes")
        .select("*")
        .eq("slug", slug)
        .single();
      
      if (data) setContrato(data);
      setLoading(false);
    };

    fetchContrato();
  }, [slug]);

  if (loading) return <div style={{ padding: "20px", fontFamily: "monospace" }}>CARREGANDO...</div>;
  if (!contrato) return <div style={{ padding: "20px", fontFamily: "monospace" }}>CONTRATO NÃO ENCONTRADO</div>;

  return (
    <div style={{
      background: "#ffffff",
      width: "210mm",
      margin: "0 auto",
      minHeight: "100vh",
      fontFamily: "'DM Mono', monospace",
      padding: "20mm 22mm",
      color: "#3A3A3A"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=DM+Mono:wght@300;400&display=swap');
        @media print {
          body { margin: 0; background: #fff; }
          @page { size: A4; margin: 0; }
        }
      `}</style>

      {/* Estrutura Base Pronta para Novo Conteúdo */}
      <div style={{ textAlign: "center", marginTop: "100mm" }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", fontWeight: 300, letterSpacing: "0.1em" }}>
          NL<span style={{ color: "#8B7355" }}>ARQUITETOS</span>
        </h1>
        <p style={{ fontSize: "10px", color: "#888", marginTop: "20px", letterSpacing: "0.2em" }}>
          PÁGINA REFORMULADA — AGUARDANDO NOVO CONTEÚDO
        </p>
      </div>
    </div>
  );
};

export default ContratoCliente;
