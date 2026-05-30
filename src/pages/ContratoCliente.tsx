import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const S = {
  page: { background: "#fff", width: "210mm", margin: "0 auto", fontFamily: "'DM Mono',monospace", color: "#3A3A3A" } as React.CSSProperties,
  capaWrap: { minHeight: "250mm", display: "flex", flexDirection: "column" as const, padding: "0" },
  section: { padding: "0" } as React.CSSProperties,
  clauseTitle: { display: "flex", gap: "4mm", marginBottom: "4mm", alignItems: "baseline" },
  clauseNum: { fontSize: "10px", color: "#888", textTransform: "uppercase" as const, fontWeight: 500, whiteSpace: "nowrap" as const },
  clauseName: { fontSize: "10px", color: "#3A3A3A", textTransform: "uppercase" as const, fontWeight: 500 },
  body: { fontSize: "9px", color: "#555", lineHeight: "1.8", textAlign: "justify" as const, display: "flex", flexDirection: "column" as const, gap: "2.5mm" },
  p: { margin: 0 } as React.CSSProperties,
  pi: { margin: 0, fontStyle: "italic" as const, color: "#888", paddingLeft: "4mm" } as React.CSSProperties,
  clauseBlock: { marginBottom: "8mm" },
  footer: { marginTop: "20mm", paddingTop: "4mm", borderTop: "0.3px solid #f0ede8", display: "flex", justifyContent: "space-between" },
  footerL: { fontSize: "8px", color: "#ccc", letterSpacing: "0.15em", textTransform: "uppercase" as const },
  footerR: { fontSize: "8px", color: "#8B7355", letterSpacing: "0.15em", textTransform: "uppercase" as const },
  sectionLabel: { fontSize: "8px", color: "#8B7355", letterSpacing: "0.3em", textTransform: "uppercase" as const, marginBottom: "2.5mm", marginTop: "10mm" },
};

export default function ContratoCliente() {
  const { slug } = useParams();
  const [contrato, setContrato] = useState<any>(null);

  useEffect(() => {
    supabase.from("contratos_clientes").select("*").eq("slug", slug || "preview").single()
      .then(({ data }) => setContrato(data || {}));
  }, [slug]);

  if (!contrato) return <div style={{ padding: "20px", fontFamily: "monospace" }}>Carregando...</div>;

  const c = contrato;

  return (
    <div style={{
      background: "#ffffff",
      width: "210mm",
      margin: "0 auto",
      fontFamily: "'DM Mono', monospace",
      padding: "20mm 22mm",
      color: "#3A3A3A"
    }}>
      <style>{`
        @media print {
          html, body { background: #ffffff !important; margin: 0 !important; }
          @page { size: A4; margin: 20mm 22mm; }
          .nova-pagina { page-break-before: always; }
          p { orphans: 3; widows: 3; }
        }
      `}</style>
      
      <div style={S.capaWrap}>
         <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
           <div style={{ fontSize: "32px", color: "#3A3A3A" }}>NL<span style={{ color: "#8B7355" }}>ARQUITETOS</span></div>
           <div style={{ fontSize: "13px", marginTop: "20px" }}>Contrato de Prestação de Serviços de Arquitetura</div>
         </div>
      </div>

      <div className="nova-pagina" style={S.section}>
        <div style={S.sectionLabel}>Sumário</div>
        <div style={{ fontSize: "10px", color: "#3A3A3A" }}>
           01 — Das Partes Envolvidas<br/>
           02 — Do Objeto<br/>
           03 — Do Prazo<br/>
           04 — Do Valor e Pagamento
        </div>
      </div>

      <div style={{ marginTop: "10mm" }}>
         <div style={S.clauseBlock}>
            <div style={S.clauseTitle}><div style={S.clauseNum}>01</div><div style={S.clauseName}>Das Partes Envolvidas</div></div>
            <div style={S.body}><p style={S.p}>Contratante: {c.nome_cliente}, {c.nacionalidade}, {c.estado_civil}, {c.profissao}, residente em {c.endereco_cliente}. Contratada: NL ARQUITETOS.</p></div>
         </div>
         <div style={S.clauseBlock}>
            <div style={S.clauseTitle}><div style={S.clauseNum}>02</div><div style={S.clauseName}>Do Objeto</div></div>
            <div style={S.body}><p style={S.p}>Prestação de serviços de arquitetura para o imóvel situado em {c.endereco_imovel}, referente ao projeto {c.tipo_projeto} ({c.plano}).</p></div>
         </div>
         <div style={S.clauseBlock}>
            <div style={S.clauseTitle}><div style={S.clauseNum}>03</div><div style={S.clauseName}>Do Prazo</div></div>
            <div style={S.body}><p style={S.p}>O prazo total para execução é de {c.prazo_total_dias} dias, conforme cronograma detalhado em anexo.</p></div>
         </div>
         <div style={S.clauseBlock}>
            <div style={S.clauseTitle}><div style={S.clauseNum}>04</div><div style={S.clauseName}>Do Valor e Pagamento</div></div>
            <div style={S.body}>
              <p style={S.p}>O valor total é de R$ {c.valor_total} ({c.valor_total_extenso}).</p>
              <p style={S.p}>Pagamento: 30% ({c.marco1_valor}) na assinatura, 40% ({c.marco2_valor}) na entrega do estudo preliminar e 30% ({c.marco3_valor}) na entrega do projeto executivo.</p>
            </div>
         </div>
      </div>

      <div className="nova-pagina" style={S.section}>
         <div style={S.sectionLabel}>Assinaturas</div>
         <div style={{ marginTop: "20mm", display: "flex", justifyContent: "space-between" }}>
            <div style={{ borderTop: "1px solid #000", width: "80mm", textAlign: "center", fontSize: "9px", paddingTop: "5px" }}>{c.nome_cliente}</div>
            <div style={{ borderTop: "1px solid #000", width: "80mm", textAlign: "center", fontSize: "9px", paddingTop: "5px" }}>NL ARQUITETOS</div>
         </div>
      </div>

      <div className="nova-pagina" style={S.section}>
         <div style={S.sectionLabel}>Anexos</div>
         <div style={S.body}>Documentação técnica e memorial descritivo conforme escopo contratado.</div>
      </div>
    </div>
  );
}
