import React from 'react';
import { Lead, LeadStage } from '@/types/pipeline';
import LeadCard from './LeadCard';
import { cn } from "@/lib/utils";

interface KanbanProps {
  leads: Lead[];
  onLeadClick: (id: string) => void;
  onMoveLead: (id: string, stage: string) => void;
}

const Kanban = ({ leads, onLeadClick, onMoveLead }: KanbanProps) => {
  const stages: { label: LeadStage; color: string }[] = [
    { label: 'Novo Lead', color: '#8B7355' },
    { label: 'Reunião Agendada', color: '#3A7BD5' },
    { label: 'Proposta Enviada', color: '#7B55D5' },
    { label: 'Negociação', color: '#C49A2A' },
    { label: 'Fechado', color: '#2E7D52' },
    { label: 'Perdido', color: '#999999' }
  ];

  const getStageTotal = (stage: LeadStage) => {
    return leads
      .filter(l => l.stage === stage)
      .reduce((acc, l) => acc + l.orcamento, 0);
  };

  const formatCurrencyK = (val: number) => {
    return `R$ ${(val / 1000).toLocaleString('pt-BR', { maximumFractionDigits: 0 })}k`;
  };

  return (
    <div className="flex h-full pb-4 min-w-max space-x-6">
      {stages.map(stage => {
        const stageLeads = leads.filter(l => l.stage === stage.label);
        const isPerdido = stage.label === 'Perdido';
        
        // Alertas contextuais
        const noContactCount = stage.label === 'Novo Lead' 
          ? stageLeads.filter(l => l.logs.length === 0).length 
          : 0;
        
        const followUpCount = stage.label === 'Proposta Enviada'
          ? stageLeads.filter(l => {
              const diff = (new Date().getTime() - new Date(l.etapa_desde).getTime()) / (1000 * 60 * 60 * 24);
              return diff > 3;
            }).length
          : 0;

        return (
          <div 
            key={stage.label} 
            className={cn(
              "flex flex-col w-[260px] h-full",
              isPerdido && "opacity-60"
            )}
          >
            <div className="mb-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: stage.color }}></div>
                  <h3 className="text-[9px] font-mono uppercase tracking-[0.18em] text-[#1A1A1A]">
                    {stage.label}
                  </h3>
                </div>
                <div className="w-5 h-5 rounded-full border border-[#E8E4DF] flex items-center justify-center text-[9px] font-mono">
                  {stageLeads.length}
                </div>
              </div>
              <div className="text-[9px] font-mono text-[#8B7355] font-bold uppercase tracking-tight">
                {formatCurrencyK(getStageTotal(stage.label))} EM NEGOCIAÇÃO
              </div>
            </div>

            {noContactCount > 0 && (
              <div className="mb-3 px-3 py-1.5 bg-[#B83232]/5 border border-[#B83232]/10 rounded-[2px] text-[#B83232] text-[8px] font-mono uppercase tracking-wider">
                ! {noContactCount} lead(s) sem contato
              </div>
            )}

            {followUpCount > 0 && (
              <div className="mb-3 px-3 py-1.5 bg-[#C49A2A]/5 border border-[#C49A2A]/10 rounded-[2px] text-[#C49A2A] text-[8px] font-mono uppercase tracking-wider">
                ! Follow-up pendente
              </div>
            )}

            <div className={cn(
              "flex-1 overflow-y-auto space-y-4 pr-1",
              isPerdido && "bg-black/[0.02]"
            )}>
              {stageLeads.length === 0 ? (
                <div className="h-[80px] flex items-center justify-center space-x-3 opacity-20">
                  <div className="w-7 h-[1px] bg-[#8B7355]"></div>
                  <span className="text-[9px] font-mono uppercase">Nenhum lead</span>
                  <div className="w-7 h-[1px] bg-[#8B7355]"></div>
                </div>
              ) : (
                stageLeads.map(lead => (
                  <LeadCard 
                    key={lead.id} 
                    lead={lead} 
                    onClick={() => onLeadClick(lead.id)}
                  />
                ))
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Kanban;
