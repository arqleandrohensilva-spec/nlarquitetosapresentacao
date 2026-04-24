import { useEffect, useRef } from "react";
import { useInView } from "./useInView";
import NoiseOverlay from "./NoiseOverlay";

const Section01Cover = () => {
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

      function poly(pts: number[][], dr: number, dg: number, db: number, a: number) {
        ctx!.beginPath();
        ctx!.moveTo(pts[0][0] * W, pts[0][1] * H);
        for (let i = 1; i < pts.length; i++) ctx!.lineTo(pts[i][0] * W, pts[i][1] * H);
        ctx!.closePath();
        ctx!.fillStyle = `rgba(${26 + dr},${24 + dg},${22 + db},${a})`;
        ctx!.fill();
      }

      poly([[0.3,0],[0.72,0],[0.72,1],[0.3,1]],10,9,8,0.28);
      poly([[0.3,0],[0.72,0],[0.72,0.42],[0.3,0.42]],16,14,12,0.2);
      poly([[0.34,0],[0.5,0],[0.68,1],[0.52,1]],22,20,18,0.22);
      poly([[0.3,0],[0.41,0],[0.41,1],[0.3,1]],28,26,22,0.2);
      poly([[0.61,0],[0.72,0],[0.72,1],[0.61,1]],6,5,4,0.22);
      poly([[0.41,0],[0.55,0],[0.37,0.5],[0.3,0.5]],4,3,2,0.2);
      poly([[0.3,0.52],[0.44,0.52],[0.44,1],[0.3,1]],4,3,2,0.18);
      poly([[0.78,0],[1.02,0],[1.02,1],[0.78,1]],10,9,8,0.28);
      poly([[0.78,0],[0.89,0],[0.89,1],[0.78,1]],28,26,22,0.2);
      poly([[0.78,0],[1.02,0],[1.02,0.2],[0.78,0.2]],16,14,12,0.18);
      poly([[0.78,0.72],[0.89,0.72],[0.89,1],[0.78,1]],4,3,2,0.18);
      poly([[0.78,0.82],[1.02,0.82],[1.02,1],[0.78,1]],18,16,14,0.22);

      ctx.fillStyle = "rgba(139,115,85,0.45)";
      ctx.fillRect(0.78 * W, 0.82 * H, 0.24 * W, 2 * dpr);

      const veil = ctx.createRadialGradient(W * 0.72, H * 0.5, H * 0.05, W * 0.72, H * 0.5, H * 0.8);
      veil.addColorStop(0, "rgba(26,24,22,0)");
      veil.addColorStop(0.55, "rgba(26,24,22,0.30)");
      veil.addColorStop(0.8, "rgba(26,24,22,0.65)");
      veil.addColorStop(1, "rgba(26,24,22,0.92)");
      ctx.fillStyle = veil;
      ctx.fillRect(0, 0, W, H);

      const fadeL = ctx.createLinearGradient(0, 0, W * 0.42, 0);
      fadeL.addColorStop(0, "rgba(26,24,22,1)");
      fadeL.addColorStop(0.75, "rgba(26,24,22,0.85)");
      fadeL.addColorStop(1, "rgba(26,24,22,0)");
      ctx.fillStyle = fadeL;
      ctx.fillRect(0, 0, W * 0.42, H);
    };

    draw();
    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
  }, []);

  return (
    <div
      ref={ref}
      id="capa"
      className={`w-full min-h-screen grid grid-rows-[auto_1fr_auto] px-5 py-8 md:px-[10vw] md:py-10 relative overflow-hidden ${inView ? "in-view" : ""}`}
      style={{ background: "#1A1816" }}
    >
      <style>{`
        @keyframes s1FadeUp { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:translateY(0); } }
        .s1-headline, .s1-sub, .s1-footer { opacity: 0; }
        .in-view .s1-headline { animation: s1FadeUp 0.9s cubic-bezier(0.23,1,0.32,1) 300ms forwards; }
        .in-view .s1-sub      { animation: s1FadeUp 0.9s cubic-bezier(0.23,1,0.32,1) 500ms forwards; }
        .in-view .s1-footer   { animation: s1FadeUp 0.8s cubic-bezier(0.23,1,0.32,1) 700ms forwards; }
        @media (max-width: 768px) {
          .s1-mid { justify-content: center !important; padding-bottom: 0 !important; padding-top: 0 !important; }
          .s1-headline-el { font-size: 38px !important; margin-bottom: 16px !important; }
          .s1-sub-el { font-size: 20px !important; }
          .s1-footer-el { font-size: 11px !important; }
        }
      `}</style>

      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} />
      <NoiseOverlay opacity={0.04} />

      <div className="relative z-[2]" />

      <div className="s1-mid flex flex-col justify-end pb-8 md:pb-10 relative z-[2]">
        <h1 className="s1-headline s1-headline-el" style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: "clamp(28px,3.5vw,52px)", lineHeight: 1.05, color: "rgba(255,255,255,.92)", letterSpacing: "-0.02em", marginBottom: 14 }}>
          Arquitetura que traduz conquistas
        </h1>
        <p className="s1-sub s1-sub-el" style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(15px,1.6vw,23px)", color: "#A08B6E", lineHeight: 1.4 }}>
          com espaços pensados para evoluir com você
        </p>
      </div>

      <div className="s1-footer flex justify-between items-center border-t border-[rgba(139,115,85,.12)] pt-3.5 relative z-[2]">
        <span className="s1-footer-el" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9.5, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(139,115,85,.75)" }}>
          A arquitetura começa na decisão.
        </span>
      </div>
    </div>
  );
};

export default Section01Cover;
