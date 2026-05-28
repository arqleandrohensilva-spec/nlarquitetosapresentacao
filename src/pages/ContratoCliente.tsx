import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const PREVIEW = {
  numero: "NL-2026-001",
  subtitulo: "",
  nome_cliente: "Jonathan Borges de Moura",
  cpf_cliente: "425.437.568-92",
  nacionalidade: "brasileiro",
  estado_civil: "casado",
  profissao: "Engenheiro de Software",
  endereco_cliente: "Rua das Flores, 450 — Jardim Aquarius, SJC/SP",
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
            {contrato.subtitulo ? (
              <>
                <br />
                {contrato.subtitulo}
              </>
            ) : null}
          </div>
        </div>
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
          <div style={{ fontSize: "8px", color: "#ddd", letterSpacing: "0.22em", textTransform: "uppercase" }}>
            NL Arquitetos · São José dos Campos, SP
          </div>
        </div>
      </div>

      {/* SUMÁRIO */}
      <div
        style={{
          background: "#fff",
          width: "210mm",
          minHeight: "297mm",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          padding: "20mm 22mm 18mm",
          fontFamily: "'DM Mono',monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            paddingBottom: "5mm",
            borderBottom: "0.3px solid #f0ede8",
            marginBottom: "7mm",
          }}
        >
          <div style={{ fontSize: "7px", color: "#bbb", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            NL Arquitetos
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "7px", color: "#bbb", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              {contrato.numero}
            </div>
            <div
              style={{
                fontSize: "7px",
                color: "#8B7355",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginTop: "2px",
              }}
            >
              Sumário
            </div>
          </div>
        </div>
        <div
          style={{
            fontSize: "7px",
            color: "#8B7355",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: "2mm",
          }}
        >
          Sumário
        </div>
        <div
          style={{
            fontFamily: "'Cormorant Garamond',Georgia,serif",
            fontSize: "16px",
            fontWeight: 300,
            fontStyle: "italic",
            color: "#3A3A3A",
            marginBottom: "7mm",
            lineHeight: 1.3,
          }}
        >
          Instrumento Particular de Contrato
          <br />
          de Projeto de Arquitetura
        </div>
        <div
          style={{
            fontSize: "8px",
            color: "#8B7355",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "2.5mm",
            marginTop: "4mm",
          }}
        >
          Contrato Principal
        </div>
        {[
          ["Cláusula Primeira", "Das Partes Envolvidas no Contrato"],
          ["Cláusula Segunda", "Do Objeto"],
          ["Cláusula Terceira", "Dos Serviços Ofertados"],
          ["Cláusula Quarta", "Do Prazo"],
          ["Cláusula Quinta", "Das Alterações"],
          ["Cláusula Sexta", "Dos Honorários"],
          ["Cláusula Sétima", "Das Obrigações e Responsabilidades do Contratante"],
          ["Cláusula Oitava", "Das Obrigações e Responsabilidades dos Contratados"],
          ["Cláusula Nona", "Dos Direitos Autorais"],
          ["Cláusula Décima", "Da Responsabilidade Técnica"],
          ["Cláusula Décima Primeira", "Da Rescisão Contratual"],
          ["Cláusula Décima Segunda", "Considerações Finais"],
          ["Cláusula Décima Terceira", "Da Limitação de Responsabilidade Civil"],
          ["Cláusula Décima Quarta", "Do Foro"],
        ].map(([num, title], i, arr) => (
          <div
            key={num}
            style={{
              display: "flex",
              alignItems: "baseline",
              padding: "2mm 0",
              borderBottom: i < arr.length - 1 ? "0.3px solid #f8f6f4" : "none",
              width: "100%",
            }}
          >
            <div style={{ fontSize: "10px", color: "#888", width: "44mm", minWidth: "44mm", flexShrink: 0 }}>
              {num}
            </div>
            <div
              style={{
                flex: 1,
                minWidth: "4mm",
                borderBottom: "0.5px dotted #e0ddd8",
                margin: "0 2mm",
                marginBottom: "1px",
              }}
            />
            <div style={{ fontSize: "10px", color: "#3A3A3A", textAlign: "right", width: "80mm", lineHeight: 1.4 }}>
              {title}
            </div>
          </div>
        ))}
        <div style={{ height: "0.3px", background: "#f0ede8", margin: "3mm 0" }} />
        <div style={{ display: "flex", alignItems: "baseline", padding: "2mm 0", width: "100%" }}>
          <div
            style={{
              fontSize: "7px",
              color: "#3A3A3A",
              width: "44mm",
              minWidth: "44mm",
              flexShrink: 0,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Assinaturas
          </div>
          <div style={{ flex: 1, borderBottom: "0.5px dotted #e0ddd8", margin: "0 2mm", marginBottom: "1px" }} />
          <div style={{ width: "80mm" }} />
        </div>
        <div style={{ height: "0.3px", background: "#f0ede8", margin: "3mm 0" }} />
        <div
          style={{
            fontSize: "8px",
            color: "#8B7355",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "2.5mm",
            marginTop: "4mm",
          }}
        >
          Anexos
        </div>
        {[
          ["Anexo I", "Escopo dos Serviços de Projeto"],
          ["Anexo II", "Cronograma de Desenvolvimento do Projeto"],
          ["Anexo III", "Honorários e Forma de Pagamento"],
          ["Anexo IV", "Serviços Adicionais (Opcionais)"],
        ].map(([num, title], i, arr) => (
          <div
            key={num}
            style={{
              display: "flex",
              alignItems: "baseline",
              padding: "2mm 0",
              borderBottom: i < arr.length - 1 ? "0.3px solid #f8f6f4" : "none",
              width: "100%",
            }}
          >
            <div style={{ fontSize: "10px", color: "#888", width: "44mm", minWidth: "44mm", flexShrink: 0 }}>
              {num}
            </div>
            <div
              style={{
                flex: 1,
                minWidth: "4mm",
                borderBottom: "0.5px dotted #e0ddd8",
                margin: "0 2mm",
                marginBottom: "1px",
              }}
            />
            <div style={{ fontSize: "10px", color: "#3A3A3A", textAlign: "right", width: "80mm", lineHeight: 1.4 }}>
              {title}
            </div>
          </div>
        ))}
        <div
          style={{
            marginTop: "auto",
            paddingTop: "4mm",
            borderTop: "0.3px solid #f0ede8",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: "8px", color: "#ccc", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            NL Arquitetos · São José dos Campos, SP
          </div>
          <div style={{ fontSize: "8px", color: "#8B7355", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            A Arquitetura como Decisão
          </div>
        </div>
      </div>
    </>
  );
};

export default ContratoCliente;
