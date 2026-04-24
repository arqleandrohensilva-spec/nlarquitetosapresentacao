import { useEffect, useRef } from "react";
import { useInView } from "./useInView";
import NoiseOverlay from "./NoiseOverlay";

const Section12Fechamento = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { ref, inView } = useInView(0.15);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      const ctx = canvas.getContext("2d");
      if (!ctx || !canvas.width || !canvas.height) return;
      const W = canvas.width, H = canvas.height;
      ctx.fillStyle = "rgb(26,24,22)";
      ctx.fillRect(0, 0, W, H);
      function poly(pts: number[][], r: number, g: number, b: number, a: number) {
        ctx!.beginPath();
        ctx!.moveTo(pts[0][0] * W, pts[0][1] * H);
        for (let i = 1; i < pts.length; i++) ctx!.lineTo(pts[i][0] * W, pts[i][1] * H);
        ctx!.closePath();
        ctx!.fillStyle = `rgba(${r},${g},${b},${a})`;
        ctx!.fill();
      }
      poly([[0.3,0],[0.72,0],[0.72,1],[0.3,1]],46,43,40,0.4);
      poly([[0.3,0],[0.72,0],[0.72,0.42],[0.3,0.42]],56,52,47,0.35);
      poly([[0.34,0],[0.5,0],[0.68,1],[0.52,1]],64,59,53,0.32);
      poly([[0.3,0],[0.41,0],[0.41,1],[0.3,1]],72,66,59,0.32);
      poly([[0.61,0],[0.72,0],[0.72,1],[0.61,1]],40,37,33,0.38);
      poly([[0.78,0],[1.02,0],[1.02,1],[0.78,1]],46,43,40,0.4);
      poly([[0.78,0],[0.89,0],[0.89,1],[0.78,1]],72,66,59,0.32);
      poly([[0.78,0],[1.02,0],[1.02,0.2],[0.78,0.2]],56,52,47,0.3);
      poly([[0.78,0.82],[1.02,0.82],[1.02,1],[0.78,1]],54,50,44,0.36);
      ctx.fillStyle = "rgba(139,115,85,0.55)";
      ctx.fillRect(0.78 * W, 0.82 * H, 0.24 * W, 2 * dpr);
      const veil = ctx.createRadialGradient(W * 0.5, H * 0.5, H * 0.1, W * 0.5, H * 0.5, H * 0.75);
      veil.addColorStop(0, "rgba(26,24,22,0)");
      veil.addColorStop(0.6, "rgba(26,24,22,0.2)");
      veil.addColorStop(1, "rgba(26,24,22,0.7)");
      ctx.fillStyle = veil;
      ctx.fillRect(0, 0, W, H);
    };
    draw();
    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => draw());
      ro.observe(canvas);
    }
    window.addEventListener("resize", draw);
    return () => { window.removeEventListener("resize", draw); ro?.disconnect(); };
  }, []);

  const Linha = () => (
    <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(166,137,102,0.35), transparent)", width: "100%", maxWidth: 480 }} />
  );

  return (
    <div ref={ref} id="fechamento" className={`min-h-screen overflow-hidden relative ${inView ? "in-view" : ""}`} style={{ background: "#1A1816", color: "#E8E4DF", fontFamily: '-apple-system,"Helvetica Neue",Arial,sans-serif' }}>
      <style>{`
        @keyframes s10FadeUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
        .s10-anim { opacity: 0; }
        .in-view .s10-topo    { animation: s10FadeUp 0.8s ease 100ms  forwards; }
        .in-view .s10-linha1  { animation: s10FadeUp 0.8s ease 200ms  forwards; }
        .in-view .s10-logo    { animation: s10FadeUp 1.2s cubic-bezier(0.23,1,0.32,1) 400ms forwards; }
        .in-view .s10-sub     { animation: s10FadeUp 0.8s ease 800ms  forwards; }
        .in-view .s10-linha2  { animation: s10FadeUp 0.8s ease 900ms  forwards; }
        .in-view .s10-frase   { animation: s10FadeUp 0.9s ease 1000ms forwards; }
        .in-view .s10-contatos{ animation: s10FadeUp 0.9s ease 1200ms forwards; }
        .in-view .s10-rodape  { animation: s10FadeUp 0.8s ease 1600ms forwards; }
        .s10-link { font-family: 'Cormorant Garamond', serif; font-size: clamp(13px,1.4vw,17px); font-weight: 400; color: rgba(232,228,223,0.6); text-decoration: none; position: relative; transition: color 0.3s ease; }
        .s10-link::after { content: ""; position: absolute; bottom: -3px; left: 0; width: 0; height: 0.5px; background: #A68966; transition: width 0.4s cubic-bezier(0.23,1,0.32,1); }
        .s10-link:hover { color: #E8E4DF; }
        .s10-link:hover::after { width: 100%; }
      `}</style>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block z-0" />
      <NoiseOverlay opacity={0.04} />
      <div className="relative z-[1] min-h-screen flex flex-col items-center justify-center px-5 py-16 md:p-20">
        <div className="s10-anim s10-topo absolute top-8 md:top-12 left-5 right-5 md:left-20 md:right-20 flex justify-between items-center">
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(166,137,102,0.4)" }}>
            12 · Fechamento
          </span>
          <span className="hidden md:inline" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(232,228,223,0.15)" }}>
            São José dos Campos · SP
          </span>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="s10-anim s10-linha1 mb-8 md:mb-12"><Linha /></div>
          <div className="s10-anim s10-logo" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(72px, 12vw, 140px)", lineHeight: 0.9, color: "#E8E4DF", letterSpacing: "-0.04em" }}>
            NL
          </div>
          <span className="s10-anim s10-sub mt-4" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.6em", textTransform: "uppercase", color: "rgba(166,137,102,0.5)" }}>
            Arquitetura &amp; Interiores
          </span>
          <div className="s10-anim s10-linha2 my-8 md:my-12"><Linha /></div>
          <p className="s10-anim s10-frase" style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: "clamp(15px,1.6vw,19px)", color: "rgba(232,228,223,0.55)", lineHeight: 1.85, maxWidth: 460 }}>
            <span style={{ fontSize: "clamp(24px,2.6vw,32px)", color: "#E8E4DF", fontWeight: 400, letterSpacing: "-0.01em", display: "block", marginBottom: 18 }}>
              Obrigado.
            </span>
            Seu tempo é o início de um processo.<br />
            Quando estiver pronto para decidir,<br />
            estaremos prontos para conduzir.
          </p>
          <div className="s10-anim s10-contatos flex flex-col md:flex-row gap-6 md:gap-12 mt-12 items-center">
            <div className="flex flex-col items-center gap-1.5">
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 8, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(166,137,102,0.45)" }}>WhatsApp</span>
              <a className="s10-link" href="https://wa.me/5512996235559" target="_blank" rel="noreferrer">(12) 99623-5559</a>
            </div>
            <div className="hidden md:block w-px h-7" style={{ background: "rgba(166,137,102,0.15)" }} />
            <div className="flex flex-col items-center gap-1.5">
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 8, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(166,137,102,0.45)" }}>E-mail</span>
              <a className="s10-link" href="mailto:contato.nlarquitetos@gmail.com">contato.nlarquitetos@gmail.com</a>
            </div>
            <div className="hidden md:block w-px h-7" style={{ background: "rgba(166,137,102,0.15)" }} />
            <div className="flex flex-col items-center gap-1.5">
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 8, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(166,137,102,0.45)" }}>Instagram</span>
              <a className="s10-link" href="https://instagram.com/nlarquitetos" target="_blank" rel="noreferrer">@nlarquitetos</a>
            </div>
          </div>
        </div>
        <div className="s10-anim s10-rodape absolute bottom-8 md:bottom-12 left-5 right-5 md:left-20 md:right-20 flex justify-between items-center">
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(232,228,223,0.15)" }}>
            São José dos Campos · 2025
          </span>
          <span className="hidden md:inline" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(166,137,102,0.3)" }}>
            A Arquitetura como Cuidado
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section12Fechamento;
