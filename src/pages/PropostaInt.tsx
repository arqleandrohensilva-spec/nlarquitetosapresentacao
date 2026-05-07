import { useState, useRef, useLayoutEffect } from "react";
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
import propostaCaseCasa from "@/assets/proposta/chale-juruva.png";
import propostaInteriores from "@/assets/proposta/tghdfjg.jpg";
import propostaPortFachada from "@/assets/proposta/casa-jf.png";
import propostaPortLiving from "@/assets/proposta/nomo-result-2062.jpg";
import propostaPortLazer from "@/assets/proposta/nomo-result-1759.jpg";
import propostaPortSuite from "@/assets/proposta/gemini-m7jp.jpg";
const LOGO_BRANCA = "/logo-branca.png";

const PX = "proposta-int";

const PropostaInt = () => {
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <SectionNavProposta />

      {/* 01 · CAPA */}
      <section id="capa" className="relative min-h-screen flex flex-col justify-end px-6 md:px-16 lg:px-24 py-20">
        <img src={propostaCapa} alt="NL Arquitetos · monograma esculpido com luz dourada" className="absolute inset-0 w-full h-full object-cover opacity-90 contrast-110 saturate-125" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/95" />
        <div className="absolute inset-0 vignette opacity-60" />
        <div className="relative z-10 max-w-4xl fade-up">
          <Editable id={`${PX}.capa.eyebrow`} className="eyebrow mb-8 inline-block">Carta Proposta · Confidencial</Editable>
          <Editable as="h1" id={`${PX}.capa.title`} multiline className="font-display text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.95] text-foreground mb-8 text-balance">
            A decisão tomada
            <br />
            <em className="text-primary not-italic font-light">antes</em> da obra.
          </Editable>
          <div className="gold-line w-32 mb-8" />
          <Editable id={`${PX}.capa.subtitle`} multiline className="font-display italic text-xl md:text-2xl text-foreground/70 max-w-xl block">
            Projeto executivo de interiores com especificação completa — para que cada material, cada medida e cada detalhe seja decidido antes da execução.
          </Editable>
          <div className="mt-12 flex items-center gap-4 text-muted-foreground">
            <span className="h-px w-12 bg-primary/40" />
            <Editable id={`${PX}.capa.validity`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80">Validade · 30 dias corridos</Editable>
          </div>
        </div>
        <div className="relative z-10 mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4 text-muted-foreground">
          <div className="flex items-center gap-3 md:gap-4 flex-wrap">
            <Editable id={`${PX}.capa.client`} className="font-mono text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase text-primary/80 break-words">Cliente · [Nome do Cliente]</Editable>
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
              Antes de desenhar, <em className="text-primary not-italic">escutamos.</em>
              <br />
              Antes de construir, <em className="text-primary not-italic">decidimos.</em>
            </Editable>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
              <Editable id={`${PX}.manifesto.p1`} multiline as="p" className="font-display text-lg md:text-xl leading-relaxed text-foreground/80">
                A NL não começa pelo desenho. Começa pela escuta — entendendo o espaço, o modo de viver e o que cada ambiente precisa ser. Só depois o primeiro traço aparece. E quando aparece, já foi validado.
              </Editable>
              <Editable id={`${PX}.manifesto.p2`} multiline as="p" className="font-display text-lg md:text-xl leading-relaxed text-foreground/80">
                Cada decisão tomada em projeto evita uma decisão custosa na obra. Não é opinião — é lógica construtiva. Quando você decide durante a execução, o material já foi comprado e o erro já virou retrabalho.
              </Editable>
            </div>
            <div className="mt-20 pl-8 border-l border-primary/40 max-w-2xl">
              <Editable id={`${PX}.manifesto.quote`} multiline as="p" className="font-display italic text-2xl md:text-3xl text-primary/90 leading-snug">
                "Beleza sem método é apenas decoração. Interiores é a decisão tomada antes do primeiro traço."
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
                Fundada por Leandro e Neandro, a NL une visão estratégica e disciplina executiva em um único método. Transformamos o desejo do cliente em projeto executivo sem perdas — de conceito, de qualidade ou de controle.
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
                Esta proposta foi <em className="not-italic" style={{ color: "#8B7355" }}>construída para você.</em>
              </Editable>
              <div className="h-px w-16 mb-8" style={{ backgroundColor: "#8B7355" }} />
              <Editable as="p" id={`${PX}.diagnostico.subtitle`} multiline className="font-display italic text-lg md:text-xl leading-relaxed max-w-md" style={{ color: "rgba(232, 228, 223, 0.78)" }}>
                Cada seção deste documento foi estruturada com base no que você nos contou. O que está aqui não é um catálogo — é uma resposta.
              </Editable>
              <div className="lg:hidden mt-12 h-px w-full" style={{ backgroundColor: "rgba(139, 115, 85, 0.4)" }} />
            </div>
            <div className="col-span-12 lg:col-span-7 lg:pl-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-0">
                {[
                  { id: "cliente", label: "Cliente", value: "[Nome do Cliente]" },
                  { id: "projeto", label: "Projeto", value: "Arquitetura de Interiores" },
                  { id: "localizacao", label: "Localização", value: "[Cidade, Estado]" },
                  { id: "metragem", label: "Metragem estimada", value: "[XXX m²]" },
                  { id: "objetivo", label: "Objetivo", value: "[Descrição breve do objetivo do cliente]" },
                  { id: "data", label: "Data", value: "[DD Mês AAAA]" },
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
              Nenhum projeto da NL se repete — porque nenhum cliente é igual.
            </Editable>
          </div>
        </div>
      </section>

      {/* 05 · CASE — CHALÉ JURUVA */}
      <section id="case" className="relative">
        <div className="grid grid-cols-12 min-h-screen">
          <div className="col-span-12 lg:col-span-7 relative min-h-[60vh] lg:min-h-screen">
            <img src={propostaCaseCasa} alt="Chalé Juruva · refúgio NL Arquitetos · Santo Antônio do Pinhal" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={1280} />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/40 lg:to-background" />
            <div className="absolute bottom-8 left-8 z-10 flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Case · 01</span>
              <span className="h-px w-8 bg-primary/60" />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 relative px-8 md:px-16 py-20 lg:py-32 flex flex-col justify-center">
            <div className="max-w-md">
              <span className="number-marker block mb-4">05 · Projeto referência</span>
              <Editable as="h2" id={`${PX}.case.title`} multiline className="font-display text-5xl md:text-6xl leading-[0.95] mb-2">
                O chalé nasce da <em className="text-primary not-italic">mata e da altitude.</em>
              </Editable>
              <Editable id={`${PX}.case.location`} className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-10">
                Chalé Juruva · 60m² · Santo Antônio do Pinhal
              </Editable>
              <div className="gold-line w-16 mb-8" />
              <Editable id={`${PX}.case.body`} multiline as="p" className="font-display text-base md:text-lg leading-relaxed text-foreground/80 mb-10">
                O pedido era um refúgio na Mantiqueira em diálogo com a mata. Madeira, pedra e grandes panos de vidro emolduram a paisagem; marcenaria sob medida, iluminação cênica e revestimentos naturais compõem interiores que envelhecem bem. Cada acabamento foi decidido em projeto, antes do canteiro.
              </Editable>
              <ul className="space-y-3 font-display text-foreground/80 mb-10">
                {[
                  "Layout, circulação e setorização dos ambientes",
                  "Marcenaria sob medida e detalhamento de mobiliário fixo",
                  "Projeto luminotécnico e cenas de iluminação",
                  "Revestimentos, paginação e materialidade",
                  "Coordenação com elétrica, hidráulica e marceneiros parceiros",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-baseline border-b border-border/40 pb-3">
                    <span className="font-mono text-[10px] text-primary/70">0{i + 1}</span>
                    <Editable id={`${PX}.case.item.${i}`} className="flex-1 text-sm md:text-base">{item}</Editable>
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-3 gap-3 sm:gap-6 border-t border-border/60 pt-6">
                <CaseStat id={`${PX}.case.s1`} value="04" label="Meses de projeto" />
                <CaseStat id={`${PX}.case.s2`} value="05" label="Disciplinas" />
                <CaseStat id={`${PX}.case.s3`} value="0" label="Retrabalho" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 · INTERIORES */}
      <section id="interiores" className="relative px-6 md:px-16 lg:px-24 py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
            <span className="number-marker block mb-3">06</span>
            <Editable id={`${PX}.interiores.eyebrow`} className="eyebrow mb-8 inline-block">Interiores · Camada do habitar</Editable>
            <Editable as="h2" id={`${PX}.interiores.title`} multiline className="font-display text-5xl md:text-6xl leading-[1.0] mb-10 text-balance">
              O interior é onde a <em className="text-primary not-italic">arquitetura</em> encontra a vida.
            </Editable>
            <Editable id={`${PX}.interiores.body`} multiline as="p" className="font-display text-lg leading-relaxed text-foreground/75 mb-10">
              Não decoramos espaços — projetamos atmosferas. Cada material é escolhido pelo modo como envelhece, pelo toque, pelo som que o ambiente faz quando alguém entra. O resultado: interiores que não datam, que não cansam, e que continuam pertencendo a você dez anos após a entrega.
            </Editable>
            <ul className="space-y-3 font-display text-foreground/80">
              {[
                ["01", "Layout funcional e fluxos"],
                ["02", "Paleta de materiais e acabamentos"],
                ["03", "Marcenaria sob medida com detalhamento executivo"],
                ["04", "Iluminação cênica e funcional integrada"],
                ["05", "Curadoria de mobiliário e arte"],
              ].map(([num, txt], i) => (
                <li key={i} className="flex gap-4 items-baseline border-b border-border/40 pb-3">
                  <span className="font-mono text-xs text-primary/70">{num}</span>
                  <Editable id={`${PX}.interiores.item${i}`} className="flex-1">{txt}</Editable>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-7 order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={propostaInteriores} alt="Espaço Gourmet Jardim · NL Arquitetos · interiores" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1600} height={2000} />
            </div>
            <div className="absolute -bottom-4 -left-4 md:-left-8 bg-background border-l-2 border-primary px-5 py-3">
              <Editable id={`${PX}.interiores.caption`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Espaço Gourmet Jardim · Materialidade e precisão</Editable>
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
                  <img src={propostaPortFachada} alt="Casa JF · NL Arquitetos" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" loading="lazy" />
                </div>
              </a>
              <figcaption className="mt-4 flex items-baseline justify-between">
                <Editable id={`${PX}.port.cap1`} className="font-display italic text-foreground/80">Casa JF · Jacareí SP</Editable>
                <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">01</span>
              </figcaption>
            </figure>
            <figure className="col-span-12 md:col-span-7 group">
              <a href={propostaPortLiving} target="_blank" rel="noreferrer" className="block overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={propostaPortLiving} alt="Sala de estar · NL Arquitetos" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" loading="lazy" />
                </div>
              </a>
              <figcaption className="mt-4 flex items-baseline justify-between">
                <Editable id={`${PX}.port.cap2`} className="font-display italic text-foreground/80">Sala de estar · Iluminação cênica</Editable>
                <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">02</span>
              </figcaption>
            </figure>
            <figure className="col-span-6 md:col-span-3 group">
              <a href={propostaPortLazer} target="_blank" rel="noreferrer" className="block overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={propostaPortLazer} alt="Área de lazer · NL Arquitetos" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" loading="lazy" />
                </div>
              </a>
              <figcaption className="mt-4">
                <Editable id={`${PX}.port.cap3`} className="font-display italic text-foreground/80 text-sm">Área de lazer · Convivência e materialidade</Editable>
                <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mt-1">03</div>
              </figcaption>
            </figure>
            <figure className="col-span-6 md:col-span-4 group">
              <a href={propostaPortSuite} target="_blank" rel="noreferrer" className="block overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={propostaPortSuite} alt="Suíte · NL Arquitetos" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" loading="lazy" />
                </div>
              </a>
              <figcaption className="mt-4">
                <Editable id={`${PX}.port.cap4`} className="font-display italic text-foreground/80 text-sm">Suíte · Conforto e precisão</Editable>
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
            <Editable id={`${PX}.etapas.tag`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block">Sete fases · ~90 dias</Editable>
          </div>
          <div className="grid grid-cols-12 gap-8 mb-16">
            <Editable as="h2" id={`${PX}.etapas.title`} multiline className="col-span-12 lg:col-span-7 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.0] text-balance">
              Do primeiro traço<br /><em className="text-primary not-italic">ao detalhe final.</em>
            </Editable>
            <Editable id={`${PX}.etapas.intro`} multiline as="p" className="col-span-12 lg:col-span-5 lg:pt-4 font-display text-lg text-foreground/70 leading-relaxed">
              Sete cadernos coordenados em uma única trilha. Cada decisão é tomada na ordem certa — para que nada precise ser refeito depois.
            </Editable>
          </div>
          <PhaseTimeline
            trackId="int"
            number="01"
            title="Arquitetura de Interiores"
            duration="~90 dias"
            phases={[
              { n: "01", t: "Briefing & Levantamentos", d: "Escuta profunda, leitura do espaço e do estilo de vida." },
              { n: "02", t: "Criação do Conceito", d: "Atmosfera, paleta e narrativa de interiores que orientam cada decisão." },
              { n: "03", t: "Concepção 3D", d: "Imagens realistas e vídeo 360° para experimentar o projeto antes da obra." },
              { n: "04", t: "EVF — Viabilidade Financeira", d: "Orçamento por quantitativos reais — decisão consciente de escopo.", optional: true },
              { n: "05", t: "Projeto Executivo de Interiores", d: "Marcenaria, iluminação, revestimentos e pranchas executivas." },
              { n: "06", t: "Visitas em Lojas", d: "Curadoria conjunta de mobiliário, acabamentos, arte e têxteis.", optional: true },
              { n: "07", t: "Acompanhamento de obra", d: "Visitas técnicas, ajustes finos e curadoria de fornecedores.", optional: true },
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
              Sete cadernos. <em className="text-primary not-italic">Um só método.</em>
            </Editable>
            <Editable id={`${PX}.escopo.body`} multiline as="p" className="font-display text-lg leading-relaxed text-foreground/75 mb-10">
              Sete cadernos coordenados pela NL — base documental para uma obra sem improviso, com cada componente identificado, localizado e quantificado.
            </Editable>
            <div className="relative aspect-[4/5] overflow-hidden hidden lg:block">
              <img src={scopeMaterials} alt="Mesa de trabalho com amostras de materiais e croquis" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <ScopeTabs />
          </div>
        </div>
      </section>

      {/* BAND · BLUEPRINT */}
      <FullBleedBand src={bandBlueprint} alt="Detalhe de prancha técnica" number="Intermezzo · 01" caption="Cada linha no papel é uma decisão que não precisará ser tomada na obra." align="left" height="short" />

      {/* 10 · PILARES */}
      <section id="pilares" className="relative px-6 md:px-16 lg:px-24 py-16 md:py-20 bg-background min-h-screen flex flex-col justify-center">
        <div className="relative max-w-6xl mx-auto w-full">
          <div className="flex items-baseline justify-between mb-10 md:mb-14 border-b border-border/60 pb-5">
            <div className="flex items-baseline gap-6">
              <span className="number-marker">10</span>
              <Editable id={`${PX}.pilares.eyebrow`} className="eyebrow">Nossos Pilares</Editable>
            </div>
            <Editable id={`${PX}.pilares.tag`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block">O que nos diferencia</Editable>
          </div>
          <Editable as="h2" id={`${PX}.pilares.title`} multiline className="font-display text-3xl md:text-5xl leading-[1.05] mb-10 md:mb-14 max-w-3xl text-balance">
            Quatro <em className="text-primary not-italic">decisões</em> que sustentam cada projeto.
          </Editable>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-12">
            {[
              { id: "decisao", num: "I", kicker: "Decisão · Antes da Obra", body: "Cada detalhe é resolvido antes da primeira escavação. O que chega à obra já está validado.", quote: "Decidir no canteiro é caro." },
              { id: "compatibilizacao", num: "II", kicker: "Coordenação · Técnica", body: "Marcenaria, iluminação, elétrica e revestimentos coordenados em conjunto com engenheiros e marceneiros parceiros. O que chega à obra já foi revisado e validado.", quote: "Mostramos o erro no computador para não errar no cimento." },
              { id: "processo", num: "III", kicker: "Processo · Conduzido", body: "Cada etapa tem objetivo claro e critério de avanço. A NL conduz — o cliente aprova com segurança.", quote: "Você não precisa entender de obra. Precisa entender o que aprova." },
              { id: "resultado", num: "IV", kicker: "Resultado · Previsível", body: "Obra sem improviso, sem surpresa de custo. A estética é a última camada — o método garante o resto.", quote: "A NL não projeta para impressionar. Projeta para funcionar." },
            ].map((p) => (
              <article key={p.id} className="flex gap-5 md:gap-6">
                <span className="font-display italic text-4xl md:text-5xl text-primary/70 leading-none shrink-0 w-10">{p.num}</span>
                <div className="flex-1 border-l border-border pl-5 md:pl-6">
                  <Editable id={`${PX}.pilares.${p.id}.kicker`} className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground block mb-2">{p.kicker}</Editable>
                  <Editable as="p" id={`${PX}.pilares.${p.id}.body`} multiline className="text-foreground/80 text-[0.9rem] leading-relaxed mb-3">{p.body}</Editable>
                  <Editable as="p" id={`${PX}.pilares.${p.id}.quote`} multiline className="font-display italic text-base md:text-lg text-primary leading-snug">"{p.quote}"</Editable>
                </div>
              </article>
            ))}
          </div>
          <Editable as="p" id={`${PX}.pilares.closing`} className="mt-12 md:mt-16 pt-6 border-t border-border/60 font-display italic text-xl md:text-2xl text-foreground/75 text-center">
            Os interiores como decisão.
          </Editable>
        </div>
      </section>

      {/* 11 · CRONOGRAMA */}
      <section id="cronograma" className="relative px-6 md:px-16 lg:px-24 py-32 overflow-hidden" style={{ background: "#1A1816", color: "#E8E4DF" }}>
        <div className="relative max-w-7xl mx-auto">
          <div className="relative grid grid-cols-12 gap-8 items-start mb-24">
            <div className="col-span-12 md:col-span-7 relative z-10">
              <div className="flex items-baseline gap-6 mb-8">
                <span className="font-mono-edit text-[10px] tracking-[0.3em] uppercase" style={{ color: "#8B7355" }}>11</span>
                <Editable id={`${PX}.crono.eyebrow`} className="font-mono-edit text-[10px] uppercase tracking-[0.3em]">
                  <span style={{ color: "rgba(232, 228, 223, 0.5)" }}>Linha do tempo · Estimativa</span>
                </Editable>
              </div>
              <Editable as="h2" id={`${PX}.crono.title`} multiline className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance">
                <span style={{ color: "#E8E4DF" }}>Cronograma </span>
                <em className="not-italic" style={{ color: "#8B7355" }}>estimado</em>
                <span style={{ color: "#E8E4DF" }}>.</span>
              </Editable>
            </div>
            <div className="col-span-12 md:col-span-5 relative">
              <div className="md:text-right">
                <div aria-hidden className="font-display leading-[0.85] select-none" style={{ fontSize: "clamp(8rem, 16vw, 16rem)", color: "#8B7355", opacity: 0.18, letterSpacing: "-0.05em" }}>90</div>
                <div className="font-mono-edit text-[10px] tracking-[0.35em] uppercase mt-2" style={{ color: "#8B7355" }}>Dias totais</div>
              </div>
            </div>
          </div>
          <div className="border-t" style={{ borderColor: "rgba(139, 115, 85, 0.3)" }}>
            {(() => {
              const stages = [
                { num: "01", name: "Levantamento & Briefing", days: 10 },
                { num: "02", name: "Criação do Conceito", days: 20 },
                { num: "03", name: "Estudo Preliminar com 3D", days: 30 },
                { num: "04", name: "Projeto Legal & Aprovações", days: 15 },
                { num: "05", name: "Projeto Executivo", days: 15 },
              ];
              const total = stages.reduce((acc, s) => acc + s.days, 0);
              let cumulative = 0;
              return stages.map((s) => {
                const offsetPct = (cumulative / total) * 100;
                const widthPct = (s.days / total) * 100;
                cumulative += s.days;
                return (
                  <div key={s.num} className="grid grid-cols-12 gap-4 md:gap-8 items-center py-7 md:py-8 border-b" style={{ borderColor: "rgba(139, 115, 85, 0.3)" }}>
                    <div className="col-span-2 md:col-span-1">
                      <span className="font-mono-edit text-[11px] md:text-xs tracking-[0.25em]" style={{ color: "#8B7355" }}>{s.num}</span>
                    </div>
                    <div className="col-span-10 md:col-span-4">
                      <span className="font-display leading-tight" style={{ color: "#E8E4DF", fontSize: "clamp(1.05rem, 1.6vw, 1.5rem)" }}>{s.name}</span>
                    </div>
                    <div className="col-span-10 md:col-span-5 order-last md:order-none">
                      <div className="relative w-full" style={{ height: "3px" }}>
                        <div className="absolute inset-0" style={{ background: "rgba(139, 115, 85, 0.18)", height: "3px" }} />
                        <div className="absolute top-0 transition-all duration-700" style={{ left: `${offsetPct}%`, width: `${widthPct}%`, height: "3px", background: "#8B7355" }} />
                      </div>
                    </div>
                    <div className="col-span-2 md:col-span-2 text-right">
                      <span className="font-display italic" style={{ color: "#B5A48A", fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)" }}>{s.days}</span>
                      <span className="font-mono-edit not-italic ml-1.5 text-[9px] tracking-[0.2em] uppercase" style={{ color: "rgba(139, 115, 85, 0.7)" }}>dias</span>
                    </div>
                  </div>
                );
              });
            })()}
          </div>
          <div className="grid grid-cols-12 gap-8 mt-20 pt-2">
            <div className="col-span-12 md:col-span-5">
              <div className="font-mono-edit text-[12px] md:text-[13px] tracking-[0.4em] uppercase mb-5" style={{ color: "#8B7355" }}>Prazo total estimado</div>
              <Editable id={`${PX}.crono.total`} className="font-display leading-none block">
                <span style={{ color: "#E8E4DF", fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
                  90 <em className="not-italic" style={{ color: "#8B7355" }}>dias</em>
                </span>
              </Editable>
            </div>
            <div className="col-span-12 md:col-span-7 md:pl-12 md:border-l flex items-end" style={{ borderColor: "rgba(139, 115, 85, 0.3)" }}>
              <Editable id={`${PX}.crono.note`} multiline as="p" className="font-display italic leading-relaxed text-primary text-[clamp(1rem,1.25vw,1.2rem)]">
                "Cronograma estimado · Pode variar conforme escopo, aprovações de terceiros (prefeitura, condomínio) e disponibilidade do cliente nas etapas de aprovação."
              </Editable>
            </div>
          </div>
        </div>
      </section>

      {/* 12 · BENEFÍCIOS */}
      <section id="beneficios" className="relative px-6 md:px-16 lg:px-24 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 mb-20">
            <div className="col-span-12 md:col-span-3">
              <span className="number-marker block mb-2">12</span>
              <Editable id={`${PX}.beneficios.eyebrow`} className="eyebrow">Benefícios</Editable>
            </div>
            <div className="col-span-12 md:col-span-9">
              <Editable as="h2" id={`${PX}.beneficios.title`} multiline className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.0] text-balance">
                O que você <em className="text-primary not-italic">recebe</em> além das pranchas.
              </Editable>
            </div>
          </div>
          <div className="mb-16 md:mb-20 text-center">
            <Editable id={`${PX}.beneficios.intro`} as="p" className="font-display italic text-balance">
              <span style={{ color: "#8B7355", fontSize: "clamp(1.75rem, 3.2vw, 3rem)", lineHeight: 1.15 }}>
                Decidir no papel é barato. Decidir no canteiro é caro.
              </span>
            </Editable>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {[
              { t: "Marcenaria sob medida", d: "Cada peça desenhada para o seu espaço, com encaixes, ferragens e acabamentos detalhados em prancha — sem improviso no marceneiro." },
              { t: "Decisão antes da obra", d: "Cada material, ponto elétrico e luminária validado em projeto. O que está na prancha é o que vai para o canteiro — sem surpresa." },
              { t: "Iluminação como atmosfera", d: "Projeto luminotécnico que desenha cenas, valoriza texturas e acompanha o ritmo do dia — luz pensada, não improvisada." },
              { t: "Valorização patrimonial", d: "Interiores assinados e bem documentados agregam valor mensurável ao imóvel — e atravessam o tempo sem datar." },
              { t: "Conforto sensorial", d: "Materiais nobres, acústica equilibrada e ergonomia pensada para 10, 20 anos. Ambientes que envelhecem bem." },
              { t: "Previsibilidade financeira", d: "Quantitativos precisos de marcenaria, revestimentos e mobiliário permitem orçamentos firmes — e protegem você de aditivos surpresa." },
            ].map((b, i) => (
              <BenefitCard key={i} {...b} idx={i} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Editable id={`${PX}.beneficios.tags`} className="font-mono-edit uppercase text-muted-foreground">
              <span style={{ fontSize: "clamp(0.65rem, 0.85vw, 0.8rem)", letterSpacing: "0.35em" }}>
                Projeto Executivo · Compatibilização · Validação Antecipada · Resultado Previsível
              </span>
            </Editable>
          </div>
          <div className="mt-16 text-center">
            <Editable id={`${PX}.beneficios.fechamento`} as="p" className="font-display italic">
              <span style={{ color: "#8B7355", fontSize: "clamp(1.1rem, 1.5vw, 1.5rem)" }}>
                "Cada prancha entregue é uma decisão que não precisará ser tomada na obra."
              </span>
            </Editable>
          </div>
        </div>
      </section>

      {/* BAND · INTERIOR */}
      <FullBleedBand src={bandIntermezzo02} alt="Ambiente integrado de estar e jantar com marcenaria sob medida" number="Intermezzo · 02" caption="Marcenaria, iluminação e revestimentos coordenados — cada acabamento decidido em projeto, não no canteiro." align="right" height="tall" objectPosition="35% 65%" heightClassName="h-[60vh] sm:h-[68vh] md:h-[78vh]" edgeFadeBottomClassName="h-44 md:h-64" imgClassName="brightness-[0.92] contrast-[1.06] saturate-[0.95]" />

      {/* 13 · INVESTIMENTO */}
      <section id="investimento" className="relative px-6 md:px-16 lg:px-24 py-32 bg-surface/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="number-marker block mb-4">13 · Investimento</span>
            <div className="gold-line w-16 mx-auto mb-10" />
            <Editable as="h2" id={`${PX}.investimento.title`} multiline className="font-display text-5xl md:text-7xl leading-[1.0] mb-8 text-balance">
              Dois planos. <em className="text-primary not-italic">Um só método.</em>
            </Editable>
            <Editable id={`${PX}.investimento.body`} multiline as="p" className="font-display italic text-lg md:text-xl text-foreground/70">
              O valor de cada plano é calculado com base no escopo e na complexidade do projeto. Não é preço de tabela — é o custo real de eliminar o improviso antes da obra começar.
            </Editable>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PackageCard id="basic" tier="Plano Executivo" tagline="Interiores" price="Sob consulta" priceNote="Sob consulta · conforme escopo" />
            <PackageCard id="premium" tier="Plano Completo" tagline="Interiores + Especificações" price="Sob consulta" priceNote="Sob consulta · conforme escopo" recommended />
          </div>
          <ComparisonTable />
          <div className="mt-12 border border-border/60 bg-background max-w-5xl mx-auto">
            <div className="px-8 py-6 border-b border-border/60">
              <Editable id={`${PX}.invest.pay.label`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80 block">
                Condições de pagamento · Aplicáveis aos dois planos
              </Editable>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/60">
              <PaymentTier id="pay1" label="Entrada" value="30%" sub="Na assinatura do contrato" />
              <PaymentTier id="pay2" label="Anteprojeto" value="40%" sub="Na aprovação do anteprojeto" />
              <PaymentTier id="pay3" label="Executivo" value="30%" sub="Na entrega do executivo" />
            </div>
          </div>
          <Editable id={`${PX}.invest.mapas.note`} multiline as="p" className="font-mono text-[11px] text-muted-foreground text-center mt-8 max-w-3xl mx-auto leading-relaxed">
            * Mapas de Instalações desenvolvidos em parceria com engenheiros especializados. A NL coordena e valida todos os projetos complementares.
          </Editable>
          <div className="mt-8 border border-primary/30 bg-primary/[0.03] px-8 py-8 flex flex-col md:flex-row gap-6 items-start max-w-5xl mx-auto">
            <span className="font-display text-4xl text-primary leading-none shrink-0">✦</span>
            <div>
              <Editable id={`${PX}.invest.guarantee.label`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80 block mb-2">Garantia técnica NL</Editable>
              <Editable id={`${PX}.invest.guarantee.body`} multiline as="p" className="font-display text-lg text-foreground/85 leading-relaxed">
                Se após a entrega for identificada qualquer ambiguidade técnica dentro do escopo contratado, a NL produz o detalhamento necessário sem custo adicional. O risco da documentação é nosso.
              </Editable>
            </div>
          </div>
          <Editable id={`${PX}.invest.closing`} multiline as="p" className="font-display italic text-2xl md:text-3xl text-primary text-center mt-16 max-w-3xl mx-auto leading-snug">
            "O preço do projeto é o seguro contra o imprevisto da obra."
          </Editable>
        </div>
      </section>

      {/* 14 · DIFERENCIAIS */}
      <section id="diferenciais" className="relative px-6 md:px-16 lg:px-24 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 mb-20 items-end">
            <div className="col-span-12 md:col-span-7">
              <span className="number-marker block mb-3">14</span>
              <Editable id={`${PX}.diferenciais.eyebrow`} className="eyebrow mb-8 inline-block">Diferenciais · O que nos separa</Editable>
              <Editable as="h2" id={`${PX}.diferenciais.title`} multiline className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.0] text-balance">
                Quatro razões para <em className="text-primary not-italic">escolher</em> a NL.
              </Editable>
            </div>
          </div>
          <div className="h-px bg-primary/30 w-full max-w-5xl mx-auto my-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {[
              { r: "I", t: "Cada decisão tomada antes da obra começar", d: "Materiais, medidas, fornecedores — tudo definido no projeto. Quando a obra começa, não há dúvida, não há imprevisto, não há custo extra." },
              { r: "II", t: "Documentação que vai para a obra", d: "Os cadernos técnicos da NL são feitos para o construtor executar — não para o cliente guardar. Cada prancha tem o nível de detalhe necessário para que nenhuma decisão precise ser tomada no canteiro." },
              { r: "III", t: "A NL conduz — você nunca fica perdido", d: "Cada etapa tem objetivo claro, entregável definido e critério de aprovação. Você sabe sempre em que momento está e o que vem a seguir." },
              { r: "IV", t: "Dois sócios em cada projeto — do briefing à última prancha", d: "Leandro e Neandro estão presentes em cada decisão. Não existe delegação para assistentes ou estagiários." },
            ].map((d, i) => (
              <DifferentialItem key={i} {...d} />
            ))}
          </div>
          <Editable id={`${PX}.diferenciais.closing`} multiline as="p" className="font-display italic text-2xl md:text-3xl text-primary text-center mt-20 max-w-3xl mx-auto leading-snug">
            "O especialista que conduz — não o vendedor que convence."
          </Editable>
        </div>
      </section>

      {/* 15 · NOTA */}
      <section id="nota" className="relative px-6 md:px-16 lg:px-24 py-32 overflow-hidden" style={{ backgroundColor: "#1A1816" }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-primary/40" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="number-marker block mb-6 text-primary/70">15 · NOTA</span>
            <Editable id={`${PX}.nota.title`} as="h2" className="font-display text-6xl md:text-7xl lg:text-8xl text-foreground leading-[1.05] text-balance">Nota.</Editable>
            <Editable id={`${PX}.nota.subtitle`} as="p" className="font-display italic text-xl md:text-2xl text-primary/90 mt-4 leading-snug">Transparência antes do início.</Editable>
            <div className="gold-line w-24 mx-auto mt-10 opacity-60" />
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-primary/15 border border-primary/15">
            {[
              { id: "01", title: "Dados fornecidos pelo cliente", intro: "Para o desenvolvimento do projeto será fundamental que o cliente forneça:", items: ["Plantas atualizadas do imóvel (arquitetônica, elétrica e hidráulica, se houver)", "Documentação de aprovações anteriores (se existirem)", "Referências visuais e programa de necessidades"] },
              { id: "02", title: "Serviços extras contratados pelo cliente", intro: "A contratação dos itens abaixo é responsabilidade do cliente e essencial para o início do projeto:", items: ["Levantamento métrico do imóvel (se não houver planta atualizada)", "ART/RRT dos projetos complementares"] },
              { id: "03", title: "Serviços não inclusos", intro: null as string | null, items: ["Responsabilidade técnica pela execução da obra", "Gestão de obra e contratação de mão de obra", "Compra de materiais e insumos", "Licenças e aprovações junto ao condomínio (quando aplicável)"] },
              { id: "04", title: "Serviços inclusos", intro: null as string | null, items: [] as string[], groups: [
                { label: "Plano Executivo", items: ["Orientação na entrega dos cadernos técnicos", "Suporte técnico por 90 dias após entrega"] },
                { label: "Plano Completo", items: ["Tudo do Executivo", "4 visitas técnicas à obra", "Visitas em lojas para curadoria de materiais"] },
              ] },
            ].map((block: any) => (
              <div key={block.id} className="relative p-10 md:p-12 group" style={{ backgroundColor: "#1A1816" }}>
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="font-display text-5xl md:text-6xl text-primary/30" style={{ WebkitTextStroke: "1px hsl(var(--primary) / 0.4)", color: "transparent" }}>{block.id}</span>
                  <Editable as="h3" id={`${PX}.nota.${block.id}.t`} className="font-display text-2xl md:text-3xl text-foreground leading-tight">{block.title}</Editable>
                </div>
                {block.intro && (
                  <Editable id={`${PX}.nota.${block.id}.intro`} multiline as="p" className="font-display text-foreground/70 leading-relaxed mb-5">{block.intro}</Editable>
                )}
                {block.items && block.items.length > 0 && (
                  <ul className="space-y-2.5">
                    {block.items.map((item: string, i: number) => (
                      <li key={i} className="flex gap-3 text-sm md:text-base text-foreground/70 leading-relaxed">
                        <span className="text-primary mt-1.5 text-[8px]">✦</span>
                        <Editable id={`${PX}.nota.${block.id}.item.${i}`} as="span" className="font-display flex-1">{item}</Editable>
                      </li>
                    ))}
                  </ul>
                )}
                {block.groups && (
                  <div className="space-y-6">
                    {block.groups.map((group: any, gi: number) => (
                      <div key={gi}>
                        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-3">{group.label}</div>
                        <ul className="space-y-2.5">
                          {group.items.map((item: string, i: number) => (
                            <li key={i} className="flex gap-3 text-sm md:text-base text-foreground/70 leading-relaxed">
                              <span className="text-primary mt-1.5 text-[8px]">✦</span>
                              <Editable id={`${PX}.nota.${block.id}.${gi}.item.${i}`} as="span" className="font-display flex-1">{item}</Editable>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <Editable id={`${PX}.nota.closing`} multiline as="p" className="font-display italic text-2xl md:text-3xl text-primary text-center mt-20 max-w-3xl mx-auto leading-snug">
            "Transparência antes do início — porque surpresa na obra custa caro."
          </Editable>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-t from-transparent to-primary/40" />
      </section>

      {/* BAND · MATERIAL */}
      <FullBleedBand src={bandMaterial} alt="Detalhe de travertino e madeira nogueira sob luz natural" number="Intermezzo · 03" caption="Travertino, nogueira, luz. A matéria-prima de uma decisão bem tomada." align="left" height="short" />

      {/* 16 · PRÓXIMOS PASSOS */}
      <section id="proximos" className="relative px-6 md:px-16 lg:px-24 py-40 bg-gradient-to-b from-surface/60 via-background to-background overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-primary/40" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <span className="number-marker block mb-4">16</span>
            <Editable id={`${PX}.proximos.eyebrow`} className="eyebrow mb-8 inline-block">Próximos passos</Editable>
            <Editable as="h2" id={`${PX}.proximos.title`} multiline className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.0] mb-8 text-balance max-w-4xl mx-auto">
              Quatro passos. <em className="text-primary not-italic">Sete dias</em><br />até o primeiro traço.
            </Editable>
            <Editable id={`${PX}.proximos.intro`} multiline as="p" className="font-display italic text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              A partir do momento em que você aprova a proposta, o processo começa. Sem espera. Sem fila.
            </Editable>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-[28px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10" />
            <div className="space-y-20 md:space-y-28">
              {[
                { n: "01", timing: "Imediato", t: "Aprovação da proposta", d: "Você responde com um sim — por mensagem, e-mail ou em pessoa." },
                { n: "02", timing: "Em até 24h", t: "Assinatura do contrato", d: "Enviamos o contrato em até 24 horas. Assinatura digital, sem deslocamento." },
                { n: "03", timing: "Em até 5 dias", t: "Reunião de imersão", d: "Encontro de até 3 horas, agendado em até 5 dias. Aqui ouvimos tudo — imóvel, rotina, família e modo de viver." },
                { n: "04", timing: "Em até 7 dias", t: "Início do estudo preliminar", d: "Em até 7 dias após a imersão, o primeiro traço sai da prancheta. O projeto começa." },
              ].map((p, i) => (<NextStep key={i} index={i} {...p} />))}
            </div>
          </div>
          <div className="mt-32 max-w-4xl mx-auto">
            <div className="border border-primary/30 bg-surface/60 px-8 md:px-16 py-16 md:py-20 relative">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-background px-4 font-display text-3xl text-primary leading-none">✦</span>
              <Editable id={`${PX}.proximos.cta.text`} multiline as="p" className="font-display italic text-3xl md:text-4xl text-foreground text-center leading-tight max-w-2xl mx-auto mb-10">
                Pronto para dar início ao seu projeto?
              </Editable>
              <div className="flex justify-center">
                <a href="https://wa.me/5512996235559?text=Ol%C3%A1%2C%20li%20a%20Carta%20Proposta%20e%20gostaria%20de%20conversar%20sobre%20meu%20projeto." target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 md:gap-4 px-6 md:px-10 py-4 md:py-5 bg-primary text-primary-foreground font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-primary-glow transition-colors duration-500">
                  Iniciar conversa
                  <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </a>
              </div>
              <Editable id={`${PX}.proximos.cta.note`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground text-center block mt-8">
                Resposta em até 24 horas · Leandro & Neandro
              </Editable>
            </div>
          </div>
        </div>
      </section>

      {/* CONDIÇÕES */}
      <section className="relative px-6 md:px-16 lg:px-24 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-border pt-16">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-3">
                <Editable id={`${PX}.cond.eyebrow`} className="eyebrow">Condições gerais</Editable>
              </div>
              <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 min-w-0">
                <Condition id={`${PX}.c1`} label="Prazo total" value="Até 90 dias para escopo integral, divididos em entregas parciais aprovadas." />
                <Condition id={`${PX}.c2`} label="Revisões" value="Duas rodadas de revisão inclusas em cada etapa. Adicionais cobrados por hora técnica." />
                <Condition id={`${PX}.c3`} label="Forma de pagamento" value="PIX, transferência ou cartão. Boleto sob demanda." />
                <Condition id={`${PX}.c4`} label="Validade da proposta" value="30 dias corridos a partir da data desta carta. Após esse prazo, valores podem ser revisados." />
                <Condition id={`${PX}.c5`} label="Acompanhamento de obra" value="Não incluso no escopo padrão. Pode ser contratado à parte por visita ou pacote mensal." />
                <Condition id={`${PX}.c6`} label="Direitos autorais" value="O projeto é de autoria intelectual da NL Arquitetos, conforme Lei nº 9.610/98." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 17 · ENCERRAMENTO */}
      <section id="encerramento" className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-32 overflow-hidden" style={{ backgroundColor: "#1A1816", color: "#E8E4DF" }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-primary/40" />
        <div className="relative max-w-5xl mx-auto w-full">
          <div className="flex justify-center mb-10">
            <img src={LOGO_BRANCA} alt="NL Arquitetos" className="h-20 md:h-28 w-auto object-contain opacity-95" width={280} height={112} />
          </div>
          <span className="font-mono-edit text-[10px] tracking-[0.3em] uppercase block mb-6 text-center" style={{ color: "#8B7355" }}>17 · Encerramento</span>
          <div className="gold-line w-24 mx-auto mb-12" />
          <Editable as="h2" id={`${PX}.encerramento.title`} multiline className="font-display text-5xl md:text-7xl lg:text-8xl text-center leading-[1.05] mb-12 text-balance max-w-5xl mx-auto">
            <span style={{ color: "#E8E4DF" }}>O ambiente que você imagina</span>{" "}
            <em className="not-italic" style={{ color: "#8B7355" }}>já existe.</em>
            <br />
            <span style={{ color: "#E8E4DF" }}>Falta colocar no papel.</span>
          </Editable>
          <Editable id={`${PX}.encerramento.body`} multiline as="p" className="font-display italic text-center max-w-2xl mx-auto mb-24 leading-relaxed text-[clamp(1.125rem,1.4vw,1.5rem)]" style={{ color: "#8B7355" }}>
            Agradecemos seu tempo e a confiança em compartilhar este projeto conosco.
            <br />
            Seguimos à disposição — quando quiser dar o próximo passo, estaremos aqui.
          </Editable>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto border-t" style={{ borderColor: "rgba(139, 115, 85, 0.3)" }}>
            <Contact id={`${PX}.ct1`} label="WhatsApp" value="(12) 99623-5559" />
            <Contact id={`${PX}.ct2`} label="E-mail" value="contato.nlarquitetos@gmail.com" />
            <Contact id={`${PX}.ct3`} label="Instagram" value="@nlarquitetos" />
          </div>
          <div className="mt-24 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left">
            <span className="font-display italic" style={{ color: "rgba(232, 228, 223, 0.6)" }}>"Os interiores como decisão."</span>
            <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] break-words" style={{ color: "rgba(139, 115, 85, 0.8)" }}>NL Arquitetos · 2026</span>
          </div>
        </div>
      </section>

      <PdfExportButtonProposta />
    </main>
  );
};

/* ===== Subcomponents ===== */

const FullBleedBand = ({ src, alt, caption, number, height = "tall", align = "left", objectPosition = "center", imgClassName = "", heightClassName, edgeFadeBottomClassName = "h-32 md:h-48" }: { src: string; alt: string; caption: string; number: string; height?: "short" | "tall"; align?: "left" | "right"; objectPosition?: string; imgClassName?: string; heightClassName?: string; edgeFadeBottomClassName?: string; }) => (
  <section aria-hidden="false" className={`relative w-full ${heightClassName ?? (height === "tall" ? "h-[70vh] md:h-[85vh]" : "h-[55vh] md:h-[65vh]")} overflow-hidden bg-background`}>
    <img src={src} alt={alt} loading="lazy" className={`absolute inset-0 w-full h-full object-cover ${imgClassName}`} style={{ objectPosition }} />
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

const Stat = ({ number, label, id }: { number: string; label: string; id: string; }) => (
  <div>
    <Editable id={`${PX}.stat.${id}.num`} className="font-display text-3xl md:text-4xl text-primary block mb-1">{number}</Editable>
    <Editable id={`${PX}.stat.${id}.lbl`} className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground leading-tight block">{label}</Editable>
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
      <Editable as="h3" id={`${PX}.p.${id}.name`} className="font-display text-xl md:text-2xl text-foreground leading-tight">{name}</Editable>
    </div>
    <div className="pl-5 space-y-0.5">
      <Editable id={`${PX}.p.${id}.role`} className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block">{role}</Editable>
      <Editable id={`${PX}.p.${id}.cau`} className="font-mono text-[9px] tracking-[0.2em] text-primary/60 block">{cau}</Editable>
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

const BenefitCard = ({ t, d, idx }: { t: string; d: string; idx: number; }) => (
  <div className="bg-background p-8 md:p-10 group hover:bg-surface/60 transition-colors">
    <div className="gold-line w-8 mb-6 group-hover:w-16 transition-all duration-700" />
    <Editable as="h3" id={`${PX}.benefit.${idx}.t`} className="font-display text-2xl md:text-3xl text-foreground mb-4 leading-tight">{t}</Editable>
    <Editable id={`${PX}.benefit.${idx}.d`} multiline as="p" className="font-display text-foreground/70 leading-relaxed">{d}</Editable>
  </div>
);

const PaymentTier = ({ id, label, value, sub }: { id: string; label: string; value: string; sub: string }) => (
  <div className="px-8 py-8 text-center">
    <Editable id={`${PX}.${id}.lbl`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/70 block mb-3">{label}</Editable>
    <Editable id={`${PX}.${id}.val`} className="font-display text-4xl md:text-5xl text-foreground block mb-2">{value}</Editable>
    <Editable id={`${PX}.${id}.sub`} className="font-display italic text-sm text-foreground/60 block">{sub}</Editable>
  </div>
);

const DifferentialItem = ({ r, t, d }: { r: string; t: string; d: string }) => (
  <div className="group">
    <div className="flex items-baseline gap-6 mb-4">
      <span className="font-display text-6xl md:text-7xl text-primary/20 leading-none shrink-0 select-none">{r}</span>
      <span className="h-px flex-1 bg-border group-hover:bg-primary/60 transition-colors duration-700" />
    </div>
    <Editable as="h3" id={`${PX}.diff.${r}.t`} className="font-display text-3xl md:text-4xl text-foreground mb-4">{t}</Editable>
    <Editable id={`${PX}.diff.${r}.d`} multiline as="p" className="font-display text-foreground/70 leading-relaxed max-w-md">{d}</Editable>
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
          <span className="w-6 h-px bg-primary/60" />
          {timing}
        </span>
        <Editable as="h3" id={`${PX}.next.${n}.t`} className="font-display text-3xl md:text-4xl text-foreground mb-3 leading-tight block">{t}</Editable>
        <Editable id={`${PX}.next.${n}.d`} multiline as="p" className="font-display text-foreground/70 leading-relaxed text-lg">{d}</Editable>
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
        <Editable id={`${PX}.etapas.${trackId}.num`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">{`Trilha ${number}`}</Editable>
        <Editable as="h3" id={`${PX}.etapas.${trackId}.title`} className="font-display text-2xl md:text-4xl text-foreground leading-tight">{title}</Editable>
      </div>
      <Editable id={`${PX}.etapas.${trackId}.dur`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block">{duration}</Editable>
    </div>
    <div className="relative">
      <div className="absolute left-0 right-0 top-[26px] h-px bg-border hidden md:block" aria-hidden />
      <div className="absolute left-0 top-[26px] h-px bg-primary/40 transition-all duration-700 group-hover/timeline:bg-primary hidden md:block" style={{ right: `${100 / phases.length / 2}%` }} aria-hidden />
      <div className="absolute left-[26px] top-0 bottom-0 w-px bg-border md:hidden" aria-hidden />
      <ol className="relative grid gap-8 md:gap-6 grid-cols-1" style={{ gridTemplateColumns: `repeat(var(--phase-cols, 1), minmax(0, 1fr))` }} ref={(el) => { if (el) { const update = () => el.style.setProperty('--phase-cols', window.innerWidth >= 768 ? String(phases.length) : '1'); update(); window.addEventListener('resize', update); } }}>
        {phases.map((p, i) => (
          <li key={i} className="relative flex md:flex-col items-start gap-4 md:gap-0 group/step">
            <div className={`relative z-10 flex items-center justify-center w-[52px] h-[52px] shrink-0 rounded-full bg-background md:mb-5 transition-all duration-500 group-hover/step:scale-110 ${p.optional ? "border border-dashed border-primary/40 group-hover/step:border-primary group-hover/step:bg-background" : "border border-primary/40 group-hover/step:bg-primary group-hover/step:border-primary"}`}>
              <Editable id={`${PX}.etapas.${trackId}.${i}.n`} className={`font-mono text-[11px] tracking-[0.15em] text-primary transition-colors ${p.optional ? "" : "group-hover/step:text-primary-foreground"}`}>{p.n}</Editable>
            </div>
            <div className="flex-1 min-w-0 md:mt-0">
              {p.optional && (<span className="font-mono text-[9px] uppercase tracking-[0.3em] text-primary/70 mb-1 block">Opcional</span>)}
              <Editable as="h4" id={`${PX}.etapas.${trackId}.${i}.t`} className="font-display text-base md:text-lg text-foreground leading-snug mb-2 md:mt-2 pr-2">{p.t}</Editable>
              <Editable id={`${PX}.etapas.${trackId}.${i}.d`} multiline as="p" className="font-display italic text-[13px] text-foreground/60 leading-relaxed pr-3">{p.d}</Editable>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </div>
);

type ScopeBloco = { id: string; num: string; title: string; note?: string; description?: string; items?: string[]; wide?: boolean; };

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
              <Editable as="h4" id={`${PX}.scope.${trackId}.${bloco.id}.title`} className="font-display text-xl md:text-[1.4rem] leading-tight text-foreground">{bloco.title}</Editable>
            </div>
            {bloco.note && (<Editable id={`${PX}.scope.${trackId}.${bloco.id}.note`} className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary/80 mb-4 -mt-1">{bloco.note}</Editable>)}
            {bloco.description && (<Editable as="p" id={`${PX}.scope.${trackId}.${bloco.id}.description`} className="font-display italic text-[0.95rem] text-foreground/75 leading-relaxed mt-1">{bloco.description}</Editable>)}
            {bloco.items && (
              <ul className={cn("space-y-2 mt-1", bloco.wide && "md:columns-2 md:gap-x-10 md:space-y-0")}>
                {bloco.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group/item md:break-inside-avoid md:mb-2">
                    <span className="mt-[0.55rem] h-px w-3 bg-primary/40 flex-shrink-0 group-hover/item:bg-primary group-hover/item:w-5 transition-all duration-300" />
                    <Editable as="span" id={`${PX}.scope.${trackId}.${bloco.id}.item.${i}`} className="font-display text-[0.95rem] text-foreground/80 leading-snug">{item}</Editable>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
      {hasFootnote && (
        <div className="mt-6 pl-4 border-l-2 border-primary/40">
          <Editable as="p" id={`${PX}.scope.${trackId}.footnote`} className="font-display italic text-[0.9rem] text-foreground/70 leading-relaxed">
            <span className="font-mono not-italic text-primary mr-1">*</span>
            Desenvolvido em parceria com engenheiros especializados. A NL coordena e valida todos os projetos complementares.
          </Editable>
        </div>
      )}
    </div>
  );
};

const ScopeTabs = () => (
  <Tabs value="int" className="w-full">
    <TabsList className="bg-transparent border-b border-border/60 rounded-none p-0 h-auto w-full justify-start gap-8 mb-8">
      <TabsTrigger value="int" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary text-muted-foreground rounded-none px-0 pb-4 font-mono text-[11px] uppercase tracking-[0.3em] border-b-2 border-transparent data-[state=active]:border-primary">Interiores</TabsTrigger>
    </TabsList>
    <TabsContent value="int" className="mt-0">
      <ScopeBlocos data={SCOPE_INT} trackId="int" />
    </TabsContent>
  </Tabs>
);

const PackageCard = ({ id, tier, tagline, price, priceNote, recommended }: { id: string; tier: string; tagline: string; price: string; priceNote: string; recommended?: boolean; }) => (
  <div className={`relative flex flex-col p-10 md:p-12 ${recommended ? "border-2 border-primary bg-background" : "border border-border/60 bg-background/60"}`}>
    {recommended && (
      <div className="absolute -top-3 left-10 bg-primary text-primary-foreground px-4 py-1">
        <Editable id={`${PX}.pkg.${id}.badge`} className="font-mono text-[9px] uppercase tracking-[0.3em]">◆ Mais escolhido</Editable>
      </div>
    )}
    <div className="mb-8">
      <Editable id={`${PX}.pkg.${id}.tier`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80 block mb-4">{tier}</Editable>
      <Editable as="h3" id={`${PX}.pkg.${id}.tagline`} multiline className="font-display text-3xl md:text-4xl text-foreground leading-tight mb-6">{tagline}</Editable>
      <div className="gold-line w-12 mb-6" />
      <Editable id={`${PX}.pkg.${id}.price.note`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-1">{priceNote}</Editable>
      <Editable id={`${PX}.pkg.${id}.price`} className={`font-display text-5xl md:text-6xl leading-none block ${recommended ? "text-primary" : "text-foreground"}`}>{price}</Editable>
    </div>
  </div>
);

const COMPARISON_GROUPS: { group: string; rows: { id: string; label: string; basic: string | boolean; premium: string | boolean }[]; }[] = [
  { group: "Concepção", rows: [
    { id: `${PX}.cmp.conc.1`, label: "Levantamento & Briefing", basic: true, premium: true },
    { id: `${PX}.cmp.conc.2`, label: "Criação do Conceito", basic: true, premium: true },
    { id: `${PX}.cmp.conc.3`, label: "Estudo Preliminar", basic: true, premium: true },
    { id: `${PX}.cmp.conc.4`, label: "Concepção 3D de Alta Fidelidade", basic: false, premium: true },
    { id: `${PX}.cmp.conc.5`, label: "Vídeo 3D 360°", basic: false, premium: true },
  ]},
  { group: "Cadernos Técnicos", rows: [
    { id: `${PX}.cmp.cad.1`, label: "Caderno Geral", basic: true, premium: true },
    { id: `${PX}.cmp.cad.2`, label: "Caderno de Detalhes Construtivos", basic: true, premium: true },
    { id: `${PX}.cmp.cad.3`, label: "Caderno de Ambientes", basic: false, premium: true },
    { id: `${PX}.cmp.cad.4`, label: "Caderno de Esquadrias", basic: false, premium: true },
    { id: `${PX}.cmp.cad.5`, label: "Caderno de Marmoraria", basic: false, premium: true },
    { id: `${PX}.cmp.cad.6`, label: "Caderno de Porcelanataria", basic: false, premium: true },
    { id: `${PX}.cmp.cad.7`, label: "Caderno de Marcenaria", basic: true, premium: true },
  ]},
  { group: "Complementos", rows: [
    { id: `${PX}.cmp.comp.1`, label: "Projeto Legal (condomínio)", basic: "Opcional", premium: "Opcional" },
    { id: `${PX}.cmp.comp.2`, label: "EVF — Viabilidade Financeira", basic: false, premium: "Opcional" },
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
      <Editable as="h3" id={`${PX}.cmp.title`} multiline className="font-display text-3xl md:text-4xl leading-tight text-balance max-w-2xl mx-auto">
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
            <span className="font-display text-sm md:text-xl text-foreground">Executivo</span>
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
                <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary/70">{String(gi + 1).padStart(2, "0")} · {g.group}</span>
              </div>
            </div>
            {g.rows.map((r, ri) => (
              <div key={r.id} className={`grid grid-cols-[1.4fr_1fr_1fr] md:grid-cols-[1.6fr_1fr_1fr] ${ri === g.rows.length - 1 && gi === COMPARISON_GROUPS.length - 1 ? "" : "border-b border-border/40"}`}>
                <div className="px-2 md:px-6 py-3 md:py-4 flex items-center min-w-0">
                  <Editable id={`${r.id}.label`} className="font-display text-[11px] md:text-sm text-foreground/85 leading-snug break-words">{r.label}</Editable>
                </div>
                <div className="px-2 md:px-6 py-3 md:py-4 border-l border-border/40 flex items-center justify-center text-center min-w-0">
                  {typeof r.basic === "string" ? (<Editable id={`${r.id}.basic`} className="font-display text-[11px] md:text-sm text-foreground/75 leading-snug break-words">{r.basic}</Editable>) : (<ComparisonCell value={r.basic} />)}
                </div>
                <div className="px-2 md:px-6 py-3 md:py-4 border-l border-border/40 flex items-center justify-center text-center bg-primary/[0.025] min-w-0">
                  {typeof r.premium === "string" ? (<Editable id={`${r.id}.premium`} className="font-display text-[11px] md:text-sm text-primary leading-snug font-medium break-words">{r.premium}</Editable>) : (<ComparisonCell value={r.premium} />)}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    <Editable id={`${PX}.cmp.footnote`} multiline as="p" className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground text-center mt-6 leading-relaxed">
      Itens opcionais são formalizados via aditivo de contrato conforme necessidade do projeto.
    </Editable>
    <Editable id={`${PX}.cmp.footnote2`} multiline as="p" className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground text-center mt-3 leading-relaxed">
      No Plano Completo, cada fornecedor recebe o caderno específico da sua execução — sem margem para improviso.
    </Editable>
  </div>
);

export default PropostaInt;
