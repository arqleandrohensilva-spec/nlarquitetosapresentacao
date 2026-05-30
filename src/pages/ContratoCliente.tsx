import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const PREVIEW: any = {
  numero: "NL-2026-001", subtitulo: "", nome_cliente: "Jonathan Borges de Moura",
  cpf_cliente: "425.437.568-92", nacionalidade: "brasileiro", estado_civil: "casado",
  profissao: "Engenheiro", endereco_cliente: "Rua das Flores, 450 — SJC/SP",
  tipo_projeto: "ARQ+INT", endereco_imovel: "Av. Vitória Régia, 120 — SJC/SP",
  data: "25 de maio de 2026", plano: "Executivo", area_construida: "300",
  area_terreno: "500", matricula: "12.345", cartorio: "1º Cartório de SJC",
  prazo_briefing: "5", prazo_estudo: "15", prazo_legal: "10", prazo_executivo: "30",
  prazo_semanas: "12", prazo_total_dias: "65",
  valor_total: "33.687,22", valor_total_extenso: "trinta e três mil, seiscentos e oitenta e sete reais e vinte e dois centavos",
  marco1_valor: "10.106,17", marco1_extenso: "dez mil, cento e seis reais e dezessete centavos",
  marco2_valor: "13.474,89", marco2_extenso: "treze mil, quatrocentos e setenta e quatro reais e oitenta e nove centavos",
  marco3_valor: "10.106,16", marco3_extenso: "dez mil, cento e seis reais e dezesseis centavos",
};

const S = {
  page: { background: "#fff", width: "210mm", margin: "0 auto", fontFamily: "'DM Mono',monospace", color: "#3A3A3A" } as React.CSSProperties,
  capaWrap: { minHeight: "297mm", display: "flex", flexDirection: "column" as const, padding: "0" },
  header: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: "5mm", borderBottom: "0.3px solid #f0ede8", marginBottom: "7mm" },
  section: { padding: "20mm 22mm 18mm", borderTop: "none" } as React.CSSProperties,
  clauseTitle: { display: "flex", gap: "4mm", marginBottom: "4mm", alignItems: "baseline" },
  clauseNum: { fontSize: "10px", color: "#888", textTransform: "uppercase" as const, fontWeight: 500, whiteSpace: "nowrap" as const },
  clauseName: { fontSize: "10px", color: "#3A3A3A", textTransform: "uppercase" as const, fontWeight: 500 },
  body: { fontSize: "9px", color: "#555", lineHeight: "1.8", textAlign: "justify" as const, display: "flex", flexDirection: "column" as const, gap: "2.5mm" },
  p: { margin: 0 } as React.CSSProperties,
  pi: { margin: 0, fontStyle: "italic" as const, color: "#888", paddingLeft: "4mm" } as React.CSSProperties,
  clauseBlock: { marginBottom: "8mm" },
  footer: { marginTop: "auto", paddingTop: "4mm", borderTop: "0.3px solid #f0ede8", display: "flex", justifyContent: "space-between" },
  footerL: { fontSize: "8px", color: "#ccc", letterSpacing: "0.15em", textTransform: "uppercase" as const },
  footerR: { fontSize: "8px", color: "#8B7355", letterSpacing: "0.15em", textTransform: "uppercase" as const },
  sectionLabel: { fontSize: "8px", color: "#8B7355", letterSpacing: "0.3em", textTransform: "uppercase" as const, marginBottom: "2.5mm", marginTop: "4mm" },
  pageHeader: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: "5mm", borderBottom: "0.3px solid #f0ede8", marginBottom: "10mm" },
};

const PageHeader = ({ numero, label }: { numero: string; label: string }) => (
  <div style={S.pageHeader}>
    <div style={{ fontSize: "7px", color: "#bbb", letterSpacing: "0.2em", textTransform: "uppercase" }}>NL Arquitetos</div>
    <div style={{ textAlign: "right" }}>
      <div style={{ fontSize: "7px", color: "#bbb", letterSpacing: "0.2em", textTransform: "uppercase" }}>{numero}</div>
      <div style={{ fontSize: "8px", color: "#8B7355", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "2px" }}>{label}</div>
    </div>
  </div>
);

const Footer = () => (
  <div style={S.footer}>
    <div style={S.footerL}>NL Arquitetos · São José dos Campos, SP</div>
    <div style={S.footerR}>A Arquitetura como Decisão</div>
  </div>
);

const Clause = ({ num, name, children }: { num: string; name: string; children: React.ReactNode }) => (
  <div style={S.clauseBlock}>
    <div style={S.clauseTitle}>
      <div style={S.clauseNum}>{num}</div>
      <div style={S.clauseName}>{name}</div>
    </div>
    <div style={S.body}>{children}</div>
  </div>
);

