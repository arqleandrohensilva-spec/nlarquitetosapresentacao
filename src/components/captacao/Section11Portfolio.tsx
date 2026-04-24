import { useState } from "react";
import { useInView } from "./useInView";

const projetos = [
  { nome: "Espaço Gourmet SJ", num: "01 · A", src: "https://www.dropbox.com/scl/fi/hv5ka2it7y3mx78a9plos/tghdfjg.png?rlkey=7gx28a6t2ru8o4s8nz0mea4jp&raw=1" },
  { nome: "Espaço Gourmet SJ", num: "01 · B", src: "https://www.dropbox.com/scl/fi/qprr4s2fjkfti6tnyd89v/nomo-result-1775917620975.png?rlkey=0o6hu9dkmh2wr2phqu23z6avb&raw=1" },
  { nome: "Residência Jacareí", num: "02 · A", src: "https://www.dropbox.com/scl/fi/4aki30a8lyjwqc7dn7bn1/nomo-result-1775918296952.png?rlkey=wnzwhlhdyq0495r3f2sxkgzle&raw=1" },
  { nome: "Residência Jacareí", num: "02 · B", src: "https://www.dropbox.com/scl/fi/euzr9ili7ijy6ei31n3sb/nomo-result-1775918507646.png?rlkey=c25v5hcfmsd29p23yjkb4xqoj&raw=1" },
];

const Section11Portfolio = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const { ref, inView } = useInView(0.1);

  return (
    <div ref={ref} id="portfolio" className={inView ? "in-view" : ""} style={{ background: "#FAFAF8", color: "#1A1816", minHeight: "100vh", fontFamily: '-apple-system,"Helvetica Neue",Arial,sans-serif' }}>
      <style>{`
        @keyframes s9FadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .s9-header, .s9-grid, .s9-footer { opacity: 0; }
        .in-view .s9-header { animation: s9FadeUp 0.9s cubic-bezier(0.23,1,0.32,1) 100ms forwards; }
        .in-view .s9-grid   { animation: s9FadeUp 0.9s cubic-bezier(0.23,1,0.32,1) 300ms forwards; }
        .in-view .s9-footer { animation: s9FadeUp 0.9s cubic-bezier(0.23,1,0.32,1) 600ms forwards; }
        .s9-card { position: relative; overflow: hidden; cursor: pointer; aspect-ratio: 4/3; background: #0E0C0A; }
        .s9-img { position: absolute; inset: 0; background-size: cover; background-position: center; transition: transform 0.6s cubic-bezier(0.23,1,0.32,1); }
        .s9-card:hover .s9-img { transform: scale(1.04); }
      `}</style>
      {lightbox && (
        <div onClick={(e) => { if (e.target === e.currentTarget) setLightbox(null); }} style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(10,8,6,0.98)", display: "flex", alignItems: "center", justifyContent: "center", animation: "s9FadeUp 0.4s ease forwards" }}>
          <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: 30, right: 30, cursor: "pointer", background: "none", border: "none" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <img src={lightbox} alt="Projeto" style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain" }} />
        </div>
      )}
      <div style={{ padding: "80px 0 100px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 80px" }} className="s9-container">
          <div className="s9-header" style={{ marginBottom: 56 }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "#8B7355", marginBottom: 20 }}>
              11 · Portfólio
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: "clamp(38px,4.2vw,58px)", lineHeight: 1.05, color: "#1A1816", margin: 0 }}>
              Projetos que<br /><em style={{ fontStyle: "italic", color: "#8B7355" }}>traduzem o método.</em>
            </h2>
          </div>
          <div className="s9-grid">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {projetos.map((p, i) => (
                <div key={i} className="s9-card" onClick={() => setLightbox(p.src)}>
                  <div className="s9-img" style={{ backgroundImage: `url('${p.src}')` }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14,12,10,0.55) 0%, rgba(14,12,10,0) 50%)" }} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 24px", zIndex: 2, display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, color: "#E8E4DF" }}>{p.nome}</span>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, letterSpacing: "0.2em", color: "rgba(166,137,102,0.85)" }}>{p.num}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="s9-footer" style={{ marginTop: 56, paddingTop: 28, borderTop: "0.5px solid rgba(58,58,58,0.12)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", color: "#8B7355" }}>
              "A arquitetura como cuidado."
            </span>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, letterSpacing: "0.25em", color: "rgba(58,58,58,0.4)" }}>
              NL Arquitetos · 2025
            </span>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .s9-container { padding: 0 20px !important; }
          .s9-grid > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default Section11Portfolio;
