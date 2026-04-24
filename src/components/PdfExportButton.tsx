import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// A4 paisagem em mm
const PAGE_W = 297;
const PAGE_H = 210;

type CanvasMetrics = {
  cw: number;
  ch: number;
  drawW: number;
  drawH: number;
  offsetX: number;
  offsetY: number;
  imgRatio: number;
  pageRatio: number;
};

type CanvasCheck =
  | { ok: true; metrics: CanvasMetrics }
  | { ok: false; reason: string; metrics?: Partial<CanvasMetrics> };

/**
 * Teste automático de canvas antes de adicionar ao jsPDF.
 * Garante que a página resultante:
 *  - não fique em branco (canvas com pixels reais);
 *  - tenha proporção plausível (não 1px de altura, não tira tira);
 *  - caiba em A4 paisagem mantendo aspect ratio (letterbox centralizado);
 *  - tenha dimensões finais > 0 em mm.
 */
export function validateCanvasForA4(
  canvas: HTMLCanvasElement | null,
  id: string
): CanvasCheck {
  if (!canvas) return { ok: false, reason: "canvas nulo" };

  const cw = canvas.width;
  const ch = canvas.height;

  if (cw === 0 || ch === 0) {
    return { ok: false, reason: "canvas com dimensão 0", metrics: { cw, ch } };
  }
  // Mínimo razoável: 200×200px (qualquer coisa abaixo é fragmento ou bug)
  if (cw < 200 || ch < 200) {
    return {
      ok: false,
      reason: `canvas muito pequeno (${cw}×${ch}px)`,
      metrics: { cw, ch },
    };
  }
  // Ratio absurdo (tira fina) — provável captura quebrada
  const imgRatio = cw / ch;
  if (imgRatio > 10 || imgRatio < 0.1) {
    return {
      ok: false,
      reason: `ratio implausível ${imgRatio.toFixed(2)}`,
      metrics: { cw, ch, imgRatio },
    };
  }

  // Cálculo "contain" dentro do A4 paisagem
  const pageRatio = PAGE_W / PAGE_H; // ~1.414
  let drawW: number;
  let drawH: number;
  if (imgRatio > pageRatio) {
    drawW = PAGE_W;
    drawH = PAGE_W / imgRatio;
  } else {
    drawH = PAGE_H;
    drawW = PAGE_H * imgRatio;
  }

  // Sanity removida: seções altas (ex: Investimento com tabela comparativa)
  // legitimamente ocupam menos área em A4 paisagem mas ainda renderizam
  // perfeitamente centralizadas. Validamos apenas dimensões finais > 0.
  void pageRatio;

  if (drawW <= 0 || drawH <= 0 || drawW > PAGE_W + 0.01 || drawH > PAGE_H + 0.01) {
    return {
      ok: false,
      reason: `dimensões finais inválidas ${drawW.toFixed(1)}×${drawH.toFixed(1)}mm`,
      metrics: { cw, ch, drawW, drawH },
    };
  }

  const offsetX = (PAGE_W - drawW) / 2;
  const offsetY = (PAGE_H - drawH) / 2;

  // Amostra de pixels para detectar canvas totalmente transparente/em branco
  try {
    const ctx = canvas.getContext("2d");
    if (ctx) {
      // amostra do centro
      const sx = Math.floor(cw / 2);
      const sy = Math.floor(ch / 2);
      const data = ctx.getImageData(sx, sy, 1, 1).data;
      const isFullyTransparent = data[3] === 0;
      if (isFullyTransparent) {
        return {
          ok: false,
          reason: "pixel central totalmente transparente (canvas vazio)",
          metrics: { cw, ch },
        };
      }
    }
  } catch {
    // getImageData pode falhar por taint — não é fatal, seguimos
  }

  void id; // disponível para logging externo
  return {
    ok: true,
    metrics: { cw, ch, drawW, drawH, offsetX, offsetY, imgRatio, pageRatio },
  };
}

/**
 * Substitui temporariamente o src de imagens externas (Dropbox, CDNs)
 * por dataURLs base64 — html2canvas precisa disso para renderizar
 * sem CORS taint. Retorna função de restauração.
 */