export default function ContratoCliente() {
  const { slug } = useParams();
  const [contrato, setContrato] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug === "preview") { setContrato(PREVIEW); setLoading(false); return; }
    supabase.from("contratos_clientes").select("*").eq("slug", slug).single()
      .then(({ data }) => { setContrato(data); setLoading(false); });
  }, [slug]);

  if (loading) return <div style={{ background: "#fff", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "monospace", fontSize: "11px", color: "#bbb" }}>CARREGANDO...</div>;
  if (!contrato) return <div style={{ background: "#fff", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "monospace", fontSize: "11px", color: "#bbb" }}>CONTRATO NÃO ENCONTRADO</div>;

  const c = contrato;
  const tipoArqInt = c.tipo_projeto === "ARQ+INT" ? "[X]" : "[ ]";
  const tipoCom = c.tipo_projeto === "Comercial" ? "[X]" : "[ ]";
  const tipoInt = c.tipo_projeto === "Interiores" ? "[X]" : "[ ]";
  const planoExec = c.plano !== "Completo" ? "[X]" : "[ ]";
  const planoComp = c.plano === "Completo" ? "[X]" : "[ ]";

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Mono:wght@300;400&display=swap');
        html, body { background: #ffffff !important; }
        @media print {
          html, body { background: #ffffff !important; margin: 0 !important; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          [data-pdf-hide] { display: none !important; }
          .nova-pagina { page-break-before: always !important; }
          .no-break { page-break-inside: avoid !important; }
          p { orphans: 3; widows: 3; }
          @page { size: A4; margin: 0; }
        }
      `}</style>

      <div data-pdf-hide style={{ position: "fixed", top: 16, right: 16, zIndex: 50 }}>
        <button onClick={() => window.print()} style={{ background: "#8B7355", color: "#fff", border: "none", padding: "8px 20px", fontFamily: "'DM Mono',monospace", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", cursor: "pointer" }}>
          ↓ BAIXAR PDF
        </button>
      </div>

      <div style={S.page}>
        <div style={S.capaWrap}>
          <div style={{ display: "flex", justifyContent: "flex-end", padding: "32px 44px 0" }}>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "7px", color: "#bbb", letterSpacing: "0.2em", textTransform: "uppercase" }}>Contrato</div>
              <div style={{ fontSize: "10px", color: "#8B7355", letterSpacing: "0.12em", marginTop: "2px" }}>{c.numero}</div>
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 60px" }}>
            <div style={{ fontSize: "32px", fontWeight: 400, color: "#3A3A3A", letterSpacing: "0.15em" }}>
              NL<span style={{ color: "#8B7355", marginLeft: "10px" }}>ARQUITETOS</span>
            </div>
            <div style={{ fontSize: "7.5px", color: "#bbb", letterSpacing: "0.25em", textTransform: "uppercase", marginTop: "10px", textAlign: "center" }}>
              Contrato de Prestação de Serviços Técnicos de Arquitetura
            </div>
            <div style={{ width: "32px", height: "1px", background: "#8B7355", margin: "28px auto" }} />
            <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "13px", color: "#999", letterSpacing: "0.22em", textTransform: "uppercase", textAlign: "center", lineHeight: 1.8 }}>
              Instrumento Particular{c.subtitulo ? <><br />{c.subtitulo}</> : null}
            </div>
          </div>
          <div style={{ padding: "0 64px", marginTop: "auto" }}>
            {[
              { label: "Contratante", val: c.nome_cliente },
              { label: "CPF", val: c.cpf_cliente },
              { label: "Tipo de Projeto", val: c.tipo_projeto },
              { label: "End. Obra", val: c.endereco_imovel },
              { label: "Data", val: c.data },
            ].map((f, i, arr) => (
              <div key={f.label} style={{ display: "flex", alignItems: "baseline", padding: "10px 0", borderBottom: i < arr.length - 1 ? "0.5px solid #f0ede8" : "none" }}>
                <div style={{ fontSize: "7.5px", color: "#bbb", letterSpacing: "0.2em", textTransform: "uppercase", width: "120px", flexShrink: 0 }}>{f.label}</div>
                <div style={{ fontSize: "10px", color: "#3A3A3A", letterSpacing: "0.05em" }}>{f.val}</div>
              </div>
            ))}
          </div>
          <div style={{ padding: "28px 64px 36px", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", marginTop: "24px" }}>
            <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "13px", fontStyle: "italic", color: "#bbb" }}>"A arquitetura como decisão."</div>
            <div style={{ fontSize: "8px", color: "#ddd", letterSpacing: "0.22em", textTransform: "uppercase" }}>NL Arquitetos · São José dos Campos, SP</div>
          </div>
        </div>
      </div>
    </div>
  );
}
