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

  if (loading) return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#8B7355] animate-spin" />
      </div>
  );

  if (!contrato) return <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-white font-['Courier_New'] uppercase tracking-widest text-[10px]">Contrato não encontrado</div>;

  const tipoArqInt = contrato.tipo_projeto === 'ARQ+INT' ? '[X]' : '[ ]';
  const tipoInteriores = contrato.tipo_projeto === 'Interiores' ? '[X]' : '[ ]';
  const tipoComercial = contrato.tipo_projeto === 'Comercial' ? '[X]' : '[ ]';
  const planoExecutivo = contrato.plano !== 'Completo' ? '[X]' : '[ ]';
  const planoCompleto = contrato.plano === 'Completo' ? '[X]' : '[ ]';

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-[#1A1A1A] font-sans p-6 md:p-12 print:p-0">
        <style>{`
            @media print {
                body { background: white !important; color: black !important; }
                .contrato-page { box-shadow: none !important; margin: 0 !important; max-width: 100% !important; width: 100% !important; }
                [data-pdf-hide] { display: none !important; }
                .page-break { page-break-before: always; }
            }
        `}</style>
      <div data-pdf-hide className="fixed top-6 right-6 z-50">
        <button onClick={() => window.print()} className="bg-[#8B7355] text-white px-6 py-2.5 uppercase text-[10px] tracking-widest font-mono hover:bg-[#8B7355]/90 transition-colors">BAIXAR PDF</button>
      </div>

      <div className="contrato-page max-w-[800px] mx-auto bg-white p-12 lg:p-20 shadow-xl overflow-hidden">
        <div className="mb-12">
            <h2 className="text-xl font-bold uppercase mb-4">ARQUITETOS</h2>
            <h1 className="text-3xl font-bold uppercase mb-2">Contrato de Prestação de Serviços de Arquitetura</h1>
            <p className="text-xs uppercase tracking-widest text-[#8B7355]">INSTRUMENTO PARTICULAR · A ARQUITETURA COMO DECISÃO</p>
        </div>

        <div className="grid grid-cols-2 gap-y-4 mb-12 text-xs">
            <div className="font-bold">Nº DO CONTRATO</div> <div>NL-{contrato.ano}-{contrato.numero}</div>
            <div className="font-bold">CONTRATANTE</div> <div>{contrato.nome_cliente}</div>
            <div className="font-bold">TIPO DE PROJETO</div> <div>{tipoArqInt} ARQ+INT &nbsp;&nbsp; {tipoInteriores} INTERIORES &nbsp;&nbsp; {tipoComercial} COMERCIAL</div>
            <div className="font-bold">PLANO CONTRATADO</div> <div>{planoExecutivo} EXECUTIVO &nbsp;&nbsp; {planoCompleto} COMPLETO</div>
            <div className="font-bold">ENDEREÇO DO IMÓVEL</div> <div>{contrato.endereco_imovel}</div>
            <div className="font-bold">VALOR TOTAL DOS HONORÁRIOS</div> <div>R$ {contrato.valor_total} ({contrato.valor_total_extenso})</div>
            <div className="font-bold">PRAZO TOTAL ESTIMADO</div> <div>{contrato.prazo_semanas} semanas a partir da assinatura e entrega dos documentos</div>
            <div className="font-bold">DATA DE ASSINATURA</div> <div>São José dos Campos, SP  |  {contrato.data}</div>
        </div>

        <div className="text-center italic text-[#8B7355] border-t border-b py-6 mb-12 text-sm leading-relaxed">
            "A NL não projeta para impressionar. Projeta para funcionar — e o resultado impressiona porque cada decisão foi tomada antes de a obra começar."
        </div>

        <div className="text-[10px] text-center text-gray-500 mb-16">
            NL Arquitetos  ·  São José dos Campos, SP  ·  Versão 1.0
        </div>

        <div className="text-xs leading-relaxed space-y-4 mb-20">
            <h2 className="text-lg font-bold uppercase">SUMÁRIO</h2>
            <p>Instrumento Particular de Contrato de Projeto de Arquitetura</p>
            <p className="font-bold">CONTRATO PRINCIPAL</p>
            <ul className="ml-4 space-y-1">
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
                <li className="ml-4">Anexo I — Escopo dos Serviços de Projeto</li>
                <li className="ml-4">Anexo II — Cronograma de Desenvolvimento do Projeto</li>
                <li className="ml-4">Anexo III — Honorários e Forma de Pagamento</li>
                <li className="ml-4">Anexo IV — Serviços Adicionais (Opcionais)</li>
            </ul>
        </div>

        <div className="space-y-8 text-xs leading-relaxed">
            <h1 className="text-xl font-bold uppercase text-center border-b pb-4">INSTRUMENTO PARTICULAR DE CONTRATO DE PROJETO DE ARQUITETURA</h1>

            <section>
                <h2 className="font-bold uppercase mb-4">CLÁUSULA PRIMEIRA — DAS PARTES ENVOLVIDAS NO CONTRATO</h2>
                <p><b>CONTRATANTE:</b> {contrato.nome_cliente}, {contrato.nacionalidade}, {contrato.estado_civil}, {contrato.profissao}, portador do CPF nº {contrato.cpf_cliente}, residente e domiciliado em {contrato.endereco_cliente}, doravante denominado simplesmente CONTRATANTE.</p>
                <p className="mt-4"><b>CONTRATADOS:</b> Leandro Henrique da Silva, brasileiro, arquiteto e urbanista, inscrito no CAU nº A252250-0, portador do CPF nº 425.437.568-92 e Neandro Jacque Garcia, brasileiro, arquiteto e urbanista, inscrito no CAU nº A264629-3, portador do CPF nº {contrato.cpf_cliente}, atuando sob a denominação fantasia NL Arquitetura e Interiores doravante denominados conjuntamente CONTRATADOS.</p>
                <p className="mt-4 text-justify">As partes, devidamente qualificadas, resolvem celebrar o presente Contrato de Prestação de Serviços de Arquitetura, o qual se regerá pela legislação brasileira aplicável, notadamente, quando aplicável, pelo Código de Defesa do Consumidor, pela Lei Federal nº 12.378/2010 (que regulamenta o exercício da Arquitetura e Urbanismo), pelas Resoluções nº 21 (Atribuições Profissionais) e nº 64 (Tabela de Honorários) do CAU/BR, pela Lei Federal nº 9.610/1998, que dispõe sobre direitos autorais, e, subsidiariamente, pelas disposições do Código Civil concernentes à prestação de serviços. O presente instrumento será interpretado e executado em conformidade com as referidas legislações, sendo as cláusulas aqui previstas aplicáveis naquilo que não contrariar as disposições legais cogentes, tendo as partes entre si justo e contratado o que segue.</p>
            </section>

            <section>
                <h2 className="font-bold uppercase mb-2">CLÁUSULA SEGUNDA — DO OBJETO</h2>
                <p>2.1 O presente contrato tem por objeto a prestação de serviços técnicos profissionais de arquitetura pelos CONTRATADOS ao CONTRATANTE, compreendendo o desenvolvimento de projetos e/ou serviços relacionados à arquitetura e interiores.</p>
                <p>2.2 O escopo específico dos serviços, as etapas de desenvolvimento, os prazos, os honorários, a forma de pagamento e as demais condições particulares de cada projeto serão detalhadas nos Anexos deste contrato, que o integram para todos os efeitos legais, com a mesma validade e eficácia jurídica.</p>
            </section>

            <section>
                <h2 className="font-bold uppercase mb-2">CLÁUSULA TERCEIRA — DOS SERVIÇOS OFERTADOS</h2>
                <p>3.1 Os serviços técnicos de arquitetura que poderão ser prestados pelos CONTRATADOS ao CONTRATANTE compreendem, de forma exemplificativa e não limitativa, atividades como: levantamento de dados e informações técnicas, elaboração de briefing e definição do programa de necessidades, desenvolvimento de estudos preliminares, anteprojeto, projeto legal para aprovação junto aos órgãos competentes, projeto executivo, compatibilização de projetos complementares, gerenciamento de projetos (se expressamente contratado) e demais atividades técnicas relacionadas ao desenvolvimento de projetos de arquitetura e/ou interiores, sendo que a definição específica do escopo dos serviços contratados, etapas de desenvolvimento e entregáveis será detalhada nos Anexos deste contrato, conforme Cláusula 3.2.</p>
                <p>3.2 A definição específica do escopo dos serviços, etapas de desenvolvimento, entregáveis e demais condições aplicáveis a cada projeto contratado será estabelecida nos Anexos deste contrato, que passam a integrá-lo para todos os fins de direito.</p>
                <p>3.3 Os serviços previstos nesta cláusula referem-se exclusivamente às atividades de desenvolvimento de projeto, não incluindo execução, gerenciamento ou acompanhamento de obra, salvo quando expressamente contratado.</p>
            </section>

            <section>
                <h2 className="font-bold uppercase mb-2">CLÁUSULA QUARTA — DO PRAZO</h2>
                <p>4.1 Os prazos para execução dos serviços objeto deste contrato serão definidos nos Anexos correspondentes, nos quais constará o cronograma estimado de desenvolvimento das etapas do projeto.</p>
                <p>4.2 Os prazos estabelecidos possuem caráter estimativo e poderão sofrer ajustes a serem determinados e comunicados formalmente pelos CONTRATADOS ao CONTRATANTE, com a devida justificativa.</p>
                <p>4.3 Eventuais atrasos decorrentes de fatores alheios à atuação dos CONTRATADOS não caracterizarão inadimplemento contratual.</p>
            </section>

            <section>
                <h2 className="font-bold uppercase mb-2">CLÁUSULA QUINTA — DAS ALTERAÇÕES</h2>
                <p>5.1 Cada etapa do projeto apresentada pelos CONTRATADOS contempla até 02 (duas) revisões, desde que as alterações solicitadas estejam relacionadas à proposta inicialmente desenvolvida e não impliquem mudança substancial do conceito arquitetônico previamente aprovado.</p>
                <p>Parágrafo único – A caracterização de mudança substancial do conceito arquitetônico será avaliada pelos CONTRATADOS, de forma justificada e documentada.</p>
                <p>5.2 As solicitações de ajustes deverão ser realizadas pelo CONTRATANTE dentro do prazo de análise estabelecido neste contrato ou nos Anexos correspondentes, após a apresentação de cada etapa do projeto.</p>
                <p>5.2.1 A ausência de manifestação do CONTRATANTE dentro do prazo de análise estabelecido implicará na aprovação tácita da etapa apresentada.</p>
                <p>5.3 Caso o CONTRATANTE solicite mais de 02 (duas) rodadas de revisão em uma mesma etapa, ou alterações que impliquem mudanças significativas no conceito arquitetônico previamente aprovado, devidamente justificado e comprovado pelos CONTRATADOS, tais modificações serão consideradas serviços adicionais, cobradas por hora técnica.</p>
                <p>5.4 Alterações solicitadas após a aprovação formal de uma etapa serão consideradas serviços adicionais.</p>
                <p>5.6 Alterações decorrentes de exigências técnicas de órgãos públicos, prefeitura ou normas condominiais serão realizadas sem custo adicional ao CONTRATANTE, desde que não impliquem mudança substancial do conceito arquitetônico previamente aprovado.</p>
                <p>5.7 Quaisquer alterações solicitadas pelo CONTRATANTE após o início da execução da obra e que não decorram de vícios construtivos ou falhas de projeto imputáveis aos CONTRATADOS não fazem parte do escopo deste contrato.</p>
                <p>5.8 Após a aprovação do Projeto Executivo, o projeto será considerado tecnicamente finalizado.</p>
            </section>

            <section>
                <h2 className="font-bold uppercase mb-2">CLÁUSULA SEXTA — DOS HONORÁRIOS</h2>
                <p>6.1 Em contrapartida aos serviços profissionais de arquitetura prestados em conformidade com este contrato, o CONTRATANTE compromete-se a pagar aos CONTRATADOS os honorários profissionais, bem como a respectiva forma de pagamento, conforme estabelecido no Anexo III.</p>
                <p>6.2 O Anexo III especificará detalhadamente o valor total dos honorários, a forma de pagamento aplicável, bem como eventuais condições comerciais acordadas entre as partes.</p>
                <p>6.3 Salvo disposição expressa em contrário e por escrito, não estão incluídos nos honorários contratados os projetos complementares, execução da obra, taxas, emolumentos e custos de impressão.</p>
            </section>

            <section>
                <h2 className="font-bold uppercase mb-2">CLÁUSULA SÉTIMA — DAS OBRIGAÇÕES E RESPONSABILIDADES DO CONTRATANTE</h2>
                <p>7.1 Fornecer aos CONTRATADOS, de forma completa, verdadeira e tempestiva, todos os documentos, informações e dados necessários ao desenvolvimento do projeto.</p>
                <p>7.2 Analisar e aprovar as etapas do projeto apresentadas pelos CONTRATADOS dentro dos prazos estabelecidos.</p>
                <p>7.4 Efetuar o pagamento dos honorários profissionais na forma, prazos e condições estabelecidas.</p>
                <p>7.5 Obter todas as licenças, alvarás e aprovações necessárias junto aos órgãos públicos.</p>
                <p>7.8 A executar a obra em conformidade com o projeto elaborado pelos CONTRATADOS, sendo vedadas alterações sem a prévia autorização técnica e formal dos autores do projeto.</p>
                <p>7.11 O projeto arquitetônico constitui obra intelectual protegida pela Lei nº 9.610/1998.</p>
            </section>

            <section>
                <h2 className="font-bold uppercase mb-2">CLÁUSULA OITAVA — DAS OBRIGAÇÕES E RESPONSABILIDADES DOS CONTRATADOS</h2>
                <p>8.1 Prestar os serviços profissionais de arquitetura com diligência, competência e observância às normas técnicas aplicáveis.</p>
                <p>8.2 Elaborar o projeto arquitetônico em estrita conformidade com o escopo definido no Anexo I.</p>
                <p>8.5 Manter sigilo sobre informações e documentos confidenciais do CONTRATANTE.</p>
                <p>8.6 Emitir o Registro de Responsabilidade Técnica (RRT) referente aos serviços efetivamente prestados.</p>
            </section>

            <section>
                <h2 className="font-bold uppercase mb-2">CLÁUSULA NONA — DOS DIREITOS AUTORAIS</h2>
                <p>9.1 O Projeto desenvolvido no âmbito deste contrato constitui obra intelectual protegida pela Lei nº 9.610/1998.</p>
                <p>9.2 Os direitos autorais morais e patrimoniais sobre o projeto pertencem aos CONTRATADOS.</p>
                <p>9.3 O CONTRATANTE adquire o direito de utilizar o projeto exclusivamente para a execução da obra no imóvel especificado.</p>
                <p>9.4 Sem autorização prévia e expressa dos CONTRATADOS, o CONTRATANTE não poderá reproduzir o projeto em outro terreno, reutilizá-lo ou cedê-lo a terceiros.</p>
            </section>

            <section>
                <h2 className="font-bold uppercase mb-2">CLÁUSULA DÉCIMA — DA RESPONSABILIDADE TÉCNICA</h2>
                <p>10.1 A responsabilidade técnica dos CONTRATADOS restringe-se à elaboração do projeto.</p>
                <p>10.2 A responsabilidade integral pela execução da obra recai exclusivamente sobre o CONTRATANTE.</p>
                <p>10.3 Os CONTRATADOS não se responsabiliza pela execução da obra, qualidade dos materiais ou cumprimento de prazos de construção.</p>
            </section>

            <section>
                <h2 className="font-bold uppercase mb-2">CLÁUSULA DÉCIMA PRIMEIRA — DA RESCISÃO CONTRATUAL</h2>
                <p>O presente contrato poderá ser rescindido por qualquer das partes, mediante notificação formal por escrito.</p>
                <p>11.1.1 Caso o CONTRATANTE opte por rescindir o contrato antes da conclusão: I – Os valores pagos não serão devolvidos; II – O CONTRATANTE deverá quitar o valor proporcional às etapas em andamento; III – Será aplicada multa compensatória de 20% sobre o saldo contratual remanescente.</p>
            </section>

            <section>
                <h2 className="font-bold uppercase mb-2">CLÁUSULA DÉCIMA SEGUNDA — CONSIDERAÇÕES FINAIS</h2>
                <p>12.1 Execução da obra não está incluída no escopo dos serviços contratados.</p>
                <p>12.3 O início dos serviços está condicionado à assinatura do presente instrumento e à comprovação do pagamento do sinal contratual.</p>
                <p>12.5 Todas as comunicações relevantes deverão ser realizadas obrigatoriamente por e-mail ou outro meio eletrônico formal.</p>
            </section>

            <section>
                <h2 className="font-bold uppercase mb-2">CLÁUSULA DÉCIMA TERCEIRA — DA LIMITAÇÃO DE RESPONSABILIDADE CIVIL</h2>
                <p>13.1 A responsabilidade civil dos CONTRATADOS limita-se à elaboração do projeto arquitetônico.</p>
                <p>13.3 A responsabilidade civil dos CONTRATADOS, caso configurada, estará limitada ao valor total dos honorários efetivamente recebidos.</p>
            </section>

            <section>
                <h2 className="font-bold uppercase mb-2">CLÁUSULA DÉCIMA QUARTA — DO FORO</h2>
                <p>14.1 As partes elegem o foro da comarca de São José dos Campos - SP para dirimir quaisquer controvérsias.</p>
            </section>

            <div className="mt-20 pt-10 border-t">
                <h2 className="text-lg font-bold uppercase mb-8 text-center">ASSINATURAS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="text-center space-y-4">
                        <div className="border-b border-black h-8 w-full"></div>
                        <p className="font-bold">{contrato.nome_cliente}</p>
                        <p className="text-[10px]">CONTRATANTE · CPF: {contrato.cpf_cliente}</p>
                    </div>
                    <div className="text-center space-y-8">
                        <div className="space-y-4">
                            <div className="border-b border-black h-8 w-full"></div>
                            <p className="font-bold">Leandro Henrique da Silva</p>
                            <p className="text-[10px]">CONTRATADO · CAU A252250-0</p>
                        </div>
                        <div className="space-y-4">
                            <div className="border-b border-black h-8 w-full"></div>
                            <p className="font-bold">Neandro Jacque Garcia</p>
                            <p className="text-[10px]">CONTRATADO · CAU A264629-3</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-20 mt-16">
                    <div className="text-center space-y-4">
                        <div className="border-b border-black h-8 w-full"></div>
                        <p className="text-[10px]">TESTEMUNHA I</p>
                    </div>
                    <div className="text-center space-y-4">
                        <div className="border-b border-black h-8 w-full"></div>
                        <p className="text-[10px]">TESTEMUNHA II</p>
                    </div>
                </div>
                
                <p className="text-center mt-20 text-[10px] uppercase tracking-widest text-gray-500">São José dos Campos – SP, {contrato.data}</p>
            </div>
        </div>

        <div className="page-break" />

        <div className="mt-20">
            <h1 className="text-2xl font-bold uppercase text-center mb-12">ANEXOS</h1>
            <Tabs defaultValue="anexo1" className="w-full print:block">
                <TabsList className="w-full flex print:hidden mb-8">
                    <TabsTrigger value="anexo1" className="flex-1">ANEXO I</TabsTrigger>
                    <TabsTrigger value="anexo2" className="flex-1">ANEXO II</TabsTrigger>
                    <TabsTrigger value="anexo3" className="flex-1">ANEXO III</TabsTrigger>
                    <TabsTrigger value="anexo4" className="flex-1">ANEXO IV</TabsTrigger>
                </TabsList>

                <TabsContent value="anexo1" className="space-y-6 text-xs print:block print:opacity-100">
                    <h2 className="text-lg font-bold uppercase border-b pb-2 text-[#8B7355]">ANEXO I — ESCOPO DOS SERVIÇOS DE PROJETO</h2>
                    <p className="italic">Integra o Contrato de Prestação de Serviços de Arquitetura — NL Arquitetos</p>
                    <div className="space-y-4">
                        <p>1.1 O presente Anexo integra de forma indissociável o Contrato de Prestação de Serviços de Arquitetura...</p>
                        <h3 className="font-bold uppercase">2.0 IDENTIFICAÇÃO DO PROJETO</h3>
                        <p>{tipoArqInt} PROJETO DE ARQUITETURA RESIDENCIAL</p>
                        <p>{tipoComercial} PROJETO DE ARQUITETURA COMERCIAL</p>
                        <p>{tipoInteriores} PROJETO DE ARQUITETURA DE INTERIORES</p>
                        
                        <h3 className="font-bold uppercase mt-6">3.0 IDENTIFICAÇÃO DO IMÓVEL</h3>
                        <p><b>LOCALIZAÇÃO:</b> {contrato.endereco_imovel}</p>
                        <p><b>ÁREA TERRENO:</b> {contrato.area_terreno} m² &nbsp;&nbsp; <b>ÁREA CONSTRUÍDA:</b> {contrato.area_construida} m²</p>
                        <p><b>MATRÍCULA:</b> {contrato.matricula} &nbsp;&nbsp; <b>CARTÓRIO:</b> {contrato.cartorio}</p>

                        <h3 className="font-bold uppercase mt-6">4.0 ESCOPO DOS SERVIÇOS</h3>
                        <p>As etapas técnicas compreendem: Levantamento de dados, Briefing, Estudo Preliminar, Concepção 3D, Projeto Legal e Projeto Executivo.</p>
                        
                        <h3 className="font-bold uppercase mt-6">4.3.5 DOS PLANOS DE SERVIÇO — EXECUTIVO E COMPLETO</h3>
                        <p><b>PLANO CONTRATADO:</b> {planoExecutivo} EXECUTIVO &nbsp;&nbsp; {planoCompleto} COMPLETO</p>
                    </div>
                </TabsContent>

                <TabsContent value="anexo2" className="space-y-6 text-xs print:block print:opacity-100">
                    <h2 className="text-lg font-bold uppercase border-b pb-2 text-[#8B7355]">ANEXO II — CRONOGRAMA DE DESENVOLVIMENTO</h2>
                    <p className="italic">Integra o Contrato de Prestação de Serviços de Arquitetura — NL Arquitetos</p>
                    <div className="space-y-4">
                        <ul className="space-y-2">
                            <li className="flex justify-between border-b pb-1"><span>Levantamento e Análise Inicial</span> <span>{contrato.prazo_briefing} dias úteis</span></li>
                            <li className="flex justify-between border-b pb-1"><span>Briefing e Programa de Necessidades</span> <span>{contrato.prazo_briefing} dias úteis</span></li>
                            <li className="flex justify-between border-b pb-1"><span>Estudo Preliminar</span> <span>{contrato.prazo_estudo} dias úteis</span></li>
                            <li className="flex justify-between border-b pb-1"><span>Concepção Tridimensional (3D)</span> <span>{contrato.prazo_estudo} dias úteis</span></li>
                            <li className="flex justify-between border-b pb-1"><span>Projeto Legal</span> <span>{contrato.prazo_legal} dias úteis</span></li>
                            <li className="flex justify-between border-b pb-1"><span>Projeto Executivo</span> <span>{contrato.prazo_executivo} dias úteis</span></li>
                        </ul>
                        <p className="font-bold mt-4">PRAZO TOTAL ESTIMADO: {contrato.prazo_total_dias} dias úteis ({contrato.prazo_semanas} semanas)</p>
                    </div>
                </TabsContent>

                <TabsContent value="anexo3" className="space-y-6 text-xs print:block print:opacity-100">
                    <h2 className="text-lg font-bold uppercase border-b pb-2 text-[#8B7355]">ANEXO III — HONORÁRIOS E FORMA DE PAGAMENTO</h2>
                    <div className="space-y-6">
                        <div className="bg-gray-50 p-4 border-l-4 border-[#8B7355]">
                            <p className="font-bold uppercase text-gray-500 text-[10px]">VALOR TOTAL DOS HONORÁRIOS</p>
                            <p className="text-xl font-bold">R$ {contrato.valor_total}</p>
                            <p className="italic text-gray-600">({contrato.valor_total_extenso})</p>
                        </div>
                        
                        <div className="space-y-4">
                            <p className="font-bold uppercase">FORMA DE PAGAMENTO (MARCOS):</p>
                            <div className="space-y-2">
                                <p><b>Marco 1 — Entrada (30%):</b> R$ {contrato.marco1_valor} ({contrato.marco1_extenso}) na assinatura.</p>
                                <p><b>Marco 2 — Anteprojeto (40%):</b> R$ {contrato.marco2_valor} ({contrato.marco2_extenso}) na aprovação formal.</p>
                                <p><b>Marco 3 — Entrega (30%):</b> R$ {contrato.marco3_valor} ({contrato.marco3_extenso}) na entrega dos cadernos.</p>
                            </div>
                        </div>
                        <p className="text-[10px] text-gray-500 italic">Vencimento em até 30 dias após cada marco. Aceito via PIX, Transferência ou Cartão.</p>
                    </div>
                </TabsContent>

                <TabsContent value="anexo4" className="space-y-6 text-xs print:block print:opacity-100">
                    <h2 className="text-lg font-bold uppercase border-b pb-2 text-[#8B7355]">ANEXO IV — SERVIÇOS ADICIONAIS (OPCIONAIS)</h2>
                    <div className="space-y-4">
                        <p>Configuram-se como serviços adicionais não inclusos nos honorários base:</p>
                        <ul className="list-disc ml-4 space-y-1">
                            <li>Projetos complementares (Estrutural, Elétrico, Hidráulico, etc.)</li>
                            <li>Estudo de Viabilidade Financeira detalhado (EVF)</li>
                            <li>Consultoria de interiores não contratada em plano original</li>
                            <li>Visitas técnicas extraordinárias</li>
                            <li>Acompanhamento contínuo de obra</li>
                        </ul>
                        <p className="mt-4 italic">Tais serviços serão orçados à parte mediante solicitação formal do CONTRATANTE.</p>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ContratoCliente;
