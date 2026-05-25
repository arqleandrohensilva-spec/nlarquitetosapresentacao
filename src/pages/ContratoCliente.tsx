import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Loader2 } from 'lucide-react';
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

  const tipoArqInt = contrato.tipo_projeto === 'ARQ+INT' ? '[X]' : '[ ]';
  const tipoInteriores = contrato.tipo_projeto === 'Interiores' ? '[X]' : '[ ]';
  const tipoComercial = contrato.tipo_projeto === 'Comercial' ? '[X]' : '[ ]';
  const planoExecutivo = contrato.plano !== 'Completo' ? '[X]' : '[ ]';
  const planoCompleto = contrato.plano === 'Completo' ? '[X]' : '[ ]';

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-[#E8E4DF] font-['Cormorant_Garamond']">
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
          .border-[#8B7355\/30] { border-color: #8B7355 !important; }
        }
      `}</style>

      <div data-pdf-hide className="fixed top-6 right-6 z-50">
        <button onClick={() => window.print()} className="bg-[#8B7355] text-[#0A0A0A] px-6 py-2.5 uppercase text-[10px] tracking-widest font-mono">BAIXAR PDF</button>
      </div>

      <div className="contrato-container max-w-[800px] mx-auto p-12 lg:p-20 bg-white text-black min-h-screen">
        <div className="mb-12">
            <h2 className="text-2xl font-bold uppercase mb-4">ARQUITETOS</h2>
            <h1 className="text-4xl font-bold uppercase mb-2">Contrato de Prestação de Serviços de Arquitetura</h1>
            <p className="text-sm uppercase tracking-widest text-[#8B7355]">INSTRUMENTO PARTICULAR · A ARQUITETURA COMO DECISÃO</p>
        </div>

        <div className="grid grid-cols-2 gap-y-4 mb-12 text-sm">
            <div className="font-bold">Nº DO CONTRATO</div> <div>NL-{contrato.ano}-{contrato.numero}</div>
            <div className="font-bold">CONTRATANTE</div> <div>{contrato.nome_cliente}</div>
            <div className="font-bold">TIPO DE PROJETO</div> <div>{tipoArqInt} ARQ+INT  {tipoInteriores} INTERIORES  {tipoComercial} COMERCIAL</div>
            <div className="font-bold">PLANO CONTRATADO</div> <div>{planoExecutivo} EXECUTIVO  {planoCompleto} COMPLETO</div>
            <div className="font-bold">ENDEREÇO DO IMÓVEL</div> <div>{contrato.endereco_imovel}</div>
            <div className="font-bold">VALOR TOTAL DOS HONORÁRIOS</div> <div>R$ {contrato.valor_total} ({contrato.valor_total_extenso})</div>
            <div className="font-bold">PRAZO TOTAL ESTIMADO</div> <div>{contrato.prazo_semanas} semanas a partir da assinatura e entrega dos documentos</div>
            <div className="font-bold">DATA DE ASSINATURA</div> <div>São José dos Campos, SP | {contrato.data}</div>
        </div>

        <div className="text-center italic text-[#8B7355] border-t border-b py-6 mb-12">
            "A NL não projeta para impressionar. Projeta para funcionar — e o resultado impressiona porque cada decisão foi tomada antes de a obra começar."
        </div>

        <div className="text-[10px] text-center text-gray-500 mb-20">
            NL Arquitetos · São José dos Campos, SP · Versão 1.0
        </div>

        <div className="mb-20">
            <h2 className="text-xl font-bold uppercase mb-6">SUMÁRIO</h2>
            <p className="text-sm">Instrumento Particular de Contrato de Projeto de Arquitetura</p>
            <ul className="text-sm space-y-2 mt-4 ml-4">
                <li>CONTRATO PRINCIPAL</li>
                <li>Cláusula Primeira — Das Partes Envolvidas no Contrato</li>
                <li>Cláusula Segunda — Do Objeto</li>
                <li>Cláusula Terceira — Dos Serviços Ofertados</li>
                <li>Cláusula Quarta — Do Prazo</li>
                <li>Cláusula Quinta — Das Alterações</li>
                <li>Cláusula Sexta — Dos Honorários</li>
                <li>Cláusula Sétima — Das Obrigações e Responsabilidades do Contratante</li>
                <li>Cláusula Oitava — Das Obrigações e Responsabilidades dos Contratados</li>
                <li>Cláusula Nona — Dos Direitos Autorais</li>
                <li>Cláusula Décima — Da Responsabilidade Técnica</li>
                <li>Cláusula Décima Primeira — Da Rescisão Contratual</li>
                <li>Cláusula Décima Segunda — Considerações Finais</li>
                <li>Cláusula Décima Terceira — Da Limitação de Responsabilidade Civil</li>
                <li>Cláusula Décima Quarta — Do Foro</li>
                <li>ASSINATURAS</li>
                <li>ANEXOS</li>
            </ul>
        </div>

        <div className="prose prose-sm max-w-none text-black">
           <h2 className="font-bold uppercase mb-4">INSTRUMENTO PARTICULAR DE CONTRATO DE PROJETO DE ARQUITETURA</h2>
           <p>CLÁUSULA PRIMEIRA — DAS PARTES ENVOLVIDAS NO CONTRATO: {contrato.nome_cliente}, {contrato.nacionalidade}, {contrato.estado_civil}, {contrato.profissao}, portador do CPF nº {contrato.cpf_cliente}, residente em {contrato.endereco_cliente}, doravante denominado CONTRATANTE. E NL ARQUITETOS, representada por LEANDRO HENRIQUE DA SILVA e NEANDRO JACQUE GARCIA, doravante denominados CONTRATADOS.</p>
           <p>CLÁUSULA SEGUNDA — DO OBJETO: O presente contrato tem por objeto a prestação de serviços técnicos profissionais de arquitetura para o imóvel localizado em {contrato.endereco_imovel}.</p>
           <p>CLÁUSULA TERCEIRA — DOS SERVIÇOS OFERTADOS: Os serviços compreendem o desenvolvimento de projetos conforme especificado nos anexos deste contrato.</p>
           <p>CLÁUSULA QUARTA — DO PRAZO: O prazo total estimado para a execução dos serviços é de {contrato.prazo_semanas} semanas.</p>
           <p>CLÁUSULA QUINTA — DAS ALTERAÇÕES: Cada etapa contempla até 02 (duas) revisões, desde que não impliquem mudança substancial do conceito arquitetônico.</p>
           <p>CLÁUSULA SEXTA — DOS HONORÁRIOS: O valor total dos honorários é de R$ {contrato.valor_total} ({contrato.valor_total_extenso}).</p>
           <p>CLÁUSULA SÉTIMA — DAS OBRIGAÇÕES DO CONTRATANTE: Fornecer documentos, informações e aprovar etapas dentro dos prazos estabelecidos.</p>
           <p>CLÁUSULA OITAVA — DAS OBRIGAÇÕES DOS CONTRATADOS: Prestar serviços com diligência, competência e observância às normas técnicas.</p>
           <p>CLÁUSULA NONA — DOS DIREITOS AUTORAIS: O projeto é obra intelectual protegida pela Lei nº 9.610/1998, pertencendo aos CONTRATADOS.</p>
           <p>CLÁUSULA DÉCIMA — DA RESPONSABILIDADE TÉCNICA: A responsabilidade técnica restringe-se à elaboração do projeto, não incluindo execução ou gerenciamento de obra.</p>
           <p>CLÁUSULA DÉCIMA PRIMEIRA — DA RESCISÃO CONTRATUAL: O contrato poderá ser rescindido mediante notificação formal, observadas as condições de quitação proporcional.</p>
           <p>CLÁUSULA DÉCIMA SEGUNDA — CONSIDERAÇÕES FINAIS: Disposições complementares aplicáveis à execução do contrato.</p>
           <p>CLÁUSULA DÉCIMA TERCEIRA — DA LIMITAÇÃO DE RESPONSABILIDADE CIVIL: A responsabilidade civil limita-se ao valor dos honorários recebidos.</p>
           <p>CLÁUSULA DÉCIMA QUARTA — DO FORO: Fica eleito o foro da comarca de São José dos Campos - SP.</p>
        </div>

        <Tabs defaultValue="anexo1" className="mt-20">
            <TabsList className="grid grid-cols-4">
                <TabsTrigger value="anexo1">ANEXO I</TabsTrigger>
                <TabsTrigger value="anexo2">ANEXO II</TabsTrigger>
                <TabsTrigger value="anexo3">ANEXO III</TabsTrigger>
                <TabsTrigger value="anexo4">ANEXO IV</TabsTrigger>
            </TabsList>
            <TabsContent value="anexo1" className="p-4 border">Anexo I: Escopo dos Serviços de Projeto — Detalhamento das etapas e entregáveis.</TabsContent>
            <TabsContent value="anexo2" className="p-4 border">Anexo II: Cronograma de Desenvolvimento do Projeto — Prazos estimados para cada etapa.</TabsContent>
            <TabsContent value="anexo3" className="p-4 border">Anexo III: Honorários e Forma de Pagamento — Detalhamento financeiro e marcos de pagamento.</TabsContent>
            <TabsContent value="anexo4" className="p-4 border">Anexo IV: Serviços Adicionais (Opcionais) — Serviços não inclusos no escopo principal.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ContratoCliente;
