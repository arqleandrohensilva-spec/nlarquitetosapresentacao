import { useRef, useEffect, useState, useCallback } from "react";
import { useInView } from "./useInView";

const Section09Galeria = () => {
  const { ref, inView } = useInView(0.1);
  const imgs = ["/galeria-01.png", "/galeria-02.png"];
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [offsets, setOffsets] = useState([0, 0]);
  const ticking = useRef(false);

  const updateParallax = useCallback(() => {
    const vh = window.innerHeight;
    const newOffsets = imgRefs.current.map((el) => {
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      if (rect.bottom < -50 || rect.top > vh + 50) return 0;
      const center = rect.top + rect.height / 2;
      return (center - vh / 2) * 0.06;
    });
    setOffsets(newOffsets);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(() => { updateParallax(); ticking.current = false; });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    updateParallax();
    return () => window.removeEventListener("scroll", onScroll);
  }, [updateParallax]);

  return (
    <div ref={ref} id="galeria" className={`s7b-root ${inView ? "in-view" : ""}`}>
      <style>{`
        @keyframes s7bFade { from { opacity: 0; transform: scale(1.04); } to { opacity: 1; transform: scale(1); } }
        .s7b-root { width: 100%; display: grid; grid-template-columns: 1fr 1fr; height: 80vh; min-height: 520px; max-height: 800px; overflow: hidden; gap: 2px; background: #0E0C0A; }
        .s7b-img { overflow: hidden; opacity: 0; }
        .in-view > .s7b-img:nth-of-type(1) { animation: s7bFade 1.2s cubic-bezier(0.23,1,0.32,1) 100ms forwards; }
        .in-view > .s7b-img:nth-of-type(2) { animation: s7bFade 1.2s cubic-bezier(0.23,1,0.32,1) 300ms forwards; }
        .s7b-img img { width: 100%; height: 110%; object-fit: cover; display: block; transition: filter 0.6s ease; filter: brightness(0.88) saturate(0.95); will-change: transform; }
        .s7b-img:hover img { filter: brightness(1) saturate(1); }
        @media (max-width: 768px) {
          .s7b-root { grid-template-columns: 1fr; height: auto; min-height: unset; max-height: unset; }
          .s7b-img { height: 60vw; min-height: 240px; }
        }
      `}</style>
      {imgs.map((src, i) => (
        <div key={i} className="s7b-img" ref={(el) => { imgRefs.current[i] = el; }}>
          <img src={src} alt={`NL Arquitetos projeto ${i + 1}`} loading="lazy" style={{ transform: `translateY(${offsets[i]}px)` }} />
        </div>
      ))}
    </div>
  );
};

export default Section09Galeria;
