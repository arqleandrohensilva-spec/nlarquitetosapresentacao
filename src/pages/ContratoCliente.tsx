import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const S = {
  page: { background: "#fff", width: "210mm", margin: "0 auto", fontFamily: "'DM Mono',monospace", color: "#3A3A3A" } as React.CSSProperties,
  capaWrap: { minHeight: "250mm", display: "flex", flexDirection: "column" as const, padding: "0" },
  header: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: "5mm", borderBottom: "0.3px solid #f0ede8", marginBottom: "7mm" },
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

  const clauses = [
    { num: "01", name: "Do Objeto", text: `O presente contrato tem por objeto a prestação de serviços de arquitetura para o imóvel situado em ${contrato.endereco_imovel || "---"}.` },
    { num: "02", name: "Do Prazo", text: `O prazo total para execução dos serviços é de ${contrato.prazo_total_dias || "---"} dias.` },
    { num: "03", name: "Do Valor", text: `O valor total dos serviços é de R$ ${contrato.valor_total || "---"} (${contrato.valor_total_extenso || "---"}).` },
    { num: "04", name: "Do Pagamento", text: `O pagamento será realizado em três marcos: 30% na assinatura, 40% na entrega do estudo preliminar e 30% na entrega do projeto executivo.` }
  ];

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
         <div style={{ textAlign: "right" }}><div style={{ fontSize: "10px", color: "#8B7355" }}>{contrato.numero}</div></div>
         <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
           <div style={{ fontSize: "32px", color: "#3A3A3A" }}>NL<span style={{ color: "#8B7355" }}>ARQUITETOS</span></div>
           <div style={{ fontSize: "13px", marginTop: "20px" }}>Contrato de Prestação de Serviços de Arquitetura</div>
         </div>
      </div>

      <div className="nova-pagina" style={S.section}>
        <div style={S.sectionLabel}>Sumário</div>
        {clauses.map(c => <div key={c.num} style={{ fontSize: "9px", marginBottom: "5px" }}>{c.num} — {c.name}</div>)}
      </div>

      <div style={{ marginTop: "10mm" }}>
         {clauses.map(c => (
           <div key={c.num} style={S.clauseBlock}>
             <div style={S.clauseTitle}>
               <div style={S.clauseNum}>{c.num}</div>
               <div style={S.clauseName}>{c.name}</div>
             </div>
             <div style={S.body}><p style={S.p}>{c.text}</p></div>
           </div>
         ))}
      </div>

      <div className="nova-pagina" style={S.section}>
         <div style={S.sectionLabel}>Assinaturas</div>
         <div style={{ marginTop: "20mm", display: "flex", justifyContent: "space-between" }}>
            <div style={{ borderTop: "1px solid #000", width: "80mm", textAlign: "center", fontSize: "9px", paddingTop: "5px" }}>{contrato.nome_cliente}</div>
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
