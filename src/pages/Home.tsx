import { Link } from "react-router-dom";

const LOGO_PRETA = "/logo-preta.png";

const Home = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
      {/* Header */}
      <header className="px-6 md:px-10 py-6 flex items-center justify-between">
        <img
          src={LOGO_PRETA}
          alt="NL Arquitetos"
          className="h-8 md:h-10 w-auto object-contain"
          width={120}
          height={40}
        />
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          Apresentações · 2026
        </span>
      </header>

      {/* Hero / Intro */}
      <section className="flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-16 md:py-24">
        <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-8">
          NL Arquitetos
        </p>

        <h1 className="display-hero max-w-[18ch] mb-10">
          Cada projeto começa antes da obra.
        </h1>

        <p className="lede-editorial max-w-[42ch] text-muted-foreground mb-16 md:mb-24">
          Escolha por onde começar — apresentamos duas frentes de trabalho,
          conduzidas com o mesmo rigor editorial.
        </p>

        {/* Dois cartões */}
        <div className="grid md:grid-cols-2 gap-px bg-border max-w-5xl">
          <Link
            to="/apresentacao/arqint"
            className="group bg-background p-8 md:p-12 transition-colors hover:bg-muted/40 flex flex-col justify-between min-h-[280px]"
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-6">
                01 · Proposta
              </p>
              <h2 className="display-section mb-4">
                Arquitetura<br />+ Interiores
              </h2>
              <p className="body-editorial text-muted-foreground max-w-[34ch]">
                Apresentação completa de captação para projetos integrados de
                arquitetura e interiores.
              </p>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground mt-8 inline-flex items-center gap-2 group-hover:gap-4 transition-all">
              Acessar /apresentacao/arqint
              <span aria-hidden>→</span>
            </span>
          </Link>

          <Link
            to="/apresentacao/int"
            className="group bg-background p-8 md:p-12 transition-colors hover:bg-muted/40 flex flex-col justify-between min-h-[280px]"
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-6">
                02 · Proposta
              </p>
              <h2 className="display-section mb-4">
                Interiores
              </h2>
              <p className="body-editorial text-muted-foreground max-w-[34ch]">
                Interiores não se decoram. Se projetam. Apresentação dedicada
                ao escopo de interiores.
              </p>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground mt-8 inline-flex items-center gap-2 group-hover:gap-4 transition-all">
              Acessar /apresentacao/int
              <span aria-hidden>→</span>
            </span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-10 py-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          NL Arquitetos · desde 2021
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          SP · Vale do Paraíba · Mantiqueira
        </span>
      </footer>
    </main>
  );
};

export default Home;
