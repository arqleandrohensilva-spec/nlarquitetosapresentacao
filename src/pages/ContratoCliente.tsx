import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, FileText, Calendar, Wallet, Layers, MapPin, Printer, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ContratoCliente = () => {
  const { slug } = useParams();
  const [contrato, setContrato] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContrato = async () => {
      if (slug === 'preview' || slug === 'template') {
        const dadosFicticios = {
          nome_cliente: 'João da Silva',
          cpf_cliente: '123.456.789-00',
          nacionalidade: 'brasileiro',
          estado_civil: 'casado',
          profissao: 'engenheiro',
          endereco_cliente: 'Rua das Flores, 123 — São Paulo, SP',
          endereco_imovel: 'Rua das Flores, 123 — São Paulo, SP',
          tipo_projeto: 'Arquitetura + Interiores',
          plano: 'Executivo',
          area_construida: '300',
          area_terreno: '500',
          matricula: '12.345',
          cartorio: '1º Cartório de Registro de Imóveis',
          prazo_briefing: '5',
          prazo_estudo: '15',
          prazo_legal: '10',
          prazo_executivo: '30',
          prazo_semanas: '12',
          prazo_total_dias: '65',
          valor_total: '33.687,22',
          valor_total_extenso: 'trinta e três mil e seiscentos e oitenta e sete reais e vinte e dois centavos',
          marco1_valor: '10.106,17',
          marco1_extenso: 'dez mil e cento e seis reais e dezesseis centavos',
          marco2_valor: '13.474,89',
          marco2_extenso: 'treze mil e quatrocentos e setenta e quatro reais e oitenta e nove centavos',
          marco3_valor: '10.106,16',
          marco3_extenso: 'dez mil e cento e seis reais e dezesseis centavos',
          numero: '001',
          ano: '2026',
          data: '25/05/2026'
        };
        setContrato(dadosFicticios);
        setLoading(false);
        return;
      }
      try {
        const { data, error } = await supabase.from('contratos_clientes').select('*').eq('slug', slug).single();
        if (error) throw error;
        setContrato(data);
      } catch (err) {
        console.error('Erro ao buscar contrato:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchContrato();
  }, [slug]);

  if (loading) return (
    <div className="min-h-screen bg-[#FDFCFB] flex items-center justify-center">
      <Loader2 className="w-8 h-8 text-[#8B7355] animate-spin" />
    </div>
  );

  if (!contrato) return (
    <div className="min-h-screen bg-[#FDFCFB] flex items-center justify-center text-[#8B7355] font-mono uppercase tracking-widest text-[10px]">
      Contrato não encontrado
    </div>
  );

  return (
    <div className="bg-[#FDFCFB] min-h-screen text-[#3A3A3A] font-sans selection:bg-[#8B7355] selection:text-white pb-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .font-courier { font-family: 'Courier New', Courier, monospace; }

        @media print { 
          body { background: white !important; } 
          .contrato-container { box-shadow: none !important; margin: 0 !important; width: 100% !important; max-width: 100% !important; border: none !important; background: white !important; color: black !important; } 
          [data-pdf-hide] { display: none !important; }
          .page-break { page-break-before: always; }
          .no-break { page-break-inside: avoid; }
          .text-premium-bronze { color: #8B7355 !important; }
          .border-premium { border-color: #8B7355 !important; }
          h1, h2, h3, h4, p, span, b, strong { color: black !important; }
        }

        .text-premium-bronze { color: #8B7355; }
        .text-graphite { color: #3A3A3A; }
        .border-premium { border-color: rgba(139, 115, 85, 0.2); }
      `}</style>

      {/* Premium Floating Action Bar */}
      <div data-pdf-hide className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-white/80 backdrop-blur-xl p-2 pl-6 rounded-full border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all hover:scale-[1.02]">
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-black/40">NL-2026-CONTRATO</span>
        <button 
          onClick={() => window.print()} 
          className="flex items-center gap-3 bg-[#8B7355] text-white px-8 py-3.5 rounded-full uppercase text-[10px] font-mono tracking-widest hover:bg-[#A68B6A] transition-all shadow-lg active:scale-95"
        >
          <Printer size={14} /> Gerar Documento PDF
        </button>
      </div>

      <div className="contrato-container max-w-[950px] mx-auto bg-white min-h-screen relative overflow-hidden shadow-2xl my-10 border border-black/5">
        
        {/* CAPA DO CONTRATO */}
        <section className="min-h-screen flex flex-col p-12 lg:p-24 relative bg-white page-break">
          {/* Topo */}
          <div className="flex justify-between items-start w-full mb-32">
            <div className="font-serif text-3xl font-bold tracking-tighter text-graphite">
              NL<span className="text-premium-bronze">.</span>
            </div>
            <div className="text-right">
              <p className="font-courier text-xs uppercase tracking-widest text-premium-bronze font-bold">
                NL-{contrato.ano}-{contrato.numero}
              </p>
            </div>
          </div>

          {/* Centro */}
          <div className="flex-grow flex flex-col justify-center">
            <h1 className="font-serif text-6xl lg:text-7xl font-light leading-[1.1] text-graphite mb-12">
              Contrato de Prestação<br/>
              <span className="italic">de Serviços Arquitetônicos</span>
            </h1>
            
            <div className="w-full h-px bg-[#8B7355] opacity-30 mb-16" />

            {/* Bloco de dados */}
            <div className="grid grid-cols-2 gap-x-24 gap-y-12 max-w-3xl">
              <div className="space-y-1">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-premium-bronze font-bold">CONTRATANTE</p>
                <p className="font-serif text-xl text-graphite">{contrato.nome_cliente}</p>
              </div>
              <div className="space-y-1">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-premium-bronze font-bold">Nº DO CONTRATO</p>
                <p className="font-serif text-xl text-graphite">NL-{contrato.ano}-{contrato.numero}</p>
              </div>
              
              <div className="space-y-1">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-premium-bronze font-bold">DATA</p>
                <p className="font-serif text-xl text-graphite">{contrato.data}</p>
              </div>
              <div className="space-y-1">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-premium-bronze font-bold">VALOR TOTAL</p>
                <p className="font-serif text-xl text-graphite">R$ {contrato.valor_total}</p>
              </div>

              <div className="space-y-1">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-premium-bronze font-bold">TIPO DE PROJETO</p>
                <p className="font-serif text-xl text-graphite">{contrato.tipo_projeto}</p>
              </div>
              <div className="space-y-1">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-premium-bronze font-bold">PLANO</p>
                <p className="font-serif text-xl text-graphite">{contrato.plano}</p>
              </div>
            </div>
          </div>

          {/* Rodapé */}
          <div className="mt-auto pt-12 text-center w-full">
            <p className="font-courier text-[9px] uppercase tracking-[0.3em] text-premium-bronze/60">
              NL Arquitetos · São José dos Campos, SP · A Arquitetura como Decisão
            </p>
          </div>
        </section>

        {/* Content Section - Temporary adjustment for readability while restructuring */}
        <div className="p-12 lg:p-24 space-y-32 bg-white text-graphite">
          
          {/* Summary Section */}
          <section className="no-break max-w-2xl">
            <h3 className="font-serif text-3xl italic text-premium-bronze mb-12">Sumário Executivo</h3>
            <div className="space-y-4">
              {[
                { n: '01', t: 'Identificação das Partes', p: '03' },
                { n: '02', t: 'Objeto da Prestação de Serviço', p: '04' },
                { n: '03', t: 'Cronograma e Marcos de Entrega', p: '06' },
                { n: '04', t: 'Honorários e Condições Financeiras', p: '08' },
                { n: '05', t: 'Propriedade Intelectual', p: '10' },
                { n: '06', t: 'Termos de Rescisão', p: '12' },
              ].map((item) => (
                <div key={item.n} className="group flex justify-between items-end border-b border-black/5 pb-2 transition-colors hover:border-premium">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[10px] text-premium-bronze">{item.n}</span>
                    <span className="font-sans text-xs uppercase tracking-widest text-graphite/60 group-hover:text-graphite">{item.t}</span>
                  </div>
                  <span className="font-mono text-[10px] text-graphite/20 italic">{item.p}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="page-break" />

          {/* Legal Document Header */}
          <header className="text-center no-break py-20 border-y border-premium bg-black/[0.01]">
            <p className="font-mono text-[10px] uppercase tracking-[1em] text-graphite/30 mb-8">Cláusulas e Condições</p>
            <h2 className="font-serif text-5xl font-light text-graphite">Termos de<br/><span className="italic font-normal">Contratação Técnica.</span></h2>
          </header>

          <div className="space-y-32">
            {/* Clause 01 */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 no-break">
              <div className="lg:col-span-4 sticky top-12 self-start">
                <span className="font-mono text-[10px] font-bold text-premium-bronze uppercase tracking-[0.4em] mb-4 block">Cláusula 01</span>
                <h4 className="font-serif text-3xl text-graphite italic">As Partes</h4>
                <div className="w-12 h-px bg-premium-bronze mt-6 opacity-30" />
              </div>
              <div className="lg:col-span-8 space-y-8">
                <div className="p-8 bg-black/[0.02] border border-black/5 rounded-sm space-y-4">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-premium-bronze font-bold">O Contratante</p>
                  <p className="font-sans text-sm leading-relaxed text-graphite/80"><b>{contrato.nome_cliente.toUpperCase()}</b>, {contrato.nacionalidade}, {contrato.estado_civil}, {contrato.profissao}, titular do CPF nº {contrato.cpf_cliente}, residente em {contrato.endereco_cliente}.</p>
                </div>
                <div className="p-8 bg-black/[0.02] border border-black/5 rounded-sm space-y-4">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-premium-bronze font-bold">A Contratada</p>
                  <p className="font-sans text-sm leading-relaxed text-graphite/80"><b>LEANDRO HENRIQUE DA SILVA</b> (CAU A252250-0) e <b>NEANDRO JACQUE GARCIA</b> (CAU A264629-3), arquitetos e urbanistas, sob a denominação fantasia <b>NL ARQUITETOS</b>.</p>
                </div>
              </div>
            </section>

            {/* Signature Area (Partial) */}
            <div className="mt-40 pt-24 border-t border-premium no-break">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                <div className="space-y-6 text-center">
                  <div className="h-px bg-black/20 w-full mb-8"></div>
                  <p className="font-serif italic text-3xl text-graphite">{contrato.nome_cliente}</p>
                  <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-premium-bronze font-bold">Contratante</p>
                </div>
                <div className="space-y-20">
                  <div className="space-y-6 text-center">
                    <div className="h-px bg-black/20 w-full mb-8"></div>
                    <p className="font-serif italic text-3xl text-graphite">Leandro Henrique da Silva</p>
                    <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-premium-bronze font-bold">Arquiteto Responsável</p>
                  </div>
                  <div className="space-y-6 text-center">
                    <div className="h-px bg-black/20 w-full mb-8"></div>
                    <p className="font-serif italic text-3xl text-graphite">Neandro Jacque Garcia</p>
                    <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-premium-bronze font-bold">Arquiteto Responsável</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContratoCliente;
