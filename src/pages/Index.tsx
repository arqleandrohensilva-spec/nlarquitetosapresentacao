import { useState, useRef, useLayoutEffect } from "react";
import bandMaterial from "@/assets/band-material.jpg";
import bandInterior from "@/assets/band-interior.jpg";
import bandBlueprint from "@/assets/band-blueprint.jpg";
import bandIntermezzo02 from "@/assets/band-intermezzo-02.jpg";
import Editable from "@/components/Editable";
import SectionNav from "@/components/SectionNav";
import PdfExportButton from "@/components/PdfExportButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import caseCasaCostas from "@/assets/case-casa-costas.jpg";
import interiorLiving from "@/assets/interior-living.jpg";
import portfolioStair from "@/assets/portfolio-stair.jpg";
import portfolioKitchen from "@/assets/portfolio-kitchen.jpg";
import portfolioBedroom from "@/assets/portfolio-bedroom.jpg";
import portfolioFacade from "@/assets/portfolio-facade.jpg";

import scopeMaterials from "@/assets/scope-materials.jpg";
const LOGO_BRANCA = "/logo-branca.png";

const Index = () => {
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <SectionNav />

      {/* ============================================================
          01 · CAPA — CORRIGIDA
          ============================================================ */}
      <section id="capa" className="relative min-h-screen flex flex-col justify-end px-6 md:px-16 lg:px-24 py-20">
        <img
          src="https://www.dropbox.com/scl/fi/h4zgd1j7vbpy7vnp8nc93/Capa-Apresenta-o.jpg?rlkey=42sutzf60yam0hhmjvyrvfwym&raw=1"
          alt="NL Arquitetos · monograma esculpido com luz dourada"
          className="absolute inset-0 w-full h-full object-cover opacity-90 contrast-110 saturate-125"
          width={1920}
          height={1280}
        />
        {/* Gradient escurece apenas a base, preservando o brilho dourado no topo/centro */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/95" />
        {/* Vignette suave para profundidade editorial */}
        <div className="absolute inset-0 vignette opacity-60" />

        <div className="relative z-10 max-w-4xl fade-up">
          <Editable id="capa.eyebrow" className="eyebrow mb-8 inline-block">
            Carta Proposta · Confidencial
          </Editable>

          <Editable
            as="h1"
            id="capa.title"
            multiline
            className="font-display text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.95] text-foreground mb-8 text-balance"
          >
            A decisão tomada
            <br />
            <em className="text-primary not-italic font-light">antes</em> da obra.
          </Editable>

          <div className="gold-line w-32 mb-8" />

          <Editable
            id="capa.subtitle"
            multiline
            className="font-display italic text-xl md:text-2xl text-foreground/70 max-w-xl block"
          >
            Projeto executivo com compatibilização técnica e validação antecipada — para que cada centímetro seja
            decidido no papel, não no canteiro.
          </Editable>

          <div className="mt-12 flex items-center gap-4 text-muted-foreground">
            <span className="h-px w-12 bg-primary/40" />
            <Editable id="capa.validity" className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80">
              Validade · 30 dias corridos
            </Editable>
          </div>
        </div>

        <div className="relative z-10 mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4 text-muted-foreground">
          <div className="flex items-center gap-3 md:gap-4 flex-wrap">
            <Editable id="capa.client" className="font-mono text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase text-primary/80 break-words">
              Cliente · [Nome do Cliente]
            </Editable>
          </div>
          <Editable id="capa.date" className="font-mono text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase break-words">
            São José dos Campos · 2025
          </Editable>
        </div>
      </section>

      {/* ============================================================
    02 · MANIFESTO
    ============================================================ */}
      <section id="manifesto" className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-32">
        <div className="grid grid-cols-12 gap-8 w-full max-w-7xl mx-auto">
          <div className="col-span-12 md:col-span-3">
            <span className="number-marker block mb-2">02</span>
            <Editable id="manifesto.eyebrow" className="eyebrow">
              Manifesto
            </Editable>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Editable
              as="h2"
              id="manifesto.title"
              multiline
              className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-16 text-balance"
            >
              Antes de desenhar, <em className="text-primary not-italic">escutamos.</em>
              <br />
              Antes de construir, <em className="text-primary not-italic">decidimos.</em>
            </Editable>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
              <Editable
                id="manifesto.p1"
                multiline
                as="p"
                className="font-display text-lg md:text-xl leading-relaxed text-foreground/80"
              >
                A NL não começa pelo desenho. Começa pela escuta — entendendo o terreno, a família, o modo de viver. Só
                depois o primeiro traço aparece. E quando aparece, já foi validado.
              </Editable>
              <Editable
                id="manifesto.p2"
                multiline
                as="p"
                className="font-display text-lg md:text-xl leading-relaxed text-foreground/80"
              >
                Cada decisão tomada em projeto evita uma decisão custosa na obra. Não é opinião — é lógica construtiva.
                Quando você decide no canteiro, o material já foi comprado e o erro já virou custo.
              </Editable>
            </div>
            <div className="mt-20 pl-8 border-l border-primary/40 max-w-2xl">
              <Editable
                id="manifesto.quote"
                multiline
                as="p"
                className="font-display italic text-2xl md:text-3xl text-primary/90 leading-snug"
              >
                "Beleza sem método é apenas decoração. Arquitetura é a decisão tomada antes do primeiro traço."
              </Editable>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          03 · APRESENTAÇÃO VISUAL (editorial)
          ============================================================ */}
      <section id="apresentacao" className="relative min-h-screen px-6 md:px-16 lg:px-24 py-16 lg:py-20 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-baseline justify-between mb-8 lg:mb-10 border-b border-border/60 pb-4">
            <div className="flex items-baseline gap-6">
              <span className="number-marker">03</span>
              <Editable id="apresentacao.eyebrow" className="eyebrow">
                Quem conduz
              </Editable>
            </div>
            <Editable
              id="apresentacao.tag"
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block"
            >
              Dois arquitetos · Um método
            </Editable>
          </div>

          <div className="grid grid-cols-12 gap-x-8 gap-y-10 items-start">
            <div className="col-span-12 lg:col-span-6">
              <Editable
                as="h2"
                id="apresentacao.title"
                multiline
                className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.0] text-balance mb-6"
              >
                A NL não é definida por quem assina —<br />
                <em className="text-primary not-italic">é definida pelo processo.</em>
              </Editable>

              <Editable
                id="apresentacao.body"
                multiline
                as="p"
                className="font-display text-base lg:text-lg leading-relaxed text-foreground/75 max-w-xl"
              >
                Fundada por Leandro e Neandro, a NL une visão estratégica e disciplina executiva em um único método.
                Transformamos o desejo do cliente em projeto executivo sem perdas — de conceito, de qualidade ou de
                controle.
              </Editable>

              <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg">
                <Stat number="+50" label="Projetos entregues" id="stat1" />
                <Stat number="+8" label="Anos de mercado" id="stat2" />
                <Stat number="100%" label="Compatibilizados" id="stat3" />
              </div>
            </div>

            <aside className="col-span-12 lg:col-span-6 lg:pl-10 lg:border-l border-border/60">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <PartnerCard
                  id="leandro"
                  name="Leandro Henrique"
                  role="Co-Fundador · Arquiteto"
                  cau="CAU A252250-0"
                  image="https://www.dropbox.com/scl/fi/uydr0i2jkh4eq2semj7ey/Leandro.png?rlkey=1784s67wn6c6hjdma6wkgy91a&raw=1"
                />
                <PartnerCard
                  id="neandro"
                  name="Neandro Jacque"
                  role="Co-Fundador · Arquiteto"
                  cau="CAU A264629-3"
                  image="https://www.dropbox.com/scl/fi/6060a867ejklropxdqju3/Neandro.png?rlkey=3z4ynhzr1lq6treoni9h1fqyr&raw=1"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ============================================================
          04 · DIAGNÓSTICO — PREPARADO PARA O CLIENTE
          ============================================================ */}
      <section
        id="diagnostico"
        className="relative px-6 md:px-16 lg:px-24 py-28 lg:py-32"
        style={{ backgroundColor: "#1A1816", color: "#E8E4DF" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Top marker line */}
          <div
            className="flex items-baseline justify-between mb-14 lg:mb-20 pb-4 border-b"
            style={{ borderColor: "rgba(139, 115, 85, 0.35)" }}
          >
            <div className="flex items-baseline gap-6">
              <span
                className="font-mono-edit text-[10px] tracking-[0.3em]"
                style={{ color: "rgba(232, 228, 223, 0.55)" }}
              >
                04
              </span>
              <Editable
                id="diagnostico.eyebrow"
                className="font-mono-edit text-[10px] uppercase tracking-[0.3em]"
                style={{ color: "#8B7355", fontFamily: '"Courier New", monospace' }}
              >
                Diagnóstico · Preparado para
              </Editable>
            </div>
            <Editable
              id="diagnostico.tag"
              className="font-mono-edit text-[10px] uppercase tracking-[0.3em] hidden md:block"
              style={{ color: "rgba(232, 228, 223, 0.55)" }}
            >
              Resposta · não catálogo
            </Editable>
          </div>

          <div className="grid grid-cols-12 gap-x-12 gap-y-12 items-start">
            {/* LEFT — title + intro */}
            <div className="col-span-12 lg:col-span-5">
              <Editable
                as="h2"
                id="diagnostico.title"
                multiline
                className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.0] text-balance mb-8"
                style={{ color: "#E8E4DF" }}
              >
                Esta proposta foi <em className="not-italic" style={{ color: "#8B7355" }}>construída para você.</em>
              </Editable>

              <div
                className="h-px w-16 mb-8"
                style={{ backgroundColor: "#8B7355" }}
              />

              <Editable
                as="p"
                id="diagnostico.subtitle"
                multiline
                className="font-display italic text-lg md:text-xl leading-relaxed max-w-md"
                style={{ color: "rgba(232, 228, 223, 0.78)" }}
              >
                Cada seção deste documento foi estruturada com base no que você nos contou.
                O que está aqui não é um catálogo — é uma resposta.
              </Editable>

              {/* Mobile divider between blocks */}
              <div
                className="lg:hidden mt-12 h-px w-full"
                style={{ backgroundColor: "rgba(139, 115, 85, 0.4)" }}
              />
            </div>

            {/* RIGHT — fields grid 2x3 */}
            <div className="col-span-12 lg:col-span-7 lg:pl-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-0">
                {[
                  { id: "cliente", label: "Cliente", value: "[Nome do Cliente]" },
                  { id: "projeto", label: "Projeto", value: "[Residencial · Comercial · Interiores]" },
                  { id: "localizacao", label: "Localização", value: "[Cidade, Estado]" },
                  { id: "metragem", label: "Metragem estimada", value: "[XXX m²]" },
                  { id: "objetivo", label: "Objetivo", value: "[Descrição breve do objetivo do cliente]" },
                  { id: "data", label: "Data", value: "[DD Mês AAAA]" },
                ].map((field) => (
                  <div
                    key={field.id}
                    className="py-6 border-b"
                    style={{ borderColor: "rgba(139, 115, 85, 0.35)" }}
                  >
                    <Editable
                      id={`diagnostico.field.${field.id}.label`}
                      className="block mb-3 text-[10px] uppercase tracking-[0.3em]"
                      style={{ color: "#8B7355", fontFamily: '"Courier New", monospace' }}
                    >
                      {field.label}
                    </Editable>
                    <Editable
                      id={`diagnostico.field.${field.id}.value`}
                      multiline
                      as="p"
                      className="font-display text-xl md:text-2xl leading-snug"
                      style={{ color: "#E8E4DF" }}
                    >
                      {field.value}
                    </Editable>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Closing italic bronze centered */}
          <div className="mt-20 lg:mt-24 flex flex-col items-center">
            <div
              className="h-px w-16 mb-8"
              style={{ backgroundColor: "#8B7355" }}
            />
            <Editable
              as="p"
              id="diagnostico.closing"
              multiline
              className="font-display italic text-lg md:text-xl text-center max-w-2xl leading-relaxed"
              style={{ color: "#8B7355" }}
            >
              Nenhum projeto da NL se repete — porque nenhum cliente é igual.
            </Editable>
          </div>
        </div>
      </section>

      {/* ============================================================
    05 · CASE — CASA COSTAS
    ============================================================ */}
      <section id="case" className="relative">
        <div className="grid grid-cols-12 min-h-screen">
          <div className="col-span-12 lg:col-span-7 relative min-h-[60vh] lg:min-h-screen">
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
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Case · 01</span>
              <span className="h-px w-8 bg-primary/60" />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 relative px-8 md:px-16 py-20 lg:py-32 flex flex-col justify-center">
            <div className="max-w-md">
              <span className="number-marker block mb-4">05 · Projeto referência</span>
              <Editable
                as="h2"
                id="case.title"
                multiline
                className="font-display text-5xl md:text-6xl leading-[0.95] mb-2"
              >
                Casa <em className="text-primary not-italic">Costas.</em>
              </Editable>
              <Editable
                id="case.location"
                className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-10"
              >
                Residência · 300m² · São José dos Campos
              </Editable>
              <div className="gold-line w-16 mb-8" />
              <Editable
                id="case.body"
                multiline
                as="p"
                className="font-display text-lg leading-relaxed text-foreground/80 mb-10"
              >
                O pedido era claro: uma residência que equilibrasse presença e acolhimento. A fachada em concreto e
                madeira define o limite entre o público e o privado — sem abrir mão da luz. Cada detalhe, do
                revestimento ao recuo da garagem, foi validado em projeto antes de qualquer execução. O resultado é uma
                casa que funciona exatamente como foi decidido — antes da primeira escavação.
              </Editable>
              <div className="grid grid-cols-3 gap-3 sm:gap-6 border-t border-border/60 pt-8">
                <CaseStat id="case.s1" value="04" label="Meses de projeto" />
                <CaseStat id="case.s2" value="05" label="Disciplinas" />
                <CaseStat id="case.s3" value="0" label="Retrabalho" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
    05 · BLOCO DE INTERIORES
    ============================================================ */}
      <section id="interiores" className="relative px-6 md:px-16 lg:px-24 py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
            <span className="number-marker block mb-3">06</span>
            <Editable id="interiores.eyebrow" className="eyebrow mb-8 inline-block">
              Interiores · Camada do habitar
            </Editable>
            <Editable
              as="h2"
              id="interiores.title"
              multiline
              className="font-display text-5xl md:text-6xl leading-[1.0] mb-10 text-balance"
            >
              O interior é onde a <em className="text-primary not-italic">arquitetura</em> encontra a vida.
            </Editable>
            <Editable
              id="interiores.body"
              multiline
              as="p"
              className="font-display text-lg leading-relaxed text-foreground/75 mb-10"
            >
              Não decoramos espaços — projetamos atmosferas. Cada material é escolhido pelo modo como envelhece, pelo
              toque, pelo som que o ambiente faz quando alguém entra. O resultado: interiores que não datam, que não
              cansam, e que continuam pertencendo a você dez anos após a entrega.
            </Editable>
            <ul className="space-y-3 font-display text-foreground/80">
              {[
                ["01", "Curadoria de materiais e acabamentos"],
                ["02", "Marcenaria sob medida com detalhamento executivo"],
                ["03", "Iluminação cênica e funcional integrada"],
                ["04", "Especificação de mobiliário e arte"],
              ].map(([num, txt], i) => (
                <li key={i} className="flex gap-4 items-baseline border-b border-border/40 pb-3">
                  <span className="font-mono text-xs text-primary/70">{num}</span>
                  <Editable id={`interiores.item${i}`} className="flex-1">
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
                id="interiores.caption"
                className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
              >
                Espaço Gourmet SJ · Materialidade e precisão
              </Editable>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
    06 · SEQUÊNCIA VISUAL — PORTFÓLIO EXPANDIDO
    ============================================================ */}
<section id="portfolio" className="relative px-6 md:px-16 lg:px-24 py-32">
  <div className="max-w-7xl mx-auto">
    <div className="flex items-baseline justify-between mb-16 border-b border-border/60 pb-6">
      <div className="flex items-baseline gap-6">
        <span className="number-marker">07</span>
        <Editable id="portfolio.eyebrow" className="eyebrow">
          Portfólio · Sequência
        </Editable>
      </div>
      <Editable
        id="portfolio.tag"
        className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block"
      >
        Quatro fragmentos · Um método
      </Editable>
    </div>

    <Editable
      as="h2"
      id="portfolio.title"
      multiline
      className="font-display text-5xl md:text-7xl leading-[1.0] mb-20 max-w-4xl text-balance"
    >
      Projetos que <em className="text-primary not-italic">provam</em> o método.
    </Editable>

    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <figure className="col-span-12 md:col-span-5 row-span-2 group">
        <a
          href="https://www.dropbox.com/scl/fi/gc7yr8gcdep5iaxthxlz6/nomo-ai-6adc7dfa-c608-4cee-ad95-4693eb7f5a61.png?rlkey=mewhomhfyn14gs2p6a6y757rc&raw=1"
          target="_blank"
          rel="noreferrer"
          className="block overflow-hidden"
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src="https://www.dropbox.com/scl/fi/gc7yr8gcdep5iaxthxlz6/nomo-ai-6adc7dfa-c608-4cee-ad95-4693eb7f5a61.png?rlkey=mewhomhfyn14gs2p6a6y757rc&raw=1"
              alt="Residência · fachada · NL Arquitetos"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              loading="lazy"
              width={1080}
              height={1440}
            />
          </div>
        </a>
        <figcaption className="mt-4 flex items-baseline justify-between">
          <Editable id="port.cap1" className="font-display italic text-foreground/80">
            Fachada residencial · São José dos Campos
          </Editable>
          <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">01</span>
        </figcaption>
      </figure>

      <figure className="col-span-12 md:col-span-7 group">
        <a
          href="https://www.dropbox.com/scl/fi/mnuvtilaks5qtv8ghjjll/nomo-result-1776203970806.png?rlkey=nuz4nzorchhctk9ef6efxt5km&raw=1"
          target="_blank"
          rel="noreferrer"
          className="block overflow-hidden"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src="https://www.dropbox.com/scl/fi/mnuvtilaks5qtv8ghjjll/nomo-result-1776203970806.png?rlkey=nuz4nzorchhctk9ef6efxt5km&raw=1"
              alt="Sala de estar · NL Arquitetos"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              loading="lazy"
              width={1920}
              height={1200}
            />
          </div>
        </a>
        <figcaption className="mt-4 flex items-baseline justify-between">
          <Editable id="port.cap2" className="font-display italic text-foreground/80">
            Sala de estar · Iluminação cênica
          </Editable>
          <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">02</span>
        </figcaption>
      </figure>

      <figure className="col-span-6 md:col-span-3 group">
        <a
          href="https://www.dropbox.com/scl/fi/qprr4s2fjkfti6tnyd89v/nomo-result-1775917620975.png?rlkey=0o6hu9dkmh2wr2phqu23z6avb&raw=1"
          target="_blank"
          rel="noreferrer"
          className="block overflow-hidden"
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src="https://www.dropbox.com/scl/fi/qprr4s2fjkfti6tnyd89v/nomo-result-1775917620975.png?rlkey=0o6hu9dkmh2wr2phqu23z6avb&raw=1"
              alt="Área de lazer · NL Arquitetos"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              loading="lazy"
              width={1080}
              height={1440}
            />
          </div>
        </a>
        <figcaption className="mt-4">
          <Editable id="port.cap3" className="font-display italic text-foreground/80 text-sm">
            Área de lazer · Convivência e materialidade
          </Editable>
          <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mt-1">03</div>
        </figcaption>
      </figure>

      <figure className="col-span-6 md:col-span-4 group">
        <a
          href="https://www.dropbox.com/scl/fi/vr5t57j716ouai5a8nujn/Gemini_Generated_Image_m7jpdpm7jpdpm7jp.png?rlkey=al8wrep2dwow5zulb8xnyzgyv&raw=1"
          target="_blank"
          rel="noreferrer"
          className="block overflow-hidden"
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src="https://www.dropbox.com/scl/fi/vr5t57j716ouai5a8nujn/Gemini_Generated_Image_m7jpdpm7jpdpm7jp.png?rlkey=al8wrep2dwow5zulb8xnyzgyv&raw=1"
              alt="Suíte · NL Arquitetos"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              loading="lazy"
              width={1920}
              height={1200}
            />
          </div>
        </a>
        <figcaption className="mt-4">
          <Editable id="port.cap4" className="font-display italic text-foreground/80 text-sm">
            Suíte · Conforto e precisão
          </Editable>
          <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mt-1">04</div>
        </figcaption>
      </figure>
    </div>
  </div>
</section>

      {/* ============================================================
          06.5 · ETAPAS DO PROJETO
          ============================================================ */}
      <section id="etapas" className="relative px-6 md:px-16 lg:px-24 py-28 bg-surface/40">
        <div className="max-w-[1400px] mx-auto">
          {/* Cabeçalho */}
          <div className="flex items-baseline justify-between mb-12 border-b border-border/60 pb-6">
            <div className="flex items-baseline gap-6">
              <span className="number-marker">08</span>
              <Editable id="etapas.eyebrow" className="eyebrow">
                Etapas · Do briefing à entrega
              </Editable>
            </div>
            <Editable
              id="etapas.tag"
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block"
            >
              Arquitetura → Interiores · Fluxo encadeado
            </Editable>
          </div>

          <div className="grid grid-cols-12 gap-8 mb-16">
            <Editable
              as="h2"
              id="etapas.title"
              multiline
              className="col-span-12 lg:col-span-7 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.0] text-balance"
            >
              Do primeiro traço
              <br />
              <em className="text-primary not-italic">ao detalhe final.</em>
            </Editable>
            <Editable
              id="etapas.intro"
              multiline
              as="p"
              className="col-span-12 lg:col-span-5 lg:pt-4 font-display text-lg text-foreground/70 leading-relaxed"
            >
              Interiores inicia somente após aprovação integral da etapa de Arquitetura. Cada decisão é tomada na ordem
              certa — para que nada precise ser refeito depois.
            </Editable>
          </div>

          {/* Trilha 01 · Arquitetura Residencial */}
          <PhaseTimeline
            trackId="arq"
            number="01"
            title="Arquitetura Residencial"
            duration="5 a 6 meses"
            phases={[
              { n: "01", t: "Levantamento & Briefing", d: "Escuta profunda, programa de necessidades e leitura do terreno." },
              { n: "02", t: "Criação do Conceito", d: "Partido arquitetônico, narrativa e diretrizes que guiam todo o projeto." },
              { n: "03", t: "Estudo Preliminar com 3D", d: "Volumetria, implantação e atmosferas em 3D antes de qualquer técnica." },
              { n: "04", t: "EVF — Viabilidade Financeira", d: "Orçamento por quantitativos reais — decisão consciente de escopo.", optional: true },
              { n: "05", t: "Projeto Legal & Aprovações", d: "Prefeitura, concessionárias e órgãos — conduzidos pela NL." },
              { n: "06", t: "Projeto Executivo", d: "Pranchas, memoriais e detalhamentos prontos para canteiro." },
              { n: "07", t: "Compatibilização Técnica", d: "Coordenação entre arquitetura, estrutura e instalações — em parceria com engenheiros especializados." },
              { n: "08", t: "Acompanhamento de obra", d: "Visitas técnicas, ajustes e curadoria de fornecedores.", optional: true },
            ]}
          />

          <div className="my-20 flex items-center gap-6">
            <span className="h-px flex-1 bg-border" />
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              Após aprovação da arquitetura
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>

          {/* Trilha 02 · Arquitetura de Interiores */}
          <PhaseTimeline
            trackId="int"
            number="02"
            title="Arquitetura de Interiores"
            duration="3 a 4 meses · após arquitetura"
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

      {/* ============================================================
          07 · ESCOPO TÉCNICO
          ============================================================ */}
      <section id="escopo" className="relative px-6 md:px-16 lg:px-24 py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-24 self-start">
            <span className="number-marker block mb-3">09</span>
            <Editable id="escopo.eyebrow" className="eyebrow mb-8 inline-block">
              Escopo técnico · O que entregamos
            </Editable>

            <Editable
              as="h2"
              id="escopo.title"
              multiline
              className="font-display text-5xl md:text-6xl leading-[1.0] mb-10 text-balance"
            >
              Duas disciplinas. <em className="text-primary not-italic">Um só método.</em>
            </Editable>

            <Editable
              id="escopo.body"
              multiline
              as="p"
              className="font-display text-lg leading-relaxed text-foreground/75 mb-10"
            >
              Quatro cadernos coordenados pela NL — base documental para uma obra sem improviso, com cada componente
              identificado, localizado e quantificado. Mesma estrutura para Arquitetônico e Interiores.
            </Editable>

            <div className="relative aspect-[4/5] overflow-hidden hidden lg:block">
              <img
                src={scopeMaterials}
                alt="Mesa de trabalho com amostras de materiais e croquis"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                width={1400}
                height={1750}
              />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <ScopeTabs />
          </div>
        </div>
      </section>

      {/* ── BAND · BLUEPRINT — transição contemplativa antes dos Pilares ── */}
      <FullBleedBand
        src={bandBlueprint}
        alt="Detalhe de prancha técnica e instrumentos de desenho — projeto executivo NL Arquitetos"
        number="Intermezzo · 01"
        caption="Cada linha no papel é uma decisão que não precisará ser tomada na obra."
        align="left"
        height="short"
      />

      {/* ============================================================
          08 · NOSSOS PILARES
          ============================================================ */}
      <section
        id="pilares"
        className="relative px-6 md:px-16 lg:px-24 py-16 md:py-20 bg-background min-h-screen flex flex-col justify-center"
      >
        <div className="relative max-w-6xl mx-auto w-full">
          {/* Cabeçalho — minimal */}
          <div className="flex items-baseline justify-between mb-10 md:mb-14 border-b border-border/60 pb-5">
            <div className="flex items-baseline gap-6">
              <span className="number-marker">10</span>
              <Editable id="pilares.eyebrow" className="eyebrow">
                Nossos Pilares
              </Editable>
            </div>
            <Editable
              id="pilares.tag"
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block"
            >
              O que nos diferencia
            </Editable>
          </div>

          {/* Título enxuto */}
          <Editable
            as="h2"
            id="pilares.title"
            multiline
            className="font-display text-3xl md:text-5xl leading-[1.05] mb-10 md:mb-14 max-w-3xl text-balance"
          >
            Quatro <em className="text-primary not-italic">decisões</em> que sustentam cada projeto.
          </Editable>

          {/* Grid 2x2 delicado */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-12">
            {[
              {
                id: "decisao",
                num: "I",
                kicker: "Decisão · Antes da Obra",
                body: "Cada detalhe é resolvido antes da primeira escavação. O que chega à obra já está validado.",
                quote: "Decidir no canteiro é caro.",
              },
              {
                id: "compatibilizacao",
                num: "II",
                kicker: "Coordenação · Técnica",
                body: "Todas as disciplinas coordenadas em conjunto com engenheiros parceiros. O que chega à obra já foi revisado e validado.",
                quote: "Mostramos o erro no computador para não errar no cimento.",
              },
              {
                id: "processo",
                num: "III",
                kicker: "Processo · Conduzido",
                body: "Cada etapa tem objetivo claro e critério de avanço. A NL conduz — o cliente aprova com segurança.",
                quote: "Você não precisa entender de obra. Precisa entender o que aprova.",
              },
              {
                id: "resultado",
                num: "IV",
                kicker: "Resultado · Previsível",
                body: "Obra sem improviso, sem surpresa de custo. A estética é a última camada — o método garante o resto.",
                quote: "A NL não projeta para impressionar. Projeta para funcionar.",
              },
            ].map((p) => (
              <article key={p.id} className="flex gap-5 md:gap-6">
                <span className="font-display italic text-4xl md:text-5xl text-primary/70 leading-none shrink-0 w-10">
                  {p.num}
                </span>
                <div className="flex-1 border-l border-border pl-5 md:pl-6">
                  <Editable
                    id={`pilares.${p.id}.kicker`}
                    className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground block mb-2"
                  >
                    {p.kicker}
                  </Editable>
                  <Editable
                    as="p"
                    id={`pilares.${p.id}.body`}
                    multiline
                    className="text-foreground/80 text-[0.9rem] leading-relaxed mb-3"
                  >
                    {p.body}
                  </Editable>
                  <Editable
                    as="p"
                    id={`pilares.${p.id}.quote`}
                    multiline
                    className="font-display italic text-base md:text-lg text-primary leading-snug"
                  >
                    “{p.quote}”
                  </Editable>
                </div>
              </article>
            ))}
          </div>

          {/* Fechamento — uma linha discreta */}
          <Editable
            as="p"
            id="pilares.closing"
            className="mt-12 md:mt-16 pt-6 border-t border-border/60 font-display italic text-xl md:text-2xl text-foreground/75 text-center"
          >
            A arquitetura como decisão.
          </Editable>
        </div>
      </section>

      {/* ============================================================
          08.5 · CRONOGRAMA — LISTA COM BARRAS PROPORCIONAIS
          ============================================================ */}
      <section
        id="cronograma"
        className="relative px-6 md:px-16 lg:px-24 py-32 overflow-hidden"
        style={{ background: "#1A1816", color: "#E8E4DF" }}
      >
        <div className="relative max-w-7xl mx-auto">
          {/* Cabeçalho — título à esquerda, 180 fantasma à direita */}
          <div className="relative grid grid-cols-12 gap-8 items-start mb-24">
            <div className="col-span-12 md:col-span-7 relative z-10">
              <div className="flex items-baseline gap-6 mb-8">
                <span
                  className="font-mono-edit text-[10px] tracking-[0.3em] uppercase"
                  style={{ color: "#8B7355" }}
                >
                  10
                </span>
                <Editable
                  id="crono.eyebrow"
                  className="font-mono-edit text-[10px] uppercase tracking-[0.3em]"
                >
                  <span style={{ color: "rgba(232, 228, 223, 0.5)" }}>Linha do tempo · Estimativa</span>
                </Editable>
              </div>

              <Editable
                as="h2"
                id="crono.title"
                multiline
                className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance"
              >
                <span style={{ color: "#E8E4DF" }}>Cronograma </span>
                <em className="not-italic" style={{ color: "#8B7355" }}>estimado</em>
                <span style={{ color: "#E8E4DF" }}>.</span>
              </Editable>
            </div>

            {/* 180 fantasma */}
            <div className="col-span-12 md:col-span-5 relative">
              <div className="md:text-right">
                <div
                  aria-hidden
                  className="font-display leading-[0.85] select-none"
                  style={{
                    fontSize: "clamp(8rem, 16vw, 16rem)",
                    color: "#8B7355",
                    opacity: 0.18,
                    letterSpacing: "-0.05em",
                  }}
                >
                  180
                </div>
                <div
                  className="font-mono-edit text-[10px] tracking-[0.35em] uppercase mt-2"
                  style={{ color: "#8B7355" }}
                >
                  Dias totais
                </div>
              </div>
            </div>
          </div>

          {/* ===== Lista de etapas com barras proporcionais ===== */}
          <div
            className="border-t"
            style={{ borderColor: "rgba(139, 115, 85, 0.3)" }}
          >
            {(() => {
              const stages = [
                { num: "01", name: "Levantamento & Briefing", days: 15 },
                { num: "02", name: "Criação do Conceito", days: 20 },
                { num: "03", name: "Estudo Preliminar com 3D", days: 30 },
                { num: "04", name: "Projeto Legal & Aprovações", days: 15 },
                { num: "05", name: "Projeto Executivo", days: 15 },
                { num: "06", name: "Interiores", days: 90 },
              ];
              const total = stages.reduce((acc, s) => acc + s.days, 0);
              let cumulative = 0;

              return stages.map((s) => {
                const offsetPct = (cumulative / total) * 100;
                const widthPct = (s.days / total) * 100;
                cumulative += s.days;
                return (
                  <div
                    key={s.num}
                    className="grid grid-cols-12 gap-4 md:gap-8 items-center py-7 md:py-8 border-b"
                    style={{ borderColor: "rgba(139, 115, 85, 0.3)" }}
                  >
                    <div className="col-span-2 md:col-span-1">
                      <span
                        className="font-mono-edit text-[11px] md:text-xs tracking-[0.25em]"
                        style={{ color: "#8B7355" }}
                      >
                        {s.num}
                      </span>
                    </div>

                    <div className="col-span-10 md:col-span-4">
                      <span
                        className="font-display leading-tight"
                        style={{ color: "#E8E4DF", fontSize: "clamp(1.05rem, 1.6vw, 1.5rem)" }}
                      >
                        {s.name}
                      </span>
                    </div>

                    <div className="col-span-10 md:col-span-5 order-last md:order-none">
                      <div className="relative w-full" style={{ height: "3px" }}>
                        <div
                          className="absolute inset-0"
                          style={{ background: "rgba(139, 115, 85, 0.18)", height: "3px" }}
                        />
                        <div
                          className="absolute top-0 transition-all duration-700"
                          style={{
                            left: `${offsetPct}%`,
                            width: `${widthPct}%`,
                            height: "3px",
                            background: "#8B7355",
                          }}
                        />
                        <div
                          className="absolute"
                          style={{
                            left: `calc(${offsetPct}% - 1px)`,
                            top: "-4px",
                            width: "2px",
                            height: "11px",
                            background: "rgba(139, 115, 85, 0.8)",
                          }}
                        />
                        <div
                          className="absolute"
                          style={{
                            left: `calc(${offsetPct + widthPct}% - 1px)`,
                            top: "-4px",
                            width: "2px",
                            height: "11px",
                            background: "#8B7355",
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-span-2 md:col-span-2 text-right">
                      <span
                        className="font-display italic"
                        style={{ color: "#B5A48A", fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)" }}
                      >
                        {s.days}
                      </span>
                      <span
                        className="font-mono-edit not-italic ml-1.5 text-[9px] tracking-[0.2em] uppercase"
                        style={{ color: "rgba(139, 115, 85, 0.7)" }}
                      >
                        dias
                      </span>
                    </div>
                  </div>
                );
              });
            })()}
          </div>

          {/* Rodapé — prazo total à esquerda, citação à direita */}
          <div className="grid grid-cols-12 gap-8 mt-20 pt-2">
            <div className="col-span-12 md:col-span-5">
              <div
                className="font-mono-edit text-[12px] md:text-[13px] tracking-[0.4em] uppercase mb-5"
                style={{ color: "#8B7355" }}
              >
                Prazo total estimado
              </div>
              <Editable
                id="crono.total"
                className="font-display leading-none block"
                ariaLabel="Editar prazo total"
              >
                <span style={{ color: "#E8E4DF", fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
                  6 <em className="not-italic" style={{ color: "#8B7355" }}>meses</em>
                </span>
              </Editable>
            </div>

            <div
              className="col-span-12 md:col-span-7 md:pl-12 md:border-l flex items-end"
              style={{ borderColor: "rgba(139, 115, 85, 0.3)" }}
            >
              <Editable
                id="crono.note"
                multiline
                as="p"
                className="font-display italic leading-relaxed text-primary text-[clamp(1rem,1.25vw,1.2rem)]"
                ariaLabel="Editar nota do cronograma"
              >
                "Cronograma estimado · Pode variar conforme escopo, aprovações de terceiros
                (prefeitura, condomínio) e disponibilidade do cliente nas etapas de aprovação."
              </Editable>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          09 · BENEFÍCIOS
          ============================================================ */}
      <section id="beneficios" className="relative px-6 md:px-16 lg:px-24 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 mb-20">
            <div className="col-span-12 md:col-span-3">
              <span className="number-marker block mb-2">12</span>
              <Editable id="beneficios.eyebrow" className="eyebrow">
                Benefícios
              </Editable>
            </div>
            <div className="col-span-12 md:col-span-9">
              <Editable
                as="h2"
                id="beneficios.title"
                multiline
                className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.0] text-balance"
              >
                O que você <em className="text-primary not-italic">recebe</em> além das pranchas.
              </Editable>
            </div>
          </div>

          <div className="mb-16 md:mb-20 text-center">
            <Editable
              id="beneficios.intro"
              as="p"
              className="font-display italic text-balance"
              ariaLabel="Editar chamada"
            >
              <span style={{ color: "#8B7355", fontSize: "clamp(1.75rem, 3.2vw, 3rem)", lineHeight: 1.15 }}>
                Decidir no papel é barato. Decidir no canteiro é caro.
              </span>
            </Editable>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {[
              {
                t: "Segurança na obra",
                d: "Projeto compatibilizado evita decisões improvisadas no canteiro — e os custos imprevistos que vêm com elas.",
              },
              {
                t: "Decisão antes da obra",
                d: "Cada disciplina validada em projeto. O que está na prancha é o que vai para o canteiro — sem surpresa.",
              },
              {
                t: "Aproveitamento do terreno",
                d: "Estudo de implantação que extrai o melhor da topografia, insolação e ventos predominantes.",
              },
              {
                t: "Valorização do imóvel",
                d: "Arquitetura assinada e bem documentada agrega valor patrimonial mensurável na revenda.",
              },
              {
                t: "Conforto a longo prazo",
                d: "Decisões pensadas para 10, 20 anos: pé-direito, fluxos, iluminação natural e materiais que envelhecem bem.",
              },
              {
                t: "Previsibilidade financeira",
                d: "Quantitativos precisos permitem orçamentos firmes — e protegem você de aditivos surpresa.",
              },
            ].map((b, i) => (
              <BenefitCard key={i} {...b} idx={i} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Editable
              id="beneficios.tags"
              className="font-mono-edit uppercase text-muted-foreground"
              ariaLabel="Editar tags"
            >
              <span style={{ fontSize: "clamp(0.65rem, 0.85vw, 0.8rem)", letterSpacing: "0.35em" }}>
                Projeto Executivo · Compatibilização · Validação Antecipada · Resultado Previsível
              </span>
            </Editable>
          </div>

          <div className="mt-16 text-center">
            <Editable
              id="beneficios.fechamento"
              as="p"
              className="font-display italic"
              ariaLabel="Editar fechamento"
            >
              <span style={{ color: "#8B7355", fontSize: "clamp(1.1rem, 1.5vw, 1.5rem)" }}>
                "Cada prancha entregue é uma decisão que não precisará ser tomada na obra."
              </span>
            </Editable>
          </div>
        </div>
      </section>

      {/* ── BAND · INTERIOR — o resultado antes do investimento ── */}
      <FullBleedBand
        src={bandIntermezzo02}
        alt="Área gourmet externa com pérgola de madeira coberta por trepadeira, parede de cobogós, lounge com poltronas claras e bancada de churrasqueira integrada — projeto residencial NL Arquitetos"
        number="Intermezzo · 02"
        caption="Pérgola, cobogó e gourmet integrados — cada elemento decidido em projeto, não no canteiro."
        align="right"
        height="tall"
        // Foco no centro-baixo: prioriza pérgola + área gourmet, evita excesso de céu
        objectPosition="35% 65%"
        // Altura levemente reduzida para harmonizar com o ritmo das outras bandas
        heightClassName="h-[60vh] sm:h-[68vh] md:h-[78vh]"
        // Fade inferior mais alto para fundir a base clara da imagem com o background escuro
        edgeFadeBottomClassName="h-44 md:h-64"
        // Sutil ajuste de contraste/saturação para baixar o brilho do céu e casar com a paleta NL
        imgClassName="brightness-[0.92] contrast-[1.06] saturate-[0.95]"
      />

      {/* ============================================================
          10 · INVESTIMENTO
          ============================================================ */}
      <section id="investimento" className="relative px-6 md:px-16 lg:px-24 py-32 bg-surface/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="number-marker block mb-4">13 · Investimento</span>
            <div className="gold-line w-16 mx-auto mb-10" />
            <Editable
              as="h2"
              id="investimento.title"
              multiline
              className="font-display text-5xl md:text-7xl leading-[1.0] mb-8 text-balance"
            >
              Dois planos. <em className="text-primary not-italic">Um só método.</em>
            </Editable>
            <Editable
              id="investimento.body"
              multiline
              as="p"
              className="font-display italic text-lg md:text-xl text-foreground/70"
            >
              O valor de cada plano é calculado com base no escopo e na complexidade do projeto. Não é preço de tabela —
              é o custo real de eliminar o improviso antes da obra começar.
            </Editable>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PackageCard
              id="basic"
              tier="Plano Executivo"
              tagline="Arquitetura"
              price="Sob consulta"
              priceNote="Sob consulta · conforme escopo"
              cta="Iniciar conversa"
              ctaHref="https://wa.me/5512996235559?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20Plano%20Executivo."
            />

            <PackageCard
              id="premium"
              tier="Plano Completo"
              tagline="Arquitetura + Interiores"
              price="Sob consulta"
              priceNote="Sob consulta · conforme escopo"
              cta="Iniciar conversa"
              ctaHref="https://wa.me/5512996235559?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20Plano%20Completo."
              recommended
            />
          </div>

          <ComparisonTable />

          <div className="mt-12 border border-border/60 bg-background max-w-5xl mx-auto">
            <div className="px-8 py-6 border-b border-border/60">
              <Editable
                id="invest.pay.label"
                className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80 block"
              >
                Condições de pagamento · Aplicáveis aos dois planos
              </Editable>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/60">
              <PaymentTier id="pay1" label="Entrada" value="30%" sub="Na assinatura do contrato" />
              <PaymentTier id="pay2" label="Anteprojeto" value="40%" sub="Na aprovação do anteprojeto" />
              <PaymentTier id="pay3" label="Executivo" value="30%" sub="Na entrega do executivo" />
            </div>
          </div>

          <Editable
            id="invest.mapas.note"
            multiline
            as="p"
            className="font-mono text-[11px] text-muted-foreground text-center mt-8 max-w-3xl mx-auto leading-relaxed"
          >
            * Mapas de Instalações desenvolvidos em parceria com engenheiros especializados. A NL coordena e valida todos os projetos complementares.
          </Editable>

          <div className="mt-8 border border-primary/30 bg-primary/[0.03] px-8 py-8 flex flex-col md:flex-row gap-6 items-start max-w-5xl mx-auto">
            <span className="font-display text-4xl text-primary leading-none shrink-0">✦</span>
            <div>
              <Editable
                id="invest.guarantee.label"
                className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80 block mb-2"
              >
                Garantia técnica NL
              </Editable>
              <Editable
                id="invest.guarantee.body"
                multiline
                as="p"
                className="font-display text-lg text-foreground/85 leading-relaxed"
              >
                Se após a entrega for identificada qualquer ambiguidade técnica dentro do escopo contratado, a NL produz
                o detalhamento necessário sem custo adicional. O risco da documentação é nosso.
              </Editable>
            </div>
          </div>

          <Editable
            id="invest.closing"
            multiline
            as="p"
            className="font-display italic text-2xl md:text-3xl text-primary text-center mt-16 max-w-3xl mx-auto leading-snug"
          >
            "O preço do projeto é o seguro contra o imprevisto da obra."
          </Editable>
        </div>
      </section>

      {/* ============================================================
          11 · DIFERENCIAIS
          ============================================================ */}
      <section id="diferenciais" className="relative px-6 md:px-16 lg:px-24 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 mb-20 items-end">
            <div className="col-span-12 md:col-span-7">
              <span className="number-marker block mb-3">14</span>
              <Editable id="diferenciais.eyebrow" className="eyebrow mb-8 inline-block">
                Diferenciais · O que nos separa
              </Editable>
              <Editable
                as="h2"
                id="diferenciais.title"
                multiline
                className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.0] text-balance"
              >
                Quatro razões para <em className="text-primary not-italic">escolher</em> a NL.
              </Editable>
            </div>
          </div>

          <div className="h-px bg-primary/30 w-full max-w-5xl mx-auto my-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {[
              {
                r: "I",
                t: "Duas disciplinas, um único processo",
                d: "Arquitetura e Interiores desenvolvidos em sequência pelo mesmo escritório. Sem ruído de comunicação entre equipes diferentes. O que foi decidido na arquitetura alimenta diretamente os interiores — sem retrabalho, sem interpretação.",
              },
              {
                r: "II",
                t: "Documentação que vai para a obra",
                d: "Os cadernos técnicos da NL são feitos para o construtor executar — não para o cliente guardar. Cada prancha tem o nível de detalhe necessário para que nenhuma decisão precise ser tomada no canteiro.",
              },
              {
                r: "III",
                t: "A NL conduz — você nunca fica perdido",
                d: "Cada etapa tem objetivo claro, entregável definido e critério de aprovação. Você sabe sempre em que momento está e o que vem a seguir.",
              },
              {
                r: "IV",
                t: "Dois sócios em cada projeto — do briefing à última prancha",
                d: "Leandro e Neandro estão presentes em cada decisão. Não existe delegação para assistentes ou estagiários.",
              },
            ].map((d, i) => (
              <DifferentialItem key={i} {...d} />
            ))}
          </div>

          <Editable
            id="diferenciais.closing"
            multiline
            as="p"
            className="font-display italic text-2xl md:text-3xl text-primary text-center mt-20 max-w-3xl mx-auto leading-snug"
          >
            "O especialista que conduz — não o vendedor que convence."
          </Editable>
        </div>
      </section>

      {/* ============================================================
          12 · NOTA — TRANSPARÊNCIA ANTES DO INÍCIO
          ============================================================ */}
      <section
        id="nota"
        className="relative px-6 md:px-16 lg:px-24 py-32 overflow-hidden"
        style={{ backgroundColor: "#1A1816" }}
      >
        {/* Decorative top line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-primary/40" />

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="number-marker block mb-6 text-primary/70">15 · NOTA</span>
            <Editable
              id="nota.title"
              as="h2"
              className="font-display text-6xl md:text-7xl lg:text-8xl text-foreground leading-[1.05] text-balance"
            >
              Nota.
            </Editable>
            <Editable
              id="nota.subtitle"
              as="p"
              className="font-display italic text-xl md:text-2xl text-primary/90 mt-4 leading-snug"
            >
              Transparência antes do início.
            </Editable>
            <div className="gold-line w-24 mx-auto mt-10 opacity-60" />
          </div>

          {/* 2x2 Grid */}
          <div className="grid md:grid-cols-2 gap-px bg-primary/15 border border-primary/15">
            {[
              {
                id: "01",
                title: "Dados fornecidos pelo cliente",
                intro: "Para o desenvolvimento do projeto será fundamental que o cliente forneça:",
                items: [
                  "Matrícula do imóvel",
                  "Legislação do terreno junto ao condomínio",
                  "Documentação de aprovações anteriores (se existirem)",
                ],
              },
              {
                id: "02",
                title: "Serviços extras contratados pelo cliente",
                intro: "A contratação dos itens abaixo é responsabilidade do cliente e essencial para o início do projeto:",
                items: [
                  "Levantamento topográfico",
                  "Sondagem do lote",
                  "ART/RRT dos projetos complementares",
                ],
              },
              {
                id: "03",
                title: "Serviços não inclusos",
                intro: null,
                items: [
                  "Estudo de Impacto de Vizinhança",
                  "Licenças Ambientais",
                  "Projeto e aprovação do Corpo de Bombeiros",
                  "Responsabilidade técnica pela execução da obra",
                  "Gestão de obra e contratação de mão de obra",
                  "Compra de materiais e insumos",
                  "Projetos complementares de estrutura (coordenados em parceria, não executados pela NL)",
                ],
              },
              {
                id: "04",
                title: "Serviços inclusos",
                intro: null,
                items: [],
                groups: [
                  {
                    label: "Plano Executivo",
                    items: [
                      "Orientação na entrega dos cadernos técnicos",
                      "Suporte técnico por 90 dias após entrega",
                    ],
                  },
                  {
                    label: "Plano Completo",
                    items: [
                      "Tudo do Executivo",
                      "4 visitas técnicas à obra",
                      "Visitas em lojas para curadoria de materiais",
                    ],
                  },
                ],
              },
            ].map((block) => (
              <div
                key={block.id}
                className="relative p-10 md:p-12 group"
                style={{ backgroundColor: "#1A1816" }}
              >
                {/* Number marker */}
                <div className="flex items-baseline gap-4 mb-6">
                  <span
                    className="font-display text-5xl md:text-6xl text-primary/30"
                    style={{ WebkitTextStroke: "1px hsl(var(--primary) / 0.4)", color: "transparent" }}
                  >
                    {block.id}
                  </span>
                  <span
                    className="inline-block text-[11px] leading-none uppercase tracking-[0.3em] text-primary/80"
                    style={{ fontFamily: "'Courier New', monospace", fontWeight: 400 }}
                  >
                    {block.title.toUpperCase()}
                  </span>
                </div>


                {block.intro && (
                  <Editable
                    id={`nota.${block.id}.intro`}
                    multiline
                    as="p"
                    className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5"
                  >
                    {block.intro}
                  </Editable>
                )}

                {block.items.length > 0 && (
                  <ul className="space-y-2.5">
                    {block.items.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm md:text-base text-foreground/85 leading-relaxed">
                        <span className="text-primary mt-1.5 text-[8px]">✦</span>
                        <Editable id={`nota.${block.id}.item.${i}`} as="span" className="flex-1">
                          {item}
                        </Editable>
                      </li>
                    ))}
                  </ul>
                )}

                {block.groups && (
                  <div className="space-y-6">
                    {block.groups.map((group, gi) => (
                      <div key={gi}>
                        <div
                          className="inline-block text-[11px] leading-none uppercase tracking-[0.3em] text-primary mb-3"
                          style={{ fontFamily: "'Courier New', monospace", fontWeight: 400 }}
                        >
                          {group.label.toUpperCase()}
                        </div>
                        <ul className="space-y-2.5">
                          {group.items.map((item, i) => (
                            <li key={i} className="flex gap-3 text-sm md:text-base text-foreground/85 leading-relaxed">
                              <span className="text-primary mt-1.5 text-[8px]">✦</span>
                              <Editable id={`nota.${block.id}.${gi}.item.${i}`} as="span" className="flex-1">
                                {item}
                              </Editable>
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

          {/* Closing italic bronze */}
          <Editable
            id="nota.closing"
            multiline
            as="p"
            className="font-display italic text-2xl md:text-3xl text-primary text-center mt-20 max-w-3xl mx-auto leading-snug"
          >
            "Transparência antes do início — porque surpresa na obra custa caro."
          </Editable>
        </div>

        {/* Decorative bottom line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-t from-transparent to-primary/40" />
      </section>

      {/* ── BAND · MATERIAL — respiro tátil antes dos próximos passos ── */}
      <FullBleedBand
        src={bandMaterial}
        alt="Detalhe de travertino e madeira nogueira sob luz natural — paleta material NL Arquitetos"
        number="Intermezzo · 03"
        caption="Travertino, nogueira, luz. A matéria-prima de uma decisão bem tomada."
        align="left"
        height="short"
      />

      {/* ============================================================
          13 · PRÓXIMOS PASSOS
          ============================================================ */}
      <section
        id="proximos"
        className="relative px-6 md:px-16 lg:px-24 py-40 bg-gradient-to-b from-surface/60 via-background to-background overflow-hidden"
      >
        {/* Decorative bronze frame */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-primary/40" />

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-24">
            <span className="number-marker block mb-4">16</span>
            <Editable
              id="proximos.eyebrow"
              className="eyebrow mb-8 inline-block"
            >
              Próximos passos
            </Editable>
            <Editable
              as="h2"
              id="proximos.title"
              multiline
              className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.0] mb-8 text-balance max-w-4xl mx-auto"
            >
              Quatro passos. <em className="text-primary not-italic">Sete dias</em>
              <br />
              até o primeiro traço.
            </Editable>

            <Editable
              id="proximos.intro"
              multiline
              as="p"
              className="font-display italic text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto leading-relaxed"
            >
              A partir do momento em que você aprova a proposta, o processo começa. Sem espera. Sem fila.
            </Editable>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical bronze line */}
            <div className="absolute left-[28px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10" />

            <div className="space-y-20 md:space-y-28">
              {[
                {
                  n: "01",
                  timing: "Imediato",
                  t: "Aprovação da proposta",
                  d: "Você responde com um sim — por mensagem, e-mail ou em pessoa.",
                },
                {
                  n: "02",
                  timing: "Em até 24h",
                  t: "Assinatura do contrato",
                  d: "Enviamos o contrato em até 24 horas. Assinatura digital, sem deslocamento.",
                },
                {
                  n: "03",
                  timing: "Em até 5 dias",
                  t: "Reunião de imersão",
                  d: "Encontro de até 3 horas, agendado em até 5 dias. Aqui ouvimos tudo — terreno, família, modo de viver.",
                },
                {
                  n: "04",
                  timing: "Em até 7 dias",
                  t: "Início do estudo preliminar",
                  d: "Em até 7 dias após a imersão, o primeiro traço sai da prancheta. O projeto começa.",
                },
              ].map((p, i) => (
                <NextStep key={i} index={i} {...p} />
              ))}
            </div>
          </div>

          {/* Closing CTA block */}
          <div className="mt-32 max-w-4xl mx-auto">
            <div className="border border-primary/30 bg-surface/60 px-8 md:px-16 py-16 md:py-20 relative">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-background px-4 font-display text-3xl text-primary leading-none">
                ✦
              </span>

              <Editable
                id="proximos.cta.text"
                multiline
                as="p"
                className="font-display italic text-3xl md:text-4xl text-foreground text-center leading-tight max-w-2xl mx-auto mb-10"
              >
                Pronto para dar início ao seu projeto?
              </Editable>

              <div className="flex justify-center">
                <a
                  href="https://wa.me/5512996235559?text=Ol%C3%A1%2C%20li%20a%20Carta%20Proposta%20e%20gostaria%20de%20conversar%20sobre%20meu%20projeto."
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 md:gap-4 px-6 md:px-10 py-4 md:py-5 bg-primary text-primary-foreground font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-primary-glow transition-colors duration-500"
                >
                  Iniciar conversa
                  <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </a>
              </div>

              <Editable
                id="proximos.cta.note"
                className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground text-center block mt-8"
              >
                Resposta em até 24 horas · Leandro & Neandro
              </Editable>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CONDIÇÕES GERAIS
          ============================================================ */}
      <section className="relative px-6 md:px-16 lg:px-24 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-border pt-16">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-3">
                <Editable id="cond.eyebrow" className="eyebrow">
                  Condições gerais
                </Editable>
              </div>
              <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 min-w-0">
                <Condition
                  id="c1"
                  label="Prazo total"
                  value="Até 14 semanas para escopo integral, divididas em entregas parciais aprovadas."
                />
                <Condition
                  id="c2"
                  label="Revisões"
                  value="Duas rodadas de revisão inclusas em cada etapa. Adicionais cobrados por hora técnica."
                />
                <Condition
                  id="c3"
                  label="Forma de pagamento"
                  value="PIX, transferência ou cartão. Boleto sob demanda."
                />
                <Condition
                  id="c4"
                  label="Validade da proposta"
                  value="30 dias corridos a partir da data desta carta. Após esse prazo, valores podem ser revisados."
                />
                <Condition
                  id="c5"
                  label="Acompanhamento de obra"
                  value="Não incluso no escopo padrão. Pode ser contratado à parte por visita ou pacote mensal."
                />
                <Condition
                  id="c6"
                  label="Direitos autorais"
                  value="O projeto é de autoria intelectual da NL Arquitetos, conforme Lei nº 9.610/98."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          14 · ENCERRAMENTO
          ============================================================ */}
      <section
        id="encerramento"
        className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-32 overflow-hidden"
        style={{ backgroundColor: "#1A1816", color: "#E8E4DF" }}
      >
        {/* Decorative top line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-primary/40" />

        <div className="relative max-w-5xl mx-auto w-full">
          {/* Logo branca centralizada */}
          <div className="flex justify-center mb-10">
            <img
              src={LOGO_BRANCA}
              alt="NL Arquitetos"
              className="h-20 md:h-28 w-auto object-contain opacity-95"
              width={280}
              height={112}
            />
          </div>

          <span
            className="font-mono-edit text-[10px] tracking-[0.3em] uppercase block mb-6 text-center"
            style={{ color: "#8B7355" }}
          >
            17 · Encerramento
          </span>

          <div className="gold-line w-24 mx-auto mb-12" />

          <Editable
            as="h2"
            id="encerramento.title"
            multiline
            className="font-display text-5xl md:text-7xl lg:text-8xl text-center leading-[1.0] mb-12 text-balance"
          >
            <span style={{ color: "#E8E4DF" }}>A casa que você imagina</span>
            <br />
            <em className="not-italic" style={{ color: "#8B7355" }}>já existe.</em>{" "}
            <span style={{ color: "#E8E4DF" }}>Falta começar.</span>
          </Editable>

          <Editable
            id="encerramento.body"
            multiline
            as="p"
            className="font-display italic text-xl md:text-2xl text-center max-w-2xl mx-auto mb-12"
          >
            <span style={{ color: "rgba(232, 228, 223, 0.7)" }}>
              Cada mês de adiamento é um mês a menos vivendo nela. O próximo passo é uma conversa de 30 minutos — sem
              compromisso.
            </span>
          </Editable>

          <div className="flex flex-col items-center gap-6 mb-20">
            <a
              href="https://wa.me/5512996235559?text=Ol%C3%A1%2C%20li%20a%20Carta%20Proposta%20e%20gostaria%20de%20agendar%20a%20conversa%20inicial."
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 md:gap-4 px-5 md:px-10 py-4 md:py-5 bg-primary text-primary-foreground font-mono text-[11px] md:text-xs uppercase tracking-[0.18em] md:tracking-[0.3em] hover:bg-primary-glow transition-colors duration-500 text-center"
            >
              Agendar conversa inicial
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
            <Editable
              id="encerramento.cta.sub"
              className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-center px-4 break-words"
            >
              <span style={{ color: "rgba(232, 228, 223, 0.5)" }}>
                Resposta em até 4 horas úteis · Sem compromisso
              </span>
            </Editable>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto border-t"
            style={{ borderColor: "rgba(139, 115, 85, 0.3)" }}
          >
            <Contact id="ct1" label="WhatsApp" value="(12) 99623-5559" />
            <Contact id="ct2" label="E-mail" value="contato.nlarquitetos@gmail.com" />
            <Contact id="ct3" label="Instagram" value="@nlarquitetos" />
          </div>

          <div className="mt-24 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left">
            <span className="font-display italic" style={{ color: "rgba(232, 228, 223, 0.6)" }}>
              "A arquitetura como decisão."
            </span>
            <span
              className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] break-words"
              style={{ color: "rgba(139, 115, 85, 0.8)" }}
            >
              NL Arquitetos · 2025
            </span>
          </div>
        </div>
      </section>

      <PdfExportButton />
    </main>
  );
};

/* ============================================================
   Subcomponents
   ============================================================ */

const FullBleedBand = ({
  src,
  alt,
  caption,
  number,
  height = "tall",
  align = "left",
  objectPosition = "center",
  imgClassName = "",
  heightClassName,
  edgeFadeBottomClassName = "h-32 md:h-48",
}: {
  src: string;
  alt: string;
  caption: string;
  number: string;
  height?: "short" | "tall";
  align?: "left" | "right";
  objectPosition?: string;
  imgClassName?: string;
  heightClassName?: string;
  edgeFadeBottomClassName?: string;
}) => (
  <section
    aria-hidden="false"
    className={`relative w-full ${
      heightClassName ??
      (height === "tall" ? "h-[70vh] md:h-[85vh]" : "h-[55vh] md:h-[65vh]")
    } overflow-hidden bg-background`}
  >
    <img
      src={src}
      alt={alt}
      loading="lazy"
      width={1920}
      height={1080}
      className={`absolute inset-0 w-full h-full object-cover ${imgClassName}`}
      style={{ objectPosition }}
    />

    {/* Top/bottom edge fade — same warm-dark token, scaled by breakpoint */}
    <div
      className="absolute inset-x-0 top-0 h-24 md:h-40 pointer-events-none"
      style={{ background: "var(--band-fade-edge)" }}
    />
    <div
      className={`absolute inset-x-0 bottom-0 ${edgeFadeBottomClassName} pointer-events-none`}
      style={{ background: "var(--band-fade-edge)", transform: "scaleY(-1)" }}
    />

    {/* Caption scrim — same token everywhere; mobile = bottom band, desktop = side panel */}
    <div
      className="absolute inset-x-0 bottom-0 h-1/2 md:hidden pointer-events-none"
      style={{ background: "var(--band-scrim-strong)" }}
    />
    <div
      className={`hidden md:block absolute inset-y-0 ${align === "left" ? "left-0 right-1/2" : "right-0 left-1/2"} pointer-events-none`}
      style={{ background: align === "left" ? "var(--band-scrim-side-left)" : "var(--band-scrim-side-right)" }}
    />

    <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 flex items-end pb-10 md:pb-20">
      <div className={`max-w-xs md:max-w-md ${align === "right" ? "md:ml-auto md:text-right" : ""}`}>
        <div className={`flex items-center gap-3 mb-3 md:mb-4 ${align === "right" ? "md:justify-end" : ""}`}>
          <span className="h-px w-8 md:w-10 bg-primary/60" />
          <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-primary/80">
            {number}
          </span>
        </div>
        <p className="font-display italic text-lg md:text-2xl text-foreground leading-snug text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          {caption}
        </p>
      </div>
    </div>
  </section>
);

const Stat = ({ number, label, id }: { number: string; label: string; id: string }) => (
  <div>
    <Editable id={`stat.${id}.num`} className="font-display text-3xl md:text-4xl text-primary block mb-1">
      {number}
    </Editable>
    <Editable
      id={`stat.${id}.lbl`}
      className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground leading-tight block"
    >
      {label}
    </Editable>
  </div>
);

const PartnerCard = ({
  id,
  name,
  role,
  cau,
  image,
}: {
  id: string;
  name: string;
  role: string;
  cau: string;
  image?: string;
}) => (
  <div className="group">
    {image && (
      <div className="relative aspect-[3/4] overflow-hidden bg-surface mb-4">
        <img
          src={image}
          alt={`${name} · NL Arquitetos`}
          className="absolute inset-0 w-full h-full object-cover grayscale-[15%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
    )}
    <div className="flex items-baseline gap-2 mb-1">
      <span className="font-mono text-xs text-primary/70">→</span>
      <Editable as="h3" id={`p.${id}.name`} className="font-display text-xl md:text-2xl text-foreground leading-tight">
        {name}
      </Editable>
    </div>
    <div className="pl-5 space-y-0.5">
      <Editable
        id={`p.${id}.role`}
        className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground block"
      >
        {role}
      </Editable>
      <Editable id={`p.${id}.cau`} className="font-mono text-[9px] tracking-[0.2em] text-primary/60 block">
        {cau}
      </Editable>
    </div>
  </div>
);

const CaseStat = ({ id, value, label }: { id: string; value: string; label: string }) => (
  <div>
    <Editable id={`${id}.v`} className="font-display text-3xl text-primary block mb-1">
      {value}
    </Editable>
    <Editable
      id={`${id}.l`}
      className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground leading-tight block"
    >
      {label}
    </Editable>
  </div>
);

const Contact = ({ id, label, value }: { id: string; label: string; value: string }) => {
  const valueRef = useRef<HTMLDivElement | null>(null);
  const [breakMode, setBreakMode] = useState<"normal" | "words" | "all">("normal");

  useLayoutEffect(() => {
    const el = valueRef.current;
    if (!el) return;

    const measure = () => {
      // Reset to normal so we can measure natural overflow
      el.style.wordBreak = "normal";
      el.style.overflowWrap = "normal";

      if (el.scrollWidth <= el.clientWidth + 1) {
        setBreakMode("normal");
        return;
      }

      // Try break-words first (preserves whole words when possible)
      el.style.overflowWrap = "anywhere";
      el.style.wordBreak = "normal";
      if (el.scrollWidth <= el.clientWidth + 1) {
        setBreakMode("words");
        return;
      }

      // Last resort: break-all (mid-word break for very long tokens like emails/URLs)
      setBreakMode("all");
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [value]);

  const breakClass =
    breakMode === "all" ? "break-all" : breakMode === "words" ? "break-words [overflow-wrap:anywhere]" : "";

  return (
    <div className="min-w-0">
      <Editable id={`${id}.lbl`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/70 block mb-2">
        {label}
      </Editable>
      <div ref={valueRef} className={`block ${breakClass}`}>
        <Editable id={`${id}.val`} className="font-display text-base md:text-lg text-foreground/90 block">
          {value}
        </Editable>
      </div>
    </div>
  );
};

const ScopeRow = ({ idx, n, t, d }: { idx: number | string; n: string; t: string; d: string }) => (
  <div className="group border-t border-border/60 last:border-b py-8 grid grid-cols-12 gap-6 items-baseline transition-colors hover:bg-surface/40 px-4 -mx-4">
    <span className="col-span-2 md:col-span-1 font-mono text-xs text-primary/70 tracking-[0.2em]">{n}</span>
    <Editable
      as="h3"
      id={`scope.${idx}.t`}
      className="col-span-10 md:col-span-4 font-display text-2xl md:text-3xl text-foreground"
    >
      {t}
    </Editable>
    <Editable
      id={`scope.${idx}.d`}
      multiline
      as="p"
      className="col-span-12 md:col-span-7 font-display text-foreground/70 leading-relaxed"
    >
      {d}
    </Editable>
  </div>
);

const BenefitCard = ({ t, d, idx, impact }: { t: string; d: string; idx: number; impact?: string }) => (
  <div className="bg-background p-8 md:p-10 group hover:bg-surface/60 transition-colors">
    {impact && (
      <Editable
        id={`benefit.${idx}.impact`}
        className="font-display block leading-none mb-4"
        ariaLabel="Editar impacto"
      >
        <span style={{ color: "#8B7355", fontSize: "clamp(2.5rem, 3.6vw, 3.5rem)" }}>{impact}</span>
      </Editable>
    )}
    <div className="gold-line w-8 mb-6 group-hover:w-16 transition-all duration-700" />
    <Editable
      as="h3"
      id={`benefit.${idx}.t`}
      className="font-display text-2xl md:text-3xl text-foreground mb-4 leading-tight"
    >
      {t}
    </Editable>
    <Editable id={`benefit.${idx}.d`} multiline as="p" className="font-display text-foreground/70 leading-relaxed">
      {d}
    </Editable>
  </div>
);

const PaymentTier = ({ id, label, value, sub }: { id: string; label: string; value: string; sub: string }) => (
  <div className="px-8 py-8 text-center">
    <Editable id={`${id}.lbl`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/70 block mb-3">
      {label}
    </Editable>
    <Editable id={`${id}.val`} className="font-display text-4xl md:text-5xl text-foreground block mb-2">
      {value}
    </Editable>
    <Editable id={`${id}.sub`} className="font-display italic text-sm text-foreground/60 block">
      {sub}
    </Editable>
  </div>
);

const DifferentialItem = ({ r, t, d }: { r: string; t: string; d: string }) => (
  <div className="group">
    <div className="flex items-baseline gap-6 mb-4">
      <span className="font-display text-6xl md:text-7xl text-primary/20 leading-none shrink-0 select-none">{r}</span>
      <span className="h-px flex-1 bg-border group-hover:bg-primary/60 transition-colors duration-700" />
    </div>
    <Editable as="h3" id={`diff.${r}.t`} className="font-display text-3xl md:text-4xl text-foreground mb-4">
      {t}
    </Editable>
    <Editable id={`diff.${r}.d`} multiline as="p" className="font-display text-foreground/70 leading-relaxed max-w-md">
      {d}
    </Editable>
  </div>
);

const NextStep = ({
  n,
  timing,
  t,
  d,
  index,
}: {
  n: string;
  timing: string;
  t: string;
  d: string;
  index: number;
}) => {
  const isLeft = index % 2 === 0;
  return (
    <div className="relative md:grid md:grid-cols-2 md:gap-16 group">
      {/* Marker dot on the line */}
      <div className="absolute left-[28px] md:left-1/2 md:-translate-x-1/2 top-2 z-10">
        <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-background transition-all duration-500 group-hover:scale-125" />
      </div>

      {/* Content */}
      <div
        className={`pl-20 md:pl-0 ${
          isLeft ? "md:pr-16 md:text-right md:col-start-1" : "md:pl-16 md:col-start-2"
        }`}
      >
        {/* Outline number */}
        <span
          className="font-display text-7xl md:text-8xl leading-none block mb-3 select-none"
          style={{
            WebkitTextStroke: "1px hsl(var(--primary) / 0.5)",
            color: "transparent",
          }}
        >
          {n}
        </span>

        {/* Timing tag */}
        <span
          className={`font-mono text-[10px] uppercase tracking-[0.3em] text-primary inline-flex items-center gap-2 mb-4 ${
            isLeft ? "md:flex-row-reverse" : ""
          }`}
        >
          <span className="w-6 h-px bg-primary/60" />
          {timing}
        </span>

        <Editable
          as="h3"
          id={`next.${n}.t`}
          className="font-display text-3xl md:text-4xl text-foreground mb-3 leading-tight block"
        >
          {t}
        </Editable>
        <Editable
          id={`next.${n}.d`}
          multiline
          as="p"
          className="font-display text-foreground/70 leading-relaxed text-lg"
        >
          {d}
        </Editable>
      </div>
    </div>
  );
};

const Condition = ({ id, label, value }: { id: string; label: string; value: string }) => (
  <div className="min-w-0">
    <Editable id={`${id}.lbl`} className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/70 block mb-2">
      {label}
    </Editable>
    <Editable id={`${id}.val`} multiline as="p" className="font-display text-foreground/80 leading-relaxed break-words">
      {value}
    </Editable>
  </div>
);

const ValueAnchor = ({
  id,
  label,
  value,
  sub,
  highlight,
  muted,
}: {
  id: string;
  label: string;
  value: string;
  sub: string;
  highlight?: boolean;
  muted?: boolean;
}) => (
  <div
    className={`px-6 py-8 border ${highlight ? "border-primary bg-primary/[0.04]" : "border-border/60 bg-background/40"}`}
  >
    <Editable
      id={`${id}.lbl`}
      className={`font-mono text-[10px] uppercase tracking-[0.3em] block mb-3 ${highlight ? "text-primary" : "text-muted-foreground"}`}
    >
      {label}
    </Editable>
    <Editable
      id={`${id}.val`}
      className={`font-display text-4xl md:text-5xl block leading-none mb-2 ${highlight ? "text-primary" : muted ? "text-foreground/40" : "text-foreground"}`}
    >
      {value}
    </Editable>
    <Editable id={`${id}.sub`} className="font-display italic text-sm text-foreground/55 block">
      {sub}
    </Editable>
  </div>
);

const PhaseTimeline = ({
  trackId,
  number,
  title,
  duration,
  phases,
}: {
  trackId: string;
  number: string;
  title: string;
  duration: string;
  phases: { n: string; t: string; d: string; optional?: boolean }[];
}) => (
  <div className="group/timeline">
    {/* Cabeçalho da trilha */}
    <div className="flex flex-wrap items-end justify-between gap-3 mb-10 border-b border-primary/30 pb-5">
      <div className="flex items-baseline gap-3 md:gap-5 flex-wrap">
        <Editable
          id={`etapas.${trackId}.num`}
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary"
        >
          {`Trilha ${number}`}
        </Editable>
        <Editable
          as="h3"
          id={`etapas.${trackId}.title`}
          className="font-display text-2xl md:text-4xl text-foreground leading-tight"
        >
          {title}
        </Editable>
      </div>
      <Editable
        id={`etapas.${trackId}.dur`}
        className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block"
      >
        {duration}
      </Editable>
    </div>

    {/* Timeline — vertical no mobile, horizontal no desktop */}
    <div className="relative">
      {/* Linha base (apenas desktop, horizontal) */}
      <div className="absolute left-0 right-0 top-[26px] h-px bg-border hidden md:block" aria-hidden />
      <div
        className="absolute left-0 top-[26px] h-px bg-primary/40 transition-all duration-700 group-hover/timeline:bg-primary hidden md:block"
        style={{ right: `${100 / phases.length / 2}%` }}
        aria-hidden
      />
      {/* Linha vertical (apenas mobile) */}
      <div className="absolute left-[26px] top-0 bottom-0 w-px bg-border md:hidden" aria-hidden />

      <ol
        className="relative grid gap-8 md:gap-6 grid-cols-1"
        style={{
          gridTemplateColumns: `repeat(var(--phase-cols, 1), minmax(0, 1fr))`,
        }}
        ref={(el) => {
          if (el) {
            const update = () => el.style.setProperty('--phase-cols', window.innerWidth >= 768 ? String(phases.length) : '1');
            update();
            window.addEventListener('resize', update);
          }
        }}
      >
        {phases.map((p, i) => (
          <li key={i} className="relative flex md:flex-col items-start gap-4 md:gap-0 group/step">
            {/* Marcador circular */}
            <div
              className={`relative z-10 flex items-center justify-center w-[52px] h-[52px] shrink-0 rounded-full bg-background md:mb-5 transition-all duration-500 group-hover/step:scale-110 ${
                p.optional
                  ? "border border-dashed border-primary/40 group-hover/step:border-primary group-hover/step:bg-background"
                  : "border border-primary/40 group-hover/step:bg-primary group-hover/step:border-primary"
              }`}
            >
              <Editable
                id={`etapas.${trackId}.${i}.n`}
                className={`font-mono text-[11px] tracking-[0.15em] text-primary transition-colors ${
                  p.optional ? "" : "group-hover/step:text-primary-foreground"
                }`}
              >
                {p.n}
              </Editable>
            </div>

            <div className="flex-1 min-w-0 md:mt-0">
              {p.optional && (
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-primary/70 mb-1 block">
                  Opcional
                </span>
              )}
              <Editable
                as="h4"
                id={`etapas.${trackId}.${i}.t`}
                className="font-display text-base md:text-lg text-foreground leading-snug mb-2 md:mt-2 pr-2"
              >
                {p.t}
              </Editable>
              <Editable
                id={`etapas.${trackId}.${i}.d`}
                multiline
                as="p"
                className="font-display italic text-[13px] text-foreground/60 leading-relaxed pr-3"
              >
                {p.d}
              </Editable>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </div>
);

const PhaseCard = ({
  idx,
  n,
  t,
  d,
  optional,
}: {
  idx: string;
  n: string;
  t: string;
  d: string;
  optional?: boolean;
}) => (
  <div className="bg-background p-8 group hover:bg-surface/60 transition-colors">
    <div className="flex items-baseline justify-between mb-6">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/70">{n}</span>
      {optional && (
        <Editable
          id={`phase.${idx}.opt`}
          className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground/70 border border-border/60 px-2 py-0.5"
        >
          Opcional
        </Editable>
      )}
    </div>
    <Editable
      as="h3"
      id={`phase.${idx}.t`}
      className="font-display text-xl md:text-2xl text-foreground mb-3 leading-tight"
    >
      {t}
    </Editable>
    <Editable
      id={`phase.${idx}.d`}
      multiline
      as="p"
      className="font-display italic text-sm text-foreground/65 leading-relaxed"
    >
      {d}
    </Editable>
  </div>
);

type ScopeBloco = {
  id: string;
  num: string;
  title: string;
  note?: string;
  description?: string;
  items?: string[];
  wide?: boolean;
};

const SCOPE_ARQ: ScopeBloco[] = [
  {
    id: "caderno-geral",
    num: "I",
    title: "Caderno Geral",
    items: [
      "Prancha de índice",
      "Planta de situação, locação e cobertura",
      "Planta de layout",
      "Plantas construtivas",
      "Planta de paginação de piso",
      "Planta de forro",
      "Projeto luminotécnico",
    ],
  },
  {
    id: "mapas-instalacoes",
    num: "II",
    title: "Mapas de Instalações",
    note: "em parceria com engenheiros especializados",
    items: [
      "Instalações elétricas",
      "Instalações hidráulicas",
      "Ar-condicionado",
      "Pontos de gás",
      "Revestimentos",
    ],
  },
  {
    id: "detalhes-construtivos",
    num: "III",
    title: "Caderno de Detalhes Construtivos",
    items: [
      "Detalhamentos gerais",
      "Representação gráfica por ambiente",
      "Portas e esquadrias",
      "Marmoraria",
      "Marcenaria",
      "Porcelanataria",
    ],
  },
  {
    id: "memorial",
    num: "IV",
    title: "Memorial Descritivo",
    items: [
      "Componentes construtivos identificados",
      "Localizados em planta",
      "Quantificados por ambiente",
      "Base para orçamento de obra sem improviso",
    ],
  },
];

const SCOPE_INT: ScopeBloco[] = [
  {
    id: "caderno-geral-int",
    num: "I",
    title: "Caderno Geral",
    wide: true,
    items: [
      "Capa",
      "Imagens aprovadas",
      "Quadros quantitativos e especificações",
      "Planta baixa de layout",
      "Planta baixa demolir / construir",
      "Planta baixa construtiva",
      "Paginação de piso",
      "Mapa de revestimentos",
      "Planta de forro",
      "Luminotécnico",
      "Instalações elétricas, hidráulicas e ar-condicionado  *",
    ],
  },
  {
    id: "detalhes-int",
    num: "II",
    title: "Caderno de Detalhes Construtivos",
    description:
      "Graficação de todos os detalhes necessários para execução conforme complexidade do projeto.",
  },
  {
    id: "ambientes-int",
    num: "III",
    title: "Caderno de Ambientes",
    description:
      "Especificações completas por ambiente com localizações de vistas e siglas de materiais.",
  },
  {
    id: "esquadrias-int",
    num: "IV",
    title: "Caderno de Esquadrias",
    description:
      "Especificação e localização de todas as esquadrias novas com detalhamento para fabricação.",
  },
  {
    id: "marmoraria-int",
    num: "V",
    title: "Caderno de Marmoraria",
    description:
      "Bancadas, soleiras, bordas, nichos e elementos em mármore ou pedra natural.",
  },
  {
    id: "porcelanataria-int",
    num: "VI",
    title: "Caderno de Porcelanataria",
    description:
      "Paginação, perfis, fixação e intervenções em revestimentos cerâmicos por ambiente.",
  },
  {
    id: "marcenaria-int",
    num: "VII",
    title: "Caderno de Marcenaria",
    wide: false,
    description:
      "Detalhamento completo de todo mobiliário fabricado sob medida.",
  },
];

const ScopeBlocos = ({ data, trackId }: { data: ScopeBloco[]; trackId: string }) => {
  const hasFootnote = data.some((b) => b.items?.some((i) => i.includes("*")) || (b.description?.includes("*")));
  return (
    <div>
      <div className="grid grid-cols-12 gap-px bg-border border border-border">
        {data.map((bloco) => (
          <article
            key={bloco.id}
            className={cn(
              "bg-background p-7 md:p-8 flex flex-col col-span-12",
              bloco.wide ? "md:col-span-12" : "md:col-span-6"
            )}
          >
            <div className="flex items-baseline gap-3 mb-5">
              <span className="font-display italic text-2xl text-primary/60">{bloco.num}</span>
              <Editable
                as="h4"
                id={`scope.${trackId}.${bloco.id}.title`}
                className="font-display text-xl md:text-[1.4rem] leading-tight text-foreground"
              >
                {bloco.title}
              </Editable>
            </div>

            {bloco.note && (
              <Editable
                id={`scope.${trackId}.${bloco.id}.note`}
                className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary/80 mb-4 -mt-1"
              >
                {bloco.note}
              </Editable>
            )}

            {bloco.description && (
              <Editable
                as="p"
                id={`scope.${trackId}.${bloco.id}.description`}
                className="font-display italic text-[0.95rem] text-foreground/75 leading-relaxed mt-1"
              >
                {bloco.description}
              </Editable>
            )}

            {bloco.items && (
              <ul className={cn("space-y-2 mt-1", bloco.wide && "md:columns-2 md:gap-x-10 md:space-y-0")}>
                {bloco.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group/item md:break-inside-avoid md:mb-2">
                    <span className="mt-[0.55rem] h-px w-3 bg-primary/40 flex-shrink-0 group-hover/item:bg-primary group-hover/item:w-5 transition-all duration-300" />
                    <Editable
                      as="span"
                      id={`scope.${trackId}.${bloco.id}.item.${i}`}
                      className="font-display text-[0.95rem] text-foreground/80 leading-snug"
                    >
                      {item}
                    </Editable>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>

      {hasFootnote && (
        <div className="mt-6 pl-4 border-l-2 border-primary/40">
          <Editable
            as="p"
            id={`scope.${trackId}.footnote`}
            className="font-display italic text-[0.9rem] text-foreground/70 leading-relaxed"
          >
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
        <TabsTrigger
          value="arq"
          className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary text-muted-foreground rounded-none px-0 pb-4 font-mono text-[11px] uppercase tracking-[0.3em] border-b-2 border-transparent data-[state=active]:border-primary"
        >
          Arquitetônico
        </TabsTrigger>
        <TabsTrigger
          value="int"
          className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary text-muted-foreground rounded-none px-0 pb-4 font-mono text-[11px] uppercase tracking-[0.3em] border-b-2 border-transparent data-[state=active]:border-primary"
        >
          Interiores
        </TabsTrigger>
      </TabsList>
      <TabsContent value="arq" className="mt-0">
        <ScopeBlocos data={SCOPE_ARQ} trackId="arq" />
        <Editable
          id="scope.arq.parceria"
          multiline
          as="p"
          className="mt-6 font-display italic text-sm text-foreground/65 leading-relaxed border-l-2 border-primary/40 pl-4"
        >
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

const TimelineNode = ({ idx, m, t, trail }: { idx: number; m: string; t: string; trail: "ARQ" | "INT" }) => (
  <div className="relative">
    <div className="hidden md:flex justify-center">
      <span
        className={`relative z-10 w-3 h-3 rounded-full border-2 ${trail === "ARQ" ? "bg-primary border-primary" : "bg-background border-primary"}`}
      />
    </div>
    <div className="md:mt-6 text-left md:text-center">
      <Editable
        id={`crono.${idx}.m`}
        className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80 block mb-2"
      >
        {m}
      </Editable>
      <Editable
        as="h4"
        id={`crono.${idx}.t`}
        multiline
        className="font-display text-base text-foreground/90 leading-tight mb-2"
      >
        {t}
      </Editable>
      <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground/70">
        Trilha · {trail === "ARQ" ? "Arquitetura" : "Interiores"}
      </span>
    </div>
  </div>
);

const PackageCard = ({
  id,
  tier,
  tagline,
  price,
  priceNote,
  cta,
  ctaHref,
  recommended,
}: {
  id: string;
  tier: string;
  tagline: string;
  price: string;
  priceNote: string;
  cta: string;
  ctaHref: string;
  recommended?: boolean;
}) => (
  <div
    className={`relative flex flex-col p-10 md:p-12 ${recommended ? "border-2 border-primary bg-background" : "border border-border/60 bg-background/60"}`}
  >
    {recommended && (
      <div className="absolute -top-3 left-10 bg-primary text-primary-foreground px-4 py-1">
        <Editable id={`pkg.${id}.badge`} className="font-mono text-[9px] uppercase tracking-[0.3em]">
          ◆ Mais escolhido
        </Editable>
      </div>
    )}
    <div className="mb-8">
      <Editable
        id={`pkg.${id}.tier`}
        className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80 block mb-4"
      >
        {tier}
      </Editable>
      <Editable
        as="h3"
        id={`pkg.${id}.tagline`}
        multiline
        className="font-display text-3xl md:text-4xl text-foreground leading-tight mb-6"
      >
        {tagline}
      </Editable>
      <div className="gold-line w-12 mb-6" />
      <Editable
        id={`pkg.${id}.price.note`}
        className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-1"
      >
        {priceNote}
      </Editable>
      <Editable
        id={`pkg.${id}.price`}
        className={`font-display text-5xl md:text-6xl leading-none block ${recommended ? "text-primary" : "text-foreground"}`}
      >
        {price}
      </Editable>
    </div>
    <a
      href={ctaHref}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center justify-center gap-4 px-8 py-4 font-mono text-xs uppercase tracking-[0.3em] transition-colors duration-500 self-stretch ${recommended ? "bg-primary text-primary-foreground hover:bg-primary-glow" : "border border-foreground/30 text-foreground hover:border-primary hover:text-primary"}`}
    >
      <Editable id={`pkg.${id}.cta`} className="inline-block">
        {cta}
      </Editable>
      <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
    </a>
  </div>
);

const COMPARISON_GROUPS: {
  group: string;
  rows: { id: string; label: string; basic: string | boolean; premium: string | boolean }[];
}[] = [
  {
    group: "Arquitetura",
    rows: [
      { id: "cmp.arq.1", label: "Levantamento & Briefing", basic: true, premium: true },
      { id: "cmp.arq.2", label: "Criação do Conceito", basic: true, premium: true },
      { id: "cmp.arq.3", label: "Estudo Preliminar com 3D", basic: true, premium: true },
      { id: "cmp.arq.4", label: "Projeto Legal & Aprovações", basic: true, premium: true },
      { id: "cmp.arq.5", label: "Projeto Executivo Arquitetônico", basic: true, premium: true },
    ],
  },
  {
    group: "Documentação técnica",
    rows: [
      { id: "cmp.doc.1", label: "Caderno Geral completo", basic: true, premium: true },
      { id: "cmp.doc.2", label: "Caderno de Detalhes Construtivos", basic: true, premium: true },
      { id: "cmp.doc.3", label: "Memorial Descritivo", basic: true, premium: true },
      { id: "cmp.doc.4", label: "Mapas de Instalações (em parceria)", basic: true, premium: true },
    ],
  },
  {
    group: "Visualização 3D",
    rows: [
      { id: "cmp.vis.1", label: "Concepção 3D de Alta Fidelidade", basic: false, premium: true },
      { id: "cmp.vis.2", label: "Vídeo 3D 360°", basic: false, premium: true },
    ],
  },
  {
    group: "Interiores",
    rows: [
      { id: "cmp.int.1", label: "Projeto Executivo de Interiores", basic: false, premium: true },
      { id: "cmp.int.2", label: "Caderno de Ambientes", basic: false, premium: true },
      { id: "cmp.int.3", label: "Caderno de Esquadrias", basic: false, premium: true },
      { id: "cmp.int.4", label: "Caderno de Marmoraria", basic: false, premium: true },
      { id: "cmp.int.5", label: "Caderno de Porcelanataria", basic: false, premium: true },
      { id: "cmp.int.6", label: "Caderno de Marcenaria", basic: false, premium: true },
    ],
  },
  {
    group: "Viabilidade",
    rows: [
      { id: "cmp.viab.1", label: "EVF — Viabilidade Financeira", basic: false, premium: "Opcional" },
    ],
  },
];

const ComparisonCell = ({ value }: { value: string | boolean }) => {
  if (value === true) return <span className="font-mono text-primary text-base">✓</span>;
  if (value === false) return <span className="font-mono text-muted-foreground/30 text-base">—</span>;
  return <span className="font-display text-sm text-foreground/85 leading-snug">{value}</span>;
};

const ComparisonTable = () => (
  <div className="mt-20 max-w-6xl mx-auto">
    <div className="text-center mb-10">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80 block mb-3">
        Comparativo detalhado
      </span>
      <Editable
        as="h3"
        id="cmp.title"
        multiline
        className="font-display text-3xl md:text-4xl leading-tight text-balance max-w-2xl mx-auto"
      >
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
          <span className="font-mono text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-muted-foreground block mb-1">
            Pacote
          </span>
          <span className="font-display text-sm md:text-xl text-foreground">Essencial</span>
        </div>
        <div className="px-2 md:px-6 py-4 md:py-5 border-l border-border/60 text-center bg-primary/[0.04] relative min-w-0">
          <div className="absolute top-0 inset-x-0 h-px bg-primary" />
          <span className="font-mono text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary/80 block mb-1">
            Recomendado
          </span>
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
            <div
              key={r.id}
              className={`grid grid-cols-[1.4fr_1fr_1fr] md:grid-cols-[1.6fr_1fr_1fr] ${ri === g.rows.length - 1 && gi === COMPARISON_GROUPS.length - 1 ? "" : "border-b border-border/40"}`}
            >
              <div className="px-2 md:px-6 py-3 md:py-4 flex items-center min-w-0">
                <Editable id={`${r.id}.label`} className="font-display text-[11px] md:text-sm text-foreground/85 leading-snug break-words">
                  {r.label}
                </Editable>
              </div>
              <div className="px-2 md:px-6 py-3 md:py-4 border-l border-border/40 flex items-center justify-center text-center min-w-0">
                {typeof r.basic === "string" ? (
                  <Editable id={`${r.id}.basic`} className="font-display text-[11px] md:text-sm text-foreground/75 leading-snug break-words">
                    {r.basic}
                  </Editable>
                ) : (
                  <ComparisonCell value={r.basic} />
                )}
              </div>
              <div className="px-2 md:px-6 py-3 md:py-4 border-l border-border/40 flex items-center justify-center text-center bg-primary/[0.025] min-w-0">
                {typeof r.premium === "string" ? (
                  <Editable
                    id={`${r.id}.premium`}
                    className="font-display text-[11px] md:text-sm text-primary leading-snug font-medium break-words"
                  >
                    {r.premium}
                  </Editable>
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
    <Editable
      id="cmp.footnote"
      multiline
      as="p"
      className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground text-center mt-6 leading-relaxed"
    >
      Pacotes podem ser personalizados conforme a complexidade do projeto.
    </Editable>
  </div>
);

export default Index;
