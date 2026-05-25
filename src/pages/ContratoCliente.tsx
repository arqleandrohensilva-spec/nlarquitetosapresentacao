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

  if (loading) return <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center"><Loader2 className="w-8 h-8 text-[#8B7355] animate-spin" /></div>;
  if (!contrato) return <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-white font-['Courier_New'] uppercase tracking-widest text-[10px]">Contrato não encontrado</div>;

  const tipoArqInt = contrato.tipo_projeto === 'ARQ+INT' ? '[X]' : '[ ]';
  const tipoInteriores = contrato.tipo_projeto === 'Interiores' ? '[X]' : '[ ]';
  const tipoComercial = contrato.tipo_projeto === 'Comercial' ? '[X]' : '[ ]';
  const planoExecutivo = contrato.plano !== 'Completo' ? '[X]' : '[ ]';
  const planoCompleto = contrato.plano === 'Completo' ? '[X]' : '[ ]';

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-[#1A1A1A] font-sans p-6 print:p-0">
      <style>{`
        @media print { 
          body { background: white !important; } 
          .contrato-page { box-shadow: none !important; margin: 0 !important; width: 100% !important; max-width: 100% !important; } 
          [data-pdf-hide] { display: none !important; }
          .page-break { page-break-before: always; }
        }
      `}</style>
      <div data-pdf-hide className="fixed top-6 right-6 z-50">
        <button onClick={() => window.print()} className="bg-[#8B7355] text-white px-6 py-2.5 uppercase text-[10px] tracking-widest font-mono">BAIXAR PDF</button>
      </div>
      <div className="contrato-page max-w-[800px] mx-auto bg-white p-12 lg:p-20 shadow-xl overflow-hidden text-xs leading-relaxed">
        <h2 className="text-xl font-bold uppercase mb-4">ARQUITETOS</h2>
        <h1 className="text-2xl font-bold uppercase mb-2">Contrato de Prestação de Serviços de Arquitetura</h1>
        <p className="text-[10px] uppercase tracking-widest text-[#8B7355] mb-12 font-bold text-center border-t border-b py-2">INSTRUMENTO PARTICULAR · A ARQUITETURA COMO DECISÃO</p>
        
        <div className="grid grid-cols-2 gap-y-2 mb-12">
            <div className="font-bold uppercase">Nº DO CONTRATO</div> <div>NL-{contrato.ano}-{contrato.numero}</div>
            <div className="font-bold uppercase">CONTRATANTE</div> <div>{contrato.nome_cliente}</div>
            <div className="font-bold uppercase">TIPO DE PROJETO</div> <div>{tipoArqInt} ARQ+INT &nbsp;&nbsp; {tipoInteriores} INTERIORES &nbsp;&nbsp; {tipoComercial} COMERCIAL</div>
            <div className="font-bold uppercase">PLANO CONTRATADO</div> <div>{planoExecutivo} EXECUTIVO &nbsp;&nbsp; {planoCompleto} COMPLETO</div>
            <div className="font-bold uppercase">ENDEREÇO DO IMÓVEL</div> <div>{contrato.endereco_imovel}</div>
            <div className="font-bold uppercase">VALOR TOTAL DOS HONORÁRIOS</div> <div>R$ {contrato.valor_total} ({contrato.valor_total_extenso})</div>
            <div className="font-bold uppercase">PRAZO TOTAL ESTIMADO</div> <div>{contrato.prazo_semanas} semanas a partir da assinatura e entrega dos documentos</div>
            <div className="font-bold uppercase">DATA DE ASSINATURA</div> <div>São José dos Campos, SP | {contrato.data}</div>
        </div>

        <div className="text-center italic text-[#8B7355] py-6 mb-12 text-sm leading-relaxed border-t border-b">
            "A NL não projeta para impressionar. Projeta para funcionar — e o resultado impressiona porque cada decisão foi tomada antes de a obra começar."
        </div>

        <p className="text-center text-[9px] text-gray-500 mb-12">NL Arquitetos · São José dos Campos, SP · Versão 1.0</p>

        <h2 className="text-lg font-bold uppercase mb-4">SUMÁRIO</h2>
        <p className="mb-4">Instrumento Particular de Contrato de Projeto de Arquitetura</p>
        <p className="font-bold uppercase">CONTRATO PRINCIPAL</p>
        <ul className="ml-4 space-y-1 mb-12">
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
            <li className="font-bold">ASSINATURAS</li>
            <li className="font-bold">ANEXOS</li>
            <li className="ml-4">Anexo I — Escopo dos Serviços de Projeto</li>
            <li className="ml-4">Anexo II — Cronograma de Desenvolvimento do Projeto</li>
            <li className="ml-4">Anexo III — Honorários e Forma de Pagamento</li>
            <li className="ml-4">Anexo IV — Serviços Adicionais (Opcionais)</li>
        </ul>

        <div className="page-break" />

        <div className="space-y-6">
            <h1 className="text-xl font-bold uppercase text-center mb-8">INSTRUMENTO PARTICULAR DE CONTRATO DE PROJETO DE ARQUITETURA</h1>
            
            <section>
                <h2 className="font-bold uppercase border-b pb-1 mb-2">CLÁUSULA PRIMEIRA — DAS PARTES ENVOLVIDAS NO CONTRATO</h2>
                <p><strong>CONTRATANTE:</strong> {contrato.nome_cliente}, {contrato.nacionalidade}, {contrato.estado_civil}, {contrato.profissao}, portador do CPF nº {contrato.cpf_cliente}, residente e domiciliado em {contrato.endereco_cliente}, doravante denominado simplesmente CONTRATANTE.</p>
                <p className="mt-2"><strong>CONTRATADOS:</strong> Leandro Henrique da Silva, brasileiro, arquiteto e urbanista, inscrito no CAU nº A252250-0, portador do CPF nº 425.437.568-92 e Neandro Jacque Garcia, brasileiro, arquiteto e urbanista, inscrito no CAU nº A264629-3, portador do CPF nº {contrato.cpf_cliente}, atuando sob a denominação fantasia NL Arquitetura e Interiores doravante denominados conjuntamente CONTRATADOS.</p>
                <p className="mt-2 text-justify">As partes, devidamente qualificadas, resolvem celebrar o presente Contrato de Prestação de Serviços de Arquitetura, o qual se regerá pela legislação brasileira aplicável...</p>
            </section>

            <section>
                <h2 className="font-bold uppercase border-b pb-1 mb-2">CLÁUSULA SEGUNDA — DO OBJETO</h2>
                <p>2.1 O presente contrato tem por objeto a prestação de serviços técnicos profissionais de arquitetura pelos CONTRATADOS ao CONTRATANTE, compreendendo o desenvolvimento de projetos e/ou serviços relacionados à arquitetura e interiores.</p>
                <p>2.2 O escopo específico dos serviços, as etapas de desenvolvimento, os prazos, os honorários, a forma de pagamento e as demais condições particulares de cada projeto serão detalhadas nos Anexos deste contrato, que o integram para todos os efeitos legais, com a mesma validade e eficácia jurídica.</p>
            </section>

            <section>
                <h2 className="font-bold uppercase border-b pb-1 mb-2">CLÁUSULA TERCEIRA — DOS SERVIÇOS OFERTADOS</h2>
                <p>3.1 Os serviços técnicos de arquitetura que poderão ser prestados pelos CONTRATADOS ao CONTRATANTE compreendem atividades como: levantamento de dados, briefing, estudos preliminares, anteprojeto, projeto legal, projeto executivo e compatibilização.</p>
                <p>3.3 Os serviços previstos nesta cláusula referem-se exclusivamente às atividades de desenvolvimento de projeto, não incluindo execução ou acompanhamento de obra, salvo quando expressamente contratado.</p>
            </section>

            <section>
                <h2 className="font-bold uppercase border-b pb-1 mb-2">CLÁUSULA QUARTA — DO PRAZO</h2>
                <p>4.1 Os prazos para execução dos serviços objeto deste contrato serão definidos nos Anexos correspondentes.</p>
                <p>4.3 Eventuais atrasos decorrentes de fatores alheios à atuação dos CONTRATADOS não caracterizarão inadimplemento contratual.</p>
            </section>

            <section>
                <h2 className="font-bold uppercase border-b pb-1 mb-2">CLÁUSULA SEXTA — DOS HONORÁRIOS</h2>
                <p>6.1 O CONTRATANTE compromete-se a pagar aos CONTRATADOS os honorários profissionais conforme estabelecido no Anexo III.</p>
                <p>6.3 Salvo disposição expressa, não estão incluídos projetos complementares, execução da obra, taxas de aprovação ou custos de plotagem.</p>
            </section>

            <section>
                <h2 className="font-bold uppercase border-b pb-1 mb-2">CLÁUSULA NONA — DOS DIREITOS AUTORAIS</h2>
                <p>9.1 O Projeto desenvolvido no âmbito deste contrato constitui obra intelectual protegida pela Lei nº 9.610/1998.</p>
                <p>9.4 Sem autorização prévia e expressa dos CONTRATADOS, o CONTRATANTE não poderá reproduzir o projeto em outro terreno ou cedê-lo a terceiros.</p>
            </section>

            <div className="mt-12">
                <h2 className="text-lg font-bold uppercase mb-8 text-center">ASSINATURAS</h2>
                <div className="grid grid-cols-2 gap-12 text-center text-[9px]">
                    <div className="space-y-2">
                        <div className="border-t border-black pt-2 uppercase font-bold">{contrato.nome_cliente}</div>
                        <p>CONTRATANTE</p>
                    </div>
                    <div className="space-y-2">
                        <div className="border-t border-black pt-2 uppercase font-bold">NL Arquitetos</div>
                        <p>CONTRATADOS</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="page-break" />

        <div className="mt-12">
            <h1 className="text-xl font-bold uppercase text-center mb-8">ANEXOS</h1>
            <Tabs defaultValue="anexo1" className="w-full">
                <TabsList className="grid grid-cols-4 print:hidden">
                    <TabsTrigger value="anexo1">ANEXO I</TabsTrigger>
                    <TabsTrigger value="anexo2">ANEXO II</TabsTrigger>
                    <TabsTrigger value="anexo3">ANEXO III</TabsTrigger>
                    <TabsTrigger value="anexo4">ANEXO IV</TabsTrigger>
                </TabsList>

                <TabsContent value="anexo1" className="space-y-4 py-4 print:block">
                    <h3 className="font-bold uppercase border-b">ANEXO I — ESCOPO DOS SERVIÇOS DE PROJETO</h3>
                    <p>Modalidade: {contrato.tipo_projeto}</p>
                    <p>Localização: {contrato.endereco_imovel}</p>
                    <p>Área Estimada: {contrato.area_construida} m²</p>
                    <p>Plano Contratado: {contrato.plano}</p>
                </TabsContent>

                <TabsContent value="anexo2" className="space-y-4 py-4 print:block">
                    <h3 className="font-bold uppercase border-b">ANEXO II — CRONOGRAMA DE DESENVOLVIMENTO</h3>
                    <ul className="space-y-1">
                        <li>Levantamento: {contrato.prazo_briefing} dias</li>
                        <li>Briefing: {contrato.prazo_briefing} dias</li>
                        <li>Estudo Preliminar/3D: {contrato.prazo_estudo} dias</li>
                        <li>Projeto Legal: {contrato.prazo_legal} dias</li>
                        <li>Projeto Executivo: {contrato.prazo_executivo} dias</li>
                    </ul>
                    <p className="font-bold">Total Estimado: {contrato.prazo_total_dias} dias úteis</p>
                </TabsContent>

                <TabsContent value="anexo3" className="space-y-4 py-4 print:block">
                    <h3 className="font-bold uppercase border-b">ANEXO III — HONORÁRIOS E FORMA DE PAGAMENTO</h3>
                    <p className="text-lg font-bold">R$ {contrato.valor_total}</p>
                    <p className="italic">({contrato.valor_total_extenso})</p>
                    <div className="space-y-1 mt-4">
                        <p>Marco 1 (30%): R$ {contrato.marco1_valor} na assinatura.</p>
                        <p>Marco 2 (40%): R$ {contrato.marco2_valor} no anteprojeto aprovado.</p>
                        <p>Marco 3 (30%): R$ {contrato.marco3_valor} na entrega do executivo.</p>
                    </div>
                </TabsContent>

                <TabsContent value="anexo4" className="space-y-4 py-4 print:block">
                    <h3 className="font-bold uppercase border-b">ANEXO IV — SERVIÇOS ADICIONAIS (OPCIONAIS)</h3>
                    <p>Projetos complementares, visitas extras e acompanhamento de obra serão orçados separadamente.</p>
                </TabsContent>
            </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ContratoCliente;
