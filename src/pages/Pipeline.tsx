import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '@/components/pipeline/Sidebar';
import MetricsBar from '@/components/pipeline/MetricsBar';
import Toolbar from '@/components/pipeline/Toolbar';
import Kanban from '@/components/pipeline/Kanban';
import LeadDetailPanel from '@/components/pipeline/LeadDetailPanel';
import NewLeadModal from '@/components/pipeline/NewLeadModal';
import { INITIAL_LEADS } from '@/data/mockLeads';
import { Lead } from '@/types/pipeline';
import { toast } from 'sonner';

const Pipeline = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<string | null>(null);
  const [leads, setLeads] = useState<Lead[]>(INITIAL_LEADS);
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null);
  const [isNewLeadModalOpen, setIsNewLeadModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    tipo: 'Todos',
    temp: [] as string[],
    search: '',
    sort: 'Score ↓'
  });

  useEffect(() => {
    const session = sessionStorage.getItem('nl_os_session');
    if (!session) {
      navigate('/login');
    } else {
      setUser(JSON.parse(session).user);
    }
  }, [navigate]);

  if (!user) return null;

  const filteredLeads = leads.filter(lead => {
    const matchTipo = filters.tipo === 'Todos' || lead.tipo === filters.tipo;
    const matchTemp = filters.temp.length === 0 || filters.temp.includes(lead.temp);
    const matchSearch = lead.nome.toLowerCase().includes(filters.search.toLowerCase()) || 
                       lead.cidade.toLowerCase().includes(filters.search.toLowerCase());
    return matchTipo && matchTemp && matchSearch;
  }).sort((a, b) => {
    if (filters.sort === 'Score ↓') return b.score - a.score;
    if (filters.sort === 'Valor ↓') return b.orcamento - a.orcamento;
    if (filters.sort === 'Data entrada') return new Date(b.criado).getTime() - new Date(a.criado).getTime();
    return 0;
  });

  const handleUpdateLead = (updatedLead: Lead) => {
    setLeads(prev => prev.map(l => l.id === updatedLead.id ? updatedLead : l));
  };

  const handleMoveLead = (leadId: string, newStage: string) => {
    setLeads(prev => prev.map(l => 
      l.id === leadId ? { ...l, stage: newStage as any, etapa_desde: new Date().toISOString().split('T')[0] } : l
    ));
    toast.success('Estágio atualizado');
  };

  const handleAddLead = (newLead: Lead) => {
    setLeads(prev => [...prev, newLead]);
    setIsNewLeadModalOpen(false);
    toast.success('Lead cadastrado com sucesso');
  };

  const handleDeleteLead = (leadId: string) => {
    setLeads(prev => prev.filter(l => l.id !== leadId));
    setSelectedLeadId(null);
    toast.success('Lead excluído');
  };

  const selectedLead = leads.find(l => l.id === selectedLeadId);

  return (
    <div className="flex h-screen bg-white overflow-hidden font-mono text-[#1A1A1A]">
      <Sidebar activeModule="01 · Pipeline" user={user} />
      
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="px-8 pt-6 pb-2">
          <h2 className="text-[24px] font-bold font-serif">Pipeline de Leads</h2>
        </header>

        <MetricsBar leads={filteredLeads} />
        
        <Toolbar 
          filters={filters} 
          setFilters={setFilters} 
          onNewLead={() => setIsNewLeadModalOpen(true)} 
        />

        <div className="flex-1 overflow-x-auto overflow-y-hidden px-8 pb-4">
          <Kanban 
            leads={filteredLeads} 
            onLeadClick={setSelectedLeadId}
            onMoveLead={handleMoveLead}
          />
        </div>
      </main>

      <LeadDetailPanel 
        lead={selectedLead} 
        onClose={() => setSelectedLeadId(null)} 
        onUpdate={handleUpdateLead}
        onDelete={handleDeleteLead}
        user={user}
      />

      <NewLeadModal 
        isOpen={isNewLeadModalOpen} 
        onClose={() => setIsNewLeadModalOpen(false)} 
        onSave={handleAddLead}
        user={user}
      />
    </div>
  );
};

export default Pipeline;
