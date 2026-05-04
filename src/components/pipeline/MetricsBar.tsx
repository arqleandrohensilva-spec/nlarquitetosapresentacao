import React from 'react';
import { Lead } from '@/types/pipeline';
import { cn } from "@/lib/utils";

interface MetricsBarProps {
  leads: Lead[];
}

const MetricsBar = ({ leads }: MetricsBarProps) => {
  const activeLeads = leads.filter(l => l.stage !== 'Fechado' && l.stage !== 'Perdido').length;
  
  const ticketMedio = leads.length > 0 
    ? leads.reduce((acc, l) => acc + l.orcamento, 0) / leads.length 
    : 0;

  const emNegociacao = leads
    .filter(l => l.stage !== 'Fechado' && l.stage !== 'Perdido')
    .reduce((acc, l) => acc + l.orcamento, 0);

  const followUpsHoje = leads.filter(l => {
    if (!l.proxima_acao_data) return false;
    const today = new Date().toISOString().split('T')[0];
    return l.proxima_acao_data.startsWith(today);
  }).length;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="grid grid-cols-4 border-y border-[#E8E4DF] mb-6">
      <div className="px-8 py-6 border-r border-[#E8E4DF] relative">
        <span className="text-[40px] font-bold font-serif text-[#1A1A1A] leading-none block mb-1">
          {activeLeads}
        </span>
        <span className="text-[9px] text-[#999999] font-mono uppercase tracking-[0.2em]">LEADS ATIVOS</span>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#8B7355] opacity-20"></div>
      </div>

      <div className="px-8 py-6 border-r border-[#E8E4DF] relative">
        <span className="text-[40px] font-bold font-serif text-[#1A1A1A] leading-none block mb-1">
          {formatCurrency(ticketMedio)}
        </span>
        <div className="flex items-center space-x-2">
          <span className="text-[9px] text-[#999999] font-mono uppercase tracking-[0.2em]">TICKET MÉDIO</span>
          <span className="text-[8px] text-green-600 font-mono">↑ 12%</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#8B7355] opacity-20"></div>
      </div>

      <div className="px-8 py-6 border-r border-[#E8E4DF] relative">
        <span className="text-[40px] font-bold font-serif text-[#1A1A1A] leading-none block mb-1">
          {formatCurrency(emNegociacao)}
        </span>
        <span className="text-[9px] text-[#999999] font-mono uppercase tracking-[0.2em]">EM NEGOCIAÇÃO</span>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#8B7355] opacity-20"></div>
      </div>

      <div className="px-8 py-6 relative">
        <div className="flex items-baseline space-x-2">
          <span className={cn(
            "text-[40px] font-bold font-serif leading-none block mb-1",
            followUpsHoje > 0 ? "text-[#B83232]" : "text-[#1A1A1A]"
          )}>
            {followUpsHoje}
          </span>
          {followUpsHoje > 0 && (
            <div className="w-2 h-2 rounded-full bg-[#B83232] animate-pulse"></div>
          )}
        </div>
        <span className="text-[9px] text-[#999999] font-mono uppercase tracking-[0.2em]">FOLLOW-UPS HOJE</span>
        <div className={cn(
          "absolute bottom-0 left-0 right-0 h-[1px] bg-[#8B7355]",
          followUpsHoje > 0 ? "opacity-100" : "opacity-20"
        )}></div>
      </div>
    </div>
  );
};

export default MetricsBar;
