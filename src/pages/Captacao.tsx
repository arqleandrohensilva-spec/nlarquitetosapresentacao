import Editable from "@/components/Editable";
import CaptacaoNav from "@/components/CaptacaoNav";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import imgComoCroqui from "@/assets/como-vira/01-croqui.png";
import imgComoVolumetria from "@/assets/como-vira/02-volumetria.png";
import imgComoPlanta from "@/assets/como-vira/03-planta.png";
import imgComoRender from "@/assets/como-vira/04-render.png";

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
        className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-32 bg-secondary text-foreground"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex items-baseline gap-6 mb-16 pb-4 border-b border-primary/30">
            <span className="font-mono-edit text-[10px] tracking-[0.3em] text-foreground/55">
              07
            </span>
            <Editable
              id="cap.consol.eyebrow"
              className="font-mono-edit text-[10px] uppercase tracking-[0.3em] text-primary"
            >
              Consolidação
            </Editable>
          </div>

          <Editable
            as="h2"
            id="cap.consol.title"
            multiline
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.0] text-balance mb-8 max-w-4xl text-foreground"
          >
            Estrutura e consolidação.
          </Editable>

          <Editable
            as="p"
            id="cap.consol.subtitle"
            multiline
            className="font-display text-lg md:text-xl leading-relaxed max-w-3xl text-foreground/75 mb-20"
          >
            Não empilhamos volumes. Consolidamos legados. Cada traço é uma decisão técnica que sustenta a próxima visão.
          </Editable>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary/20">
            {/* Card 01 — Projetos entregues (estático) */}
            <div className="bg-secondary p-8 md:p-10 flex flex-col">
              <div className="h-px w-10 mb-6 bg-primary" />
              <span className="font-display text-5xl md:text-6xl text-primary leading-none mb-4">
                +50
              </span>
              <span className="font-mono-edit text-[10px] uppercase tracking-[0.3em] text-foreground/70">
                Projetos entregues
              </span>
            </div>

            {/* Card 02 — Anos de mercado (estático) */}
            <div className="bg-secondary p-8 md:p-10 flex flex-col">
              <div className="h-px w-10 mb-6 bg-primary" />
              <span className="font-display text-5xl md:text-6xl text-primary leading-none mb-4">
                +8
              </span>
              <span className="font-mono-edit text-[10px] uppercase tracking-[0.3em] text-foreground/70">
                Anos de mercado
              </span>
            </div>

            {/* Card 03 — Estados de atuação (modal mapa) */}
            <Dialog>
              <DialogTrigger asChild>
                <button className="bg-secondary p-8 md:p-10 flex flex-col text-left transition-colors hover:bg-background group">
                  <div className="h-px w-10 mb-6 bg-primary transition-all group-hover:w-16" />
                  <span className="font-display text-5xl md:text-6xl text-primary leading-none mb-4">
                    2
                  </span>
                  <span className="font-mono-edit text-[10px] uppercase tracking-[0.3em] text-foreground/70">
                    Estados de atuação
                  </span>
                  <span className="font-mono-edit text-[9px] uppercase tracking-[0.3em] text-primary/70 mt-3">
                    + Ver mapa
                  </span>
                </button>
              </DialogTrigger>
              <DialogContent className="bg-[#1A1816] border-primary/30 max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="font-display text-2xl text-[#E8E4DF]">
                    Estados de atuação
                  </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center pt-4">
                  {/* Silhuetas reais de MG e SP */}
                  <svg
                    viewBox="0 0 600 460"
                    className="w-full h-auto"
                    aria-label="Mapa de Minas Gerais e São Paulo"
                  >
                    {/* MINAS GERAIS — silhueta aproximada */}
                    <g>
                      <path
                        d="M180,90 C220,70 270,68 320,75 C370,80 420,90 455,110 C480,125 495,150 500,180 C505,210 495,235 475,250 C455,265 425,272 395,272 C375,272 360,278 350,290 C340,302 332,312 318,315 C300,318 282,310 268,298 C254,286 242,275 225,272 C205,268 188,262 175,250 C160,235 150,215 152,190 C154,165 162,140 170,120 C173,108 175,98 180,90 Z"
                        fill="hsl(var(--primary) / 0.55)"
                        stroke="hsl(var(--primary))"
                        strokeWidth="1"
                      />
                      <text
                        x="335"
                        y="180"
                        textAnchor="middle"
                        fontSize="10"
                        letterSpacing="2"
                        fill="#E8E4DF"
                        className="font-mono-edit"
                      >
                        MINAS GERAIS
                      </text>
                      {/* ponto Belo Horizonte */}
                      <circle cx="370" cy="225" r="4" fill="hsl(var(--primary))" />
                      <circle cx="370" cy="225" r="9" fill="hsl(var(--primary) / 0.25)" />
                    </g>

                    {/* SÃO PAULO — silhueta aproximada */}
                    <g>
                      <path
                        d="M120,310 C150,295 185,290 220,295 C250,298 278,308 305,315 C320,318 332,316 342,308 C352,300 365,300 372,310 C378,318 372,328 360,332 C345,338 330,335 318,338 C305,342 295,352 280,355 C260,358 240,352 222,348 C200,343 180,348 162,345 C145,342 130,335 122,325 C118,320 117,314 120,310 Z"
                        fill="hsl(var(--primary) / 0.55)"
                        stroke="hsl(var(--primary))"
                        strokeWidth="1"
                      />
                      <text
                        x="240"
                        y="328"
                        textAnchor="middle"
                        fontSize="10"
                        letterSpacing="2"
                        fill="#E8E4DF"
                        className="font-mono-edit"
                      >
                        SÃO PAULO
                      </text>
                      {/* ponto capital SP */}
                      <circle cx="278" cy="340" r="4" fill="hsl(var(--primary))" />
                      <circle cx="278" cy="340" r="9" fill="hsl(var(--primary) / 0.25)" />
                    </g>
                  </svg>

                  {/* legenda */}
                  <div className="mt-8 w-full border-t border-primary/30 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <div>
                        <p className="font-mono-edit text-[10px] uppercase tracking-[0.3em] text-[#E8E4DF]">
                          São Paulo
                        </p>
                        <p className="font-display text-sm text-[#E8E4DF]/70 mt-1">
                          Sede principal
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <div>
                        <p className="font-mono-edit text-[10px] uppercase tracking-[0.3em] text-[#E8E4DF]">
                          Minas Gerais
                        </p>
                        <p className="font-display text-sm text-[#E8E4DF]/70 mt-1">
                          Atuação em projetos
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Card 04 — Disciplinas integradas (modal diagrama) */}
            <Dialog>
              <DialogTrigger asChild>
                <button className="bg-secondary p-8 md:p-10 flex flex-col text-left transition-colors hover:bg-background group">
                  <div className="h-px w-10 mb-6 bg-primary transition-all group-hover:w-16" />
                  <span className="font-display text-5xl md:text-6xl text-primary leading-none mb-4">
                    4
                  </span>
                  <span className="font-mono-edit text-[10px] uppercase tracking-[0.3em] text-foreground/70">
                    Disciplinas integradas
                  </span>
                  <span className="font-mono-edit text-[9px] uppercase tracking-[0.3em] text-primary/70 mt-3">
                    + Ver diagrama
                  </span>
                </button>
              </DialogTrigger>
              <DialogContent className="bg-secondary border-primary/30 max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="font-display text-2xl text-foreground">
                    Disciplinas integradas
                  </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center pt-4">
                  <svg
                    viewBox="0 0 400 400"
                    className="w-full max-w-sm h-auto"
                    aria-label="Diagrama circular NL · 4 disciplinas"
                  >
                    {/* 4 segmentos */}
                    {[
                      { start: -45, end: 45, label: "Arquitetura\nResidencial" },
                      { start: 45, end: 135, label: "Design de\nInteriores" },
                      { start: 135, end: 225, label: "Arquitetura\nComercial" },
                      { start: 225, end: 315, label: "Engenharia &\nCompatibilização" },
                    ].map((seg, i) => {
                      const cx = 200, cy = 200, rOuter = 170, rInner = 70;
                      const toRad = (d: number) => (d * Math.PI) / 180;
                      const x1 = cx + rOuter * Math.cos(toRad(seg.start));
                      const y1 = cy + rOuter * Math.sin(toRad(seg.start));
                      const x2 = cx + rOuter * Math.cos(toRad(seg.end));
                      const y2 = cy + rOuter * Math.sin(toRad(seg.end));
                      const x3 = cx + rInner * Math.cos(toRad(seg.end));
                      const y3 = cy + rInner * Math.sin(toRad(seg.end));
                      const x4 = cx + rInner * Math.cos(toRad(seg.start));
                      const y4 = cy + rInner * Math.sin(toRad(seg.start));
                      const path = `M ${x1} ${y1} A ${rOuter} ${rOuter} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${rInner} ${rInner} 0 0 0 ${x4} ${y4} Z`;
                      const mid = (seg.start + seg.end) / 2;
                      const tr = (rInner + rOuter) / 2;
                      const tx = cx + tr * Math.cos(toRad(mid));
                      const ty = cy + tr * Math.sin(toRad(mid));
                      const lines = seg.label.split("\n");
                      return (
                        <g key={i}>
                          <path
                            d={path}
                            fill={i % 2 === 0 ? "hsl(var(--primary) / 0.15)" : "hsl(var(--primary) / 0.28)"}
                            stroke="hsl(var(--secondary))"
                            strokeWidth="2"
                          />
                          <text
                            x={tx}
                            y={ty}
                            textAnchor="middle"
                            fontSize="11"
                            fill="hsl(var(--foreground))"
                            className="font-display"
                          >
                            {lines.map((ln, j) => (
                              <tspan key={j} x={tx} dy={j === 0 ? -4 : 14}>
                                {ln}
                              </tspan>
                            ))}
                          </text>
                        </g>
                      );
                    })}
                    {/* Centro NL */}
                    <circle cx="200" cy="200" r="55" fill="hsl(var(--primary))" />
                    <text
                      x="200"
                      y="208"
                      textAnchor="middle"
                      fontSize="28"
                      fill="hsl(var(--secondary))"
                      className="font-display"
                      fontWeight="600"
                    >
                      NL
                    </text>
                  </svg>
                  <p className="font-mono-edit text-[10px] uppercase tracking-[0.3em] text-foreground/60 mt-6 text-center">
                    Engenharia &amp; Compatibilização — em parceria
                  </p>
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
              A arquitetura como decisão.
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border/40">
            {/* ARQ */}
            <div className="bg-background p-10 md:p-12">
              <div className="flex items-baseline justify-between mb-8">
                <Editable
                  id="cap.proc.arq.tag"
                  className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary"
                >
                  Arquitetura
                </Editable>
                <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                  ARQ
                </span>
              </div>
              <Editable
                as="h3"
                id="cap.proc.arq.title"
                multiline
                className="font-display text-3xl md:text-4xl leading-tight mb-8 text-foreground"
              >
                A casa nasce do <em className="text-primary not-italic">terreno e da luz.</em>
              </Editable>
              <div className="gold-line w-12 mb-8" />
              <ul className="space-y-4">
                {[
                  "Implantação e estudo solar",
                  "Volumetria e composição de fachadas",
                  "Plantas, cortes e elevações",
                  "Compatibilização estrutural",
                  "Detalhamento construtivo",
                ].map((item, i) => (
                  <li key={i} className="flex items-baseline gap-4">
                    <span className="font-mono text-[10px] text-primary/60 mt-1">
                      0{i + 1}
                    </span>
                    <Editable
                      id={`cap.proc.arq.item.${i}`}
                      className="font-display text-base md:text-lg text-foreground/80 flex-1"
                    >
                      {item}
                    </Editable>
                  </li>
                ))}
              </ul>
            </div>

            {/* INT */}
            <div className="bg-background p-10 md:p-12">
              <div className="flex items-baseline justify-between mb-8">
                <Editable
                  id="cap.proc.int.tag"
                  className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary"
                >
                  Interiores
                </Editable>
                <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                  INT
                </span>
              </div>
              <Editable
                as="h3"
                id="cap.proc.int.title"
                multiline
                className="font-display text-3xl md:text-4xl leading-tight mb-8 text-foreground"
              >
                O interior é <em className="text-primary not-italic">a casa que se habita.</em>
              </Editable>
              <div className="gold-line w-12 mb-8" />
              <ul className="space-y-4">
                {[
                  "Layout funcional e fluxos",
                  "Paleta de materiais e acabamentos",
                  "Marcenaria sob medida",
                  "Iluminação e atmosfera",
                  "Curadoria de mobiliário e arte",
                ].map((item, i) => (
                  <li key={i} className="flex items-baseline gap-4">
                    <span className="font-mono text-[10px] text-primary/60 mt-1">
                      0{i + 1}
                    </span>
                    <Editable
                      id={`cap.proc.int.item.${i}`}
                      className="font-display text-base md:text-lg text-foreground/80 flex-1"
                    >
                      {item}
                    </Editable>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 max-w-3xl">
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
          09 · GALERIA
          ============================================================ */}
      <section id="galeria" className="relative px-0 py-0">
        <div className="px-6 md:px-16 lg:px-24 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-baseline justify-between mb-12 pb-4 border-b border-border/60">
              <div className="flex items-baseline gap-6">
                <span className="number-marker">09</span>
                <Editable id="cap.gal.eyebrow" className="eyebrow">
                  Galeria
                </Editable>
              </div>
              <Editable
                id="cap.gal.tag"
                className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block"
              >
                Atmosferas
              </Editable>
            </div>

            <Editable
              as="h2"
              id="cap.gal.title"
              multiline
              className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-12 text-balance max-w-3xl"
            >
              Antes de descrever, <em className="text-primary not-italic">deixe sentir.</em>
            </Editable>
          </div>
        </div>

        {/* Grade editorial assimétrica */}
        <div className="grid grid-cols-12 gap-1 px-1">
          <div className="col-span-12 md:col-span-8 aspect-[16/10] overflow-hidden">
            <img
              src={IMG_CASE}
              alt="Casa Costas · projeto referência"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              loading="lazy"
            />
          </div>
          <div className="col-span-12 md:col-span-4 aspect-[16/10] md:aspect-auto overflow-hidden">
            <img
              src={IMG_HERO}
              alt="Detalhe interior"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              loading="lazy"
            />
          </div>
          <div className="col-span-6 md:col-span-4 aspect-square overflow-hidden">
            <img
              src={IMG_HERO}
              alt="Detalhe atmosfera"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              loading="lazy"
            />
          </div>
          <div className="col-span-6 md:col-span-4 aspect-square overflow-hidden">
            <img
              src={IMG_CASE}
              alt="Detalhe materialidade"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              loading="lazy"
            />
          </div>
          <div className="col-span-12 md:col-span-4 aspect-square overflow-hidden">
            <img
              src={IMG_HERO}
              alt="Detalhe luz"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              loading="lazy"
            />
          </div>
        </div>

        <div className="px-6 md:px-16 lg:px-24 py-12">
          <div className="max-w-7xl mx-auto">
            <Editable
              id="cap.gal.caption"
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
            >
              Seleção de obras · NL Arquitetos · 2020 — 2025
            </Editable>
          </div>
        </div>
      </section>

      {/* ============================================================
          10 · ALÉM DO PROJETO
          ============================================================ */}
      <section
        id="alem"
        className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-32"
        style={{ backgroundColor: "#0F0D0B", color: "#E8E4DF" }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div
            className="flex items-baseline gap-6 mb-16 pb-4 border-b"
            style={{ borderColor: "rgba(139, 115, 85, 0.35)" }}
          >
            <span
              className="font-mono-edit text-[10px] tracking-[0.3em]"
              style={{ color: "rgba(232, 228, 223, 0.55)" }}
            >
              10
            </span>
            <Editable
              id="cap.alem.eyebrow"
              className="font-mono-edit text-[10px] uppercase tracking-[0.3em]"
              style={{ color: "#8B7355" }}
            >
              Além do projeto
            </Editable>
          </div>

          <div className="grid grid-cols-12 gap-x-12 gap-y-12">
            <div className="col-span-12 lg:col-span-5">
              <Editable
                as="h2"
                id="cap.alem.title"
                multiline
                className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.0] text-balance mb-8"
                style={{ color: "#E8E4DF" }}
              >
                Nossa relação não <em className="not-italic" style={{ color: "#C9A876" }}>termina na entrega.</em>
              </Editable>
              <div className="h-px w-16 mb-8" style={{ backgroundColor: "#8B7355" }} />
              <Editable
                as="p"
                id="cap.alem.body"
                multiline
                className="font-display italic text-lg md:text-xl leading-relaxed max-w-md"
                style={{ color: "rgba(232, 228, 223, 0.78)" }}
              >
                Acompanhamos a obra, ajustamos o que precisa ser ajustado e
                permanecemos disponíveis para os próximos capítulos da casa.
              </Editable>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:pl-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
                {[
                  { id: "obra", t: "Acompanhamento de obra", b: "Visitas técnicas e curadoria de execução, garantindo fidelidade ao projeto." },
                  { id: "compras", t: "Curadoria de compras", b: "Indicação de fornecedores, aprovação de amostras e acompanhamento de pedidos." },
                  { id: "decor", t: "Decoração final", b: "Styling, arte, têxteis e os últimos detalhes que dão alma ao ambiente." },
                  { id: "pos", t: "Pós-entrega", b: "Acompanhamento após mudança e suporte para evoluções futuras." },
                ].map((s) => (
                  <div key={s.id}>
                    <Editable
                      as="h3"
                      id={`cap.alem.${s.id}.t`}
                      className="font-display text-xl md:text-2xl mb-3"
                      style={{ color: "#E8E4DF" }}
                    >
                      {s.t}
                    </Editable>
                    <div className="h-px w-8 mb-4" style={{ backgroundColor: "rgba(139, 115, 85, 0.6)" }} />
                    <Editable
                      as="p"
                      id={`cap.alem.${s.id}.b`}
                      multiline
                      className="font-display text-base leading-relaxed"
                      style={{ color: "rgba(232, 228, 223, 0.7)" }}
                    >
                      {s.b}
                    </Editable>
                  </div>
                ))}
              </div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
            {[
              { id: "casa-costas", img: IMG_CASE, name: "Casa Costas", meta: "Residencial · 300m² · São José dos Campos · 2024" },
              { id: "ap-vista", img: IMG_HERO, name: "Apartamento Vista", meta: "Interiores · 180m² · São Paulo · 2024" },
              { id: "casa-mata", img: IMG_CASE, name: "Casa Mata", meta: "Residencial · 420m² · Campos do Jordão · 2023" },
              { id: "ap-luz", img: IMG_HERO, name: "Apartamento Luz", meta: "Interiores · 145m² · São José dos Campos · 2023" },
              { id: "casa-jardim", img: IMG_CASE, name: "Casa Jardim", meta: "Residencial · 380m² · Jacareí · 2022" },
              { id: "ap-sereno", img: IMG_HERO, name: "Apartamento Sereno", meta: "Interiores · 210m² · Taubaté · 2022" },
            ].map((proj) => (
              <article key={proj.id} className="group">
                <div className="aspect-[4/5] overflow-hidden mb-5 bg-surface-elevated">
                  <img
                    src={proj.img}
                    alt={proj.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <Editable
                  as="h3"
                  id={`cap.port.${proj.id}.name`}
                  className="font-display text-2xl text-foreground mb-2"
                >
                  {proj.name}
                </Editable>
                <Editable
                  id={`cap.port.${proj.id}.meta`}
                  className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground block"
                >
                  {proj.meta}
                </Editable>
              </article>
            ))}
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