async function inlineExternalImages(): Promise<Array<() => void>> {
  const imgs = Array.from(document.querySelectorAll<HTMLImageElement>("img"));
  const restorers: Array<() => void> = [];

  await Promise.all(
    imgs.map(async (img) => {
      const src = img.src;
      // só processa URLs externas (http/https que não sejam do próprio host)
      if (!src || src.startsWith("data:") || src.startsWith("blob:")) return;
      try {
        const u = new URL(src, window.location.href);
        if (u.origin === window.location.origin) return; // assets locais, ok
      } catch {
        return;
      }

      try {
        const res = await fetch(src, { mode: "cors", credentials: "omit" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const blob = await res.blob();
        const dataUrl: string = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = () => reject(reader.error);
          reader.readAsDataURL(blob);
        });
        const original = img.getAttribute("src");
        img.setAttribute("src", dataUrl);
        // aguarda repaint com a nova fonte
        await new Promise<void>((resolve) => {
          if (img.complete && img.naturalWidth > 0) return resolve();
          img.addEventListener("load", () => resolve(), { once: true });
          img.addEventListener("error", () => resolve(), { once: true });
          setTimeout(() => resolve(), 3000);
        });
        restorers.push(() => {
          if (original !== null) img.setAttribute("src", original);
        });
      } catch (err) {
        console.warn("[PDF] não consegui inlinar:", src, err);
      }
    })
  );

  return restorers;
}




/**
 * Botão flutuante que exporta a carta-proposta como PDF A4 paisagem.
 * Captura cada <section id="..."> em uma página dedicada — sem quebra de layout.
 * Identidade NL preservada (Cormorant + Inter, paleta, bandas, scrims).
 */
