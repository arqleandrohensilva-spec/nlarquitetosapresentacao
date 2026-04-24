import { useInView } from "./useInView";
import NoiseOverlay from "./NoiseOverlay";

const pilares = [
  { num: "01", label: "Escuta · Antes do traço", title: "Cada projeto começa ouvindo.", body: "Antes de qualquer linha, queremos entender o ritmo da casa, os silêncios, os hábitos. É na conversa que o projeto começa a existir.", quote: "O bom projeto pertence a quem vive nele." },
  { num: "02", label: "Método · Intencional", title: "Nada é por acaso.", body: "Cada decisão é resolvida no projeto — luz, fluxo, materialidade. A obra começa com tudo pensado, sem improviso.", quote: "Decidir no papel é o que protege o sonho." },
  { num: "03", label: "Cuidado · Conduzido", title: "Você nunca caminha sozinho.", body: "Conduzimos cada etapa com clareza. O cliente aprova com segurança, sem precisar entender de obra para se sentir no controle.", quote: "O cuidado é a primeira camada de luxo." },
  { num: "04", label: "Tempo · Atemporal", title: "Beleza que envelhece bem.", body: "Trabalhamos com materiais e formas que não datam. O projeto entregue hoje continua fazendo sentido em dez anos.", quote: "A boa arquitetura ganha valor com o tempo." },
];

const Section06Pilares = () => {
  const { ref, inView } = useInView(0.1);

  return (
    <div ref={ref} id="pilares" className={inView ? 'in-view' : ''} style={{ background: "#1A1816", color: "#E8E4DF", fontFamily: '-apple-system, "Helvetica Neue", Arial, sans-serif', minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      <NoiseOverlay opacity={0.03} />
      <style>{`
        @keyframes sp5FadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        .sp5-label, .sp5-headline, .sp5-footer { opacity: 0; }
        .sp5-card-anim { opacity: 0; }
        .in-view .sp5-label    { animation: sp5FadeUp 0.9s cubic-bezier(0.23,1,0.32,1) 100ms forwards; }
        .in-view .sp5-headline { animation: sp5FadeUp 0.9s cubic-bezier(0.23,1,0.32,1) 200ms forwards; }
        .in-view .sp5-card-0   { animation: sp5FadeUp 0.7s cubic-bezier(0.23,1,0.32,1) 300ms forwards; }
        .in-view .sp5-card-1   { animation: sp5FadeUp 0.7s cubic-bezier(0.23,1,0.32,1) 450ms forwards; }
        .in-view .sp5-card-2   { animation: sp5FadeUp 0.7s cubic-bezier(0.23,1,0.32,1) 600ms forwards; }
        .in-view .sp5-card-3   { animation: sp5FadeUp 0.7s cubic-bezier(0.23,1,0.32,1) 750ms forwards; }
        .in-view .sp5-footer   { animation: sp5FadeUp 0.9s cubic-bezier(0.23,1,0.32,1) 1000ms forwards; }
        .sp5-card { display: grid; grid-template-columns: 80px 1fr auto; gap: 0 48px; align-items: center; padding: 40px 10vw; border-bottom: 0.5px solid rgba(166,137,102,0.12); position: relative; transition: background 0.3s ease; max-width: 1400px; margin: 0 auto; }
        .sp5-card:first-of-type { border-top: 0.5px solid rgba(166,137,102,0.12); }
        .sp5-card:hover { background: rgba(166,137,102,0.04); }
        .sp5-card::before { content:""; position: absolute; top: 0; left: 0; width: 2px; height: 0%; background: rgba(166,137,102,0.6); transition: height 0.4s cubic-bezier(0.23,1,0.32,1); }
        .sp5-card:hover::before { height: 100%; }
        .sp5-num { font-family: 'Cormorant Garamond', serif; font-size: 56px; font-weight: 300; line-height: 1; color: rgba(166,137,102,0.18); transition: color 0.4s ease, transform 0.4s ease; transform-origin: left center; user-select: none; }
        .sp5-card:hover .sp5-num { color: rgba(166,137,102,0.65); transform: scale(1.05); }
        .sp5-quote { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 15px; color: rgba(166,137,102,0.75); max-width: 280px; text-align: right; line-height: 1.5; opacity: 0; transform: translateX(8px); transition: opacity 0.4s ease, transform 0.4s ease; flex-shrink: 0; }
        .sp5-card:hover .sp5-quote { opacity: 1; transform: translateX(0); }
        @media (max-width: 768px) {
          .sp5-card { grid-template-columns: 48px 1fr; gap: 0 16px; padding: 24px 20px; }
          .sp5-quote { display: none; }
          .sp5-num { font-size: 36px; }
        }
      `}</style>
      <div style={{ padding: "80px 0 100px" }}>
        <div style={{ padding: "0 10vw", marginBottom: 56, maxWidth: 1400, margin: "0 auto 56px" }}>
          <div className="sp5-label" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "#A68966", marginBottom: 20 }}>
            06 · Nossos Pilares
          </div>
          <h2 className="sp5-headline" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(38px, 4.2vw, 58px)", lineHeight: 1.05, color: "#E8E4DF", margin: 0 }}>
            O que sustenta cada <em style={{ fontStyle: "italic", color: "#A68966" }}>decisão.</em>
          </h2>
        </div>
        <div>
          {pilares.map((p, i) => (
            <div key={i} className={`sp5-card sp5-card-anim sp5-card-${i}`}>
              <span className="sp5-num">{p.num}</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "#A68966" }}>
                  {p.label}
                </span>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(20px, 2.2vw, 28px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", color: "rgba(232,228,223,0.92)", margin: 0 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 13, color: "rgba(232,228,223,0.5)", lineHeight: 1.85, maxWidth: 560, margin: 0 }}>
                  {p.body}
                </p>
              </div>
              <p className="sp5-quote">"{p.quote}"</p>
            </div>
          ))}
        </div>
        <div className="sp5-footer" style={{ padding: "40px 10vw 0", display: "flex", alignItems: "center", gap: 16, maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ width: 28, height: 1, background: "rgba(166,137,102,0.5)", flexShrink: 0 }} />
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 15, fontWeight: 300, color: "rgba(166,137,102,0.7)" }}>
            A arquitetura como cuidado.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section06Pilares;
