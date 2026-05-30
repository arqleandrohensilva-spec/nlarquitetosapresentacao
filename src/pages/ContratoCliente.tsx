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

        {/* ══ CAPA ══ */}
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

        {/* ══ SUMÁRIO ══ */}
        <div className="nova-pagina" style={S.section}>
          <PageHeader numero={c.numero} label="Sumário" />
          <div style={{ fontSize: "8px", color: "#8B7355", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "2mm" }}>Sumário</div>
          <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "18px", fontWeight: 300, fontStyle: "italic", color: "#3A3A3A", marginBottom: "8mm", lineHeight: 1.3 }}>
            Instrumento Particular de Contrato<br />de Projeto de Arquitetura
          </div>
          <div style={S.sectionLabel}>Contrato Principal</div>
          {[["Cláusula Primeira","Das Partes Envolvidas no Contrato"],["Cláusula Segunda","Do Objeto"],["Cláusula Terceira","Dos Serviços Ofertados"],["Cláusula Quarta","Do Prazo"],["Cláusula Quinta","Das Alterações"],["Cláusula Sexta","Dos Honorários"],["Cláusula Sétima","Das Obrigações e Responsabilidades do Contratante"],["Cláusula Oitava","Das Obrigações e Responsabilidades dos Contratados"],["Cláusula Nona","Dos Direitos Autorais"],["Cláusula Décima","Da Responsabilidade Técnica"],["Cláusula Décima Primeira","Da Rescisão Contratual"],["Cláusula Décima Segunda","Considerações Finais"],["Cláusula Décima Terceira","Da Limitação de Responsabilidade Civil"],["Cláusula Décima Quarta","Do Foro"]].map(([num,title],i,arr)=>(
            <div key={num} style={{ display: "flex", alignItems: "baseline", padding: "2.5mm 0", borderBottom: i < arr.length-1 ? "0.3px solid #f8f6f4" : "none" }}>
              <div style={{ fontSize: "10px", color: "#888", width: "44mm", minWidth: "44mm", flexShrink: 0 }}>{num}</div>
              <div style={{ flex: 1, minWidth: "4mm", borderBottom: "0.5px dotted #e0ddd8", margin: "0 3mm", marginBottom: "2px" }} />
              <div style={{ fontSize: "10px", color: "#3A3A3A", textAlign: "right", width: "80mm", lineHeight: 1.4 }}>{title}</div>
            </div>
          ))}
          <div style={{ height: "0.3px", background: "#e8e4df", margin: "4mm 0" }} />
          <div style={{ display: "flex", alignItems: "baseline", padding: "2.5mm 0" }}>
            <div style={{ fontSize: "10px", color: "#3A3A3A", width: "44mm", minWidth: "44mm", flexShrink: 0, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500 }}>Assinaturas</div>
            <div style={{ flex: 1, borderBottom: "0.5px dotted #e0ddd8", margin: "0 3mm", marginBottom: "2px" }} />
            <div style={{ width: "80mm" }} />
          </div>
          <div style={{ height: "0.3px", background: "#e8e4df", margin: "4mm 0" }} />
          <div style={S.sectionLabel}>Anexos</div>
          {[["Anexo I","Escopo dos Serviços de Projeto"],["Anexo II","Cronograma de Desenvolvimento do Projeto"],["Anexo III","Honorários e Forma de Pagamento"],["Anexo IV","Serviços Adicionais (Opcionais)"]].map(([num,title],i,arr)=>(
            <div key={num} style={{ display: "flex", alignItems: "baseline", padding: "2.5mm 0", borderBottom: i < arr.length-1 ? "0.3px solid #f8f6f4" : "none" }}>
              <div style={{ fontSize: "10px", color: "#888", width: "44mm", minWidth: "44mm", flexShrink: 0 }}>{num}</div>
              <div style={{ flex: 1, minWidth: "4mm", borderBottom: "0.5px dotted #e0ddd8", margin: "0 3mm", marginBottom: "2px" }} />
              <div style={{ fontSize: "10px", color: "#3A3A3A", textAlign: "right", width: "80mm", lineHeight: 1.4 }}>{title}</div>
            </div>
          ))}
          <Footer />
        </div>

        {/* ══ CLÁUSULAS ══ */}
        <div className="nova-pagina" style={S.section}>
          <PageHeader numero={c.numero} label="Contrato Principal" />
          <div style={{ fontSize: "14px", color: "#3A3A3A", letterSpacing: "0.15em", textTransform: "uppercase", textAlign: "center", marginBottom: "12mm", fontFamily: "'Cormorant Garamond',Georgia,serif" }}>
            Instrumento Particular de Contrato de Projeto de Arquitetura
          </div>

          <Clause num="Cláusula Primeira" name="Das Partes Envolvidas no Contrato">
            <p style={S.p}><span style={{ color: "#8B7355", fontWeight: 500 }}>CONTRATANTE</span> — {c.nome_cliente}, {c.nacionalidade}, {c.estado_civil}, {c.profissao}, portador do CPF nº {c.cpf_cliente}, residente e domiciliado em {c.endereco_cliente}, doravante denominado simplesmente CONTRATANTE.</p>
            <p style={S.p}><span style={{ color: "#8B7355", fontWeight: 500 }}>CONTRATADOS</span> — Leandro Henrique da Silva, brasileiro, arquiteto e urbanista, inscrito no CAU nº A252250-0, portador do CPF nº 425.437.568-92 e Neandro Jacque Garcia, brasileiro, arquiteto e urbanista, inscrito no CAU nº A264629-3, portador do CPF nº 382.857.218-92, atuando sob a denominação fantasia NL Arquitetura e Interiores, doravante denominados conjuntamente CONTRATADOS.</p>
            <p style={S.p}>As partes, devidamente qualificadas, resolvem celebrar o presente Contrato de Prestação de Serviços de Arquitetura, o qual se regerá pela legislação brasileira aplicável, notadamente, quando aplicável, pelo Código de Defesa do Consumidor, pela Lei Federal nº 12.378/2010 (que regulamenta o exercício da Arquitetura e Urbanismo), pelas Resoluções nº 21 (Atribuições Profissionais) e nº 64 (Tabela de Honorários) do CAU/BR, pela Lei Federal nº 9.610/1998, que dispõe sobre direitos autorais, e, subsidiariamente, pelas disposições do Código Civil concernentes à prestação de serviços.</p>
          </Clause>

          <Clause num="Cláusula Segunda" name="Do Objeto">
            <p style={S.p}>2.1 O presente contrato tem por objeto a prestação de serviços técnicos profissionais de arquitetura pelos CONTRATADOS ao CONTRATANTE, compreendendo o desenvolvimento de projetos e/ou serviços relacionados à arquitetura e interiores.</p>
            <p style={S.p}>2.2 O escopo específico dos serviços, as etapas de desenvolvimento, os prazos, os honorários, a forma de pagamento e as demais condições particulares de cada projeto serão detalhadas nos Anexos deste contrato, que o integram para todos os efeitos legais, com a mesma validade e eficácia jurídica.</p>
          </Clause>

          <Clause num="Cláusula Terceira" name="Dos Serviços Ofertados">
            <p style={S.p}>3.1 Os serviços técnicos de arquitetura que poderão ser prestados pelos CONTRATADOS ao CONTRATANTE compreendem, de forma exemplificativa e não limitativa, atividades como: levantamento de dados e informações técnicas, elaboração de briefing e definição do programa de necessidades, desenvolvimento de estudos preliminares, anteprojeto, projeto legal para aprovação junto aos órgãos competentes, projeto executivo, compatibilização de projetos complementares, gerenciamento de projetos (se expressamente contratado) e demais atividades técnicas relacionadas ao desenvolvimento de projetos de arquitetura e/ou interiores, sendo que a definição específica do escopo dos serviços contratados, etapas de desenvolvimento e entregáveis será detalhada nos Anexos deste contrato, conforme Cláusula 3.2.</p>
            <p style={S.p}>3.2 A definição específica do escopo dos serviços, etapas de desenvolvimento, entregáveis e demais condições aplicáveis a cada projeto contratado será estabelecida nos Anexos deste contrato, que passam a integrá-lo para todos os fins de direito.</p>
            <p style={S.p}>3.3 Os serviços previstos nesta cláusula referem-se exclusivamente às atividades de desenvolvimento de projeto, não incluindo execução, gerenciamento ou acompanhamento de obra, salvo quando expressamente contratado.</p>
          </Clause>

          <Clause num="Cláusula Quarta" name="Do Prazo">
            <p style={S.p}>4.1 Os prazos para execução dos serviços objeto deste contrato serão definidos nos Anexos correspondentes, nos quais constará o cronograma estimado de desenvolvimento das etapas do projeto.</p>
            <p style={S.p}>4.2 Os prazos estabelecidos possuem caráter estimativo e poderão sofrer ajustes a serem determinados e comunicados formalmente pelos CONTRATADOS ao CONTRATANTE, com a devida justificativa, em razão de fatores como: revisões solicitadas pelo CONTRATANTE, atraso no fornecimento de informações ou documentos necessários ao desenvolvimento do projeto, exigências de órgãos públicos, necessidade de adequações técnicas, superveniência de fatos imprevisíveis ou quaisquer outras circunstâncias que impactem o andamento regular dos serviços.</p>
            <p style={S.p}>4.3 Eventuais atrasos decorrentes de fatores alheios à atuação dos CONTRATADOS não caracterizarão inadimplemento contratual.</p>
          </Clause>

          <Clause num="Cláusula Quinta" name="Das Alterações">
            <p style={S.p}>5.1 Cada etapa do projeto apresentada pelos CONTRATADOS contempla até 02 (duas) revisões, desde que as alterações solicitadas estejam relacionadas à proposta inicialmente desenvolvida e não impliquem mudança substancial do conceito arquitetônico previamente aprovado.</p>
            <p style={S.pi}>Parágrafo único – A caracterização de mudança substancial do conceito arquitetônico será avaliada pelos CONTRATADOS, de forma justificada e documentada, com base em sua expertise técnica, nas normas aplicáveis e nos documentos de briefing e estudo preliminar aprovados.</p>
            <p style={S.p}>5.2 As solicitações de ajustes deverão ser realizadas pelo CONTRATANTE dentro do prazo de análise estabelecido neste contrato ou nos Anexos correspondentes, após a apresentação de cada etapa do projeto.</p>
            <p style={S.p}>5.2.1 A ausência de manifestação do CONTRATANTE dentro do prazo de análise estabelecido, conforme ANEXO II – Cronograma de Desenvolvimento do Projeto, implicará na aprovação tácita da etapa apresentada, para fins de continuidade do desenvolvimento do projeto, sem prejuízo da aplicação das demais disposições contratuais relativas a alterações posteriores.</p>
            <p style={S.p}>5.3 Caso o CONTRATANTE solicite mais de 02 (duas) rodadas de revisão em uma mesma etapa, ou alterações que impliquem mudanças significativas no conceito arquitetônico previamente aprovado, devidamente justificado e comprovado pelos CONTRATADOS, tais modificações serão consideradas serviços adicionais, cobradas por hora técnica conforme tabela de honorários praticada pelos CONTRATADOS, estando sujeitas à redefinição de prazos.</p>
            <p style={S.pi}>Parágrafo único – A execução desses serviços adicionais dependerá da apresentação de proposta formal pelos CONTRATADOS, contendo a descrição do escopo, novos prazos e honorários correspondentes, bem como da aprovação expressa do CONTRATANTE.</p>
            <p style={S.p}>5.4 Alterações solicitadas após a aprovação formal de uma etapa serão consideradas serviços adicionais, sujeitas à análise de viabilidade técnica pelos CONTRATADOS, revisão de prazos e cobrança de honorários complementares. A aprovação formal de cada etapa do projeto pelo CONTRATANTE deverá ocorrer por meio de comunicação escrita (e-mail com confirmação de leitura, plataforma de gestão de projetos ou termo de aprovação assinado), dentro do prazo estabelecido, e implicará a concordância com as soluções apresentadas, encerrando a fase correspondente.</p>
            <p style={S.p}>5.5 Solicitações de alteração realizadas durante a etapa de Projeto Executivo, que impactem elementos previamente definidos, poderão gerar revisão de prazos e honorários, em razão do retrabalho técnico necessário. Tais serviços adicionais estarão sujeitos à cobrança de honorários, mediante apresentação de proposta formal e aprovação prévia do CONTRATANTE.</p>
            <p style={S.p}>5.6 Alterações decorrentes de exigências técnicas de órgãos públicos, prefeitura ou normas condominiais serão realizadas sem custo adicional ao CONTRATANTE, desde que não impliquem mudança substancial do conceito arquitetônico previamente aprovado.</p>
            <p style={S.pi}>Parágrafo único – Caso tais exigências demandem alterações significativas no projeto ou revisão do conceito arquitetônico, os prazos serão ajustados e estarão sujeitos à honorários adicionais, mediante apresentação de novo orçamento e aprovação pelo CONTRATANTE.</p>
            <p style={S.p}>5.7 Quaisquer alterações solicitadas pelo CONTRATANTE após o início da execução da obra e que não decorram de vícios construtivos ou falhas de projeto imputáveis aos CONTRATADOS não fazem parte do escopo deste contrato, podendo ser realizadas mediante contratação adicional de serviços de revisão de projeto, com orçamento específico e aprovação prévia do CONTRATANTE.</p>
            <p style={S.p}>5.8 Após a aprovação do Projeto Executivo, o projeto será considerado tecnicamente finalizado, não estando incluídas revisões ou modificações posteriores no escopo deste contrato, salvo por acordo expresso entre as partes e mediante aditivo contratual que defina o escopo e os honorários adicionais.</p>
            <p style={S.p}>5.9 Os valores referentes a serviços adicionais serão definidos conforme tabela de honorários praticada pelos CONTRATADOS ou conforme referência da tabela de honorários do CAU/BR, mediante prévia comunicação e aprovação do CONTRATANTE.</p>
            <p style={S.p}>5.10 A aprovação de cada etapa do projeto pelo CONTRATANTE caracteriza a concordância com as soluções apresentadas, encerrando-se a fase correspondente.</p>
          </Clause>

          <Footer />
        </div>

        {/* ══ CLÁUSULAS 6 e 7 ══ */}
        <div className="nova-pagina" style={S.section}>
          <PageHeader numero={c.numero} label="Contrato Principal" />

          <Clause num="Cláusula Sexta" name="Dos Honorários">
            <p style={S.p}>6.1 Em contrapartida aos serviços profissionais de arquitetura prestados em conformidade com este contrato, o CONTRATANTE compromete-se a pagar aos CONTRATADOS os honorários profissionais, bem como a respectiva forma de pagamento, conforme estabelecido no Anexo III – Honorários e Condições de Pagamento, que integra o presente instrumento para todos os fins de direito.</p>
            <p style={S.p}>6.2 O Anexo III especificará detalhadamente o valor total dos honorários, a forma de pagamento aplicável (incluindo, quando houver, valor de entrada, número e valor das parcelas, datas de vencimento e meios de pagamento aceitos), bem como eventuais condições comerciais acordadas entre as partes.</p>
            <p style={S.p}>6.3 Salvo disposição expressa em contrário e por escrito, mediante aditivo contratual específico, não estão incluídos nos honorários contratados, sendo de responsabilidade exclusiva do CONTRATANTE sua contratação e pagamento, os seguintes serviços, taxas ou despesas:</p>
            <p style={S.p}>6.3.1 Projetos complementares, tais como: Projeto Estrutural (incluindo fundações), elétrico, hidrossanitário, prevenção e combate a incêndio, estudo de impacto de vizinhança, licenças ambientais, ou quaisquer outros projetos técnicos exigidos para execução da obra;</p>
            <p style={S.p}>6.3.2 Execução da obra, gerenciamento de obra ou responsabilidade técnica pela construção;</p>
            <p style={S.p}>6.3.3 Taxas, emolumentos e tributos relacionados à aprovação do projeto em órgãos públicos, prefeitura, condomínio, cartório, matrícula de obra no INSS ou quaisquer outros encargos legais;</p>
            <p style={S.p}>6.3.4 Custos de impressão, plotagem ou reprodução de plantas exigidas para protocolos ou aprovações.</p>
            <p style={S.p}>6.4 Em caso de atraso no pagamento de qualquer parcela, incidirão as penalidades especificadas no Anexo III.</p>
            <p style={S.p}>6.5 Caso, durante o desenvolvimento do projeto, ocorram alterações que impactem diretamente o escopo contratado ou os critérios utilizados para cálculo dos honorários – como, por exemplo, alteração significativa da área construída, mudança do programa arquitetônico ou inclusão de novos ambientes – os honorários poderão ser revisados, com base nos critérios de cálculo originalmente utilizados para a precificação do projeto ou, na ausência de critério específico, conforme a tabela de honorários do CAU/BR ou tabela de honorários dos CONTRATADOS, mediante apresentação de nova proposta formal, mediante formalização de aditivo contratual e atualização do Anexo III, com a concordância expressa das partes.</p>
          </Clause>

          <Clause num="Cláusula Sétima" name="Das Obrigações e Responsabilidades do Contratante">
            <p style={{ ...S.p, fontStyle: "italic", color: "#333" }}>Compete ao CONTRATANTE, para o correto desenvolvimento dos serviços contratados:</p>
            <p style={S.p}>7.1 Fornecer aos CONTRATADOS, de forma completa, verdadeira e tempestiva, todos os documentos, informações e dados necessários ao desenvolvimento do projeto, conforme especificado no Anexo I (Escopo dos Serviços) e eventuais solicitações técnicas adicionais realizadas pelos CONTRATADOS.</p>
            <p style={S.p}>7.2 Analisar e aprovar as etapas do projeto apresentadas pelos CONTRATADOS dentro dos prazos estabelecidos no Anexo II (Cronograma), comunicando eventuais solicitações de ajustes de forma clara e objetiva.</p>
            <p style={S.p}>7.3 Colaborar ativamente durante o processo de desenvolvimento do projeto, respondendo às solicitações dos CONTRATADOS dentro dos prazos estipulados.</p>
            <p style={S.p}>7.3.1 A ausência de manifestação ou atraso na aprovação das etapas pelo CONTRATANTE poderá suspender os prazos contratuais dos CONTRATADOS, bem como gerar revisão do cronograma.</p>
            <p style={S.p}>7.3.2 Caso solicitações tardias de alteração impliquem retrabalho técnico em etapas já aprovadas ou concluídas, os CONTRATADOS poderão cobrar honorários adicionais, conforme previsto neste contrato.</p>
            <p style={S.p}>7.4 Efetuar o pagamento dos honorários profissionais na forma, prazos e condições estabelecidas no Anexo III (Honorários e Condições de Pagamento).</p>
            <p style={S.p}>7.5 Obter todas as licenças, alvarás e aprovações necessárias junto aos órgãos públicos, condomínio ou demais instituições competentes para a execução da obra, arcando com todos os custos, taxas e emolumentos correspondentes.</p>
            <p style={S.p}>7.6 Contratar, obrigatoriamente, os profissionais responsáveis pelos projetos complementares indispensáveis à execução da obra, tais como: projeto estrutural, projetos elétrico, hidrossanitário, de fundação, de prevenção e combate a incêndio, entre outros que se façam necessários para execução da obra.</p>
            <p style={S.p}>7.6.7 A contratação e coordenação dos projetos complementares são de responsabilidade do CONTRATANTE, salvo se tais serviços forem expressamente contratados junto aos CONTRATADOS por meio de instrumento específico.</p>
            <p style={S.p}>7.7 Contratar empresa construtora, empreiteiros ou profissionais responsáveis pela execução da obra.</p>
            <p style={S.p}>7.8 O CONTRATANTE compromete-se a cumprir todas as obrigações previstas neste contrato e seus anexos, bem como a agir com boa-fé e colaboração para o bom desenvolvimento dos serviços. A executar a obra em conformidade com o projeto elaborado pelos CONTRATADOS, sendo vedadas alterações sem a prévia autorização técnica e formal dos autores do projeto, sob pena de responsabilização, nos termos do art. 615 do Código Civil.</p>
            <p style={S.p}>7.9 Qualquer alteração realizada na obra sem a prévia autorização dos CONTRATADOS isentará estes de qualquer responsabilidade técnica, civil ou legal decorrente das modificações realizadas, conforme previsto no art. 615 do Código Civil.</p>
            <p style={S.p}>7.10 Caso o CONTRATANTE deseje realizar alterações no projeto durante a execução da obra, deverá comunicar formalmente os CONTRATADOS para análise técnica e eventual atualização do projeto, podendo tal serviço ser objeto de contratação adicional.</p>
            <p style={S.p}>7.11 O projeto arquitetônico constitui obra intelectual protegida pela Lei nº 9.610/1998 (Lei de Direitos Autorais) e pela Lei nº 12.378/2010, que regulamenta o exercício da Arquitetura e Urbanismo no Brasil.</p>
            <p style={S.p}>7.11.1 O CONTRATANTE compromete-se a não reproduzir, alterar, adaptar ou permitir a execução do projeto por terceiros sem autorização expressa dos CONTRATADOS.</p>
            <p style={S.p}>7.11.2 O descumprimento desta obrigação caracterizará violação de direitos autorais, sujeitando o CONTRATANTE ao pagamento de multa não inferior a 50% do valor total deste contrato, sem prejuízo de eventual indenização por perdas e danos e demais sanções legais cabíveis.</p>
            <p style={S.p}>7.12 Quando houver identificação do autor do projeto por meio de placa de obra, material de divulgação ou qualquer outro meio, o CONTRATANTE compromete-se a não remover tal identificação sem autorização prévia dos CONTRATADOS.</p>
          </Clause>

          <Footer />
        </div>

        {/* ══ CLÁUSULAS 8 e 9 ══ */}
        <div className="nova-pagina" style={S.section}>
          <PageHeader numero={c.numero} label="Contrato Principal" />

          <Clause num="Cláusula Oitava" name="Das Obrigações e Responsabilidades dos Contratados">
            <p style={{ ...S.p, fontStyle: "italic", color: "#333" }}>Compete aos CONTRATADOS:</p>
            <p style={S.p}>8.1 Prestar os serviços profissionais de arquitetura com diligência, competência e observância às normas técnicas aplicáveis, à legislação vigente ao Código de Ética e Disciplina do CAU/BR às boas práticas profissionais reconhecidas no setor.</p>
            <p style={S.p}>8.2 Elaborar o projeto arquitetônico em estrita conformidade com o escopo definido no Anexo I (Escopo dos Serviços), observando rigorosamente os prazos estabelecidos no Anexo II (Cronograma) e considerando integralmente as informações, documentos e diretrizes fornecidos pelo CONTRATANTE. O cumprimento das obrigações dos CONTRATADOS, incluindo prazos e qualidade do projeto, é condicionado ao adimplemento tempestivo e integral das obrigações do CONTRATANTE, notadamente no que se refere ao fornecimento de informações, documentos e obtenção de aprovações, conforme previsto na Cláusula Sétima.</p>
            <p style={S.p}>8.3 Manter o CONTRATANTE informado sobre o andamento do projeto, apresentando as etapas desenvolvidas para análise e aprovação dentro dos prazos previstos.</p>
            <p style={S.p}>8.4 Realizar as alterações e ajustes solicitados pelo CONTRATANTE, desde que tecnicamente viáveis e dentro dos limites estabelecidos neste contrato e em seus anexos, especialmente no que se refere à quantidade de revisões e à manutenção do conceito arquitetônico previamente aprovado.</p>
            <p style={S.p}>8.5 Manter sigilo sobre informações e documentos confidenciais do CONTRATANTE aos quais tiver acesso em razão deste contrato, comprometendo-se a utilizá-los exclusivamente para a execução dos serviços contratados.</p>
            <p style={S.p}>8.6 Emitir o Registro de Responsabilidade Técnica (RRT) referente aos serviços efetivamente prestados, nos termos da legislação aplicável.</p>
            <p style={S.p}>8.7 Elaborar o projeto observando a legislação urbanística municipal aplicável, o Código de Obras do Município e as normas técnicas pertinentes, incluindo, quando aplicável e dentro do escopo definido no Anexo I, as normas da Associação Brasileira de Normas Técnicas – ABNT, tais como: ABNT NBR 13532 – Elaboração de projetos de edificações, ABNT NBR 9050 – Acessibilidade a edificações, mobiliário, espaços e equipamentos urbanos, bem como demais normas técnicas pertinentes ao desenvolvimento do projeto arquitetônico.</p>
            <p style={S.p}>8.8 Quando houver projetos complementares elaborados por terceiros, os CONTRATADOS poderão analisar tais documentos com a finalidade de identificar interferências aparentes com o projeto.</p>
            <p style={S.pi}>8.8.1 Essa análise possui caráter não exaustivo e não configura responsabilidade dos CONTRATADOS pela compatibilização integral entre todos os projetos técnicos envolvidos na obra, salvo quando tal serviço for expressamente contratado.</p>
            <p style={S.p}>8.9 Os CONTRATADOS poderão utilizar imagens, plantas, renders, fotografias e demais representações do projeto ou da obra para fins de portfólio profissional, divulgação institucional ou material de marketing, desde que respeitadas as disposições da Lei Geral de Proteção de Dados (Lei nº 13.709/2018) e garantido o anonimato de informações confidenciais do CONTRATANTE.</p>
            <p style={S.pi}>8.9.1 Na divulgação, os CONTRATADOS comprometem-se a preservar dados pessoais do CONTRATANTE que permitam sua identificação direta, em conformidade com a Lei Geral de Proteção de Dados – LGPD (Lei nº 13.709/2018).</p>
            <p style={S.p}>8.10 A responsabilidade dos CONTRATADOS limita-se à elaboração do projeto, nos termos deste contrato.</p>
            <p style={S.pi}>8.10.1 Eventuais problemas decorrentes da execução da obra, interpretação inadequada do projeto, utilização de materiais divergentes das especificações ou ausência de acompanhamento técnico durante a construção não poderão ser imputados aos CONTRATADOS, conforme disposto nas cláusulas específicas de limitação de responsabilidade deste contrato.</p>
          </Clause>

          <Clause num="Cláusula Nona" name="Dos Direitos Autorais">
            <p style={S.p}>9.1 O Projeto desenvolvido no âmbito deste contrato constitui obra intelectual protegida pela Lei nº 9.610/1998 (Lei de Direitos Autorais) e pela Lei nº 12.378/2010, sendo reconhecido como criação técnica e artística dos CONTRATADOS.</p>
            <p style={S.p}>9.2 Os direitos autorais morais e patrimoniais sobre o projeto pertencem aos CONTRATADOS, nos termos da Lei nº 9.610/1998, bem como da Lei nº 12.378/2010, e do art. 80 da Lei nº 13.303/2016, que garante a propriedade intelectual de projetos técnicos.</p>
            <p style={S.p}>9.3 O CONTRATANTE, mediante o pagamento integral dos honorários estabelecidos no Anexo III (Honorários e Condições de Pagamento), adquire o direito de utilizar o projeto exclusivamente para a execução da obra no imóvel especificado no Anexo I (Escopo Detalhado dos Serviços), observadas as condições e limitações estabelecidas neste contrato.</p>
            <p style={S.p}>9.4 Sem autorização prévia e expressa dos CONTRATADOS, o CONTRATANTE não poderá: (9.4.1) reproduzir o projeto em outro terreno ou imóvel; (9.4.2) reutilizar total ou parcialmente o projeto em outra obra; (9.4.3) ceder, vender, compartilhar ou disponibilizar o projeto a terceiros sem autorização expressa dos CONTRATADOS; (9.4.4) modificar o projeto ou permitir modificações por outros profissionais; (9.4.5) utilizar o projeto para fins comerciais, publicitários ou de incorporação imobiliária.</p>
            <p style={S.p}>9.5 Qualquer alteração no projeto, seja durante a fase de desenvolvimento ou durante a execução da obra, somente poderá ser realizada mediante autorização expressa e por escrito dos CONTRATADOS.</p>
            <p style={S.p}>9.6 Aos CONTRATADOS é garantido o direito de utilizar imagens, plantas, renders e fotografias do projeto e da obra para fins de divulgação profissional em portfólio, redes sociais, apresentações institucionais ou material de marketing, desde que sejam preservadas a privacidade e os dados pessoais do CONTRATANTE, em conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados).</p>
            <p style={S.p}>9.7 Considera-se reprodução indevida a utilização total ou parcial do projeto para execução em outro imóvel ou empreendimento sem autorização dos CONTRATADOS.</p>
            <p style={S.p}>9.8 Para fins deste contrato, considera-se plágio a reprodução substancial do projeto arquitetônico ou da obra dele resultante, incluindo pelo menos dois dos seguintes elementos: (9.8.1) partido arquitetônico ou solução estrutural; (9.8.2) organização funcional dos ambientes; (9.8.3) volumetrias ou composição espacial interna ou externa.</p>
            <p style={S.p}>9.9 O plágio poderá ser caracterizado mesmo que sejam alterados materiais, cores, acabamentos ou detalhes construtivos.</p>
            <p style={S.p}>9.10 A utilização indevida, reprodução, cópia ou plágio do projeto arquitetônico implicará obrigação de indenização aos CONTRATADOS, sem prejuízo das medidas judiciais cabíveis.</p>
            <p style={S.p}>9.11 Alterações realizadas no projeto ou na obra dele resultante sem autorização dos CONTRATADOS caracterizam violação de direitos autorais, nos termos da Lei nº 9.610/1998, sujeitando o responsável ao pagamento de indenização mínima equivalente a 3 (três) vezes o valor total dos honorários contratuais, sem prejuízo de outras sanções legais cabíveis.</p>
            <p style={S.p}>9.12 O projeto somente poderá ser utilizado para execução da obra após a quitação integral dos honorários previstos neste contrato. A utilização do projeto antes da quitação caracteriza uso indevido de obra intelectual.</p>
          </Clause>

          <Footer />
        </div>

        {/* ══ CLÁUSULAS 10 a 14 + ASSINATURAS ══ */}
        <div className="nova-pagina" style={S.section}>
          <PageHeader numero={c.numero} label="Contrato Principal" />

          <Clause num="Cláusula Décima" name="Da Responsabilidade Técnica">
            <p style={S.p}>10.1 A responsabilidade técnica dos CONTRATADOS, no âmbito deste contrato, restringe-se à elaboração do projeto, conforme o escopo definido no Anexo I (Escopo Detalhado dos Serviços), observadas as normas técnicas aplicáveis, a legislação vigente e as diretrizes do contratante.</p>
            <p style={S.p}>10.2 A responsabilidade integral pela execução da obra, incluindo a contratação de mão de obra, construtores, fornecedores e outros profissionais necessários à construção, recai exclusivamente sobre o CONTRATANTE.</p>
            <p style={S.p}>10.3 Os CONTRATADOS não se responsabilizam por: (10.3.1) a execução da obra; (10.3.2) a qualidade dos materiais utilizados na obra; (10.3.3) o cumprimento dos prazos de execução da obra; (10.3.4) eventuais vícios ou defeitos na obra decorrentes de falhas na execução; (10.3.5) a compatibilização do projeto arquitetônico com os projetos complementares, salvo se expressamente previsto em contrário no Anexo I.</p>
            <p style={S.p}>10.4 Caso o CONTRATANTE realize alterações no projeto arquitetônico sem a prévia e expressa autorização por escrito dos CONTRATADOS, estes ficarão isentos de qualquer responsabilidade técnica, civil ou legal decorrente dessas modificações, conforme o art. 615 do Código Civil.</p>
            <p style={S.p}>10.5 A execução da obra em desacordo com o Projeto aprovado, ou sem observância das orientações técnicas fornecidas, exime os CONTRATADOS de qualquer responsabilidade civil, técnica ou legal sobre eventuais problemas construtivos, estruturais ou funcionais da edificação.</p>
            <p style={S.p}>10.6 O presente contrato não inclui serviços de acompanhamento técnico de obra, fiscalização ou gerenciamento de execução, os quais somente poderão ser realizados mediante contratação específica e formalização de contrato adicional.</p>
          </Clause>

          <Clause num="Cláusula Décima Primeira" name="Da Rescisão Contratual">
            <p style={S.p}>O presente contrato poderá ser rescindido por qualquer das partes, mediante notificação formal por escrito, observadas as condições e prazos estabelecidos nesta cláusula, nas demais disposições contratuais aplicáveis e na legislação vigente.</p>
            <p style={{ ...S.p, fontWeight: 500, color: "#3A3A3A" }}>11.1 RESCISÃO POR INICIATIVA DO CONTRATANTE</p>
            <p style={S.p}>11.1.1 Caso o CONTRATANTE opte por rescindir o contrato antes da conclusão total dos serviços: (I) os valores pagos até a data da rescisão não serão devolvidos; (II) o CONTRATANTE deverá quitar o valor proporcional referente às etapas em andamento ou já executadas e ainda não faturadas; (III) será aplicada multa compensatória de 20% sobre o saldo contratual remanescente; (IV) os documentos e materiais produzidos pelos CONTRATADOS somente poderão ser utilizados pelo CONTRATANTE após a quitação integral dos valores devidos.</p>
            <p style={S.p}>11.1.2 Após a formalização da rescisão e quitação dos valores pendentes, os CONTRATADOS entregarão ao CONTRATANTE os materiais correspondentes às etapas efetivamente concluídas até a data da rescisão.</p>
            <p style={S.p}>11.1.3 A partir da comunicação formal de rescisão, os CONTRATADOS poderão suspender imediatamente o desenvolvimento dos serviços.</p>
            <p style={S.p}>11.1.4 Em caso de rescisão por culpa do CONTRATANTE, este será responsável por reembolsar os CONTRATADOS por todos os custos e despesas comprovadamente incorridos para a cobrança dos valores devidos, incluindo honorários advocatícios extrajudiciais e judiciais, custas judiciais e despesas processuais.</p>
            <p style={{ ...S.p, fontWeight: 500, color: "#3A3A3A" }}>11.2 RESCISÃO POR INICIATIVA DOS CONTRATADOS</p>
            <p style={S.p}>11.2.1 Os CONTRATADOS poderão rescindir o presente contrato nos seguintes casos, mediante notificação prévia de 15 (quinze) dias: (I) atraso superior a 30 (trinta) dias no pagamento de qualquer valor previsto neste contrato; (II) descumprimento de obrigações contratuais por parte do CONTRATANTE; (III) impossibilidade técnica ou legal de continuidade do projeto; (IV) falta de fornecimento, pelo CONTRATANTE, de informações, documentos ou definições necessárias ao desenvolvimento do projeto, por prazo superior a 30 (trinta) dias.</p>
            <p style={S.pi}>Parágrafo 1º – Nesses casos, serão devidos aos CONTRATADOS os valores correspondentes às etapas já executadas ou em andamento até a data da rescisão.</p>
            <p style={S.pi}>Parágrafo 2º – Os CONTRATADOS poderão suspender imediatamente os serviços em caso de inadimplência ou descumprimento contratual pelo CONTRATANTE, até a regularização da situação.</p>
            <p style={S.pi}>Parágrafo 3º – A entrega de documentos, plantas, arquivos digitais ou quaisquer materiais produzidos ficarão condicionada à quitação integral dos valores devidos até a data da rescisão.</p>
            <p style={S.pi}>Parágrafo 4º – A rescisão não afasta a aplicação das cláusulas relativas aos direitos autorais, permanecendo vedada a utilização do projeto sem autorização expressa dos CONTRATADOS.</p>
            <p style={S.p}>11.3 Na hipótese de rescisão do presente contrato sem a quitação integral dos honorários devidos, fica expressamente vedada ao CONTRATANTE a utilização total ou parcial do projeto arquitetônico desenvolvido pelos CONTRATADOS, sob pena de caracterização de ilícito de violação de direitos autorais e perdas e danos, conforme a Lei nº 9.610/1998.</p>
            <p style={S.p}>11.4 Após a rescisão do contrato, os CONTRATADOS não terão qualquer responsabilidade técnica sobre eventuais modificações ou intervenções realizadas no projeto ou na obra.</p>
          </Clause>

          <Clause num="Cláusula Décima Segunda" name="Considerações Finais">
            <p style={{ ...S.p, fontStyle: "italic", color: "#333" }}>Esta cláusula estabelece disposições complementares aplicáveis à execução do presente contrato e aos anexos que o integram.</p>
            <p style={S.p}>12.1 Execução da obra decorrente do projeto objeto deste contrato não está incluída no escopo dos serviços contratados, sendo que eventual contratação de acompanhamento, gerenciamento ou execução da obra deverá ser objeto de contrato específico e independente.</p>
            <p style={S.p}>12.2 Os CONTRATADOS, na qualidade de autor do projeto, ficam isentos de quaisquer responsabilidades técnicas ou legais decorrentes de alterações executadas na obra sem sua prévia ciência e autorização por escrito.</p>
            <p style={S.p}>12.3 O início dos serviços objeto deste contrato está condicionado à assinatura do presente instrumento e à comprovação do pagamento da primeira parcela ou sinal contratual, devendo o comprovante ser encaminhado aos CONTRATADOS.</p>
            <p style={S.p}>12.4 Os atendimentos ao CONTRATANTE poderão ocorrer presencialmente, mediante agendamento prévio com antecedência mínima de 7 (sete) dias úteis, dentro do horário comercial, compreendido entre 08h00 às 12h00 e 14h00 às 18h00, de segunda a sexta-feira.</p>
            <p style={S.p}>12.5 Todas as comunicações relevantes relacionadas ao presente contrato, incluindo aprovações de etapas, solicitações de alterações e notificações contratuais, deverão ser realizadas obrigatoriamente por e-mail ou outro meio eletrônico formal, sendo consideradas válidas para fins contratuais.</p>
            <p style={S.p}>12.6 O CONTRATANTE compromete-se a fornecer todas as informações, documentos e definições necessárias para o desenvolvimento do projeto no prazo máximo de 5 (cinco) dias úteis a contar da solicitação.</p>
            <p style={S.p}>12.7 Caso ocorram alterações na legislação urbanística ou nas normas técnicas aplicáveis após a conclusão do projeto, eventuais adequações necessárias poderão ser objeto de aditivo contratual.</p>
          </Clause>

          <Clause num="Cláusula Décima Terceira" name="Da Limitação de Responsabilidade Civil do Projeto">
            <p style={S.p}>13.1 A responsabilidade civil dos CONTRATADOS limita-se à elaboração do projeto arquitetônico objeto do presente contrato, estritamente conforme as informações, documentos e diretrizes fornecidas pelo CONTRATANTE, cuja veracidade, precisão e completude são de sua exclusiva responsabilidade.</p>
            <p style={S.p}>13.2 Os CONTRATADOS não poderão ser responsabilizados por danos, prejuízos ou consequências decorrentes de: (I) execução da obra realizada por profissionais sem vínculo contratual com os CONTRATADOS; (II) utilização de materiais ou técnicas construtivas divergentes das especificações constantes no projeto; (III) modificações realizadas no projeto ou durante a execução da obra sem autorização prévia e expressa dos CONTRATADOS; (IV) falhas construtivas, estruturais, elétricas, hidráulicas ou de quaisquer outras instalações decorrentes da execução da obra; (V) informações técnicas incorretas, incompletas ou omissas fornecidas pelo CONTRATANTE ou por terceiros; (VI) descumprimento de normas técnicas, urbanísticas, legais ou regulamentares durante a execução da obra.</p>
            <p style={S.p}>13.3 A responsabilidade civil dos CONTRATADOS, caso configurada, estará limitada ao valor total dos honorários efetivamente recebidos em contraprestação ao serviço objeto deste contrato, excluindo-se expressamente a cobertura de indenizações por danos indiretos, lucros cessantes, perdas financeiras ou quaisquer outros prejuízos.</p>
            <p style={S.p}>13.4 Os CONTRATADOS não assumem responsabilidade técnica pela execução da obra, gerenciamento, fiscalização ou acompanhamento da construção, salvo se tais serviços forem contratados de forma expressa por meio de instrumento contratual específico.</p>
          </Clause>

          <Clause num="Cláusula Décima Quarta" name="Do Foro">
            <p style={S.p}>14.1 Para dirimir quaisquer controvérsias oriundas do presente contrato, as partes elegem o foro da comarca de São José dos Campos - SP, com renúncia expressa a qualquer outro, por mais privilegiado que seja salvo disposição legal em contrário.</p>
            <p style={S.p}>14.2 As partes, em comum acordo, poderão submeter eventuais conflitos à mediação, conciliação ou arbitragem, em conformidade com a Lei nº 9.307/96 e demais legislações aplicáveis. É condição para o ajuizamento de qualquer medida judicial ou arbitral que as partes busquem, previamente, a resolução dos conflitos por meio de mediação ou conciliação, durante um período mínimo de 30 (trinta) dias.</p>
            <p style={S.p}>14.3 O presente contrato constitui título executivo extrajudicial, nos termos da legislação brasileira aplicável.</p>
          </Clause>

          <Footer />
        </div>

        {/* ══ ASSINATURAS ══ */}
        <div className="nova-pagina" style={S.section}>
          <PageHeader numero={c.numero} label="Assinaturas" />
          <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "18px", fontWeight: 300, fontStyle: "italic", color: "#3A3A3A", marginBottom: "8mm" }}>
            Instrumento Particular de Contrato de Projeto de Arquitetura
          </div>
          <p style={{ fontSize: "9px", color: "#555", textAlign: "justify", marginBottom: "15mm" }}>
            E, por estarem assim justas e contratadas, as partes assinam o presente instrumento em 02 (duas) vias de igual teor e forma, juntamente com duas testemunhas, para que produza seus jurídicos e legais efeitos, obrigando-se as partes, seus herdeiros e sucessores.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20mm", marginBottom: "20mm" }}>
            <div style={{ borderTop: "0.5px solid #3A3A3A", paddingTop: "4mm", textAlign: "center" }}>
              <div style={{ fontSize: "9px", color: "#3A3A3A", fontWeight: 500 }}>{c.nome_cliente}</div>
              <div style={{ fontSize: "7px", color: "#888", textTransform: "uppercase", marginTop: "2px" }}>Contratante · CPF: {c.cpf_cliente}</div>
            </div>
            <div style={{ borderTop: "0.5px solid #3A3A3A", paddingTop: "4mm", textAlign: "center" }}>
              <div style={{ fontSize: "9px", color: "#3A3A3A", fontWeight: 500 }}>NL Arquitetos</div>
              <div style={{ fontSize: "7px", color: "#888", textTransform: "uppercase", marginTop: "2px" }}>Contratados</div>
            </div>
            <div style={{ borderTop: "0.5px solid #3A3A3A", paddingTop: "4mm", textAlign: "center" }}>
              <div style={{ fontSize: "9px", color: "#3A3A3A", fontWeight: 500 }}>Leandro Henrique da Silva</div>
              <div style={{ fontSize: "7px", color: "#888", marginTop: "2px" }}>CPF: 425.437.568-92 · CAU A252250-0</div>
            </div>
            <div style={{ borderTop: "0.5px solid #3A3A3A", paddingTop: "4mm", textAlign: "center" }}>
              <div style={{ fontSize: "9px", color: "#3A3A3A", fontWeight: 500 }}>Neandro Jacque Garcia</div>
              <div style={{ fontSize: "7px", color: "#888", marginTop: "2px" }}>CAU A264629-3</div>
            </div>
          </div>
          <div style={{ marginBottom: "8mm", borderTop: "0.3px solid #f0ede8", paddingTop: "8mm" }}>
            <div style={{ fontSize: "8px", color: "#8B7355", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "6mm" }}>Testemunhas</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20mm" }}>
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
          <div style={{ textAlign: "center", marginTop: "10mm" }}>
            <div style={{ fontSize: "9px", color: "#888" }}>São José dos Campos – SP, {c.data}</div>
          </div>
          <Footer />
        </div>

        {/* ══ ANEXO I ══ */}
        <div className="nova-pagina" style={S.section}>
          <PageHeader numero={c.numero} label="Anexo I — Escopo dos Serviços" />
          <div style={{ fontSize: "8px", color: "#8B7355", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "2mm" }}>Anexo I</div>
          <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "18px", fontWeight: 300, fontStyle: "italic", color: "#3A3A3A", marginBottom: "4mm" }}>Escopo dos Serviços de Projeto</div>
          <div style={{ fontSize: "8px", color: "#aaa", marginBottom: "8mm", fontStyle: "italic" }}>Integra o Contrato de Prestação de Serviços de Arquitetura — NL Arquitetos</div>
          <div style={S.body}>
            <p style={S.p}>1.1 O presente Anexo, rubricado e assinado pelas partes, integra de forma indissociável o Contrato de Prestação de Serviços de Arquitetura celebrado entre CONTRATANTE e os CONTRATADOS, tendo por finalidade a definição e delimitação do escopo dos serviços técnicos especializados a serem executados, em conformidade com as disposições estabelecidas no instrumento contratual principal.</p>
            <p style={S.p}>1.2 A delimitação dos serviços objeto deste contrato será realizada por meio da seleção das modalidades de projeto indicadas a seguir, podendo o CONTRATANTE optar pela contratação de uma ou mais modalidades, conforme suas necessidades.</p>
          </div>
          <div style={{ marginTop: "8mm" }}>
            <div style={{ fontSize: "9px", color: "#8B7355", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500, marginBottom: "4mm" }}>2.0 — Identificação do Projeto</div>
            <div style={S.body}>
              <p style={S.p}>Em relação aos serviços técnicos especializados objeto do presente contrato, concernentes ao desenvolvimento de projetos, as partes, em comum acordo, assinalam a seguinte modalidade a ser executada pelos CONTRATADOS:</p>
              <p style={S.p}><span style={{ fontWeight: 500, color: "#8B7355" }}>{tipoArqInt}</span> 2.1 PROJETO DE ARQUITETURA RESIDENCIAL — Elaboração e desenvolvimento integral do projeto arquitetônico destinado à construção de edificação para fins de uso exclusivamente residencial, em conformidade com as normas técnicas aplicáveis e a legislação urbanística vigente.</p>
              <p style={S.p}><span style={{ fontWeight: 500, color: "#8B7355" }}>{tipoCom}</span> 2.2 PROJETO DE ARQUITETURA COMERCIAL — Elaboração de projeto arquitetônico abrangente, destinado à construção, reforma ou adaptação de edificações ou espaços físicos, com a finalidade precípua de abrigar atividades de natureza comercial ou de prestação de serviços, em estrita conformidade com as normas técnicas e legais aplicáveis.</p>
              <p style={S.p}><span style={{ fontWeight: 500, color: "#8B7355" }}>{tipoInt}</span> 2.3 PROJETO DE ARQUITETURA DE INTERIORES — Elaboração de projeto de arquitetura de interiores, compreendendo a concepção, planejamento e desenvolvimento de soluções técnicas e estéticas destinadas à organização, funcionalidade e ambientação dos espaços internos.</p>
            </div>
          </div>
          <div style={{ marginTop: "8mm" }}>
            <div style={{ fontSize: "9px", color: "#8B7355", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500, marginBottom: "4mm" }}>3.0 — Identificação do Imóvel</div>
            <div style={S.body}>
              <p style={S.p}>3.1 O projeto objeto do presente contrato refere-se ao imóvel localizado em: <span style={{ color: "#8B7355", fontWeight: 500 }}>{c.endereco_imovel}</span></p>
              <p style={S.p}>3.1.1 Tipo de Imóvel: [ ] Terreno  [ ] Residência Existente  [ ] Apartamento  [ ] Sala Comercial  [ ] Outro</p>
              <p style={S.p}>3.2 Quando se tratar de projeto arquitetônico para construção, o imóvel possui área aproximada de <span style={{ color: "#8B7355" }}>{c.area_terreno} m²</span> de terreno, com previsão estimada de <span style={{ color: "#8B7355" }}>{c.area_construida} m²</span> de área construída, podendo esta sofrer ajustes ao longo do desenvolvimento do projeto, conforme necessidades técnicas, legais ou programáticas identificadas durante o processo de concepção.</p>
              <p style={S.p}>3.3 Quando se tratar de projeto de reforma, adaptação ou arquitetura de interiores, a área aproximada objeto de intervenção corresponde a <span style={{ color: "#8B7355" }}>{c.area_construida} m²</span>, referente aos ambientes indicados pelo CONTRATANTE.</p>
              <p style={S.p}>3.4 O desenvolvimento do projeto será realizado com base nas informações, documentos e medidas fornecidos pelo CONTRATANTE ou por profissionais por ele indicados. Os CONTRATADOS não se responsabilizam por eventuais divergências, inconsistências ou imprecisões contidas nesses documentos.</p>
              <p style={S.p}>3.5 Matrícula do Imóvel (quando aplicável) — Matrícula nº: {c.matricula}  ·  Cartório: {c.cartorio}</p>
              <p style={S.p}>3.6 O projeto arquitetônico desenvolvido pelos CONTRATADOS está vinculado exclusivamente ao imóvel identificado neste anexo, sendo vedada sua utilização em outro terreno, unidade imobiliária ou empreendimento sem autorização expressa dos CONTRATADOS.</p>
            </div>
          </div>
          <div style={{ marginTop: "8mm" }}>
            <div style={{ fontSize: "9px", color: "#8B7355", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500, marginBottom: "4mm" }}>4.0 — Escopo dos Serviços</div>
            <div style={S.body}>
              <p style={S.p}>4.1 Os serviços técnicos a serem prestados pelos CONTRATADOS compreendem o desenvolvimento do projeto arquitetônico conforme a modalidade assinalada na Cláusula 2.0 – Identificação do Projeto, observadas as etapas descritas neste item.</p>
              <p style={S.p}>4.2.1 Levantamento de dados — Verificação dos documentos disponíveis do terreno ou da edificação existente, como matrícula, escritura, levantamento planialtimétrico, projetos anteriores ou "as built", quando houver, com o objetivo de identificar informações relevantes para o desenvolvimento do projeto.</p>
              <p style={S.p}>4.2.2 Briefing e Programa de Necessidades — Realização de reunião para compreensão dos objetivos, expectativas e diretrizes iniciais do projeto. Definição dos ambientes, funções, dimensões aproximadas e demais requisitos necessários para o adequado desenvolvimento do projeto arquitetônico.</p>
              <p style={S.p}>4.2.3 Estudo Preliminar — Realização de visita técnica ao terreno ou imóvel para reconhecimento das condições físicas do local, análise do entorno, acessos e demais características que possam influenciar o desenvolvimento do projeto. Elaboração de planta baixa com proposta inicial de organização espacial e distribuição dos ambientes.</p>
              <p style={S.p}>4.2.4 Concepção Tridimensional (3D) — Elaboração de imagens realistas em perspectiva tridimensional das fachadas principais da edificação. Produção de vídeo de apresentação do modelo tridimensional do projeto.</p>
              <p style={S.p}>4.2.5 Projeto Legal — Elaboração e entrega do conjunto de desenhos técnicos e documentos necessários para submissão e aprovação do projeto arquitetônico junto aos órgãos públicos competentes e, quando aplicável, junto ao condomínio.</p>
              <p style={S.p}>4.2.6 Projeto Executivo De Arquitetura — O Projeto Executivo corresponde à etapa final de desenvolvimento do projeto arquitetônico, necessárias para compreensão arquitetônica e orientação da execução da obra. Inclui: planta de layout, planta construtiva, planta paginação de piso, planta luminotécnica, planta de teto, indicação de pontos elétricos e luminotécnicos, indicação de pontos de ar-condicionado, planta de cobertura, detalhamentos de esquadrias, elevações e cortes.</p>
            </div>
          </div>
          <div style={{ marginTop: "8mm" }}>
            <div style={{ fontSize: "9px", color: "#8B7355", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500, marginBottom: "4mm" }}>4.3.5 — Dos Planos de Serviço</div>
            <div style={S.body}>
              <p style={S.p}><span style={{ fontWeight: 500 }}>PLANO EXECUTIVO:</span> Compreende todas as etapas de desenvolvimento do projeto até a entrega dos cadernos técnicos executivos, conforme escopo da modalidade contratada. Inclui orientação na entrega dos cadernos técnicos e suporte técnico por 90 (noventa) dias após a entrega para projetos de Arquitetura+Interiores e Interiores, e 60 (sessenta) dias para projetos Comerciais.</p>
              <p style={S.p}><span style={{ fontWeight: 500 }}>PLANO COMPLETO:</span> Inclui tudo do Plano Executivo, acrescido de: (i) visitas técnicas à obra — 04 (quatro) visitas para projetos de Arquitetura+Interiores e Interiores, e 03 (três) visitas para projetos Comerciais — com emissão de relatório técnico por visita; e (ii) visitas em lojas e showrooms para curadoria conjunta de materiais, acabamentos e mobiliário. As visitas deverão ser previamente agendadas, conforme disponibilidade das partes, e realizadas durante a execução da obra.</p>
              <p style={S.p}>Plano contratado: <span style={{ fontWeight: 500, color: "#8B7355" }}>{planoExec}</span> Plano Executivo    <span style={{ fontWeight: 500, color: "#8B7355" }}>{planoComp}</span> Plano Completo</p>
            </div>
          </div>
          <Footer />
        </div>

        {/* ══ ANEXO II ══ */}
        <div className="nova-pagina" style={S.section}>
          <PageHeader numero={c.numero} label="Anexo II — Cronograma" />
          <div style={{ fontSize: "8px", color: "#8B7355", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "2mm" }}>Anexo II</div>
          <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontSize: "18px", fontWeight: 300, fontStyle: "italic", color: "#3A3A3A", marginBottom: "4mm" }}>Cronograma de Desenvolvimento do Projeto</div>
          <div style={{ fontSize: "8px", color: "#aaa", marginBottom: "8mm", fontStyle: "italic" }}>Integra o Contrato de Prestação de Serviços de Arquitetura — NL Arquitetos</div>
          <div style={S.body}>
            <p style={S.p}>1.1 O presente Anexo integra de forma indissociável o Contrato de Prestação de Serviços de Arquitetura celebrado entre CONTRATANTE e CONTRATADOS, tendo por finalidade estabelecer o cronograma estimado para o desenvolvimento das etapas do