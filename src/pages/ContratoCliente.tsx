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
          tipo_projeto: 'ARQ+INT',
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
          marco1_extenso: 'dez mil e cento e seis reais e dezessete centavos',
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
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
      <Loader2 className="w-8 h-8 text-[#8B7355] animate-spin" />
    </div>
  );

  if (!contrato) return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-[#8B7355] font-mono uppercase tracking-widest text-[10px]">
      Contrato não encontrado
    </div>
  );

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-[#E8E4DF] font-sans selection:bg-[#8B7355] selection:text-white pb-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }

        @media print { 
          body { background: white !important; } 
          .contrato-container { box-shadow: none !important; margin: 0 !important; width: 100% !important; max-width: 100% !important; border: none !important; background: white !important; color: black !important; } 
          [data-pdf-hide] { display: none !important; }
          .page-break { page-break-before: always; }
          .no-break { page-break-inside: avoid; }
          .bg-premium-dark { background: white !important; }
          .text-premium-bronze { color: #8B7355 !important; }
          .border-premium { border-color: #8B7355 !important; }
          h1, h2, h3, h4, p, span, b, strong { color: black !important; }
        }

        .bg-premium-dark { background-color: #0A0A0A; }
        .text-premium-bronze { color: #8B7355; }
        .border-premium { border-color: rgba(139, 115, 85, 0.2); }
        .technical-grid { background-image: radial-gradient(circle, rgba(139, 115, 85, 0.15) 0.5px, transparent 0.5px); background-size: 30px 30px; }
      `}</style>

      {/* Premium Floating Action Bar */}
      <div data-pdf-hide className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-black/40 backdrop-blur-xl p-2 pl-6 rounded-full border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all hover:scale-[1.02]">
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/40">NL-2026-CONTRATO</span>
        <button 
          onClick={() => window.print()} 
          className="flex items-center gap-3 bg-[#8B7355] text-white px-8 py-3.5 rounded-full uppercase text-[10px] font-mono tracking-widest hover:bg-[#A68B6A] transition-all shadow-lg active:scale-95"
        >
          <Printer size={14} /> Gerar Documento PDF
        </button>
      </div>

      <div className="contrato-container max-w-[950px] mx-auto bg-premium-dark min-h-screen relative overflow-hidden border-x border-white/5">
        
        {/* Decorative elements */}
        <div className="technical-grid absolute inset-0 opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B7355]/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <header className="p-12 lg:p-24 relative border-b border-premium">
          <div className="flex justify-between items-start mb-24">
            <div className="space-y-2">
              <h2 className="font-serif text-4xl font-bold tracking-tighter">NL<span className="text-premium-bronze">.</span></h2>
              <p className="font-mono text-[9px] uppercase tracking-[0.5em] text-premium-bronze font-medium">A Arquitetura como Decisão</p>
            </div>
            <div className="text-right space-y-1 bg-white/5 p-4 border border-white/10 rounded-sm">
              <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/30">Nº de Protocolo</p>
              <p className="font-mono text-xs text-premium-bronze font-semibold">NL-{contrato.ano}-{contrato.numero}</p>
            </div>
          </div>

          <div className="max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-premium-bronze mb-6 block font-semibold">Instrumento Jurídico Particular</span>
            <h1 className="font-serif text-6xl lg:text-7xl font-light mb-8 leading-[0.95] text-white">Contrato de<br/><span className="italic font-normal">Serviços Técnicos.</span></h1>
            <div className="w-20 h-0.5 bg-[#8B7355] mb-8" />
            <p className="font-sans text-sm text-white/50 leading-relaxed max-w-md">Desenvolvimento de projeto executivo com compatibilização técnica e validação antecipada.</p>
          </div>
        </header>

        {/* Dashboard Premium */}
        <div className="grid grid-cols-1 md:grid-cols-4 border-b border-premium">
          <div className="p-10 border-r border-premium flex flex-col gap-6">
            <div className="flex items-center gap-3 text-premium-bronze opacity-60">
              <FileText size={16} />
              <span className="font-mono text-[9px] uppercase tracking-widest font-bold">Contratante</span>
            </div>
            <div>
              <p className="font-serif text-2xl text-white leading-tight mb-2">{contrato.nome_cliente}</p>
              <p className="font-mono text-[10px] text-white/30 uppercase tracking-tight">CPF: {contrato.cpf_cliente}</p>
            </div>
          </div>
          
          <div className="p-10 border-r border-premium flex flex-col gap-6">
            <div className="flex items-center gap-3 text-premium-bronze opacity-60">
              <Layers size={16} />
              <span className="font-mono text-[9px] uppercase tracking-widest font-bold">Natureza</span>
            </div>
            <div className="space-y-2">
              <p className="font-sans text-xs text-white/80 uppercase tracking-widest font-medium">Projeto {contrato.tipo_projeto}</p>
              <div className="px-3 py-1 bg-white/5 border border-white/10 inline-block">
                <span className="font-mono text-[9px] text-premium-bronze uppercase tracking-widest">Plano {contrato.plano}</span>
              </div>
            </div>
          </div>

          <div className="p-10 border-r border-premium flex flex-col gap-6">
            <div className="flex items-center gap-3 text-premium-bronze opacity-60">
              <Wallet size={16} />
              <span className="font-mono text-[9px] uppercase tracking-widest font-bold">Investimento</span>
            </div>
            <div>
              <p className="font-serif text-2xl text-white leading-tight mb-1">R$ {contrato.valor_total}</p>
              <p className="font-mono text-[9px] text-white/30 uppercase tracking-tighter italic leading-snug">Parcelamento via Marcos Técnicos</p>
            </div>
          </div>

          <div className="p-10 flex flex-col gap-6 bg-white/[0.02]">
            <div className="flex items-center gap-3 text-premium-bronze opacity-60">
              <ShieldCheck size={16} />
              <span className="font-mono text-[9px] uppercase tracking-widest font-bold">Status</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#8B7355] animate-pulse" />
              <p className="font-mono text-[10px] text-premium-bronze uppercase tracking-widest font-bold">Aguardando Aceite</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-12 lg:p-24 space-y-32">
          
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
                <div key={item.n} className="group flex justify-between items-end border-b border-white/5 pb-2 transition-colors hover:border-premium">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[10px] text-premium-bronze">{item.n}</span>
                    <span className="font-sans text-xs uppercase tracking-widest text-white/60 group-hover:text-white">{item.t}</span>
                  </div>
                  <span className="font-mono text-[10px] text-white/20 italic">{item.p}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="page-break" />

          {/* Legal Document Header */}
          <header className="text-center no-break py-20 border-y border-premium bg-white/[0.01]">
            <p className="font-mono text-[10px] uppercase tracking-[1em] text-white/30 mb-8">Cláusulas e Condições</p>
            <h2 className="font-serif text-5xl font-light text-white">Termos de<br/><span className="italic font-normal">Contratação Técnica.</span></h2>
          </header>

          {/* Clauses with Premium Treatment */}
          <div className="space-y-32">
            
            {/* Clause 01 */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 no-break">
              <div className="lg:col-span-4 sticky top-12 self-start">
                <span className="font-mono text-[10px] font-bold text-premium-bronze uppercase tracking-[0.4em] mb-4 block">Cláusula 01</span>
                <h4 className="font-serif text-3xl text-white italic">As Partes</h4>
                <div className="w-12 h-px bg-premium-bronze mt-6 opacity-30" />
              </div>
              <div className="lg:col-span-8 space-y-8">
                <div className="p-8 bg-white/[0.02] border border-white/5 rounded-sm space-y-4">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-premium-bronze font-bold">O Contratante</p>
                  <p className="font-sans text-sm leading-relaxed text-white/80"><b>{contrato.nome_cliente.toUpperCase()}</b>, {contrato.nacionalidade}, {contrato.estado_civil}, {contrato.profissao}, titular do CPF nº {contrato.cpf_cliente}, residente em {contrato.endereco_cliente}.</p>
                </div>
                <div className="p-8 bg-white/[0.02] border border-white/5 rounded-sm space-y-4">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-premium-bronze font-bold">A Contratada</p>
                  <p className="font-sans text-sm leading-relaxed text-white/80"><b>LEANDRO HENRIQUE DA SILVA</b> (CAU A252250-0) e <b>NEANDRO JACQUE GARCIA</b> (CAU A264629-3), arquitetos e urbanistas, sob a denominação fantasia <b>NL ARQUITETOS</b>.</p>
                </div>
              </div>
            </section>

            {/* Clause 02 */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 no-break">
              <div className="lg:col-span-4 sticky top-12 self-start">
                <span className="font-mono text-[10px] font-bold text-premium-bronze uppercase tracking-[0.4em] mb-4 block">Cláusula 02</span>
                <h4 className="font-serif text-3xl text-white italic">O Objeto</h4>
                <div className="w-12 h-px bg-premium-bronze mt-6 opacity-30" />
              </div>
              <div className="lg:col-span-8 space-y-6 text-sm font-sans text-white/70 leading-relaxed text-justify">
                <p>2.1 O objeto do presente instrumento é a prestação de serviços intelectuais de arquitetura para o imóvel localizado em <span className="text-white font-medium">{contrato.endereco_imovel}</span>, abrangendo desde a concepção criativa até o detalhamento técnico executivo.</p>
                <p>2.2 A prestação de serviço é estritamente vinculada ao escopo técnico definido no <b>Anexo I</b>, garantindo a conformidade normativa e a disciplina estética característica da NL Arquitetos.</p>
              </div>
            </section>

            {/* Clause 03 */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 no-break">
              <div className="lg:col-span-4 sticky top-12 self-start">
                <span className="font-mono text-[10px] font-bold text-premium-bronze uppercase tracking-[0.4em] mb-4 block">Cláusula 03</span>
                <h4 className="font-serif text-3xl text-white italic">Prazos e Entregas</h4>
                <div className="w-12 h-px bg-premium-bronze mt-6 opacity-30" />
              </div>
              <div className="lg:col-span-8 space-y-6 text-sm font-sans text-white/70 leading-relaxed">
                <p>3.1 O desenvolvimento do projeto observará o cronograma estipulado no <b>Anexo II</b>, sendo os prazos contados em dias úteis a partir da entrega de toda a documentação solicitada pelo escritório.</p>
                <p>3.2 Eventuais revisões solicitadas pelo Contratante fora das janelas de aprovação estipuladas poderão acarretar em ajustes proporcionais no cronograma final de entrega.</p>
              </div>
            </section>

            {/* Clause 04 */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 no-break">
              <div className="lg:col-span-4 sticky top-12 self-start">
                <span className="font-mono text-[10px] font-bold text-premium-bronze uppercase tracking-[0.4em] mb-4 block">Cláusula 04</span>
                <h4 className="font-serif text-3xl text-white italic">Investimento</h4>
                <div className="w-12 h-px bg-premium-bronze mt-6 opacity-30" />
              </div>
              <div className="lg:col-span-8 space-y-8">
                <p className="text-sm font-sans text-white/70 leading-relaxed">4.1 Em contrapartida aos serviços prestados, o Contratante pagará o valor total de <span className="text-premium-bronze font-bold">R$ {contrato.valor_total}</span>, conforme a modalidade de marcos técnicos detalhada no <b>Anexo III</b>.</p>
                <div className="bg-[#8B7355]/5 border-l-4 border-premium p-8 italic font-serif text-lg text-white/90">
                  "O investimento no projeto executivo é a garantia de previsibilidade financeira e controle absoluto sobre o canteiro de obras."
                </div>
              </div>
            </section>

            {/* Signature Area */}
            <div className="mt-40 pt-24 border-t border-premium no-break">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                <div className="space-y-6 text-center">
                  <div className="h-px bg-white/20 w-full mb-8"></div>
                  <p className="font-serif italic text-3xl text-white">{contrato.nome_cliente}</p>
                  <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-premium-bronze font-bold">Contratante</p>
                </div>
                <div className="space-y-20">
                  <div className="space-y-6 text-center">
                    <div className="h-px bg-white/20 w-full mb-8"></div>
                    <p className="font-serif italic text-3xl text-white">Leandro Henrique da Silva</p>
                    <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-premium-bronze font-bold">Arquiteto Responsável</p>
                  </div>
                  <div className="space-y-6 text-center">
                    <div className="h-px bg-white/20 w-full mb-8"></div>
                    <p className="font-serif italic text-3xl text-white">Neandro Jacque Garcia</p>
                    <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-premium-bronze font-bold">Arquiteto Responsável</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-32 flex justify-center gap-32 opacity-20 no-break">
                <div className="text-center">
                  <div className="w-48 h-px bg-white mb-3"></div>
                  <p className="font-mono text-[8px] uppercase tracking-widest">Testemunha 01</p>
                </div>
                <div className="text-center">
                  <div className="w-48 h-px bg-white mb-3"></div>
                  <p className="font-mono text-[8px] uppercase tracking-widest">Testemunha 02</p>
                </div>
              </div>

              <div className="mt-32 text-center space-y-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-premium-bronze font-bold">São José dos Campos, SP</p>
                <p className="font-serif italic text-white/30">{contrato.data}</p>
              </div>
            </div>
          </div>

          <div className="page-break" />

          {/* Anexos with Premium Styling */}
          <section className="space-y-16">
            <header className="no-break text-center space-y-6">
              <div className="inline-block px-4 py-1 border border-premium mb-4">
                <span className="font-mono text-[9px] uppercase tracking-[0.5em] text-premium-bronze font-bold">Documentação Técnica</span>
              </div>
              <h2 className="font-serif text-5xl lg:text-6xl italic text-white">Anexos do<br/><span className="not-italic font-light">Instrumento.</span></h2>
            </header>

            <Tabs defaultValue="anexo1" className="w-full">
              <TabsList className="w-full h-auto bg-white/[0.02] border border-premium p-1 flex print:hidden mb-16 rounded-full overflow-hidden">
                <TabsTrigger value="anexo1" className="flex-1 py-5 font-mono text-[10px] uppercase tracking-widest data-[state=active]:bg-[#8B7355] data-[state=active]:text-white rounded-full transition-all">I. Escopo</TabsTrigger>
                <TabsTrigger value="anexo2" className="flex-1 py-5 font-mono text-[10px] uppercase tracking-widest data-[state=active]:bg-[#8B7355] data-[state=active]:text-white rounded-full transition-all">II. Prazos</TabsTrigger>
                <TabsTrigger value="anexo3" className="flex-1 py-5 font-mono text-[10px] uppercase tracking-widest data-[state=active]:bg-[#8B7355] data-[state=active]:text-white rounded-full transition-all">III. Pagamento</TabsTrigger>
                <TabsTrigger value="anexo4" className="flex-1 py-5 font-mono text-[10px] uppercase tracking-widest data-[state=active]:bg-[#8B7355] data-[state=active]:text-white rounded-full transition-all">IV. Condições</TabsTrigger>
              </TabsList>

              <TabsContent value="anexo1" className="print:block print:opacity-100">
                <div className="p-12 lg:p-20 border border-premium rounded-sm bg-white/[0.01] space-y-16 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8">
                    <Layers className="text-premium-bronze opacity-20" size={60} />
                  </div>
                  <h4 className="font-serif text-3xl font-light uppercase border-b border-premium pb-6 text-white italic">ANEXO I — Escopo dos Serviços</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-sm leading-relaxed text-white/60">
                    <div className="space-y-8">
                      <div>
                        <p className="font-mono text-[10px] uppercase font-bold text-premium-bronze mb-4 tracking-widest">Identificação Técnica</p>
                        <div className="space-y-3 font-sans text-xs">
                          <p className="flex justify-between border-b border-white/5 pb-2"><span>Imóvel:</span> <span className="text-white">Residencial</span></p>
                          <p className="flex justify-between border-b border-white/5 pb-2"><span>Área de Terreno:</span> <span className="text-white">{contrato.area_terreno} m²</span></p>
                          <p className="flex justify-between border-b border-white/5 pb-2"><span>Área Construída:</span> <span className="text-white">{contrato.area_construida} m²</span></p>
                          <p className="flex justify-between border-b border-white/5 pb-2"><span>Matrícula:</span> <span className="text-white">{contrato.matricula}</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-8">
                      <p className="font-mono text-[10px] uppercase font-bold text-premium-bronze mb-4 tracking-widest">Entregáveis Oferecidos</p>
                      <ul className="space-y-4 font-sans text-xs italic">
                        <li className="flex items-center gap-3"><CheckCircle2 size={12} className="text-premium-bronze" /> Cadernos Técnicos Executivos (I a IV)</li>
                        <li className="flex items-center gap-3"><CheckCircle2 size={12} className="text-premium-bronze" /> Mapas de Instalações Coordenados</li>
                        <li className="flex items-center gap-3"><CheckCircle2 size={12} className="text-premium-bronze" /> Detalhamentos de Marmoraria e Marcenaria</li>
                        <li className="flex items-center gap-3"><CheckCircle2 size={12} className="text-premium-bronze" /> Memorial Descritivo de Materiais</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="anexo2" className="print:block print:opacity-100">
                <div className="p-12 lg:p-20 border border-premium rounded-sm bg-white/[0.01] space-y-16">
                  <h4 className="font-serif text-3xl font-light uppercase border-b border-premium pb-6 text-white italic">ANEXO II — Cronograma Estimado</h4>
                  <div className="space-y-6 font-mono text-[11px] uppercase">
                    {[
                      { l: 'Levantamento & Briefing Estratégico', d: contrato.prazo_briefing },
                      { l: 'Estudo Preliminar & Conceito Autoral', d: contrato.prazo_estudo },
                      { l: 'Concepção Tridimensional (Render 3D)', d: contrato.prazo_estudo },
                      { l: 'Projeto Legal & Aprovações', d: contrato.prazo_legal },
                      { l: 'Projeto Executivo de Obra', d: contrato.prazo_executivo },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-white/5 pb-3 transition-colors hover:border-premium/40">
                        <span className="text-white/40">Fase {i+1} · {item.l}</span>
                        <span className="text-white font-bold">{item.d} dias úteis</span>
                      </div>
                    ))}
                    <div className="flex justify-between items-center pt-12 text-premium-bronze">
                      <span className="font-bold tracking-widest">Tempo Total de Desenvolvimento Técnico</span>
                      <span className="font-serif italic text-4xl">{contrato.prazo_total_dias} dias</span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="anexo3" className="print:block print:opacity-100">
                <div className="p-12 lg:p-20 border border-premium rounded-sm bg-white/[0.01] space-y-16">
                  <h4 className="font-serif text-3xl font-light uppercase border-b border-premium pb-6 text-white italic">ANEXO III — Detalhamento Financeiro</h4>
                  <div className="space-y-16">
                    <div className="flex justify-between items-end border-b border-white/5 pb-10">
                      <div>
                        <p className="font-mono text-[10px] uppercase font-bold text-premium-bronze mb-4 tracking-widest">Valor Global do Contrato</p>
                        <p className="font-serif text-6xl text-white">R$ {contrato.valor_total}</p>
                      </div>
                      <div className="text-right text-[10px] font-mono uppercase text-white/30 tracking-widest">
                        <p>Vencimento: 05 dias após marco</p>
                        <p>PIX · Transf · Cartão</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                      <div className="space-y-4">
                        <p className="font-mono text-[9px] font-bold text-premium-bronze uppercase tracking-widest">Sinal (30%)</p>
                        <p className="font-serif text-2xl text-white">R$ {contrato.marco1_valor}</p>
                        <p className="text-[9px] font-mono text-white/30 uppercase">Na Assinatura</p>
                      </div>
                      <div className="space-y-4">
                        <p className="font-mono text-[9px] font-bold text-premium-bronze uppercase tracking-widest">Intermediária (40%)</p>
                        <p className="font-serif text-2xl text-white">R$ {contrato.marco2_valor}</p>
                        <p className="text-[9px] font-mono text-white/30 uppercase">Aprovação 3D</p>
                      </div>
                      <div className="space-y-4">
                        <p className="font-mono text-[9px] font-bold text-premium-bronze uppercase tracking-widest">Final (30%)</p>
                        <p className="font-serif text-2xl text-white">R$ {contrato.marco3_valor}</p>
                        <p className="text-[9px] font-mono text-white/30 uppercase">Entrega Executivo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="anexo4" className="print:block print:opacity-100">
                <div className="p-12 lg:p-20 border border-premium rounded-sm bg-white/[0.01] space-y-16">
                  <h4 className="font-serif text-3xl font-light uppercase border-b border-premium pb-6 text-white italic">ANEXO IV — Condições Suplementares</h4>
                  <div className="space-y-12 text-sm leading-relaxed text-white/60 font-sans">
                    <p className="italic">Ficam estabelecidos como serviços fora do escopo original base, sujeitos a orçamentação técnica complementar:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-xs uppercase tracking-widest font-mono">
                      <ul className="space-y-4 border-l border-premium/30 pl-6">
                        <li>• Projetos Estruturais</li>
                        <li>• Projetos Hidrossanitários</li>
                        <li>• Gestão de Mão de Obra</li>
                      </ul>
                      <ul className="space-y-4 border-l border-premium/30 pl-6">
                        <li>• Estudo Viabilidade (EVF)</li>
                        <li>• Levantamentos Topográficos</li>
                        <li>• Visitas Técnicas Extras</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </section>
        </div>

        {/* Footer Technical Line */}
        <footer className="p-12 border-t border-premium bg-white/[0.02] flex justify-between items-center text-[9px] font-mono uppercase tracking-[0.3em] text-white/20">
          <div className="flex gap-8">
            <span>NL Arquitetos  ·  S.J. Campos, SP</span>
            <span>Versão 2026.01</span>
          </div>
          <div className="text-right">
            <span>Documento NL-PRO-{contrato.ano}-{contrato.numero}</span>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default ContratoCliente;
