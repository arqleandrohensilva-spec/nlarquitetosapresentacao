import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Loader2 } from 'lucide-react';

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
        const { data, error } = await supabase
          .from('contratos_clientes')
          .select('*')
          .eq('slug', slug)
          .single();
        
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

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#8B7355] animate-spin" />
      </div>
    );
  }

  if (!contrato) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-white font-['Courier_New'] uppercase tracking-widest text-[10px]">
        Contrato não encontrado
      </div>
    );
  }

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-[#E8E4DF]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap');
        
        @media print {
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          [data-pdf-hide] { display: none !important; }
          .page-break { page-break-before: always; }
          .no-break { page-break-inside: avoid; }
          h1, h2, h3, h4 { page-break-after: avoid; }
          p { orphans: 3; widows: 3; }
          @page { size: A4; margin: 20mm 18mm; }
          body { font-size: 11pt; background: white !important; color: black !important; }
          .contrato-container { max-width: 100% !important; padding: 0 !important; }
          section { background: transparent !important; color: black !important; border-color: #8B7355 !important; }
          h1, h2, h3, h4, span, p, div { color: black !important; }
          .bg-[#0A0A0A] { background: white !important; }
          .text-white { color: black !important; }
          .border-[#8B7355\\/30] { border-color: #8B7355 !important; }
        }

        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-mono-legal { font-family: 'Courier New', Courier, monospace; }
      `}</style>

      <div data-pdf-hide className="fixed top-6 right-6 z-50 flex gap-3">
        <button 
          onClick={() => window.print()} 
          className="bg-[#8B7355] text-[#0A0A0A] px-6 py-2.5 font-mono-legal text-[10px] uppercase tracking-widest hover:bg-[#8B7355]/80 transition-colors shadow-lg"
        >
          BAIXAR PDF
        </button>
      </div>

      <div className="contrato-container max-w-[800px] mx-auto overflow-hidden">
        {/* CAPA */}
        <section className="min-h-screen flex flex-col justify-between p-16 bg-[#0A0A0A] no-break">
          <div className="flex justify-between items-start">
            <img src="/logo-branca.png" className="h-8" />
            <span className="font-mono-legal text-[10px] text-[#8B7355] uppercase tracking-widest">
              Instrumento Particular · Confidencial
            </span>
          </div>
          
          <div>
            <div className="w-16 h-px bg-[#8B7355] mb-8" />
            <h1 className="font-display italic text-6xl text-white leading-tight mb-4">
              Contrato de Prestação<br/>de Serviços Arquitetônicos
            </h1>
            <p className="font-mono-legal text-[10px] text-[#8B7355] uppercase tracking-[0.3em] mb-16">
              A Arquitetura como Decisão
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 border-t border-[#8B7355]/30 pt-8">
            <div>
              <p className="font-mono-legal text-[9px] text-[#8B7355] uppercase tracking-widest mb-1">Nº DO CONTRATO</p>
              <p className="font-display text-2xl text-white">NL-{contrato.ano}-{contrato.numero}</p>
            </div>
            <div>
              <p className="font-mono-legal text-[9px] text-[#8B7355] uppercase tracking-widest mb-1">DATA DE ASSINATURA</p>
              <p className="font-display text-2xl text-white">{contrato.data}</p>
            </div>
            <div>
              <p className="font-mono-legal text-[9px] text-[#8B7355] uppercase tracking-widest mb-1">CONTRATANTE</p>
              <p className="font-display text-2xl text-white italic">{contrato.nome_cliente}</p>
            </div>
            <div>
              <p className="font-mono-legal text-[9px] text-[#8B7355] uppercase tracking-widest mb-1">VALOR TOTAL</p>
              <p className="font-display text-2xl text-white">R$ {contrato.valor_total}</p>
            </div>
          </div>
        </section>

        {/* CONTEÚDO JURÍDICO */}
        <div className="px-16 py-20 space-y-12">
          
          {/* CLÁUSULA PRIMEIRA — DAS PARTES */}
          <div className="no-break space-y-4">
            <h2 className="font-mono-legal text-[10px] uppercase tracking-[0.2em] text-[#8B7355]">CLÁUSULA PRIMEIRA — DAS PARTES</h2>
            <p className="text-[#E8E4DF]/80 text-sm leading-relaxed">
              <span className="text-[#8B7355] uppercase font-bold mr-2">CONTRATANTE:</span>
              {contrato.nome_cliente}, {contrato.nacionalidade}, {contrato.estado_civil}, {contrato.profissao}, 
              portador do CPF nº {contrato.cpf_cliente}, residente em {contrato.endereco_cliente}.
            </p>
            <p className="text-[#E8E4DF]/80 text-sm leading-relaxed">
              <span className="text-[#8B7355] uppercase font-bold mr-2">CONTRATADA:</span>
              NL ARQUITETOS, representada por LEANDRO HENRIQUE DA SILVA, arquiteto e urbanista, CPF 425.437.568-92, CAU A203598-7, e NEANDRO JACQUE GARCIA, arquiteto e urbanista, CAU A203599-5.
            </p>
          </div>

          {/* CLÁUSULA SEGUNDA — DO OBJETO */}
          <div className="no-break space-y-6">
            <h2 className="font-mono-legal text-[10px] uppercase tracking-[0.2em] text-[#8B7355]">CLÁUSULA SEGUNDA — DO OBJETO</h2>
            <p className="text-[#E8E4DF]/80 text-sm leading-relaxed">
              O presente contrato tem por objeto a prestação de serviços profissionais de Arquitetura e Urbanismo pela CONTRATADA ao CONTRATANTE, para o imóvel localizado em <span className="text-[#8B7355]">{contrato.endereco_imovel}</span>, compreendendo as seguintes especificações:
            </p>
            
            <div className="grid grid-cols-1 gap-4 bg-white/5 p-6 border border-[#8B7355]/20">
              <div className="flex items-center gap-4">
                <div className="text-[#8B7355] font-mono-legal text-xs">TIPO DE PROJETO:</div>
                <div className="flex gap-6 text-[10px] font-mono-legal uppercase tracking-wider">
                  <span>{contrato.tipo_projeto === 'ARQ+INT' ? '[X]' : '[ ]'} PROJETO ARQUITETÔNICO RESIDENCIAL</span>
                  <span>{contrato.tipo_projeto === 'Comercial' ? '[X]' : '[ ]'} PROJETO ARQUITETÔNICO COMERCIAL</span>
                  <span>{contrato.tipo_projeto === 'Interiores' ? '[X]' : '[ ]'} PROJETO DE INTERIORES</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 border-t border-[#8B7355]/10 pt-4">
                <div className="text-[#8B7355] font-mono-legal text-xs">PLANO CONTRATADO:</div>
                <div className="flex gap-6 text-[10px] font-mono-legal uppercase tracking-wider">
                  <span>{contrato.plano !== 'Completo' ? '[X]' : '[ ]'} PLANO EXECUTIVO</span>
                  <span>{contrato.plano === 'Completo' ? '[X]' : '[ ]'} PLANO COMPLETO</span>
                </div>
              </div>
            </div>

            <p className="text-[#E8E4DF]/80 text-sm leading-relaxed italic">
              * O projeto será desenvolvido considerando uma área de terreno de <span className="text-[#8B7355]">{contrato.area_terreno}</span> e área construída estimada de <span className="text-[#8B7355]">{contrato.area_construida}</span>.
            </p>
          </div>

          {/* CLÁUSULA TERCEIRA — DOS PRAZOS E ETAPAS */}
          <div className="no-break space-y-6">
            <h2 className="font-mono-legal text-[10px] uppercase tracking-[0.2em] text-[#8B7355]">CLÁUSULA TERCEIRA — DOS PRAZOS E ETAPAS</h2>
            <p className="text-[#E8E4DF]/80 text-sm leading-relaxed">
              O cronograma estimado para a execução dos serviços, condicionado à aprovação tempestiva de cada etapa pelo CONTRATANTE, é de:
            </p>
            
            <div className="grid grid-cols-2 gap-x-12 gap-y-4 font-display">
              {[
                { label: 'Levantamento e Conferência', value: `${contrato.prazo_briefing} dias úteis` },
                { label: 'Briefing e Estudo de Fluxo', value: `${contrato.prazo_briefing} dias úteis` },
                { label: 'Estudo Preliminar', value: `${contrato.prazo_estudo} dias úteis` },
                { label: 'Modelagem 3D e Conceito', value: `${contrato.prazo_estudo} dias úteis` },
                { label: 'Projeto Legal (Aprovação)', value: `${contrato.prazo_legal} dias úteis` },
                { label: 'Projeto Executivo Técnico', value: `${contrato.prazo_executivo} dias úteis` },
              ].map((item, i) => (
                <div key={i} className="flex justify-between border-b border-[#8B7355]/10 pb-2">
                  <span className="text-white/60 text-sm">{item.label}</span>
                  <span className="text-[#8B7355] text-sm font-bold">{item.value}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-4 border border-[#8B7355]/40 text-center">
              <span className="font-mono-legal text-[10px] uppercase tracking-[0.3em] text-[#8B7355]">PRAZO TOTAL ESTIMADO:</span>
              <span className="ml-4 font-display text-xl text-white italic">{contrato.prazo_semanas} semanas · {contrato.prazo_total_dias} dias úteis</span>
            </div>
          </div>

          {/* CLÁUSULA QUARTA — DOS HONORÁRIOS */}
          <div className="no-break space-y-6">
            <h2 className="font-mono-legal text-[10px] uppercase tracking-[0.2em] text-[#8B7355]">CLÁUSULA QUARTA — DOS HONORÁRIOS</h2>
            <p className="text-[#E8E4DF]/80 text-sm leading-relaxed">
              Pelos serviços ora contratados, o CONTRATANTE pagará à CONTRATADA o valor total de:
            </p>
            
            <div className="bg-[#8B7355]/10 p-8 border-l-2 border-[#8B7355]">
              <div className="font-display text-3xl text-white mb-2">R$ {contrato.valor_total}</div>
              <div className="font-mono-legal text-[10px] uppercase tracking-wider text-[#8B7355]">({contrato.valor_total_extenso})</div>
            </div>

            <div className="space-y-4">
              <p className="font-display text-lg text-white">Forma de Pagamento (Marcos de Entrega):</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-[#8B7355]/20 pb-2">
                  <div className="flex flex-col">
                    <span className="text-sm text-white/80">Marco 1 (30%) · Assinatura e Briefing</span>
                    <span className="text-[10px] font-mono-legal text-[#8B7355]">{contrato.marco1_extenso}</span>
                  </div>
                  <span className="font-display text-lg text-white">R$ {contrato.marco1_valor}</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#8B7355]/20 pb-2">
                  <div className="flex flex-col">
                    <span className="text-sm text-white/80">Marco 2 (40%) · Entrega do 3D</span>
                    <span className="text-[10px] font-mono-legal text-[#8B7355]">{contrato.marco2_extenso}</span>
                  </div>
                  <span className="font-display text-lg text-white">R$ {contrato.marco2_valor}</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#8B7355]/20 pb-2">
                  <div className="flex flex-col">
                    <span className="text-sm text-white/80">Marco 3 (30%) · Projeto Executivo Final</span>
                    <span className="text-[10px] font-mono-legal text-[#8B7355]">{contrato.marco3_extenso}</span>
                  </div>
                  <span className="font-display text-lg text-white">R$ {contrato.marco3_valor}</span>
                </div>
              </div>
            </div>
          </div>

          {/* CLÁUSULAS ADICIONAIS — PLACEHOLDER */}
          <div className="space-y-12 opacity-60">
             <div className="no-break space-y-4">
                <h2 className="font-mono-legal text-[10px] uppercase tracking-[0.2em] text-[#8B7355]">CLÁUSULA QUINTA À DÉCIMA QUARTA</h2>
                <p className="text-[#E8E4DF]/80 text-xs italic">
                  [O conteúdo jurídico completo das cláusulas 5 a 14, abrangendo obrigações das partes, propriedade intelectual, rescisão, foro e demais disposições legais, deve ser inserido conforme o contrato padrão da NL Arquitetos.]
                </p>
                <div className="space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-4 bg-[#8B7355]/5 w-full rounded" />
                  ))}
                </div>
             </div>
          </div>

          <div className="page-break" />

          {/* ANEXOS — PLACEHOLDER */}
          <div className="space-y-12 opacity-60">
             <div className="no-break space-y-4">
                <h2 className="font-mono-legal text-[10px] uppercase tracking-[0.2em] text-[#8B7355]">ANEXOS I, II, III E IV</h2>
                <p className="text-[#E8E4DF]/80 text-xs italic">
                  [O conteúdo detalhado dos anexos técnicos e cronogramas específicos deve ser inserido aqui.]
                </p>
                <div className="space-y-4">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="h-4 bg-[#8B7355]/5 w-full rounded" />
                  ))}
                </div>
             </div>
          </div>

          {/* ASSINATURAS */}
          <div className="no-break pt-20">
            <h2 className="font-mono-legal text-[10px] uppercase tracking-[0.2em] text-[#8B7355] mb-16 text-center">ASSINATURAS</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div className="space-y-4">
                <div className="border-b border-white/30 h-10 w-full" />
                <div className="text-center">
                  <p className="font-display text-lg text-white italic">{contrato.nome_cliente}</p>
                  <p className="font-mono-legal text-[9px] text-[#8B7355] uppercase tracking-widest">CPF: {contrato.cpf_cliente}</p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="border-b border-white/30 h-10 w-full" />
                  <div className="text-center">
                    <p className="font-display text-lg text-white italic">Leandro Henrique da Silva</p>
                    <p className="font-mono-legal text-[9px] text-[#8B7355] uppercase tracking-widest">CPF: 425.437.568-92 · CAU A203598-7</p>
                  </div>
                </div>
                
                <div className="space-y-4 pt-4">
                  <div className="border-b border-white/30 h-10 w-full" />
                  <div className="text-center">
                    <p className="font-display text-lg text-white italic">Neandro Jacque Garcia</p>
                    <p className="font-mono-legal text-[9px] text-[#8B7355] uppercase tracking-widest">CAU A203599-5</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-20 pt-10 border-t border-[#8B7355]/20 text-center">
               <p className="font-mono-legal text-[9px] text-[#8B7355] uppercase tracking-widest">
                 São José dos Campos, {contrato.data}
               </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContratoCliente;