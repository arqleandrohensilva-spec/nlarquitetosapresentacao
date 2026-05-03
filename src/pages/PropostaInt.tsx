import { useState, useRef, useLayoutEffect } from "react";
import bandMaterial from "@/assets/band-material.jpg";
import bandInterior from "@/assets/band-interior.jpg";
import bandBlueprint from "@/assets/band-blueprint.jpg";
import bandIntermezzo02 from "@/assets/band-intermezzo-02.jpg";
import Editable from "@/components/Editable";
import SectionNavProposta from "@/components/SectionNavProposta";
import PdfExportButtonProposta from "@/components/PdfExportButtonProposta";
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

const PropostaInt = () => {
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <SectionNavProposta />

      {/* 01 · CAPA */}
      <section id="capa" className="relative min-h-screen flex flex-col justify-end px-6 md:px-16 lg:px-24 py-20">
        <img src={propostaCapa} alt="NL Arquitetos · monograma" className="absolute inset-0 w-full h-full object-cover opacity-90 contrast-110 saturate-125" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/95" />
        <div className="absolute inset-0 vignette opacity-60" />

        <div className="relative z-10 max-w-4xl fade-up">
          <Editable id="proposta-int.capa.eyebrow" className="eyebrow mb-8 inline-block">Carta Proposta · Confidencial</Editable>
          <Editable as="h1" id="proposta-int.capa.title" multiline className="font-display text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.95] text-foreground mb-8 text-balance">
            A decisão tomada
            <br />
            <em className="text-primary not-italic font-light">antes</em> da obra.
          </Editable>
          <div className="gold-line w-32 mb-8" />
          <Editable id="proposta-int.capa.subtitle" multiline className="font-display italic text-xl md:text-2xl text-foreground/70 max-w-xl block">
            Projeto executivo de interiores com especificação completa — para que cada material, cada medida e cada detalhe seja decidido antes da execução.
          </Editable>
          <div className="mt-12 flex items-center gap-4 text-muted-foreground">
            <span className="h-px w-12 bg-primary/40" />
            <Editable id="proposta-int.capa.validity" className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/80">Validade · 30 dias corridos</Editable>
          </div>
        </div>
      </section>

      {/* 02 · MANIFESTO */}
      <section id="manifesto" className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-32">
        <div className="grid grid-cols-12 gap-8 w-full max-w-7xl mx-auto">
          <div className="col-span-12 md:col-span-3">
            <span className="number-marker block mb-2">02</span>
            <Editable id="proposta-int.manifesto.eyebrow" className="eyebrow">Manifesto</Editable>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Editable as="h2" id="proposta-int.manifesto.title" multiline className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-16 text-balance">
              Antes de desenhar, <em className="text-primary not-italic">escutamos.</em>
              <br />
              Antes de construir, <em className="text-primary not-italic">decidimos.</em>
            </Editable>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
              <Editable id="proposta-int.manifesto.p1" multiline as="p" className="font-display text-lg md:text-xl leading-relaxed text-foreground/80">
                A NL não começa pelo desenho. Começa pela escuta — entendendo o espaço, o modo de viver e o que cada ambiente precisa ser. Só depois o primeiro traço aparece. E quando aparece, já foi validado.
              </Editable>
              <Editable id="proposta-int.manifesto.p2" multiline as="p" className="font-display text-lg md:text-xl leading-relaxed text-foreground/80">
                Cada decisão tomada em projeto evita uma decisão custosa na obra. Não é opinião — é lógica construtiva. Quando você decide durante a execução, o material já foi comprado e o erro já virou retrabalho.
              </Editable>
            </div>
            <div className="mt-20 pl-8 border-l border-primary/40 max-w-2xl">
              <Editable id="proposta-int.manifesto.quote" multiline as="p" className="font-display italic text-2xl md:text-3xl text-primary/90 leading-snug">
                "Beleza sem método é apenas decoração. Interiores é a decisão tomada antes do primeiro traço."
              </Editable>
            </div>
          </div>
        </div>
      </section>

      {/* 03 · QUEM CONDUZ */}
      <section id="apresentacao" className="relative min-h-screen px-6 md:px-16 lg:px-24 py-16 lg:py-20 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-baseline justify-between mb-8 lg:mb-10 border-b border-border/60 pb-4">
            <div className="flex items-baseline gap-6">
              <span className="number-marker">03</span>
              <Editable id="proposta-int.apresentacao.eyebrow" className="eyebrow">Quem conduz</Editable>
            </div>
            <Editable id="proposta-int.apresentacao.tag" className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hidden md:block">Dois arquitetos · Um método</Editable>
          </div>
          <div className="grid grid-cols-12 gap-x-8 gap-y-10 items-start">
            <div className="col-span-12 lg:col-span-6">
              <Editable as="h2" id="proposta-int.apresentacao.title" multiline className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.0] text-balance mb-6">
                A NL não é definida por quem assina —<br /><em className="text-primary not-italic">é definida pelo processo.</em>
              </Editable>
              <Editable id="proposta-int.apresentacao.body" multiline as="p" className="font-display text-base lg:text-lg leading-relaxed text-foreground/75 max-w-xl">
                Fundada por Leandro e Neandro, a NL une visão estratégica e disciplina executiva em um único método. Transformamos o desejo do cliente em projeto executivo sem perdas.
              </Editable>
            </div>
            <aside className="col-span-12 lg:col-span-6 lg:pl-10 lg:border-l border-border/60">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-surface mb-4">
                    <img src={propostaLeandro} alt="Leandro Henrique" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <Editable id="proposta-int.partner.leandro" className="font-display text-xl text-foreground">Leandro Henrique</Editable>
                </div>
                <div className="group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-surface mb-4">
                    <img src={propostaNeandro} alt="Neandro Jacque" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <Editable id="proposta-int.partner.neandro" className="font-display text-xl text-foreground">Neandro Jacque</Editable>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <PdfExportButtonProposta />
    </main>
  );
};

export default PropostaInt;
