import { useInView } from "./useInView";

const blocos = [
  { image: "https://www.dropbox.com/scl/fi/emrtwklq83pkhrimanreg/Gemini_Generated_Image_eqd3nkeqd3nkeqd3.png?rlkey=7gosixxeb8jsw7bidjkntx6lw&raw=1", title: "Pensar é o início.", sub: "" },
  { image: "https://www.dropbox.com/scl/fi/6spq0sjysir2j9rbycf04/nomo-result-1775925963609.png?rlkey=aundesurtmp3fa2yrg73csc8i&raw=1", title: "Mas não é suficiente.", sub: "Ideia sem decisão não vira espaço." },
  { image: "https://www.dropbox.com/scl/fi/iladpvewq9aa40h5zc0by/nomo-result-1775926026351.png?rlkey=nyzp4k1ptv667c1c5nug220dz&raw=1", title: "Antes do desenho, existe ordem.", sub: "Fluxo. Relação. Hierarquia." },
  { image: "https://www.dropbox.com/scl/fi/go3prvyr15gnp6ms5666p/nomo-result-1775926088344.png?rlkey=2mxb2vpztslvh0xyiww8c6s8b&raw=1", title: "A forma não é criada.", sub: "Ela é consequência." },
];

const Section04ComoViraProjeto = () => {
  const { ref, inView } = useInView(0.15);
  return (
    <section ref={ref} id="como-vira" className={inView ? 'in-view' : ''} style={{ background: "#1A1816" }}>
      <style>{`
        @keyframes s3FadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        .s03-page { padding: 80px 0 100px; }
        .s03-header { padding: 0 80px; max-width: 1200px; margin: 0 auto 56px; }
        .s03-grid-wrap { display: flex; justify-content: center; padding: 0 80px; }
        .s03-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; max-width: 1040px; width: 100%; }
        .s03-card { position: relative; overflow: hidden; aspect-ratio: 502 / 374; background: #0E0C0A; }
        .s3-header-anim, .s3-footer-anim { opacity: 0; }
        .s3-card-anim { opacity: 0; }
        .in-view .s3-header-anim { animation: s3FadeUp 0.9s cubic-bezier(0.23,1,0.32,1) 100ms forwards; }
        .in-view .s3-card-anim-0 { animation: s3FadeUp 0.7s cubic-bezier(0.23,1,0.32,1) 300ms forwards; }
        .in-view .s3-card-anim-1 { animation: s3FadeUp 0.7s cubic-bezier(0.23,1,0.32,1) 450ms forwards; }
        .in-view .s3-card-anim-2 { animation: s3FadeUp 0.7s cubic-bezier(0.23,1,0.32,1) 600ms forwards; }
        .in-view .s3-card-anim-3 { animation: s3FadeUp 0.7s cubic-bezier(0.23,1,0.32,1) 750ms forwards; }
        @media (max-width: 768px) {
          .s03-page { padding: 48px 0 64px; }
          .s03-header { padding: 0 24px; margin-bottom: 32px; }
          .s03-grid-wrap { padding: 0 20px; }
          .s03-grid { grid-template-columns: 1fr; gap: 16px; }
        }
      `}</style>
      <div className="s03-page">
        <div className="s03-header s3-header-anim">
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "#8B7355", marginBottom: 20 }}>
            04 · Como Isso Vira Projeto
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: "clamp(32px, 4.2vw, 58px)", lineHeight: 1.05, color: "#E8E4DF", margin: 0 }}>
            Do pensamento<br /><em style={{ fontStyle: "italic", color: "#8B7355" }}>à decisão.</em>
          </h2>
        </div>
        <div className="s03-grid-wrap">
          <div className="s03-grid">
            {blocos.map((bloco, i) => (
              <div key={i} className={`s03-card s3-card-anim s3-card-anim-${i}`}>
                <img src={bloco.image} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14,12,10,0.92) 0%, rgba(14,12,10,0.4) 45%, rgba(14,12,10,0.0) 70%)" }} />
                <div style={{ position: "absolute", top: 16, left: 16, fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.25em", color: "rgba(166,137,102,0.5)", zIndex: 2 }}>
                  0{i + 1}
                </div>
                <div style={{ position: "absolute", bottom: 24, left: 24, right: 24, zIndex: 2, borderLeft: "1.5px solid rgba(139,115,85,0.45)", paddingLeft: 14 }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: "clamp(17px, 1.8vw, 24px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.92)", marginBottom: bloco.sub ? 6 : 0 }}>
                    {bloco.title}
                  </h3>
                  {bloco.sub && (
                    <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(13px, 1.3vw, 16px)", color: "rgba(175,150,108,0.90)", lineHeight: 1.5, margin: 0 }}>
                      {bloco.sub}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section04ComoViraProjeto;
