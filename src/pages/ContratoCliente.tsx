import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const PREVIEW = {
  numero: "NL-2026-001",
  nome_cliente: "João da Silva",
  cpf_cliente: "123.456.789-00",
  tipo_projeto: "Arquitetura + Interiores",
  plano: "Executivo",
  endereco_imovel: "Rua das Flores, 123 — São Paulo, SP",
  data: "25/05/2026",
  valor_total: "33.687,22",
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
      const { data } = await supabase
        .from("contratos_clientes")
        .select("*")
        .eq("slug", slug)
        .single();
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
          fontFamily: "'Courier New', Courier, monospace",
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
          fontFamily: "'Courier New', Courier, monospace",
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
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');
        
        body {
          margin: 0;
          padding: 0;
          background: #f5f5f5;
        }

        @media print {
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          [data-pdf-hide] { display: none !important; }
          @page { size: A4; margin: 0; }
          body { background: #fff; margin: 0; }
        }
      `}</style>

      {/* BOTÃO IMPRIMIR */}
      <div
        data-pdf-hide
        style={{
          position: "fixed",
          top: "24px",
          right: "24px",
          zIndex: 50,
        }}
      >
        <button
          onClick={() => window.print()}
          style={{
            background: "#8B7355",
            color: "#fff",
            border: "none",
            padding: "10px 24px",
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: "10px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          ↓ BAIXAR PDF
        </button>
      </div>

      {/* PÁGINA A4 - CAPA */}
      <div
        style={{
          background: "#fff",
          width: "210mm",
          height: "297mm",
          margin: "40px auto",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 0 30px rgba(0,0,0,0.05)",
          position: "relative",
          overflow: "hidden",
        }}
        className="page-container"
      >
        {/* Topo */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            padding: "60px 80px 0",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: 500,
              color: "#3A3A3A",
              letterSpacing: "0.1em",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            NL<span style={{ color: "#8B7355" }}>.</span>
          </div>
          <div style={{ textAlign: "right" }}>
            <div
              style={{
                fontSize: "10px",
                color: "#8B7355",
                fontFamily: "'Courier New', Courier, monospace",
                letterSpacing: "0.1em",
              }}
            >
              Nº DO CONTRATO: {contrato.numero}
            </div>
          </div>
        </div>

        {/* Centro - Título */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 80px",
          }}
        >
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "48px",
              color: "#3A3A3A",
              lineHeight: "1.1",
              margin: "0 0 40px 0",
              fontWeight: 300,
            }}
          >
            Contrato de Prestação
            <br />
            de Serviços Arquitetônicos
          </h1>

          <div
            style={{
              width: "100%",
              height: "0.5px",
              background: "#8B7355",
              opacity: 0.6,
              marginBottom: "60px",
            }}
          />

          {/* Bloco de dados - Duas Colunas */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px 60px",
            }}
          >
            {/* Coluna 1 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              <div>
                <div
                  style={{
                    fontSize: "9px",
                    color: "#8B7355",
                    fontFamily: "'Courier New', Courier, monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    marginBottom: "8px",
                  }}
                >
                  CONTRATANTE
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    color: "#3A3A3A",
                    fontFamily: "'Cormorant Garamond', serif",
                    letterSpacing: "0.02em",
                  }}
                >
                  {contrato.nome_cliente}
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: "9px",
                    color: "#8B7355",
                    fontFamily: "'Courier New', Courier, monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    marginBottom: "8px",
                  }}
                >
                  DATA
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    color: "#3A3A3A",
                    fontFamily: "'Cormorant Garamond', serif",
                    letterSpacing: "0.02em",
                  }}
                >
                  {contrato.data}
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: "9px",
                    color: "#8B7355",
                    fontFamily: "'Courier New', Courier, monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    marginBottom: "8px",
                  }}
                >
                  TIPO DE PROJETO
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    color: "#3A3A3A",
                    fontFamily: "'Cormorant Garamond', serif",
                    letterSpacing: "0.02em",
                  }}
                >
                  {contrato.tipo_projeto}
                </div>
              </div>
            </div>

            {/* Coluna 2 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              <div>
                <div
                  style={{
                    fontSize: "9px",
                    color: "#8B7355",
                    fontFamily: "'Courier New', Courier, monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    marginBottom: "8px",
                  }}
                >
                  Nº DO CONTRATO
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    color: "#3A3A3A",
                    fontFamily: "'Cormorant Garamond', serif",
                    letterSpacing: "0.02em",
                  }}
                >
                  {contrato.numero}
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: "9px",
                    color: "#8B7355",
                    fontFamily: "'Courier New', Courier, monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    marginBottom: "8px",
                  }}
                >
                  VALOR TOTAL
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    color: "#3A3A3A",
                    fontFamily: "'Cormorant Garamond', serif",
                    letterSpacing: "0.02em",
                  }}
                >
                  R$ {contrato.valor_total}
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontSize: "9px",
                    color: "#8B7355",
                    fontFamily: "'Courier New', Courier, monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    marginBottom: "8px",
                  }}
                >
                  PLANO
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    color: "#3A3A3A",
                    fontFamily: "'Cormorant Garamond', serif",
                    letterSpacing: "0.02em",
                  }}
                >
                  {contrato.plano}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé */}
        <div
          style={{
            padding: "0 80px 60px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "9px",
              color: "#8B7355",
              fontFamily: "'Courier New', Courier, monospace",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              opacity: 0.8,
            }}
          >
            NL Arquitetos · São José dos Campos, SP · A Arquitetura como Decisão
          </div>
        </div>
      </div>
    </>
  );
};

export default ContratoCliente;
