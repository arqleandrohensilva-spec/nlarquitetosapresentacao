import Editable from "@/components/Editable";
import CaptacaoNav from "@/components/CaptacaoNav";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import MapaAtuacao from "@/components/MapaAtuacao";
import { cn } from "@/lib/utils";
import imgComoCroqui from "@/assets/como-vira/01-croqui.png";
import imgComoVolumetria from "@/assets/como-vira/02-volumetria.png";
import imgComoPlanta from "@/assets/como-vira/03-planta.png";
import imgComoRender from "@/assets/como-vira/04-render.png";
import imgAlemProjeto from "@/assets/alem-projeto-bg.png";
import imgCasaJC from "@/assets/portfolio/casa-jc.png";
import imgChaleJuruva from "@/assets/portfolio/chale-juruva.png";
import imgFamiliaBorges from "@/assets/portfolio/familia-borges.png";
import imgGourmetJardim from "@/assets/portfolio/gourmet-jardim.png";
import imgGourmetSalinas from "@/assets/portfolio/gourmet-salinas.png";

/* ============================================================================
   NL ARQUITETOS · APRESENTAÇÃO DE CAPTAÇÃO PREMIUM
   ----------------------------------------------------------------------------
   Documento estratégico para primeiro contato com cliente residencial.
   Sem valores. Sem detalhamento técnico aprofundado.
   Foco: identidade, método, sensibilidade, repertório.
   ============================================================================ */

// Imagens de portfólio reais do projeto (Dropbox)
const IMG_HERO =
  "https://www.dropbox.com/scl/fi/h4zgd1j7vbpy7vnp8nc93/Capa-Apresenta-o.jpg?rlkey=42sutzf60yam0hhmjvyrvfwym&raw=1";
const IMG_CASE =
  "https://www.dropbox.com/scl/fi/dibhyhod5xpz47v3l9rp3/Gemini_Generated_Image_896gxz896gxz896g-1.png?rlkey=q1ltxbytg9eo2ynmbz0njb0f3&raw=1";
const IMG_LEANDRO =
  "https://www.dropbox.com/scl/fi/uydr0i2jkh4eq2semj7ey/Leandro.png?rlkey=1784s67wn6c6hjdma6wkgy91a&raw=1";
const IMG_NEANDRO =
  "https://www.dropbox.com/scl/fi/6060a867ejklropxdqju3/Neandro.png?rlkey=3z4ynhzr1lq6treoni9h1fqyr&raw=1";

