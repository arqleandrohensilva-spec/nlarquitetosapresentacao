import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const PREVIEW = {
  numero: "NL-2026-001",
  subtitulo: "",
  nome_cliente: "Jonathan Borges de Moura",
  cpf_cliente: "425.437.568-92",
  tipo_projeto: "Arquitetura + Interiores",
  endereco_imovel: "Av. Vitória Régia, 120 — Jardim Motorama, SJC/SP",
  data: "25 de maio de 2026",
};

const ContratoCliente = () => {
  const { slug } = useParams();
  const [contrato, setContrato] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug === "preview") {
      setContrato(PREVIEW);
      setLoading(false);
      return;
    }
    const fetch = async () => {
      const { data } = await supabase.from("contratos_clientes").select("*").eq("slug", slug).single();
      setContrato(data);
      setLoading(false);
    };
    fetch();
  }, [slug]);

  if (loading)
    return (
      <div
        style={{
          background: "#fff",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "monospace",
          fontSize: "11px",
          color: "#bbb",
          letterSpacing: "0.2em",
        }}
      >
        CARREGANDO...
      </div>
    );
  if (!contrato)
    return (
      <div
        style={{
          background: "#fff",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "monospace",
          fontSize: "11px",
          color: "#bbb",
          letterSpacing: "0.2em",
        }}
      >
        CONTRATO NÃO ENCONTRADO
      </div>
    );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Mono:wght@300;400&display=swap');
        @media print {
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          [data-pdf-hide] { display: none !important; }
          .page-break { page-break-before: always; }
          .no-break { page-break-inside: avoid; }
          @page { size: A4; margin: 0; }
          body { margin: 0; }
        }
      `}</style>

      {/* BOTÃO IMPRIMIR */}
      <div data-pdf-hide style={{ position: "fixed", top: "16px", right: "16px", zIndex: 50 }}>
        <button
          onClick={() => window.print()}
          style={{
            background: "#8B7355",
            color: "#fff",
            border: "none",
            padding: "8px 20px",
            fontFamily: "'DM Mono',monospace",
            fontSize: "9px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          ↓ BAIXAR PDF
        </button>
      </div>

      {/* CAPA */}
      <div
        style={{
          background: "#fff",
          width: "210mm",
          minHeight: "297mm",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          fontFamily: "'DM Mono',monospace",
          padding: "0",
        }}
      >
        {/* Número do contrato */}
        <div style={{ display: "flex", justifyContent: "flex-end", padding: "32px 44px 0" }}>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "7px", color: "#bbb", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Contrato
            </div>
            <div style={{ fontSize: "10px", color: "#8B7355", letterSpacing: "0.12em", marginTop: "2px" }}>
              {contrato.numero}
            </div>
          </div>
        </div>

        {/* Hero central */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 60px",
          }}
        >
          <div style={{ fontSize: "32px", fontWeight: 400, color: "#3A3A3A", letterSpacing: "0.15em" }}>
            NL<span style={{ color: "#8B7355", marginLeft: "10px" }}>ARQUITETOS</span>
          </div>
          <div
            style={{
              fontSize: "7.5px",
              color: "#bbb",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginTop: "10px",
              textAlign: "center",
            }}
          >
            Contrato de Prestação de Serviços Técnicos de Arquitetura
          </div>
          <div style={{ width: "32px", height: "1px", background: "#8B7355", margin: "28px auto" }} />
          {contrato.subtitulo && (
            <div
              style={{
                fontFamily: "'Cormorant Garamond',Georgia,serif",
                fontSize: "13px",
                color: "#999",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                textAlign: "center",
                lineHeight: 1.8,
              }}
            >
              Instrumento Particular
              <br />
              {contrato.subtitulo}
            </div>
          )}
          {!contrato.subtitulo && (
            <div
              style={{
                fontFamily: "'Cormorant Garamond',Georgia,serif",
                fontSize: "13px",
                color: "#999",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                textAlign: "center",
                lineHeight: 1.8,
              }}
            >
              Instrumento Particular
            </div>
          )}
        </div>

        {/* Campos */}
        <div style={{ padding: "0 64px", marginTop: "auto" }}>
          {[
            { label: "Contratante", val: contrato.nome_cliente },
            { label: "CPF", val: contrato.cpf_cliente },
            { label: "Tipo de Projeto", val: contrato.tipo_projeto },
            { label: "End. Obra", val: contrato.endereco_imovel },
            { label: "Data", val: contrato.data },
          ].map((f, i, arr) => (
            <div
              key={f.label}
              style={{
                display: "flex",
                alignItems: "baseline",
                padding: "10px 0",
                borderBottom: i < arr.length - 1 ? "0.5px solid #f0ede8" : "none",
              }}
            >
              <div
                style={{
                  fontSize: "7.5px",
                  color: "#bbb",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  width: "120px",
                  flexShrink: 0,
                }}
              >
                {f.label}
              </div>
              <div style={{ fontSize: "10px", color: "#3A3A3A", letterSpacing: "0.05em" }}>{f.val}</div>
            </div>
          ))}
        </div>

        {/* Rodapé */}
        <div
          style={{
            padding: "28px 64px 36px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            marginTop: "24px",
          }}
        >
          <div
            style={{
              fontFamily: "'Cormorant Garamond',Georgia,serif",
              fontSize: "13px",
              fontStyle: "italic",
              color: "#bbb",
            }}
          >
            "A arquitetura como decisão."
          </div>
          <div style={{ fontSize: "7px", color: "#ddd", letterSpacing: "0.22em", textTransform: "uppercase" }}>
            NL Arquitetos · São José dos Campos, SP
          </div>
        </div>
      </div>
    </>
  );
};

export default ContratoCliente;
