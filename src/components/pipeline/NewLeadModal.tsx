import React, { useState } from 'react';
import { Lead } from '@/types/pipeline';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface NewLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (lead: Lead) => void;
  user: string;
}

const NewLeadModal = ({ isOpen, onClose, onSave, user }: NewLeadModalProps) => {
  const [formData, setFormData] = useState({
    nome: '',
    whats: '',
    cidade: 'São José dos Campos',
    tipo: 'Arq+Int' as any,
    area: '',
    orcamento: '',
    origem: 'Indicação' as any,
    temp: 'Morno' as any,
    score: '5',
    obs: ''
  });

  const handleSave = () => {
    if (!formData.nome) return;

    const newLead: Lead = {
      id: Math.random().toString(36).substr(2, 9),
      nome: formData.nome,
      whats: formData.whats,
      cidade: formData.cidade,
      tipo: formData.tipo,
      area: Number(formData.area),
      orcamento: Number(formData.orcamento),
      origem: formData.origem,
      temp: formData.temp,
      score: Number(formData.score),
      stage: 'Novo Lead',
      obs: formData.obs,
      criado: new Date().toISOString(),
      etapa_desde: new Date().toISOString(),
      logs: []
    };

    onSave(newLead);
    setFormData({
      nome: '',
      whats: '',
      cidade: 'São José dos Campos',
      tipo: 'Arq+Int',
      area: '',
      orcamento: '',
      origem: 'Indicação',
      temp: 'Morno',
      score: '5',
      obs: ''
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[480px] font-mono border-none p-8">
        <DialogHeader className="mb-6">
          <DialogTitle className="text-[22px] font-serif font-bold text-[#1A1A1A]">Novo Lead</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-1.5">
            <Label className="text-[9px] uppercase tracking-wider text-[#999999]">Nome Completo</Label>
            <Input 
              className="border-[#E8E4DF] h-10 uppercase text-[11px]" 
              value={formData.nome}
              onChange={e => setFormData({...formData, nome: e.target.value})}
              autoFocus
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label className="text-[9px] uppercase tracking-wider text-[#999999]">WhatsApp</Label>
              <Input 
                className="border-[#E8E4DF] h-10 text-[11px]" 
                value={formData.whats}
                onChange={e => setFormData({...formData, whats: e.target.value})}
                placeholder="(12) 9..."
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-[9px] uppercase tracking-wider text-[#999999]">Cidade</Label>
              <Input 
                className="border-[#E8E4DF] h-10 uppercase text-[11px]" 
                value={formData.cidade}
                onChange={e => setFormData({...formData, cidade: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label className="text-[9px] uppercase tracking-wider text-[#999999]">Tipo de Projeto</Label>
              <Select value={formData.tipo} onValueChange={v => setFormData({...formData, tipo: v})}>
                <SelectTrigger className="border-[#E8E4DF] h-10 text-[11px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="font-mono text-[11px]">
                  <SelectItem value="Arq+Int">ARQ+INT</SelectItem>
                  <SelectItem value="Interiores">INTERIORES</SelectItem>
                  <SelectItem value="Comercial">COMERCIAL</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className="text-[9px] uppercase tracking-wider text-[#999999]">Área (m²)</Label>
              <Input 
                type="number" 
                className="border-[#E8E4DF] h-10 text-[11px]" 
                value={formData.area}
                onChange={e => setFormData({...formData, area: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label className="text-[9px] uppercase tracking-wider text-[#999999]">Orçamento R$</Label>
              <Input 
                type="number" 
                className="border-[#E8E4DF] h-10 text-[11px]" 
                value={formData.orcamento}
                onChange={e => setFormData({...formData, orcamento: e.target.value})}
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-[9px] uppercase tracking-wider text-[#999999]">Origem</Label>
              <Select value={formData.origem} onValueChange={v => setFormData({...formData, origem: v})}>
                <SelectTrigger className="border-[#E8E4DF] h-10 text-[11px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="font-mono text-[11px]">
                  <SelectItem value="Instagram">INSTAGRAM</SelectItem>
                  <SelectItem value="Indicação">INDICAÇÃO</SelectItem>
                  <SelectItem value="Site">SITE</SelectItem>
                  <SelectItem value="Google">GOOGLE</SelectItem>
                  <SelectItem value="Outro">OUTRO</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label className="text-[9px] uppercase tracking-wider text-[#999999]">Temperatura</Label>
              <Select value={formData.temp} onValueChange={v => setFormData({...formData, temp: v})}>
                <SelectTrigger className="border-[#E8E4DF] h-10 text-[11px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="font-mono text-[11px]">
                  <SelectItem value="Quente">QUENTE</SelectItem>
                  <SelectItem value="Morno">MORNO</SelectItem>
                  <SelectItem value="Frio">FRIO</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className="text-[9px] uppercase tracking-wider text-[#999999]">Score (0-10)</Label>
              <Input 
                type="number" 
                min="0" 
                max="10" 
                className="border-[#E8E4DF] h-10 text-[11px]" 
                value={formData.score}
                onChange={e => setFormData({...formData, score: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label className="text-[9px] uppercase tracking-wider text-[#999999]">Observações</Label>
            <Textarea 
              className="border-[#E8E4DF] text-[11px] min-h-[80px]" 
              value={formData.obs}
              onChange={e => setFormData({...formData, obs: e.target.value})}
              onKeyDown={e => e.key === 'Enter' && e.ctrlKey && handleSave()}
            />
          </div>
        </div>

        <DialogFooter className="mt-8 flex justify-end space-x-3">
          <Button 
            variant="outline" 
            className="border-[#E8E4DF] text-[10px] uppercase font-mono tracking-widest px-8"
            onClick={onClose}
          >
            Cancelar
          </Button>
          <Button 
            className="bg-[#1A1A1A] hover:bg-[#8B7355] text-white text-[10px] uppercase font-mono tracking-widest px-8 rounded-[2px]"
            onClick={handleSave}
          >
            Salvar Lead
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewLeadModal;
