import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

export const useEngagementTracking = () => {
  const location = useLocation();
  const observers = useRef<Map<string, { startTime: number; lastRecordedTime: number }>>(new Map());
  const proposalIdRef = useRef<string | null>(null);

  useEffect(() => {
    // Extrair ID da proposta da URL (query param ?id=...)
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get("id");
    proposalIdRef.current = id;

    if (!id) return;

    const sections = document.querySelectorAll("section[id]");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          const now = Date.now();

          if (entry.isIntersecting) {
            // Entrou na seção
            observers.current.set(sectionId, { 
              startTime: now,
              lastRecordedTime: 0 
            });
          } else {
            // Saiu da seção - registrar tempo
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
      { threshold: 0.5 } // 50% da seção visível
    );

    sections.forEach((section) => observer.observe(section));

    // Cleanup: registrar tempos pendentes ao sair da página
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
  }, [location.pathname, location.search]);

  const recordEngagement = async (sectionId: string, duration: number) => {
    if (!proposalIdRef.current) return;

    try {
      const { error } = await supabase.from("proposta_engajamento").insert({
        proposta_id: proposalIdRef.current,
        secao: sectionId,
        tempo_segundos: duration,
        dispositivo: window.innerWidth < 768 ? "mobile" : "desktop",
      });

      if (error) {
        console.error("Error recording engagement:", error);
      }
    } catch (err) {
      console.error("Failed to record engagement:", err);
    }
  };
};
