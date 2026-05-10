
import Editable from "@/components/Editable";
import CaptacaoNav from "@/components/CaptacaoNav";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import MapaAtuacao from "@/components/MapaAtuacao";
import { cn } from "@/lib/utils";

/* ============================================================================
   NL ARQUITETOS · APRESENTAÇÃO COMERCIAL
   ----------------------------------------------------------------------------
   Documento estratégico para primeiro contato com cliente comercial.
   Sem valores. Sem detalhamento técnico aprofundado.
   Foco: identidade, método, resultado de negócio, repertório comercial.
   ============================================================================ */

const IMG_HERO =
  "https://www.dropbox.com/scl/fi/01h024ricdkyg9hmvlolo/nomo-result-1778360736315.png?rlkey=dvkmki1yd2rqxbv6ibjkqe23f&raw=1";
const IMG_CASE =
  "https://www.dropbox.com/scl/fi/01h024ricdkyg9hmvlolo/nomo-result-1778360736315.png?rlkey=dvkmki1yd2rqxbv6ibjkqe23f&raw=1";
const IMG_LEANDRO =
  "https://www.dropbox.com/scl/fi/uydr0i2jkh4eq2semj7ey/Leandro.png?rlkey=1784s67wn6c6hjdma6wkgy91a&raw=1";
const IMG_NEANDRO =
  "https://www.dropbox.com/scl/fi/6060a867ejklropxdqju3/Neandro.png?rlkey=3z4ynhzr1lq6treoni9h1fqyr&raw=1";
const IMG_PORT_01 =
  "https://www.dropbox.com/scl/fi/5ucn92oobs1f9ly2uf3ee/Gemini_Generated_Image_dueznydueznyduez.png?rlkey=i8bjcbqgocsj6bh57a5o7bupx&raw=1";
const IMG_PORT_02 =
  "https://www.dropbox.com/scl/fi/325qfdp842e58tb1bw236/kingai-enhance_photo-8fa7e5f6-4k.png?rlkey=a34uc8i9mdaspp1arpl5529xx&raw=1";
const IMG_PORT_03 =
  "https://www.dropbox.com/scl/fi/tu93bcv9kxxi0naemt3kq/kingai-interior-625d1904-2k.png?rlkey=agwmjg7a0udal1rqvukpwhpka&raw=1";
const IMG_PORT_04 =
  "https://www.dropbox.com/scl/fi/yrqz07ae3bz4ktd0rzb0s/kingai-interior-56a9f07d-2k.png?rlkey=huib18pcy7b0d76ihm3d72xse&raw=1";

