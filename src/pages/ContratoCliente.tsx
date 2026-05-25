import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, FileText, Calendar, Wallet, Layers, MapPin, Printer } from 'lucide-react';
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
    <div className="min-h-screen bg-[#FDFDFD] flex items-center justify-center">
      <Loader2 className="w-8 h-8 text-[#8B7355] animate-spin" />
    </div>
  );

  if (!contrato) return (
    <div className="min-h-screen bg-[#FDFDFD] flex items-center justify-center text-[#8B7355] font-mono uppercase tracking-widest text-[10px]">
      Contrato não encontrado
    </div>
  );

  const tipoArqInt = contrato.tipo_projeto === 'ARQ+INT' ? '▣' : '▢';
  const tipoInteriores = contrato.tipo_projeto === 'Interiores' ? '▣' : '▢';
  const tipoComercial = contrato.tipo_projeto === 'Comercial' ? '▣' : '▢';
  const planoExecutivo = contrato.plano !== 'Completo' ? '▣' : '▢';
  const planoCompleto = contrato.plano === 'Completo' ? '▣' : '▢';

  return (
    <div className="bg-[#F4F4F4] min-h-screen text-[#1A1A1A] font-sans selection:bg-[#8B7355] selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }

        @media print { 
          body { background: white !important; } 
          .contrato-container { box-shadow: none !important; margin: 0 !important; width: 100% !important; max-width: 100% !important; border: none !important; } 
          [data-pdf-hide] { display: none !important; }
          .page-break { page-break-before: always; }
          .no-break { page-break-inside: avoid; }
        }

        .border-fine { border: 0.5px solid rgba(0,0,0,0.1); }
        .grid-technical { background-image: radial-gradient(circle, #D1D1D1 0.5px, transparent 0.5px); background-size: 20px 20px; }
      `}</style>

      {/* Floating Action Bar */}
      <div data-pdf-hide className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-white/80 backdrop-blur-md p-2 rounded-full border border-black/10 shadow-2xl">
        <button 
          onClick={() => window.print()} 
          className="flex items-center gap-2 bg-[#1A1A1A] text-white px-6 py-3 rounded-full uppercase text-[10px] font-mono tracking-widest hover:bg-black transition-all"
        >
          <Printer size={14} /> Imprimir Contrato
        </button>
      </div>

      <div className="contrato-container max-w-[900px] mx-auto bg-white min-h-screen shadow-[0_0_50px_rgba(0,0,0,0.05)] border-x border-black/5 relative overflow-hidden">
        
        {/* Technical Header */}
        <div className="technical-grid absolute inset-0 opacity-[0.03] pointer-events-none" />
        
        <header className="p-12 lg:p-20 border-b border-black/5 relative">
          <div className="flex justify-between items-start mb-16">
            <div className="space-y-1">
              <h2 className="font-serif text-3xl font-bold tracking-tight">NL ARQUITETOS</h2>
              <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#8B7355]">A Arquitetura como Decisão</p>
            </div>
            <div className="text-right space-y-1">
              <p className="font-mono text-[9px] uppercase tracking-widest text-black/40">Contrato Nº</p>
              <p className="font-mono text-xs font-medium">NL-{contrato.ano}-{contrato.numero}</p>
            </div>
          </div>

          <h1 className="font-serif text-5xl lg:text-6xl font-light mb-4 leading-tight">Instrumento Particular de<br/><span className="italic">Prestação de Serviços.</span></h1>
          <p className="font-sans text-xs text-black/50 uppercase tracking-[0.2em] max-w-md">Contrato técnico especializado para desenvolvimento de projetos de arquitetura e design de interiores.</p>
        </header>

        {/* Dashboard de Dados */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-black/5">
          <div className="p-8 border-r border-black/5 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[#8B7355]">
              <FileText size={14} />
              <span className="font-mono text-[9px] uppercase tracking-widest font-bold">Contratante</span>
            </div>
            <div>
              <p className="font-serif text-xl leading-tight">{contrato.nome_cliente}</p>
              <p className="font-mono text-[10px] text-black/40 mt-1 uppercase tracking-tight">CPF: {contrato.cpf_cliente}</p>
            </div>
          </div>
          
          <div className="p-8 border-r border-black/5 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[#8B7355]">
              <Layers size={14} />
              <span className="font-mono text-[9px] uppercase tracking-widest font-bold">Escopo</span>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase">
                <span className="text-[#8B7355] text-sm leading-none">{tipoArqInt}</span> Residencial
              </div>
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase">
                <span className="text-[#8B7355] text-sm leading-none">{tipoInteriores}</span> Interiores
              </div>
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase">
                <span className="text-[#8B7355] text-sm leading-none">{tipoComercial}</span> Comercial
              </div>
            </div>
          </div>

          <div className="p-8 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[#8B7355]">
              <Wallet size={14} />
              <span className="font-mono text-[9px] uppercase tracking-widest font-bold">Investimento</span>
            </div>
            <div>
              <p className="font-serif text-xl leading-tight">R$ {contrato.valor_total}</p>
              <p className="font-mono text-[10px] text-black/40 mt-1 uppercase tracking-tight italic">({contrato.valor_total_extenso})</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-black/5">
          <div className="p-8 border-r border-black/5 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[#8B7355]">
              <MapPin size={14} />
              <span className="font-mono text-[9px] uppercase tracking-widest font-bold">Local do Imóvel</span>
            </div>
            <p className="font-sans text-xs leading-relaxed text-black/70">{contrato.endereco_imovel}</p>
          </div>
          
          <div className="p-8 border-r border-black/5 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[#8B7355]">
              <Calendar size={14} />
              <span className="font-mono text-[9px] uppercase tracking-widest font-bold">Prazo Estimado</span>
            </div>
            <p className="font-sans text-xs leading-relaxed text-black/70 font-medium">{contrato.prazo_semanas} semanas de desenvolvimento técnico.</p>
          </div>

          <div className="p-8 bg-[#8B7355]/[0.02] flex flex-col gap-4 justify-center items-center text-center">
            <p className="font-serif italic text-lg leading-snug">"A NL não projeta para impressionar. Projeta para funcionar."</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-12 lg:p-20 space-y-20">
          
          {/* Summary / Sitemap */}
          <section className="no-break">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#8B7355] mb-8 font-bold flex items-center gap-4">
              <span className="w-8 h-px bg-[#8B7355]/30"></span> Sumário Técnico
            </h3>
            <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-[10px] font-mono uppercase text-black/60">
              <p className="flex justify-between border-b border-black/5 pb-1"><span>01. DAS PARTES</span> <span>03</span></p>
              <p className="flex justify-between border-b border-black/5 pb-1"><span>02. DO OBJETO</span> <span>04</span></p>
              <p className="flex justify-between border-b border-black/5 pb-1"><span>03. DOS SERVIÇOS</span> <span>05</span></p>
              <p className="flex justify-between border-b border-black/5 pb-1"><span>04. DOS PRAZOS</span> <span>07</span></p>
              <p className="flex justify-between border-b border-black/5 pb-1"><span>05. DAS ALTERAÇÕES</span> <span>09</span></p>
              <p className="flex justify-between border-b border-black/5 pb-1"><span>06. DOS HONORÁRIOS</span> <span>12</span></p>
              <p className="flex justify-between border-b border-black/5 pb-1"><span>07. DIREITOS AUTORAIS</span> <span>15</span></p>
              <p className="flex justify-between border-b border-black/5 pb-1"><span>08. RESP. TÉCNICA</span> <span>18</span></p>
            </div>
          </section>

          <div className="page-break" />

          {/* Legal Text */}
          <article className="space-y-16">
            <header className="border-b border-black pb-8 text-center no-break">
              <p className="font-mono text-[10px] uppercase tracking-[0.5em] mb-4">Corpo Jurídico do Instrumento</p>
              <h2 className="font-serif text-3xl italic">Cláusulas e Condições Gerais</h2>
            </header>

            <section className="space-y-6 no-break">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[10px] text-[#8B7355] font-bold">CLÁUSULA 01</span>
                <h4 className="font-serif text-xl font-bold uppercase tracking-wide border-b border-black/10 flex-1 pb-1">Das Partes Envolvidas</h4>
              </div>
              <div className="grid grid-cols-1 gap-8 text-xs leading-relaxed font-sans text-black/80">
                <div className="p-6 bg-black/[0.01] border border-black/5 rounded-sm">
                  <p className="font-bold text-black uppercase text-[9px] tracking-widest mb-2 opacity-40 italic">O Contratante</p>
                  <p><b>{contrato.nome_cliente.toUpperCase()}</b>, {contrato.nacionalidade}, {contrato.estado_civil}, {contrato.profissao}, portador do CPF nº {contrato.cpf_cliente}, residente e domiciliado em {contrato.endereco_cliente}.</p>
                </div>
                <div className="p-6 bg-black/[0.01] border border-black/5 rounded-sm">
                  <p className="font-bold text-black uppercase text-[9px] tracking-widest mb-2 opacity-40 italic">A Contratada</p>
                  <p><b>LEANDRO HENRIQUE DA SILVA</b> (CAU A252250-0) e <b>NEANDRO JACQUE GARCIA</b> (CAU A264629-3), arquitetos e urbanistas, atuando sob a denominação fantasia <b>NL ARQUITETOS</b>.</p>
                </div>
              </div>
            </section>

            <section className="space-y-6 no-break">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[10px] text-[#8B7355] font-bold">CLÁUSULA 02</span>
                <h4 className="font-serif text-xl font-bold uppercase tracking-wide border-b border-black/10 flex-1 pb-1">Do Objeto</h4>
              </div>
              <p className="text-xs leading-relaxed text-black/80">2.1 O presente contrato tem por objeto a prestação de serviços técnicos profissionais de arquitetura pelos CONTRATADOS ao CONTRATANTE, compreendendo o desenvolvimento de projetos e/ou serviços relacionados à arquitetura e interiores conforme modalidade indicada na folha de rosto deste instrumento.</p>
              <p className="text-xs leading-relaxed text-black/80">2.2 O escopo detalhado, entregáveis e especificações técnicas de cada fase de projeto estão minuciosamente descritos no <b>ANEXO I</b>, parte integrante e inseparável deste contrato.</p>
            </section>

            <section className="space-y-6 no-break">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[10px] text-[#8B7355] font-bold">CLÁUSULA 03</span>
                <h4 className="font-serif text-xl font-bold uppercase tracking-wide border-b border-black/10 flex-1 pb-1">Dos Serviços e Prazos</h4>
              </div>
              <p className="text-xs leading-relaxed text-black/80">3.1 Os serviços técnicos compreendem: Levantamento de dados, elaboração de briefing, estudos preliminares, anteprojeto, projeto legal e projeto executivo técnico com detalhamentos de execução.</p>
              <p className="text-xs leading-relaxed text-black/80">3.2 O cronograma detalhado de cada entrega e as janelas de aprovação do contratante estão especificadas no <b>ANEXO II</b>. Prazos são estimativos e contados em dias úteis a partir da entrega de documentos essenciais.</p>
            </section>

            <section className="space-y-6 no-break">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[10px] text-[#8B7355] font-bold">CLÁUSULA 04</span>
                <h4 className="font-serif text-xl font-bold uppercase tracking-wide border-b border-black/10 flex-1 pb-1">Honorários e Pagamento</h4>
              </div>
              <p className="text-xs leading-relaxed text-black/80 italic border-l-2 border-[#8B7355]/30 pl-4 py-1">"O valor pactuado reflete a expertise técnica e a responsabilidade civil assumida pelo escritório sobre as soluções arquitetônicas propostas."</p>
              <p className="text-xs leading-relaxed text-black/80">4.1 O pagamento será processado em marcos técnicos: 30% na assinatura (Entrada), 40% na aprovação do Anteprojeto e 30% na entrega do Projeto Executivo Final. Detalhamento de valores disponível no <b>ANEXO III</b>.</p>
            </section>

            <section className="space-y-6 no-break">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[10px] text-[#8B7355] font-bold">CLÁUSULA 05</span>
                <h4 className="font-serif text-xl font-bold uppercase tracking-wide border-b border-black/10 flex-1 pb-1">Disposições Finais</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[10px] uppercase font-mono tracking-tight text-black/50">
                <p>Direitos autorais preservados conforme Lei 9.610/98. Vedada a reprodução parcial ou total para execução em outro local sem prévia anuência.</p>
                <p>Foro eleito: Comarca de São José dos Campos, SP. O presente contrato constitui título executivo extrajudicial.</p>
              </div>
            </section>

            {/* Signature Area */}
            <div className="mt-32 pt-20 border-t border-black/10 no-break">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <div className="space-y-4 text-center">
                  <div className="h-px bg-black w-full"></div>
                  <p className="font-serif italic text-xl">{contrato.nome_cliente}</p>
                  <p className="font-mono text-[9px] uppercase tracking-widest opacity-40">Contratante</p>
                </div>
                <div className="space-y-16">
                  <div className="space-y-4 text-center">
                    <div className="h-px bg-black w-full"></div>
                    <p className="font-serif italic text-xl">Leandro Henrique da Silva</p>
                    <p className="font-mono text-[9px] uppercase tracking-widest opacity-40">Arquiteto Responsável</p>
                  </div>
                  <div className="space-y-4 text-center pt-8">
                    <div className="h-px bg-black w-full"></div>
                    <p className="font-serif italic text-xl">Neandro Jacque Garcia</p>
                    <p className="font-mono text-[9px] uppercase tracking-widest opacity-40">Arquiteto Responsável</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-20 grid grid-cols-2 gap-20 opacity-30">
                <div className="border-t border-black pt-2 text-[8px] font-mono uppercase tracking-widest text-center">Testemunha 01</div>
                <div className="border-t border-black pt-2 text-[8px] font-mono uppercase tracking-widest text-center">Testemunha 02</div>
              </div>

              <p className="text-center mt-20 font-mono text-[9px] uppercase tracking-[0.3em] text-[#8B7355]">NL Arquitetos  ·  S.J. Campos, SP  ·  {contrato.data}</p>
            </div>
          </article>

          <div className="page-break" />

          {/* Anexos Section with New Tabs Styling */}
          <section className="space-y-12">
            <header className="no-break text-center space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#8B7355]">Documentação Complementar</span>
              <h2 className="font-serif text-4xl italic">Anexos Técnicos</h2>
            </header>

            <Tabs defaultValue="anexo1" className="w-full">
              <TabsList className="w-full h-auto bg-black/[0.02] border border-black/5 p-1 flex print:hidden mb-8">
                <TabsTrigger value="anexo1" className="flex-1 py-4 font-mono text-[9px] uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:text-[#8B7355] data-[state=active]:shadow-sm">Escopo</TabsTrigger>
                <TabsTrigger value="anexo2" className="flex-1 py-4 font-mono text-[9px] uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:text-[#8B7355] data-[state=active]:shadow-sm">Cronograma</TabsTrigger>
                <TabsTrigger value="anexo3" className="flex-1 py-4 font-mono text-[9px] uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:text-[#8B7355] data-[state=active]:shadow-sm">Pagamento</TabsTrigger>
                <TabsTrigger value="anexo4" className="flex-1 py-4 font-mono text-[9px] uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:text-[#8B7355] data-[state=active]:shadow-sm">Extras</TabsTrigger>
              </TabsList>

              <TabsContent value="anexo1" className="print:block print:opacity-100">
                <div className="p-8 lg:p-12 border border-black/5 rounded-sm bg-black/[0.01] space-y-10">
                  <h4 className="font-serif text-2xl font-light uppercase border-b border-[#8B7355]/20 pb-4 text-[#8B7355]">ANEXO I — Definição de Escopo</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-xs leading-relaxed text-black/70">
                    <div className="space-y-4">
                      <p className="font-mono text-[9px] uppercase font-bold text-black/30">Identificação Técnica</p>
                      <p><b>Localização:</b> {contrato.endereco_imovel}</p>
                      <p><b>Área de Terreno:</b> {contrato.area_terreno} m²</p>
                      <p><b>Área Projetada Estimada:</b> {contrato.area_construida} m²</p>
                      <p><b>Registro:</b> Matrícula {contrato.matricula} no {contrato.cartorio}</p>
                    </div>
                    <div className="space-y-4">
                      <p className="font-mono text-[9px] uppercase font-bold text-black/30">Entregáveis Oferecidos</p>
                      <ul className="space-y-2 font-sans italic text-[11px]">
                        <li>• Cadernos Técnicos Executivos (I a IV)</li>
                        <li>• Mapas de Instalações Coordenados</li>
                        <li>• Detalhamentos de Marmoraria e Marcenaria</li>
                        <li>• Memorial Descritivo de Materiais</li>
                        <li>• Suporte Técnico Pós-Entrega ({contrato.plano === 'Completo' ? '90' : '60'} dias)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="anexo2" className="print:block print:opacity-100">
                <div className="p-8 lg:p-12 border border-black/5 rounded-sm bg-black/[0.01] space-y-10">
                  <h4 className="font-serif text-2xl font-light uppercase border-b border-[#8B7355]/20 pb-4 text-[#8B7355]">ANEXO II — Prazos e Etapas</h4>
                  <div className="space-y-4 font-mono text-[10px] uppercase">
                    {[
                      { l: 'Levantamento & Briefing', d: contrato.prazo_briefing },
                      { l: 'Estudo Preliminar & Conceito', d: contrato.prazo_estudo },
                      { l: 'Concepção Tridimensional (3D)', d: contrato.prazo_estudo },
                      { l: 'Projeto Legal (Aprovações)', d: contrato.prazo_legal },
                      { l: 'Projeto Executivo Técnico', d: contrato.prazo_executivo },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-black/5 pb-2">
                        <span className="text-black/40">Fase {i+1} · {item.l}</span>
                        <span className="font-bold">{item.d} dias úteis</span>
                      </div>
                    ))}
                    <div className="flex justify-between items-center pt-8 text-[#8B7355] text-sm">
                      <span className="font-bold">Total Estimado de Desenvolvimento</span>
                      <span className="font-bold text-xl">{contrato.prazo_total_dias} dias úteis</span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="anexo3" className="print:block print:opacity-100">
                <div className="p-8 lg:p-12 border border-black/5 rounded-sm bg-black/[0.01] space-y-10">
                  <h4 className="font-serif text-2xl font-light uppercase border-b border-[#8B7355]/20 pb-4 text-[#8B7355]">ANEXO III — Detalhamento Financeiro</h4>
                  <div className="space-y-8">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="font-mono text-[9px] uppercase font-bold text-black/30">Valor Bruto do Instrumento</p>
                        <p className="font-serif text-4xl text-[#8B7355]">R$ {contrato.valor_total}</p>
                      </div>
                      <p className="font-mono text-[10px] uppercase text-black/40 italic">Quitação via PIX, Transf. ou Cartão</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-4 border border-black/5 rounded-sm">
                        <p className="font-mono text-[9px] font-bold opacity-30 uppercase mb-2">Marco 01 · 30%</p>
                        <p className="font-sans text-xs font-semibold mb-1 text-black/80">R$ {contrato.marco1_valor}</p>
                        <p className="text-[9px] font-mono text-black/40 uppercase">Assinatura do Contrato</p>
                      </div>
                      <div className="p-4 border border-black/5 rounded-sm">
                        <p className="font-mono text-[9px] font-bold opacity-30 uppercase mb-2">Marco 02 · 40%</p>
                        <p className="font-sans text-xs font-semibold mb-1 text-black/80">R$ {contrato.marco2_valor}</p>
                        <p className="text-[9px] font-mono text-black/40 uppercase">Aprovação do Anteprojeto</p>
                      </div>
                      <div className="p-4 border border-black/5 rounded-sm">
                        <p className="font-mono text-[9px] font-bold opacity-30 uppercase mb-2">Marco 03 · 30%</p>
                        <p className="font-sans text-xs font-semibold mb-1 text-black/80">R$ {contrato.marco3_valor}</p>
                        <p className="text-[9px] font-mono text-black/40 uppercase">Entrega do Executivo</p>
                      </div>
                    </div>
                    <p className="text-[9px] font-mono uppercase text-black/30 text-center leading-relaxed">Multa de 2% e juros de 1% a.m. para atrasos superiores a 05 dias úteis.</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="anexo4" className="print:block print:opacity-100">
                <div className="p-8 lg:p-12 border border-black/5 rounded-sm bg-black/[0.01] space-y-10">
                  <h4 className="font-serif text-2xl font-light uppercase border-b border-[#8B7355]/20 pb-4 text-[#8B7355]">ANEXO IV — Serviços Adicionais</h4>
                  <div className="space-y-6 text-xs leading-relaxed text-black/70">
                    <p>Ficam estabelecidos como serviços fora do escopo original base, sujeitos a orçamento suplementar:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans italic">
                      <ul className="space-y-2">
                        <li>• Projetos Estruturais e Fundações</li>
                        <li>• Projetos Hidrossanitários e Elétricos</li>
                        <li>• Gerenciamento e Fiscalização de Obra</li>
                      </ul>
                      <ul className="space-y-2">
                        <li>• Estudo de Viabilidade Financeira (EVF)</li>
                        <li>• Levantamentos Topográficos Especializados</li>
                        <li>• Visitas Técnicas Extraordinárias</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </section>
        </div>

        {/* Footer Technical Line */}
        <footer className="p-8 border-t border-black/5 bg-black/[0.01] flex justify-between items-center text-[8px] font-mono uppercase tracking-[0.2em] text-black/30">
          <span>NL Arquitetos  ·  S.J. Campos, SP</span>
          <span>Contrato NL-{contrato.ano}-{contrato.numero}  ·  v1.0</span>
          <span>Página 01 / 01</span>
        </footer>

      </div>
    </div>
  );
};

export default ContratoCliente;
