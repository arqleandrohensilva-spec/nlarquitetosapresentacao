import Editable from "@/components/Editable";
import CaptacaoNav from "@/components/CaptacaoNav";
import { Link } from "react-router-dom";

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
        className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-32"
        style={{ backgroundColor: "#1A1816", color: "#E8E4DF" }}
      >
        <div className="grid grid-cols-12 gap-8 w-full max-w-7xl mx-auto">
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
              className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-16 text-balance"
              style={{ color: "#E8E4DF" }}
            >
              Antes de desenhar,
              <br />
              <em className="not-italic" style={{ color: "#8B7355" }}>
                escutamos.
              </em>
            </Editable>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
              <Editable
                id="cap.manifesto.p1"
                multiline
                as="p"
                className="font-display text-lg md:text-xl leading-relaxed"
                style={{ color: "rgba(232, 228, 223, 0.82)" }}
              >
                A NL não começa pelo desenho. Começa pela escuta — entendendo o terreno, a família, o modo de viver. Só depois o primeiro traço aparece. E quando aparece, já foi validado.
              </Editable>
              <Editable
                id="cap.manifesto.p2"
                multiline
                as="p"
                className="font-display text-lg md:text-xl leading-relaxed"
                style={{ color: "rgba(232, 228, 223, 0.82)" }}
              >
                Cada projeto que entregamos existe porque alguém confiou em nós antes de existir uma única parede. Essa confiança não se paga com estética — se honra com método, documentação e resultado previsível.
              </Editable>
            </div>

            <div
              className="mt-20 pl-8 border-l max-w-2xl"
              style={{ borderColor: "rgba(139, 115, 85, 0.5)" }}
            >
              <Editable
                id="cap.manifesto.quote"
                multiline
                as="p"
                className="font-display italic text-2xl md:text-3xl leading-snug"
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
        className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-32"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-baseline justify-between mb-16 pb-4 border-b border-border/60">
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
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-20 text-balance max-w-4xl"
          >
            Um caminho <em className="text-primary not-italic">claro</em>, do primeiro
            café ao primeiro traço.
          </Editable>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40">
            {[
              {
                id: "01",
                title: "Conversa inicial",
                body:
                  "Conhecer você, o terreno, o sonho. Sem pressa, sem fórmula pronta.",
              },
              {
                id: "02",
                title: "Estudo preliminar",
                body:
                  "Primeiras volumetrias e referências visuais — para sentir o caminho.",
              },
              {
                id: "03",
                title: "Anteprojeto",
                body:
                  "O projeto ganha forma. Plantas, cortes, primeira renderização do espaço.",
              },
              {
                id: "04",
                title: "Executivo",
                body:
                  "Cada detalhe resolvido no papel. A obra começa com tudo decidido.",
              },
            ].map((step) => (
              <div
                key={step.id}
                className="bg-background p-8 md:p-10 group hover:bg-surface-elevated transition-colors duration-500"
              >
                <span className="font-mono text-[10px] tracking-[0.3em] text-primary block mb-6">
                  {step.id}
                </span>
                <div className="gold-line w-8 mb-6" />
                <Editable
                  as="h3"
                  id={`cap.como.step.${step.id}.title`}
                  className="font-display text-2xl md:text-3xl leading-tight mb-4 text-foreground"
                >
                  {step.title}
                </Editable>
                <Editable
                  as="p"
                  id={`cap.como.step.${step.id}.body`}
                  multiline
                  className="font-display text-base leading-relaxed text-foreground/65"
                >
                  {step.body}
                </Editable>
              </div>
            ))}
          </div>

          <div className="mt-20 pl-8 border-l border-primary/40 max-w-2xl">
            <Editable
              as="p"
              id="cap.como.note"
              multiline
              className="font-display italic text-xl md:text-2xl text-foreground/80 leading-snug"
            >
              Cada etapa termina com uma decisão tomada juntos — nunca seguimos
              em frente sem que você esteja confortável.
            </Editable>
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
                Um estúdio onde
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
                interior. Juntos, fundamos um estúdio que entrega projetos integrais,
                onde estrutura e alma caminham lado a lado.
              </Editable>

              <Editable
                id="cap.sobre.body2"
                multiline
                as="p"
                className="font-display italic text-base lg:text-lg leading-relaxed text-foreground/65 max-w-xl"
              >
                Trabalhamos com poucos clientes por vez. Não por escolha de mercado —
                por convicção de método.
              </Editable>
            </div>

            <aside className="col-span-12 lg:col-span-6 lg:pl-8 lg:border-l border-border/60">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { id: "leandro", name: "Leandro Henrique", role: "Co-fundador · Arquiteto", img: IMG_LEANDRO },
                  { id: "neandro", name: "Neandro Jacque", role: "Co-fundador · Arquiteto", img: IMG_NEANDRO },
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
                  "Nenhum traço aparece antes de entender quem vai morar, como vive e o que sonha. O projeto pertence a você — não ao nosso portfólio.",
              },
              {
                id: "metodo",
                title: "Método sem rigidez",
                body:
                  "Temos um processo claro, mas que respira. Cada cliente recebe um caminho desenhado para o seu tempo, sua energia e suas decisões.",
              },
              {
                id: "atemporal",
                title: "Beleza atemporal",
                body:
                  "Recusamos modismos. Buscamos materialidade, proporção e luz — os elementos que envelhecem bem e tornam a casa cada vez mais sua.",
              },
              {
                id: "obra",
                title: "Decisões antes da obra",
                body:
                  "Tudo que pode ser resolvido no papel é resolvido no papel. Você entra na obra com clareza, previsibilidade e tranquilidade.",
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
        style={{ backgroundColor: "#1A1816", color: "#E8E4DF" }}
      >
        <div className="max-w-6xl mx-auto w-full">
          <div
            className="flex items-baseline gap-6 mb-16 pb-4 border-b"
            style={{ borderColor: "rgba(139, 115, 85, 0.35)" }}
          >
            <span
              className="font-mono-edit text-[10px] tracking-[0.3em]"
              style={{ color: "rgba(232, 228, 223, 0.55)" }}
            >
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
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.0] text-balance mb-12 max-w-4xl"
            style={{ color: "#E8E4DF" }}
          >
            O momento em que o projeto <em className="not-italic" style={{ color: "#C9A876" }}>vira sua casa.</em>
          </Editable>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {[
              { n: "01", t: "Validação", b: "Cada decisão é apresentada e aprovada juntos." },
              { n: "02", t: "Compatibilização", b: "Arquitetura, interiores e engenharia falam a mesma língua." },
              { n: "03", t: "Entrega", b: "Você recebe um projeto pronto para ser construído sem surpresas." },
            ].map((s) => (
              <div key={s.n}>
                <span
                  className="font-mono-edit text-[10px] tracking-[0.3em] block mb-4"
                  style={{ color: "#8B7355" }}
                >
                  {s.n}
                </span>
                <div className="h-px w-10 mb-5" style={{ backgroundColor: "#8B7355" }} />
                <Editable
                  as="h3"
                  id={`cap.consol.${s.n}.t`}
                  className="font-display text-2xl mb-3"
                  style={{ color: "#E8E4DF" }}
                >
                  {s.t}
                </Editable>
                <Editable
                  as="p"
                  id={`cap.consol.${s.n}.b`}
                  multiline
                  className="font-display text-base leading-relaxed"
                  style={{ color: "rgba(232, 228, 223, 0.7)" }}
                >
                  {s.b}
                </Editable>
              </div>
            ))}
          </div>

          <div className="mt-24 flex flex-col items-center text-center">
            <div className="h-px w-16 mb-8" style={{ backgroundColor: "#8B7355" }} />
            <Editable
              as="p"
              id="cap.consol.closing"
              multiline
              className="font-display italic text-xl md:text-2xl max-w-2xl leading-relaxed"
              style={{ color: "#C9A876" }}
            >
              Quando você recebe o projeto, ele já carrega a tranquilidade
              de saber que cada metro foi pensado para você.
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
