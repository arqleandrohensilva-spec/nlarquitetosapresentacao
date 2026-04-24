import { useInView } from "./useInView";
import NoiseOverlay from "./NoiseOverlay";

const cores = [
  { id: "noite", name: "Noite Profunda", hex: "#1A1816", color: "#1A1816", textLight: true, mood: "Base · Quietude" },
  { id: "carvalho", name: "Carvalho", hex: "#4A3A2A", color: "#4A3A2A", textLight: true, mood: "Estrutura · Madeira" },
  { id: "champagne", name: "Champagne", hex: "#C9A876", color: "#C9A876", textLight: false, mood: "Acento · Luz dourada" },
  { id: "terracota", name: "Terracota", hex: "#9C6B4F", color: "#9C6B4F", textLight: true, mood: "Calor · Pele" },
  { id: "linho", name: "Linho Cru", hex: "#D9CDB8", color: "#D9CDB8", textLight: false, mood: "Textura · Tecido" },
  { id: "alabastro", name: "Alabastro", hex: "#E8E4DF", color: "#E8E4DF", textLight: false, mood: "Repouso · Luz natural" },
];

const Section03Cores = () => {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      ref={ref}
      id="cores"
      className={`relative w-full min-h-screen px-5 py-20 md:px-[10vw] md:py-28 overflow-hidden ${inView ? "in-view" : ""}`}
      style={{ background: "#0F0D0B", color: "#E8E4DF" }}
    >
      <NoiseOverlay opacity={0.03} />
      <style>{`
        @keyframes s3cFadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        .s3c-anim { opacity: 0; }
        .in-view .s3c-h1   { animation: s3cFadeUp 0.9s cubic-bezier(0.23,1,0.32,1) 100ms forwards; }
        .in-view .s3c-h2   { animation: s3cFadeUp 0.9s cubic-bezier(0.23,1,0.32,1) 250ms forwards; }
        .in-view .s3c-c0   { animation: s3cFadeUp 0.7s cubic-bezier(0.23,1,0.32,1) 400ms forwards; }
        .in-view .s3c-c1   { animation: s3cFadeUp 0.7s cubic-bezier(0.23,1,0.32,1) 500ms forwards; }
        .in-view .s3c-c2   { animation: s3cFadeUp 0.7s cubic-bezier(0.23,1,0.32,1) 600ms forwards; }
        .in-view .s3c-c3   { animation: s3cFadeUp 0.7s cubic-bezier(0.23,1,0.32,1) 700ms forwards; }
        .in-view .s3c-c4   { animation: s3cFadeUp 0.7s cubic-bezier(0.23,1,0.32,1) 800ms forwards; }
        .in-view .s3c-c5   { animation: s3cFadeUp 0.7s cubic-bezier(0.23,1,0.32,1) 900ms forwards; }
        .in-view .s3c-foot { animation: s3cFadeUp 0.9s cubic-bezier(0.23,1,0.32,1) 1100ms forwards; }
        .s3c-swatch { transition: transform 0.5s cubic-bezier(0.23,1,0.32,1); }
        .s3c-swatch:hover { transform: translateY(-4px); }
      `}</style>

      <div className="relative z-[2] max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-12 pb-4 border-b" style={{ borderColor: "rgba(139,115,85,0.2)" }}>
          <div className="flex items-baseline gap-6">
            <span className="s3c-anim s3c-h1" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.3em", color: "rgba(232,228,223,0.4)" }}>
              03
            </span>
            <span className="s3c-anim s3c-h1" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "#8B7355" }}>
              Paleta · Assinatura visual
            </span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-12 gap-y-10 items-end mb-16">
          <h2 className="s3c-anim s3c-h2 col-span-12 lg:col-span-7" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(38px,5vw,72px)", lineHeight: 1.0, letterSpacing: "-0.02em", color: "#E8E4DF" }}>
            Uma paleta que <em style={{ fontStyle: "italic", color: "#C9A876" }}>envelhece bem.</em>
          </h2>
          <p className="s3c-anim s3c-h2 col-span-12 lg:col-span-5" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(16px,1.6vw,20px)", lineHeight: 1.7, color: "rgba(232,228,223,0.65)" }}>
            Tons terrosos, neutros profundos e acentos dourados. Cores que não cansam, não datam, e ganham profundidade com a luz e o tempo.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {cores.map((c, i) => (
            <div key={c.id} className={`s3c-anim s3c-c${i} s3c-swatch`}>
              <div
                className="aspect-[3/4] w-full relative overflow-hidden"
                style={{ background: c.color, boxShadow: "inset 0 0 0 0.5px rgba(232,228,223,0.06)" }}
              >
                <span className="absolute top-3 left-3" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.2em", color: c.textLight ? "rgba(232,228,223,0.55)" : "rgba(26,24,22,0.5)" }}>
                  0{i + 1}
                </span>
              </div>
              <div className="pt-3">
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 400, color: "#E8E4DF", lineHeight: 1.1 }}>
                  {c.name}
                </div>
                <div className="mt-1.5 flex items-center gap-2">
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.15em", color: "rgba(201,168,118,0.7)" }}>
                    {c.hex}
                  </span>
                  <span className="h-px flex-1" style={{ background: "rgba(139,115,85,0.2)" }} />
                </div>
                <div className="mt-1" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 8, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(232,228,223,0.35)" }}>
                  {c.mood}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="s3c-anim s3c-foot mt-16 pt-6 border-t flex items-center gap-4" style={{ borderColor: "rgba(139,115,85,0.15)" }}>
          <div className="w-7 h-px" style={{ background: "rgba(166,137,102,0.5)" }} />
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, fontSize: 15, color: "rgba(166,137,102,0.7)" }}>
            "A cor é a primeira sensação. A última a sair da memória."
          </span>
        </div>
      </div>
    </section>
  );
};

export default Section03Cores;
