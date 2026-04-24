import { useState } from "react";
import { useInView } from "./useInView";

const dadosDores = [
  { id: "c1", num: "01", titulo: "Obra estourou o orçamento sem aviso.", solTitulo: "Orçamento baseado em quantitativos reais — validado antes da obra começar.", solCorpo: "Você aprova o investimento com clareza total antes da primeira escavação. Sem chute, sem surpresa de custo, sem conflito na obra." },
  { id: "c2", num: "02", titulo: "Meses de atraso sem explicação clara.", solTitulo: "Cada etapa tem critério de avanço definido e prazo registrado.", solCorpo: "Nenhuma fase avança sem sua aprovação. O processo é controlado do início ao fim — sem justificativa vaga, sem atraso surpresa." },
  { id: "c3", num: "03", titulo: "Resultado diferente do que foi prometido.", solTitulo: "3D validado e aprovado antes de qualquer compra.", solCorpo: "Você vê exatamente o que vai ser construído antes da obra começar. O que foi aprovado no modelo é o que é entregue." },
  { id: "c4", num: "04", titulo: "Decisões tomadas na obra sem consulta.", solTitulo: "Nenhuma decisão técnica sem registro e aprovação formal.", solCorpo: "A NL conduz o processo e documenta cada decisão. Você aprova com segurança — sem precisar entender de obra." },
  { id: "c5", num: "05", titulo: "Não entendeu o que estava aprovando.", solTitulo: "O projeto traduzido em imagem — você aprova o que entende.", solCorpo: "Não pedimos que você confie no que não vê. Cada decisão é mostrada em modelo 3D antes de virar obra." },
  { id: "c6", num: "06", titulo: '"Obra sempre tem imprevisto" — e você aceitou isso.', solTitulo: "Imprevisto não é lei — é falta de planejamento no projeto.", solCorpo: "Eliminamos colisões técnicas e decisões não documentadas antes da obra começar. O imprevisto existe quando o projeto não foi feito com rigor." },
];

type Dor = (typeof dadosDores)[0];

