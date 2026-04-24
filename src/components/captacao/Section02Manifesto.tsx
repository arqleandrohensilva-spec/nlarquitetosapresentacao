import { useEffect, useRef } from "react";
import { useInView } from "./useInView";
import NoiseOverlay from "./NoiseOverlay";

const Section02Manifesto = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { ref, inView } = useInView(0.15);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const draw = () => {
      const W = canvas.offsetWidth, H = canvas.offsetHeight;
      canvas.width = W; canvas.height = H;
      const ctx = canvas.getContext("2d");
      if (!ctx || !W || !H) return;
      ctx.fillStyle = "rgb(26,24,22)";
      ctx.fillRect(0, 0, W, H);
      function poly(pts: number[][], dr: number, dg: number, db: number, a: number) {
        ctx!.beginPath();
        ctx!.moveTo(pts[0][0] * W, pts[0][1] * H);
        for (let i = 1; i < pts.length; i++) ctx!.lineTo(pts[i][0] * W, pts[i][1] * H);
        ctx!.closePath();
        ctx!.fillStyle = `rgba(${26 + dr},${24 + dg},${22 + db},${a})`;
        ctx!.fill();
      }
      poly([[0.3,0],[0.72,0],[0.72,1],[0.3,1]],10,9,8,0.18);
      poly([[0.3,0],[0.72,0],[0.72,0.42],[0.3,0.42]],16,14,12,0.12);
      poly([[0.34,0],[0.5,0],[0.68,1],[0.52,1]],22,20,18,0.14);
      poly([[0.3,0],[0.41,0],[0.41,1],[0.3,1]],28,26,22,0.12);
      poly([[0.61,0],[0.72,0],[0.72,1],[0.61,1]],6,5,4,0.14);
      poly([[0.41,0],[0.55,0],[0.37,0.5],[0.3,0.5]],4,3,2,0.12);
      poly([[0.3,0.52],[0.44,0.52],[0.44,1],[0.3,1]],4,3,2,0.1);
      poly([[0.78,0],[1.02,0],[1.02,1],[0.78,1]],10,9,8,0.18);
      poly([[0.78,0],[0.89,0],[0.89,1],[0.78,1]],28,26,22,0.12);
      poly([[0.78,0],[1.02,0],[1.02,0.2],[0.78,0.2]],16,14,12,0.1);
      poly([[0.78,0.72],[0.89,0.72],[0.89,1],[0.78,1]],4,3,2,0.1);
      poly([[0.78,0.82],[1.02,0.82],[1.02,1],[0.78,1]],18,16,14,0.14);
      ctx.fillStyle = "rgba(139,115,85,0.25)";
      ctx.fillRect(0.78 * W, 0.82 * H, 0.24 * W, 1.5);
      const fadeL = ctx.createLinearGradient(0, 0, W * 0.32, 0);
      fadeL.addColorStop(0, "rgba(26,24,22,1)");
      fadeL.addColorStop(0.8, "rgba(26,24,22,0.90)");
      fadeL.addColorStop(1, "rgba(26,24,22,0)");
      ctx.fillStyle = fadeL;
      ctx.fillRect(0, 0, W * 0.32, H);
      const vTop = ctx.createLinearGradient(0, 0, 0, H * 0.25);
      vTop.addColorStop(0, "rgba(26,24,22,0.95)");
      vTop.addColorStop(1, "rgba(26,24,22,0)");
      ctx.fillStyle = vTop;
      ctx.fillRect(0, 0, W, H * 0.25);
      const vBot = ctx.createLinearGradient(0, H * 0.75, 0, H);
      vBot.addColorStop(0, "rgba(26,24,22,0)");
      vBot.addColorStop(1, "rgba(26,24,22,0.95)");
      ctx.fillStyle = vBot;
      ctx.fillRect(0, H * 0.75, W, H * 0.25);
    };

    draw();
    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
  }, []);

  return (
    <section ref={ref} id="manifesto" className={`w-full min-h-screen relative overflow-hidden flex items-center px-5 py-16 md:px-[10vw] md:py-[100px] ${inView ? 'in-view' : ''}`} style={{ background: "#1A1816" }}>
      <style>{`
        @keyframes s2FadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        .s2-label, .s2-b1, .s2-b2, .s2-b3, .s2-b4 { opacity: 0; }
        .in-view .s2-label { animation: s2FadeUp 0.9s cubic-bezier(0.23,1,0.32,1) 100ms forwards; }
        .in-view .s2-b1    { animation: s2FadeUp 0.9s cubic-bezier(0.23,1,0.32,1) 250ms forwards; }
        .in-view .s2-b2    { animation: s2FadeUp 0.9s cubic-bezier(0.23,1,0.32,1) 450ms forwards; }
        .in-view .s2-b3    { animation: s2FadeUp 0.9s cubic-bezier(0.23,1,0.32,1) 650ms forwards; }
        .in-view .s2-b4    { animation: s2FadeUp 0.9s cubic-bezier(0.23,1,0.32,1) 850ms forwards; }
      `}</style>
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block", pointerEvents: "none" }} />
      <NoiseOverlay opacity={0.03} />
      <div className="relative z-[2] w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div className="relative pl-7 border-l border-[rgba(139,115,85,.28)]">
          <span style={{ position: "absolute", left: "-32px", top: 0, fontFamily: "'JetBrains Mono', monospace", fontSize: "8px", letterSpacing: "0.14em", color: "rgba(139,115,85,.30)", writingMode: "vertical-rl", textOrientation: "mixed" }}>
            02
          </span>
          <span className="s2-label block mb-10 md:mb-14" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(139,115,85,.55)" }}>
            Manifesto
          </span>
          <div className="s2-b1 max-w-[560px] mb-8 md:mb-12">
            <span className="block" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(26px,3.5vw,48px)", lineHeight: 1.2, color: "rgba(255,255,255,.92)", letterSpacing: "-0.02em" }}>
              Beleza sem método
            </span>
            <span className="block" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(26px,3.5vw,48px)", lineHeight: 1.2, color: "rgba(255,255,255,.92)", letterSpacing: "-0.02em" }}>
              é apenas decoração.
            </span>
          </div>
          <span className="block w-5 h-px bg-[rgba(139,115,85,.28)] my-6 md:my-9" />
          <div className="s2-b2 max-w-[560px] mb-8 md:mb-12">
            <span className="block" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(16px,1.9vw,25px)", lineHeight: 1.75, color: "rgba(255,255,255,.65)" }}>Um projeto só protege quem vive nele</span>
            <span className="block" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(16px,1.9vw,25px)", lineHeight: 1.75, color: "rgba(255,255,255,.65)" }}>quando cada decisão foi tomada</span>
            <span className="italic block" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(16px,1.9vw,25px)", lineHeight: 1.75, color: "rgba(175,150,108,.90)" }}>antes da obra.</span>
          </div>
          <span className="block w-5 h-px bg-[rgba(139,115,85,.28)] my-6 md:my-9" />
          <div className="s2-b3 max-w-[560px] mb-8 md:mb-12">
            <span className="block" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(16px,1.9vw,25px)", lineHeight: 1.75, color: "rgba(255,255,255,.65)" }}>Escutamos antes de projetar.</span>
            <span className="block" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(16px,1.9vw,25px)", lineHeight: 1.75, color: "rgba(255,255,255,.65)" }}>Decidimos antes de construir.</span>
          </div>
          <span className="block w-5 h-px bg-[rgba(139,115,85,.28)] my-6 md:my-9" />
          <div className="s2-b4 max-w-[560px]">
            <span className="italic block" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(16px,1.9vw,25px)", lineHeight: 1.75, color: "rgba(175,150,108,.90)" }}>Entregamos espaços que fazem sentido —</span>
            <span className="italic block" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(16px,1.9vw,25px)", lineHeight: 1.75, color: "rgba(175,150,108,.90)" }}>hoje, e ao longo de todas as fases.</span>
          </div>
        </div>
        <div className="hidden md:block" />
      </div>
    </section>
  );
};

export default Section02Manifesto;
