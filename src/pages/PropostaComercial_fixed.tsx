import { useState, useRef, useLayoutEffect, useEffect } from "react";
import bandMaterial from "@/assets/band-material.jpg";
import bandBlueprint from "@/assets/band-blueprint.jpg";
import bandIntermezzo02 from "@/assets/band-intermezzo-02.jpg";
import Editable from "@/components/Editable";
import SectionNavProposta from "@/components/SectionNavProposta";
import PdfExportButtonProposta from "@/components/PdfExportButtonProposta";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import scopeMaterials from "@/assets/scope-materials.jpg";
import propostaCapa from "@/assets/proposta/capa.jpg";
import propostaLeandro from "@/assets/proposta/leandro.jpg";
import propostaNeandro from "@/assets/proposta/neandro.jpg";
import propostaCaseCasa from "@/assets/proposta/casa-jf.png";
import propostaInteriores from "@/assets/proposta/tghdfjg.jpg";
import propostaPortFachada from "@/assets/proposta/chale-juruva.png";
import propostaPortLiving from "@/assets/proposta/nomo-result-2062.jpg";
import propostaPortLazer from "@/assets/proposta/nomo-result-1759.jpg";
import propostaPortSuite from "@/assets/proposta/gemini-m7jp.jpg";
import { usePropostaParams } from "@/hooks/use-proposta-params";

const LOGO_BRANCA = "/logo-branca.png";
const PX = "proposta-com";

