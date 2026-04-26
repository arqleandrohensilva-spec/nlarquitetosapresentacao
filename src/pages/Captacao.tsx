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
import imgCasaOliveira from "@/assets/portfolio/casa-oliveira.png";

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
            Arquitetura é <em className="text-primary italic font-light">decisão</em>,
            <br />
            não desejo.
          </Editable>

          <div className="gold-line w-32 mb-8" />

          <Editable
            id="cap.capa.subtitle"
            multiline
            className="font-display italic text-xl md:text-2xl text-foreground/75 max-w-2xl block"
          >
            Conduzimos cada projeto com a precisão de quem sabe que a obra é apenas
            a última etapa — e a mais cara para corrigir.
          </Editable>

          <div className="mt-12 flex items-center gap-4 text-muted-foreground">
            <span className="h-px w-12 bg-primary/40" />
            <Editable
              id="cap.capa.tag"
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80"
            >
              NL Arquitetos
            </Editable>
          </div>
        </div>

        <div className="relative z-10 mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <Editable
            id="cap.capa.client"
            className="font-mono text-[10px] uppercase tracking-[0.4em] text-foreground/45"
          >
            Para · [Nome do Cliente]
          </Editable>
          <Editable
            id="cap.capa.date"
            className="font-mono text-[10px] uppercase tracking-[0.4em] text-foreground/45"
          >
            São José dos Campos · 2026
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
          08 · PROCESSOS · DO BRIEFING À ENTREGA
          ============================================================ */}
      <section
        id="etapas"
        className="relative px-6 md:px-16 lg:px-24 py-28 md:py-32 bg-surface/40"
      >
        <div className="max-w-[1400px] mx-auto">
          {/* Cabeçalho */}
          <div className="flex items-baseline justify-between mb-12 border-b border-border/60 pb-6">
            <div className="flex items-baseline gap-6">
              <span className="number-marker">08</span>
              <Editable id="cap.etapas.eyebrow" className="eyebrow">
                Processos · Do briefing à entrega
              </Editable>
            </div>
            <Editable
              id="cap.etapas.tag"
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block"
            >
              Arquitetura → Interiores · Fluxo encadeado
            </Editable>
          </div>

          <div className="grid grid-cols-12 gap-8 mb-16">
            <Editable
              as="h2"
              id="cap.etapas.title"
              multiline
              className="col-span-12 lg:col-span-7 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.0] text-balance"
            >
              Do primeiro traço
              <br />
              <em className="text-primary not-italic">ao detalhe final.</em>
            </Editable>
            <Editable
              id="cap.etapas.intro"
              multiline
              as="p"
              className="col-span-12 lg:col-span-5 lg:pt-4 font-display text-lg text-foreground/70 leading-relaxed"
            >
              Interiores inicia somente após aprovação integral da etapa de Arquitetura. Cada decisão é tomada na ordem certa — para que nada precise ser refeito depois.
            </Editable>
          </div>


          {/* ===== Trilha 01 · ARQUITETURA RESIDENCIAL ===== */}
          <div className="mb-20">
            <div className="flex items-baseline justify-between mb-10 pb-5 border-b border-border/60 flex-wrap gap-4">
              <div className="flex items-baseline gap-4 md:gap-6 flex-wrap">
                <Editable
                  id="cap.etapas.arq.num"
                  className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary"
                >
                  Trilha 01
                </Editable>
                <Editable
                  as="h3"
                  id="cap.etapas.arq.title"
                  className="font-display text-3xl md:text-4xl text-foreground leading-tight"
                >
                  Arquitetura Residencial
                </Editable>
              </div>
              <div className="flex items-baseline gap-4 md:gap-6 font-mono text-[10px] uppercase tracking-[0.3em]">
                <Editable id="cap.etapas.arq.fases" className="text-muted-foreground">
                  <span className="text-primary">08</span> fases
                </Editable>
                <span className="text-border">·</span>
                <Editable id="cap.etapas.arq.dur" className="text-muted-foreground">
                  5 a 6 meses
                </Editable>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60">
              {[
                { n: "01", t: "Levantamento & Briefing", d: "Escuta profunda, programa de necessidades e leitura do terreno." },
                { n: "02", t: "Criação do Conceito", d: "Partido arquitetônico, narrativa e diretrizes que guiam todo o projeto.", key: true },
                { n: "03", t: "Estudo Preliminar com 3D", d: "Volumetria, implantação e atmosferas em 3D antes de qualquer técnica.", key: true },
                { n: "04", t: "Viabilidade Financeira", d: "Orçamento por quantitativos reais — decisão consciente de escopo.", optional: true },
                { n: "05", t: "Projeto Legal & Aprovações", d: "Prefeitura, concessionárias e órgãos — conduzidos pela NL." },
                { n: "06", t: "Projeto Executivo", d: "Pranchas, memoriais e detalhamentos prontos para canteiro.", key: true },
                { n: "07", t: "Compatibilização Técnica", d: "Conduzida em parceria com engenheiros especializados — estrutura e instalações revisadas antes do canteiro." },
                { n: "08", t: "Acompanhamento de Obra", d: "Visitas técnicas, ajustes e indicação de fornecedores.", optional: true },
              ].map((p, i) => (
                <article
                  key={`arq-${i}`}
                  className={cn(
                    "bg-background p-7 md:p-8 flex flex-col group transition-colors relative",
                    p.key
                      ? "border-l-2 border-primary/70 hover:bg-surface/80"
                      : "hover:bg-surface/60"
                  )}
                >
                  <div className="flex items-baseline justify-between mb-5 min-h-[1.5rem]">
                    {p.key ? (
                      <Editable
                        id={`cap.etapas.arq.${i}.n`}
                        className="font-display italic text-3xl md:text-4xl text-primary leading-none"
                      >
                        {p.n}
                      </Editable>
                    ) : (
                      <Editable
                        id={`cap.etapas.arq.${i}.n`}
                        className="font-mono text-[11px] tracking-[0.2em] text-primary"
                      >
                        {p.n}
                      </Editable>
                    )}
                    {p.optional && (
                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground/70">
                        Opcional
                      </span>
                    )}
                    {p.key && (
                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-primary/80">
                        Decisão-chave
                      </span>
                    )}
                  </div>
                  <Editable
                    as="h4"
                    id={`cap.etapas.arq.${i}.t`}
                    className="font-display text-lg md:text-xl text-foreground leading-snug mb-3"
                  >
                    {p.t}
                  </Editable>
                  <Editable
                    as="p"
                    id={`cap.etapas.arq.${i}.d`}
                    multiline
                    className="text-sm text-foreground/65 leading-relaxed"
                  >
                    {p.d}
                  </Editable>
                </article>
              ))}
            </div>
          </div>

          {/* Divisor narrativo — momento editorial */}
          <div className="my-20 md:my-28 max-w-4xl mx-auto">

            {/* Frase-regra centralizada */}
            <div className="text-center">
              <Editable
                id="cap.etapas.divisor.eyebrow"
                className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-5 inline-block"
              >
                Regra do método
              </Editable>
              <Editable
                as="p"
                id="cap.etapas.divisor.frase"
                multiline
                className="font-display italic text-2xl md:text-3xl text-foreground/85 leading-snug text-balance max-w-3xl mx-auto"
              >
                Interiores não começa enquanto a arquitetura não está aprovada.
                <br />
                <em className="not-italic text-primary">É regra, não preferência.</em>
              </Editable>
            </div>
          </div>

          {/* ===== Trilha 02 · ARQUITETURA DE INTERIORES ===== */}
          <div>
            <div className="flex items-baseline justify-between mb-10 pb-5 border-b border-border/60 flex-wrap gap-4">
              <div className="flex items-baseline gap-4 md:gap-6 flex-wrap">
                <Editable
                  id="cap.etapas.int.num"
                  className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary"
                >
                  Trilha 02
                </Editable>
                <Editable
                  as="h3"
                  id="cap.etapas.int.title"
                  className="font-display text-3xl md:text-4xl text-foreground leading-tight"
                >
                  Arquitetura de Interiores
                </Editable>
              </div>
              <div className="flex items-baseline gap-4 md:gap-6 font-mono text-[10px] uppercase tracking-[0.3em]">
                <Editable id="cap.etapas.int.fases" className="text-muted-foreground">
                  <span className="text-primary">07</span> fases
                </Editable>
                <span className="text-border">·</span>
                <Editable id="cap.etapas.int.dur" className="text-muted-foreground">
                  3 a 4 meses
                </Editable>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-border/60">
              {[
                { n: "01", t: "Briefing & Levantamentos", d: "Escuta profunda, leitura do espaço e do estilo de vida." },
                { n: "02", t: "Criação do Conceito", d: "Atmosfera, paleta e narrativa de interiores que orientam cada decisão.", key: true },
                { n: "03", t: "Concepção 3D", d: "Imagens realistas e vídeo 360° para experimentar o projeto antes da obra.", key: true },
                { n: "04", t: "Viabilidade Financeira", d: "Orçamento por quantitativos reais — decisão consciente de escopo.", optional: true },
                { n: "05", t: "Projeto Executivo", d: "Marcenaria, iluminação, revestimentos e pranchas executivas.", key: true },
                { n: "06", t: "Visitas em Lojas", d: "Indicação e seleção conjunta de mobiliário, acabamentos, arte e têxteis.", optional: true },
                { n: "07", t: "Acompanhamento de Obra", d: "Visitas técnicas, ajustes finos e indicação de fornecedores.", optional: true },
              ].map((p, i) => (
                <article
                  key={`int-${i}`}
                  className={cn(
                    "bg-background p-7 md:p-8 flex flex-col group transition-colors border-r border-b border-border/60 relative",
                    p.key
                      ? "border-l-2 border-l-primary/70 hover:bg-surface/80"
                      : "hover:bg-surface/60"
                  )}
                >
                  <div className="flex items-baseline justify-between mb-5 min-h-[1.5rem]">
                    {p.key ? (
                      <Editable
                        id={`cap.etapas.int.${i}.n`}
                        className="font-display italic text-3xl md:text-4xl text-primary leading-none"
                      >
                        {p.n}
                      </Editable>
                    ) : (
                      <Editable
                        id={`cap.etapas.int.${i}.n`}
                        className="font-mono text-[11px] tracking-[0.2em] text-primary"
                      >
                        {p.n}
                      </Editable>
                    )}
                    {p.optional && (
                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground/70">
                        Opcional
                      </span>
                    )}
                    {p.key && (
                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-primary/80">
                        Decisão-chave
                      </span>
                    )}
                  </div>
                  <Editable
                    as="h4"
                    id={`cap.etapas.int.${i}.t`}
                    className="font-display text-lg md:text-xl text-foreground leading-snug mb-3"
                  >
                    {p.t}
                  </Editable>
                  <Editable
                    as="p"
                    id={`cap.etapas.int.${i}.d`}
                    multiline
                    className="text-sm text-foreground/65 leading-relaxed"
                  >
                    {p.d}
                  </Editable>
                </article>
              ))}
            </div>
          </div>

          {/* Assinatura de fechamento */}
          <div className="mt-20 md:mt-24 pt-10 border-t border-border/60 max-w-3xl mx-auto text-center">
            <Editable
              id="cap.etapas.fech.eyebrow"
              className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-5 inline-block"
            >
              Assinatura do método
            </Editable>
            <Editable
              as="p"
              id="cap.etapas.fech.frase"
              multiline
              className="font-display italic text-xl md:text-2xl text-foreground/80 leading-snug text-balance mb-6"
            >
              Cada fase tem critério de avanço.
              <br />
              <em className="not-italic text-primary">A NL conduz — você aprova com segurança.</em>
            </Editable>
            <Editable
              as="p"
              id="cap.etapas.nota"
              multiline
              className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70 leading-relaxed"
            >
              Cronograma estimado · Pode variar conforme escopo, aprovações de terceiros e disponibilidade do cliente.
            </Editable>
          </div>
        </div>
      </section>

      {/* ============================================================
          09 · ARQ + INT · DUAS DISCIPLINAS
          ============================================================ */}
      <section
        id="processos"
        className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-32"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-baseline justify-between mb-16 pb-4 border-b border-border/60">
            <div className="flex items-baseline gap-6">
              <span className="number-marker">09</span>
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
            Antes da obra, <em className="text-primary">a decisão.</em>
          </Editable>

          {(() => {
            const projects = [
              { id: "casa-jc", img: imgCasaJC, name: "Casa JC", typology: "Residencial", place: "Jacareí · SP", year: "2025" },
              { id: "casa-costas", img: IMG_CASE, name: "Casa Costas", typology: "Residencial", place: "São José dos Campos · 300m²", year: "2024" },
              { id: "chale-juruva", img: imgChaleJuruva, name: "Chalé Juruva", typology: "Residencial / Interiores", place: "Santo Antônio do Pinhal · 60m²", year: "2024" },
              { id: "familia-borges", img: imgFamiliaBorges, name: "Família Borges", typology: "Interiores Residencial", place: "Jacareí · 100m²", year: "2025" },
              { id: "gourmet-jardim", img: imgGourmetJardim, name: "Espaço Gourmet Jardim", typology: "Interiores", place: "Jacareí · 80m²", year: "2025" },
              { id: "gourmet-salinas", img: imgGourmetSalinas, name: "Espaço Gourmet Salinas", typology: "Interiores", place: "São José dos Campos · 65m²", year: "2025" },
              { id: "casa-oliveira", img: imgCasaOliveira, name: "Casa Oliveira", typology: "Interiores", place: "Jacareí · SP · 70m²", year: "2025" },
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
          12 · FECHAMENTO · PRÓXIMO PASSO
          ============================================================ */}
      <section
        id="fechamento"
        className="relative min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 py-32"
        style={{ backgroundColor: "#1A1816", color: "#E8E4DF" }}
      >
        <div className="relative z-10 max-w-5xl mx-auto text-center w-full">
          {/* Eyebrow no topo, sozinho e centralizado */}
          <div className="flex justify-center mb-4">
            <Editable
              id="cap.fech.eyebrow"
              className="font-mono-edit text-[10px] uppercase tracking-[0.4em]"
              style={{ color: "#8B7355" }}
            >
              Próximo passo
            </Editable>
          </div>

          {/* Divisor bronze fino centralizado abaixo do eyebrow */}
          <div className="flex justify-center mb-10 md:mb-12">
            <span
              className="h-px w-16"
              style={{ backgroundColor: "rgba(139, 115, 85, 0.7)" }}
            />
          </div>

          {/* Título principal */}
          <Editable
            as="h2"
            id="cap.fech.title"
            multiline
            className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-balance mb-10 md:mb-12"
            style={{ color: "#E8E4DF" }}
          >
            Em 48 horas, a próxima decisão
            <br />
            chega às <em className="not-italic" style={{ color: "#C9A876" }}>suas mãos.</em>
          </Editable>

          {/* Parágrafo */}
          <Editable
            as="p"
            id="cap.fech.body"
            multiline
            className="font-display italic text-lg md:text-xl leading-relaxed mb-20 md:mb-24 max-w-2xl mx-auto"
            style={{ color: "rgba(232, 228, 223, 0.6)" }}
          >
            Uma Carta Proposta feita para você — pensada, estudada, detalhada. Pronta para ser lida com a mesma calma com que foi escrita.
          </Editable>

          {/* Divisor superior do bloco de contatos */}
          <div className="w-full mb-10 md:mb-12">
            <span
              className="block h-px w-full"
              style={{ backgroundColor: "rgba(232, 228, 223, 0.12)" }}
            />
          </div>

          {/* Bloco de contato — 3 colunas: label bronze + valor itálico */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-20 md:mb-24 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3">
              <Editable
                id="cap.fech.contact.whatsapp.label"
                className="font-mono-edit text-[10px] uppercase tracking-[0.4em]"
                style={{ color: "#8B7355" }}
              >
                WhatsApp
              </Editable>
              <Editable
                id="cap.fech.contact.whatsapp"
                className="font-display italic text-base md:text-lg"
                style={{ color: "rgba(232, 228, 223, 0.85)" }}
              >
                (12) 99623-5559
              </Editable>
            </div>

            <div className="flex flex-col items-center gap-3">
              <Editable
                id="cap.fech.contact.email.label"
                className="font-mono-edit text-[10px] uppercase tracking-[0.4em]"
                style={{ color: "#8B7355" }}
              >
                E-mail
              </Editable>
              <Editable
                id="cap.fech.contact.email"
                className="font-display italic text-base md:text-lg"
                style={{ color: "rgba(232, 228, 223, 0.85)" }}
              >
                contato.nlarquitetos@gmail.com
              </Editable>
            </div>

            <div className="flex flex-col items-center gap-3">
              <Editable
                id="cap.fech.contact.instagram.label"
                className="font-mono-edit text-[10px] uppercase tracking-[0.4em]"
                style={{ color: "#8B7355" }}
              >
                Instagram
              </Editable>
              <Editable
                id="cap.fech.contact.instagram"
                className="font-display italic text-base md:text-lg"
                style={{ color: "rgba(232, 228, 223, 0.85)" }}
              >
                @nlarquitetos
              </Editable>
            </div>
          </div>

          {/* Rodapé bipartido: citação à esquerda, logo NL + assinatura à direita */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t" style={{ borderColor: "rgba(232, 228, 223, 0.1)" }}>
            <Editable
              id="cap.fech.rodape.quote"
              className="font-display italic text-sm md:text-base"
              style={{ color: "rgba(232, 228, 223, 0.45)" }}
            >
              A arquitetura como decisão.
            </Editable>
            <div className="flex items-center gap-4">
              <Editable
                id="cap.fech.logo"
                className="font-display text-sm md:text-base tracking-[0.2em] leading-none"
                style={{ color: "rgba(232, 228, 223, 0.45)" }}
              >
                NL
              </Editable>
              <span className="h-4 w-px" style={{ backgroundColor: "rgba(232, 228, 223, 0.2)" }} />
              <Editable
                id="cap.fech.rodape"
                className="font-mono-edit text-[10px] uppercase tracking-[0.4em]"
                style={{ color: "rgba(232, 228, 223, 0.45)" }}
              >
                NL Arquitetos · 2025
              </Editable>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Captacao;