const Captacao = () => {
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <CaptacaoNav />

      {/* ============================================================
          01 · CAPA
          ============================================================ */}
      <section
        id="capa"
        className="relative min-h-screen flex flex-col justify-end px-6 md:px-16 lg:px-24 py-20"
      >
        <img
          src={IMG_HERO}
          alt="NL Arquitetos · interior residencial"
          className="absolute inset-0 w-full h-full object-cover opacity-90 contrast-110 saturate-125"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background/95" />
        <div className="absolute inset-0 vignette opacity-70" />

        <div className="relative z-10 max-w-4xl fade-up">
          <Editable id="cap.capa.eyebrow" className="eyebrow mb-8 inline-block">
            Apresentação · Confidencial
          </Editable>

          <Editable
            as="h1"
            id="cap.capa.title"
            multiline
            className="font-display text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.95] text-foreground mb-8 text-balance"
          >
            O lar como
            <br />
            <em className="text-primary not-italic font-light">obra</em> de uma vida.
          </Editable>

          <div className="gold-line w-32 mb-8" />

          <Editable
            id="cap.capa.subtitle"
            multiline
            className="font-display italic text-xl md:text-2xl text-foreground/75 max-w-2xl block"
          >
            Arquitetura e interiores conduzidos com método, sensibilidade e o cuidado
            de quem entende que cada metro carrega uma história.
          </Editable>

          <div className="mt-12 flex items-center gap-4 text-muted-foreground">
            <span className="h-px w-12 bg-primary/40" />
            <Editable
              id="cap.capa.tag"
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80"
            >
              NL Arquitetos · Estúdio
            </Editable>
          </div>
        </div>

        <div className="relative z-10 mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4 text-muted-foreground">
          <Editable
            id="cap.capa.client"
            className="font-mono text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase text-primary/80"
          >
            Para · [Nome do Cliente]
          </Editable>
          <Editable
            id="cap.capa.date"
            className="font-mono text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase"
          >
            São José dos Campos · 2025
          </Editable>
        </div>
      </section>

      {/* ============================================================
          02 · MANIFESTO
          ============================================================ */}
      <section
        id="manifesto"
        className="manifesto-section relative min-h-screen flex items-center px-5 sm:px-8 md:px-16 lg:px-24 py-20 sm:py-24 md:py-32 lg:py-36 overflow-hidden"
        style={{ backgroundColor: "#1A1816", color: "#E8E4DF" }}
      >
        {/* Filete bronze fino no topo absoluto */}
        <div
          aria-hidden
          className="absolute top-0 left-0 right-0 h-px"
          style={{ backgroundColor: "rgba(139, 115, 85, 0.3)" }}
        />

        {/* Textura grain sutil (≈4%) */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none mix-blend-overlay"
          style={{
            opacity: 0.04,
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            backgroundSize: "240px 240px",
          }}
        />

        {/* Numeral 02 gigante em outline bronze como pano de fundo */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none flex items-center justify-end px-5 sm:px-8 md:px-16 lg:px-24"
        >
          <span
            className="font-display font-light leading-none select-none"
            style={{
              fontSize: "clamp(18rem, 42vw, 38rem)",
              color: "transparent",
              WebkitTextStroke: "1px rgba(139, 115, 85, 0.08)",
              letterSpacing: "-0.05em",
              transform: "translateY(-2%)",
            }}
          >
            02
          </span>
        </div>

        <div className="manifesto-grid relative z-10 grid grid-cols-12 gap-6 md:gap-8 w-full max-w-7xl mx-auto">
          <div className="col-span-12 md:col-span-3">
            <span
              className="font-mono-edit text-[10px] tracking-[0.3em] block mb-2"
              style={{ color: "rgba(232, 228, 223, 0.55)" }}
            >
              02
            </span>
            <Editable
              id="cap.manifesto.eyebrow"
              className="font-mono-edit text-[10px] uppercase tracking-[0.3em]"
              style={{ color: "#8B7355" }}
            >
              Manifesto
            </Editable>
          </div>

          <div className="col-span-12 md:col-span-9">
            <Editable
              as="h2"
              id="cap.manifesto.title"
              multiline
              className="manifesto-title font-display leading-[1.04] tracking-[-0.01em] mb-10 sm:mb-12 md:mb-16 lg:mb-20 text-balance"
              style={{ color: "#E8E4DF" }}
            >
              Antes de desenhar,
              <br />
              <em className="not-italic font-light" style={{ color: "#8B7355" }}>
                escutamos.
              </em>
            </Editable>

            <div className="manifesto-paragraphs grid md:grid-cols-2 gap-x-10 lg:gap-x-14 gap-y-7 md:gap-y-10 max-w-4xl">
              <Editable
                id="cap.manifesto.p1"
                multiline
                as="p"
                className="manifesto-paragraph font-display leading-[1.65] tracking-[0.005em] text-pretty"
                style={{ color: "rgba(232, 228, 223, 0.82)", hyphens: "none", WebkitHyphens: "none" }}
              >
                A NL não começa pelo desenho. Começa pela escuta — entendendo o terreno, a família, o modo de viver. Só depois o primeiro traço aparece. E quando aparece, já foi validado.
              </Editable>
              <Editable
                id="cap.manifesto.p2"
                multiline
                as="p"
                className="manifesto-paragraph font-display leading-[1.65] tracking-[0.005em] text-pretty"
                style={{ color: "rgba(232, 228, 223, 0.82)" }}
              >
                Cada projeto que entregamos existe porque alguém confiou em nós antes de existir uma única parede. Essa confiança não se paga com estética — se honra com método, documentação e resultado previsível.
              </Editable>
            </div>

            <div
              className="manifesto-quote-wrap mt-12 sm:mt-16 md:mt-20 lg:mt-24 pl-5 sm:pl-6 md:pl-8 border-l max-w-3xl"
              style={{ borderColor: "rgba(139, 115, 85, 0.5)" }}
            >
              <Editable
                id="cap.manifesto.quote"
                multiline
                as="p"
                className="manifesto-quote font-display italic leading-[1.35] tracking-[-0.005em] text-pretty"
                style={{ color: "#8B7355" }}
              >
                "Beleza sem método é apenas decoração. Arquitetura é a decisão tomada antes do primeiro traço."
              </Editable>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          04 · COMO VIRA PROJETO
          ============================================================ */}
      <section
        id="como-vira"
        className="relative min-h-screen lg:h-screen flex items-center px-6 md:px-12 lg:px-16 xl:px-20 py-12 lg:py-10 overflow-hidden"
      >
        {/* filete bronze topo */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ backgroundColor: "rgba(139, 115, 85, 0.3)" }}
        />
        {/* grain sutil */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
        />
        {/* numeral 04 decorativo */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 top-16 select-none font-display leading-none"
          style={{
            fontSize: "clamp(18rem, 42vw, 38rem)",
            WebkitTextStroke: "1px rgba(139, 115, 85, 0.08)",
            color: "transparent",
          }}
        >
          04
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:h-full lg:py-2">
          <div className="flex items-baseline justify-between mb-6 lg:mb-5 pb-3 border-b border-border/60">
            <div className="flex items-baseline gap-6">
              <span className="number-marker">04</span>
              <Editable id="cap.como.eyebrow" className="eyebrow">
                Como vira projeto
              </Editable>
            </div>
            <Editable
              id="cap.como.tag"
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block"
            >
              Da conversa ao desenho
            </Editable>
          </div>

          <Editable
            as="h2"
            id="cap.como.title"
            multiline
            className="font-display text-3xl md:text-4xl lg:text-[2.6rem] xl:text-5xl leading-[1.05] mb-6 lg:mb-7 text-balance max-w-4xl"
          >
            Do pensamento à <em className="text-primary not-italic">decisão</em>.
          </Editable>

          {/* Grid 2x2 narrativo: croqui → volumetria → planta → render */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-5 lg:flex-1 lg:min-h-0">
            {[
              {
                id: "01",
                img: imgComoCroqui,
                eyebrow: "Croqui",
                title: "O projeto começa na escuta.",
                sub: "Antes do traço, existe uma conversa.",
              },
              {
                id: "02",
                img: imgComoVolumetria,
                eyebrow: "DISPOSIÇÃO INTERNA",
                title: "A forma nasce da decisão.",
                sub: "Não do acaso — do método.",
              },
              {
                id: "03",
                img: imgComoPlanta,
                eyebrow: "VOLUMETRIA",
                title: "Antes do desenho, existe ordem.",
                sub: "Fluxo. Relação. Hierarquia.",
              },
              {
                id: "04",
                img: imgComoRender,
                eyebrow: "ENTREGA",
                title: "A forma não é criada.",
                sub: "Ela é consequência.",
              },
            ].map((step) => (
              <figure
                key={step.id}
                className="group relative overflow-hidden aspect-[4/3] md:aspect-[16/10] lg:aspect-auto lg:min-h-0 bg-[#1A1816] [will-change:transform] motion-safe:transition-shadow motion-safe:duration-700 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.55)]"
              >
                {/* imagem */}
                <img
                  src={step.img}
                  alt={step.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover [will-change:transform] motion-safe:transition-transform motion-safe:duration-[1600ms] motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:scale-[1.06]"
                />
                {/* gradient overlay para legibilidade — fade sutil no hover */}
                <div
                  aria-hidden
                  className="absolute inset-0 motion-safe:transition-opacity motion-safe:duration-700 motion-safe:ease-out group-hover:opacity-80"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(26,24,22,0.15) 0%, rgba(26,24,22,0.25) 45%, rgba(26,24,22,0.85) 100%)",
                  }}
                />
                {/* moldura bronze sutil — intensifica no hover */}
                <div
                  aria-hidden
                  className="absolute inset-0 motion-safe:transition-[box-shadow] motion-safe:duration-700"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(139,115,85,0.18)" }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 motion-safe:transition-opacity motion-safe:duration-700 group-hover:opacity-100"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(139,115,85,0.45)" }}
                />
                {/* numeral grande no canto superior */}
                <span
                  aria-hidden
                  className="absolute top-4 right-5 lg:top-5 lg:right-6 font-display leading-none select-none motion-safe:transition-[color,transform] motion-safe:duration-700 group-hover:-translate-y-0.5"
                  style={{
                    fontSize: "clamp(2.75rem, 4.5vw, 4.5rem)",
                    color: "rgba(255,255,255,0.10)",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {step.id}
                </span>
                {/* legenda — leve subida no hover */}
                <figcaption className="absolute inset-0 flex flex-col justify-end p-5 md:p-6 lg:p-7 [will-change:transform] motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-2.5">
                    <span
                      className="h-px w-7 origin-left motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-x-[2]"
                      style={{ backgroundColor: "rgba(139, 115, 85, 0.85)" }}
                    />
                    <Editable
                      id={`cap.como.step.${step.id}.eyebrow`}
                      className="font-mono text-[10px] uppercase tracking-[0.3em]"
                      style={{ color: "rgba(181, 164, 138, 0.95)" }}
                    >
                      {step.eyebrow}
                    </Editable>
                  </div>
                  <Editable
                    as="h3"
                    id={`cap.como.step.${step.id}.title`}
                    multiline
                    className="font-display text-[1.35rem] md:text-[1.55rem] lg:text-[1.7rem] xl:text-[1.85rem] leading-[1.1] tracking-[-0.01em] text-white text-balance mb-1.5"
                  >
                    {step.title}
                  </Editable>
                  <Editable
                    as="p"
                    id={`cap.como.step.${step.id}.sub`}
                    multiline
                    className="font-display italic text-sm md:text-base lg:text-[0.95rem] xl:text-base leading-snug text-pretty"
                    style={{ color: "rgba(181, 164, 138, 0.95)" }}
                  >
                    {step.sub}
                  </Editable>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Rodapé citação */}
          <div className="mt-6 lg:mt-5 flex justify-center">
            <div className="max-w-3xl text-center px-6">
              <div
                className="mx-auto mb-3 h-px w-12"
                style={{ backgroundColor: "rgba(139, 115, 85, 0.5)" }}
              />
              <Editable
                as="p"
                id="cap.como.note"
                multiline
                className="font-display italic text-base md:text-lg lg:text-xl leading-[1.35] text-foreground/85 text-balance"
              >
                "A forma é consequência da decisão — não da inspiração."
              </Editable>
              <div
                className="mx-auto mt-3 h-px w-12"
                style={{ backgroundColor: "rgba(139, 115, 85, 0.5)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          05 · SOBRE NÓS
          ============================================================ */}
      <section
        id="sobre"
        className="relative min-h-screen px-6 md:px-16 lg:px-24 py-20 lg:py-24 flex flex-col justify-center"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-baseline justify-between mb-12 border-b border-border/60 pb-4">
            <div className="flex items-baseline gap-6">
              <span className="number-marker">05</span>
              <Editable id="cap.sobre.eyebrow" className="eyebrow">
                Sobre nós
              </Editable>
            </div>
            <Editable
              id="cap.sobre.tag"
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block"
            >
              Dois arquitetos · Uma assinatura
            </Editable>
          </div>

          <div className="grid grid-cols-12 gap-x-10 gap-y-12 items-start">
            <div className="col-span-12 lg:col-span-6">
              <Editable
                as="h2"
                id="cap.sobre.title"
                multiline
                className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.0] text-balance mb-8"
              >
                Um escritório onde
                <br />
                <em className="text-primary not-italic">cada projeto é tratado como único.</em>
              </Editable>

              <Editable
                id="cap.sobre.body"
                multiline
                as="p"
                className="font-display text-base lg:text-lg leading-relaxed text-foreground/75 max-w-xl mb-6"
              >
                A NL nasceu da união entre dois arquitetos com visões complementares —
                um olhar voltado à composição arquitetônica e outro à atmosfera
                interior. Juntos, fundamos um escritório que entrega projetos integrais,
                onde estrutura e alma caminham lado a lado.
              </Editable>

              <Editable
                id="cap.sobre.body2"
                multiline
                as="p"
                className="font-display italic text-base lg:text-lg leading-relaxed text-foreground/65 max-w-xl"
              >
                Cada projeto recebe atenção integral dos dois sócios — do briefing à última prancha.
              </Editable>
            </div>

            <aside className="col-span-12 lg:col-span-6 lg:pl-8 lg:border-l border-border/60">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { id: "leandro", name: "Leandro Henrique", role: "Co-fundador · Arquiteto", cau: "CAU A252250-0", img: IMG_LEANDRO },
                  { id: "neandro", name: "Neandro Jacque", role: "Co-fundador · Arquiteto", cau: "CAU A264629-3", img: IMG_NEANDRO },
                ].map((p) => (
                  <div key={p.id} className="bg-surface-elevated overflow-hidden group">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <Editable
                        as="h3"
                        id={`cap.sobre.${p.id}.name`}
                        className="font-display text-xl text-foreground mb-1"
                      >
                        {p.name}
                      </Editable>
                      <Editable
                        id={`cap.sobre.${p.id}.role`}
                        className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary/70 block"
                      >
                        {p.role}
                      </Editable>
                      <Editable
                        id={`cap.sobre.${p.id}.cau`}
                        className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/80 block mt-1"
                      >
                        {p.cau}
                      </Editable>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ============================================================
          06 · PILARES
          ============================================================ */}
      <section
        id="pilares"
        className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-32"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-baseline justify-between mb-16 pb-4 border-b border-border/60">
            <div className="flex items-baseline gap-6">
              <span className="number-marker">06</span>
              <Editable id="cap.pilares.eyebrow" className="eyebrow">
                Nossos pilares
              </Editable>
            </div>
          </div>

          <Editable
            as="h2"
            id="cap.pilares.title"
            multiline
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-20 text-balance max-w-4xl"
          >
            Quatro princípios que <em className="text-primary not-italic">não negociamos.</em>
          </Editable>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
            {[
              {
                id: "escuta",
                title: "Escuta antes do desenho",
                body:
                  "Nenhum traço aparece antes de entender quem vai morar, como vive e o que precisa. A escuta é a primeira etapa do projeto.",
                quote:
                  "Você não precisa entender de obra. Precisa entender o que está aprovando.",
              },
              {
                id: "metodo",
                title: "Método que conduz",
                body:
                  "Temos um processo claro com etapas definidas e critérios de aprovação. O cliente nunca fica perdido — porque a NL sempre está um passo à frente.",
                quote:
                  "A NL conduz — o cliente aprova com segurança.",
              },
              {
                id: "atemporal",
                title: "Beleza atemporal",
                body:
                  "Recusamos modismos. Buscamos materialidade, proporção e luz — os elementos que envelhecem bem e tornam a casa cada vez mais sua.",
                quote:
                  "Decidimos com materialidade, proporção e luz — não com tendência.",
              },
              {
                id: "obra",
                title: "Decisões antes da obra",
                body:
                  "Tudo que pode ser resolvido no papel é resolvido no papel. Você entra na obra com clareza, previsibilidade e tranquilidade.",
                quote:
                  "Decidir no papel é barato. Decidir no canteiro é caro.",
              },
            ].map((p, i) => (
              <div key={p.id} className="grid grid-cols-12 gap-4">
                <div className="col-span-2">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-primary block">
                    0{i + 1}
                  </span>
                </div>
                <div className="col-span-10">
                  <Editable
                    as="h3"
                    id={`cap.pilares.${p.id}.title`}
                    className="font-display text-2xl md:text-3xl leading-tight mb-4 text-foreground"
                  >
                    {p.title}
                  </Editable>
                  <div className="gold-line w-8 mb-5" />
                  <Editable
                    as="p"
                    id={`cap.pilares.${p.id}.body`}
                    multiline
                    className="font-display text-base md:text-lg leading-relaxed text-foreground/70"
                  >
                    {p.body}
                  </Editable>
                  <Editable
                    as="p"
                    id={`cap.pilares.${p.id}.quote`}
                    multiline
                    className="font-display italic text-base md:text-lg leading-relaxed text-primary mt-4"
                  >
                    {p.quote}
                  </Editable>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          07 · CONSOLIDAÇÃO
          ============================================================ */}
      <section
        id="consolidacao"
        className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-32"
        style={{ backgroundColor: "#FFFFFF", color: "#3A3A3A" }}
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex items-baseline gap-6 mb-16 pb-4 border-b" style={{ borderColor: "rgba(139,115,85,0.3)" }}>
            <span className="font-mono-edit text-[10px] tracking-[0.3em]" style={{ color: "#777777" }}>
              07
            </span>
            <Editable
              id="cap.consol.eyebrow"
              className="font-mono-edit text-[10px] uppercase tracking-[0.3em]"
              style={{ color: "#8B7355" }}
            >
              Consolidação
            </Editable>
          </div>

          <Editable
            as="h2"
            id="cap.consol.title"
            multiline
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.0] text-balance mb-8 max-w-4xl"
            style={{ color: "#3A3A3A" }}
          >
            Estrutura e consolidação.
          </Editable>

          <Editable
            as="p"
            id="cap.consol.subtitle"
            multiline
            className="font-display text-lg md:text-xl leading-relaxed max-w-3xl mb-20"
            style={{ color: "#555555" }}
          >
            Não empilhamos volumes. Consolidamos legados. Cada traço é uma decisão técnica que sustenta a próxima visão.
          </Editable>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: "rgba(139,115,85,0.25)" }}>
            {/* Card 01 — Projetos no portfólio (estático) */}
            <div className="p-8 md:p-10 flex flex-col" style={{ backgroundColor: "#FFFFFF" }}>
              <div className="h-px w-10 mb-6" style={{ backgroundColor: "#8B7355" }} />
              <span className="font-display text-5xl md:text-6xl leading-none mb-4" style={{ color: "#8B7355" }}>
                +50
              </span>
              <span className="font-mono-edit text-[10px] uppercase tracking-[0.3em]" style={{ color: "#3A3A3A" }}>
                Projetos no portfólio
              </span>
              <span className="font-display italic text-xs mt-3" style={{ color: "#777777" }}>
                residencial · comercial · interiores
              </span>
            </div>

            {/* Card 02 — Anos de experiência combinada (estático) */}
            <div className="p-8 md:p-10 flex flex-col" style={{ backgroundColor: "#FFFFFF" }}>
              <div className="h-px w-10 mb-6" style={{ backgroundColor: "#8B7355" }} />
              <span className="font-display text-5xl md:text-6xl leading-none mb-4" style={{ color: "#8B7355" }}>
                +8
              </span>
              <span className="font-mono-edit text-[10px] uppercase tracking-[0.3em]" style={{ color: "#3A3A3A" }}>
                Anos de experiência combinada
              </span>
              <span className="font-display italic text-xs mt-3" style={{ color: "#777777" }}>
                desde 2017
              </span>
            </div>

            {/* Card 03 — Estados de atuação (modal mapa) */}
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="p-8 md:p-10 flex flex-col text-left transition-colors group w-full h-full hover:bg-[#F7F4EF]"
                  style={{ backgroundColor: "#FFFFFF" }}
                >
                  <div className="h-px w-10 mb-6 transition-all group-hover:w-16" style={{ backgroundColor: "#8B7355" }} />
                  <span className="font-display text-5xl md:text-6xl leading-none mb-4" style={{ color: "#8B7355" }}>
                    2
                  </span>
                  <span className="font-mono-edit text-[10px] uppercase tracking-[0.3em]" style={{ color: "#3A3A3A" }}>
                    Estados de atuação
                  </span>
                  <span className="font-display italic text-xs mt-3" style={{ color: "#777777" }}>
                    São Paulo · Minas Gerais
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-base mt-3 transition-transform group-hover:translate-x-1"
                    style={{ color: "#8B7355" }}
                  >
                    →
                  </span>
                </button>
              </DialogTrigger>
              <DialogContent className="bg-[#1A1816] border-primary/30 max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="font-display text-2xl text-[#E8E4DF]">
                    Estados de atuação
                  </DialogTitle>
                </DialogHeader>
                <MapaAtuacao />
              </DialogContent>
            </Dialog>

            {/* Card 04 — Disciplinas integradas (modal diagrama) */}
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="p-8 md:p-10 flex flex-col text-left transition-colors group w-full h-full hover:bg-[#F7F4EF]"
                  style={{ backgroundColor: "#FFFFFF" }}
                >
                  <div className="h-px w-10 mb-6 transition-all group-hover:w-16" style={{ backgroundColor: "#8B7355" }} />
                  <span className="font-display text-5xl md:text-6xl leading-none mb-4" style={{ color: "#8B7355" }}>
                    4
                  </span>
                  <span className="font-mono-edit text-[10px] uppercase tracking-[0.3em]" style={{ color: "#3A3A3A" }}>
                    Disciplinas integradas
                  </span>
                  <span className="font-display italic text-xs mt-3" style={{ color: "#777777" }}>
                    arquitetura · interiores · comercial · engenharia
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-base mt-3 transition-transform group-hover:translate-x-1"
                    style={{ color: "#8B7355" }}
                  >
                    →
                  </span>
                </button>
              </DialogTrigger>
              <DialogContent className="border-primary/30 max-w-3xl p-0 overflow-hidden" style={{ backgroundColor: "#1A1816" }}>
                <div className="p-8 md:p-12">
                  <DialogHeader>
                    <div className="flex items-baseline gap-4 mb-2">
                      <span className="font-mono-edit text-[10px] tracking-[0.3em]" style={{ color: "#B5956E" }}>
                        04
                      </span>
                      <DialogTitle className="font-display text-2xl md:text-3xl" style={{ color: "#F0EDE8" }}>
                        Disciplinas integradas
                      </DialogTitle>
                    </div>
                    <p className="font-mono-edit text-[10px] uppercase tracking-[0.3em] ml-10" style={{ color: "#B5956E" }}>
                      Quatro frentes · Uma autoria
                    </p>
                  </DialogHeader>

                  {/* Grid 2x2 com cruz bronze ao centro e NL no encontro */}
                  <div className="relative mt-10">
                    {/* linha vertical central */}
                    <div
                      className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 pointer-events-none"
                      style={{ backgroundColor: "rgba(181,149,110,0.45)" }}
                      aria-hidden
                    />
                    {/* linha horizontal central */}
                    <div
                      className="hidden md:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 pointer-events-none"
                      style={{ backgroundColor: "rgba(181,149,110,0.45)" }}
                      aria-hidden
                    />
                    {/* NL no encontro */}
                    <div
                      className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full items-center justify-center z-10 pointer-events-none"
                      style={{ backgroundColor: "#1A1816", border: "1px solid #B5956E" }}
                      aria-hidden
                    >
                      <span className="font-display text-xl tracking-tight" style={{ color: "#F0EDE8" }}>
                        NL
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2">
                      {[
                        {
                          n: "01",
                          icon: (
                            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.2">
                              <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" />
                            </svg>
                          ),
                          t: "Arquitetura Residencial",
                          d: "Casas que nascem do terreno, da luz e do modo de viver.",
                        },
                        {
                          n: "02",
                          icon: (
                            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.2">
                              <rect x="3" y="3" width="18" height="18" />
                              <path d="M3 12h18M12 3v18" />
                            </svg>
                          ),
                          t: "Design de Interiores",
                          d: "Atmosfera, materialidade e proporção em cada ambiente.",
                        },
                        {
                          n: "03",
                          icon: (
                            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.2">
                              <path d="M3 21V7l9-4 9 4v14M3 21h18M9 21v-6h6v6M7 11h2M11 11h2M15 11h2" />
                            </svg>
                          ),
                          t: "Arquitetura Comercial",
                          d: "Espaços que traduzem marca, fluxo e experiência.",
                        },
                        {
                          n: "04",
                          icon: (
                            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.2">
                              <path d="M4 20l4-4M4 20l-1-3 12-12 3 1 1 3L7 21l-3-1zM14 6l4 4" />
                            </svg>
                          ),
                          t: "Engenharia & Compatibilização",
                          d: "Estrutura, instalações e detalhamento — em parceria.",
                          parceria: true,
                        },
                      ].map((item, i) => (
                        <div
                          key={item.n}
                          className={cn(
                            "group relative p-6 md:p-10 transition-colors duration-300",
                            i === 0 && "md:pr-12 md:pb-12",
                            i === 1 && "md:pl-12 md:pb-12",
                            i === 2 && "md:pr-12 md:pt-12",
                            i === 3 && "md:pl-12 md:pt-12",
                          )}
                        >
                          <div className="flex items-baseline justify-between mb-6">
                            <span className="font-mono-edit text-[10px] tracking-[0.3em]" style={{ color: "#B5956E" }}>
                              {item.n}
                            </span>
                            <span className="transition-colors" style={{ color: "#B5956E" }}>
                              {item.icon}
                            </span>
                          </div>
                          <h4 className="font-display text-lg md:text-xl leading-tight mb-3" style={{ color: "#F0EDE8" }}>
                            {item.t}
                          </h4>
                          <p className="font-display text-sm leading-relaxed" style={{ color: "rgba(240,237,232,0.85)" }}>
                            {item.d}
                          </p>
                          {item.parceria && (
                            <span className="font-mono-edit text-[9px] uppercase tracking-[0.3em] mt-4 inline-block" style={{ color: "#B5956E" }}>
                              · em parceria
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="mt-24 flex flex-col items-center text-center">
            <div className="h-px w-16 mb-8 bg-primary" />
            <Editable
              as="p"
              id="cap.consol.closing"
              multiline
              className="font-display italic text-xl md:text-2xl max-w-2xl leading-relaxed text-primary"
            >
              Cada número aqui é uma decisão tomada no projeto, não na obra.
            </Editable>
          </div>
        </div>
      </section>

      {/* ============================================================
          08 · PROCESSOS · ARQ + INT
          ============================================================ */}
      <section
        id="processos"
        className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-32"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-baseline justify-between mb-16 pb-4 border-b border-border/60">
            <div className="flex items-baseline gap-6">
              <span className="number-marker">08</span>
              <Editable id="cap.proc.eyebrow" className="eyebrow">
                Arquitetura + Interiores
              </Editable>
            </div>
            <Editable
              id="cap.proc.tag"
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block"
            >
              Dois processos · Uma autoria
            </Editable>
          </div>

          <Editable
            as="h2"
            id="cap.proc.title"
            multiline
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-20 text-balance max-w-5xl"
          >
            Pensar a casa <em className="text-primary not-italic">por inteiro</em> —
            do volume à atmosfera.
          </Editable>

          {/* ============================================================
              BLOCO ARQ — formato Casa Costas (imagem grande + texto manifesto)
              ============================================================ */}
          <div className="relative -mx-6 md:-mx-16 lg:-mx-24 mb-px bg-border/40">
            <div className="grid grid-cols-12 min-h-[80vh]">
              <div className="col-span-12 lg:col-span-7 relative min-h-[60vh] lg:min-h-[80vh] bg-background">
                <img
                  src="https://www.dropbox.com/scl/fi/dibhyhod5xpz47v3l9rp3/Gemini_Generated_Image_896gxz896gxz896g-1.png?rlkey=q1ltxbytg9eo2ynmbz0njb0f3&raw=1"
                  alt="Casa Costas · residência NL Arquitetos · São José dos Campos"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  width={1920}
                  height={1280}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/40 lg:to-background" />
                <div className="absolute bottom-8 left-8 z-10 flex items-center gap-3">
                  <Editable
                    id="cap.proc.arq.tag"
                    className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary"
                  >
                    Arquitetura · 01
                  </Editable>
                  <span className="h-px w-8 bg-primary/60" />
                </div>
              </div>

              <div className="col-span-12 lg:col-span-5 relative px-8 md:px-12 lg:px-16 py-16 lg:py-24 flex flex-col justify-center bg-background">
                <div className="max-w-md">
                  <span className="number-marker block mb-4">Projeto referência</span>
                  <Editable
                    as="h3"
                    id="cap.proc.arq.title"
                    multiline
                    className="font-display text-4xl md:text-5xl leading-[0.95] mb-2"
                  >
                    A casa nasce do <em className="text-primary not-italic">terreno e da luz.</em>
                  </Editable>
                  <Editable
                    id="cap.proc.arq.location"
                    className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-8"
                  >
                    Casa Costas · 300m² · São José dos Campos
                  </Editable>
                  <div className="gold-line w-16 mb-8" />
                  <Editable
                    id="cap.proc.arq.body"
                    multiline
                    as="p"
                    className="font-display text-base md:text-lg leading-relaxed text-foreground/80 mb-10"
                  >
                    O pedido era claro: uma residência que equilibrasse presença e acolhimento.
                    A fachada em concreto e madeira define o limite entre o público e o privado —
                    sem abrir mão da luz. Cada detalhe foi validado em projeto antes de qualquer
                    execução.
                  </Editable>
                  <ul className="space-y-3 font-display text-foreground/80 mb-10">
                    {[
                      "Implantação e estudo solar",
                      "Volumetria e composição de fachadas",
                      "Plantas, cortes e elevações",
                      "Coordenação técnica com engenheiros parceiros",
                      "Detalhamento construtivo",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-4 items-baseline border-b border-border/40 pb-3"
                      >
                        <span className="font-mono text-[10px] text-primary/70">
                          0{i + 1}
                        </span>
                        <Editable
                          id={`cap.proc.arq.item.${i}`}
                          className="flex-1 text-sm md:text-base"
                        >
                          {item}
                        </Editable>
                      </li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-3 gap-3 sm:gap-6 border-t border-border/60 pt-6">
                    <div>
                      <Editable
                        id="cap.proc.arq.s1.value"
                        className="font-display text-3xl md:text-4xl text-primary block leading-none mb-2"
                      >
                        04
                      </Editable>
                      <Editable
                        id="cap.proc.arq.s1.label"
                        className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground"
                      >
                        Meses de projeto
                      </Editable>
                    </div>
                    <div>
                      <Editable
                        id="cap.proc.arq.s2.value"
                        className="font-display text-3xl md:text-4xl text-primary block leading-none mb-2"
                      >
                        05
                      </Editable>
                      <Editable
                        id="cap.proc.arq.s2.label"
                        className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground"
                      >
                        Disciplinas
                      </Editable>
                    </div>
                    <div>
                      <Editable
                        id="cap.proc.arq.s3.value"
                        className="font-display text-3xl md:text-4xl text-primary block leading-none mb-2"
                      >
                        0
                      </Editable>
                      <Editable
                        id="cap.proc.arq.s3.label"
                        className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground"
                      >
                        Retrabalho
                      </Editable>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================
              BLOCO INT — formato Interiores · Camada do habitar
              ============================================================ */}
          <div className="relative pt-24 md:pt-32">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
                <Editable
                  id="cap.proc.int.eyebrow"
                  className="eyebrow mb-8 inline-block"
                >
                  Interiores · Camada do habitar
                </Editable>
                <Editable
                  as="h3"
                  id="cap.proc.int.title"
                  multiline
                  className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.0] mb-10 text-balance"
                >
                  O interior é onde a <em className="text-primary not-italic">arquitetura</em> encontra a vida.
                </Editable>
                <Editable
                  id="cap.proc.int.body"
                  multiline
                  as="p"
                  className="font-display text-base md:text-lg leading-relaxed text-foreground/75 mb-10"
                >
                  Não decoramos espaços — projetamos atmosferas. Cada material é escolhido pelo
                  modo como envelhece, pelo toque, pelo som que o ambiente faz quando alguém entra.
                  O resultado: interiores que não datam, que não cansam, e que continuam pertencendo
                  a você dez anos após a entrega.
                </Editable>
                <ul className="space-y-3 font-display text-foreground/80">
                  {[
                    ["01", "Layout funcional e fluxos"],
                    ["02", "Paleta de materiais e acabamentos"],
                    ["03", "Marcenaria sob medida com detalhamento executivo"],
                    ["04", "Iluminação cênica e funcional integrada"],
                    ["05", "Curadoria de mobiliário e arte"],
                  ].map(([num, txt], i) => (
                    <li
                      key={i}
                      className="flex gap-4 items-baseline border-b border-border/40 pb-3"
                    >
                      <span className="font-mono text-xs text-primary/70">{num}</span>
                      <Editable
                        id={`cap.proc.int.item.${i}`}
                        className="flex-1 text-sm md:text-base"
                      >
                        {txt}
                      </Editable>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-12 lg:col-span-7 order-1 lg:order-2 relative">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src="https://www.dropbox.com/scl/fi/hv5ka2it7y3mx78a9plos/tghdfjg.png?rlkey=7gx28a6t2ru8o4s8nz0mea4jp&raw=1"
                    alt="Espaço Gourmet SJ · NL Arquitetos · interiores"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    width={1600}
                    height={2000}
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 md:-left-8 bg-background border-l-2 border-primary px-5 py-3">
                  <Editable
                    id="cap.proc.int.caption"
                    className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
                  >
                    Espaço Gourmet SJ · Materialidade e precisão
                  </Editable>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 max-w-3xl">
            <Editable
              as="p"
              id="cap.proc.note"
              multiline
              className="font-display italic text-lg md:text-xl text-foreground/70 leading-relaxed"
            >
              Quando arquitetura e interiores nascem na mesma mesa, o resultado é uma
              casa coerente — onde nada parece adicionado depois.
            </Editable>
          </div>
        </div>
      </section>

      {/* ============================================================
          10 · ALÉM DO PROJETO
          ============================================================ */}
      <section
        id="alem"
        className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-32 overflow-hidden"
        style={{ backgroundColor: "#0F0D0B", color: "#E8E4DF" }}
      >
        {/* Imagem de fundo em tela cheia — blur + brightness */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${imgAlemProjeto})`,
            filter: "blur(3px) brightness(0.35)",
            transform: "scale(1.05)",
          }}
          aria-hidden="true"
        />
        {/* Overlay gradiente vertical */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(26, 24, 22, 0.55) 0%, rgba(26, 24, 22, 0.78) 50%, rgba(26, 24, 22, 0.96) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div
            className="flex items-baseline gap-6 mb-16 pb-4 border-b"
            style={{ borderColor: "rgba(139, 115, 85, 0.35)" }}
          >
            <span
              className="font-mono-edit text-[10px] tracking-[0.3em]"
              style={{ color: "#8B7355" }}
            >
              10
            </span>
            <Editable
              id="cap.alem.eyebrow"
              className="font-mono-edit text-[10px] uppercase tracking-[0.3em]"
              style={{ color: "#777777" }}
            >
              Além do projeto
            </Editable>
          </div>

          <div className="max-w-4xl mb-20">
            <Editable
              as="h2"
              id="cap.alem.title"
              multiline
              className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.0] text-balance mb-8"
              style={{ color: "#E8E4DF" }}
            >
              O projeto termina. O comprometimento, <em className="not-italic" style={{ color: "#C9A876" }}>não.</em>
            </Editable>
            <div className="h-px w-10 mb-8" style={{ backgroundColor: "rgba(139, 115, 85, 0.45)" }} />
            <Editable
              as="p"
              id="cap.alem.body"
              multiline
              className="font-display italic text-lg md:text-xl leading-relaxed max-w-2xl"
              style={{ color: "rgba(232, 228, 223, 0.78)" }}
            >
              A casa continua viva depois da chave — e nós continuamos por
              perto, garantindo que cada decisão tomada no projeto se traduza
              fielmente no que você habita.
            </Editable>
          </div>

          {/* Divisor sutil em bronze */}
          <div
            className="h-px w-full mb-16"
            style={{ backgroundColor: "rgba(139, 115, 85, 0.12)" }}
            aria-hidden="true"
          />

          {/* Linha do tempo — cards */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-x-8 lg:gap-x-12 relative">
              {[
                { id: "entrega", step: "01", t: "Entrega", b: "Sua equipe de obra recebe o projeto com clareza absoluta — nada fica aberto à interpretação." },
                { id: "acompanhamento", step: "02", t: "Presença em campo", b: "Estamos no canteiro nos momentos decisivos — quando uma escolha errada ainda pode ser corrigida no papel, não no cimento." },
                { id: "curadoria", step: "03", t: "Indicação", b: "Você acessa uma rede de fornecedores já provada em obras reais — sem ensaios à sua custa." },
                { id: "suporte", step: "04", t: "Continuidade", b: "Após a entrega, qualquer dúvida da casa passa por nós antes de se tornar um problema." },
              ].map((s) => (
                <div key={s.id} className="relative">
                  {/* Ponto bronze */}
                  <div
                    className="w-2 h-2 rounded-full mb-5"
                    style={{ backgroundColor: "#8B7355" }}
                    aria-hidden="true"
                  />

                  {/* Número */}
                  <Editable
                    id={`cap.alem.${s.id}.step`}
                    className="font-mono-edit text-[10px] uppercase tracking-[0.3em] block mb-4"
                    style={{ color: "#777777" }}
                  >
                    {s.step}
                  </Editable>

                  {/* Título */}
                  <Editable
                    as="h3"
                    id={`cap.alem.${s.id}.t`}
                    className="font-display text-2xl md:text-3xl mb-3"
                    style={{ color: "#E8E4DF" }}
                  >
                    {s.t}
                  </Editable>

                  {/* Descrição */}
                  <Editable
                    as="p"
                    id={`cap.alem.${s.id}.b`}
                    multiline
                    className="font-mono-edit text-[11px] leading-relaxed"
                    style={{ color: "#777777" }}
                  >
                    {s.b}
                  </Editable>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          11 · PORTFÓLIO
          ============================================================ */}
      <section
        id="portfolio"
        className="relative min-h-screen px-6 md:px-16 lg:px-24 py-28 flex flex-col justify-center"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-baseline justify-between mb-16 pb-4 border-b border-border/60">
            <div className="flex items-baseline gap-6">
              <span className="number-marker">11</span>
              <Editable id="cap.port.eyebrow" className="eyebrow">
                Portfólio selecionado
              </Editable>
            </div>
          </div>

          <Editable
            as="h2"
            id="cap.port.title"
            multiline
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-16 text-balance max-w-4xl"
          >
            Cada projeto é um <em className="text-primary not-italic">capítulo único.</em>
          </Editable>

          {(() => {
            const projects = [
              { id: "casa-jc", img: imgCasaJC, name: "Casa JC", typology: "Residencial", place: "Jacareí · SP", year: "2025" },
              { id: "casa-costas", img: IMG_CASE, name: "Casa Costas", typology: "Residencial", place: "São José dos Campos · 300m²", year: "2024" },
              { id: "chale-juruva", img: imgChaleJuruva, name: "Chalé Juruva", typology: "Residencial / Interiores", place: "Santo Antônio do Pinhal · 60m²", year: "2024" },
              { id: "familia-borges", img: imgFamiliaBorges, name: "Família Borges", typology: "Interiores Residencial", place: "Jacareí · 100m²", year: "2025" },
              { id: "gourmet-jardim", img: imgGourmetJardim, name: "Espaço Gourmet Jardim", typology: "Interiores", place: "Jacareí · 80m²", year: "2025" },
              { id: "gourmet-salinas", img: imgGourmetSalinas, name: "Espaço Gourmet Salinas", typology: "Interiores", place: "São José dos Campos · 65m²", year: "2025" },
            ];
            const [anchor, ...rest] = projects;

            const renderMeta = (proj: typeof projects[number]) => (
              <div className="space-y-1.5">
                <Editable
                  id={`cap.port.${proj.id}.typology`}
                  className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80 block"
                >
                  {proj.typology}
                </Editable>
                <Editable
                  id={`cap.port.${proj.id}.place`}
                  className="font-display italic text-base text-muted-foreground block"
                >
                  {proj.place}
                </Editable>
                <Editable
                  id={`cap.port.${proj.id}.year`}
                  className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70 block"
                >
                  {proj.year}
                </Editable>
              </div>
            );

            const renderImage = (proj: typeof projects[number], aspectClass: string) => (
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className={`relative ${aspectClass} overflow-hidden mb-6 bg-surface-elevated w-full block cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
                    aria-label={`Ampliar imagem do projeto ${proj.name}`}
                  >
                    <img
                      src={proj.img}
                      alt={proj.name}
                      className="w-full h-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                      loading="lazy"
                    />
                    <div
                      className="pointer-events-none absolute top-6 left-6 h-px w-0 bg-primary-glow transition-all duration-700 ease-out group-hover:w-12"
                      aria-hidden="true"
                    />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-6xl w-[95vw] p-0 bg-background border-border overflow-hidden">
                  <DialogHeader className="sr-only">
                    <DialogTitle>{proj.name}</DialogTitle>
                  </DialogHeader>
                  <div className="bg-surface-elevated">
                    <img src={proj.img} alt={proj.name} className="w-full h-auto max-h-[80vh] object-contain" />
                  </div>
                  <div className="px-8 py-6 border-t border-border">
                    <h3 className="font-display text-3xl text-foreground mb-2">{proj.name}</h3>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      {proj.typology} · {proj.place} · {proj.year}
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            );

            return (
              <>
                {/* ÂNCORA EDITORIAL — Casa Costas full-width como abertura do capítulo */}
                <article className="group mb-32">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-8 items-end">
                    <div className="md:col-span-8">
                      {renderImage(anchor, "aspect-[16/10]")}
                    </div>
                    <div className="md:col-span-4 md:pb-4">
                      <Editable
                        as="h3"
                        id={`cap.port.${anchor.id}.name`}
                        className="font-display text-4xl md:text-5xl leading-[1.02] text-foreground mb-6 transition-colors duration-500 group-hover:text-primary"
                      >
                        {anchor.name}
                      </Editable>
                      {renderMeta(anchor)}
                    </div>
                  </div>
                </article>

                {/* GRID DE COLEÇÃO — demais projetos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-24">
                  {rest.map((proj, idx) => (
                    <article key={proj.id} className="group">
                      {renderImage(proj, idx % 2 === 0 ? "aspect-[4/5]" : "aspect-[3/4]")}
                      <Editable
                        as="h3"
                        id={`cap.port.${proj.id}.name`}
                        className="font-display text-3xl md:text-4xl leading-[1.05] text-foreground mb-4 transition-colors duration-500 group-hover:text-primary"
                      >
                        {proj.name}
                      </Editable>
                      {renderMeta(proj)}
                    </article>
                  ))}
                </div>
              </>
            );
          })()}

          {/* Fechamento editorial da seção (E2) */}
          <div className="mt-24 pt-12 border-t border-border/40 flex justify-center">
            <Editable
              as="p"
              id="cap.port.fechamento"
              className="font-display italic text-2xl md:text-3xl text-foreground/80 text-center max-w-2xl leading-snug text-balance"
            >
              Cada projeto começa com uma conversa — e termina com uma casa que conta a história de quem vive nela.
            </Editable>
          </div>
        </div>
      </section>

      {/* ============================================================
          12 · FECHAMENTO
          ============================================================ */}
      <section
        id="fechamento"
        className="relative min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 py-32 overflow-hidden"
        style={{ backgroundColor: "#1A1816", color: "#E8E4DF" }}
      >
        {/* Sutil glow dourado de fundo */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(201, 168, 118, 0.18) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="h-px w-16" style={{ backgroundColor: "rgba(201, 168, 118, 0.6)" }} />
            <Editable
              id="cap.fech.eyebrow"
              className="font-mono-edit text-[10px] uppercase tracking-[0.4em]"
              style={{ color: "#C9A876" }}
            >
              Convite
            </Editable>
            <span className="h-px w-16" style={{ backgroundColor: "rgba(201, 168, 118, 0.6)" }} />
          </div>

          <Editable
            as="h2"
            id="cap.fech.title"
            multiline
            className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.0] text-balance mb-12"
            style={{ color: "#E8E4DF" }}
          >
            Vamos começar pela <em className="not-italic" style={{ color: "#C9A876" }}>conversa?</em>
          </Editable>

          <Editable
            as="p"
            id="cap.fech.body"
            multiline
            className="font-display italic text-xl md:text-2xl leading-relaxed mb-16 max-w-2xl mx-auto"
            style={{ color: "rgba(232, 228, 223, 0.78)" }}
          >
            Antes de qualquer proposta formal, gostamos de sentar, ouvir e
            entender se há sintonia. Sem compromisso, sem pressa.
          </Editable>

          <div className="flex flex-col items-center gap-2 mb-16">
            <Editable
              id="cap.fech.contact.label"
              className="font-mono-edit text-[10px] uppercase tracking-[0.3em]"
              style={{ color: "#8B7355" }}
            >
              Para marcar um café
            </Editable>
            <Editable
              id="cap.fech.contact.email"
              className="font-display text-2xl md:text-3xl mt-2"
              style={{ color: "#E8E4DF" }}
            >
              contato@nlarquitetos.com.br
            </Editable>
            <Editable
              id="cap.fech.contact.phone"
              className="font-display text-lg md:text-xl mt-1"
              style={{ color: "rgba(232, 228, 223, 0.7)" }}
            >
              +55 (12) 9XXXX-XXXX
            </Editable>
          </div>

          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-12" style={{ backgroundColor: "rgba(201, 168, 118, 0.4)" }} />
            <Editable
              id="cap.fech.signature"
              className="font-mono-edit text-[10px] uppercase tracking-[0.4em]"
              style={{ color: "rgba(201, 168, 118, 0.7)" }}
            >
              NL Arquitetos · 2025
            </Editable>
            <span className="h-px w-12" style={{ backgroundColor: "rgba(201, 168, 118, 0.4)" }} />
          </div>

          <div className="mt-20">
            <Link
              to="/"
              className="font-mono text-[10px] uppercase tracking-[0.3em] hover:opacity-70 transition-opacity"
              style={{ color: "rgba(232, 228, 223, 0.55)" }}
            >
              ← Ver Carta Proposta detalhada
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Captacao;