const PropostaComercial = () => {
  const params = usePropostaParams();

  useEffect(() => {
    if (params.nome !== '[Nome do Cliente]') {
      document.title = `Proposta NL Arquitetos · ${params.nome}`;
    }
  }, [params.nome]);

  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <SectionNavProposta />

      {/* 01 · CAPA */}
      <section id="capa" className="relative min-h-screen flex flex-col justify-end px-6 md:px-16 lg:px-24 py-20">
        <img src={propostaCapa} alt="NL Arquitetos · proposta comercial" className="absolute inset-0 w-full h-full object-cover opacity-90 contrast-110 saturate-125" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/95" />
        <div className="absolute inset-0 vignette opacity-60" />
        <div className="relative z-10 max-w-4xl fade-up">
          <Editable id={`${PX}.capa.eyebrow`} className="eyebrow mb-8 inline-block">Carta Proposta · Confidencial</Editable>
          <Editable as="h1" id={`${PX}.capa.title`} multiline className="font-display text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.95] text-foreground mb-8 text-balance">
            O espaço que
            <br />
            <em className="text-primary not-italic font-light">trabalha</em> por você.
          </Editable>
          <div className="gold-line w-32 mb-8" />
          <Editable id={`${PX}.capa.subtitle`} multiline className="font-display italic text-xl md:text-2xl text-foreground/70 max-w-xl block">
            Projeto de interiores comercial com identidade estratégica — para que cada centímetro do seu espaço atraia, retenha e converta o cliente certo.
          </Editable>
          <div className="mt-12 flex items-center gap-4 text-muted-foreground">
            <span className="h-px w-12 bg-primary/40" />
            <Editable id={`${PX}.capa.validity`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80">
              Validade · {params.validade}
            </Editable>
          </div>
        </div>
        <div className="relative z-10 mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4 text-muted-foreground">
          <div className="flex items-center gap-3 md:gap-4 flex-wrap">
            <Editable id={`${PX}.capa.client`} className="font-mono text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase text-primary/80 break-words">
              Cliente · {params.nome}
            </Editable>
          </div>
          <Editable id={`${PX}.capa.date`} className="font-mono text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase break-words">São José dos Campos · 2026</Editable>
        </div>
      </section>

      {/* 02 · MANIFESTO */}
      <section id="manifesto" className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-32">
        <div className="grid grid-cols-12 gap-8 w-full max-w-7xl mx-auto">
          <div className="col-span-12 md:col-span-3">
            <span className="number-marker block mb-2">02</span>
            <Editable id={`${PX}.manifesto.eyebrow`} className="eyebrow">Manifesto</Editable>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Editable as="h2" id={`${PX}.manifesto.title`} multiline className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-16 text-balance">
              Antes de desenhar, <em className="text-primary not-italic">entendemos o negócio.</em>
              <br />
              Antes de construir, <em className="text-primary not-italic">decidimos.</em>
            </Editable>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
              <Editable id={`${PX}.manifesto.p1`} multiline as="p" className="font-display text-lg md:text-xl leading-relaxed text-foreground/80">
                O espaço comercial não é decoração. É o primeiro vendedor do seu negócio. Ele comunica antes que qualquer funcionário fale, justifica o preço antes que você apresente o serviço, e decide se o cliente volta — antes mesmo de ele sair.
              </Editable>
              <Editable id={`${PX}.manifesto.p2`} multiline as="p" className="font-display text-lg md:text-xl leading-relaxed text-foreground/80">
                Cada decisão tomada em projeto evita uma decisão custosa na obra. Ponto alugado parado é custo. Reforma mal planejada é retrabalho. A NL elimina esse risco antes de o primeiro parafuso entrar na parede.
              </Editable>
            </div>
            <div className="mt-20 pl-8 border-l border-primary/40 max-w-2xl">
              <Editable id={`${PX}.manifesto.quote`} multiline as="p" className="font-display italic text-2xl md:text-3xl text-primary/90 leading-snug">
                "Seu cliente decide em três segundos se entra ou não. O espaço decide por ele."
              </Editable>
            </div>
          </div>
        </div>
      </section>

      {/* 03 · APRESENTAÇÃO */}
      <section id="apresentacao" className="relative min-h-screen px-6 md:px-16 lg:px-24 py-16 lg:py-20 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-baseline justify-between mb-8 lg:mb-10 border-b border-border/60 pb-4">
            <div className="flex items-baseline gap-6">
              <span className="number-marker">03</span>
              <Editable id={`${PX}.apresentacao.eyebrow`} className="eyebrow">Quem conduz</Editable>
            </div>
            <Editable id={`${PX}.apresentacao.tag`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block">Dois arquitetos · Um método</Editable>
          </div>
          <div className="grid grid-cols-12 gap-x-8 gap-y-10 items-start">
            <div className="col-span-12 lg:col-span-6">
              <Editable as="h2" id={`${PX}.apresentacao.title`} multiline className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.0] text-balance mb-6">
                A NL não é definida por quem assina —<br />
                <em className="text-primary not-italic">é definida pelo processo.</em>
              </Editable>
              <Editable id={`${PX}.apresentacao.body`} multiline as="p" className="font-display text-base lg:text-lg leading-relaxed text-foreground/75 max-w-xl">
                Fundada por Leandro e Neandro, a NL une visão estratégica e disciplina executiva em um único método. Transformamos a identidade do seu negócio em espaço executivo — sem perda de conceito, de qualidade ou de prazo.
              </Editable>
              <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg">
                <Stat number="+50" label="Projetos no portfólio" id="stat1" />
                <Stat number="+5" label="Anos de prática autoral" id="stat2" />
                <Stat number="100%" label="Compatibilizados" id="stat3" />
              </div>
            </div>
            <aside className="col-span-12 lg:col-span-6 lg:pl-10 lg:border-l border-border/60">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <PartnerCard id="leandro" name="Leandro Henrique" role="Co-Fundador · Arquiteto" cau="CAU A252250-0" image={propostaLeandro} />
                <PartnerCard id="neandro" name="Neandro Jacque" role="Co-Fundador · Arquiteto" cau="CAU A264629-3" image={propostaNeandro} />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 04 · DIAGNÓSTICO */}
      <section id="diagnostico" className="relative px-6 md:px-16 lg:px-24 py-28 lg:py-32" style={{ backgroundColor: "#1A1816", color: "#E8E4DF" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-14 lg:mb-20 pb-4 border-b" style={{ borderColor: "rgba(139, 115, 85, 0.35)" }}>
            <div className="flex items-baseline gap-6">
              <span className="font-mono-edit text-[10px] tracking-[0.3em]" style={{ color: "rgba(232, 228, 223, 0.55)" }}>04</span>
              <Editable id={`${PX}.diagnostico.eyebrow`} className="font-mono-edit text-[10px] uppercase tracking-[0.3em]" style={{ color: "#8B7355", fontFamily: '"Courier New", monospace' }}>
                Diagnóstico · Preparado para
              </Editable>
            </div>
            <Editable id={`${PX}.diagnostico.tag`} className="font-mono-edit text-[10px] uppercase tracking-[0.3em] hidden md:block" style={{ color: "rgba(232, 228, 223, 0.55)" }}>
              Resposta · não catálogo
            </Editable>
          </div>
          <div className="grid grid-cols-12 gap-x-12 gap-y-12 items-start">
            <div className="col-span-12 lg:col-span-5">
              <Editable as="h2" id={`${PX}.diagnostico.title`} multiline className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.0] text-balance mb-8" style={{ color: "#E8E4DF" }}>
                Esta proposta foi <em className="not-italic" style={{ color: "#8B7355" }}>construída para o seu negócio.</em>
              </Editable>
              <div className="h-px w-16 mb-8" style={{ backgroundColor: "#8B7355" }} />
              <Editable as="p" id={`${PX}.diagnostico.subtitle`} multiline className="font-display italic text-lg md:text-xl leading-relaxed max-w-md" style={{ color: "rgba(232, 228, 223, 0.78)" }}>
                Cada seção deste documento foi estruturada com base no que você nos contou. O que está aqui não é um catálogo — é uma resposta ao seu contexto específico.
              </Editable>
              <div className="lg:hidden mt-12 h-px w-full" style={{ backgroundColor: "rgba(139, 115, 85, 0.4)" }} />
            </div>
            <div className="col-span-12 lg:col-span-7 lg:pl-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-0">
                {[
                  { id: "cliente", label: "Cliente", value: params.nome },
                  { id: "negocio", label: "Tipo de negócio", value: params.tipo || "[Tipo de negócio]" },
                  { id: "localizacao", label: "Localização", value: `${params.cidade}, ${params.estado}` },
                  { id: "metragem", label: "Metragem estimada", value: `${params.area} m²` },
                  { id: "objetivo", label: "Objetivo", value: params.objetivo },
                  { id: "data", label: "Data", value: params.data },
                ].map((field) => (
                  <div key={field.id} className="py-6 border-b" style={{ borderColor: "rgba(139, 115, 85, 0.35)" }}>
                    <Editable id={`${PX}.diagnostico.field.${field.id}.label`} className="block mb-3 text-[10px] uppercase tracking-[0.3em]" style={{ color: "#8B7355", fontFamily: '"Courier New", monospace' }}>{field.label}</Editable>
                    <Editable id={`${PX}.diagnostico.field.${field.id}.value`} multiline as="p" className="font-display text-xl md:text-2xl leading-snug" style={{ color: "#E8E4DF" }}>{field.value}</Editable>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-20 lg:mt-24 flex flex-col items-center">
            <div className="h-px w-16 mb-8" style={{ backgroundColor: "#8B7355" }} />
            <Editable as="p" id={`${PX}.diagnostico.closing`} multiline className="font-display italic text-lg md:text-xl text-center max-w-2xl leading-relaxed" style={{ color: "#8B7355" }}>
              Nenhum negócio da NL se repete — porque nenhum cliente é igual.
            </Editable>
          </div>
        </div>
      </section>

      {/* 05 · CONCEITO COMO NEGÓCIO — SEÇÃO EXCLUSIVA COMERCIAL */}
      <section id="conceito" className="relative px-6 md:px-16 lg:px-24 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-16 border-b border-border/60 pb-6">
            <div className="flex items-baseline gap-6">
              <span className="number-marker">05</span>
              <Editable id={`${PX}.conceito.eyebrow`} className="eyebrow">Conceito · Estratégia de espaço</Editable>
            </div>
            <Editable id={`${PX}.conceito.tag`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block">O espaço como ferramenta de negócio</Editable>
          </div>
          <div className="grid grid-cols-12 gap-12 items-start">
            <div className="col-span-12 lg:col-span-6">
              <Editable as="h2" id={`${PX}.conceito.title`} multiline className="font-display text-5xl md:text-6xl leading-[1.0] mb-10 text-balance">
                O conceito não é estético —<br />
                <em className="text-primary not-italic">é estratégico.</em>
              </Editable>
              <Editable id={`${PX}.conceito.body`} multiline as="p" className="font-display text-lg leading-relaxed text-foreground/75 mb-10">
                Antes de escolher um revestimento ou uma luminária, a NL entende a missão do negócio. Quem é o cliente ideal? Qual experiência ele precisa ter? O que o espaço precisa comunicar antes que alguém fale uma palavra?
              </Editable>
              <Editable id={`${PX}.conceito.body2`} multiline as="p" className="font-display text-lg leading-relaxed text-foreground/75">
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
                      <Editable as="h3" id={`${PX}.conceito.item${i}.title`} className="font-display text-xl text-foreground leading-tight">{item.title}</Editable>
                    </div>
                    <Editable id={`${PX}.conceito.item${i}.body`} multiline as="p" className="font-display text-foreground/70 leading-relaxed">{item.body}</Editable>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-16 pl-8 border-l border-primary/40 max-w-2xl">
            <Editable id={`${PX}.conceito.quote`} multiline as="p" className="font-display italic text-2xl md:text-3xl text-primary/90 leading-snug">
              "O espaço comercial não é decoração. É o primeiro vendedor do seu negócio."
            </Editable>
          </div>
        </div>
      </section>

      {/* 06 · CASE */}
      <section id="case" className="relative">
        <div className="grid grid-cols-12 min-h-screen">
          <div className="col-span-12 lg:col-span-7 relative min-h-[60vh] lg:min-h-screen">
            <img src={propostaCaseCasa} alt="Case comercial · NL Arquitetos" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={1280} />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/40 lg:to-background" />
            <div className="absolute bottom-8 left-8 z-10 flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Case · 01</span>
              <span className="h-px w-8 bg-primary/60" />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 relative px-8 md:px-16 py-20 lg:py-32 flex flex-col justify-center">
            <div className="max-w-md">
              <span className="number-marker block mb-4">06 · Projeto referência</span>
              <Editable as="h2" id={`${PX}.case.title`} multiline className="font-display text-5xl md:text-6xl leading-[0.95] mb-2">
                Espaço que <em className="text-primary not-italic">trabalha pelo negócio.</em>
              </Editable>
              <Editable id={`${PX}.case.location`} className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-10">
                Projeto comercial · NL Arquitetos
              </Editable>
              <div className="gold-line w-16 mb-8" />
              <Editable id={`${PX}.case.body`} multiline as="p" className="font-display text-base md:text-lg leading-relaxed text-foreground/80 mb-10">
                O desafio era criar um ambiente que comunicasse identidade antes de qualquer palavra. Materialidade, iluminação e fluxo de atendimento foram decididos em projeto — cada detalhe pensado para reter o cliente e justificar o ticket. O resultado é um espaço que atrai, encanta e faz o cliente voltar.
              </Editable>
              <ul className="space-y-3 font-display text-foreground/80 mb-10">
                {[
                  "Conceito e identidade visual do espaço",
                  "Fluxo de atendimento e setorização",
                  "Marcenaria sob medida e detalhamento",
                  "Projeto luminotécnico e atmosfera",
                  "Materialidade alinhada à marca",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-baseline border-b border-border/40 pb-3">
                    <span className="font-mono text-[10px] text-primary/70">0{i + 1}</span>
                    <Editable id={`${PX}.case.item.${i}`} className="flex-1 text-sm md:text-base">{item}</Editable>
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-3 gap-3 sm:gap-6 border-t border-border/60 pt-6">
                <CaseStat id={`${PX}.case.s1`} value="60" label="Dias de projeto" />
                <CaseStat id={`${PX}.case.s2`} value="04" label="Disciplinas" />
                <CaseStat id={`${PX}.case.s3`} value="0" label="Retrabalho" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 · PORTFÓLIO */}
      <section id="portfolio" className="relative px-6 md:px-16 lg:px-24 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-16 border-b border-border/60 pb-6">
            <div className="flex items-baseline gap-6">
              <span className="number-marker">07</span>
              <Editable id={`${PX}.portfolio.eyebrow`} className="eyebrow">Portfólio · Sequência</Editable>
            </div>
            <Editable id={`${PX}.portfolio.tag`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block">Quatro fragmentos · Um método</Editable>
          </div>
          <Editable as="h2" id={`${PX}.portfolio.title`} multiline className="font-display text-5xl md:text-7xl leading-[1.0] mb-20 max-w-4xl text-balance">
            Projetos que <em className="text-primary not-italic">provam</em> o método.
          </Editable>
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <figure className="col-span-12 md:col-span-5 row-span-2 group">
              <a href={propostaPortFachada} target="_blank" rel="noreferrer" className="block overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={propostaPortFachada} alt="Projeto comercial · NL Arquitetos" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" loading="lazy" />
                </div>
              </a>
              <figcaption className="mt-4 flex items-baseline justify-between">
                <Editable id={`${PX}.port.cap1`} className="font-display italic text-foreground/80">Espaço comercial · Identidade e atmosfera</Editable>
                <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">01</span>
              </figcaption>
            </figure>
            <figure className="col-span-12 md:col-span-7 group">
              <a href={propostaPortLiving} target="_blank" rel="noreferrer" className="block overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={propostaPortLiving} alt="Ambiente comercial · NL Arquitetos" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" loading="lazy" />
                </div>
              </a>
              <figcaption className="mt-4 flex items-baseline justify-between">
                <Editable id={`${PX}.port.cap2`} className="font-display italic text-foreground/80">Iluminação cênica · Atmosfera que retém</Editable>
                <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">02</span>
              </figcaption>
            </figure>
            <figure className="col-span-6 md:col-span-3 group">
              <a href={propostaPortLazer} target="_blank" rel="noreferrer" className="block overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={propostaPortLazer} alt="Detalhe comercial · NL Arquitetos" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" loading="lazy" />
                </div>
              </a>
              <figcaption className="mt-4">
                <Editable id={`${PX}.port.cap3`} className="font-display italic text-foreground/80 text-sm">Materialidade · Decisão antes da obra</Editable>
                <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mt-1">03</div>
              </figcaption>
            </figure>
            <figure className="col-span-6 md:col-span-4 group">
              <a href={propostaPortSuite} target="_blank" rel="noreferrer" className="block overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={propostaPortSuite} alt="Detalhe acabamento · NL Arquitetos" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" loading="lazy" />
                </div>
              </a>
              <figcaption className="mt-4">
                <Editable id={`${PX}.port.cap4`} className="font-display italic text-foreground/80 text-sm">Acabamento · Precisão e identidade</Editable>
                <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mt-1">04</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 08 · ETAPAS */}
      <section id="etapas" className="relative px-6 md:px-16 lg:px-24 py-28 bg-surface/40">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-baseline justify-between mb-12 border-b border-border/60 pb-6">
            <div className="flex items-baseline gap-6">
              <span className="number-marker">08</span>
              <Editable id={`${PX}.etapas.eyebrow`} className="eyebrow">Etapas · Do briefing à entrega</Editable>
            </div>
            <Editable id={`${PX}.etapas.tag`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block">Seis fases · ~60 dias</Editable>
          </div>
          <div className="grid grid-cols-12 gap-8 mb-16">
            <Editable as="h2" id={`${PX}.etapas.title`} multiline className="col-span-12 lg:col-span-7 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.0] text-balance">
              Do conceito<br /><em className="text-primary not-italic">à abertura.</em>
            </Editable>
            <Editable id={`${PX}.etapas.intro`} multiline as="p" className="col-span-12 lg:col-span-5 lg:pt-4 font-display text-lg text-foreground/70 leading-relaxed">
              Seis cadernos coordenados em uma única trilha. Cada decisão tomada na ordem certa — para que o seu ponto abra no prazo, sem surpresa de custo.
            </Editable>
          </div>
          <PhaseTimeline
            trackId="com"
            number="01"
            title="Interiores Comercial"
            duration="~60 dias"
            phases={[
              { n: "01", t: "Briefing & Diagnóstico do negócio", d: "Entendemos a missão, o cliente ideal e o que o espaço precisa comunicar." },
              { n: "02", t: "Conceito e identidade do espaço", d: "Partido estético, paleta, materialidade e narrativa visual alinhados à marca." },
              { n: "03", t: "Concepção 3D", d: "Imagens realistas para experimentar o espaço antes de qualquer execução." },
              { n: "04", t: "EVF — Viabilidade Financeira", d: "Orçamento por quantitativos reais — decisão consciente de escopo.", optional: true },
              { n: "05", t: "Projeto Executivo Comercial", d: "Marcenaria, iluminação, revestimentos, fluxo e pranchas executivas." },
              { n: "06", t: "Acompanhamento de obra", d: "Visitas técnicas, ajustes finos e curadoria de fornecedores.", optional: true },
            ]}
          />
        </div>
      </section>

      {/* 09 · ESCOPO */}
      <section id="escopo" className="relative px-6 md:px-16 lg:px-24 py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-24 self-start">
            <span className="number-marker block mb-3">09</span>
            <Editable id={`${PX}.escopo.eyebrow`} className="eyebrow mb-8 inline-block">Escopo técnico · O que entregamos</Editable>
            <Editable as="h2" id={`${PX}.escopo.title`} multiline className="font-display text-5xl md:text-6xl leading-[1.0] mb-10 text-balance">
              Seis cadernos. <em className="text-primary not-italic">Um só método.</em>
            </Editable>
            <Editable id={`${PX}.escopo.body`} multiline as="p" className="font-display text-lg leading-relaxed text-foreground/75 mb-10">
              Documentação técnica completa para uma obra comercial sem improviso — com cada componente identificado, localizado e quantificado antes de qualquer execução.
            </Editable>
            <div className="relative aspect-[4/5] overflow-hidden hidden lg:block">
              <img src={scopeMaterials} alt="Mesa de trabalho com amostras de materiais" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <ScopeTabs />
/* ====== Subcomponents ====== */

const FullBleedBand = ({ src, alt, caption, number, height = "tall", align = "left", objectPosition = "center", imgClassName = "", heightClassName, edgeFadeBottomClassName = "h-32 md:h-48" }: { src: string; alt: string; caption: string; number: string; height?: "short" | "tall"; align?: "left" | "right"; objectPosition?: string; imgClassName?: string; heightClassName?: string; edgeFadeBottomClassName?: string; }) => (
  <section aria-hidden="false" className={`relative w-full ${heightClassName ?? (height === "tall" ? "h-[70vh] md:h-[85vh]" : "h-[55vh] md:h-[65vh]")} overflow-hidden bg-background`}>
    <img src={src} alt={alt} loading="lazy" width={1920} height={1080} className={`absolute inset-0 w-full h-full object-cover ${imgClassName}`} style={{ objectPosition }} />
    <div className="absolute inset-x-0 top-0 h-24 md:h-40 pointer-events-none" style={{ background: "var(--band-fade-edge)" }} />
    <div className={`absolute inset-x-0 bottom-0 ${edgeFadeBottomClassName} pointer-events-none`} style={{ background: "var(--band-fade-edge)", transform: "scaleY(-1)" }} />
    <div className="absolute inset-x-0 bottom-0 h-1/2 md:hidden pointer-events-none" style={{ background: "var(--band-scrim-strong)" }} />
    <div className={`hidden md:block absolute inset-y-0 ${align === "left" ? "left-0 right-1/2" : "right-0 left-1/2"} pointer-events-none`} style={{ background: align === "left" ? "var(--band-scrim-side-left)" : "var(--band-scrim-side-right)" }} />
    <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 flex items-end pb-10 md:pb-20">
      <div className={`max-w-xs md:max-w-md ${align === "right" ? "md:ml-auto md:text-right" : ""}`}>
        <div className={`flex items-center gap-3 mb-3 md:mb-4 ${align === "right" ? "md:justify-end" : ""}`}>
          <span className="h-px w-8 md:w-10 bg-primary/60" />
          <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-primary/80">{number}</span>
        </div>
        <p className="font-display italic text-lg md:text-2xl text-foreground leading-snug text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">{caption}</p>
      </div>
    </div>
  </section>
);

const Stat = ({ number, label, sublabel, id }: { number: string; label: string; sublabel?: string; id: string; }) => (
  <div>
    <Editable id={`proposta-arq.stat.${id}.num`} className="font-display text-3xl md:text-4xl text-primary block mb-1">{number}</Editable>
    <Editable id={`proposta-arq.stat.${id}.lbl`} className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground leading-tight block">{label}</Editable>
    {sublabel && <Editable id={`proposta-arq.stat.${id}.sublbl`} className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/70 leading-tight block mt-1">{sublabel}</Editable>}
  </div>
);

const PartnerCard = ({ id, name, role, cau, image }: { id: string; name: string; role: string; cau: string; image?: string; }) => (
  <div className="group">
    {image && (
      <div className="relative aspect-[3/4] overflow-hidden bg-surface mb-4">
        <img src={image} alt={`${name} · NL Arquitetos`} className="absolute inset-0 w-full h-full object-cover grayscale-[15%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]" loading="lazy" />
      </div>
    )}
    <div className="flex items-baseline gap-2 mb-1">
      <span className="font-mono text-xs text-primary/70">→</span>
      <Editable as="h3" id={`proposta-arq.p.${id}.name`} className="font-display text-xl md:text-2xl text-foreground leading-tight">{name}</Editable>
    </div>
    <div className="pl-5 space-y-0.5">
      <Editable id={`proposta-arq.p.${id}.role`} className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block">{role}</Editable>
      <Editable id={`proposta-arq.p.${id}.cau`} className="font-mono text-[9px] tracking-[0.2em] text-primary/60 block">{cau}</Editable>
    </div>
  </div>
);

const CaseStat = ({ id, value, label }: { id: string; value: string; label: string }) => (
  <div>
    <Editable id={`${id}.v`} className="font-display text-3xl text-primary block mb-1">{value}</Editable>
    <Editable id={`${id}.l`} className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground leading-tight block">{label}</Editable>
  </div>
);

const Contact = ({ id, label, value }: { id: string; label: string; value: string }) => {
  const valueRef = useRef<HTMLDivElement | null>(null);
  const [breakMode, setBreakMode] = useState<"normal" | "words" | "all">("normal");
  useLayoutEffect(() => {
    const el = valueRef.current;
    if (!el) return;
    const measure = () => {
      el.style.wordBreak = "normal";
      el.style.overflowWrap = "normal";
      if (el.scrollWidth <= el.clientWidth + 1) { setBreakMode("normal"); return; }
      el.style.overflowWrap = "anywhere";
      el.style.wordBreak = "normal";
      if (el.scrollWidth <= el.clientWidth + 1) { setBreakMode("words"); return; }
      setBreakMode("all");
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => { ro.disconnect(); window.removeEventListener("resize", measure); };
  }, [value]);
  const breakClass = breakMode === "all" ? "break-all" : breakMode === "words" ? "break-words [overflow-wrap:anywhere]" : "";
  return (
    <div className="min-w-0">
      <Editable id={`${id}.lbl`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/70 block mb-2">{label}</Editable>
      <div ref={valueRef} className={`block ${breakClass}`}>
        <Editable id={`${id}.val`} className="font-display text-base md:text-lg text-foreground/90 block">{value}</Editable>
      </div>
    </div>
  );
};

const BenefitCard = ({ t, d, idx, impact }: { t: string; d: string; idx: number; impact?: string }) => (
  <div className="bg-background p-8 md:p-10 group hover:bg-surface/60 transition-colors">
    {impact && (
      <Editable id={`proposta-arq.benefit.${idx}.impact`} className="font-display block leading-none mb-4">
        <span style={{ color: "#8B7355", fontSize: "clamp(2.5rem, 3.6vw, 3.5rem)" }}>{impact}</span>
      </Editable>
    )}
    <div className="gold-line w-8 mb-6 group-hover:w-16 transition-all duration-700" />
    <Editable as="h3" id={`proposta-arq.benefit.${idx}.t`} className="font-display text-2xl md:text-3xl text-foreground mb-4 leading-tight">{t}</Editable>
    <Editable id={`proposta-arq.benefit.${idx}.d`} multiline as="p" className="font-display text-foreground/70 leading-relaxed">{d}</Editable>
  </div>
);

const PaymentTier = ({ id, label, value, sub }: { id: string; label: string; value: string; sub: string }) => (
  <div className="px-8 py-8 text-center">
    <Editable id={`${id}.lbl`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/70 block mb-3">{label}</Editable>
    <Editable id={`${id}.val`} className="font-display text-4xl md:text-5xl text-foreground block mb-2">{value}</Editable>
    <Editable id={`${id}.sub`} className="font-display italic text-sm text-foreground/60 block">{sub}</Editable>
  </div>
);

const DifferentialItem = ({ r, t, d }: { r: string; t: string; d: string }) => (
  <div className="group">
    <div className="flex items-baseline gap-6 mb-4">
      <span className="font-display text-6xl md:text-7xl text-primary/20 leading-none shrink-0 select-none">{r}</span>
      <span className="h-px flex-1 bg-border group-hover:bg-primary/60 transition-colors duration-700" />
    </div>
    <Editable as="h3" id={`proposta-arq.diff.${r}.t`} className="font-display text-3xl md:text-4xl text-foreground mb-4">{t}</Editable>
    <Editable id={`proposta-arq.diff.${r}.d`} multiline as="p" className="font-display text-foreground/70 leading-relaxed max-w-md">{d}</Editable>
  </div>
);

const NextStep = ({ n, timing, t, d, index }: { n: string; timing: string; t: string; d: string; index: number; }) => {
  const isLeft = index % 2 === 0;
  return (
    <div className="relative md:grid md:grid-cols-2 md:gap-16 group">
      <div className="absolute left-[28px] md:left-1/2 md:-translate-x-1/2 top-2 z-10">
        <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-background transition-all duration-500 group-hover:scale-125" />
      </div>
      <div className={`pl-20 md:pl-0 ${isLeft ? "md:pr-16 md:text-right md:col-start-1" : "md:pl-16 md:col-start-2"}`}>
        <span className="font-display text-7xl md:text-8xl leading-none block mb-3 select-none" style={{ WebkitTextStroke: "1px hsl(var(--primary) / 0.5)", color: "transparent" }}>{n}</span>
        <span className={`font-mono text-[10px] uppercase tracking-[0.3em] text-primary inline-flex items-center gap-2 mb-4 ${isLeft ? "md:flex-row-reverse" : ""}`}>
          <span className="w-6 h-px bg-primary/60" />{timing}
        </span>
        <Editable as="h3" id={`proposta-arq.next.${n}.t`} className="font-display text-3xl md:text-4xl text-foreground mb-3 leading-tight block">{t}</Editable>
        <Editable id={`proposta-arq.next.${n}.d`} multiline as="p" className="font-display text-foreground/70 leading-relaxed text-lg">{d}</Editable>
      </div>
    </div>
  );
};

const Condition = ({ id, label, value }: { id: string; label: string; value: string }) => (
  <div className="min-w-0">
    <Editable id={`${id}.lbl`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/70 block mb-2">{label}</Editable>
    <Editable id={`${id}.val`} multiline as="p" className="font-display text-foreground/80 leading-relaxed break-words">{value}</Editable>
  </div>
);

const PhaseTimeline = ({ trackId, number, title, duration, phases }: { trackId: string; number: string; title: string; duration: string; phases: { n: string; t: string; d: string; optional?: boolean }[]; }) => (
  <div className="group/timeline">
    <div className="flex flex-wrap items-end justify-between gap-3 mb-10 border-b border-primary/30 pb-5">
      <div className="flex items-baseline gap-3 md:gap-5 flex-wrap">
        <Editable id={`${trackId}.num`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">{`Trilha ${number}`}</Editable>
        <Editable as="h3" id={`${trackId}.title`} className="font-display text-2xl md:text-4xl text-foreground leading-tight">{title}</Editable>
      </div>
      <Editable id={`${trackId}.dur`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block">{duration}</Editable>
    </div>
    <div className="relative">
      <div className="absolute left-0 right-0 top-[26px] h-px bg-border hidden md:block" aria-hidden />
      <div className="absolute left-0 top-[26px] h-px bg-primary/40 transition-all duration-700 group-hover/timeline:bg-primary hidden md:block" style={{ right: `${100 / phases.length / 2}%` }} aria-hidden />
      <div className="absolute left-[26px] top-0 bottom-0 w-px bg-border md:hidden" aria-hidden />
      <ol className="relative grid gap-8 md:gap-6 grid-cols-1" style={{ gridTemplateColumns: `repeat(var(--phase-cols, 1), minmax(0, 1fr))` }} ref={(el) => {
        if (el) {
          const update = () => el.style.setProperty('--phase-cols', window.innerWidth >= 768 ? String(phases.length) : '1');
          update();
          window.addEventListener('resize', update);
        }
      }}>
        {phases.map((p, i) => (
          <li key={i} className="relative flex md:flex-col items-start gap-4 md:gap-0 group/step">
            <div className={`relative z-10 flex items-center justify-center w-[52px] h-[52px] shrink-0 rounded-full bg-background md:mb-5 transition-all duration-500 group-hover/step:scale-110 ${p.optional ? "border border-dashed border-primary/40 group-hover/step:border-primary group-hover/step:bg-background" : "border border-primary/40 group-hover/step:bg-primary group-hover/step:border-primary"}`}>
              <Editable id={`${trackId}.${i}.n`} className={`font-mono text-[11px] tracking-[0.15em] text-primary transition-colors ${p.optional ? "" : "group-hover/step:text-primary-foreground"}`}>{p.n}</Editable>
            </div>
            <div className="flex-1 min-w-0 md:mt-0">
              {p.optional && <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-primary/70 mb-1 block">Opcional</span>}
              <Editable as="h4" id={`${trackId}.${i}.t`} className="font-display text-base md:text-lg text-foreground leading-snug mb-2 md:mt-2 pr-2">{p.t}</Editable>
              <Editable id={`${trackId}.${i}.d`} multiline as="p" className="font-display italic text-[13px] text-foreground/60 leading-relaxed pr-3">{p.d}</Editable>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </div>
);

type ScopeBloco = { id: string; num: string; title: string; note?: string; description?: string; items?: string[]; wide?: boolean; };

const SCOPE_ARQ: ScopeBloco[] = [
  { id: "caderno-geral", num: "I", title: "Caderno Geral", items: ["Prancha de índice", "Planta de situação, locação e cobertura", "Planta de layout", "Plantas construtivas", "Planta de paginação de piso", "Planta de forro", "Projeto luminotécnico"] },
  { id: "mapas-instalacoes", num: "II", title: "Mapas de Instalações", note: "em parceria com engenheiros especializados", items: ["Instalações elétricas", "Instalações hidráulicas", "Ar-condicionado", "Pontos de gás", "Revestimentos"] },
  { id: "detalhes-construtivos", num: "III", title: "Caderno de Detalhes Construtivos", items: ["Detalhamentos gerais", "Representação gráfica por ambiente", "Portas e esquadrias", "Marmoraria", "Marcenaria", "Porcelanataria"] },
  { id: "memorial", num: "IV", title: "Memorial Descritivo", items: ["Componentes construtivos identificados", "Localizados em planta", "Quantificados por ambiente", "Base para orçamento de obra sem improviso"] },
];

const SCOPE_INT: ScopeBloco[] = [
  { id: "caderno-geral-int", num: "I", title: "Caderno Geral", wide: true, items: ["Capa", "Imagens aprovadas", "Quadros quantitativos e especificações", "Planta baixa de layout", "Planta baixa demolir / construir", "Planta baixa construtiva", "Paginação de piso", "Mapa de revestimentos", "Planta de forro", "Luminotécnico", "Instalações elétricas, hidráulicas e ar-condicionado  *"] },
  { id: "detalhes-int", num: "II", title: "Caderno de Detalhes Construtivos", description: "Graficação de todos os detalhes necessários para execução conforme complexidade do projeto." },
  { id: "ambientes-int", num: "III", title: "Caderno de Ambientes", description: "Especificações completas por ambiente com localizações de vistas e siglas de materiais." },
  { id: "esquadrias-int", num: "IV", title: "Caderno de Esquadrias", description: "Especificação e localização de todas as esquadrias novas com detalhamento para fabricação." },
  { id: "marmoraria-int", num: "V", title: "Caderno de Marmoraria", description: "Bancadas, soleiras, bordas, nichos e elementos em mármore ou pedra natural." },
  { id: "porcelanataria-int", num: "VI", title: "Caderno de Porcelanataria", description: "Paginação, perfis, fixação e intervenções em revestimentos cerâmicos por ambiente." },
  { id: "marcenaria-int", num: "VII", title: "Caderno de Marcenaria", wide: false, description: "Detalhamento completo de todo mobiliário fabricado sob medida." },
];

const ScopeBlocos = ({ data, trackId }: { data: ScopeBloco[]; trackId: string }) => {
  const hasFootnote = data.some((b) => b.items?.some((i) => i.includes("*")) || (b.description?.includes("*")));
  return (
    <div>
      <div className="grid grid-cols-12 gap-px bg-border border border-border">
        {data.map((bloco) => (
          <article key={bloco.id} className={cn("bg-background p-7 md:p-8 flex flex-col col-span-12", bloco.wide ? "md:col-span-12" : "md:col-span-6")}>
            <div className="flex items-baseline gap-3 mb-5">
              <span className="font-display italic text-2xl text-primary/60">{bloco.num}</span>
              <Editable as="h4" id={`proposta-arq.scope.${trackId}.${bloco.id}.title`} className="font-display text-xl md:text-[1.4rem] leading-tight text-foreground">{bloco.title}</Editable>
            </div>
            {bloco.note && <Editable id={`proposta-arq.scope.${trackId}.${bloco.id}.note`} className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary/80 mb-4 -mt-1">{bloco.note}</Editable>}
            {bloco.description && <Editable as="p" id={`proposta-arq.scope.${trackId}.${bloco.id}.description`} className="font-display italic text-[0.95rem] text-foreground/75 leading-relaxed mt-1">{bloco.description}</Editable>}
            {bloco.items && (
              <ul className={cn("space-y-2 mt-1", bloco.wide && "md:columns-2 md:gap-x-10 md:space-y-0")}>
                {bloco.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group/item md:break-inside-avoid md:mb-2">
                    <span className="mt-[0.55rem] h-px w-3 bg-primary/40 flex-shrink-0 group-hover/item:bg-primary group-hover/item:w-5 transition-all duration-300" />
                    <Editable as="span" id={`proposta-arq.scope.${trackId}.${bloco.id}.item.${i}`} className="font-display text-[0.95rem] text-foreground/80 leading-snug">{item}</Editable>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
      {hasFootnote && (
        <div className="mt-6 pl-4 border-l-2 border-primary/40">
          <Editable as="p" id={`proposta-arq.scope.${trackId}.footnote`} className="font-display italic text-[0.9rem] text-foreground/70 leading-relaxed">
            <span className="font-mono not-italic text-primary mr-1">*</span>
            Desenvolvido em parceria com engenheiros especializados. A NL coordena e valida todos os projetos complementares.
          </Editable>
        </div>
      )}
    </div>
  );
};

const ScopeTabs = () => {
  const [tab, setTab] = useState("arq");
  return (
    <Tabs value={tab} onValueChange={setTab} className="w-full">
      <TabsList className="bg-transparent border-b border-border/60 rounded-none p-0 h-auto w-full justify-start gap-8 mb-8">
        <TabsTrigger value="arq" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary text-muted-foreground rounded-none px-0 pb-4 font-mono text-[11px] uppercase tracking-[0.3em] border-b-2 border-transparent data-[state=active]:border-primary">Arquitetônico</TabsTrigger>
        <TabsTrigger value="int" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary text-muted-foreground rounded-none px-0 pb-4 font-mono text-[11px] uppercase tracking-[0.3em] border-b-2 border-transparent data-[state=active]:border-primary">Interiores</TabsTrigger>
      </TabsList>
      <TabsContent value="arq" className="mt-0">
        <ScopeBlocos data={SCOPE_ARQ} trackId="arq" />
        <Editable id="proposta-arq.scope.arq.parceria" multiline as="p" className="mt-6 font-display italic text-sm text-foreground/65 leading-relaxed border-l-2 border-primary/40 pl-4">
          <span className="font-mono not-italic text-primary mr-1">*</span>
          Desenvolvido em parceria com engenheiros especializados. A NL coordena e valida todos os projetos complementares.
        </Editable>
      </TabsContent>
      <TabsContent value="int" className="mt-0">
        <ScopeBlocos data={SCOPE_INT} trackId="int" />
      </TabsContent>
    </Tabs>
  );
};

const PackageCard = ({ id, tier, tagline, price, priceNote, cta, ctaHref, recommended }: { id: string; tier: string; tagline: string; price: string; priceNote: string; cta?: string; ctaHref?: string; recommended?: boolean; }) => (
  <div className={`relative flex flex-col p-10 md:p-12 ${recommended ? "border-2 border-primary bg-background" : "border border-border/60 bg-background/60"}`}>
    {recommended && (
      <div className="absolute -top-3 left-10 bg-primary text-primary-foreground px-4 py-1">
        <Editable id={`proposta-arq.pkg.${id}.badge`} className="font-mono text-[9px] uppercase tracking-[0.3em]">◆ Mais escolhido</Editable>
      </div>
    )}
    <div className="mb-8">
      <Editable id={`proposta-arq.pkg.${id}.tier`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80 block mb-4">{tier}</Editable>
      <Editable as="h3" id={`proposta-arq.pkg.${id}.tagline`} multiline className="font-display text-3xl md:text-4xl text-foreground leading-tight mb-6">{tagline}</Editable>
      <div className="gold-line w-12 mb-6" />
      <Editable id={`proposta-arq.pkg.${id}.price.note`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-1">{priceNote}</Editable>
      <Editable id={`proposta-arq.pkg.${id}.price`} className={`font-display text-5xl md:text-6xl leading-none block ${recommended ? "text-primary" : "text-foreground"}`}>{price}</Editable>
    </div>
    {cta && ctaHref && (
      <a href={ctaHref} target="_blank" rel="noreferrer" className={`group inline-flex items-center justify-center gap-4 px-8 py-4 font-mono text-xs uppercase tracking-[0.3em] transition-colors duration-500 self-stretch ${recommended ? "bg-primary text-primary-foreground hover:bg-primary-glow" : "border border-foreground/30 text-foreground hover:border-primary hover:text-primary"}`}>
        <Editable id={`proposta-arq.pkg.${id}.cta`} className="inline-block">{cta}</Editable>
        <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
      </a>
    )}
  </div>
);

const COMPARISON_GROUPS: { group: string; rows: { id: string; label: string; basic: string | boolean; premium: string | boolean }[]; }[] = [
  { group: "Arquitetura", rows: [
    { id: "proposta-arq.cmp.arq.1", label: "Levantamento & Briefing", basic: true, premium: true },
    { id: "proposta-arq.cmp.arq.2", label: "Criação do Conceito", basic: true, premium: true },
    { id: "proposta-arq.cmp.arq.3", label: "Estudo Preliminar com 3D", basic: true, premium: true },
    { id: "proposta-arq.cmp.arq.4", label: "Projeto Legal & Aprovações", basic: true, premium: true },
    { id: "proposta-arq.cmp.arq.5", label: "Projeto Executivo Arquitetônico", basic: true, premium: true },
  ]},
  { group: "Documentação técnica", rows: [
    { id: "proposta-arq.cmp.doc.1", label: "Caderno Geral completo", basic: true, premium: true },
    { id: "proposta-arq.cmp.doc.2", label: "Caderno de Detalhes Construtivos", basic: true, premium: true },
    { id: "proposta-arq.cmp.doc.3", label: "Memorial Descritivo", basic: true, premium: true },
    { id: "proposta-arq.cmp.doc.4", label: "Mapas de Instalações (em parceria)", basic: true, premium: true },
  ]},
  { group: "Visualização 3D", rows: [
    { id: "proposta-arq.cmp.vis.1", label: "Concepção 3D de Alta Fidelidade", basic: false, premium: true },
    { id: "proposta-arq.cmp.vis.2", label: "Vídeo 3D 360°", basic: false, premium: true },
  ]},
  { group: "Interiores", rows: [
    { id: "proposta-arq.cmp.int.1", label: "Projeto Executivo de Interiores", basic: false, premium: true },
    { id: "proposta-arq.cmp.int.2", label: "Caderno de Ambientes", basic: false, premium: true },
    { id: "proposta-arq.cmp.int.3", label: "Caderno de Esquadrias", basic: false, premium: true },
    { id: "proposta-arq.cmp.int.4", label: "Caderno de Marmoraria", basic: false, premium: true },
    { id: "proposta-arq.cmp.int.5", label: "Caderno de Porcelanataria", basic: false, premium: true },
    { id: "proposta-arq.cmp.int.6", label: "Caderno de Marcenaria", basic: false, premium: true },
  ]},
  { group: "Viabilidade", rows: [
    { id: "proposta-arq.cmp.viab.1", label: "EVF — Viabilidade Financeira", basic: false, premium: "Opcional" },
  ]},
];

const ComparisonCell = ({ value }: { value: string | boolean }) => {
  if (value === true) return <span className="font-mono text-primary text-base">✓</span>;
  if (value === false) return <span className="font-mono text-muted-foreground/30 text-base">—</span>;
  return <span className="font-display text-sm text-foreground/85 leading-snug">{value}</span>;
};

const ComparisonTable = () => (
  <div className="mt-20 max-w-6xl mx-auto">
    <div className="text-center mb-10">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80 block mb-3">Comparativo detalhado</span>
      <Editable as="h3" id="proposta-arq.cmp.title" multiline className="font-display text-3xl md:text-4xl leading-tight text-balance max-w-2xl mx-auto">
        O que você recebe em <em className="text-primary not-italic">cada pacote</em>
      </Editable>
    </div>
    <div className="border border-border/60 bg-background w-full">
      <div className="w-full">
        <div className="grid grid-cols-[1.4fr_1fr_1fr] md:grid-cols-[1.6fr_1fr_1fr] border-b border-border/60 bg-surface/40">
          <div className="px-2 md:px-6 py-4 md:py-5 min-w-0">
            <span className="font-mono text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-muted-foreground">Entregáveis</span>
          </div>
          <div className="px-2 md:px-6 py-4 md:py-5 border-l border-border/60 text-center min-w-0">
            <span className="font-mono text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-muted-foreground block mb-1">Pacote</span>
            <span className="font-display text-sm md:text-xl text-foreground">Essencial</span>
          </div>
          <div className="px-2 md:px-6 py-4 md:py-5 border-l border-border/60 text-center bg-primary/[0.04] relative min-w-0">
            <div className="absolute top-0 inset-x-0 h-px bg-primary" />
            <span className="font-mono text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary/80 block mb-1">Recomendado</span>
            <span className="font-display text-sm md:text-xl text-primary">Completo</span>
          </div>
        </div>
        {COMPARISON_GROUPS.map((g, gi) => (
          <div key={gi}>
            <div className="grid grid-cols-[1.4fr_1fr_1fr] md:grid-cols-[1.6fr_1fr_1fr] border-b border-border/40 bg-surface/20">
              <div className="px-2 md:px-6 py-3 col-span-3">
                <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary/70">
                  {String(gi + 1).padStart(2, "0")} · {g.group}
                </span>
              </div>
            </div>
            {g.rows.map((r, ri) => (
              <div key={r.id} className={`grid grid-cols-[1.4fr_1fr_1fr] md:grid-cols-[1.6fr_1fr_1fr] ${ri === g.rows.length - 1 && gi === COMPARISON_GROUPS.length - 1 ? "" : "border-b border-border/40"}`}>
                <div className="px-2 md:px-6 py-3 md:py-4 flex items-center min-w-0">
                  <Editable id={`${r.id}.label`} className="font-display text-[11px] md:text-sm text-foreground/85 leading-snug break-words">{r.label}</Editable>
                </div>
                <div className="px-2 md:px-6 py-3 md:py-4 border-l border-border/40 flex items-center justify-center text-center min-w-0">
                  {typeof r.basic === "string" ? (
                    <Editable id={`${r.id}.basic`} className="font-display text-[11px] md:text-sm text-foreground/75 leading-snug break-words">{r.basic}</Editable>
                  ) : (
                    <ComparisonCell value={r.basic} />
                  )}
                </div>
                <div className="px-2 md:px-6 py-3 md:py-4 border-l border-border/40 flex items-center justify-center text-center bg-primary/[0.025] min-w-0">
                  {typeof r.premium === "string" ? (
                    <Editable id={`${r.id}.premium`} className="font-display text-[11px] md:text-sm text-primary leading-snug font-medium break-words">{r.premium}</Editable>
                  ) : (
                    <ComparisonCell value={r.premium} />
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    <Editable id="proposta-arq.cmp.footnote" multiline as="p" className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground text-center mt-6 leading-relaxed">
      Pacotes podem ser personalizados conforme a complexidade do projeto.
    </Editable>
    <Editable id="proposta-arq.cmp.footnote2" multiline as="p" className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground text-center mt-3 leading-relaxed">
      Itens opcionais são formalizados via aditivo de contrato conforme necessidade do projeto.
    </Editable>
    <Editable id="proposta-arq.cmp.footnote3" multiline as="p" className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground text-center mt-3 leading-relaxed">
      No Plano Completo, cada fornecedor recebe o caderno específico da sua execução — sem margem para improviso.
    </Editable>
  </div>
);

export default PropostaArqint;
