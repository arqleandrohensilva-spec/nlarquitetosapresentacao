import { useState } from "react";
import { useInView } from "./useInView";

const etapas = {
  arq: [
    { num: "01", titulo: "Briefing & Escuta", quote: "Tudo começa entendendo você." },
    { num: "02", titulo: "Estudo Preliminar com 3D", quote: "Ver antes de decidir." },
    { num: "03", titulo: "Compatibilização", quote: "Mostrar o erro no computador." },
    { num: "04", titulo: "Aprovações", quote: "A NL conduz a burocracia." },
    { num: "05", titulo: "Detalhamento", quote: "Cada decisão registrada." },
    { num: "06", titulo: "Projeto Executivo", quote: "Tudo resolvido antes da obra." },
  ],
  int: [
    { num: "01", titulo: "Briefing & Escuta", quote: "Entender o jeito de viver." },
    { num: "02", titulo: "Estudo de Layout em 3D", quote: "Sentir o espaço antes." },
    { num: "03", titulo: "Paleta & Materialidade", quote: "A textura que pertence." },
    { num: "04", titulo: "Aprovações", quote: "Condomínio, prefeitura, laudos." },
    { num: "05", titulo: "Detalhamento", quote: "Marcenaria, luz, revestimento." },
    { num: "06", titulo: "Visitas em Lojas", quote: "Decidir junto, com segurança." },
  ],
};

type Ato = "arq" | "int";

const Section08Processos = () => {
  const [ato, setAto] = useState<Ato>("arq");
  const { ref, inView } = useInView(0.08);

  return (
    <div ref={ref} id="processos" className={`s7-root ${inView ? "in-view" : ""}`}>
      <style>{`
        @keyframes s7FadeUp { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
        .s7-root { background: #FAFAF8; color: #1A1816; min-height: 100vh; font-family: -apple-system,"Helvetica Neue",Arial,sans-serif; }
        .s7-inner { max-width: 1200px; margin: 0 auto; padding: 88px 80px 100px; }
        .s7-header { opacity: 0; }
        .in-view .s7-header { animation: s7FadeUp 0.9s cubic-bezier(0.23,1,0.32,1) 100ms forwards; }
        .s7-toggle-wrap { opacity: 0; margin-bottom: 48px; }
        .in-view .s7-toggle-wrap { animation: s7FadeUp 0.7s ease 250ms forwards; }
        .s7-toggle { display: inline-flex; border: 0.5px solid rgba(26,24,22,0.12); position: relative; }
        .s7-toggle-btn { font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; padding: 12px 32px; cursor: pointer; border: none; background: transparent; color: rgba(26,24,22,0.3); transition: color 0.3s; position: relative; z-index: 1; }
        .s7-toggle-btn.active { color: #FAFAF8; }
        .s7-toggle-slider { position: absolute; top: 0; left: 0; height: 100%; width: 50%; background: #1A1816; transition: transform 0.35s cubic-bezier(0.23,1,0.32,1); }
        .s7-toggle-slider.right { transform: translateX(100%); }
        .s7-grid { display: grid; grid-template-columns: repeat(3, 1fr); border: 0.5px solid rgba(26,24,22,0.08); border-bottom: none; opacity: 0; }
        .in-view .s7-grid { animation: s7FadeUp 0.8s cubic-bezier(0.23,1,0.32,1) 400ms forwards; }
        .s7-card { padding: 32px 28px 40px; border-right: 0.5px solid rgba(26,24,22,0.08); border-bottom: 0.5px solid rgba(26,24,22,0.08); position: relative; overflow: hidden; transition: background 0.35s; }
        .s7-card:nth-child(3n) { border-right: none; }
        .s7-card:hover { background: rgba(139,115,85,0.04); }
        .s7-card-num { font-family: 'Cormorant Garamond', serif; font-size: 64px; font-weight: 300; line-height: 1; color: rgba(26,24,22,0.05); position: absolute; top: 8px; right: 12px; letter-spacing: -0.04em; user-select: none; }
        .s7-card-index { font-family: 'JetBrains Mono', monospace; font-size: 9px; letter-spacing: 3px; text-transform: uppercase; color: rgba(139,115,85,0.55); display: block; margin-bottom: 12px; }
        .s7-card-titulo { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 400; line-height: 1.15; letter-spacing: -0.02em; color: #1A1816; margin-bottom: 12px; }
        .s7-card-quote { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 14px; font-weight: 300; color: rgba(139,115,85,0.7); line-height: 1.5; }
        .s7-prazo { display: flex; align-items: center; gap: 12px; margin-top: 18px; }
        .s7-prazo span { font-family: 'JetBrains Mono', monospace; font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(139,115,85,0.7); }
        .s7-prazo-line { flex: 1; height: 0.5px; background: rgba(139,115,85,0.15); max-width: 200px; }
        @media (max-width: 768px) {
          .s7-inner { padding: 48px 24px 64px; }
          .s7-grid { grid-template-columns: 1fr; }
          .s7-card { border-right: none !important; }
        }
      `}</style>
      <div className="s7-inner">
        <div className="s7-header">
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "#8B7355", marginBottom: 20 }}>
            08 · Processos
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.0, color: "#1A1816", margin: "0 0 40px" }}>
            Do primeiro traço<br /><em style={{ fontStyle: "italic", color: "#8B7355" }}>ao detalhe final.</em>
          </h2>
        </div>
        <div className="s7-toggle-wrap">
          <div className="s7-toggle">
            <div className={`s7-toggle-slider ${ato === "int" ? "right" : ""}`} />
            <button className={`s7-toggle-btn ${ato === "arq" ? "active" : ""}`} onClick={() => setAto("arq")}>Arquitetura</button>
            <button className={`s7-toggle-btn ${ato === "int" ? "active" : ""}`} onClick={() => setAto("int")}>Interiores</button>
          </div>
          <div className="s7-prazo">
            <span>{ato === "arq" ? "5 a 6 meses" : "3 a 4 meses"}</span>
            <div className="s7-prazo-line" />
          </div>
        </div>
        <div className="s7-grid">
          {etapas[ato].map((e) => (
            <div key={e.num} className="s7-card">
              <span className="s7-card-num">{e.num}</span>
              <span className="s7-card-index">Etapa {e.num}</span>
              <div className="s7-card-titulo">{e.titulo}</div>
              <div className="s7-card-quote">"{e.quote}"</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 52, paddingTop: 24, borderTop: "0.5px solid rgba(26,24,22,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, fontSize: 15, color: "rgba(139,115,85,0.7)" }}>
            "Cada etapa termina com uma decisão tomada juntos."
          </span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 8, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(26,24,22,0.25)" }}>
            NL Arquitetos · ARQ + INT
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section08Processos;
