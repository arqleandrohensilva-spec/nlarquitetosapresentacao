import CaptacaoNav from "@/components/CaptacaoNav";
import Section01Cover from "@/components/captacao/Section01Cover";
import Section02Manifesto from "@/components/captacao/Section02Manifesto";
import Section03Cores from "@/components/captacao/Section03Cores";
import Section04ComoViraProjeto from "@/components/captacao/Section04ComoViraProjeto";
import Section05SobreNos from "@/components/captacao/Section05SobreNos";
import Section06Pilares from "@/components/captacao/Section06Pilares";
import Section07Dores from "@/components/captacao/Section07Dores";
import Section08Processos from "@/components/captacao/Section08Processos";
import Section09Galeria from "@/components/captacao/Section09Galeria";
import Section10AlemDoProjeto from "@/components/captacao/Section10AlemDoProjeto";
import Section11Portfolio from "@/components/captacao/Section11Portfolio";
import Section12Fechamento from "@/components/captacao/Section12Fechamento";

/* ============================================================================
   NL ARQUITETOS · APRESENTAÇÃO DE CAPTAÇÃO PREMIUM
   ----------------------------------------------------------------------------
   Documento estratégico para primeiro contato com cliente residencial
   médio e alto padrão (ARQ + INT). Sem valores. Sem detalhamento técnico
   profundo. Foco: identidade, método, sensibilidade, repertório.
   ============================================================================ */

const Captacao = () => {
  return (
    <main className="relative w-full overflow-x-hidden" style={{ background: "#1A1816" }}>
      <CaptacaoNav />
      <Section01Cover />
      <Section02Manifesto />
      <Section03Cores />
      <Section04ComoViraProjeto />
      <Section05SobreNos />
      <Section06Pilares />
      <Section07Dores />
      <Section08Processos />
      <Section09Galeria />
      <Section10AlemDoProjeto />
      <Section11Portfolio />
      <Section12Fechamento />
    </main>
  );
};

export default Captacao;
