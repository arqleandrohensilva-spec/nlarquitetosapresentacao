import React from 'react';
import { Lead } from '@/types/pipeline';
import { MapPin, Square, DollarSign, Calendar } from 'lucide-react';
import { cn } from "@/lib/utils";

interface LeadCardProps {
  lead: Lead;
  onClick: () => void;
}

const LeadCard = ({ lead, onClick }: LeadCardProps) => {
  const initials = lead.nome
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const formatCurrencyK = (val: number) => {
    return `R$ ${(val / 1000).toLocaleString('pt-BR', { maximumFractionDigits: 0 })}k`;
  };

  const getInactivityAlert = () => {
    const stageDate = new Date(lead.etapa_desde);
    const today = new Date();
    const diffDays = Math.floor((today.getTime() - stageDate.getTime()) / (1000 * 60 * 60 * 24));

    if (lead.stage === 'Novo Lead' && lead.logs.length === 0 && diffDays >= 1) {
      return `! Sem contato há ${diffDays} dias`;
    }
    if (lead.stage === 'Proposta Enviada' && diffDays >= 3) {
      return `! Aguardando resposta há ${diffDays} dias`;
    }
    return null;
  };

  const alert = getInactivityAlert();
  const daysInStage = Math.floor((new Date().getTime() - new Date(lead.etapa_desde).getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div 
      onClick={onClick}
      className={cn(
        "bg-white border-l-2 p-4 cursor-pointer transition-all hover:translate-y-[-1px] hover:shadow-[0_2px_12px_rgba(139,115,85,0.12)] hover:border-r hover:border-r-[#8B7355] hover:border-y hover:border-y-[#8B7355] relative",
        lead.temp === 'Quente' ? "border-l-[#B83232]" : 
        lead.temp === 'Morno' ? "border-l-[#C49A2A]" : "border-l-[#E8E4DF]",
        lead.score >= 8 && "border-t-2 border-t-[#8B7355]/50"
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-[#E8E4DF] flex items-center justify-center text-[10px] font-bold text-[#8B7355]">
            {initials}
          </div>
          <h4 className="text-[16px] font-serif font-bold text-[#1A1A1A] leading-tight max-w-[140px]">
            {lead.nome}
          </h4>
        </div>
        <div className={cn(
          "w-6 h-6 rounded-[4px] flex items-center justify-center text-[10px] font-mono font-bold",
          lead.score >= 8 ? "bg-[#8B7355] text-white" : 
          lead.score >= 5 ? "bg-[#1A1A1A] text-white" : 
          "border border-[#E8E4DF] text-[#999999]"
        )}>
          {lead.score}
        </div>
      </div>

      <div className="space-y-1.5 mb-4">
        <div className="flex items-center space-x-2 text-[10px] font-mono text-[#999999]">
          <MapPin className="w-3 h-3" />
          <span>{lead.cidade}</span>
        </div>
        <div className="flex items-center space-x-2 text-[10px] font-mono text-[#999999]">
          <Square className="w-3 h-3" />
          <span>{lead.area} m²</span>
        </div>
        {lead.orcamento > 0 && (
          <div className="flex items-center space-x-2 text-[10px] font-mono text-[#1A1A1A] font-bold">
            <DollarSign className="w-3 h-3" />
            <span>{formatCurrencyK(lead.orcamento)}</span>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-2 py-0.5 bg-[#8B7355]/10 text-[#8B7355] border border-[#8B7355]/30 text-[8px] font-mono uppercase tracking-wider rounded-[2px]">
          {lead.tipo}
        </span>
        <span className="px-2 py-0.5 border border-[#E8E4DF] text-[#999999] text-[8px] font-mono uppercase tracking-wider rounded-[2px]">
          {lead.origem}
        </span>
      </div>

      {alert && (
        <div className="mb-4 py-1.5 px-2 bg-[#B83232]/5 border border-[#B83232]/10 text-[#B83232] text-[8px] font-mono uppercase tracking-widest rounded-[2px]">
          {alert}
        </div>
      )}

      <div className="flex items-center justify-between pt-3 border-t border-[#E8E4DF]/50">
        <div className="flex items-center space-x-1.5">
          <div className={cn(
            "w-1.5 h-1.5 rounded-full",
            lead.temp === 'Quente' ? "bg-[#B83232]" : 
            lead.temp === 'Morno' ? "bg-[#C49A2A]" : "bg-[#999999]"
          )}></div>
          <span className="text-[8px] font-mono uppercase text-[#1A1A1A]">{lead.temp}</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-[8px] font-mono text-[#999999] lowercase">há {daysInStage} dias</span>
          {lead.proxima_acao_tipo && (
            <Calendar className="w-3 h-3 text-[#8B7355]" />
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadCard;
