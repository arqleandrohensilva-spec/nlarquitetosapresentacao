import { useState } from "react";
import { cn } from "@/lib/utils";

type Estado = "MG" | "SP" | null;

const MapaAtuacao = () => {
  const [hover, setHover] = useState<Estado>(null);

  const isActive = (e: Estado) => hover === e;
  const isDimmed = (e: Estado) => hover !== null && hover !== e;

  const frase =
    hover === "SP"
      ? { titulo: "Sede principal em SP", sub: "Onde nascem os projetos da NL." }
      : hover === "MG"
        ? { titulo: "Atuação em projetos em MG", sub: "Acompanhamento e execução em obra." }
        : { titulo: "Passe o mouse sobre um estado", sub: "Para ver onde a NL atua." };

  return (
    <div className="flex flex-col items-start pt-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-10 items-center w-full">
      <svg
        viewBox="0 0 600 460"
        className="w-full h-auto"
        aria-label="Mapa de Minas Gerais e São Paulo"
      >
        <defs>
          <filter id="glow-mg" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-sp" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* MINAS GERAIS */}
        <g
          onMouseEnter={() => setHover("MG")}
          onMouseLeave={() => setHover(null)}
          onTouchStart={() => setHover("MG")}
          onTouchEnd={() => setHover(null)}
          style={{ cursor: "pointer" }}
          className="transition-opacity duration-300"
          opacity={isDimmed("MG") ? 0.35 : 1}
        >
          <path
            d="M155,140 L180,118 L215,108 L255,100 L295,95 L335,92 L375,98 L410,108 L440,122 L470,142 L490,168 L502,198 L505,228 L498,255 L478,275 L450,285 L418,288 L395,295 L378,310 L362,322 L345,325 L325,318 L305,308 L285,295 L262,285 L238,278 L215,268 L192,252 L172,232 L158,208 L150,180 Z"
            fill={isActive("MG") ? "hsl(var(--primary) / 0.85)" : "hsl(var(--primary) / 0.55)"}
            stroke="hsl(var(--primary))"
            strokeWidth={isActive("MG") ? 2 : 1.2}
            strokeLinejoin="round"
            filter={isActive("MG") ? "url(#glow-mg)" : undefined}
            className="transition-all duration-300"
          />
          <text
            x="335"
            y="195"
            textAnchor="middle"
            fontSize="10"
            letterSpacing="2"
            fill="#E8E4DF"
            className="font-mono-edit pointer-events-none"
          >
            MINAS GERAIS
          </text>
          {/* Belo Horizonte */}
          <circle cx="395" cy="248" r={isActive("MG") ? 6 : 4} fill="hsl(var(--primary))" className="transition-all duration-300" />
          <circle cx="395" cy="248" r={isActive("MG") ? 16 : 9} fill="hsl(var(--primary) / 0.3)" className="transition-all duration-300" />
          {isActive("MG") && (
            <circle cx="395" cy="248" r="24" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" className="animate-pulse" />
          )}
        </g>

        {/* SÃO PAULO */}
        <g
          onMouseEnter={() => setHover("SP")}
          onMouseLeave={() => setHover(null)}
          onTouchStart={() => setHover("SP")}
          onTouchEnd={() => setHover(null)}
          style={{ cursor: "pointer" }}
          className="transition-opacity duration-300"
          opacity={isDimmed("SP") ? 0.35 : 1}
        >
          <path
            d="M105,340 L135,322 L172,315 L210,318 L248,322 L285,328 L320,332 L352,330 L380,322 L405,318 L425,325 L438,340 L432,358 L412,368 L388,372 L362,370 L338,372 L312,378 L288,385 L262,388 L235,385 L208,378 L182,370 L158,362 L132,355 L112,348 Z"
            fill={isActive("SP") ? "hsl(var(--primary) / 0.85)" : "hsl(var(--primary) / 0.55)"}
            stroke="hsl(var(--primary))"
            strokeWidth={isActive("SP") ? 2 : 1.2}
            strokeLinejoin="round"
            filter={isActive("SP") ? "url(#glow-sp)" : undefined}
            className="transition-all duration-300"
          />
          <text
            x="265"
            y="350"
            textAnchor="middle"
            fontSize="10"
            letterSpacing="2"
            fill="#E8E4DF"
            className="font-mono-edit pointer-events-none"
          >
            SÃO PAULO
          </text>
          {/* Capital SP */}
          <circle cx="372" cy="362" r={isActive("SP") ? 6 : 4} fill="hsl(var(--primary))" className="transition-all duration-300" />
          <circle cx="372" cy="362" r={isActive("SP") ? 16 : 9} fill="hsl(var(--primary) / 0.3)" className="transition-all duration-300" />
          {isActive("SP") && (
            <circle cx="372" cy="362" r="24" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" className="animate-pulse" />
          )}
        </g>
      </svg>

        {/* Frase contextual ao lado do mapa */}
        <div className="md:w-56 md:border-l md:border-primary/25 md:pl-8 min-h-[120px] flex flex-col justify-center">
          <p
            key={hover ?? "idle"}
            className="font-mono-edit text-[10px] uppercase tracking-[0.3em] text-primary mb-3 animate-fade-in"
          >
            {hover ? `· ${hover}` : "· Mapa"}
          </p>
          <p
            key={`t-${hover ?? "idle"}`}
            className="font-display text-xl md:text-2xl leading-tight text-[#E8E4DF] animate-fade-in"
          >
            {frase.titulo}
          </p>
          <p className="font-display text-sm text-[#E8E4DF]/60 mt-2 leading-relaxed">
            {frase.sub}
          </p>
        </div>
      </div>

      {/* legenda */}
      <div className="mt-8 w-full border-t border-primary/30 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <button
          type="button"
          onMouseEnter={() => setHover("SP")}
          onMouseLeave={() => setHover(null)}
          className={cn(
            "flex items-start gap-3 text-left transition-all duration-300 p-2 -m-2 rounded",
            isActive("SP") && "bg-primary/10",
            isDimmed("SP") && "opacity-50",
          )}
        >
          <span className={cn("w-2 h-2 rounded-full bg-primary mt-2 transition-all", isActive("SP") && "scale-150 shadow-[0_0_8px_hsl(var(--primary))]")} />
          <div>
            <p className="font-mono-edit text-[10px] uppercase tracking-[0.3em] text-[#E8E4DF]">
              São Paulo
            </p>
            <p className="font-display text-sm text-[#E8E4DF]/70 mt-1">
              Sede principal
            </p>
          </div>
        </button>
        <button
          type="button"
          onMouseEnter={() => setHover("MG")}
          onMouseLeave={() => setHover(null)}
          className={cn(
            "flex items-start gap-3 text-left transition-all duration-300 p-2 -m-2 rounded",
            isActive("MG") && "bg-primary/10",
            isDimmed("MG") && "opacity-50",
          )}
        >
          <span className={cn("w-2 h-2 rounded-full bg-primary mt-2 transition-all", isActive("MG") && "scale-150 shadow-[0_0_8px_hsl(var(--primary))]")} />
          <div>
            <p className="font-mono-edit text-[10px] uppercase tracking-[0.3em] text-[#E8E4DF]">
              Minas Gerais
            </p>
            <p className="font-display text-sm text-[#E8E4DF]/70 mt-1">
              Atuação em projetos
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default MapaAtuacao;
