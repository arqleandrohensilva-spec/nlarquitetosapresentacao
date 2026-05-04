import React, { useState } from 'react';
import { Lead, LeadLog, LeadStage } from '@/types/pipeline';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { X, MessageSquare, Phone, Mail, Calendar, Trash2, ExternalLink } from 'lucide-react';
import { cn } from "@/lib/utils";

interface LeadDetailPanelProps {
  lead?: Lead;
  onClose: () => void;
  onUpdate: (lead: Lead) => void;
  onDelete: (id: string) => void;
  user: string;
}

const LeadDetailPanel = ({ lead, onClose, onUpdate, onDelete, user }: LeadDetailPanelProps) => {
  const [newLog, setNewLog] = useState({ tipo: 'W', nota: '' });
  const [nextAction, setNextAction] = useState({ tipo: 'W', nota: '', data: '' });

  if (!lead) return null;

  const initials = lead.nome.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  const stages: LeadStage[] = ['Novo Lead', 'Reunião Agendada', 'Proposta Enviada', 'Negociação', 'Fechado', 'Perdido'];

  const handleAddLog = () => {
    if (!newLog.nota) return;
    const log: LeadLog = {
      id: Math.random().toString(36).substr(2, 9),
      tipo: newLog.tipo as any,
      nota: newLog.nota,
      data: new Date().toISOString(),
      autor: user
    };
    onUpdate({ ...lead, logs: [log, ...lead.logs] });
    setNewLog({ tipo: 'W', nota: '' });
  };

  const handleSaveAction = () => {
    onUpdate({
      ...lead,
      proxima_acao_tipo: nextAction.tipo,
      proxima_acao_nota: nextAction.nota,
      proxima_acao_data: nextAction.data
    });
  };

  const moveStage = (newStage: LeadStage) => {
    onUpdate({
      ...lead,
      stage: newStage,
      etapa_desde: new Date().toISOString()
    });
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 z-40 backdrop-blur-[2px]" 
        onClick={onClose}
      />
      <div className="fixed right-0 top-0 bottom-0 w-[440px] bg-white z-50 flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-8 pb-6 border-b border-[#E8E4DF] relative">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-[#999999] hover:text-[#1A1A1A] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-[#E8E4DF] flex items-center justify-center text-lg font-bold text-[#8B7355]">
              {initials}
            </div>
            <div>
              <h3 className="text-[26px] font-serif font-bold text-[#1A1A1A] leading-tight mb-2">
                {lead.nome}
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-0.5 bg-[#8B7355]/10 text-[#8B7355] border border-[#8B7355]/30 text-[9px] font-mono uppercase tracking-wider rounded-[2px]">
                  {lead.tipo}
                </span>
                <span className="px-2 py-0.5 border border-[#E8E4DF] text-[#999999] text-[9px] font-mono uppercase tracking-wider rounded-[2px]">
                  {lead.origem}
                </span>
              </div>
            </div>
          </div>

          <Button 
            className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white text-[10px] font-mono uppercase h-9 space-x-2"
            onClick={() => window.open(`https://wa.me/55${lead.whats.replace(/\D/g, '')}`, '_blank')}
          >
            <MessageSquare className="w-3 h-3" />
            <span>Abrir WhatsApp</span>
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-10">
          {/* Funnel Timeline */}
          <section>
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#999999] mb-6">Pipeline do Lead</h4>
            <div className="flex justify-between relative">
              <div className="absolute top-2 left-0 right-0 h-[1px] bg-[#E8E4DF] z-0" />
              {stages.map((stage, idx) => {
                const currentIdx = stages.indexOf(lead.stage);
                const isPast = idx < currentIdx;
                const isCurrent = idx === currentIdx;

                return (
                  <button 
                    key={stage}
                    onClick={() => moveStage(stage)}
                    className="flex flex-col items-center relative z-10 group"
                  >
                    <div className={cn(
                      "w-4 h-4 rounded-full border-2 transition-all",
                      isCurrent ? "bg-[#8B7355] border-[#8B7355]" : 
                      isPast ? "border-[#8B7355] bg-white" : "border-[#E8E4DF] bg-white"
                    )} />
                    <span className={cn(
                      "text-[7px] font-mono uppercase mt-2 w-10 text-center leading-tight transition-all",
                      isCurrent ? "text-[#1A1A1A] font-bold" : "text-[#999999] group-hover:text-[#1A1A1A]"
                    )}>
                      {stage}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Next Action */}
          <section className="bg-[#8B7355]/5 border border-[#8B7355]/10 p-4 rounded-[2px]">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8B7355] mb-4">Próxima Ação</h4>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <select 
                className="h-8 border-[#E8E4DF] bg-white text-[10px] font-mono px-2 outline-none"
                value={nextAction.tipo}
                onChange={e => setNextAction({...nextAction, tipo: e.target.value})}
              >
                <option value="W">WhatsApp</option>
                <option value="L">Ligação</option>
                <option value="R">Reunião</option>
                <option value="E">E-mail</option>
              </select>
              <Input 
                type="date" 
                className="h-8 border-[#E8E4DF] text-[10px] font-mono"
                value={nextAction.data}
                onChange={e => setNextAction({...nextAction, data: e.target.value})}
              />
            </div>
            <Input 
              placeholder="O QUE FAZER?"
              className="h-8 border-[#E8E4DF] text-[10px] font-mono uppercase mb-3"
              value={nextAction.nota}
              onChange={e => setNextAction({...nextAction, nota: e.target.value})}
            />
            <Button 
              className="w-full h-8 bg-[#1A1A1A] hover:bg-[#8B7355] text-white text-[9px] uppercase font-mono tracking-widest"
              onClick={handleSaveAction}
            >
              Salvar Ação
            </Button>
          </section>

          {/* Data Grid */}
          <section>
            <div className="grid grid-cols-2 gap-y-6 gap-x-8">
              <div>
                <label className="text-[9px] font-mono uppercase text-[#999999] block mb-1">WhatsApp</label>
                <span className="text-[11px] font-mono">{lead.whats}</span>
              </div>
              <div>
                <label className="text-[9px] font-mono uppercase text-[#999999] block mb-1">Cidade</label>
                <span className="text-[11px] font-mono">{lead.cidade}</span>
              </div>
              <div>
                <label className="text-[9px] font-mono uppercase text-[#999999] block mb-1">Área</label>
                <span className="text-[11px] font-mono">{lead.area} m²</span>
              </div>
              <div>
                <label className="text-[9px] font-mono uppercase text-[#999999] block mb-1">Score</label>
                <div className="flex items-center space-x-2">
                  <span className="text-[11px] font-mono font-bold">{lead.score}/10</span>
                  <div className="flex space-x-1">
                    {[...Array(10)].map((_, i) => (
                      <div 
                        key={i} 
                        className={cn(
                          "w-1 h-3 rounded-[1px]",
                          i < lead.score ? "bg-[#8B7355]" : "bg-[#E8E4DF]"
                        )} 
                        onClick={() => onUpdate({ ...lead, score: i + 1 })}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* History / Logs */}
          <section>
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#999999] mb-6">Histórico de Contatos</h4>
            
            <div className="space-y-4 mb-8">
              <div className="flex space-x-2">
                <select 
                  className="w-20 border-[#E8E4DF] text-[10px] font-mono px-2 h-9 outline-none bg-[#F9F9F9]"
                  value={newLog.tipo}
                  onChange={e => setNewLog({...newLog, tipo: e.target.value})}
                >
                  <option value="W">W</option>
                  <option value="R">R</option>
                  <option value="L">L</option>
                  <option value="E">E</option>
                  <option value="N">N</option>
                </select>
                <Input 
                  placeholder="NOVA NOTA..."
                  className="flex-1 border-[#E8E4DF] text-[10px] font-mono uppercase h-9"
                  value={newLog.nota}
                  onChange={e => setNewLog({...newLog, nota: e.target.value})}
                  onKeyDown={e => e.key === 'Enter' && handleAddLog()}
                />
                <Button 
                  className="bg-[#1A1A1A] hover:bg-[#8B7355] text-white px-4 h-9"
                  onClick={handleAddLog}
                >
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              {lead.logs.map((log) => (
                <div key={log.id} className="flex space-x-4">
                  <div className="w-8 h-8 rounded-full border border-[#E8E4DF] flex items-center justify-center text-[10px] font-mono font-bold shrink-0">
                    {log.tipo}
                  </div>
                  <div className="space-y-1">
                    <p className="text-[11px] font-mono leading-relaxed text-[#1A1A1A] uppercase">
                      {log.nota}
                    </p>
                    <div className="flex items-center space-x-2 text-[9px] text-[#999999] uppercase font-mono">
                      <span>{new Date(log.data).toLocaleDateString('pt-BR')}</span>
                      <span>•</span>
                      <span>{log.autor}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-[#E8E4DF] flex items-center justify-between">
          <button 
            className="flex items-center space-x-2 text-[10px] font-mono uppercase text-[#999999] hover:text-[#B83232] transition-colors"
            onClick={() => {
              if (confirm('Deseja realmente excluir este lead?')) {
                onDelete(lead.id);
              }
            }}
          >
            <Trash2 className="w-3 h-3" />
            <span>Excluir Lead</span>
          </button>
          <Button 
            className="bg-[#1A1A1A] text-white uppercase font-mono text-[10px] tracking-widest h-9 px-8 rounded-[2px]"
            onClick={onClose}
          >
            Fechar
          </Button>
        </div>
      </div>
    </>
  );
};

export default LeadDetailPanel;
