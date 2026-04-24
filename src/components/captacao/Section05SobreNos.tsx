import { useInView } from "./useInView";
import NoiseOverlay from "./NoiseOverlay";

const Section05SobreNos = () => {
  const { ref, inView } = useInView(0.1);

  return (
    <section ref={ref} id="sobre" className={`min-h-screen relative overflow-hidden ${inView ? 'in-view' : ''}`} style={{ background: "#FAFAF8", color: "#1A1816", fontFamily: '-apple-system, "Helvetica Neue", Arial, sans-serif' }}>
      <NoiseOverlay opacity={0.02} />
      <style>{`
        @keyframes snosFadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes snosReveal { from { transform:translateY(100%); } to { transform:translateY(0); } }
        .snos-anim { opacity: 0; }
        .in-view .snos-anim { animation: snosFadeUp 0.9s cubic-bezier(0.22,1,0.36,1) forwards; }
        .in-view .snos-d0 { animation-delay: 0ms; }
        .in-view .snos-d1 { animation-delay: 150ms; }
        .in-view .snos-d3 { animation-delay: 450ms; }
        .in-view .snos-d4 { animation-delay: 600ms; }
        .in-view .snos-d5 { animation-delay: 750ms; }
        .snos-foto-card img { transform: translateY(100%); }
        .in-view .snos-foto-card:nth-child(1) img { animation: snosReveal 1s cubic-bezier(0.77,0,0.18,1) 300ms forwards; }
        .in-view .snos-foto-card:nth-child(2) img { animation: snosReveal 1s cubic-bezier(0.77,0,0.18,1) 500ms forwards; }
        .snos-foto-card:hover img { transform: scale(1.04) !important; transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94); }
      `}</style>

      <div className="relative z-[2] px-5 py-16 md:px-0 md:py-24">
        <div className="w-full max-w-[720px] mx-auto">
          <div className="mb-10 md:mb-14">
            <div className="snos-anim snos-d0" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "#8B7355", marginBottom: "20px" }}>
              05 · Sobre Nós
            </div>
            <h2 className="snos-anim snos-d1" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: "clamp(32px, 4.2vw, 58px)", lineHeight: 1.05, color: "#1A1816", margin: 0 }}>
              Dois arquitetos.<br /><em style={{ fontStyle: "italic", color: "#8B7355" }}>Uma assinatura.</em>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-2.5">
            {[
              { src: "https://www.dropbox.com/scl/fi/uydr0i2jkh4eq2semj7ey/Leandro.png?rlkey=1784s67wn6c6hjdma6wkgy91a&raw=1", alt: "Leandro Henrique", nome: "Leandro Henrique", cargo: "Co-Fundador · Arquiteto" },
              { src: "https://www.dropbox.com/scl/fi/6060a867ejklropxdqju3/Neandro.png?rlkey=3z4ynhzr1lq6treoni9h1fqyr&raw=1", alt: "Neandro Jacque", nome: "Neandro Jacque", cargo: "Co-Fundador · Arquiteto" },
            ].map((p, idx) => (
              <div key={idx} className="snos-foto-card w-full md:w-1/2 h-[380px] md:h-[460px] relative overflow-hidden flex-shrink-0" style={{ background: "#1A1816" }}>
                <img src={p.src} alt={p.alt} className="w-full h-full object-cover block" style={{ objectPosition: "center 15%" }} />
                <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(26,24,22,0.25) 0%, transparent 30%, rgba(26,24,22,0) 55%, rgba(26,24,22,0.85) 100%)" }} />
                <div className="absolute top-4 left-4 w-[22px] h-[22px] border-l border-t border-[rgba(166,137,102,0.55)] z-[3]" />
                <div className="absolute bottom-4 right-4 w-[22px] h-[22px] border-r border-b border-[rgba(166,137,102,0.55)] z-[3]" />
                <div className="absolute bottom-0 left-0 right-0 p-5 z-[2]">
                  <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "24px", fontWeight: 600, color: "#E8E4DF", lineHeight: 1.05 }}>{p.nome}</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#A68966", marginTop: "8px" }}>{p.cargo}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full p-7 md:p-[52px_56px_48px_56px]" style={{ background: "#1D1B19", borderTop: "1px solid rgba(166,137,102,0.12)" }}>
            <p className="snos-anim snos-d3" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: "clamp(19px, 2.1vw, 27px)", color: "#E8E4DF", lineHeight: 1.35, marginBottom: "28px" }}>
              A NL não é definida por quem assina —<br />é definida pelo <em style={{ fontStyle: "italic", color: "#A68966" }}>cuidado.</em>
            </p>
            <div style={{ width: "28px", height: "1px", background: "rgba(166,137,102,0.45)", marginBottom: "28px" }} />
            <p className="snos-anim snos-d4" style={{ fontSize: "13.5px", color: "rgba(232,228,223,0.55)", lineHeight: 1.95, marginBottom: "22px" }}>
              Acreditamos que arquitetura nasce da escuta. Entender o ritmo da família, os silêncios, os hábitos que ninguém percebe — é daí que nasce um projeto que pertence.
            </p>
            <p className="snos-anim snos-d4" style={{ fontSize: "13.5px", color: "rgba(232,228,223,0.55)", lineHeight: 1.95, marginBottom: "22px" }}>
              Fundada por Leandro e Neandro, a NL une visão estratégica e disciplina executiva em um único método: transformar o desejo do cliente em projeto sem perdas — de conceito, de qualidade ou de identidade.
            </p>
            <div className="snos-anim snos-d5" style={{ height: "1px", background: "rgba(166,137,102,0.1)", margin: "32px 0 28px 0" }} />
            <p className="snos-anim snos-d5" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontWeight: 300, fontSize: "19px", color: "rgba(166,137,102,0.88)", lineHeight: 1.5 }}>
              "Arquitetura com método. Criação com sensibilidade."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section05SobreNos;
