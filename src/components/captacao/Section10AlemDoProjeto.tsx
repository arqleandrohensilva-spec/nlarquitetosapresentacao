import { useInView } from "./useInView";

const itens = [
  { num: "01", titulo: "Suporte técnico permanente", desc: "O projeto foi entregue. Continuamos disponíveis para dúvidas, orientações e esclarecimentos durante toda a execução." },
  { num: "02", titulo: "Gestão junto a fornecedores", desc: "Atuamos diretamente com fornecedores para garantir que cada especificação seja executada como projetada." },
  { num: "03", titulo: "Revisões e aprimoramentos", desc: "Quando a obra exige ajuste técnico, avaliamos e resolvemos — com o mesmo cuidado de sempre." },
  { num: "04", titulo: "Acompanhamento próximo", desc: "Nosso compromisso não termina no caderno técnico. Permanecemos ao lado até o resultado estar construído." },
];

const Section10AlemDoProjeto = () => {
  const { ref, inView } = useInView(0.1);

  return (
    <div ref={ref} id="alem" className={`min-h-screen overflow-x-hidden ${inView ? 'in-view' : ''}`} style={{ background: "#1A1816", color: "#E8E4DF", fontFamily: '-apple-system,"Helvetica Neue",Arial,sans-serif' }}>
      <style>{`
        @keyframes s8FadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        .s8-anim { opacity: 0; }
        .in-view .s8-label    { animation: s8FadeUp 0.8s cubic-bezier(0.23,1,0.32,1) 100ms forwards; }
        .in-view .s8-headline { animation: s8FadeUp 0.9s cubic-bezier(0.23,1,0.32,1) 200ms forwards; }
        .in-view .s8-body     { animation: s8FadeUp 0.9s cubic-bezier(0.23,1,0.32,1) 400ms forwards; }
        .in-view .s8-divider  { animation: s8FadeUp 0.6s ease 600ms forwards; }
        .in-view .s8-item-0   { animation: s8FadeUp 0.7s cubic-bezier(0.23,1,0.32,1) 700ms forwards; }
        .in-view .s8-item-1   { animation: s8FadeUp 0.7s cubic-bezier(0.23,1,0.32,1) 850ms forwards; }
        .in-view .s8-item-2   { animation: s8FadeUp 0.7s cubic-bezier(0.23,1,0.32,1) 1000ms forwards; }
        .in-view .s8-item-3   { animation: s8FadeUp 0.7s cubic-bezier(0.23,1,0.32,1) 1150ms forwards; }
        .in-view .s8-frase    { animation: s8FadeUp 0.9s ease 1300ms forwards; }
        .s8-item { background: #1D1B19; padding: 36px 28px 40px; position: relative; transition: background 0.3s ease; }
        @media (min-width: 769px) { .s8-item { padding: 48px 44px 52px; } }
        .s8-item::before { content: ""; position: absolute; top: 0; left: 0; width: 0; height: 1px; background: #8B7355; transition: width 0.6s cubic-bezier(0.23,1,0.32,1); }
        .s8-item:hover { background: #211F1C; }
        .s8-item:hover::before { width: 100%; }
      `}</style>
      <div className="pt-16 md:pt-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-20">
          <div className="pb-12 md:pb-20">
            <span className="s8-anim s8-label block mb-8 md:mb-12" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "#8B7355" }}>
              10 · Além do Projeto
            </span>
            <h2 className="s8-anim s8-headline" style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 300, fontSize: "clamp(40px,7vw,96px)", lineHeight: 1.0, letterSpacing: "-0.03em", color: "#E8E4DF", marginBottom: 0 }}>
              O projeto foi entregue.<br /><em style={{ fontStyle: "italic", color: "#8B7355" }}>A NL continua.</em>
            </h2>
            <div className="s8-anim s8-body block mt-8 md:mt-10 max-w-[520px]">
              <div className="pt-2 border-t" style={{ borderColor: "rgba(232,228,223,0.12)" }}>
                <p style={{ fontSize: 15, color: "rgba(232,228,223,0.6)", lineHeight: 1.85, marginBottom: 16 }}>
                  O caderno executivo foi entregue. A obra começa — e a NL não desaparece. Dúvidas, ajustes de especificação, intermediação com fornecedores.
                </p>
                <p style={{ fontSize: 15, color: "rgba(232,228,223,0.6)", lineHeight: 1.85 }}>
                  Você não navega sozinho a execução do que foi pensado com tanto cuidado.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="s8-anim s8-divider h-[3px]" style={{ background: "linear-gradient(to right, transparent, rgba(139,115,85,0.4) 30%, rgba(139,115,85,0.4) 70%, transparent)" }} />
        <div className="px-5 md:px-20" style={{ background: "#0E0C0A" }}>
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(232,228,223,0.06)" }}>
              {itens.map((item, i) => (
                <div key={i} className={`s8-anim s8-item s8-item-${i}`}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.25em", color: "rgba(166,137,102,0.6)", display: "block", marginBottom: 28 }}>
                    {item.num}
                  </span>
                  <div className="flex flex-col gap-3">
                    <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(20px,2.2vw,28px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#F0EDE8", margin: 0 }}>
                      {item.titulo}
                    </h3>
                    <p style={{ fontSize: 13, color: "rgba(232,228,223,0.45)", lineHeight: 1.75, maxWidth: 380 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="px-5 md:px-20 pb-16 md:pb-24" style={{ background: "#0E0C0A" }}>
          <div className="max-w-[1200px] mx-auto">
            <div className="s8-anim s8-frase border-t pt-10 md:pt-12 flex items-center justify-center" style={{ borderColor: "rgba(232,228,223,0.08)" }}>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(18px,2.2vw,28px)", color: "rgba(166,137,102,0.85)", textAlign: "center", lineHeight: 1.5, maxWidth: 680 }}>
                "A entrega do projeto não é o fim do processo.<br />É o início da obra."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section10AlemDoProjeto;