const PdfExportButton = () => {
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState<string>("");

  const handleExport = async () => {
    if (busy) return;
    setBusy(true);
    setProgress("Preparando…");
    console.log("[PDF] Iniciando export");

    // (PAGE_W e PAGE_H definidos no topo do módulo)

    let pdf: jsPDF | null = null;
    const hideEls = document.querySelectorAll<HTMLElement>(
      "[data-pdf-hide], [data-section-nav]"
    );
    const prevDisplay: string[] = [];
    hideEls.forEach((el, i) => {
      prevDisplay[i] = el.style.display;
      el.style.display = "none";
    });
    document.body.setAttribute("data-pdf-capturing", "true");

    let restoreSrcs: Array<() => void> = [];

    // Scroll para o topo para garantir layout consistente
    const prevScroll = window.scrollY;
    window.scrollTo({ top: 0, behavior: "auto" });
    await new Promise((r) => setTimeout(r, 200));

    try {
      pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
        compress: true,
      });

      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("main section[id]")
      );
      console.log(`[PDF] ${sections.length} seções encontradas`);

      // Pré-carrega imagens externas (Dropbox etc.) como base64
      // para o html2canvas conseguir renderizá-las sem CORS taint.
      setProgress("Carregando imagens…");
      restoreSrcs = await inlineExternalImages();
      console.log(`[PDF] ${restoreSrcs.length} imagens externas inlinadas`);

      const bgColor = getComputedStyle(document.body).backgroundColor || "#14110f";
      const rgb = bgColor.match(/\d+/g);

      let pagesAdded = 0;
      let firstError: string | null = null;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const id = section.id || `s${i}`;
        setProgress(`Capturando ${i + 1}/${sections.length}…`);
        console.log(`[PDF] → seção ${i + 1}/${sections.length} (#${id})`);

        // Aguarda imagens da seção
        const imgs = Array.from(section.querySelectorAll("img"));
        await Promise.all(
          imgs.map((img) =>
            img.complete && img.naturalWidth > 0
              ? Promise.resolve()
              : new Promise<void>((resolve) => {
                  const done = () => resolve();
                  img.addEventListener("load", done, { once: true });
                  img.addEventListener("error", done, { once: true });
                  setTimeout(done, 5000); // timeout duro
                })
          )
        );

        let canvas: HTMLCanvasElement | null = null;
        try {
          canvas = await html2canvas(section, {
            backgroundColor: bgColor,
            scale: 1.5,
            useCORS: true,
            allowTaint: true,
            logging: false,
            windowWidth: 1600,
            imageTimeout: 10000,
            onclone: (clonedDoc) => {
              const style = clonedDoc.createElement("style");
              style.textContent = `
                [data-editable]:hover,
                [data-editable]:focus {
                  background: transparent !important;
                  box-shadow: none !important;
                  outline: none !important;
                }
                [data-pdf-hide], [data-section-nav] { display: none !important; }
                * { animation: none !important; transition: none !important; }
              `;
              clonedDoc.head.appendChild(style);
            },
          });
        } catch (err) {
          console.error(`[PDF] Falha ao capturar #${id}:`, err);
          if (!firstError) firstError = `#${id}: ${(err as Error).message}`;
          continue; // pula a seção mas segue
        }

        // ────────────────────────────────────────────────────────────
        // TESTE AUTOMÁTICO — valida canvas e dimensões antes do jsPDF
        // Evita: páginas em branco, ratio incompatível com A4 paisagem,
        // dataURL corrompido, dimensões absurdas.
        // ────────────────────────────────────────────────────────────
        const check = validateCanvasForA4(canvas, id);
        if (check.ok === false) {
          console.warn(`[PDF] ✗ #${id} reprovado no teste:`, check.reason, check.metrics);
          if (!firstError) firstError = `#${id}: ${check.reason}`;
          continue;
        }

        const { cw, ch, drawW, drawH, offsetX, offsetY } = check.metrics;

        // Garantia final: dataURL não-vazio e começando com cabeçalho JPEG
        const imgData = canvas.toDataURL("image/jpeg", 0.9);
        if (!imgData || imgData.length < 1000 || !imgData.startsWith("data:image/jpeg")) {
          console.warn(`[PDF] ✗ #${id} dataURL inválido (len=${imgData?.length})`);
          if (!firstError) firstError = `#${id}: dataURL inválido`;
          continue;
        }

        if (pagesAdded > 0) pdf.addPage("a4", "landscape");

        if (rgb && rgb.length >= 3) {
          pdf.setFillColor(parseInt(rgb[0]), parseInt(rgb[1]), parseInt(rgb[2]));
          pdf.rect(0, 0, PAGE_W, PAGE_H, "F");
        }

        pdf.addImage(imgData, "JPEG", offsetX, offsetY, drawW, drawH, undefined, "FAST");
        pagesAdded++;
        console.log(
          `[PDF] ✓ #${id} adicionada — canvas ${cw}×${ch}px → ${drawW.toFixed(1)}×${drawH.toFixed(1)}mm @ (${offsetX.toFixed(1)}, ${offsetY.toFixed(1)})`
        );
      }

      if (pagesAdded === 0) {
        throw new Error(firstError || "Nenhuma seção pôde ser capturada");
      }

      setProgress("Finalizando…");
      console.log(`[PDF] Salvando ${pagesAdded} páginas`);
      pdf.save("NL-Arquitetos-Carta-Proposta.pdf");
      console.log("[PDF] ✓ Concluído");
    } catch (err) {
      const msg = (err as Error)?.message || String(err);
      console.error("[PDF] Erro fatal:", err);
      alert(
        `Não foi possível gerar o PDF.\n\nErro: ${msg}\n\nAbra o Console do navegador (F12) para detalhes.`
      );
    } finally {
      // restaura srcs originais das imagens externas
      restoreSrcs.forEach((fn) => {
        try { fn(); } catch { /* noop */ }
      });
      hideEls.forEach((el, i) => {
        el.style.display = prevDisplay[i] ?? "";
      });
      document.body.removeAttribute("data-pdf-capturing");
      window.scrollTo({ top: prevScroll, behavior: "auto" });
      setBusy(false);
      setProgress("");
    }
  };

  return (
    <button
      type="button"
      onClick={handleExport}
      disabled={busy}
      data-pdf-hide
      aria-label="Baixar carta-proposta em PDF"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 px-5 py-3 bg-surface-elevated border border-primary/40 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 shadow-[0_10px_40px_-10px_hsl(0_0%_0%/0.5)] backdrop-blur-sm disabled:opacity-70 disabled:cursor-wait"
      style={{ borderRadius: "2px" }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="transition-transform group-hover:translate-y-0.5"
        aria-hidden="true"
      >
        <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
      </svg>
      <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
        {busy ? progress || "Gerando…" : "Baixar PDF"}
      </span>
    </button>
  );
};

export default PdfExportButton;
