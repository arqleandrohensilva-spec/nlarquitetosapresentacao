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
          html, body { background: #ffffff !important; margin: 0; padding: 0; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          [data-pdf-hide] { display: none !important; }
          @page { size: A4; margin: 0; }
          
          .nova-pagina { page-break-before: always; }
          .no-break { page-break-inside: avoid; }
          h2, h3 { page-break-after: avoid; }
          p { orphans: 3; widows: 3; }
          
          /* Reset container for print */
          .contrato-container { 
            width: 100% !important; 
            margin: 0 !important; 
            padding: 20mm 22mm !important;
            box-shadow: none !important;
          }
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

      <div
        className="contrato-container"
        style={{
          background: "#ffffff",
          width: "210mm",
          margin: "0 auto",
          fontFamily: "'DM Mono', monospace",
          padding: "20mm 22mm",
          color: "#3A3A3A",
          boxShadow: "0 0 10px rgba(0,0,0,0.05)",
        }}
      >
        {/* CAPA */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "250mm",
            padding: "0",
          }}
        >
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

      {/* CLÁUSULAS - PÁGINA 1 */}
      <div
        className="page-break"
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
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            paddingBottom: "5mm",
            borderBottom: "0.3px solid #f0ede8",
            marginBottom: "10mm",
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
                fontSize: "8px",
                color: "#8B7355",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginTop: "2px",
              }}
            >
              Contrato Principal
            </div>
          </div>
        </div>

        {/* TÍTULO DO CONTRATO */}
        <div
          style={{
            fontFamily: "'Cormorant Garamond',Georgia,serif",
            fontSize: "14px",
            color: "#3A3A3A",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: "12mm",
            fontWeight: 400,
          }}
        >
          Instrumento Particular de Contrato de Projeto de Arquitetura
        </div>

        {/* CLÁUSULA PRIMEIRA */}
        <div style={{ marginBottom: "8mm" }}>
          <div style={{ display: "flex", gap: "4mm", marginBottom: "4mm", alignItems: "baseline" }}>
            <div
              style={{
                fontSize: "10px",
                color: "#888",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              Cláusula Primeira
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "#3A3A3A",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Das Partes Envolvidas no Contrato
            </div>
          </div>

          <div
            style={{
              fontSize: "9px",
              color: "#555",
              lineHeight: "1.8",
              textAlign: "justify",
              display: "flex",
              flexDirection: "column",
              gap: "4mm",
            }}
          >
            <p style={{ margin: 0 }}>
              <span style={{ color: "#8B7355", fontWeight: 500 }}>CONTRATANTE</span> {contrato.nome_cliente},{" "}
              {contrato.nacionalidade}, {contrato.estado_civil}, {contrato.profissao}, portador do CPF nº{" "}
              {contrato.cpf_cliente}, residente e domiciliado em {contrato.endereco_cliente}, doravante denominado
              simplesmente CONTRATANTE.
            </p>

            <p style={{ margin: 0 }}>
              <span style={{ color: "#8B7355", fontWeight: 500 }}>CONTRATADOS</span> Leandro Henrique da Silva,
              brasileiro, arquiteto e urbanista, inscrito no CAU nº A252250-0 portador do CPF nº 425.437.568-92 e
              Neandro Jacque Garcia, brasileiro, arquiteto e urbanista, inscrito no CAU nº A264629-3 portador do CPF nº
              382.857.218-92 atuando sob a denominação fantasia NL Arquitetura e Interiores doravante denominados
              conjuntamente CONTRATADOS.
            </p>

            <p style={{ margin: 0 }}>
              As partes, devidamente qualificadas, resolvem celebrar o presente Contrato de Prestação de Serviços de
              Arquitetura, o qual se regerá pela legislação brasileira aplicável, notadamente, quando aplicável, pelo
              Código de Defesa do Consumidor, pela Lei Federal nº 12.378/2010 (que regulamenta o exercício da Arquitetura
              e Urbanismo), pelas Resoluções nº 21 (Atribuições Profissionais) e nº 64 (Tabela de Honorários) do CAU/BR,
              pela Lei Federal nº 9.610/1998, que dispõe sobre direitos autorais, e, subsidiariamente, pelas disposições
              do Código Civil concernentes à prestação de serviços. O presente instrumento será interpretado e executado
              em conformidade com as referidas legislações, sendo as cláusulas aqui previstas aplicáveis naquilo que não
              contrariar as disposições legais cogentes, tendo as partes entre si justo e contratado o que segue.
            </p>
          </div>
        </div>
        {/* CLÁUSULA SEGUNDA */}
        <div style={{ marginBottom: "8mm" }}>
          <div style={{ display: "flex", gap: "4mm", marginBottom: "4mm", alignItems: "baseline" }}>
            <div
              style={{
                fontSize: "10px",
                color: "#888",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              Cláusula Segunda
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "#3A3A3A",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Do Objeto
            </div>
          </div>

          <div
            style={{
              fontSize: "9px",
              color: "#555",
              lineHeight: "1.8",
              textAlign: "justify",
              display: "flex",
              flexDirection: "column",
              gap: "2mm",
            }}
          >
            <p style={{ margin: 0 }}>
              2.1 O presente contrato tem por objeto a prestação de serviços técnicos profissionais de arquitetura pelos
              CONTRATADOS ao CONTRATANTE, compreendendo o desenvolvimento de projetos e/ou serviços relacionados à
              arquitetura e interiores.
            </p>
            <p style={{ margin: 0 }}>
              2.2 O escopo específico dos serviços, as etapas de desenvolvimento, os prazos, os honorários, a forma de
              pagamento e as demais condições particulares de cada projeto serão detalhadas nos Anexos deste contrato,
              que o integram para todos os efeitos legais, com a mesma validade e eficácia jurídica.
            </p>
          </div>
        </div>

        {/* CLÁUSULA TERCEIRA */}
        <div style={{ marginBottom: "8mm" }}>
          <div style={{ display: "flex", gap: "4mm", marginBottom: "4mm", alignItems: "baseline" }}>
            <div
              style={{
                fontSize: "10px",
                color: "#888",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              Cláusula Terceira
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "#3A3A3A",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Dos Serviços Ofertados
            </div>
          </div>

          <div
            style={{
              fontSize: "9px",
              color: "#555",
              lineHeight: "1.8",
              textAlign: "justify",
              display: "flex",
              flexDirection: "column",
              gap: "2mm",
            }}
          >
            <p style={{ margin: 0 }}>
              3.1 Os serviços técnicos de arquitetura que poderão ser prestados pelos CONTRATADOS ao CONTRATANTE
              compreendem, de forma exemplificativa e não limitativa, atividades como: levantamento de dados e
              informações técnicas, elaboração de briefing e definição do programa de necessidades, desenvolvimento de
              estudos preliminares, anteprojeto, projeto legal para aprovação junto aos órgãos competentes, projeto
              executivo, compatibilização de projetos complementares, gerenciamento de projetos (se expressamente
              contratado) e demais atividades técnicas relacionadas ao desenvolvimento de projetos de arquitetura e/ou
              interiores, sendo que a definição específica do escopo dos serviços contratados, etapas de desenvolvimento
              e entregáveis será detalhada nos Anexos deste contrato, conforme Cláusula 3.2.
            </p>
            <p style={{ margin: 0 }}>
              3.2 A definição específica do escopo dos serviços, etapas de desenvolvimento, entregáveis e demais
              condições aplicáveis a cada projeto contratado será estabelecida nos Anexos deste contrato, que passam a
              integrá-lo para todos os fins de direito.
            </p>
            <p style={{ margin: 0 }}>
              3.3 Os serviços previstos nesta cláusula referem-se exclusivamente às atividades de desenvolvimento de
              projeto, não incluindo execução, gerenciamento ou acompanhamento de obra, salvo quando expressamente
              contratado.
            </p>
          </div>
        </div>

        {/* CLÁUSULA QUARTA */}
        <div style={{ marginBottom: "8mm" }}>
          <div style={{ display: "flex", gap: "4mm", marginBottom: "4mm", alignItems: "baseline" }}>
            <div
              style={{
                fontSize: "10px",
                color: "#888",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              Cláusula Quarta
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "#3A3A3A",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Do Prazo
            </div>
          </div>

          <div
            style={{
              fontSize: "9px",
              color: "#555",
              lineHeight: "1.8",
              textAlign: "justify",
              display: "flex",
              flexDirection: "column",
              gap: "2mm",
            }}
          >
            <p style={{ margin: 0 }}>
              4.1 Os prazos para execução dos serviços objeto deste contrato serão definidos nos Anexos correspondentes,
              nos quais constará o cronograma estimado de desenvolvimento das etapas do projeto.
            </p>
            <p style={{ margin: 0 }}>
              4.2 Os prazos estabelecidos possuem caráter estimativo e poderão sofrer ajustes a serem determinados e
              comunicados formalmente pelos CONTRATADOS ao CONTRATANTE, com a devida justificativa, em razão de fatores
              como: revisões solicitadas pelo CONTRATANTE, atraso no fornecimento de informações ou documentos
              necessários ao desenvolvimento do projeto, exigências de órgãos públicos, necessidade de adequações
              técnicas, superveniência de fatos imprevisíveis ou quaisquer outras circunstâncias que impactem o
              andamento regular dos serviços.
            </p>
            <p style={{ margin: 0 }}>
              4.3 Eventuais atrasos decorrentes de fatores alheios à atuação dos CONTRATADOS não caracterizarão
              inadimplemento contratual.
            </p>
          </div>
        </div>

        {/* RODAPÉ */}
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
      {/* CLÁUSULAS - PÁGINA 2 */}
      <div
        className="page-break"
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
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            paddingBottom: "5mm",
            borderBottom: "0.3px solid #f0ede8",
            marginBottom: "10mm",
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
              Contrato Principal
            </div>
          </div>
        </div>

        {/* CLÁUSULA QUINTA */}
        <div style={{ marginBottom: "8mm" }}>
          <div style={{ display: "flex", gap: "4mm", marginBottom: "4mm", alignItems: "baseline" }}>
            <div
              style={{
                fontSize: "10px",
                color: "#888",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              Cláusula Quinta
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "#3A3A3A",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Das Alterações
            </div>
          </div>

          <div
            style={{
              fontSize: "9px",
              color: "#555",
              lineHeight: "1.7",
              textAlign: "justify",
              display: "flex",
              flexDirection: "column",
              gap: "2mm",
            }}
          >
            <p style={{ margin: 0 }}>
              5.1 Cada etapa do projeto apresentada pelos CONTRATADOS contempla até 02 (duas) revisões, desde que as
              alterações solicitadas estejam relacionadas à proposta inicialmente desenvolvida e não impliquem mudança
              substancial do conceito arquitetônico previamente aprovado.
            </p>
            <p style={{ margin: 0, fontSize: "8.5px", fontStyle: "italic", color: "#888", paddingLeft: "4mm" }}>
              Parágrafo único – A caracterização de mudança substancial do conceito arquitetônico será avaliada pelos
              CONTRATADOS, de forma justificada e documentada, com base em sua expertise técnica, nas normas aplicáveis
              e nos documentos de briefing e estudo preliminar aprovados.
            </p>
            <p style={{ margin: 0 }}>
              5.2 As solicitações de ajustes deverão ser realizadas pelo CONTRATANTE dentro do prazo de análise
              estabelecido neste contrato ou nos Anexos correspondentes, após a apresentação de cada etapa do projeto.
            </p>
            <p style={{ margin: 0 }}>
              5.2.1 A ausência de manifestação do CONTRATANTE dentro do prazo de análise estabelecido, conforme ANEXO II
              – Cronograma de Desenvolvimento do Projeto, implicará na aprovação tácita da etapa apresentada, para fins de
              continuidade do desenvolvimento do projeto, sem prejuízo da aplicação das demais disposições contratuais
              relativas a alterações posteriores.
            </p>
            <p style={{ margin: 0 }}>
              5.3 Caso o CONTRATANTE solicite mais de 02 (duas) rodadas de revisão em uma mesma etapa, ou alterações que
              impliquem mudanças significativas no conceito arquitetônico previamente aprovado, devidamente justificado e
              comprovado pelos CONTRATADOS, tais modificações serão consideradas serviços adicionais, cobradas por hora
              técnica conforme tabela de honorários praticada pelos CONTRATADOS, estando sujeitas à redefinição de prazos.
            </p>
            <p style={{ margin: 0, fontSize: "8.5px", fontStyle: "italic", color: "#888", paddingLeft: "4mm" }}>
              Parágrafo único – A execução desses serviços adicionais dependerá da apresentação de proposta formal pelos
              CONTRATADOS, contendo a descrição do escopo, novos prazos e honorários correspondentes, bem como da
              aprovação expressa do CONTRATANTE.
            </p>
            <p style={{ margin: 0 }}>
              5.4 Alterações solicitadas após a aprovação formal de uma etapa serão consideradas serviços adicionais,
              sujeitas à análise de viabilidade técnica pelos CONTRATADOS, revisão de prazos e cobrança de honorários
              complementares. A aprovação formal de cada etapa do projeto pelo CONTRATANTE deverá ocorrer por meio de
              comunicação escrita (e-mail com confirmação de leitura, plataforma de gestão de projetos ou termo de
              aprovação assinado), dentro do prazo estabelecido, e implicará a concordância com as soluções
              apresentadas, encerrando a fase correspondente.
            </p>
            <p style={{ margin: 0 }}>
              5.5 Solicitações de alteração realizadas durante a etapa de Projeto Executivo, que impactem elementos
              previamente definidos, poderão gerar revisão de prazos e honorários, em razão do retrabalho técnico
              necessário. Tais serviços adicionais estarão sujeitas à cobrança de honorários, mediante apresentação de
              proposta formal e aprovação prévia do CONTRATANTE.
            </p>
            <p style={{ margin: 0 }}>
              5.6 Alterações decorrentes de exigências técnicas de órgãos públicos, prefeitura ou normas condominiais
              serão realizadas sem custo adicional ao CONTRATANTE, desde que não impliquem mudança substancial do
              conceito arquitetônico previamente aprovado.
            </p>
            <p style={{ margin: 0, fontSize: "8.5px", fontStyle: "italic", color: "#888", paddingLeft: "4mm" }}>
              Parágrafo único – Caso tais exigências demandem alterações significativas no projeto ou revisão do conceito
              arquitetônico, os prazos serão ajustados e estarão sujeitos à honorários adicionais, mediante apresentação
              de novo orçamento e aprovação pelo CONTRATANTE.
            </p>
            <p style={{ margin: 0 }}>
              5.7 Quaisquer alterações solicitadas pelo CONTRATANTE após o início da execução da obra e que não decorram
              de vícios construtivos ou falhas de projeto imputáveis aos CONTRATADOS não fazem parte do escopo deste
              contrato, podendo ser realizadas mediante contratação adicional de serviços de revisão de projeto, com
              orçamento específico e aprovação prévia do CONTRATANTE.
            </p>
            <p style={{ margin: 0 }}>
              5.8 Após a aprovação do Projeto Executivo, o projeto será considerado tecnicamente finalizado, não estando
              incluídas revisões ou modificações posteriores no escopo deste contrato, salvo por acordo expresso entre as
              partes e mediante aditivo contratual que defina o escopo e os honorários adicionais.
            </p>
            <p style={{ margin: 0 }}>
              5.9 Os valores referentes a serviços adicionais serão definidos conforme tabela de honorários praticada pelos
              CONTRATADOS ou conforme referência da tabela de honorários do CAU/BR, mediante prévia comunicação e
              aprovação do CONTRATANTE.
            </p>
            <p style={{ margin: 0 }}>
              5.10 A aprovação de cada etapa do projeto pelo CONTRATANTE caracteriza a concordância com as soluções
              apresentadas, encerrando-se a fase correspondente.
            </p>
          </div>
        </div>

        <div style={{ height: "10mm" }} />

        {/* CLÁUSULA SÉTIMA - AGORA JUNTO COM A SEXTA SE COUBER, OU CONTINUANDO */}
        {/* Na verdade, Cláusula 6 é bem longa. Vamos apenas remover o break se possível. */}
        {/* Mas o usuário quer fluxo contínuo. Então vou consolidar as cláusulas em poucas páginas. */}
        {/* Página 3: Cláusulas 1, 2, 3, 4 */}
        {/* Página 4: Cláusulas 5, 6 */}
        {/* Página 5: Cláusula 7 */}
        {/* Página 6: Cláusulas 8, 9, 10 */}
        {/* Página 7: Cláusulas 11, 12, 13, 14 + Assinaturas */}
        
        {/* Vamos manter a Página 4 para 5 e 6. */}


        {/* CLÁUSULA SEXTA */}
        <div style={{ marginBottom: "8mm" }}>
          <div style={{ display: "flex", gap: "4mm", marginBottom: "4mm", alignItems: "baseline" }}>
            <div
              style={{
                fontSize: "10px",
                color: "#888",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              Cláusula Sexta
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "#3A3A3A",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Dos Honorários
            </div>
          </div>

          <div
            style={{
              fontSize: "9px",
              color: "#555",
              lineHeight: "1.7",
              textAlign: "justify",
              display: "flex",
              flexDirection: "column",
              gap: "2.5mm",
            }}
          >
            <p style={{ margin: 0 }}>
              6.1 Em contrapartida aos serviços profissionais de arquitetura prestados em conformidade com este
              contrato, o CONTRATANTE compromete-se a pagar aos CONTRATADOS os honorários profissionais, bem como a
              respectiva forma de pagamento, conforme estabelecido no Anexo III – Honorários e Condições de Pagamento,
              que integra o presente instrumento para todos os fins de direito.
            </p>
            <p style={{ margin: 0 }}>
              6.2 O Anexo III especificará detalhadamente o valor total dos honorários, a forma de pagamento aplicável
              (incluindo, quando houver, valor de entrada, número e valor das parcelas, datas de vencimento e meios de
              pagamento aceitos), bem como eventuais condições comerciais acordadas entre as partes.
            </p>
            <p style={{ margin: 0 }}>
              6.3 Salvo disposição expressa em contrário e por escrito, mediante aditivo contratual específico, não
              estão incluídos nos honorários contratados, sendo de responsabilidade exclusiva do CONTRATANTE sua
              contratação e pagamento, os seguintes serviços, taxas ou despesas:
            </p>
            <div style={{ paddingLeft: "4mm", display: "flex", flexDirection: "column", gap: "1.5mm" }}>
              <p style={{ margin: 0 }}>
                6.3.1 Projetos complementares, tais como: Projeto Estrutural (incluindo fundações), elétrico,
                hidrossanitário, prevenção e combate a incêndio, estudo de impacto de vizinhança, licenças ambientais, ou
                quaisquer outros projetos técnicos exigidos para execução da obra;
              </p>
              <p style={{ margin: 0 }}>
                6.3.2 Execução da obra, gerenciamento de obra ou responsabilidade técnica pela construção;
              </p>
              <p style={{ margin: 0 }}>
                6.3.3 Taxas, emolumentos e tributos relacionados à aprovação do projeto em órgãos públicos, prefeitura,
                condomínio, cartório, matrícula de obra no INSS ou quaisquer outros encargos legais;
              </p>
              <p style={{ margin: 0 }}>
                6.3.4 Custos de impressão, plotagem ou reprodução de plantas exigidas para protocolos ou aprovações.
              </p>
            </div>
            <p style={{ margin: 0 }}>
              6.4 Em caso de atraso no pagamento de qualquer parcela, incidirão as penalidades especificadas no Anexo
              III.
            </p>
            <p style={{ margin: 0 }}>
              6.5 Caso, durante o desenvolvimento do projeto, ocorram alterações que impactem diretamente o escopo
              contratado ou os critérios utilizados para cálculo dos honorários – como, por exemplo, alteração
              significativa da área construída, mudança do programa arquitetônico ou inclusão de novos ambientes – os
              honorários poderão ser revisados, com base nos critérios de cálculo originalmente utilizados para a
              precificação do projeto (ex: valor por m² ou percentual sobre o custo estimado da obra) ou, na ausência de
              critério específico, conforme a tabela de honorários do CAU/BR ou tabela de honorários dos CONTRATADOS,
              mediante apresentação de nova proposta formal, mediante formalização de aditivo contratual e atualização do
              Anexo III, com a concordância expressa das partes. Na ausência de concordância expressa do CONTRATANTE com
              os honorários revisados para alterações significativas de escopo, os CONTRATADOS terão o direito de
              suspender a execução dos serviços até que a questão seja resolvida ou, alternativamente, rescindir o
              contrato, sendo devidos os honorários proporcionais aos serviços já executados até o momento da
              suspensão/rescisão, sem prejuízo de eventual ressarcimento de custos comprovadamente incorridos em razão
              da rescisão, a ser apurado em regular processo de liquidação, excluindo-se a aplicação de multa
              compensatória.
            </p>
          </div>
        </div>

        {/* RODAPÉ */}
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
      {/* CLÁUSULAS - PÁGINA 3 */}
      <div
        className="page-break"
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
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            paddingBottom: "5mm",
            borderBottom: "0.3px solid #f0ede8",
            marginBottom: "10mm",
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
                fontSize: "8px",
                color: "#8B7355",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginTop: "2px",
              }}
            >
              Contrato Principal
            </div>
          </div>
        </div>

        {/* CLÁUSULA SÉTIMA */}
        <div style={{ marginBottom: "8mm" }}>
          <div style={{ display: "flex", gap: "4mm", marginBottom: "4mm", alignItems: "baseline" }}>
            <div
              style={{
                fontSize: "10px",
                color: "#888",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              Cláusula Sétima
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "#3A3A3A",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Das Obrigações e Responsabilidades do Contratante
            </div>
          </div>

          <div
            style={{
              fontSize: "9px",
              color: "#555",
              lineHeight: "1.7",
              textAlign: "justify",
              display: "flex",
              flexDirection: "column",
              gap: "2.5mm",
            }}
          >
            <p style={{ margin: 0, fontStyle: "italic", color: "#333", marginBottom: "1mm" }}>
              Compete ao CONTRATANTE, para o correto desenvolvimento dos serviços contratados:
            </p>
            <p style={{ margin: 0 }}>
              7.1 Fornecer aos CONTRATADOS, de forma completa, verdadeira e tempestiva, todos os documentos, informações
              e dados necessários ao desenvolvimento do projeto, conforme especificado no Anexo I (Escopo dos Serviços) e
              eventuais solicitações técnicas adicionais realizadas pelos CONTRATADOS.
            </p>
            <p style={{ margin: 0 }}>
              7.2 Analisar e aprovar as etapas do projeto apresentadas pelos CONTRATADOS dentro dos prazos estabelecidos
              no Anexo II (Cronograma), comunicando eventuais solicitações de ajustes de forma clara e objetiva.
            </p>
            <p style={{ margin: 0 }}>
              7.3 Colaborar ativamente durante o processo de desenvolvimento do projeto, respondendo às solicitações dos
              CONTRATADOS dentro dos prazos estipulados.
            </p>
            <div style={{ paddingLeft: "4mm", display: "flex", flexDirection: "column", gap: "1.5mm" }}>
              <p style={{ margin: 0 }}>
                7.3.1 A ausência de manifestação ou atraso na aprovação das etapas pelo CONTRATANTE poderá suspender os
                prazos contratuais dos CONTRATADOS, bem como gerar revisão do cronograma.
              </p>
              <p style={{ margin: 0 }}>
                7.3.2 Caso solicitações tardias de alteração impliquem retrabalho técnico em etapas já aprovadas ou
                concluídas, os CONTRATADOS poderão cobrar honorários adicionais, conforme previsto neste contrato.
              </p>
            </div>
            <p style={{ margin: 0 }}>
              7.4 Efetuar o pagamento dos honorários profissionais na forma, prazos e condições estabelecidas no Anexo
              III (Honorários e Condições de Pagamento).
            </p>
            <p style={{ margin: 0 }}>
              7.5 Obter todas as licenças, alvarás e aprovações necessárias junto aos órgãos públicos, condomínio ou
              demais instituições competentes para a execução da obra, arcando com todos os custos, taxas e emolumentos
              correspondentes, responsabilizando-se por apresentar os projetos complementares, quando exigidos.
            </p>
            <p style={{ margin: 0 }}>
              7.6 Contratar, obrigatoriamente, os profissionais responsáveis pelos projetos complementares indispensáveis
              à execução da obra, tais como:
            </p>
            <div
              style={{
                paddingLeft: "4mm",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5mm",
                fontSize: "8.5px",
                color: "#666",
              }}
            >
              <div>7.6.1 Projeto estrutural;</div>
              <div>7.6.2 Projetos elétrico;</div>
              <div>7.6.3 Projetos hidrossanitário;</div>
              <div>7.6.4 Projetos de fundação;</div>
              <div>7.6.5 Projetos prevenção e combate a incêndio;</div>
              <div>7.6.6 Entre outros necessários.</div>
            </div>
            <p style={{ margin: 0, fontSize: "8.5px", fontStyle: "italic", color: "#888", paddingLeft: "4mm" }}>
              7.6.7 A contratação e coordenação dos projetos complementares são de responsabilidade do CONTRATANTE, salvo
              se tais serviços forem expressamente contratados junto aos CONTRATADOS por meio de instrumento específico.
            </p>
            <p style={{ margin: 0 }}>
              7.7 Contratar empresa construtora, empreiteiros ou profissionais responsáveis pela execução da obra.
            </p>
            <p style={{ margin: 0 }}>
              7.8 O CONTRATANTE compromete-se a cumprir todas as obrigações previstas neste contrato e seus anexos, bem
              como a agir com boa-fé e colaboração para o bom desenvolvimento dos serviços. A executar a obra em
              conformidade com o projeto elaborado pelos CONTRATADOS, sendo vedadas alterações sem a prévia autorização
              técnica e formal dos autores do projeto, sob pena de responsabilização, nos termos do art. 615 do Código
              Civil.
            </p>
            <p style={{ margin: 0 }}>
              7.9 Qualquer alteração realizada na obra sem a prévia autorização dos CONTRATADOS isentará estes de
              qualquer responsabilidade técnica, civil ou legal decorrente das modificações realizadas, conforme previsto
              no art. 615 do Código Civil.
            </p>
            <p style={{ margin: 0 }}>
              7.10 Caso o CONTRATANTE deseje realizar alterações no projeto durante a execução da obra, deverá comunicar
              formalmente os CONTRATADOS para análise técnica e eventual atualização do projeto, podendo tal serviço ser
              objeto de contratação adicional.
            </p>
            <p style={{ margin: 0 }}>
              7.11 O projeto arquitetônico constitui obra intelectual protegida pela Lei nº 9.610/1998 e pela Lei nº
              12.378/2010.
            </p>
            <div style={{ paddingLeft: "4mm", display: "flex", flexDirection: "column", gap: "1.5mm" }}>
              <p style={{ margin: 0 }}>
                7.11.1 O CONTRATANTE compromete-se a não reproduzir, alterar, adaptar ou permitir a execução do projeto por
                terceiros sem autorização expressa dos CONTRATADOS.
              </p>
              <p style={{ margin: 0 }}>
                7.11.2 O descumprimento desta obrigação caracterizará violação de direitos autorais, sujeitando o
                CONTRATANTE ao pagamento de multa não inferior a 50% do valor total deste contrato, sem prejuízo de
                eventual indenização por perdas e danos e demais sanções legais cabíveis.
              </p>
            </div>
            <p style={{ margin: 0 }}>
              7.12 Quando houver identificação do autor do projeto por meio de placa de obra, material de divulgação ou
              qualquer outro meio, o CONTRATANTE compromete-se a não remover tal identificação sem autorização prévia dos
              CONTRATADOS.
            </p>
          </div>
        </div>

        {/* RODAPÉ */}
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
      {/* CLÁUSULAS - PÁGINA 4 */}
      <div
        className="page-break"
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
            marginBottom: "10mm",
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
              Contrato Principal
            </div>
          </div>
        </div>

        {/* CLÁUSULA OITAVA */}
        <div style={{ marginBottom: "8mm" }}>
          <div style={{ display: "flex", gap: "4mm", marginBottom: "4mm", alignItems: "baseline" }}>
            <div
              style={{
                fontSize: "10px",
                color: "#888",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              Cláusula Oitava
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "#3A3A3A",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Das Obrigações e Responsabilidades dos Contratados
            </div>
          </div>

          <div
            style={{
              fontSize: "9px",
              color: "#555",
              lineHeight: "1.7",
              textAlign: "justify",
              display: "flex",
              flexDirection: "column",
              gap: "2.5mm",
            }}
          >
            <p style={{ margin: 0, fontStyle: "italic", color: "#333", marginBottom: "1mm" }}>Compete aos CONTRATADOS:</p>
            <p style={{ margin: 0 }}>
              8.1 Prestar os serviços profissionais de arquitetura com diligência, competência e observância às normas
              técnicas aplicáveis, à legislação vigente ao Código de Ética e Disciplina do CAU/BR às boas práticas
              profissionais reconhecidas no setor.
            </p>
            <p style={{ margin: 0 }}>
              8.2 Elaborar o projeto arquitetônico em estrita conformidade com o escopo definido no Anexo I (Escopo dos
              Serviços), observando rigorosamente os prazos estabelecidos no Anexo II (Cronograma) e considerando
              integralmente as informações, documentos e diretrizes fornecidos pelo CONTRATANTE. O cumprimento das
              obrigações dos CONTRATADOS, incluindo prazos e qualidade do projeto, é condicionado ao adimplemento
              tempestivo e integral das obrigações do CONTRATANTE, notadamente no que se refere ao fornecimento de
              informações, documentos e obtenção de aprovações, conforme previsto na Cláusula Sétima.
            </p>
            <p style={{ margin: 0 }}>
              8.3 Manter o CONTRATANTE informado sobre o andamento do projeto, apresentando as etapas desenvolvidas para
              análise e aprovação dentro dos prazos previstos.
            </p>
            <p style={{ margin: 0 }}>
              8.4 Realizar as alterações e ajustes solicitados pelo CONTRATANTE, desde que tecnicamente viáveis e dentro
              dos limites estabelecidos neste contrato e em seus anexos, especialmente no que se refere à quantidade de
              revisões e à manutenção do conceito arquitetônico previamente aprovado.
            </p>
            <p style={{ margin: 0 }}>
              8.5 Manter sigilo sobre informações e documentos confidenciais do CONTRATANTE aos quais tiver acesso em
              razão deste contrato, comprometendo-se a utilizá-los exclusivamente para a execução dos serviços
              contratados.
            </p>
            <p style={{ margin: 0 }}>
              8.6 Emitir o Registro de Responsabilidade Técnica (RRT) referente aos serviços efetivamente prestados, nos
              termos da legislação aplicável.
            </p>
            <p style={{ margin: 0 }}>
              8.7 Elaborar o projeto observando a legislação urbanística municipal aplicável, o Código de Obras do
              Município e as normas técnicas pertinentes, incluindo, quando aplicável e dentro do escopo definido no Anexo
              I, as normas da Associação Brasileira de Normas Técnicas – ABNT, tais como: ABNT NBR 13532 – Elaboração de
              projetos de edificações, ABNT NBR 9050 – Acessibilidade a edificações, mobiliário, espaços e equipamentos
              urbanos, bem como demais normas técnicas pertinentes ao desenvolvimento do projeto arquitetônico, sempre em
              conformidade com as informações e diretrizes fornecidas pelo CONTRATANTE, e em observância ao Art. 25 da
              Lei nº 14.133/2021, que detalha o conteúdo obrigatório do edital, incluindo a observância das normas
              técnicas.
            </p>
            <p style={{ margin: 0 }}>
              8.8 Quando houver projetos complementares elaborados por terceiros, os CONTRATADOS poderão analisar tais
              documentos com a finalidade de identificar interferências aparentes com o projeto.
            </p>
            <p style={{ margin: 0, fontSize: "8.5px", fontStyle: "italic", color: "#888", paddingLeft: "4mm" }}>
              8.8.1 Essa análise possui caráter não exaustivo e não configura responsabilidade dos CONTRATADOS pela
              compatibilização integral entre todos os projetos técnicos envolvidos na obra, salvo quando tal serviço for
              expressamente contratado.
            </p>
            <p style={{ margin: 0 }}>
              8.9 Os CONTRATADOS poderão utilizar imagens, plantas, renders, fotografias e demais representações do
              projeto ou da obra para fins de portfólio profissional, divulgação institucional ou material de marketing,
              desde que respeitadas as disposições da Lei Geral de Proteção de Dados (Lei nº 13.709/2018) e garantido o
              anonimato de informações confidenciais do CONTRATANTE.
            </p>
            <p style={{ margin: 0, fontSize: "8.5px", fontStyle: "italic", color: "#888", paddingLeft: "4mm" }}>
              8.9.1 Na divulgação, os CONTRATADOS comprometem-se a preservar dados pessoais do CONTRATANTE que permitam
              sua identificação direta, em conformidade com a Lei Geral de Proteção de Dados – LGPD (Lei nº 13.709/2018).
            </p>
            <p style={{ margin: 0 }}>
              8.10 A responsabilidade dos CONTRATADOS limita-se à elaboração do projeto, nos termos deste contrato.
            </p>
            <p style={{ margin: 0, fontSize: "8.5px", fontStyle: "italic", color: "#888", paddingLeft: "4mm" }}>
              8.10.1 Eventuais problemas decorrentes da execução da obra, interpretação inadequada do projeto, utilização
              de materiais divergentes das especificações ou ausência de acompanhamento técnico durante a construção não
              poderão ser imputados aos CONTRATADOS, conforme disposto nas cláusulas específicas de limitação de
              responsabilidade deste contrato.
            </p>
          </div>
        </div>

        <div style={{ height: "10mm" }} />

        {/* CLÁUSULA NONA */}
        <div style={{ marginBottom: "8mm" }}>
          <div style={{ display: "flex", gap: "4mm", marginBottom: "4mm", alignItems: "baseline" }}>
            <div
              style={{
                fontSize: "10px",
                color: "#888",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              Cláusula Nona
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "#3A3A3A",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Dos Direitos Autorais
            </div>
          </div>

          <div
            style={{
              fontSize: "9px",
              color: "#555",
              lineHeight: "1.7",
              textAlign: "justify",
              display: "flex",
              flexDirection: "column",
              gap: "2.5mm",
            }}
          >
            <p style={{ margin: 0 }}>
              9.1 O Projeto desenvolvido no âmbito deste contrato constitui obra intelectual protegida pela Lei nº
              9.610/1998 (Lei de Direitos Autorais) e pela Lei nº 12.378/2010, sendo reconhecido como criação técnica e
              artística dos CONTRATADOS.
            </p>
            <p style={{ margin: 0 }}>
              9.2 Os direitos autorais morais e patrimoniais sobre o projeto pertencem aos CONTRATADOS, nos termos da Lei
              nº 9.610/1998, bem como da Lei nº 12.378/2010, e do art. 80 da Lei nº 13.303/2016, que garante a propriedade
              intelectual de projetos técnicos.
            </p>
            <p style={{ margin: 0 }}>
              9.3 O CONTRATANTE, mediante o pagamento integral dos honorários estabelecidos no Anexo III (Honorários e
              Condições de Pagamento), adquire o direito de utilizar o projeto exclusivamente para a execução da obra no
              imóvel especificado no Anexo I (Escopo Detalhado dos Serviços), observadas as condições e limitações
              estabelecidas neste contrato, e desde que respeitados os direitos autorais dos CONTRATADOS, conforme a Lei
              nº 9.610/1998.
            </p>
            <p style={{ margin: 0 }}>
              9.4 Sem autorização prévia e expressa dos CONTRATADOS, a qual poderá ser concedida ou negada a critério
              exclusivo dos CONTRATADOS, mesmo mediante oferta de pagamento de honorários adicionais, e mediante eventual
              pagamento de honorários adicionais a serem acordados entre as partes, o CONTRATANTE não poderá:
            </p>
            <div style={{ paddingLeft: "4mm", display: "flex", flexDirection: "column", gap: "1.5mm" }}>
              <p style={{ margin: 0 }}>9.4.1 Reproduzir o projeto em outro terreno ou imóvel;</p>
              <p style={{ margin: 0 }}>9.4.2 Reutilizar total ou parcialmente o projeto em outra obra;</p>
              <p style={{ margin: 0 }}>
                9.4.3 Ceder, vender, compartilhar, encaminhar ou disponibilizar o projeto, total ou parcialmente, a
                terceiros, incluindo construtoras, empreiteiros, engenheiros ou outros profissionais, sem autorização
                expressa dos CONTRATADOS, sendo o CONTRATANTE responsável solidariamente por qualquer violação de direitos
                autorais ou uso indevido cometido por tais terceiros que tenham recebido o projeto sem a devida
                autorização dos CONTRATADOS.
              </p>
              <p style={{ margin: 0 }}>9.4.4 Modificar o projeto ou permitir modificações por outros profissionais;</p>
              <p style={{ margin: 0 }}>9.4.5 Utilizar o projeto para fins comerciais, publicitários ou de incorporação imobiliária.</p>
            </div>
            <p style={{ margin: 0 }}>
              9.5 Qualquer alteração no projeto, seja durante a fase de desenvolvimento ou durante a execução da obra,
              somente poderá ser realizada mediante autorização expressa e por escrito dos CONTRATADOS.
            </p>
            <p style={{ margin: 0 }}>
              9.6 Aos CONTRATADOS é garantido o direito de utilizar imagens, plantas, renders e fotografias do projeto e da
              obra para fins de divulgação profissional em portfólio, redes sociais, apresentações institucionais ou
              material de marketing, desde que sejam preservadas a privacidade e os dados pessoais do CONTRATANTE, em
              conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados). Qualquer objeção do CONTRATANTE a
              esta divulgação deverá ser formalizada por escrito no prazo máximo de 15 (quinze) dias após a assinatura do
              contrato, devendo ser fundamentada em razões de segurança ou privacidade que não possam ser mitigadas pela
              anonimização ou ocultação de dados, sob pena de preclusão do direito de objeção, e da consequente
              autorização tácita para a divulgação nos termos previstos.
            </p>
            <p style={{ margin: 0 }}>
              9.7 Considera-se reprodução indevida a utilização total ou parcial do projeto para execução em outro imóvel
              ou empreendimento sem autorização dos CONTRATADOS.
            </p>
            <p style={{ margin: 0, fontSize: "8.5px", fontStyle: "italic", color: "#888", paddingLeft: "4mm" }}>
              9.7.1 Considera-se cópia a reprodução do projeto por pessoa física ou jurídica que não possua direitos de
              uso sobre a obra intelectual.
            </p>
            <p style={{ margin: 0 }}>
              9.8 Para fins deste contrato, considera-se plágio a reprodução substancial do projeto arquitetônico ou da
              obra dele resultante, incluindo pelo menos dois dos seguintes elementos:
            </p>
            <div style={{ paddingLeft: "4mm", display: "flex", flexDirection: "column", gap: "1mm" }}>
              <p style={{ margin: 0 }}>9.8.1 partido arquitetônico ou solução estrutural;</p>
              <p style={{ margin: 0 }}>9.8.2 organização funcional dos ambientes;</p>
              <p style={{ margin: 0 }}>9.8.3 volumetrias ou composição espacial interna ou externa.</p>
            </div>
            <p style={{ margin: 0 }}>
              9.9 O plágio poderá ser caracterizado mesmo que sejam alterados materiais, cores, acabamentos ou detalhes
              construtivos.
            </p>
            <p style={{ margin: 0 }}>
              9.10 A utilização indevida, reprodução, cópia ou plágio do projeto arquitetônico implicará obrigação de
              indenização aos CONTRATADOS, sem prejuízo das medidas judiciais cabíveis.
            </p>
            <p style={{ margin: 0 }}>
              9.11 Alterações realizadas no projeto ou na obra dele resultante sem autorização dos CONTRATADOS
              caracterizam violação de direitos autorais, nos termos da Lei nº 9.610/1998 (Lei de Direitos Autorais),
              sujeitando o responsável ao pagamento de indenização mínima equivalente a 3 (três) vezes o valor total dos
              honorários contratuais, sem prejuízo de outras sanções legais cabíveis.
            </p>
            <p style={{ margin: 0 }}>
              9.12 O projeto somente poderá ser utilizado para execução da obra após a quitação integral dos honorários
              previstos neste contrato. A utilização do projeto antes da quitação caracteriza uso indevido de obra
              intelectual.
            </p>
          </div>
        </div>

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
      {/* CLÁUSULAS - PÁGINA 5 */}
      <div
        className="page-break"
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
            marginBottom: "10mm",
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
              Contrato Principal
            </div>
          </div>
        </div>

        {/* CLÁUSULA DÉCIMA */}
        <div style={{ marginBottom: "8mm" }}>
          <div style={{ display: "flex", gap: "4mm", marginBottom: "4mm", alignItems: "baseline" }}>
            <div
              style={{
                fontSize: "10px",
                color: "#888",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              Cláusula Décima
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "#3A3A3A",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Da Responsabilidade Técnica
            </div>
          </div>

          <div
            style={{
              fontSize: "9px",
              color: "#555",
              lineHeight: "1.7",
              textAlign: "justify",
              display: "flex",
              flexDirection: "column",
              gap: "2.5mm",
            }}
          >
            <p style={{ margin: 0 }}>
              10.1 A responsabilidade técnica dos CONTRATADOS, no âmbito deste contrato, restringe-se à elaboração do
              projeto, conforme o escopo definido no Anexo I (Escopo Detalhado dos Serviços), observadas as normas
              técnicas aplicáveis, a legislação vigente e as diretrizes do contratante.
            </p>
            <p style={{ margin: 0 }}>
              10.2 A responsabilidade integral pela execução da obra, incluindo a contratação de mão de obra,
              construtores, fornecedores e outros profissionais necessários à construção, recai exclusivamente sobre o
              CONTRATANTE.
            </p>
            <p style={{ margin: 0, fontStyle: "italic", color: "#333" }}>10.3 Os CONTRATADOS não se responsabilizam por:</p>
            <div style={{ paddingLeft: "4mm", display: "flex", flexDirection: "column", gap: "1.5mm" }}>
              <p style={{ margin: 0 }}>
                10.3.1 A execução da obra, que é de inteira responsabilidade do CONTRATANTE e/ou dos profissionais por ele
                contratados.
              </p>
              <p style={{ margin: 0 }}>
                10.3.2 A qualidade dos materiais utilizados na obra, que é de inteira responsabilidade do CONTRATANTE e/ou
                dos fornecedores.
              </p>
              <p style={{ margin: 0 }}>
                10.3.3 O cumprimento dos prazos de execução da obra, que é de inteira responsabilidade do CONTRATANTE e/ou
                dos profissionais por ele contratados.
              </p>
              <p style={{ margin: 0 }}>
                10.3.4 Eventuais vícios ou defeitos na obra decorrentes de falhas na execução, na qualidade dos materiais
                ou no cumprimento dos prazos.
              </p>
              <p style={{ margin: 0 }}>
                10.3.5 A compatibilização do projeto arquitetônico com os projetos complementares (estrutural, elétrico,
                hidrossanitário etc.), que é de inteira responsabilidade do CONTRATANTE e/ou dos profissionais por ele
                contratados, salvo se expressamente previsto em contrário no Anexo I.
              </p>
            </div>
            <p style={{ margin: 0 }}>
              10.4 Caso o CONTRATANTE realize alterações no projeto arquitetônico sem a prévia e expressa autorização por
              escrito dos CONTRATADOS, estes ficarão isentos de qualquer responsabilidade técnica, civil ou legal
              decorrente dessas modificações, conforme o art. 615 do Código Civil.
            </p>
            <p style={{ margin: 0 }}>
              10.5 A execução da obra em desacordo com o Projeto aprovado, ou sem observância das orientações técnicas
              fornecidas, exime os CONTRATADOS de qualquer responsabilidade civil, técnica ou legal sobre eventuais
              problemas construtivos, estruturais ou funcionais da edificação, desde que comprovada a relação de
              causalidade entre o descumprimento das orientações e os problemas apresentados.
            </p>
            <p style={{ margin: 0 }}>
              10.6 O presente contrato não inclui serviços de acompanhamento técnico de obra, fiscalização ou
              gerenciamento de execução, os quais somente poderão ser realizados mediante contratação específica e
              formalização de contrato adicional.
            </p>
          </div>
        </div>

        <div style={{ height: "10mm" }} />

        {/* CLÁUSULA DÉCIMA PRIMEIRA */}
        <div style={{ marginBottom: "8mm" }}>
          <div style={{ display: "flex", gap: "4mm", marginBottom: "4mm", alignItems: "baseline" }}>
            <div
              style={{
                fontSize: "10px",
                color: "#888",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              Cláusula Décima Primeira
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "#3A3A3A",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Da Rescisão Contratual
            </div>
          </div>

          <div
            style={{
              fontSize: "9px",
              color: "#555",
              lineHeight: "1.7",
              textAlign: "justify",
              display: "flex",
              flexDirection: "column",
              gap: "2.5mm",
            }}
          >
            <p style={{ margin: 0 }}>
              O presente contrato poderá ser rescindido por qualquer das partes, mediante notificação formal por escrito,
              observadas as condições e prazos estabelecidos nesta cláusula, nas demais disposições contratuais
              aplicáveis e na legislação vigente.
            </p>
            <p style={{ margin: 0, fontWeight: 500, color: "#3A3A3A" }}>11.1 RESCISÃO POR INICIATIVA DO CONTRATANTE</p>
            <div style={{ paddingLeft: "4mm", display: "flex", flexDirection: "column", gap: "1.5mm" }}>
              <p style={{ margin: 0 }}>11.1.1 Caso o CONTRATANTE opte por rescindir o contrato antes da conclusão total dos serviços:</p>
              <div style={{ paddingLeft: "4mm", display: "flex", flexDirection: "column", gap: "1mm" }}>
                <p style={{ margin: 0 }}>I – Os valores pagos até a data da rescisão não serão devolvidos, considerando que correspondem às etapas já executadas.</p>
                <p style={{ margin: 0 }}>II – O CONTRATANTE deverá quitar o valor proporcional referente às etapas em andamento ou já executadas e ainda não faturadas. O cálculo deste valor proporcional será realizado com base no percentual de conclusão da etapa, conforme avaliação dos CONTRATADOS e/ou marcos de entrega pré-definidos, ou um percentual fixo da etapa, detalhado no Anexo III – Honorários e Condições de Pagamento, a ser acordado entre as partes.</p>
                <p style={{ margin: 0 }}>III – Será aplicada multa compensatória de 20% sobre o saldo contratual remanescente, a título de compensação pela interrupção dos serviços.</p>
                <p style={{ margin: 0 }}>IV – Os documentos, plantas, arquivos digitais e demais materiais produzidos pelos CONTRATADOS somente poderão ser utilizados pelo CONTRATANTE após a quitação integral dos valores devidos até a data da rescisão.</p>
              </div>
              <p style={{ margin: 0 }}>11.1.2 Após a formalização da rescisão e quitação dos valores pendentes, os CONTRATADOS entregarão ao CONTRATANTE os materiais correspondentes às etapas efetivamente concluídas até a data da rescisão.</p>
              <p style={{ margin: 0 }}>11.1.3 A partir da comunicação formal de rescisão, os CONTRATADOS poderão suspender imediatamente o desenvolvimento dos serviços.</p>
              <p style={{ margin: 0 }}>11.1.4 Em caso de rescisão por culpa do CONTRATANTE, este será responsável por reembolsar os CONTRATADOS por todos os custos e despesas comprovadamente incorridos para a cobrança dos valores devidos, incluindo honorários advocatícios extrajudiciais e judiciais, custas judiciais e despesas processuais.</p>
            </div>

            <p style={{ margin: 0, fontWeight: 500, color: "#3A3A3A" }}>11.2 RESCISÃO POR INICIATIVA DOS CONTRATADOS</p>
            <div style={{ paddingLeft: "4mm", display: "flex", flexDirection: "column", gap: "1.5mm" }}>
              <p style={{ margin: 0 }}>11.2.1 Os CONTRATADOS poderão rescindir o presente contrato nos seguintes casos, mediante notificação prévia de 15 (quinze) dias, sem prejuízo de outras causas previstas em lei:</p>
              <div style={{ paddingLeft: "4mm", display: "flex", flexDirection: "column", gap: "1mm" }}>
                <p style={{ margin: 0 }}>I – Atraso superior a 30 (trinta) dias no pagamento de qualquer valor previsto neste contrato;</p>
                <p style={{ margin: 0 }}>II – Descumprimento de obrigações contratuais por parte do CONTRATANTE;</p>
                <p style={{ margin: 0 }}>III – Impossibilidade técnica ou legal de continuidade do projeto;</p>
                <p style={{ margin: 0 }}>IV – Falta de fornecimento, pelo CONTRATANTE, de informações, documentos ou definições necessárias ao desenvolvimento do projeto, por prazo superior a 30 (trinta) dias.</p>
              </div>
              <p style={{ margin: 0, fontSize: "8.5px", fontStyle: "italic", color: "#888" }}>
                Parágrafo 1º – Nesses casos, serão devidos aos CONTRATADOS os valores correspondentes às etapas já executadas ou em andamento até a data da rescisão.
              </p>
              <p style={{ margin: 0, fontSize: "8.5px", fontStyle: "italic", color: "#888" }}>
                Parágrafo 2º – Os CONTRATADOS poderão suspender imediatamente os serviços em caso de inadimplência ou descumprimento contratual pelo CONTRATANTE, até a regularização da situação.
              </p>
              <p style={{ margin: 0, fontSize: "8.5px", fontStyle: "italic", color: "#888" }}>
                Parágrafo 3º – A entrega de documentos, plantas, arquivos digitais ou quaisquer materiais produzidos ficarão condicionada à quitação integral dos valores devidos até a data da rescisão.
              </p>
              <p style={{ margin: 0, fontSize: "8.5px", fontStyle: "italic", color: "#888" }}>
                Parágrafo 4º – A rescisão não afasta a aplicação das cláusulas relativas aos direitos autorais, permanecendo vedada a utilização do projeto sem autorização expressa dos CONTRATADOS.
              </p>
            </div>
            <p style={{ margin: 0 }}>
              11.3 Na hipótese de rescisão do presente contrato sem a quitação integral dos honorários devidos, fica expressamente vedada ao CONTRATANTE a utilização total ou parcial do projeto arquitetônico desenvolvido pelos CONTRATADOS, sob pena de caracterização de ilícito de violação de direitos autorais e perdas e danos, conforme a Lei nº 9.610/1998.
            </p>
            <p style={{ margin: 0 }}>
              11.4 Após a rescisão do contrato, os CONTRATADOS não terão qualquer responsabilidade técnica sobre eventuais modificações ou intervenções realizadas no projeto ou na obra. execuções ou utilizações do projeto realizadas sem sua participação.
            </p>
          </div>
        </div>

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
      {/* CLÁUSULAS - PÁGINA 6 */}
      <div
        className="page-break"
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
            marginBottom: "10mm",
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
              Contrato Principal
            </div>
          </div>
        </div>

        {/* CLÁUSULA DÉCIMA SEGUNDA */}
        <div style={{ marginBottom: "8mm" }}>
          <div style={{ display: "flex", gap: "4mm", marginBottom: "4mm", alignItems: "baseline" }}>
            <div
              style={{
                fontSize: "10px",
                color: "#888",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              Cláusula Décima Segunda
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "#3A3A3A",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Considerações Finais
            </div>
          </div>

          <div
            style={{
              fontSize: "9px",
              color: "#555",
              lineHeight: "1.7",
              textAlign: "justify",
              display: "flex",
              flexDirection: "column",
              gap: "2.5mm",
            }}
          >
            <p style={{ margin: 0, fontStyle: "italic", color: "#333" }}>
              Esta cláusula estabelece disposições complementares aplicáveis à execução do presente contrato e aos anexos
              que o integram.
            </p>
            <p style={{ margin: 0 }}>
              12.1 Execução da obra decorrente do projeto objeto deste contrato não está incluída no escopo dos serviços
              contratados, sendo que eventual contratação de acompanhamento, gerenciamento ou execução da obra deverá ser
              objeto de contrato específico e independente.
            </p>
            <p style={{ margin: 0 }}>
              12.2 Os CONTRATADOS, na qualidade de autor do projeto, ficam isentos de quaisquer responsabilidades técnicas
              ou legais decorrentes de alterações executadas na obra sem sua prévia ciência e autorização por escrito. É
              obrigação do CONTRATANTE solicitar e obter tal autorização, por escrito, antes de qualquer alteração, sob
              pena de responsabilização. Os CONTRATADOS poderão adotar as medidas legais cabíveis para proteção de seus
              direitos autorais e de sua responsabilidade profissional, incluindo, mas não se limitando a ações de
              reparação por danos morais e materiais, bem como a aplicação do disposto no art. 619 do Código Civil.
            </p>
            <p style={{ margin: 0 }}>
              12.3 O início dos serviços objeto deste contrato está condicionado à assinatura do presente instrumento e à
              comprovação do pagamento da primeira parcela ou sinal contratual, devendo o comprovante ser encaminhado aos
              CONTRATADOS.
            </p>
            <p style={{ margin: 0 }}>
              12.4 Os atendimentos ao CONTRATANTE poderão ocorrer presencialmente, mediante agendamento prévio com
              antecedência mínima de 7 (sete) dias úteis, dentro do horário comercial, compreendido entre 08h00 às 12h00
              e 14h00 às 18h00, de segunda a sexta-feira. Adicionalmente, os atendimentos poderão ocorrer de forma
              virtual (por videoconferência, por exemplo), mantendo a necessidade de agendamento prévio e horário
              comercial.
            </p>
            <p style={{ margin: 0, fontSize: "8.5px", fontStyle: "italic", color: "#888", paddingLeft: "4mm" }}>
              12.4.1 Caso seja necessária visita presencial ao local da obra ou deslocamento externo, será aplicada a taxa
              de visita técnica a ser previamente acordada entre as partes ou conforme tabela de honorários dos
              CONTRATADOS prevista neste contrato.
            </p>
            <p style={{ margin: 0 }}>
              12.5 Todas as comunicações relevantes relacionadas ao presente contrato, incluindo aprovações de etapas,
              solicitações de alterações e notificações contratuais, deverão ser realizadas obrigatoriamente por e-mail ou
              outro meio eletrônico formal, sendo consideradas válidas para fins contratuais.
            </p>
            <p style={{ margin: 0 }}>
              12.6 O CONTRATANTE compromete-se a fornecer todas as informações, documentos e definições necessárias para o
              desenvolvimento do projeto no prazo máximo de 5 (cinco) dias úteis a contar da solicitação, salvo quando
              prazos específicos forem definidos em outras cláusulas deste contrato.
            </p>
            <p style={{ margin: 0, fontSize: "8.5px", fontStyle: "italic", color: "#888", paddingLeft: "4mm" }}>
              12.6.1 Eventuais atrasos decorrentes da não entrega dessas informações poderão impactar diretamente o
              cronograma do projeto, sem que isso caracterize descumprimento contratual por parte dos CONTRATADOS.
            </p>
            <p style={{ margin: 0 }}>
              12.7 Caso ocorram alterações na legislação urbanística ou nas normas técnicas aplicáveis após a conclusão do
              projeto, eventuais adequações necessárias poderão ser objeto de aditivo contratual, conforme previsto no
              Art. 81 da Lei nº 13.303/2016, que estabelece as condições para alteração contratual por adequação técnica.
            </p>
          </div>
        </div>

        <div style={{ height: "10mm" }} />

        {/* CLÁUSULA DÉCIMA TERCEIRA */}
        <div style={{ marginBottom: "8mm" }}>
          <div style={{ display: "flex", gap: "4mm", marginBottom: "4mm", alignItems: "baseline" }}>
            <div
              style={{
                fontSize: "10px",
                color: "#888",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              Cláusula Décima Terceira
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "#3A3A3A",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Da Limitação de Responsabilidade Civil do Projeto
            </div>
          </div>

          <div
            style={{
              fontSize: "9px",
              color: "#555",
              lineHeight: "1.7",
              textAlign: "justify",
              display: "flex",
              flexDirection: "column",
              gap: "2.5mm",
            }}
          >
            <p style={{ margin: 0 }}>
              13.1 A responsabilidade civil dos CONTRATADOS limita-se à elaboração do projeto arquitetônico objeto do
              presente contrato, estritamente conforme as informações, documentos e diretrizes fornecidas pelo
              CONTRATANTE, cuja veracidade, precisão e completude são de sua exclusiva responsabilidade. Custos
              adicionais, atrasos no cronograma ou necessidade de retrabalho decorrentes da imprecisão, omissão,
              incompletude ou inveracidade das informações, documentos e diretrizes fornecidas pelo CONTRATANTE serão de
              sua exclusiva responsabilidade, gerando a cobrança de honorários complementares e revisão de prazos para os
              CONTRATADOS, mediante apresentação de justificativa técnica e planilha de custos.
            </p>
            <p style={{ margin: 0 }}>
              13.2 Os CONTRATADOS não poderão ser responsabilizados por danos, prejuízos ou consequências decorrentes de
              modificações, execuções ou utilizações do projeto realizadas sem sua participação ou aprovação formal, bem
              como por informações incorretas ou omissões nas especificações fornecidas pelo CONTRATANTE.
            </p>
            <div style={{ paddingLeft: "4mm", display: "flex", flexDirection: "column", gap: "1.5mm" }}>
              <p style={{ margin: 0 }}>I – Execução da obra realizada por profissionais, empresas ou prestadores de serviço que não possuam vínculo contratual com os CONTRATADOS;</p>
              <p style={{ margin: 0 }}>II – Utilização de materiais ou técnicas construtivas divergentes das especificações constantes no projeto;</p>
              <p style={{ margin: 0 }}>III – modificações realizadas no projeto ou durante a execução da obra sem autorização prévia e expressa dos CONTRATADOS;</p>
              <p style={{ margin: 0 }}>IV – Falhas construtivas, estruturais, elétricas, hidráulicas ou de quaisquer outras instalações decorrentes da execução da obra;</p>
              <p style={{ margin: 0 }}>V – Informações técnicas incorretas, incompletas ou omissas fornecidas pelo CONTRATANTE ou por terceiros;</p>
              <p style={{ margin: 0 }}>VI – Descumprimento de normas técnicas, urbanísticas, legais ou regulamentares durante a execução da obra.</p>
              <p style={{ margin: 0 }}>VII – alterações na legislação urbanística, normas técnicas ou regulamentares que entrem em vigor ou sejam interpretadas de forma diversa após a aprovação final do projeto pelos órgãos competentes ou pelo CONTRATANTE, e que não eram previsíveis no momento da elaboração do projeto.</p>
              <p style={{ margin: 0 }}>VIII – eventos de força maior ou caso fortuito, incluindo, mas não se limitando a desastres naturais, pandemias, greves, atos de terrorismo ou guerra, que impeçam ou dificultem a execução do projeto ou da obra.</p>
            </div>
            <p style={{ margin: 0 }}>
              13.3 A responsabilidade civil dos CONTRATADOS, caso configurada, estará limitada ao valor total dos
              honorários efetivamente recebidos em contraprestação ao serviço objeto deste contrato, excluindo-se
              expressamente a cobertura de indenizações por danos indiretos, lucros cessantes, perdas financeiras ou
              quaisquer outros prejuízos que possam advir da execução da obra.
            </p>
            <p style={{ margin: 0 }}>
              13.4 Os CONTRATADOS não assumem responsabilidade técnica pela execução da obra, gerenciamento, fiscalização
              ou acompanhamento da construção, salvo se tais serviços forem contratados de forma expressa por meio de
              instrumento contratual específico.
            </p>
          </div>
        </div>

        <div style={{ height: "10mm" }} />

        {/* CLÁUSULA DÉCIMA QUARTA */}
        <div style={{ marginBottom: "12mm" }}>
          <div style={{ display: "flex", gap: "4mm", marginBottom: "4mm", alignItems: "baseline" }}>
            <div
              style={{
                fontSize: "10px",
                color: "#888",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              Cláusula Décima Quarta
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "#3A3A3A",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Do Foro
            </div>
          </div>

          <div
            style={{
              fontSize: "9px",
              color: "#555",
              lineHeight: "1.7",
              textAlign: "justify",
              display: "flex",
              flexDirection: "column",
              gap: "2.5mm",
            }}
          >
            <p style={{ margin: 0 }}>
              14.1 Para dirimir quaisquer controvérsias oriundas do presente contrato, as partes elegem o foro da comarca
              de São José dos Campos - SP, com renúncia expressa a qualquer outro, por mais privilegiado que seja salvo
              disposição legal em contrário.
            </p>
            <p style={{ margin: 0 }}>
              14.2 As partes, em comum acordo, poderão submeter eventuais conflitos à mediação, conciliação ou
              arbitragem, em conformidade com a Lei nº 9.307/96 e demais legislações aplicáveis. É condição para o
              ajuizamento de qualquer medida judicial ou arbitral que as partes busquem, previamente, a resolução dos
              conflitos por meio de mediação ou conciliação, durante um período mínimo de 30 (trinta) dias, contados a
              partir da notificação de uma parte à outra sobre a existência do conflito, sob pena de extinção do processo
              sem resolução do mérito.
            </p>
            <p style={{ margin: 0 }}>
              14.3 O presente contrato constitui título executivo extrajudicial, nos termos da legislação brasileira
              aplicável.
            </p>
          </div>
        </div>

        {/* ASSINATURAS */}
        <div style={{ marginTop: "10mm" }}>
          <p style={{ fontSize: "9px", color: "#555", textAlign: "justify", marginBottom: "15mm" }}>
            E, por estarem assim justas e contratadas, as partes assinam o presente instrumento em 02 (duas) vias de igual
            teor e forma, juntamente com duas testemunhas, para que produza seus jurídicos e legais efeitos, obrigando-se
            as partes, seus herdeiros e sucessores.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20mm", marginTop: "10mm" }}>
            <div style={{ borderTop: "0.5px solid #3A3A3A", paddingTop: "4mm", textAlign: "center" }}>
              <div style={{ fontSize: "9px", color: "#3A3A3A", fontWeight: 500 }}>{contrato.nome_cliente}</div>
              <div style={{ fontSize: "7px", color: "#888", textTransform: "uppercase", marginTop: "2px" }}>
                Contratante
              </div>
            </div>
            <div style={{ borderTop: "0.5px solid #3A3A3A", paddingTop: "4mm", textAlign: "center" }}>
              <div style={{ fontSize: "9px", color: "#3A3A3A", fontWeight: 500 }}>NL Arquitetos</div>
              <div style={{ fontSize: "7px", color: "#888", textTransform: "uppercase", marginTop: "2px" }}>
                Contratados
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20mm", marginTop: "20mm" }}>
            <div style={{ borderTop: "0.5px solid #ccc", paddingTop: "4mm", textAlign: "center" }}>
              <div style={{ fontSize: "7px", color: "#888", textTransform: "uppercase" }}>Testemunha 1</div>
              <div style={{ fontSize: "7px", color: "#ccc", marginTop: "2px" }}>CPF: _________________</div>
            </div>
            <div style={{ borderTop: "0.5px solid #ccc", paddingTop: "4mm", textAlign: "center" }}>
              <div style={{ fontSize: "7px", color: "#888", textTransform: "uppercase" }}>Testemunha 2</div>
              <div style={{ fontSize: "7px", color: "#ccc", marginTop: "2px" }}>CPF: _________________</div>
            </div>
          </div>
        </div>

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
