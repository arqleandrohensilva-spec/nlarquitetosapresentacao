import { useState, useRef, useLayoutEffect, useEffect } from "react";
import bandMaterial from "@/assets/band-material.jpg";
import bandBlueprint from "@/assets/band-blueprint.jpg";

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


      {/* Badge "Trilha Comercial" removido conforme solicitado */}



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
            <img src="https://www.dropbox.com/scl/fi/01h024ricdkyg9hmvlolo/nomo-result-1778360736315.png?rlkey=dvkmki1yd2rqxbv6ibjkqe23f&raw=1" alt="Barbearia Cabalera · NL Arquitetos" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={1280} />
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
                Barbearia Cabalera.
              </Editable>
              <Editable id={`${PX}.case.location`} className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-10">
                Arquitetura comercial · NL Arquitetos
              </Editable>
              <div className="gold-line w-16 mb-8" />
              <Editable id={`${PX}.case.body`} multiline as="p" className="font-display text-base md:text-lg leading-relaxed text-foreground/80 mb-10">
                O desafio era criar um ambiente que não fosse apenas uma barbearia, mas um refúgio urbano de experiência. A materialidade bruta, a iluminação cênica e a biofilia foram os pilares para construir um espaço memorável. Cada detalhe foi pensado para aumentar o tempo de permanência e o valor percebido, transformando arquitetura em resultado financeiro direto.
              </Editable>
              <ul className="space-y-3 font-display text-foreground/80 mb-10">
                {[
                  "Branding espacial e identidade visual",
                  "Layout focado em bar experience",
                  "Marcenaria técnica de alta performance",
                  "Projeto luminotécnico de atmosfera",
                  "Materiais brutos e biofílicos",
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
                  <img src="https://www.dropbox.com/scl/fi/5ucn92oobs1f9ly2uf3ee/Gemini_Generated_Image_dueznydueznyduez.png?rlkey=i8bjcbqgocsj6bh57a5o7bupx&raw=1" alt="Projeto comercial · NL Arquitetos" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" loading="lazy" />
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
                  <img src="https://www.dropbox.com/scl/fi/325qfdp842e58tb1bw236/kingai-enhance_photo-8fa7e5f6-4k.png?rlkey=a34uc8i9mdaspp1arpl5529xx&raw=1" alt="Ambiente comercial · NL Arquitetos" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" loading="lazy" />
                </div>
              </a>
              <figcaption className="mt-4 flex items-baseline justify-between">
                <Editable id={`${PX}.port.cap2`} className="font-display italic text-foreground/80">Iluminação cênica · Atmosfera que retém</Editable>
                <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">02</span>
              </figcaption>
            </figure>
            <figure className="col-span-6 md:col-span-3 group">
              <a href="https://www.dropbox.com/scl/fi/tu93bcv9kxxi0naemt3kq/kingai-interior-625d1904-2k.png?rlkey=agwmjg7a0udal1rqvukpwhpka&raw=1" target="_blank" rel="noreferrer" className="block overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src="https://www.dropbox.com/scl/fi/tu93bcv9kxxi0naemt3kq/kingai-interior-625d1904-2k.png?rlkey=agwmjg7a0udal1rqvukpwhpka&raw=1" alt="Detalhe comercial · NL Arquitetos" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" loading="lazy" />
                </div>
              </a>
              <figcaption className="mt-4">
                <Editable id={`${PX}.port.cap3`} className="font-display italic text-foreground/80 text-sm">Materialidade · Decisão antes da obra</Editable>
                <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mt-1">03</div>
              </figcaption>
            </figure>
            <figure className="col-span-6 md:col-span-4 group">
              <a href="https://www.dropbox.com/scl/fi/yrqz07ae3bz4ktd0rzb0s/kingai-interior-56a9f07d-2k.png?rlkey=huib18pcy7b0d76ihm3d72xse&raw=1" target="_blank" rel="noreferrer" className="block overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src="https://www.dropbox.com/scl/fi/yrqz07ae3bz4ktd0rzb0s/kingai-interior-56a9f07d-2k.png?rlkey=huib18pcy7b0d76ihm3d72xse&raw=1" alt="Detalhe acabamento · NL Arquitetos" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" loading="lazy" />
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
            <Editable id={`${PX}.etapas.tag`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block">Cinco fases · ~60 dias</Editable>
          </div>
          <div className="grid grid-cols-12 gap-8 mb-16">
            <Editable as="h2" id={`${PX}.etapas.title`} multiline className="col-span-12 lg:col-span-7 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.0] text-balance">
              Do conceito<br /><em className="text-primary not-italic">à abertura.</em>
            </Editable>
            <Editable id={`${PX}.etapas.intro`} multiline as="p" className="col-span-12 lg:col-span-5 lg:pt-4 font-display text-lg text-foreground/70 leading-relaxed">
              Cinco cadernos coordenados em uma única trilha. Cada decisão tomada na ordem certa — para que o seu ponto abra no prazo, sem surpresa de custo.
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
              Cinco cadernos. <em className="text-primary not-italic">Um só método.</em>
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
          </div>
        </div>
      </section>

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
              { id: "decisao", num: "I", kicker: "Decisão · Antes da Obra", body: "Cada detalhe resolvido antes de o ponto parar para reforma. Prazo previsível, custo controlado, resultado certo.", quote: "Ponto parado é custo. Decidimos antes." },
              { id: "identidade", num: "II", kicker: "Identidade · Como estratégia", body: "O espaço é a extensão visual da sua marca. Materialidade, iluminação e fluxo alinhados ao que o negócio precisa comunicar.", quote: "O espaço vende antes de você falar." },
              { id: "processo", num: "III", kicker: "Processo · Conduzido", body: "Cada etapa tem objetivo claro e critério de avanço. A NL conduz — você aprova com segurança e foca no negócio.", quote: "Você não precisa entender de obra. Precisa entender o que aprova." },
              { id: "resultado", num: "IV", kicker: "Resultado · Previsível", body: "Obra sem improviso, sem surpresa de custo. O espaço que abre é o espaço que foi decidido — sem diferença.", quote: "A NL não projeta para impressionar. Projeta para funcionar." },
            ].map((p) => (
              <article key={p.id} className="flex gap-5 md:gap-6">
                <span className="font-display italic text-4xl md:text-5xl text-primary/70 leading-none shrink-0 w-10">{p.num}</span>
                <div className="flex-1 border-l border-border pl-5 md:pl-6">
                  <Editable id={`${PX}.pilares.${p.id}.kicker`} className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground block mb-2">{p.kicker}</Editable>
                  <Editable as="p" id={`${PX}.pilares.${p.id}.body`} multiline className="font-display text-foreground/75 text-lg leading-relaxed mb-3">{p.body}</Editable>
                  <Editable as="p" id={`${PX}.pilares.${p.id}.quote`} multiline className="font-display italic text-xl md:text-2xl text-primary leading-snug">"{p.quote}"</Editable>
                </div>
              </article>
            ))}
          </div>
          <Editable as="p" id={`${PX}.pilares.closing`} className="mt-12 md:mt-16 pt-6 border-t border-border/60 font-display italic text-xl md:text-2xl text-foreground/75 text-center">
            O espaço como decisão estratégica.
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
                <div aria-hidden className="font-display leading-[0.85] select-none" style={{ fontSize: "clamp(8rem, 16vw, 16rem)", color: "#8B7355", opacity: 0.18, letterSpacing: "-0.05em" }}>60</div>
                <div className="font-mono-edit text-[10px] tracking-[0.35em] uppercase mt-2" style={{ color: "#8B7355" }}>Dias totais</div>
              </div>
            </div>
          </div>
          <div className="border-t" style={{ borderColor: "rgba(139, 115, 85, 0.3)" }}>
            {(() => {
              const stages = [
                { num: "01", name: "Briefing & Diagnóstico", days: 7 },
                { num: "02", name: "Conceito e Identidade", days: 14 },
                { num: "03", name: "Concepção 3D", days: 14 },
                { num: "04", name: "Projeto Executivo", days: 20 },
                { num: "05", name: "Revisões e Entrega", days: 5 },
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
                  60 <em className="not-italic" style={{ color: "#8B7355" }}>dias</em>
                </span>
              </Editable>
            </div>
            <div className="col-span-12 md:col-span-7 md:pl-12 md:border-l flex items-end" style={{ borderColor: "rgba(139, 115, 85, 0.3)" }}>
              <Editable id={`${PX}.crono.note`} multiline as="p" className="font-display italic leading-relaxed text-primary text-[clamp(1rem,1.25vw,1.2rem)]">
                "Cronograma estimado · Pode variar conforme escopo, aprovações junto ao condomínio ou prefeitura e disponibilidade do cliente nas etapas de aprovação."
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
                O que você <em className="text-primary not-italic">ganha</em> além das pranchas.
              </Editable>
            </div>
          </div>
          <div className="mb-16 md:mb-20 text-center">
            <Editable id={`${PX}.beneficios.intro`} as="p" className="font-display italic text-balance">
              <span style={{ color: "#8B7355", fontSize: "clamp(1.75rem, 3.2vw, 3rem)", lineHeight: 1.15 }}>
                Ponto parado é custo. Decidimos antes.
              </span>
            </Editable>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {[
              { t: "Identidade que vende", d: "O espaço comunica a marca antes de qualquer funcionário falar. Atmosfera, materialidade e iluminação alinhados ao seu posicionamento." },
              { t: "Fluxo que funciona", d: "Setorização e circulação pensadas para o atendimento real — mais eficiência, menos tempo perdido, mais clientes por dia." },
              { t: "Prazo previsível", d: "Cada etapa definida antes da obra. Ponto parado é custo — o projeto elimina o improviso que gera atraso." },
              { t: "Orçamento controlado", d: "Quantitativos precisos de marcenaria, revestimentos e instalações permitem orçamentos firmes com fornecedores." },
              { t: "Espaço que retém", d: "O ambiente que faz o cliente voltar, fotografar e indicar. Experiência projetada, não improvisada." },
              { t: "Valorização do ponto", d: "Interiores bem documentados e assinados agregam valor ao negócio — e facilitam locação ou venda futura do espaço." },
            ].map((b, i) => (
              <BenefitCard key={i} {...b} idx={i} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Editable id={`${PX}.beneficios.fechamento`} as="p" className="font-display italic">
              <span style={{ color: "#8B7355", fontSize: "clamp(1.1rem, 1.5vw, 1.5rem)" }}>
                "O espaço comercial não é decoração. É o primeiro vendedor do seu negócio."
              </span>
            </Editable>
          </div>
        </div>
      </section>

      

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
              O valor é calculado com base no escopo e na complexidade do espaço. Não é preço de tabela — é o custo real de eliminar o improviso antes de a obra começar.
            </Editable>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PackageCard
              id="basic"
              tier="Plano Executivo"
              tagline="Interiores Comercial"
              price={params.valor_executivo !== 'Sob consulta' ? `R$ ${Number(params.valor_executivo).toLocaleString('pt-BR')}` : 'Sob consulta'}
              priceNote={params.valor_executivo !== 'Sob consulta' ? 'Valor baseado no escopo contratado' : 'Sob consulta · conforme escopo'}
            />
            <PackageCard
              id="premium"
              tier="Plano Completo"
              tagline="Interiores + Identidade do Espaço"
              price={params.valor_completo !== 'Sob consulta' ? `R$ ${Number(params.valor_completo).toLocaleString('pt-BR')}` : 'Sob consulta'}
              priceNote={params.valor_completo !== 'Sob consulta' ? 'Valor baseado no escopo contratado' : 'Sob consulta · conforme escopo'}
              recommended
            />
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
              <PaymentTier id="pay2" label="Conceito aprovado" value="40%" sub="Na aprovação do conceito" />
              <PaymentTier id="pay3" label="Executivo" value="30%" sub="Na entrega do executivo" />
            </div>
          </div>
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
              { r: "I", t: "Entendemos negócio antes de desenhar", d: "Não começamos pelo render bonito. Começamos pela missão do seu negócio, pelo cliente ideal e pelo que o espaço precisa comunicar. O projeto emerge desse entendimento." },
              { r: "II", t: "Documentação que vai para a obra", d: "Os cadernos técnicos da NL são feitos para o construtor executar. Cada prancha tem o nível de detalhe necessário para que nenhuma decisão seja tomada no canteiro." },
              { r: "III", t: "Prazo real, não estimativa otimista", d: "Cada etapa tem objetivo claro, entregável definido e critério de aprovação. Você sabe sempre em que momento está — e quando o ponto vai estar pronto." },
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
              { id: "01", title: "Dados fornecidos pelo cliente", intro: "Para o desenvolvimento do projeto será fundamental que o cliente forneça:", items: ["Plantas atualizadas do imóvel (arquitetônica, elétrica e hidráulica, se houver)", "Documentação de aprovações anteriores ou do condomínio", "Referências visuais e identidade da marca"] },
              { id: "02", title: "Responsabilidade do cliente", intro: "A contratação dos itens abaixo é responsabilidade do cliente:", items: ["Levantamento métrico do imóvel (se não houver planta atualizada)", "ART/RRT dos projetos complementares", "Aprovações junto à prefeitura ou condomínio comercial"] },
              { id: "03", title: "Serviços não inclusos", intro: null as string | null, items: ["Responsabilidade técnica pela execução da obra", "Gestão de obra e contratação de mão de obra", "Compra de materiais e insumos", "Identidade visual da marca (logotipo, comunicação)"] },
              { id: "04", title: "Serviços inclusos", intro: null as string | null, items: [] as string[], groups: [
                { label: "Plano Executivo", items: ["Orientação na entrega dos cadernos técnicos", "Suporte técnico por 60 dias após entrega"] },
                { label: "Plano Completo", items: ["Tudo do Executivo", "3 visitas técnicas à obra", "Curadoria de materiais e fornecedores"] },
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

      <FullBleedBand src={bandMaterial} alt="Materialidade e precisão" number="Intermezzo · 02" caption="Travertino, nogueira, luz. A matéria-prima de uma decision bem tomada." align="left" height="short" />

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
                { n: "03", timing: "Em até 5 dias", t: "Reunião de imersão", d: "Encontro de até 2 horas. Entendemos a missão do negócio, o cliente ideal e o que o espaço precisa comunicar." },
                { n: "04", timing: "Em até 7 dias", t: "Início do conceito", d: "Em até 7 dias após a imersão, o primeiro conceito do espaço está em desenvolvimento." },
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

      {/* 17 · CONDIÇÕES */}
      <section id="condicoes" className="relative px-6 md:px-16 lg:px-24 py-32">

        <div className="max-w-7xl mx-auto">
          <div className="border-t border-border pt-16">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-3">
                <Editable id={`${PX}.cond.eyebrow`} className="eyebrow">Condições gerais</Editable>
              </div>
              <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 min-w-0">
                <Condition id={`${PX}.c1`} label="Prazo total" value="Até 60 dias para escopo integral, divididos em entregas parciais aprovadas." />
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
          <span className="font-mono-edit text-[10px] tracking-[0.3em] uppercase block mb-6 text-center" style={{ color: "#8B7355" }}>18 · Encerramento</span>
          <div className="gold-line w-24 mx-auto mb-12" />
          <Editable as="h2" id={`${PX}.encerramento.title`} multiline className="font-display text-5xl md:text-7xl lg:text-8xl text-center leading-[1.05] mb-12 text-balance max-w-5xl mx-auto">
            <span style={{ color: "#E8E4DF" }}>O espaço que atrai</span>{" "}
            <em className="not-italic" style={{ color: "#8B7355" }}>o cliente certo</em>
            <br />
            <span style={{ color: "#E8E4DF" }}>já existe. Falta colocar no papel.</span>
          </Editable>
          <Editable id={`${PX}.encerramento.body`} multiline as="p" className="font-display italic text-center max-w-2xl mx-auto mb-24 leading-relaxed text-[clamp(1.125rem,1.4vw,1.5rem)]" style={{ color: "#8B7355" }}>
            Agradecemos seu tempo e a confiança em compartilhar este projeto conosco.
            <br />
            Quando quiser dar o próximo passo, estaremos aqui.
          </Editable>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto border-t" style={{ borderColor: "rgba(139, 115, 85, 0.3)" }}>
            <Contact id={`${PX}.ct1`} label="WhatsApp" value="(12) 99623-5559" />
            <Contact id={`${PX}.ct2`} label="E-mail" value="contato.nlarquitetos@gmail.com" />
            <Contact id={`${PX}.ct3`} label="Instagram" value="@nlarquitetos" />
          </div>
          <div className="mt-24 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left">
            <span className="font-display italic" style={{ color: "rgba(232, 228, 223, 0.6)" }}>"O espaço como decisão estratégica."</span>
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

const BenefitCard = ({ t, d, idx, impact }: { t: string; d: string; idx: number; impact?: string }) => (
  <div className="bg-background p-8 md:p-10 group hover:bg-surface/60 transition-colors">
    {impact && (
      <Editable id={`proposta-com.benefit.${idx}.impact`} className="font-display block leading-none mb-4">
        <span style={{ color: "#8B7355", fontSize: "clamp(2.5rem, 3.6vw, 3.5rem)" }}>{impact}</span>
      </Editable>
    )}
    <div className="gold-line w-8 mb-6 group-hover:w-16 transition-all duration-700" />
    <Editable as="h3" id={`proposta-com.benefit.${idx}.t`} className="font-display text-2xl md:text-3xl text-foreground mb-4 leading-tight">{t}</Editable>
    <Editable id={`proposta-com.benefit.${idx}.d`} multiline as="p" className="font-display text-foreground/70 leading-relaxed">{d}</Editable>
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
    <Editable as="h3" id={`proposta-com.diff.${r}.t`} className="font-display text-3xl md:text-4xl text-foreground mb-4">{t}</Editable>
    <Editable id={`proposta-com.diff.${r}.d`} multiline as="p" className="font-display text-foreground/70 leading-relaxed max-w-md">{d}</Editable>
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
        <Editable as="h3" id={`proposta-com.next.${n}.t`} className="font-display text-3xl md:text-4xl text-foreground mb-3 leading-tight block">{t}</Editable>
        <Editable id={`proposta-com.next.${n}.d`} multiline as="p" className="font-display text-foreground/70 leading-relaxed text-lg">{d}</Editable>
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

type ScopeBloco = { id: string; num: string; title: string; note?: string; description?: string; items?: string[]; wide?: boolean; columns1?: boolean; hasPlanoCompletoBadge?: boolean; };


const SCOPE_COM: ScopeBloco[] = [
  { id: "fluxo", num: "I", title: "Caderno de Fluxo de Atendimento", wide: true, columns1: true, items: ["Mapa de jornada do cliente — da entrada à saída", "Setorização funcional: recepção, atendimento, espera, caixa, estoque e staff", "Circulação otimizada — fluxo de clientes separado do fluxo da equipe", "Posicionamento estratégico de equipamentos e mobiliário operacional", "Capacidade máxima de atendimento simultâneo por zona", "Planta baixa de layout com função de cada metro quadrado definida"] },
  { id: "caderno-geral", num: "II", title: "Caderno Geral", wide: true, items: ["Planta baixa construtiva", "Planta baixa demolir / construir", "Paginação de piso", "Mapa de revestimentos", "Planta de forro", "Luminotécnico", "Instalações elétricas e ar-condicionado *"] },
  
  { id: "detalhes", num: "III", title: "Caderno de Detalhes Construtivos", description: "Graficação de todos os detalhes necessários para execução conforme complexidade do projeto." },
  { id: "marcenaria", num: "IV", title: "Caderno de Marcenaria", description: "Detalhamento completo de todo mobiliário fabricado sob medida — balcões, estantes, painéis e mobiliário operacional." },
  { id: "memorial", num: "V", title: "Memorial Descritivo", description: "Componentes identificados, localizados e quantificados — base para orçamento firme com fornecedores e executores." },
];


const ScopeBlocos = ({ data, trackId }: { data: ScopeBloco[]; trackId: string }) => {
  const hasFootnote = data.some((b) => b.items?.some((i) => i.includes("*")) || (b.description?.includes("*")));
  return (
    <div>
      <div className="grid grid-cols-12 gap-px bg-border border border-border">
        {data.map((bloco) => (
          <article key={bloco.id} className={cn("bg-background p-7 md:p-8 flex flex-col col-span-12", bloco.wide ? "md:col-span-12" : "md:col-span-6")}>
            <div className="flex flex-col mb-5">
              {bloco.hasPlanoCompletoBadge && (
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-primary/80 mb-2">Plano Completo</span>
              )}
              <div className="flex items-baseline gap-3">
                <span className="font-display italic text-2xl text-primary/60">{bloco.num}</span>
                <Editable as="h4" id={`proposta-com.scope.${trackId}.${bloco.id}.title`} className="font-display text-xl md:text-[1.4rem] leading-tight text-foreground">{bloco.title}</Editable>
              </div>
            </div>
            {bloco.note && <Editable id={`proposta-com.scope.${trackId}.${bloco.id}.note`} className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary/80 mb-4 -mt-1">{bloco.note}</Editable>}
            {bloco.description && <Editable as="p" id={`proposta-com.scope.${trackId}.${bloco.id}.description`} className="font-display italic text-[0.95rem] text-foreground/75 leading-relaxed mt-1">{bloco.description}</Editable>}
            {bloco.items && (
              <ul className={cn("space-y-2 mt-1", bloco.wide && !bloco.columns1 && "md:columns-2 md:gap-x-10 md:space-y-0", bloco.columns1 && "md:columns-1")}>
                {bloco.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group/item md:break-inside-avoid md:mb-2">
                    <span className="mt-[0.55rem] h-px w-3 bg-primary/40 flex-shrink-0 group-hover/item:bg-primary group-hover/item:w-5 transition-all duration-300" />
                    <Editable as="span" id={`proposta-com.scope.${trackId}.${bloco.id}.item.${i}`} className="font-display text-[0.95rem] text-foreground/80 leading-snug">{item}</Editable>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
      {hasFootnote && (
        <div className="mt-6 pl-4 border-l-2 border-primary/40">
          <Editable as="p" id={`proposta-com.scope.${trackId}.footnote`} className="font-display italic text-[0.9rem] text-foreground/70 leading-relaxed">
            <span className="font-mono not-italic text-primary mr-1">*</span>
            Desenvolvido em parceria com engenheiros especializados. A NL coordena e valida todos os projetos complementares.
          </Editable>
        </div>
      )}
    </div>
  );
};

const ScopeTabs = () => {
  return (
    <div className="w-full">
      <div className="bg-transparent border-b border-border/60 rounded-none p-0 h-auto w-full flex justify-start gap-8 mb-8">
        <div className="text-primary rounded-none px-0 pb-4 font-mono text-[11px] uppercase tracking-[0.3em] border-b-2 border-primary">
          Interiores Comercial
        </div>
      </div>
      <div className="mt-0">
        <ScopeBlocos data={SCOPE_COM} trackId="com" />
      </div>
    </div>
  );
};


const PackageCard = ({ id, tier, tagline, price, priceNote, cta, ctaHref, recommended }: { id: string; tier: string; tagline: string; price: string; priceNote: string; cta?: string; ctaHref?: string; recommended?: boolean; }) => (
  <div className={`relative flex flex-col p-10 md:p-12 ${recommended ? "border-2 border-primary bg-background" : "border border-border/60 bg-background/60"}`}>
    {recommended && (
      <div className="absolute -top-3 left-10 bg-primary text-primary-foreground px-4 py-1">
        <Editable id={`proposta-com.pkg.${id}.badge`} className="font-mono text-[9px] uppercase tracking-[0.3em]">◆ Mais escolhido</Editable>
      </div>
    )}
    <div className="mb-8">
      <Editable id={`proposta-com.pkg.${id}.tier`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80 block mb-4">{tier}</Editable>
      <Editable as="h3" id={`proposta-com.pkg.${id}.tagline`} multiline className="font-display text-3xl md:text-4xl text-foreground leading-tight mb-6">{tagline}</Editable>
      <div className="gold-line w-12 mb-6" />
      <Editable id={`proposta-com.pkg.${id}.price.note`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-1">{priceNote}</Editable>
      <Editable id={`proposta-com.pkg.${id}.price`} className={`font-display text-5xl md:text-6xl leading-none block ${recommended ? "text-primary" : "text-foreground"}`}>{price}</Editable>
    </div>
    {cta && ctaHref && (
      <a href={ctaHref} target="_blank" rel="noreferrer" className={`group inline-flex items-center justify-center gap-4 px-8 py-4 font-mono text-xs uppercase tracking-[0.3em] transition-colors duration-500 self-stretch ${recommended ? "bg-primary text-primary-foreground hover:bg-primary-glow" : "border border-foreground/30 text-foreground hover:border-primary hover:text-primary"}`}>
        <Editable id={`proposta-com.pkg.${id}.cta`} className="inline-block">{cta}</Editable>
        <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
      </a>
    )}
  </div>
);

const COMPARISON_GROUPS: { group: string; rows: { id: string; label: string; basic: string | boolean; premium: string | boolean }[]; }[] = [
  { group: "Estratégia e conceito", rows: [
    { id: `${PX}.cmp.est.1`, label: "Briefing & Diagnóstico do negócio", basic: true, premium: true },
    { id: `${PX}.cmp.est.2`, label: "Conceito e identidade — verbal e visual", basic: false, premium: true },
    { id: `${PX}.cmp.est.3`, label: "Moodboard executivo", basic: false, premium: true },
    { id: `${PX}.cmp.est.4`, label: "Atmosfera por zona de atendimento", basic: false, premium: true },
    { id: `${PX}.cmp.est.5`, label: "Concepção 3D de Alta Fidelidade", basic: true, premium: true },
    { id: `${PX}.cmp.est.6`, label: "Vídeo 3D 360°", basic: false, premium: true },
  ]},
  { group: "Fluxo e funcionalidade", rows: [
    { id: `${PX}.cmp.flu.1`, label: "Caderno de Fluxo de Atendimento", basic: true, premium: true },
    { id: `${PX}.cmp.flu.2`, label: "Setorização funcional completa", basic: true, premium: true },
    { id: `${PX}.cmp.flu.3`, label: "Capacidade máxima de atendimento", basic: true, premium: true },
  ]},
  { group: "Cadernos técnicos", rows: [
    { id: `${PX}.cmp.cad.1`, label: "Caderno Geral + Luminotécnico", basic: true, premium: true },
    { id: `${PX}.cmp.cad.2`, label: "Caderno de Detalhes Construtivos", basic: true, premium: true },
    { id: `${PX}.cmp.cad.3`, label: "Caderno de Marcenaria", basic: true, premium: true },
    { id: `${PX}.cmp.cad.4`, label: "Memorial Descritivo", basic: true, premium: true },
    
  ]},
  { group: "Complementos", rows: [
    
    { id: `${PX}.cmp.comp.2`, label: "EVF — Viabilidade Financeira", basic: false, premium: "Opcional" },
    { id: `${PX}.cmp.comp.3`, label: "Acompanhamento de obra", basic: false, premium: "Opcional" },
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
      <Editable as="h3" id="proposta-com.cmp.title" multiline className="font-display text-3xl md:text-4xl leading-tight text-balance max-w-2xl mx-auto">
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
    <Editable id="proposta-com.cmp.footnote" multiline as="p" className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground text-center mt-6 leading-relaxed">
      Pacotes podem ser personalizados conforme a complexidade do projeto.
    </Editable>
    <Editable id="proposta-com.cmp.footnote2" multiline as="p" className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground text-center mt-3 leading-relaxed">
      Itens opcionais são formalizados via aditivo de contrato conforme necessidade do projeto.
    </Editable>
    <Editable id="proposta-com.cmp.footnote3" multiline as="p" className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground text-center mt-3 leading-relaxed">
      No Plano Completo, cada fornecedor recebe o caderno específico da sua execução — sem margem para improviso.
    </Editable>
  </div>
);

export default PropostaComercial;