const Section07Dores = () => {
  const [modal, setModal] = useState<Dor | null>(null);
  const { ref, inView } = useInView(0.1);

  return (
    <div ref={ref} id="consolidacao" className={inView ? 'in-view' : ''} style={{ background: "#1A1816", color: "#E8E4DF", fontFamily: '-apple-system,"Helvetica Neue",Arial,sans-serif', minHeight: "100vh", position: "relative" }}>
      <style>{`
        @keyframes sdFadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        .sd-anim { opacity: 0; }
        .in-view .sd-h1 { animation: sdFadeUp 0.9s cubic-bezier(0.23,1,0.32,1) 100ms forwards; }
        .in-view .sd-h2 { animation: sdFadeUp 0.9s cubic-bezier(0.23,1,0.32,1) 250ms forwards; }
        .in-view .sd-h3 { animation: sdFadeUp 0.9s cubic-bezier(0.23,1,0.32,1) 400ms forwards; }
        .in-view .sd-grid { animation: sdFadeUp 0.9s cubic-bezier(0.23,1,0.32,1) 550ms forwards; }
        .in-view .sd-foot { animation: sdFadeUp 0.9s cubic-bezier(0.23,1,0.32,1) 850ms forwards; }
        .sd-inner { max-width:1200px; margin:0 auto; padding:88px 80px 100px; }
        .sd-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; }
        .sd-card { background:#211F1C; border:0.5px solid rgba(232,228,223,0.06); padding:36px 32px 28px; cursor:pointer; position:relative; overflow:hidden; transition:background 0.3s,border-color 0.3s; min-height:200px; display:flex; flex-direction:column; justify-content:space-between; }
        .sd-card:hover { background:rgba(139,115,85,0.05); border-color:rgba(139,115,85,0.2); }
        .sd-card-num-bg { font-family:'Cormorant Garamond',serif; font-size:80px; font-weight:300; line-height:1; color:rgba(232,228,223,0.03); position:absolute; bottom:8px; right:16px; letter-spacing:-0.04em; user-select:none; pointer-events:none; }
        .sd-card-cta { font-family:'JetBrains Mono',monospace; font-size:8px; letter-spacing:2px; text-transform:uppercase; color:rgba(139,115,85,0); margin-top:20px; display:block; transition:color 0.3s; }
        .sd-card:hover .sd-card-cta { color:rgba(139,115,85,0.7); }
        .sd-overlay { position:fixed; inset:0; z-index:999; background:rgba(10,8,6,0.75); display:flex; align-items:center; justify-content:center; padding:24px; backdrop-filter: blur(4px); }
        .sd-modal { background:#8B7355; width:min(540px,90vw); padding:48px 44px; position:relative; animation:sdUp 0.4s cubic-bezier(0.23,1,0.32,1) forwards; }
        @keyframes sdUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @media(max-width:768px){ .sd-inner{padding:48px 24px 64px;} .sd-grid{grid-template-columns:1fr;} .sd-modal{padding:36px 28px;} }
      `}</style>
      <div className="sd-inner">
        <div className="sd-anim sd-h1" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, letterSpacing:"0.3em", textTransform:"uppercase", color:"#8B7355", marginBottom:24 }}>
          07 · Consolidação · O problema
        </div>
        <h2 className="sd-anim sd-h2" style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontSize:"clamp(36px,4.5vw,64px)", lineHeight:1.02, color:"#E8E4DF", marginBottom:16 }}>
          A maioria das obras<br />falha <em style={{ fontStyle:"italic", color:"#8B7355" }}>antes de começar.</em>
        </h2>
        <p className="sd-anim sd-h3" style={{ fontSize:14, color:"rgba(232,228,223,0.5)", lineHeight:1.85, maxWidth:540, marginBottom:32 }}>
          Não é a equipe. Não é o material. É a decisão que não foi tomada no projeto — e que virou custo, atraso ou conflito na obra.
        </p>
        <div className="sd-anim sd-h3" style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:17, fontWeight:300, color:"rgba(139,115,85,0.85)", lineHeight:1.5, paddingLeft:20, borderLeft:"1.5px solid rgba(139,115,85,0.3)", marginBottom:48, maxWidth:480 }}>
          "Se você já ouviu alguma dessas histórias,<br />sabe que não são exceção."
        </div>
        <div className="sd-anim" style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9, letterSpacing:"0.25em", textTransform:"uppercase", color:"rgba(139,115,85,0.5)" }}>
            Toque para ver como resolvemos
          </span>
          <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9, letterSpacing:"0.25em", textTransform:"uppercase", color:"rgba(232,228,223,0.2)" }}>
            <span style={{ color:"rgba(139,115,85,0.6)" }}>06</span> situações reais
          </span>
        </div>
        <div className="sd-anim sd-grid">
          {dadosDores.map((d) => (
            <div key={d.id} className="sd-card" onClick={() => setModal(d)}>
              <span className="sd-card-num-bg">{d.num}</span>
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9, letterSpacing:"0.25em", textTransform:"uppercase", color:"rgba(139,115,85,0.5)", marginBottom:14, display:"block" }}>
                Situação {d.num}
              </span>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(18px,1.6vw,22px)", fontWeight:400, lineHeight:1.2, letterSpacing:"-0.02em", color:"rgba(232,228,223,0.75)", flex:1 }}>
                {d.titulo}
              </div>
              <span className="sd-card-cta">Como resolvemos →</span>
            </div>
          ))}
        </div>
        <div className="sd-anim sd-foot" style={{ marginTop:64, paddingTop:32, borderTop:"0.5px solid rgba(232,228,223,0.07)", display:"flex", alignItems:"center", gap:16 }}>
          <div style={{ width:28, height:1, background:"rgba(139,115,85,0.5)", flexShrink:0 }} />
          <span style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:15, fontWeight:300, color:"rgba(139,115,85,0.75)" }}>
            "Decidir no papel é barato. Decidir no canteiro é caro."
          </span>
        </div>
      </div>
      {modal && (
        <div className="sd-overlay" onClick={() => setModal(null)}>
          <div className="sd-modal" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setModal(null)} style={{ position:"absolute", top:16, right:16, width:28, height:28, background:"rgba(26,24,22,0.1)", border:"0.5px solid rgba(26,24,22,0.2)", cursor:"pointer", color:"rgba(26,24,22,0.6)", fontSize:14 }}>✕</button>
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9, letterSpacing:"0.25em", textTransform:"uppercase", color:"rgba(26,24,22,0.55)", marginBottom:20, display:"block" }}>Como a NL resolve</span>
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:72, fontWeight:300, lineHeight:0.85, color:"rgba(26,24,22,0.12)", letterSpacing:"-0.04em", marginBottom:20 }}>{modal.num}</div>
            <div style={{ width:32, height:1, background:"rgba(26,24,22,0.25)", marginBottom:20 }} />
            <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(20px,2.2vw,28px)", fontWeight:400, lineHeight:1.15, letterSpacing:"-0.02em", color:"#1A1816", marginBottom:16 }}>{modal.solTitulo}</div>
            <div style={{ fontSize:13.5, color:"rgba(26,24,22,0.7)", lineHeight:1.85 }}>{modal.solCorpo}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Section07Dores;
