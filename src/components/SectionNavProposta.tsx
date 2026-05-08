import { useEffect, useState } from "react";
import { clearAllEdits } from "./Editable";
import { isEditMode } from "@/lib/edit-mode";


const LOGO_PRETA = "/logo-preta.png";
const LOGO_BRANCA = "/logo-branca.png";

const SECTIONS = [
  { id: "capa", label: "Capa" },
  { id: "manifesto", label: "Carta" },
  { id: "apresentacao", label: "Apresentação" },
  { id: "diagnostico", label: "Diagnóstico" },
  { id: "case", label: "Casa Costas" },
  { id: "interiores", label: "Interiores" },
  { id: "portfolio", label: "Portfólio" },
  { id: "etapas", label: "Etapas do projeto" },
  { id: "escopo", label: "Escopo técnico" },
  { id: "pilares", label: "Nossos Pilares" },
  { id: "cronograma", label: "Cronograma" },
  { id: "beneficios", label: "Benefícios" },
  { id: "investimento", label: "Pacotes" },
  { id: "diferenciais", label: "Diferenciais" },
  { id: "nota", label: "Nota" },
  { id: "proximos", label: "Próximos passos" },
  { id: "encerramento", label: "Encerramento" },
];

const SectionNavProposta = () => {
  const [active, setActive] = useState("capa");
  const [showHelper, setShowHelper] = useState(true);
  const editing = isEditMode();

  const DARK_SECTIONS = new Set(["capa", "diagnostico", "cronograma", "nota", "encerramento", "condicoes"]);
  const onDarkSection = DARK_SECTIONS.has(active);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    const t = setTimeout(() => setShowHelper(false), 6000);
    return () => {
      obs.disconnect();
      clearTimeout(t);
    };
  }, [SECTIONS]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 px-6 md:px-10 py-5 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-6 md:gap-12 w-full">
          <a
            href="#capa"
            className="pointer-events-auto block transition-opacity hover:opacity-70 shrink-0"
            aria-label="NL Arquitetos"
          >
            <img
              src={onDarkSection ? LOGO_BRANCA : LOGO_PRETA}
              alt="NL Arquitetos"
              className="h-7 md:h-9 w-auto object-contain transition-opacity duration-500"
              width={100}
              height={36}
            />
          </a>
          <nav className="pointer-events-auto flex items-center gap-4 md:gap-8 overflow-x-auto no-scrollbar py-2">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`font-mono text-[8px] md:text-[10px] uppercase tracking-[0.2em] whitespace-nowrap transition-colors hover:text-primary ${
                  active === s.id
                    ? "text-primary"
                    : onDarkSection
                    ? "text-white/40"
                    : "text-black/40"
                }`}
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
        {editing && (
          <button
            onClick={() => {
              if (confirm("Restaurar todos os textos originais?")) clearAllEdits();
            }}
            className="pointer-events-auto font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors ml-4 shrink-0"
          >
            Restaurar
          </button>
        )}
      </header>

      {editing && showHelper && (
        <div data-pdf-hide className="fixed bottom-6 left-6 z-40 max-w-xs animate-fade-in">
          <div className="bg-card border border-border/60 px-4 py-3 backdrop-blur shadow-lg">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-1">
              Edição inline
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Clique em qualquer texto para editar. Suas alterações são salvas automaticamente.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionNavProposta;
