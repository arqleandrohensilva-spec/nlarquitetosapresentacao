import { useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

export const useEngagementTracking = () => {
  const location = useLocation();
  const { slug } = useParams();
  const observers = useRef<Map<string, { startTime: number; lastRecordedTime: number }>>(new Map());
  const proposalIdRef = useRef<string | null>(null);

  useEffect(() => {
    const initTracking = async () => {
      // Prioridade 1: slug da URL (para rotas /p/:tipo/:slug)
      if (slug) {
        const { data } = await supabase
          .from("propostas_clientes")
          .select("id")
          .eq("slug", slug)
          .maybeSingle();
        
        if (data) {
          proposalIdRef.current = data.id;
        }
      }

      // Prioridade 2: query param ?id=... (legado ou fallback)
      if (!proposalIdRef.current) {
        const queryParams = new URLSearchParams(location.search);
        proposalIdRef.current = queryParams.get("id");
      }

      if (!proposalIdRef.current) return;

      const sections = document.querySelectorAll("section[id]");
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const sectionId = entry.target.id;
            const now = Date.now();

            if (entry.isIntersecting) {
              observers.current.set(sectionId, { 
                startTime: now,
                lastRecordedTime: 0 
              });
            } else {
              const session = observers.current.get(sectionId);
              if (session) {
                const duration = Math.floor((now - session.startTime) / 1000);
                if (duration > 0) {
                  recordEngagement(sectionId, duration);
                }
                observers.current.delete(sectionId);
              }
            }
          });
        },
        { threshold: 0.5 }
      );

      sections.forEach((section) => observer.observe(section));

      return () => {
        const now = Date.now();
        observers.current.forEach((session, sectionId) => {
          const duration = Math.floor((now - session.startTime) / 1000);
          if (duration > 0) {
            recordEngagement(sectionId, duration);
          }
        });
        observer.disconnect();
      };
    };

    const cleanupPromise = initTracking();

    return () => {
      cleanupPromise.then(cleanup => cleanup && cleanup());
    };
  }, [location.pathname, location.search, slug]);

  const recordEngagement = async (sectionId: string, duration: number) => {
    if (!proposalIdRef.current) return;

    try {
      await supabase.from("proposta_engajamento").insert({
        proposta_id: proposalIdRef.current,
        secao: sectionId,
        tempo_segundos: duration,
        dispositivo: window.innerWidth < 768 ? "mobile" : "desktop",
      });
    } catch (err) {
      console.error("Failed to record engagement:", err);
    }
  };
};
