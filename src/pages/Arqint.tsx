import Editable from "@/components/Editable";

/* ============================================================================
   /arqint · PÁGINA EM BRANCO
   ----------------------------------------------------------------------------
   Estrutura mínima no padrão editorial NL Arquitetos.
   Pronta para receber conteúdo. Oculta da navegação.
   ============================================================================ */

const Arqint = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-4xl fade-up">
          <Editable
            id="arqint.eyebrow"
            className="eyebrow-editorial text-primary/80 mb-8 inline-block"
          >
            NL ARQUITETOS · ARQINT
          </Editable>

          <Editable
            as="h1"
            id="arqint.title"
            className="display-hero text-foreground mb-8"
          >
            Página em branco.
          </Editable>

          <Editable
            as="p"
            id="arqint.lede"
            className="lede-editorial text-foreground/70 max-w-2xl"
          >
            Espaço pronto para receber conteúdo editorial.
          </Editable>
        </div>
      </section>
    </main>
  );
};

export default Arqint;