const ApresentacaoComercial = () => {
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
          alt="NL Arquitetos · Barbearia Cabalera · espaço comercial"
          className="absolute inset-0 w-full h-full object-cover opacity-90 contrast-110 saturate-125"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background/95" />
        <div className="absolute inset-0 vignette opacity-70" />

        <div className="relative z-10 max-w-4xl fade-up">
          <Editable id="apc.capa.eyebrow" className="eyebrow-editorial text-primary/80 mb-8 inline-block">
            Apresentação · Confidencial
          </Editable>

          <Editable
            as="h1"
            id="apc.capa.title"
            multiline
            className="display-hero text-foreground mb-8"
          >
            O espaço que <em className="text-primary italic font-light">trabalha</em>
            <br />
            por você.
          </Editable>

          <div className="gold-line w-32 mb-8" />

          <Editable
            id="apc.capa.subtitle"
            multiline
            className="lede-editorial text-foreground/75 max-w-2xl block"
          >
            Seu cliente decide em três segundos se entra ou não.
            O espaço decide por ele — antes de qualquer palavra ser dita.
          </Editable>

          <div className="mt-12 flex items-center gap-4">
            <span className="h-px w-12 bg-primary/40" />
            <Editable
              id="apc.capa.tag"
              className="label-meta text-primary/80"
            >
              NL Arquitetos · Comercial
            </Editable>
          </div>
        </div>

        <div className="relative z-10 mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <Editable
            id="apc.capa.client"
            className="label-meta text-foreground/45"
          >
            Para · [Nome do Cliente]
          </Editable>
          <Editable
            id="apc.capa.date"
            className="label-meta text-foreground/45"
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
        style={{ backgroundColor: "hsl(var(--surface-dark))", color: "hsl(var(--ink-dark))" }}
      >
        <div
          aria-hidden
          className="absolute top-0 left-0 right-0 h-px"
          style={{ backgroundColor: "hsl(var(--bronze) / 0.3)" }}
        />
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
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none flex items-center justify-end px-5 sm:px-8 md:px-16 lg:px-24"
        >
          <span
            className="font-display font-light leading-none select-none"
            style={{
              fontSize: "clamp(18rem, 42vw, 38rem)",
              color: "transparent",
              WebkitTextStroke: "1px hsl(var(--bronze) / 0.08)",
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
              className="label-meta block mb-2"
              style={{ color: "hsl(var(--ink-dark) / 0.55)" }}
            >
              02
            </span>
            <Editable
              id="apc.manifesto.eyebrow"
              className="label-meta"
              style={{ color: "hsl(var(--bronze))" }}
            >
              Manifesto
            </Editable>
          </div>

          <div className="col-span-12 md:col-span-9">
            <Editable
              as="h2"
              id="apc.manifesto.title"
              multiline
              className="display-section mb-10 sm:mb-12 md:mb-16 lg:mb-20"
              style={{ color: "hsl(var(--ink-dark))" }}
            >
              Antes de desenhar,
              <br />
              <em className="not-italic font-light" style={{ color: "hsl(var(--bronze))" }}>
                entendemos o negócio.
              </em>
            </Editable>

            <div className="manifesto-paragraphs grid md:grid-cols-2 gap-x-10 lg:gap-x-14 gap-y-7 md:gap-y-10 max-w-4xl">
              <Editable
                id="apc.manifesto.p1"
                multiline
                as="p"
                className="body-editorial"
                style={{ color: "hsl(var(--ink-dark) / 0.82)" }}
              >
                O espaço comercial não é decoração — é o primeiro vendedor do seu negócio. Ele comunica antes que qualquer funcionário fale, justifica o preço antes que você apresente o serviço, e decide se o cliente volta antes mesmo de ele sair.
              </Editable>
              <Editable
                id="apc.manifesto.p2"
                multiline
                as="p"
                className="body-editorial"
                style={{ color: "hsl(var(--ink-dark) / 0.82)" }}
              >
                Cada decisão tomada em projeto evita uma decisão custosa na obra. Ponto alugado parado é custo. Reforma mal planejada é retrabalho. A NL elimina esse risco antes de o primeiro parafuso entrar na parede.
              </Editable>
            </div>

            <div
              className="manifesto-quote-wrap mt-12 sm:mt-16 md:mt-20 lg:mt-24 pl-5 sm:pl-6 md:pl-8 border-l max-w-3xl"
              style={{ borderColor: "hsl(var(--bronze) / 0.5)" }}
            >
              <Editable
                id="apc.manifesto.quote"
                multiline
                as="p"
                className="lede-editorial"
                style={{ color: "hsl(var(--bronze))" }}
              >
                "Seu cliente decide em três segundos se entra ou não. O espaço decide por ele."
              </Editable>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          03 · CONCEITO COMO NEGÓCIO
          ============================================================ */}
      <section
        id="conceito"
        className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-32"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-baseline justify-between mb-16 pb-4 border-b border-border/60">
            <div className="flex items-baseline gap-6">
              <span className="number-marker">03</span>
              <Editable id="apc.conceito.eyebrow" className="eyebrow">
                O espaço como estratégia
              </Editable>
            </div>
            <Editable
              id="apc.conceito.tag"
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block"
            >
              Não é decoração — é decisão
            </Editable>
          </div>

          <div className="grid grid-cols-12 gap-12 items-start">
            <div className="col-span-12 lg:col-span-6">
              <Editable
                as="h2"
                id="apc.conceito.title"
                multiline
                className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.0] mb-10 text-balance"
              >
                O conceito não é estético —<br />
                <em className="text-primary not-italic">é estratégico.</em>
              </Editable>
              <Editable
                id="apc.conceito.body"
                multiline
                as="p"
                className="font-display text-base lg:text-lg leading-relaxed text-foreground/75 mb-8"
              >
                Antes de escolher um revestimento ou uma luminária, a NL entende a missão do negócio. Quem é o cliente ideal? Qual experiência ele precisa ter? O que o espaço precisa comunicar antes que alguém fale uma palavra?
              </Editable>
              <Editable
                id="apc.conceito.body2"
                multiline
                as="p"
                className="font-display text-base lg:text-lg leading-relaxed text-foreground/75"
              >
                Só depois que essas perguntas estão respondidas é que o traço aparece. E quando aparece, cada decisão — de material, de luz, de fluxo — está alinhada com o resultado que o negócio precisa entregar.
              </Editable>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <div className="grid grid-cols-1 gap-px bg-border border border-border">
                {[
                  { num: "01", title: "Missão do negócio", body: "O que o seu negócio promete ao cliente? A resposta define a atmosfera, a paleta e o fluxo do espaço." },
                  { num: "02", title: "Identidade visual do espaço", body: "O espaço precisa ser reconhecível — uma extensão visual da marca, não um ambiente genérico." },
                  { num: "03", title: "Fluxo de atendimento", body: "Onde o cliente entra, espera, é atendido e sai. Cada metro quadrado tem função. Nada é decorativo." },
                  { num: "04", title: "Experiência que faz voltar", body: "O ambiente que faz o cliente fotografar, comentar e indicar. Isso não é acidente — é decisão de projeto." },
                ].map((item, i) => (
                  <div key={i} className="bg-background p-6 md:p-8">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="font-mono text-[10px] text-primary/70 uppercase tracking-[0.3em]">{item.num}</span>
                      <Editable as="h3" id={`apc.conceito.item${i}.title`} className="font-display text-xl text-foreground leading-tight">{item.title}</Editable>
                    </div>
                    <Editable id={`apc.conceito.item${i}.body`} multiline as="p" className="font-display text-foreground/70 leading-relaxed">{item.body}</Editable>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          04 · SOBRE NÓS
          ============================================================ */}
      <section
        id="sobre"
        className="relative min-h-screen px-6 md:px-16 lg:px-24 py-20 lg:py-24 flex flex-col justify-center"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-baseline justify-between mb-12 border-b border-border/60 pb-4">
            <div className="flex items-baseline gap-6">
              <span className="number-marker">04</span>
              <Editable id="apc.sobre.eyebrow" className="eyebrow">
                Sobre nós
              </Editable>
            </div>
            <Editable
              id="apc.sobre.tag"
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block"
            >
              Dois arquitetos · Uma assinatura
            </Editable>
          </div>

          <div className="grid grid-cols-12 gap-x-10 gap-y-12 items-start">
            <div className="col-span-12 lg:col-span-6">
              <Editable
                as="h2"
                id="apc.sobre.title"
                multiline
                className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.0] text-balance mb-8"
              >
                Um escritório onde
                <br />
                <em className="text-primary not-italic">negócio e arquitetura falam a mesma língua.</em>
              </Editable>

              <Editable
                id="apc.sobre.body"
                multiline
                as="p"
                className="font-display text-base lg:text-lg leading-relaxed text-foreground/75 max-w-xl mb-6"
              >
                A NL nasceu da união entre dois arquitetos com visões complementares. Juntos, fundamos um escritório que entende que o espaço comercial é uma ferramenta de negócio — não um cenário decorativo. Cada projeto recebe atenção integral dos dois sócios, do briefing à última prancha.
              </Editable>

              <Editable
                id="apc.sobre.body2"
                multiline
                as="p"
                className="font-display italic text-base lg:text-lg leading-relaxed text-foreground/65 max-w-xl"
              >
                Não começamos pelo render bonito. Começamos pela missão do seu negócio.
              </Editable>
            </div>

            <aside className="col-span-12 lg:col-span-6 lg:pl-8 lg:border-l border-border/60">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { id: "leandro", name: "Leandro Henrique", role: "Co-fundador · Arquiteto", cau: "CAU A252250-0", img: IMG_LEANDRO },
                  { id: "neandro", name: "Neandro Jacque", role: "Co-fundador · Arquiteto", cau: "CAU A264629-3", img: IMG_NEANDRO },
                ].map((person) => (
                  <div key={person.id} className="bg-surface-elevated overflow-hidden group">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={person.img}
                        alt={person.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <Editable as="h3" id={`apc.sobre.${person.id}.name`} className="font-display text-xl text-foreground mb-1">{person.name}</Editable>
                      <Editable id={`apc.sobre.${person.id}.role`} className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary/70 block">{person.role}</Editable>
                      <Editable id={`apc.sobre.${person.id}.cau`} className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/80 block mt-1">{person.cau}</Editable>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ============================================================
          05 · PILARES
          ============================================================ */}
      <section
        id="pilares"
        className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-32"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-baseline justify-between mb-16 pb-4 border-b border-border/60">
            <div className="flex items-baseline gap-6">
              <span className="number-marker">05</span>
              <Editable id="apc.pilares.eyebrow" className="eyebrow">Nossos pilares</Editable>
            </div>
          </div>

          <Editable
            as="h2"
            id="apc.pilares.title"
            multiline
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-20 text-balance max-w-4xl"
          >
            Quatro princípios que <em className="text-primary not-italic">não negociamos.</em>
          </Editable>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
            {[
              {
                id: "decisao",
                title: "Decisão antes da obra",
                body: "Ponto alugado parado é custo. Tudo que pode ser resolvido no papel é resolvido no papel — antes de qualquer execução.",
                quote: "Ponto parado é custo. Decidimos antes.",
              },
              {
                id: "identidade",
                title: "Identidade como estratégia",
                body: "O espaço é a extensão visual da sua marca. Materialidade, iluminação e fluxo alinhados ao que o negócio precisa comunicar.",
                quote: "O espaço vende antes de você falar.",
              },
              {
                id: "metodo",
                title: "Método que conduz",
                body: "Temos um processo claro com etapas definidas e critérios de aprovação. Você sabe sempre em que momento está — e quando o ponto vai estar pronto.",
                quote: "Você não precisa entender de obra. Precisa entender o que aprova.",
              },
              {
                id: "resultado",
                title: "Resultado previsível",
                body: "Obra sem improviso, sem surpresa de custo. O espaço que abre é o espaço que foi decidido — sem diferença entre o projeto e a execução.",
                quote: "A NL não projeta para impressionar. Projeta para funcionar.",
              },
            ].map((p, i) => (
              <div key={p.id} className="grid grid-cols-12 gap-4">
                <div className="col-span-2">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-primary block">0{i + 1}</span>
                </div>
                <div className="col-span-10">
                  <Editable as="h3" id={`apc.pilares.${p.id}.title`} className="font-display text-2xl md:text-3xl leading-tight mb-4 text-foreground">{p.title}</Editable>
                  <div className="gold-line w-8 mb-5" />
                  <Editable as="p" id={`apc.pilares.${p.id}.body`} multiline className="font-display text-base md:text-lg leading-relaxed text-foreground/70">{p.body}</Editable>
                  <Editable as="p" id={`apc.pilares.${p.id}.quote`} multiline className="font-display italic text-base md:text-lg leading-relaxed text-primary mt-4">"{p.quote}"</Editable>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          06 · CONSOLIDAÇÃO
          ============================================================ */}
      <section
        id="consolidacao"
        className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-32"
        style={{ backgroundColor: "hsl(var(--surface-light))", color: "hsl(var(--ink-light))" }}
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex items-baseline gap-6 mb-16 pb-4 border-b" style={{ borderColor: "hsl(var(--bronze) / 0.3)" }}>
            <span className="label-meta" style={{ color: "hsl(var(--ink-muted))" }}>06</span>
            <Editable id="apc.consol.eyebrow" className="label-meta" style={{ color: "hsl(var(--bronze))" }}>
              Consolidação
            </Editable>
          </div>

          <Editable as="h2" id="apc.consol.title" multiline className="display-section mb-8 max-w-4xl" style={{ color: "hsl(var(--ink-light))" }}>
            Estrutura e resultado.
          </Editable>

          <Editable as="p" id="apc.consol.subtitle" multiline className="body-editorial max-w-3xl mb-20" style={{ color: "hsl(var(--ink-light-soft))" }}>
            Cada projeto que entregamos é uma decisão registrada — não uma aposta. O método garante que o espaço que abre é o espaço que foi projetado.
          </Editable>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: "hsl(var(--bronze) / 0.25)" }}>
            <div className="p-8 md:p-10 flex flex-col" style={{ backgroundColor: "hsl(var(--surface-light))" }}>
              <div className="h-px w-10 mb-6" style={{ backgroundColor: "hsl(var(--bronze))" }} />
              <span className="font-display text-5xl md:text-6xl leading-none mb-4" style={{ color: "hsl(var(--bronze))" }}>+50</span>
              <span className="font-mono-edit text-[10px] uppercase tracking-[0.3em]" style={{ color: "hsl(var(--ink-light))" }}>Projetos no portfólio</span>
              <span className="font-display italic text-xs mt-3" style={{ color: "hsl(var(--ink-muted))" }}>residencial · comercial · interiores</span>
            </div>

            <div className="p-8 md:p-10 flex flex-col" style={{ backgroundColor: "hsl(var(--surface-light))" }}>
              <div className="h-px w-10 mb-6" style={{ backgroundColor: "hsl(var(--bronze))" }} />
              <span className="font-display text-5xl md:text-6xl leading-none mb-4" style={{ color: "hsl(var(--bronze))" }}>+5</span>
              <span className="font-mono-edit text-[10px] uppercase tracking-[0.3em]" style={{ color: "hsl(var(--ink-light))" }}>Anos de prática autoral</span>
              <span className="font-display italic text-xs mt-3" style={{ color: "hsl(var(--ink-muted))" }}>desde 2021</span>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <button className="p-8 md:p-10 flex flex-col text-left transition-colors group w-full h-full hover:bg-[#F7F4EF]" style={{ backgroundColor: "hsl(var(--surface-light))" }}>
                  <div className="h-px w-10 mb-6 transition-all group-hover:w-16" style={{ backgroundColor: "hsl(var(--bronze))" }} />
                  <span className="font-display text-5xl md:text-6xl leading-none mb-4" style={{ color: "hsl(var(--bronze))" }}>SP</span>
                  <span className="font-mono-edit text-[10px] uppercase tracking-[0.3em]" style={{ color: "hsl(var(--ink-light))" }}>Praça de atuação</span>
                  <span className="font-display italic text-xs mt-3" style={{ color: "hsl(var(--ink-muted))" }}>Vale do Paraíba · Serra da Mantiqueira · São Paulo</span>
                  <span aria-hidden="true" className="text-base mt-3 transition-transform group-hover:translate-x-1" style={{ color: "hsl(var(--bronze))" }}>→</span>
                </button>
              </DialogTrigger>
              <DialogContent className="bg-[hsl(var(--surface-dark))] border-primary/30 max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="font-display text-2xl text-[hsl(var(--ink-dark))]">Estados de atuação</DialogTitle>
                </DialogHeader>
                <MapaAtuacao />
              </DialogContent>
            </Dialog>

            <div className="p-8 md:p-10 flex flex-col" style={{ backgroundColor: "hsl(var(--surface-light))" }}>
              <div className="h-px w-10 mb-6" style={{ backgroundColor: "hsl(var(--bronze))" }} />
              <span className="font-display text-5xl md:text-6xl leading-none mb-4" style={{ color: "hsl(var(--bronze))" }}>60</span>
              <span className="font-mono-edit text-[10px] uppercase tracking-[0.3em]" style={{ color: "hsl(var(--ink-light))" }}>Dias — prazo médio</span>
              <span className="font-display italic text-xs mt-3" style={{ color: "hsl(var(--ink-muted))" }}>do briefing à entrega executiva</span>
            </div>
          </div>

          <div className="mt-24 flex flex-col items-center text-center">
            <div className="h-px w-16 mb-8 bg-primary" />
            <Editable as="p" id="apc.consol.closing" multiline className="font-display italic text-xl md:text-2xl max-w-2xl leading-relaxed text-primary">
              Cada número aqui é uma decisão tomada no projeto, não na obra.
            </Editable>
          </div>
        </div>
      </section>

      {/* ============================================================
          07 · PROCESSO · DO BRIEFING À ENTREGA
          ============================================================ */}
      <section
        id="etapas"
        className="relative px-6 md:px-16 lg:px-24 py-28 md:py-32 bg-surface/40"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-baseline justify-between mb-12 border-b border-border/60 pb-6">
            <div className="flex items-baseline gap-6">
              <span className="number-marker">07</span>
              <Editable id="apc.etapas.eyebrow" className="eyebrow">Processo · Do briefing à entrega</Editable>
            </div>
            <Editable id="apc.etapas.tag" className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block">
              Seis fases · ~60 dias
            </Editable>
          </div>

          <div className="grid grid-cols-12 gap-8 mb-16">
            <Editable as="h2" id="apc.etapas.title" multiline className="col-span-12 lg:col-span-7 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.0] text-balance">
              Do conceito<br /><em className="text-primary not-italic">à abertura.</em>
            </Editable>
            <Editable id="apc.etapas.intro" multiline as="p" className="col-span-12 lg:col-span-5 lg:pt-4 font-display text-lg text-foreground/70 leading-relaxed">
              Seis fases coordenadas em uma única trilha. Cada decisão tomada na ordem certa — para que o seu ponto abra no prazo, sem surpresa de custo.
            </Editable>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60">
            {[
              { n: "01", t: "Briefing & Diagnóstico do negócio", d: "Entendemos a missão, o cliente ideal e o que o espaço precisa comunicar.", key: true },
              { n: "02", t: "Conceito e identidade do espaço", d: "Partido estético, paleta, materialidade e narrativa visual alinhados à marca.", key: true },
              { n: "03", t: "Concepção 3D", d: "Imagens realistas para experimentar o espaço antes de qualquer execução.", key: true },
              { n: "04", t: "EVF — Viabilidade Financeira", d: "Orçamento por quantitativos reais — decisão consciente de escopo.", optional: true },
              { n: "05", t: "Projeto Executivo Comercial", d: "Marcenaria, iluminação, revestimentos, fluxo e pranchas executivas.", key: true },
              { n: "06", t: "Acompanhamento de obra", d: "Visitas técnicas, ajustes finos e curadoria de fornecedores.", optional: true },
            ].map((phase, i) => (
              <article
                key={i}
                className={cn(
                  "bg-background p-7 md:p-8 flex flex-col group transition-colors relative",
                  phase.key ? "border-l-2 border-primary/70 hover:bg-surface/80" : "hover:bg-surface/60"
                )}
              >
                <div className="flex items-baseline justify-between mb-5 min-h-[1.5rem]">
                  {phase.key ? (
                    <Editable id={`apc.etapas.${i}.n`} className="font-display italic text-3xl md:text-4xl text-primary leading-none">{phase.n}</Editable>
                  ) : (
                    <Editable id={`apc.etapas.${i}.n`} className="font-mono text-[11px] tracking-[0.2em] text-primary">{phase.n}</Editable>
                  )}
                  {phase.optional && <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground/70">Opcional</span>}
                  {phase.key && <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-primary/80">Decisão-chave</span>}
                </div>
                <Editable as="h4" id={`apc.etapas.${i}.t`} className="font-display text-lg md:text-xl text-foreground leading-snug mb-3">{phase.t}</Editable>
                <Editable as="p" id={`apc.etapas.${i}.d`} multiline className="text-sm text-foreground/65 leading-relaxed">{phase.d}</Editable>
              </article>
            ))}
          </div>

          <div className="mt-20 md:mt-24 pt-10 border-t border-border/60 max-w-3xl mx-auto text-center">
            <Editable id="apc.etapas.fech.eyebrow" className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-5 inline-block">
              Assinatura do método
            </Editable>
            <Editable as="p" id="apc.etapas.fech.frase" multiline className="font-display italic text-xl md:text-2xl text-foreground/80 leading-snug text-balance mb-6">
              Cada fase tem critério de avanço.
              <br />
              <em className="not-italic text-primary">A NL conduz — você aprova com segurança.</em>
            </Editable>
            <Editable as="p" id="apc.etapas.nota" multiline className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70 leading-relaxed">
              Cronograma estimado · Pode variar conforme escopo, aprovações de terceiros e disponibilidade do cliente.
            </Editable>
          </div>
        </div>
      </section>

      {/* ============================================================
          08 · CASE · BARBEARIA CABALERA
          ============================================================ */}
      <section
        id="case"
        className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-32"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-baseline justify-between mb-16 pb-4 border-b border-border/60">
            <div className="flex items-baseline gap-6">
              <span className="number-marker">08</span>
              <Editable id="apc.case.eyebrow" className="eyebrow">Projeto referência</Editable>
            </div>
            <Editable id="apc.case.tag" className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block">
              Caso real · Resultado documentado
            </Editable>
          </div>

          <div className="grid grid-cols-12 min-h-[80vh]">
            <div className="col-span-12 lg:col-span-7 relative min-h-[60vh] lg:min-h-[80vh]">
              <img
                src={IMG_CASE}
                alt="Barbearia Cabalera · NL Arquitetos"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                width={1920}
                height={1280}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/40 lg:to-background" />
              <div className="absolute bottom-8 left-8 z-10 flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Case · 01</span>
                <span className="h-px w-8 bg-primary/60" />
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 relative px-8 md:px-12 lg:px-16 py-16 lg:py-24 flex flex-col justify-center bg-background">
              <div className="max-w-md">
                <Editable as="h2" id="apc.case.title" multiline className="font-display text-4xl md:text-5xl leading-[0.95] mb-2">
                  Barbearia <em className="text-primary not-italic">Cabalera.</em>
                </Editable>
                <Editable id="apc.case.location" className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-8">
                  Interiores Comercial · NL Arquitetos
                </Editable>
                <div className="gold-line w-16 mb-8" />
                <Editable id="apc.case.body" multiline as="p" className="font-display text-base md:text-lg leading-relaxed text-foreground/80 mb-10">
                  O desafio era criar um ambiente que não fosse apenas uma barbearia, mas um refúgio urbano de experiência. A materialidade bruta, a iluminação cênica e a biofilia foram os pilares para construir um espaço memorável — que atrai, retém e faz o cliente voltar.
                </Editable>
                <ul className="space-y-3 font-display text-foreground/80 mb-10">
                  {[
                    "Conceito e identidade visual do espaço",
                    "Fluxo de atendimento e setorização",
                    "Marcenaria técnica e iluminação cênica",
                    "Materialidade bruta com biofilia integrada",
                    "Projeto executivo completo",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-baseline border-b border-border/40 pb-3">
                      <span className="font-mono text-[10px] text-primary/70">0{i + 1}</span>
                      <Editable id={`apc.case.item.${i}`} className="flex-1 text-sm md:text-base">{item}</Editable>
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-3 gap-3 sm:gap-6 border-t border-border/60 pt-6">
                  {[
                    { v: "60", l: "Dias de projeto" },
                    { v: "04", l: "Disciplinas" },
                    { v: "0", l: "Retrabalho" },
                  ].map((stat, i) => (
                    <div key={i}>
                      <Editable id={`apc.case.s${i + 1}.value`} className="font-display text-3xl md:text-4xl text-primary block leading-none mb-2">{stat.v}</Editable>
                      <Editable id={`apc.case.s${i + 1}.label`} className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">{stat.l}</Editable>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          09 · ALÉM DO PROJETO
          ============================================================ */}
      <section
        id="alem"
        className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-32 overflow-hidden"
        style={{ backgroundColor: "hsl(var(--surface-deep))", color: "hsl(var(--ink-dark))" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, hsl(var(--surface-dark) / 0.85) 0%, hsl(var(--surface-dark) / 0.95) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex items-baseline gap-6 mb-16 pb-4 border-b" style={{ borderColor: "hsl(var(--bronze) / 0.35)" }}>
            <span className="font-mono-edit text-[10px] tracking-[0.3em]" style={{ color: "hsl(var(--bronze))" }}>09</span>
            <Editable id="apc.alem.eyebrow" className="font-mono-edit text-[10px] uppercase tracking-[0.3em]" style={{ color: "hsl(var(--ink-muted))" }}>
              Além do projeto
            </Editable>
          </div>

          <div className="max-w-4xl mb-20">
            <Editable as="h2" id="apc.alem.title" multiline className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.0] text-balance mb-8" style={{ color: "hsl(var(--ink-dark))" }}>
              O projeto termina. O comprometimento, <em className="not-italic" style={{ color: "hsl(var(--bronze-glow))" }}>não.</em>
            </Editable>
            <div className="h-px w-10 mb-8" style={{ backgroundColor: "hsl(var(--bronze) / 0.45)" }} />
            <Editable as="p" id="apc.alem.body" multiline className="font-display italic text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: "hsl(var(--ink-dark) / 0.78)" }}>
              O espaço continua vivo depois da abertura — e nós continuamos por perto, garantindo que cada decisão tomada no projeto se traduza fielmente no que o seu cliente experimenta.
            </Editable>
          </div>

          <div className="h-px w-full mb-16" style={{ backgroundColor: "hsl(var(--bronze) / 0.12)" }} aria-hidden="true" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-x-8 lg:gap-x-12">
            {[
              { id: "entrega", step: "01", t: "Entrega", b: "A equipe de obra recebe o projeto com clareza absoluta — nada fica aberto à interpretação." },
              { id: "presenca", step: "02", t: "Presença em campo", b: "Estamos no canteiro nos momentos decisivos — quando uma escolha errada ainda pode ser corrigida no papel, não no cimento." },
              { id: "indicacao", step: "03", t: "Indicação", b: "Você acessa uma rede de fornecedores já provada em obras reais — sem ensaios à sua custa." },
              { id: "suporte", step: "04", t: "Continuidade", b: "Após a entrega, qualquer dúvida do espaço passa por nós antes de se tornar um problema." },
            ].map((s) => (
              <div key={s.id} className="relative">
                <div className="w-2 h-2 rounded-full mb-5" style={{ backgroundColor: "hsl(var(--bronze))" }} aria-hidden="true" />
                <Editable id={`apc.alem.${s.id}.step`} className="font-mono-edit text-[10px] uppercase tracking-[0.3em] block mb-4" style={{ color: "hsl(var(--ink-muted))" }}>{s.step}</Editable>
                <Editable as="h3" id={`apc.alem.${s.id}.t`} className="font-display text-2xl md:text-3xl mb-3" style={{ color: "hsl(var(--ink-dark))" }}>{s.t}</Editable>
                <Editable as="p" id={`apc.alem.${s.id}.b`} multiline className="font-mono-edit text-[11px] leading-relaxed" style={{ color: "hsl(var(--ink-muted))" }}>{s.b}</Editable>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          10 · PORTFÓLIO
          ============================================================ */}
      <section
        id="portfolio"
        className="relative min-h-screen px-6 md:px-16 lg:px-24 py-28 flex flex-col justify-center"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-baseline justify-between mb-16 pb-4 border-b border-border/60">
            <div className="flex items-baseline gap-6">
              <span className="number-marker">10</span>
              <Editable id="apc.port.eyebrow" className="eyebrow">Portfólio comercial</Editable>
            </div>
          </div>

          <Editable as="h2" id="apc.port.title" multiline className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-16 text-balance max-w-4xl">
            Espaços que <em className="text-primary">trabalham pelo negócio.</em>
          </Editable>

          {/* Âncora editorial */}
          <article className="group mb-24">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-8 items-end">
              <div className="md:col-span-8">
                <Dialog>
                  <DialogTrigger asChild>
                    <button type="button" className="relative aspect-[16/10] overflow-hidden mb-6 bg-surface-elevated w-full block cursor-zoom-in focus:outline-none">
                      <img src={IMG_PORT_01} alt="Espaço comercial · NL Arquitetos" className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]" loading="lazy" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl w-[95vw] p-0 bg-background border-border overflow-hidden">
                    <DialogHeader className="sr-only"><DialogTitle>Espaço comercial · NL Arquitetos</DialogTitle></DialogHeader>
                    <img src={IMG_PORT_01} alt="Espaço comercial" className="w-full h-auto max-h-[80vh] object-contain" />
                  </DialogContent>
                </Dialog>
              </div>
              <div className="md:col-span-4 md:pb-4">
                <Editable as="h3" id="apc.port.01.name" className="font-display text-4xl md:text-5xl leading-[1.02] text-foreground mb-6 group-hover:text-primary transition-colors">Identidade e atmosfera</Editable>
                <Editable id="apc.port.01.typology" className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80 block">Interiores Comercial</Editable>
                <Editable id="apc.port.01.place" className="font-display italic text-base text-muted-foreground block">São José dos Campos · SP</Editable>
              </div>
            </div>
          </article>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-24">
            {[
              { img: IMG_PORT_02, name: "Iluminação cênica", type: "Interiores Comercial", place: "São José dos Campos · SP", id: "02" },
              { img: IMG_PORT_03, name: "Materialidade bruta", type: "Interiores Comercial", place: "Vale do Paraíba · SP", id: "03" },
              { img: IMG_PORT_04, name: "Precisão e identidade", type: "Interiores Comercial", place: "São José dos Campos · SP", id: "04" },
            ].map((proj, idx) => (
              <article key={proj.id} className="group">
                <Dialog>
                  <DialogTrigger asChild>
                    <button type="button" className={`relative ${idx % 2 === 0 ? "aspect-[4/5]" : "aspect-[3/4]"} overflow-hidden mb-6 bg-surface-elevated w-full block cursor-zoom-in focus:outline-none`}>
                      <img src={proj.img} alt={proj.name} className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.06]" loading="lazy" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl w-[95vw] p-0 bg-background border-border overflow-hidden">
                    <DialogHeader className="sr-only"><DialogTitle>{proj.name}</DialogTitle></DialogHeader>
                    <img src={proj.img} alt={proj.name} className="w-full h-auto max-h-[80vh] object-contain" />
                  </DialogContent>
                </Dialog>
                <Editable as="h3" id={`apc.port.${proj.id}.name`} className="font-display text-3xl md:text-4xl leading-[1.05] text-foreground mb-4 group-hover:text-primary transition-colors">{proj.name}</Editable>
                <Editable id={`apc.port.${proj.id}.type`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80 block">{proj.type}</Editable>
                <Editable id={`apc.port.${proj.id}.place`} className="font-display italic text-base text-muted-foreground block">{proj.place}</Editable>
              </article>
            ))}
          </div>

          <div className="mt-24 pt-12 border-t border-border/40 flex justify-center">
            <Editable as="p" id="apc.port.fechamento" className="font-display italic text-2xl md:text-3xl text-foreground/80 text-center max-w-2xl leading-snug text-balance">
              Cada projeto começa com uma conversa sobre o negócio — e termina com um espaço que trabalha por ele.
            </Editable>
          </div>
        </div>
      </section>

      {/* ============================================================
          11 · FECHAMENTO
          ============================================================ */}
      <section
        id="fechamento"
        className="relative min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 py-32"
        style={{ backgroundColor: "hsl(var(--surface-dark))", color: "hsl(var(--ink-dark))" }}
      >
        <div className="relative z-10 max-w-5xl mx-auto text-center w-full">
          <div className="flex justify-center mb-4">
            <Editable id="apc.fech.eyebrow" className="label-meta" style={{ color: "hsl(var(--bronze))" }}>
              Próximo passo
            </Editable>
          </div>

          <div className="flex justify-center mb-10 md:mb-12">
            <span className="h-px w-16" style={{ backgroundColor: "hsl(var(--bronze) / 0.7)" }} />
          </div>

          <Editable as="h2" id="apc.fech.title" multiline className="display-section mb-10 md:mb-12" style={{ color: "hsl(var(--ink-dark))" }}>
            Em até 48 horas após nossa conversa,
            <br />
            a proposta chega às <em className="not-italic" style={{ color: "hsl(var(--bronze-glow))" }}>suas mãos.</em>
          </Editable>

          <Editable as="p" id="apc.fech.body" multiline className="lede-editorial mb-20 md:mb-24 max-w-2xl mx-auto" style={{ color: "hsl(var(--ink-dark) / 0.6)" }}>
            Uma Carta Proposta feita para o seu negócio — com o escopo, o método e o investimento formalizados. Pronta para ser lida com a mesma calma com que foi escrita.
          </Editable>

          <div className="w-full mb-10 md:mb-12">
            <span className="block h-px w-full" style={{ backgroundColor: "hsl(var(--ink-dark) / 0.12)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-20 md:mb-24 max-w-3xl mx-auto">
            {[
              { label: "WhatsApp", value: "(12) 99623-5559", id: "whatsapp" },
              { label: "E-mail", value: "contato.nlarquitetos@gmail.com", id: "email" },
              { label: "Instagram", value: "@nlarquitetos", id: "instagram" },
            ].map((c) => (
              <div key={c.id} className="flex flex-col items-center gap-3">
                <Editable id={`apc.fech.contact.${c.id}.label`} className="label-meta" style={{ color: "hsl(var(--bronze))" }}>{c.label}</Editable>
                <Editable id={`apc.fech.contact.${c.id}`} className="font-display italic text-base md:text-lg" style={{ color: "hsl(var(--ink-dark) / 0.85)" }}>{c.value}</Editable>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[hsl(var(--ink-dark))]/10">
            <Editable id="apc.fech.rodape.quote" className="font-display italic text-sm md:text-base text-[hsl(var(--ink-dark))]/45">
              O espaço como decisão estratégica.
            </Editable>
            <div className="flex items-center gap-4">
              <Editable id="apc.fech.logo" className="label-meta leading-none text-[hsl(var(--ink-dark))]/45">NL</Editable>
              <span className="h-4 w-px bg-[hsl(var(--ink-dark))]/20" />
              <Editable id="apc.fech.rodape" className="label-meta text-[hsl(var(--ink-dark))]/45">NL Arquitetos · 2026</Editable>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ApresentacaoComercial;
