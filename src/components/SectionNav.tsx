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

const SectionNav = () => {
  const [active, setActive] = useState("capa");
  const [showHelper, setShowHelper] = useState(true);
  const editing = isEditMode();
  // Seções com fundo escuro — header usa logo branca para garantir contraste
  const DARK_SECTIONS = new Set(["capa", "diagnostico", "cronograma", "nota", "encerramento"]);
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
  }, []);

  return (
    <>
      {/* Top: brand + reset (reset only in edit mode) */}
      <header className="fixed top-0 inset-x-0 z-40 px-6 md:px-10 py-5 flex items-center justify-between pointer-events-none">
        <a
          href="#capa"
          className="pointer-events-auto block transition-opacity hover:opacity-70"
          aria-label="NL Arquitetos"
        >
          <img
            src={onDarkSection ? LOGO_BRANCA : LOGO_PRETA}
            alt="NL Arquitetos"
            className="h-8 md:h-10 w-auto object-contain transition-opacity duration-500"
            width={120}
            height={40}
          />
        </a>
        {editing && (
          <button
            onClick={() => {
              if (confirm("Restaurar todos os textos originais?")) clearAllEdits();
            }}
            className="pointer-events-auto font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors"
          >
            Restaurar texto
          </button>
        )}
      </header>

      {/* Edit helper toast — only in edit mode */}
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

export default SectionNav;
