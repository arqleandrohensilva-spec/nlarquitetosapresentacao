import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const PinEntry = ({ onValidated }: { onValidated: (data: any) => void }) => {
  const { slug } = useParams();
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data, error: funcError } = await supabase.functions.invoke("get-contrato", {
        body: { slug, pin }
      });

      if (funcError || !data) {
        setError("PIN incorreto ou erro ao carregar contrato.");
      } else {
        onValidated(data);
      }
    } catch (err) {
      setError("Erro de conexão.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      background: "#000",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'DM Mono', monospace",
      color: "#fff",
      padding: "20px"
    }}>
      <div style={{ maxWidth: "320px", width: "100%", textAlign: "center" }}>
        <h2 style={{ fontSize: "14px", letterSpacing: "0.2em", marginBottom: "30px", color: "#8B7355" }}>ACESSO RESTRITO</h2>
        <p style={{ fontSize: "10px", color: "#888", marginBottom: "20px" }}>Informe os 4 últimos dígitos do CPF do contratante para visualizar o documento.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            maxLength={4}
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            style={{
              background: "transparent",
              border: "1px solid #333",
              color: "#fff",
              padding: "12px",
              width: "100%",
              textAlign: "center",
              fontSize: "18px",
              letterSpacing: "0.5em",
              marginBottom: "20px",
              outline: "none"
            }}
            placeholder="****"
          />
          <button
            disabled={loading}
            style={{
              background: "#8B7355",
              color: "#fff",
              border: "none",
              padding: "12px",
              width: "100%",
              cursor: "pointer",
              fontSize: "10px",
              letterSpacing: "0.1em",
              textTransform: "uppercase"
            }}
          >
            {loading ? "Validando..." : "Acessar Contrato"}
          </button>
        </form>
        {error && <p style={{ color: "#ff4444", fontSize: "10px", marginTop: "15px" }}>{error}</p>}
      </div>
    </div>
  );
};

const ContratoCliente = () => {
  const { slug } = useParams();
  const [contrato, setContrato] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    if (slug === "preview") {
      setContrato({
        numero: "NL-2026-000",
        nome_cliente: "JONATHAN BORGES DE MOURA",
        cpf_cliente: "425.437.568-92",
        nacionalidade: "brasileiro",
        estado_civil: "casado",
        profissao: "Engenheiro",
        endereco_cliente: "Rua das Flores, 450 — SJC/SP",
        tipo_projeto: "ARQ+INT",
        endereco_imovel: "Av. Vitória Régia, 120 — SJC/SP",
        data: "25 de maio de 2026",
        plano: "Executivo",
        area_construida: "300",
        area_terreno: "500",
        matricula: "12.345",
        cartorio: "1º Cartório de SJC",
        prazo_semanas: "12",
        prazo_briefing: "05",
        prazo_estudo: "10",
        prazo_legal: "15",
        prazo_executivo: "20",
        prazo_total_dias: "60",
        valor_total: "33.687,22",
        valor_total_extenso: "trinta e três mil, seiscentos e oitenta e sete reais e vinte e dois centavos",
        marco1_valor: "10.106,17",
        marco1_extenso: "dez mil, cento e seis reais e dezessete centavos",
        marco2_valor: "13.474,89",
        marco2_extenso: "treze mil, quatrocentos e setenta e quatro reais e oitenta e nove centavos",
        marco3_valor: "10.106,16",
        marco3_extenso: "dez mil, cento e seis reais e dezesseis centavos"
      });
      setValidated(true);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [slug]);

  if (loading) return <div style={{ background: "#000", minHeight: "100vh", color: "#fff", padding: "20px" }}>Carregando...</div>;

  if (!validated) {
    return <PinEntry onValidated={(data) => { setContrato(data); setValidated(true); }} />;
  }

  const c = contrato;

  const Row = ({ label, value }: { label: string, value: string }) => (
    <div style={{ display: "flex", marginBottom: "8px", border: "0.5px solid #333" }}>
      <div style={{ 
        width: "200px", 
        background: "#eee", 
        color: "#666", 
        padding: "8px 12px", 
        fontSize: "8px", 
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        display: "flex",
        alignItems: "center"
      }}>
        {label}
      </div>
      <div style={{ 
        flex: 1, 
        padding: "8px 12px", 
        fontSize: "10px", 
        color: "#ccc",
        background: "#000",
        display: "flex",
        alignItems: "center",
        borderLeft: "0.5px solid #333"
      }}>
        {value}
      </div>
    </div>
  );

  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Mono:wght@300;400&display=swap');
        
        @media print {
          body { margin: 0; background: #fff !important; color: #000 !important; }
          .contrato-container { 
            width: 210mm !important; 
            margin: 0 !important; 
            padding: 0 !important;
            background: #fff !important;
            color: #000 !important;
          }
          .page-content {
            padding: 20mm 22mm !important;
            height: 297mm;
            box-sizing: border-box;
            position: relative;
            background: #fff !important;
            color: #000 !important;
            page-break-after: always;
            display: flex;
            flex-direction: column;
          }
          .clause-body, .clause-body p, .clause-body ul, .clause-body li {
            color: #333 !important;
          }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          [data-pdf-hide] { display: none !important; }
          @page { size: A4; margin: 0; }
          .no-break { page-break-inside: avoid; }
          .footer-tech {
            position: absolute;
            bottom: 20mm;
            left: 22mm;
            right: 22mm;
            color: #666 !important;
          }
        }

        .contrato-container {
          background: #000;
          width: 210mm;
          margin: 0 auto;
          color: #fff;
          font-family: 'DM Mono', monospace;
        }

        .page-content {
          padding: 20mm 22mm;
          min-height: 297mm;
          box-sizing: border-box;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .clause-title, .annex-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 14px;
          color: #8B7355;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 40px;
          margin-bottom: 20px;
          border-bottom: 0.5px solid #333;
          padding-bottom: 8px;
        }

        .clause-body {
          font-size: 10px;
          line-height: 1.8;
          color: #aaa;
          text-align: justify;
          margin-bottom: 20px;
        }

        .clause-body p {
          margin-bottom: 15px;
        }

        .clause-body ul {
          margin-bottom: 15px;
          padding-left: 20px;
        }

        .clause-body li {
          margin-bottom: 8px;
        }

        .footer-tech {
          font-size: 7px;
          color: #444;
          display: flex;
          justify-content: space-between;
          border-top: 0.5px solid #222;
          padding-top: 15px;
          margin-top: auto;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          width: 100%;
        }

      `}</style>

      <div data-pdf-hide style={{ position: "fixed", top: 16, right: 16, zIndex: 50 }}>
        <button 
          onClick={() => window.print()} 
          style={{ 
            background: "#8B7355", 
            color: "#fff", 
            border: "none", 
            padding: "8px 20px", 
            fontFamily: "'DM Mono',monospace", 
            fontSize: "9px", 
            letterSpacing: "0.2em", 
            textTransform: "uppercase", 
            cursor: "pointer" 
          }}
        >
          ↓ BAIXAR PDF
        </button>
      </div>

      <div className="contrato-container">
        <div className="page-content">
          {/* CAPA */}
          <div style={{ minHeight: "250mm", display: "flex", flexDirection: "column" }}>

          <div style={{ marginBottom: "60px" }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "120px", color: "#1a1a1a", lineHeight: "0.8" }}>NL</div>
            <div style={{ fontSize: "12px", letterSpacing: "1.2em", color: "#8B7355", textTransform: "uppercase" }}>ARQUITETOS</div>
          </div>

          <div style={{ borderTop: "0.5px solid #333", paddingTop: "40px", marginBottom: "40px" }}>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", color: "#ccc", fontWeight: 300 }}>Contrato de Prestação de Serviços de Arquitetura</h1>
            <div style={{ fontSize: "8px", color: "#444", letterSpacing: "0.3em", textTransform: "uppercase", marginTop: "10px" }}>INSTRUMENTO PARTICULAR · A ARQUITETURA COMO DECISÃO</div>
          </div>

          <div style={{ flex: 1 }}>
            <Row label="Nº DO CONTRATO" value={c.numero} />
            <Row label="CONTRATANTE" value={c.nome_cliente} />
            <Row label="TIPO DE PROJETO" value={c.tipo_projeto} />
            <Row label="PLANO CONTRATADO" value={c.plano} />
            <Row label="ENDEREÇO DO IMÓVEL" value={c.endereco_imovel} />
            <Row label="VALOR TOTAL DOS HONORÁRIOS" value={`R$ ${c.valor_total} (${c.valor_total_extenso})`} />
            <Row label="PRAZO TOTAL ESTIMADO" value={`${c.prazo_semanas} semanas a partir da assinatura e entrega dos documentos`} />
            <Row label="DATA DE ASSINATURA" value={`São José dos Campos, SP | ${c.data}`} />

            <div style={{ marginTop: "40px", borderLeft: "2px solid #8B7355", paddingLeft: "20px" }}>
              <p style={{ fontStyle: "italic", fontSize: "11px", color: "#666", lineHeight: "1.6" }}>
                "A NL não projeta para impressionar. Projeta para funcionar — e o resultado impressiona porque cada decisão foi tomada antes de a obra começar."
              </p>
            </div>
          </div>

          <div style={{ fontSize: "8px", color: "#333", letterSpacing: "0.2em", textTransform: "uppercase", display: "flex", gap: "20px", marginTop: "40px" }}>
            <span>NL Arquitetos</span><span>·</span><span>São José dos Campos, SP</span><span>·</span><span>Versão 1.0</span>
          </div>

          {/* FOOTER TÉCNICO */}
          <div className="footer-tech">
            <div>NL Arquitetos</div>
            <div>NL-2026-{c.numero.split('-').pop()}</div>
            <div>Rubrica: __________/__________</div>
            <div>Pág. 1 de 10</div>
          </div>

        </div>

        {/* CLÁUSULAS COMPLETAS */}
        <div className="page-content">
          <div className="clause-title">CLÁUSULA PRIMEIRA — DAS PARTES ENVOLVIDAS NO CONTRATO</div>


          <div className="clause-body">
            <p><strong style={{ color: "#8B7355" }}>CONTRATANTE:</strong> {c.nome_cliente}, {c.nacionalidade || "brasileiro"}, {c.estado_civil || "casado"}, {c.profissao || "Engenheiro"}, portador do CPF nº {c.cpf_cliente}, residente e domiciliado em {c.endereco_cliente}, doravante denominado simplesmente CONTRATANTE.</p>
            <p><strong style={{ color: "#8B7355" }}>CONTRATADOS:</strong> Leandro Henrique da Silva, brasileiro, arquiteto e urbanista, inscrito no CAU nº A252250-0, portador do CPF nº 425.437.568-92 e Neandro Jacque Garcia, brasileiro, arquiteto e urbanista, inscrito no CAU nº A264629-3, portador do CPF nº 382.857.218-92, atuando sob a denominação fantasia NL Arquitetura e Interiores, doravante denominados conjuntamente CONTRATADOS.</p>
            <p>As partes, devidamente qualificadas, resolvem celebrar o presente Contrato de Prestação de Serviços de Arquitetura, o qual se regerá pela legislação brasileira aplicável, notadamente, quando aplicável, pelo Código de Defesa do Consumidor, pela Lei Federal nº 12.378/2010 (que regulamenta o exercício da Arquitetura e Urbanismo), pelas Resoluções nº 21 (Atribuições Profissionais) e nº 64 (Tabela de Honorários) do CAU/BR, pela Lei Federal nº 9.610/1998, que dispõe sobre direitos autorais, e, subsidiariamente, pelas disposições do Código Civil concernentes à prestação de serviços. O presente instrumento será interpretado e executado em conformidade com as referidas legislações, sendo as cláusulas aqui previstas aplicáveis naquilo que não contrariar as disposições legais cogentes, tendo as partes entre si justo e contratado o que segue.</p>
          </div>

          <div className="clause-title">CLÁUSULA SEGUNDA — DO OBJETO</div>
          <div className="clause-body">
            <p>2.1 O presente contrato tem por objeto a prestação de serviços técnicos profissionais de arquitetura pelos CONTRATADOS ao CONTRATANTE, compreendendo o desenvolvimento de projetos e/ou serviços relacionados à arquitetura e interiores.</p>
            <p>2.2 O escopo específico dos serviços, as etapas de desenvolvimento, os prazos, os honorários, a forma de pagamento e as demais condições particulares de cada projeto serão detalhadas nos Anexos deste contrato, que o integram para todos os efeitos legais, com a mesma validade e eficácia jurídica.</p>
          </div>

          <div className="clause-title">CLÁUSULA TERCEIRA — DOS SERVIÇOS OFERTADOS</div>
          <div className="clause-body">
            <p>3.1 Os serviços técnicos de arquitetura que poderão ser prestados pelos CONTRATADOS ao CONTRATANTE compreendem, de forma exemplificativa e não limitativa, atividades como: levantamento de dados e informações técnicas, elaboração de briefing e definição do programa de necessidades, desenvolvimento de estudos preliminares, anteprojeto, projeto legal para aprovação junto aos órgãos competentes, projeto executivo, compatibilização de projetos complementares, gerenciamento de projetos (se expressamente contratado) e demais atividades técnicas relacionadas ao desenvolvimento de projetos de arquitetura e/ou interiores, sendo que a definição específica do escopo dos serviços contratados, etapas de desenvolvimento e entregáveis será detalhada nos Anexos deste contrato, conforme Cláusula 3.2.</p>
            <p>3.2 A definição específica do escopo dos serviços, etapas de desenvolvimento, entregáveis e demais condições aplicáveis a cada projeto contratado será estabelecida nos Anexos deste contrato, que passam a integrá-lo para todos os fins de direito.</p>
            <p>3.3 Os serviços previstos nesta cláusula referem-se exclusivamente às atividades de desenvolvimento de projeto, não incluindo execução, gerenciamento ou acompanhamento de obra, salvo quando expressamente contratado.</p>
          </div>

          <div className="clause-title">CLÁUSULA QUARTA — DO PRAZO</div>
          <div className="clause-body">
            <p>4.1 Os prazos para execução dos serviços objeto deste contrato serão definidos nos Anexos correspondentes, nos quais constará o cronograma estimado de desenvolvimento das etapas do projeto.</p>
            <p>4.2 Os prazos estabelecidos possuem caráter estimativo e poderão sofrer ajustes a serem determinados e comunicados formalmente pelos CONTRATADOS ao CONTRATANTE, com a devida justificativa, em razão de fatores como: revisões solicitadas pelo CONTRATANTE, atraso no fornecimento de informações ou documentos necessários ao desenvolvimento do projeto, exigências de órgãos públicos, necessidade de adequações técnicas, superveniência de fatos imprevisíveis ou quaisquer outras circunstâncias que impactem o andamento regular dos serviços.</p>
            <p>4.3 Eventuais atrasos decorrentes de fatores alheios à atuação dos CONTRATADOS não caracterizarão inadimplemento contratual.</p>
          </div>

          <div className="clause-title">CLÁUSULA QUINTA — DAS ALTERAÇÕES</div>
          <div className="clause-body">
            <p>5.1 Cada etapa do projeto apresentada pelos CONTRATADOS contempla até 02 (duas) revisões, desde que as alterações solicitadas estejam relacionadas à proposta inicialmente desenvolvida e não impliquem mudança substancial do conceito arquitetônico previamente aprovado.</p>
            <p><strong style={{ color: "#8B7355" }}>Parágrafo único</strong> – A caracterização de mudança substancial do conceito arquitetônico será avaliada pelos CONTRATADOS, de forma justificada e documentada, com base em sua expertise técnica, nas normas aplicáveis e nos documentos de briefing e estudo preliminar aprovados.</p>
            <p>5.2 As solicitações de ajustes deverão ser realizadas pelo CONTRATANTE dentro do prazo de análise estabelecido neste contrato ou nos Anexos correspondentes, após a apresentação de cada etapa do projeto.</p>
            <p>5.2.1 A ausência de manifestação do CONTRATANTE dentro do prazo de análise estabelecido, conforme ANEXO II – Cronograma de Desenvolvimento do Projeto, implicará na aprovação tácita da etapa apresentada, para fins de continuidade do desenvolvimento do projeto, sem prejuízo da aplicação das demais disposições contratuais relativas a alterações posteriores.</p>
            <p>5.3 Caso o CONTRATANTE solicite mais de 02 (duas) rodadas de revisão em uma mesma etapa, ou alterações que impliquem mudanças significativas no conceito arquitetônico previamente aprovado, devidamente justificado e comprovado pelos CONTRATADOS, tais modificações serão consideradas serviços adicionais, cobradas por hora técnica conforme tabela de honorários praticada pelos CONTRATADOS, estando sujeitas à redefinição de prazos.</p>
            <p><strong style={{ color: "#8B7355" }}>Parágrafo único</strong> – A execução desses serviços adicionais dependerá da apresentação de proposta formal pelos CONTRATADOS, contendo a descrição do escopo, novos prazos e honorários correspondentes, bem como da aprovação expressa do CONTRATANTE.</p>
            <p>5.4 Alterações solicitadas após a aprovação formal de uma etapa serão consideradas serviços adicionais, sujeitas à análise de viabilidade técnica pelos CONTRATADOS, revisão de prazos e cobrança de honorários complementares. A aprovação formal de cada etapa do projeto pelo CONTRATANTE deverá ocorrer por meio de comunicação escrita (e-mail com confirmação de leitura, plataforma de gestão de projetos ou termo de aprovação assinado), dentro do prazo estabelecido, e implicará a concordância com as soluções apresentadas, encerrando a fase correspondente.</p>
            <p>5.5 Solicitações de alteração realizadas durante a etapa de Projeto Executivo, que impactem elementos previamente definidos, poderão gerar revisão de prazos e honorários, em razão do retrabalho técnico necessário. Tais serviços adicionais estarão sujeitos à cobrança de honorários, mediante apresentação de proposta formal e aprovação prévia do CONTRATANTE.</p>
            <p>5.6 Alterações decorrentes de exigências técnicas de órgãos públicos, prefeitura ou normas condominiais serão realizadas sem custo adicional ao CONTRATANTE, desde que não impliquem mudança substancial do conceito arquitetônico previamente aprovado.</p>
            <p><strong style={{ color: "#8B7355" }}>Parágrafo único</strong> – Caso tais exigências demandem alterações significativas no projeto ou revisão do conceito arquitetônico, os prazos serão ajustados e estarão sujeitos à honorários adicionais, mediante apresentação de novo orçamento e aprovação pelo CONTRATANTE.</p>
            <p>5.7 Quaisquer alterações solicitadas pelo CONTRATANTE após o início da execução da obra e que não decorram de vícios construtivos ou falhas de projeto imputáveis aos CONTRATADOS não fazem parte do escopo deste contrato, podendo ser realizadas mediante contratação adicional de serviços de revisão de projeto, com orçamento específico e aprovação prévia do CONTRATANTE.</p>
            <p>5.8 Após a aprovação do Projeto Executivo, o projeto será considerado tecnicamente finalizado, não estando incluídas revisões ou modificações posteriores no escopo deste contrato, salvo por acordo expresso entre as partes e mediante aditivo contratual que defina o escopo e os honorários adicionais.</p>
            <p>5.9 Os valores referentes a serviços adicionais serão definidos conforme tabela de honorários praticada pelos CONTRATADOS ou conforme referência da tabela de honorários do CAU/BR, mediante prévia comunicação e aprovação do CONTRATANTE.</p>
            <p>5.10 A aprovação de cada etapa do projeto pelo CONTRATANTE caracteriza a concordância com as soluções apresentadas, encerrando-se a fase correspondente.</p>
          </div>

          <div className="clause-title">CLÁUSULA SEXTA — DOS HONORÁRIOS</div>
          <div className="clause-body">
            <p>6.1 Em contrapartida aos serviços profissionais de arquitetura prestados em conformidade com este contrato, o CONTRATANTE compromete-se a pagar aos CONTRATADOS os honorários profissionais, bem como a respectiva forma de pagamento, conforme estabelecido no Anexo III – Honorários e Condições de Pagamento, que integra o presente instrumento para todos os fins de direito.</p>
            <p>6.2 O Anexo III especificará detalhadamente o valor total dos honorários, a forma de pagamento aplicável (incluindo, quando houver, valor de entrada, número e valor das parcelas, datas de vencimento e meios de pagamento aceitos), bem como eventuais condições comerciais acordadas entre as partes.</p>
            <p>6.3 Salvo disposição expressa em contrário e por escrito, mediante aditivo contratual específico, não estão incluídos nos honorários contratados, sendo de responsabilidade exclusiva do CONTRATANTE sua contratação e pagamento, os seguintes serviços, taxas ou despesas:</p>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>6.3.1 Projetos complementares, tais como: Projeto Estrutural (incluindo fundações), elétrico, hidrossanitário, prevenção e combate a incêndio, estudo de impacto de vizinhança, licenças ambientais, ou quaisquer outros projetos técnicos exigidos para execução da obra;</li>
              <li>6.3.2 Execução da obra, gerenciamento de obra ou responsabilidade técnica pela construção;</li>
              <li>6.3.3 Taxas, emolumentos e tributos relacionados à aprovação do projeto em órgãos públicos, prefeitura, condomínio, cartório, matrícula de obra no INSS ou quaisquer outros encargos legais;</li>
              <li>6.3.4 Custos de impressão, plotagem ou reprodução de plantas exigidas para protocolos ou aprovações.</li>
            </ul>
            <p>6.4 Em caso de atraso no pagamento de qualquer parcela, incidirão as penalidades especificadas no Anexo III.</p>
            <p>6.5 Caso, durante o desenvolvimento do projeto, ocorram alterações que impactem diretamente o escopo contratado ou os critérios utilizados para cálculo dos honorários – como, por exemplo, alteração significativa da área construída, mudança do programa arquitetônico ou inclusão de novos ambientes – os honorários poderão ser revisados, com base nos critérios de cálculo originalmente utilizados para a precificação do projeto (ex: valor por m² ou percentual sobre o custo estimado da obra) ou, na ausência de critério específico, conforme a tabela de honorários do CAU/BR ou tabela de honorários dos CONTRATADOS, mediante apresentação de nova proposta formal, mediante formalização de aditivo contratual e atualização do Anexo III, com a concordância expressa das partes. Na ausência de concordância expressa do CONTRATANTE com os honorários revisados para alterações significativas de escopo, os CONTRATADOS terão o direito de suspender a execução dos serviços até que a questão seja resolvida ou, alternativamente, rescindir o contrato, sendo devidos os honorários proporcionais aos serviços já executados até o momento da suspensão/rescisão, sem prejuízo de eventual ressarcimento de custos comprovadamente incorridos em razão da rescisão, a ser apurado em regular processo de liquidação, excluindo-se a aplicação de multa compensatória.</p>
          </div>

          {/* FOOTER TÉCNICO */}
          <div className="footer-tech">
            <div>NL Arquitetos</div>
            <div>NL-2026-{c.numero.split('-').pop()}</div>
            <div>Rubrica: __________/__________</div>
            <div>Pág. 2 de 12</div>
          </div>
        </div>

        <div className="page-content">
          <div className="clause-title">CLÁUSULA SÉTIMA — DAS OBRIGAÇÕES E RESPONSABILIDADES DO CONTRATANTE</div>
          <div className="clause-body">
            <p>Compete ao CONTRATANTE, para o correto desenvolvimento dos serviços contratados:</p>

            <p>7.1 Fornecer aos CONTRATADOS, de forma completa, verdadeira e tempestiva, todos os documentos, informações e dados necessários ao desenvolvimento do projeto, conforme especificado no Anexo I (Escopo dos Serviços) e eventuais solicitações técnicas adicionais realizadas pelos CONTRATADOS.</p>
            <p>7.2 Analisar e aprovar as etapas do projeto apresentadas pelos CONTRATADOS dentro dos prazos estabelecidos no Anexo II (Cronograma), comunicando eventuais solicitações de ajustes de forma clara e objetiva.</p>
            <p>7.3 Colaborar ativamente durante o processo de desenvolvimento do projeto, respondendo às solicitações dos CONTRATADOS dentro dos prazos estipulados.</p>
            <p>7.3.1 A ausência de manifestação ou atraso na aprovação das etapas pelo CONTRATANTE poderá suspender os prazos contratuais dos CONTRATADOS, bem como gerar revisão do cronograma.</p>
            <p>7.3.2 Caso solicitações tardias de alteração impliquem retrabalho técnico em etapas já aprovadas ou concluídas, os CONTRATADOS poderão cobrar honorários adicionais, conforme previsto neste contrato.</p>
            <p>7.4 Efetuar o pagamento dos honorários profissionais na forma, prazos e condições estabelecidas no Anexo III (Honorários e Condições de Pagamento).</p>
            <p>7.5 Obter todas as licenças, alvarás e aprovações necessárias junto aos órgãos públicos, condomínio ou demais instituições competentes para a execução da obra, arcando com todos os custos, taxas e emolumentos correspondentes, responsabilizando-se por apresentar os projetos complementares, quando exigidos.</p>
            <p>7.6 Contratar, obrigatoriamente, os profissionais responsáveis pelos projetos complementares indispensáveis à execução da obra, tais como:</p>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>7.6.1 Projeto estrutural;</li>
              <li>7.6.2 Projetos elétrico;</li>
              <li>7.6.3 Projetos hidrossanitário;</li>
              <li>7.6.4 Projetos de fundação;</li>
              <li>7.6.5 Projetos prevenção e combate a incêndio;</li>
              <li>7.6.6 Entre outros que se façam necessários para execução da obra.</li>
            </ul>
            <p>7.6.7 A contratação e coordenação dos projetos complementares são de responsabilidade do CONTRATANTE, salvo se tais serviços forem expressamente contratados junto aos CONTRATADOS por meio de instrumento específico.</p>
            <p>7.7 Contratar empresa construtora, empreiteiros ou profissionais responsáveis pela execução da obra.</p>
            <p>7.8 O CONTRATANTE compromete-se a cumprir todas as obrigações previstas neste contrato e seus anexos, bem como a agir com boa-fé e colaboração para o bom desenvolvimento dos serviços. A executar a obra em conformidade com o projeto elaborado pelos CONTRATADOS, sendo vedadas alterações sem a prévia autorização técnica e formal dos autores do projeto, sob pena de responsabilização, nos termos do art. 615 do Código Civil.</p>
            <p>7.9 Qualquer alteração realizada na obra sem a prévia autorização dos CONTRATADOS isentará estes de qualquer responsabilidade técnica, civil ou legal decorrente das modificações realizadas, conforme previsto no art. 615 do Código Civil.</p>
            <p>7.10 Caso o CONTRATANTE deseje realizar alterações no projeto durante a execução da obra, deverá comunicar formalmente os CONTRATADOS para análise técnica e eventual atualização do projeto, podendo tal serviço ser objeto de contratação adicional.</p>
            <p>7.11 O projeto arquitetônico constitui obra intelectual protegida pela Lei nº 9.610/1998 (Lei de Direitos Autorais) e pela Lei nº 12.378/2010, que regulamenta o exercício da Arquitetura e Urbanismo no Brasil.</p>
            <p>7.11.1 O CONTRATANTE compromete-se a não reproduzir, alterar, adaptar ou permitir a execução do projeto por terceiros sem autorização expressa dos CONTRATADOS.</p>
            <p>7.11.2 O descumprimento desta obrigação caracterizará violação de direitos autorais, sujeitando o CONTRATANTE ao pagamento de multa não inferior a 50% do valor total deste contrato, sem prejuízo de eventual indenização por perdas e danos e demais sanções legais cabíveis.</p>
            <p>7.12 Quando houver identificação do autor do projeto por meio de placa de obra, material de divulgação ou qualquer outro meio, o CONTRATANTE compromete-se a não remover tal identificação sem autorização prévia dos CONTRATADOS.</p>
          </div>

          {/* FOOTER TÉCNICO */}
          <div className="footer-tech">
            <div>NL Arquitetos</div>
            <div>NL-2026-{c.numero.split('-').pop()}</div>
            <div>Rubrica: __________/__________</div>
            <div>Pág. 3 de 12</div>
          </div>
        </div>

        <div className="page-content">
          <div className="clause-title">CLÁUSULA OITAVA — DAS OBRIGAÇÕES E RESPONSABILIDADES DOS CONTRATADOS</div>
          <div className="clause-body">
            <p>Compete aos CONTRATADOS:</p>

            <p>8.1 Prestar os serviços profissionais de arquitetura com diligência, competência e observância às normas técnicas aplicáveis, à legislação vigente ao Código de Ética e Disciplina do CAU/BR às boas práticas profissionais reconhecidas no setor.</p>
            <p>8.2 Elaborar o projeto arquitetônico em estrita conformidade com o escopo definido no Anexo I (Escopo dos Serviços), observando rigorosamente os prazos estabelecidos no Anexo II (Cronograma) e considerando integralmente as informações, documentos e diretrizes fornecidos pelo CONTRATANTE. O cumprimento das obrigações dos CONTRATADOS, incluindo prazos e qualidade do projeto, é condicionado ao adimplemento tempestivo e integral das obrigações do CONTRATANTE, notadamente no que se refere ao fornecimento de informações, documentos e obtenção de aprovações, conforme previsto na Cláusula Sétima.</p>
            <p>8.3 Manter o CONTRATANTE informado sobre o andamento do projeto, apresentando as etapas desenvolvidas para análise e aprovação dentro dos prazos previstos.</p>
            <p>8.4 Realizar as alterações e ajustes solicitados pelo CONTRATANTE, desde que tecnicamente viáveis e dentro dos limites estabelecidos neste contrato e em seus anexos, especialmente no que se refere à quantidade de revisões e à manutenção do conceito arquitetônico previamente aprovado.</p>
            <p>8.5 Manter sigilo sobre informações e documentos confidenciais do CONTRATANTE aos quais tiver acesso em razão deste contrato, comprometendo-se a utilizá-los exclusivamente para a execução dos serviços contratados.</p>
            <p>8.6 Emitir o Registro de Responsabilidade Técnica (RRT) referente aos serviços efetivamente prestados, nos termos da legislação aplicável.</p>
            <p>8.7 Elaborar o projeto observando a legislação urbanística municipal aplicável, o Código de Obras do Município e as normas técnicas pertinentes, incluindo, quando aplicável e dentro do escopo definido no Anexo I, as normas da Associação Brasileira de Normas Técnicas – ABNT, tais como: ABNT NBR 13532 – Elaboração de projetos de edificações, ABNT NBR 9050 – Acessibilidade a edificações, mobiliário, espaços e equipamentos urbanos, bem como demais normas técnicas pertinentes ao desenvolvimento do projeto arquitetônico, sempre em conformidade com as informações e diretrizes fornecidas pelo CONTRATANTE, e em observância ao Art. 25 da Lei nº 14.133/2021, que detalha o conteúdo obrigatório do edital, incluindo a observância das normas técnicas.</p>
            <p>8.8 Quando houver projetos complementares elaborados por terceiros, os CONTRATADOS poderão analisar tais documentos com a finalidade de identificar interferências aparentes com o projeto.</p>
            <p>8.8.1 Essa análise possui caráter não exaustivo e não configura responsabilidade dos CONTRATADOS pela compatibilização integral entre todos os projetos técnicos envolvidos na obra, salvo quando tal serviço for expressamente contratado.</p>
            <p>8.9 Os CONTRATADOS poderão utilizar imagens, plantas, renders, fotografias e demais representações do projeto ou da obra para fins de portfólio profissional, divulgação institucional ou material de marketing, desde que respeitadas as disposições da Lei Geral de Proteção de Dados (Lei nº 13.709/2018) e garantido o anonimato de informações confidenciais do CONTRATANTE.</p>
            <p>8.9.1 Na divulgação, os CONTRATADOS comprometem-se a preservar dados pessoais do CONTRATANTE que permitam sua identificação direta, em conformidade com a Lei Geral de Proteção de Dados – LGPD (Lei nº 13.709/2018).</p>
            <p>8.10 A responsabilidade dos CONTRATADOS limita-se à elaboração do projeto, nos termos deste contrato.</p>
            <p>8.10.1 Eventuais problemas decorrentes da execução da obra, interpretação inadequada do projeto, utilização de materiais divergentes das especificações ou ausência de acompanhamento técnico durante a construção não poderão ser imputados aos CONTRATADOS, conforme disposto nas cláusulas específicas de limitação de responsabilidade deste contrato.</p>
          </div>

          <div className="clause-title">CLÁUSULA NONA — DOS DIREITOS AUTORAIS</div>
          <div className="clause-body">
            <p>9.1 O Projeto desenvolvido no âmbito deste contrato constitui obra intelectual protegida pela Lei nº 9.610/1998 (Lei de Direitos Autorais) e pela Lei nº 12.378/2010, sendo reconhecido como criação técnica e artística dos CONTRATADOS.</p>
            <p>9.2 Os direitos autorais morais e patrimoniais sobre o projeto pertencem aos CONTRATADOS, nos termos da Lei nº 9.610/1998, bem como da Lei nº 12.378/2010, e do art. 80 da Lei nº 13.303/2016, que garante a propriedade intelectual de projetos técnicos.</p>
            <p>9.3 O CONTRATANTE, mediante o pagamento integral dos honorários estabelecidos no Anexo III (Honorários e Condições de Pagamento), adquire o direito de utilizar o projeto exclusivamente para a execução da obra no imóvel especificado no Anexo I (Escopo Detalhado dos Serviços), observadas as condições e limitações estabelecidas neste contrato, e desde que respeitados os direitos autorais dos CONTRATADOS, conforme a Lei nº 9.610/1998.</p>
            <p>9.4 Sem autorização prévia e expressa dos CONTRATADOS, a qual poderá ser concedida ou negada a critério exclusivo dos CONTRATADOS, o CONTRATANTE não poderá:</p>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>9.4.1 Reproduzir o projeto em outro terreno ou imóvel;</li>
              <li>9.4.2 Reutilizar total ou parcialmente o projeto em outra obra;</li>
              <li>9.4.3 Ceder, vender, compartilhar, encaminhar ou disponibilizar o projeto, total ou parcialmente, a terceiros... sendo o CONTRATANTE responsável solidariamente por qualquer violação.</li>
              <li>9.4.4 Modificar o projeto ou permitir modificações por outros profissionais;</li>
              <li>9.4.5 Utilizar o projeto para fins comerciais, publicitários ou de incorporação imobiliária.</li>
            </ul>
            <p>9.5 Qualquer alteração no projeto, seja durante a fase de desenvolvimento ou durante a execução da obra, somente poderá ser realizada mediante autorização expressa e por escrito dos CONTRATADOS.</p>
            <p>9.6 Aos CONTRATADOS é garantido o direito de utilizar imagens, plantas, renders e fotografias do projeto e da obra para fins de divulgação profissional em portfólio... em conformidade com a LGPD.</p>
            <p>9.7 Considera-se reprodução indevida a utilização total ou parcial do projeto para execução em outro imóvel ou empreendimento sem autorização dos CONTRATADOS.</p>
            <p>9.8 Para fins deste contrato, considera-se plágio a reprodução substancial do projeto arquitetônico... mesmo que sejam alterados materiais, cores, acabamentos ou detalhes construtivos.</p>
            <p>9.10 A utilização indevida, reprodução, cópia ou plágio do projeto arquitetônico implicará obrigação de indenização aos CONTRATADOS, sem prejuízo das medidas judiciais cabíveis.</p>
            <p>9.11 Alterações realizadas no projeto ou na obra dele resultante sem autorização dos CONTRATADOS caracterizam violação de direitos autorais, nos termos da Lei nº 9.610/1998 (Lei de Direitos Autorais), sujeitando o responsável ao pagamento de indenização mínima equivalente a 3 (três) vezes o valor total dos honorários contratuais, sem prejuízo de outras sanções legais cabíveis.</p>
            <p>9.12 O projeto somente poderá ser utilizado para execução da obra após a quitação integral dos honorários previstos neste contrato. A utilização do projeto antes da quitação caracteriza uso indevido de obra intelectual.</p>
          </div>

          <div className="clause-title">CLÁUSULA DÉCIMA — DA RESPONSABILIDADE TÉCNICA</div>
          <div className="clause-body">
            <p>10.1 A responsabilidade técnica dos CONTRATADOS, no âmbito deste contrato, restringe-se à elaboração do projeto, conforme o escopo definido no Anexo I (Escopo Detalhado dos Serviços), observadas as normas técnicas aplicáveis, a legislação vigente e as diretrizes do contratante.</p>
            <p>10.2 A responsabilidade integral pela execução da obra, incluindo a contratação de mão de obra, construtores, fornecedores e outros profissionais necessários à construção, recai exclusivamente sobre o CONTRATANTE.</p>
            <p>10.3 Os CONTRATADOS não se responsabiliza por:</p>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>10.3.1 A execução da obra, que é de inteira responsabilidade do CONTRATANTE e/ou dos profissionais por ele contratados.</li>
              <li>10.3.2 A qualidade dos materiais utilizados na obra, que é de inteira responsabilidade do CONTRATANTE e/ou dos fornecedores.</li>
              <li>10.3.3 O cumprimento dos prazos de execução da obra, que é de inteira responsabilidade do CONTRATANTE e/ou dos profissionais por ele contratados.</li>
              <li>10.3.4 Eventuais vícios ou defeitos na obra decorrentes de falhas na execução, na qualidade dos materiais ou no cumprimento dos prazos.</li>
              <li>10.3.5 A compatibilização do projeto arquitetônico com os projetos complementares (estrutural, elétrico, hidrossanitário etc.), que é de inteira responsabilidade do CONTRATANTE e/ou dos profissionais por ele contratados, salvo se expressamente previsto em contrário no Anexo I.</li>
            </ul>
            <p>10.4 Caso o CONTRATANTE realize alterações no projeto arquitetônico sem a prévia e expressa autorização por escrito dos CONTRATADOS, estes ficarão isentos de qualquer responsabilidade técnica, civil ou legal decorrente dessas modificações, conforme o art. 615 do Código Civil.</p>
            <p>10.5 A execução da obra em desacordo com o Projeto aprovado, ou sem observância das orientações técnicas fornecidas, exime os CONTRATADOS de qualquer responsabilidade civil, técnica ou legal sobre eventuais problemas construtivos, estruturais ou funcionais da edificação, desde que comprovada a relação de causalidade entre o descumprimento das orientações e os problemas apresentados.</p>
            <p>10.6 O presente contrato não inclui serviços de acompanhamento técnico de obra, fiscalização ou gerenciamento de execução, os quais somente poderão ser realizados mediante contratação específica e formalização de contrato adicional.</p>
          </div>

          {/* FOOTER TÉCNICO */}
          <div className="footer-tech">
            <div>NL Arquitetos</div>
            <div>NL-2026-{c.numero.split('-').pop()}</div>
            <div>Rubrica: __________/__________</div>
            <div>Pág. 4 de 12</div>
          </div>
        </div>

        <div className="page-content">
          <div className="clause-title">CLÁUSULA DÉCIMA PRIMEIRA — DA RESCISÃO CONTRATUAL</div>
          <div className="clause-body">
            <p>O presente contrato poderá ser rescindido por qualquer das partes, mediante notificação formal por escrito, observadas as condições e prazos estabelecidos nesta cláusula, nas demais disposições contratuais aplicáveis e na legislação vigente.</p>

            <p><strong style={{ color: "#8B7355" }}>11.1 RESCISÃO POR INICIATIVA DO CONTRATANTE</strong></p>
            <p>11.1.1 Caso o CONTRATANTE opte por rescindir o contrato antes da conclusão total dos serviços:
              <br />I – Os valores pagos até a data da rescisão não serão devolvidos, considerando que correspondem às etapas já executadas.
              <br />II – O CONTRATANTE deverá quitar o valor proporcional referente às etapas em andamento ou já executadas e ainda não faturadas.
              <br />III – Será aplicada multa compensatória de 20% sobre o saldo contratual remanescente, a título de compensação pela interrupção dos serviços.
              <br />IV – Os documentos e materiais produzidos somente poderão ser utilizados após a quitação integral.</p>
            
            <p><strong style={{ color: "#8B7355" }}>11.2 RESCISÃO POR INICIATIVA DOS CONTRATADOS</strong></p>
            <p>11.2.1 Os CONTRATADOS poderão rescindir o presente contrato nos seguintes casos, mediante notificação prévia de 15 (quinze) dias:
              <br />I – Atraso superior a 30 (trinta) dias no pagamento;
              <br />II – Descumprimento de obrigações contratuais por parte do CONTRATANTE;
              <br />III – Impossibilidade técnica ou legal de continuidade do projeto;
              <br />IV – Falta de fornecimento de informações por prazo superior a 30 (trinta) dias.</p>
            <p>11.3 Na hipótese de rescisão sem a quitação integral, fica expressamente vedada ao CONTRATANTE a utilização total ou parcial do projeto arquitetônico, sob pena de violação de direitos autorais.</p>
            <p>11.4 Após a rescisão, os CONTRATADOS não terão qualquer responsabilidade técnica sobre modificações ou utilizações do projeto realizadas sem sua participação.</p>
          </div>

          <div className="clause-title">CLÁUSULA DÉCIMA SEGUNDA — CONSIDERAÇÕES FINAIS</div>
          <div className="clause-body">
            <p>Esta cláusula estabelece disposições complementares aplicáveis à execução do presente contrato e aos anexos que o integram.</p>
            <p>12.1 Execução da obra decorrente do projeto objeto deste contrato não está incluída no escopo dos serviços contratados, sendo que eventual contratação de acompanhamento, gerenciamento ou execução da obra deverá ser objeto de contrato específico e independente.</p>
            <p>12.2 Os CONTRATADOS, na qualidade de autor do projeto, ficam isentos de quaisquer responsabilidades técnicas ou legais decorrentes de alterações executadas na obra sem sua prévia ciência e autorização por escrito. É obrigação do CONTRATANTE solicitar e obter tal autorização, por escrito, antes de qualquer alteração, sob pena de responsabilização. Os CONTRATADOS poderão adotar as medidas legais cabíveis para proteção de seus direitos autorais e de sua responsabilidade profissional, incluindo, mas não se limitando a ações de reparação por danos morais e materiais, bem como a aplicação do disposto no art. 619 do Código Civil.</p>
            <p>12.3 O início dos serviços objeto deste contrato está condicionado à assinatura do presente instrumento e à comprovação do pagamento da primeira parcela ou sinal contratual, devendo o comprovante ser encaminhado aos CONTRATADOS.</p>
            <p>12.4 Os atendimentos ao CONTRATANTE poderão ocorrer presencialmente, mediante agendamento prévio com antecedência mínima de 7 (sete) dias úteis, dentro do horário comercial, compreendido entre 08h00 às 12h00 e 14h00 às 18h00, de segunda a sexta-feira. Adicionalmente, os atendimentos poderão ocorrer de forma virtual (por videoconferência, por exemplo), mantendo a necessidade de agendamento prévio e horário comercial.</p>
            <p>12.4.1 Caso seja necessária visita presencial ao local da obra ou deslocamento externo, será aplicada a taxa de visita técnica a ser previamente acordada entre as partes ou conforme tabela de honorários dos CONTRATADOS prevista neste contrato.</p>
            <p>12.5 Todas as comunicações relevantes relacionadas ao presente contrato, incluindo aprovações de etapas, solicitações de alterações e notificações contratuais, deverão ser realizadas obrigatoriamente por e-mail ou outro meio eletrônico formal, sendo consideradas válidas para fins contratuais.</p>
            <p>12.6 O CONTRATANTE compromete-se a fornecer todas as informações, documentos e definições necessárias para o desenvolvimento do projeto no prazo máximo de 5 (cinco) dias úteis a contar da solicitação, salvo quando prazos específicos forem definidos em outras cláusulas deste contrato.</p>
            <p>12.6.1 Eventuais atrasos decorrentes da não entrega dessas informações poderão impactar diretamente o cronograma do projeto, sem que isso caracterize descumprimento contratual por parte dos CONTRATADOS.</p>
            <p>12.7 Caso ocorram alterações na legislação urbanística ou nas normas técnicas aplicáveis após a conclusão do projeto, eventuais adequações necessárias poderão ser objeto de aditivo contratual, conforme previsto no Art. 81 da Lei nº 13.303/2016, que estabelece as condições para alteração contratual por adequação técnica.</p>
          </div>

          <div className="clause-title">CLÁUSULA DÉCIMA TERCEIRA — DA LIMITAÇÃO DE RESPONSABILIDADE CIVIL DO PROJETO</div>
          <div className="clause-body">
            <p>13.1 A responsabilidade civil dos CONTRATADOS limita-se à elaboração do projeto arquitetônico objeto do presente contrato, estritamente conforme as informações, documentos e diretrizes fornecidas pelo CONTRATANTE, cuja veracidade, precisão e completude são de sua exclusiva responsabilidade. Custos adicionais, atrasos no cronograma ou necessidade de retrabalho decorrentes da imprecisão, omissão, incompletude ou inveracidade das informações, documentos e diretrizes fornecidas pelo CONTRATANTE serão de sua exclusiva responsabilidade, gerando a cobrança de honorários complementares e revisão de prazos para os CONTRATADOS, mediante apresentação de justificativa técnica e planilha de custos.</p>
            <p>13.2 Os CONTRATADOS não poderão ser responsabilizados por danos, prejuízos ou consequências decorrentes de modificações, execuções ou utilizações do projeto realizadas sem sua participação ou aprovação formal, bem como por informações incorretas ou omissões nas especificações fornecidas pelo CONTRATANTE.</p>
            <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
              <li>I – Execução da obra realizada por profissionais, empresas ou prestadores de serviço que não possuam vínculo contratual com os CONTRATADOS;</li>
              <li>II – Utilização de materiais ou técnicas construtivas divergentes das especificações constantes no projeto;</li>
              <li>III – modificações realizadas no projeto ou durante a execução da obra sem autorização prévia e expressa dos CONTRATADOS;</li>
              <li>IV – Falhas construtivas, estruturais, elétricas, hidráulicas ou de quaisquer outras instalações decorrentes da execução da obra;</li>
              <li>V – Informações técnicas incorretas, incompletas ou omissas fornecidas pelo CONTRATANTE ou por terceiros;</li>
              <li>VI – Descumprimento de normas técnicas, urbanísticas, legais ou regulamentares durante a execução da obra.</li>
              <li>VII – alterações na legislação urbanística, normas técnicas ou regulamentares que entrem em vigor ou sejam interpretadas de forma diversa após a aprovação final do projeto pelos órgãos competentes ou pelo CONTRATANTE, e que não eram previsíveis no momento da elaboração do projeto.</li>
              <li>VIII – eventos de força maior ou caso fortuito, incluindo, mas não se limitando a desastres naturais, pandemias, greves, atos de terrorismo ou guerra, que impeçam ou dificultem a execução do projeto ou da obra.</li>
            </ul>
            <p>13.3 A responsabilidade civil dos CONTRATADOS, caso configurada, estará limitada ao valor total dos honorários efetivamente recebidos em contraprestação ao serviço objeto deste contrato, excluindo-se expressamente a cobertura de indenizações por danos indiretos, lucros cessantes, perdas financeiras ou quaisquer outros prejuízos que possam advir da execução da obra.</p>
            <p>13.4 Os CONTRATADOS não assumem responsabilidade técnica pela execução da obra, gerenciamento, fiscalização ou acompanhamento da construção, salvo se tais serviços forem contratados de forma expressa por meio de instrumento contratual específico.</p>
          </div>

          {/* FOOTER TÉCNICO */}
          <div className="footer-tech">
            <div>NL Arquitetos</div>
            <div>NL-2026-{c.numero.split('-').pop()}</div>
            <div>Rubrica: __________/__________</div>
            <div>Pág. 5 de 12</div>
          </div>
        </div>

        <div className="page-content">
          <div className="clause-title">CLÁUSULA DÉCIMA QUARTA — DO FORO</div>
          <div className="clause-body">
            <p>14.1 Para dirimir quaisquer controvérsias oriundas do presente contrato, as partes elegem o foro da comarca de São José dos Campos - SP, com renúncia expressa a qualquer outro, por mais privilegiado que seja salvo disposição legal em contrário.</p>

            <p>14.2 As partes, em comum acordo, poderão submeter eventuais conflitos à mediação, conciliação ou arbitragem, em conformidade com a Lei nº 9.307/96 e demais legislações aplicáveis. É condição para o ajuizamento de qualquer medida judicial ou arbitral que as partes busquem, previamente, a resolução dos conflitos por meio de mediação ou conciliação, durante um período mínimo de 30 (trinta) dias, contados a partir da notificação de uma parte à outra sobre a existência do conflito, sob pena de extinção do processo sem resolução do mérito.</p>
            <p>14.3 O presente contrato constitui título executivo extrajudicial, nos termos da legislação brasileira aplicável.</p>
          </div>
          
          {/* FOOTER TÉCNICO */}
          <div className="footer-tech">
            <div>NL Arquitetos</div>
            <div>NL-2026-{c.numero.split('-').pop()}</div>
            <div>Rubrica: __________/__________</div>
            <div>Pág. 6 de 12</div>
          </div>
        </div>


        {/* ASSINATURAS */}
        <div className="page-content">
          <h2 className="annex-title">Assinaturas</h2>

          <div className="clause-body">
            <p>E, por estarem assim justas e contratadas, as partes assinam o presente instrumento em 02 (duas) vias de igual teor e forma, juntamente com duas testemunhas, para que produza seus jurídicos e legais efeitos, obrigando-se as partes, seus herdeiros e sucessores.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginTop: "60px" }}>
            <div style={{ borderTop: "1px solid #333", paddingTop: "10px", textAlign: "center" }}>
              <div style={{ fontSize: "10px", color: "#fff" }}>{c.nome_cliente}</div>
              <div style={{ fontSize: "7px", color: "#555", textTransform: "uppercase" }}>Contratante</div>
            </div>
            <div style={{ borderTop: "1px solid #333", paddingTop: "10px", textAlign: "center" }}>
              <div style={{ fontSize: "10px", color: "#fff" }}>NL ARQUITETOS</div>
              <div style={{ fontSize: "7px", color: "#555", textTransform: "uppercase" }}>Contratados</div>
            </div>
            <div style={{ borderTop: "1px solid #333", paddingTop: "10px", textAlign: "center" }}>
              <div style={{ fontSize: "10px", color: "#fff" }}>Leandro Henrique da Silva</div>
              <div style={{ fontSize: "7px", color: "#555", textTransform: "uppercase" }}>Sócio Diretor</div>
            </div>
            <div style={{ borderTop: "1px solid #333", paddingTop: "10px", textAlign: "center" }}>
              <div style={{ fontSize: "10px", color: "#fff" }}>Neandro Jacque Garcia</div>
              <div style={{ fontSize: "7px", color: "#555", textTransform: "uppercase" }}>Sócio Diretor</div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "40px", fontSize: "10px", color: "#666" }}>
            São José dos Campos – SP, {c.data}
          </div>

          {/* FOOTER TÉCNICO */}
          <div className="footer-tech">
            <div>NL Arquitetos</div>
            <div>NL-2026-{c.numero.split('-').pop()}</div>
            <div>Rubrica: __________/__________</div>
            <div>Pág. 7 de 12</div>
          </div>
        </div>


        {/* ANEXO I — ESCOPO DOS SERVIÇOS DE PROJETO */}
        <div className="page-content">
          <h2 className="annex-title">ANEXO I — ESCOPO DOS SERVIÇOS DE PROJETO</h2>

          <div className="clause-body">
            <p style={{ fontStyle: "italic" }}>Integra o Contrato de Prestação de Serviços de Arquitetura — NL Arquitetos</p>
            <p>1.1 O presente Anexo, rubricado e assinado pelas partes, integra de forma indissociável o Contrato de Prestação de Serviços de Arquitetura celebrado entre CONTRATANTE e os CONTRATADOS, tendo por finalidade a definição e delimitação do escopo dos serviços técnicos especializados a serem executados, em conformidade com as disposições estabelecidas no instrumento contratual principal.</p>
            <p>1.2 A delimitação dos serviços objeto deste contrato será realizada por meio da seleção das modalidades de projeto indicadas a seguir, podendo o CONTRATANTE optar pela contratação de uma ou mais modalidades, conforme suas necessidades.</p>
            
            <p><strong style={{ color: "#8B7355" }}>2.0 IDENTIFICAÇÃO DO PROJETO</strong></p>
            <p>Em relação aos serviços técnicos especializados objeto do presente contrato, concernentes ao desenvolvimento de projetos, as partes, em comum acordo, assinalam a seguinte modalidade a ser executada pelos CONTRATADOS:</p>
            
            <p><strong>2.1 [ {c.tipo_projeto === 'ARQ' || c.tipo_projeto === 'ARQ+INT' ? 'X' : ' '} ] PROJETO DE ARQUITETURA RESIDENCIAL</strong><br />
            Elaboração e desenvolvimento integral do projeto arquitetônico destinado à construção de edificação para fins de uso exclusivamente residencial, em conformidade com as normas técnicas aplicáveis e a legislação urbanística vigente.</p>
            
            <p><strong>2.2 [ {c.tipo_projeto === 'COM' ? 'X' : ' '} ] PROJETO DE ARQUITETURA COMERCIAL</strong><br />
            Elaboração de projeto arquitetônico abrangente, destinado à construção, reforma ou adaptação de edificações ou espaços físicos, com a finalidade precípua de abrigar atividades de natureza comercial ou de prestação de serviços, em estrita conformidade com as normas técnicas e legais aplicáveis.</p>
            
            <p><strong>2.3 [ {c.tipo_projeto === 'INT' || c.tipo_projeto === 'ARQ+INT' ? 'X' : ' '} ] PROJETO DE ARQUITETURA DE INTERIORES</strong><br />
            Elaboração de projeto de arquitetura de interiores, compreendendo a concepção, planejamento e desenvolvimento de soluções técnicas e estéticas destinadas à organização, funcionalidade e ambientação dos espaços internos.</p>

            <p><strong style={{ color: "#8B7355" }}>3.0 IDENTIFICAÇÃO DO IMOVEL</strong></p>
            <p>3.1 O projeto objeto do presente contrato refere-se ao imóvel localizado em: <br /><strong>{c.endereco_imovel}</strong></p>
            
            <p>3.1.1 Tipo de Imóvel<br />
            [ ] Terreno<br />
            [ ] Residência Existente<br />
            [ ] Apartamento<br />
            [ ] Sala Comercial<br />
            [ X ] Outro: {c.tipo_projeto}</p>

            <p>3.2 Quando se tratar de projeto arquitetônico para construção, o imóvel possui área aproximada de {c.area_terreno} m² de terreno, com previsão estimada de {c.area_construida} m² de área construída, podendo esta sofrer ajustes ao longo do desenvolvimento do projeto, conforme necessidades técnicas, legais ou programáticas identificadas durante o processo de concepção.</p>
            
            <p>3.4 O desenvolvimento do projeto será realizado com base nas informações, documentos e medidas fornecidos pelo CONTRATANTE ou por profissionais por ele indicados, incluindo, mas não se limitando a levantamento cadastral, levantamento topográfico ou documentação técnica do imóvel. Os CONTRATADOS não se responsabilizam por eventuais divergências, inconsistências ou imprecisões contidas nesses documentos, sendo do CONTRATANTE a responsabilidade por sua correção e veracidade.</p>
            
            <p>3.5 Matrícula do Imóvel (quando aplicável)<br />
            Matrícula nº: {c.matricula} Cartório: {c.cartorio}</p>
            <p><strong style={{ color: "#8B7355" }}>4.0 ESCOPO DOS SERVIÇOS</strong></p>
            <p>4.1 Os serviços técnicos a serem prestados pelos CONTRATADOS compreendem o desenvolvimento do projeto arquitetônico conforme a modalidade assinalada na Cláusula 2.0 – Identificação do Projeto, observadas as etapas descritas neste item.</p>
            <p>4.2 As etapas abaixo descrevem as atividades técnicas que poderão compor o desenvolvimento do projeto, conforme a natureza e modalidade do serviço contratado.</p>
            
            <p><strong>4.2.1 Levantamento de dados</strong></p>
            <p>4.2.1.1 Levantamento técnico do imóvel ou terreno - Verificação dos documentos disponíveis do terreno ou da edificação existente, como matrícula, escritura, levantamento planialtimétrico, projetos anteriores ou “as built”, quando houver, com o objetivo de identificar informações relevantes para o desenvolvimento do projeto.</p>
            <p>4.2.1.2 Análise documental e condicionantes legais - Levantamento e análise da documentação técnica e legal necessária ao desenvolvimento do projeto, incluindo normas aplicáveis, projetos existentes, documentos do imóvel e demais informações relevantes. Os CONTRATADOS não se responsabilizam pela veracidade, completude ou precisão das informações e documentos fornecidos pelo CONTRATANTE, sendo a responsabilidade por eventuais prejuízos ou atrasos decorrentes de dados incorretos ou incompletos do CONTRATANTE. A análise realizada pelos CONTRATADOS possui caráter meramente informativo, não substituindo levantamentos técnicos especializados, tais como levantamento topográfico, cadastral ou sondagem de solo.</p>
            <p>4.2.1.3 Análise da legislação municipal - Estudo da legislação urbanística municipal vigente aplicável ao imóvel, incluindo parâmetros de uso e ocupação do solo, recuos obrigatórios, Taxa de Ocupação (TO) e Coeficiente de Aproveitamento (CA) e demais condicionantes legais que possam influenciar o desenvolvimento do projeto.</p>
            
            <p><strong>4.2.2 Briefing e Programa de Necessidades</strong></p>
            <p>4.2.2.1 Reunião Inicial com o CONTRATANTE - Realização de reunião para compreensão dos objetivos, expectativas e diretrizes iniciais do projeto.</p>
            <p>4.2.2.2 Definição do programa de necessidades - Levantamento e definição dos ambientes, funções, dimensões aproximadas e demais requisitos necessários para o adequado desenvolvimento do projeto arquitetônico.</p>
            <p>4.2.2.3 Análise de referências arquitetônicas - Avaliação de referências estéticas, funcionais e conceituais apresentadas pelo CONTRATANTE ou sugeridas pelos CONTRATADOS, com o objetivo de alinhar a linguagem arquitetônica e o conceito do projeto.</p>
            
            <p><strong>4.2.3 Estudo Preliminar</strong></p>
            <p>4.2.3.1 Visita Técnica ao local - Realização de visita técnica ao terreno ou imóvel para reconhecimento das condições físicas do local, análise do entorno, acessos e demais características que possam influenciar o desenvolvimento do projeto.</p>
            <p>4.2.3.2 Planta baixa com Layout Preliminar - Elaboração de planta baixa com proposta inicial de organização espacial e distribuição dos ambientes, considerando o programa de necessidades definido junto ao CONTRATANTE.</p>
            <p>4.2.3.3 Estudo de Insolação - Análise da orientação solar do terreno ou da edificação, com o objetivo de orientar a implantação e o posicionamento dos ambientes de forma a favorecer o conforto térmico e a eficiência da edificação.</p>
            <p>4.2.4.1 Imagens renderizadas das fachadas principais da edificação, em quantidade a ser definida em conjunto com o CONTRATANTE - Elaboração de imagens realistas em perspectiva tridimensional das fachadas principais da edificação, incluindo vistas frontal e posterior, com o objetivo de facilitar a visualização do conceito arquitetônico proposto.</p>
            <p>4.2.4.2 Vídeo de apresentação 3D - Produção de vídeo de apresentação do modelo tridimensional do projeto, permitindo melhor compreensão dos volumes, proporções e características arquitetônicas da edificação.</p>
            
            <p><strong>4.2.5 Projeto Legal</strong></p>
            <p>4.2.5.1 Elaboração da documentação para aprovação - Desenvolvimento e entrega do conjunto de desenhos técnicos e documentos necessários para submissão e aprovação do projeto arquitetônico junto aos órgãos públicos competentes e, quando aplicável, junto ao condomínio.</p>
            <p>4.2.5.2 Atendimento às exigências dos órgãos responsáveis - Estão contempladas nesta etapa as eventuais adequações e ajustes solicitados pelos órgãos de análise durante o processo de aprovação do projeto. Caso as exigências dos órgãos de análise impliquem em alterações substanciais no conceito arquitetônico previamente aprovado ou demandem retrabalho significativo que extrapole o escopo original, os CONTRATADOS poderão reavaliar o escopo e os honorários, conforme previsto na Cláusula Quinta, item 5.6, e Cláusula Sexta, item 6.6.1, se aplicável.</p>
            <p>4.2.5.3 Acompanhamento do processo de aprovação - Realização do acompanhamento do processo de aprovação junto aos órgãos competentes, com verificações periódicas e contato com periodicidade mínima quinzenal, até a conclusão da análise do projeto. O acompanhamento consiste na verificação do status e comunicação com os órgãos competentes, não garantindo prazos de resposta ou aprovação que são de responsabilidade exclusiva dos órgãos públicos.</p>
            <p>4.2.5.4 Protocolização do projeto nos órgãos competentes - Submissão e condução do processo de aprovação do projeto arquitetônico perante os órgãos responsáveis, conforme exigências da legislação vigente e normas aplicáveis.</p>
            
            <p><strong>4.2.6 Projeto Executivo De Arquitetura</strong></p>
            <p>4.2.6.1 O Projeto Executivo corresponde à etapa final de desenvolvimento do projeto arquitetônico, necessárias para compreensão arquitetônica e orientação da execução da obra. A apresentação desta etapa será realizada por meio dos seguintes documentos técnicos:</p>
            <ul>
              <li>Planta de layout</li>
              <li>Planta construtiva</li>
              <li>Planta paginação de piso</li>
              <li>Planta luminotécnica ¹</li>
              <li>Planta de teto</li>
              <li>Indicação de pontos elétricos e luminotécnicos ¹</li>
              <li>Indicação de pontos de ar-condicionado¹</li>
              <li>Planta de cobertura com indicação de caixas d’águas, seus acessos e fechamentos, caso existam.</li>
              <li>Detalhamentos de esquadrias</li>
              <li>Elevações e Cortes da casa</li>
            </ul>
            <p><strong>4.2.7 Visitas De Acompanhamento</strong></p>
            <p>4.2.7.1 No decorrer do desenvolvimento do projeto arquitetônico, os CONTRATADOS poderão orientar tecnicamente o CONTRATANTE na escolha de materiais e elementos construtivos previstos, como revestimentos, esquadrias, acabamentos e outros itens relevantes para a arquitetura da edificação. Esta orientação consiste em sugestões de tipologias e características gerais dos materiais, não incluindo pesquisa exaustiva de fornecedores, cotações detalhadas ou elaboração de memoriais descritivos extensos, salvo se contratado como serviço adicional.</p>
            <p>4.2.7.2 Essa orientação tem como objetivo auxiliar o CONTRATANTE na correta interpretação das especificações indicadas no projeto, garantindo coerência técnica, estética e funcional durante a execução da obra.</p>
            <p>4.2.7.3 As visitas em lojas e showrooms para curadoria de materiais e acabamentos estão incluídas conforme o plano contratado: no Plano Completo, estão incluídas visitas em lojas para curadoria conjunta de materiais, acabamentos e mobiliário, conforme quantidade definida no Anexo I por tipo de projeto. No Plano Executivo, visitas adicionais em lojas podem ser contratadas como serviço adicional, conforme Anexo IV. As visitas deverão ser previamente agendadas, conforme disponibilidade das partes.</p>
            <p>4.2.7.4 Caso o CONTRATANTE solicite acompanhamentos adicionais, estes poderão ser realizados mediante contratação e remuneração à parte, conforme valores praticados pelo escritório.</p>
            
            <p>4.3 A aplicação das etapas descritas na cláusula 4.2 ocorrerá conforme a modalidade de projeto contratada, conforme indicado a seguir.</p>
            
            <p><strong>4.3.1 Nos casos de contratação de Projeto de Arquitetura Residencial, poderão ser aplicadas as seguintes etapas:</strong><br />
            • Levantamento de dados • Briefing e programa de necessidades • Estudo preliminar • Concepção tridimensional (3D), quando aplicável • Projeto legal para aprovação nos órgãos competentes • Projeto executivo de arquitetura • Orientação para seleção de materiais, (conforme detalhado no item 4.2.7.1)</p>
            
            <p><strong>4.3.2 Nos casos de contratação de Projeto de Arquitetura Comercial, poderão ser aplicadas as seguintes etapas:</strong><br />
            • Levantamento de dados • Briefing e programa de necessidades • Estudo preliminar • Concepção tridimensional (3D), quando aplicável • Projeto legal para aprovação nos órgãos competentes • Projeto executivo de arquitetura • Orientação para seleção de materiais, (conforme detalhado no item 4.2.7.1)</p>
            
            <p><strong>4.3.3 Nos casos de contratação de Projeto de Arquitetura de Interiores, poderão ser aplicadas as seguintes etapas:</strong><br />
            • Levantamento de dados do imóvel • Briefing e programa de necessidades • Estudo preliminar de layout • Concepção tridimensional (3D), quando aplicável • Anteprojeto de interiores • Projeto executivo de interiores • Orientação para seleção de materiais.</p>
            
            <p>4.3.3.1 Nos projetos de interiores não se aplica a etapa de Projeto Legal, salvo quando houver intervenções que exijam aprovação junto a órgãos públicos ou condomínio.</p>
            
            <p><strong>4.3.4 CADERNOS TÉCNICOS ENTREGUES POR MODALIDADE</strong><br />
            Os cadernos técnicos entregues ao final do projeto variam conforme a modalidade contratada (Arquitetura+Interiores, Interiores ou Comercial) e o plano selecionado (Executivo ou Completo), conforme detalhado abaixo.</p>

            <p><strong>4.3.4.1 — ARQUITETURA + INTERIORES</strong><br />
            <strong>Cadernos de Arquitetura (Planos Executivo e Completo):</strong><br />
            Caderno I — Caderno Geral: índice, situação, layout, planta construtiva, paginação de piso, forro, luminotécnico<br />
            Caderno II — Mapas de Instalações (em parceria com engenheiros especializados): elétrico, hidráulico, ar-condicionado, gás, revestimentos<br />
            Caderno III — Detalhes Construtivos: detalhamentos gerais, representação por ambiente, esquadrias, marmoraria, marcenaria, porcelanataria<br />
            Caderno IV — Memorial Descritivo: componentes construtivos identificados, localizados e quantificados por ambiente</p>
            
            <p><strong>Cadernos de Interiores (exclusivo Plano Completo):</strong><br />
            Caderno I — Caderno Geral: capa, imagens aprovadas, quadros quantitativos, layout, demolir/construir, construtiva, paginação, revestimentos, forro, luminotécnico, instalações<br />
            Caderno II — Caderno de Detalhes Construtivos: graficação de todos os detalhes necessários para execução<br />
            Caderno III — Caderno de Ambientes: especificações completas por ambiente com localizações de vistas e siglas de materiais<br />
            Caderno IV — Caderno de Esquadrias: especificação e localização de todas as esquadrias novas com detalhamento para fabricação<br />
            Caderno V — Caderno de Marmoraria: bancadas, soleiras, bordas, nichos e elementos em pedra natural<br />
            Caderno VI — Caderno de Porcelanataria: paginação, perfis, fixação e intervenções em revestimentos cerâmicos por ambiente<br />
            Caderno VII — Caderno de Marcenaria: detalhamento completo de todo mobiliário fabricado sob medida</p>
            
            <p><strong>Visualização 3D (exclusivo Plano Completo):</strong><br />
            Concepção 3D de Alta Fidelidade: imagens renderizadas dos principais ambientes<br />
            Vídeo 3D 360°: apresentação imersiva do projeto antes da obra</p>

            <p><strong>4.3.4.2 — APENAS INTERIORES</strong><br />
            <strong>Plano Executivo:</strong><br />
            Caderno I — Caderno Geral: capa, imagens aprovadas, quadros quantitativos, layout, demolir/construir, construtiva, paginação, revestimentos, forro, luminotécnico, instalações<br />
            Caderno II — Caderno de Detalhes Construtivos: graficação de todos os detalhes necessários para execução<br />
            Caderno VII — Caderno de Marcenaria: detalhamento completo de todo mobiliário fabricado sob medida</p>
            
            <p><strong>Plano Completo (inclui Executivo +):</strong><br />
            Caderno III — Caderno de Ambientes: especificações completas por ambiente com localizações de vistas e siglas de materiais<br />
            Caderno IV — Caderno de Esquadrias: especificação e localização de todas as esquadrias novas com detalhamento para fabricação<br />
            Caderno V — Caderno de Marmoraria: bancadas, soleiras, bordas, nichos e elementos em pedra natural<br />
            Caderno VI — Caderno de Porcelanataria: paginação, perfis, fixação e intervenções em revestimentos cerâmicos por ambiente<br />
            Concepção 3D de Alta Fidelidade + Vídeo 3D 360°</p>

            <p><strong>4.3.4.3 — COMERCIAL</strong><br />
            <strong>Planos Executivo e Completo:</strong><br />
            Caderno I — Caderno de Fluxo de Atendimento: mapa de jornada do cliente, setorização funcional, circulação otimizada, posicionamento estratégico de equipamentos, capacidade máxima de atendimento, planta baixa de layout<br />
            Caderno II — Caderno Geral + Luminotécnico: construtiva, demolir/construir, paginação de piso, mapa de revestimentos, forro, luminotécnico, instalações elétricas e ar-condicionado<br />
            Caderno III — Caderno de Detalhes Construtivos: graficação de todos os detalhes necessários para execução<br />
            Caderno IV — Caderno de Marcenaria: detalhamento completo de todo mobiliário fabricado sob medida — balcões, estantes, painéis e mobiliário operacional<br />
            Caderno V — Memorial Descritivo: componentes identificados, localizados e quantificados — base para orçamento firme com fornecedores<br />
            Concepção 3D de Alta Fidelidade (ambos os planos)</p>
            
            <p><strong>Exclusivo Plano Completo:</strong><br />
            Caderno de Ambientes: especificações completas por ambiente<br />
            Vídeo 3D 360°: apresentação imersiva do projeto antes da execução<br />
            3 visitas técnicas à obra com emissão de relatório por visita<br />
            Curadoria de materiais e fornecedores</p>

            <p><strong>4.3.5 DOS PLANOS DE SERVIÇO — EXECUTIVO E COMPLETO</strong><br />
            Os serviços são oferecidos em dois planos, sendo o plano contratado identificado no campo de assinatura deste contrato:<br />
            <strong>PLANO EXECUTIVO:</strong> Compreende todas as etapas de desenvolvimento do projeto até a entrega dos cadernos técnicos executivos, conforme escopo da modalidade contratada descrito nos itens 4.3.1 a 4.3.3. Inclui orientação na entrega dos cadernos técnicos e suporte técnico por 90 (noventa) dias após a entrega para projetos de Arquitetura+Interiores e Interiores, e 60 (sessenta) dias para projetos Comerciais. O suporte consiste em esclarecimento de dúvidas técnicas relacionadas ao projeto entregue, via e-mail ou WhatsApp, em dias úteis.<br />
            <strong>PLANO COMPLETO:</strong> Inclui tudo do Plano Executivo, acrescido de: (i) visitas técnicas à obra — 04 (quatro) visitas para projetos de Arquitetura+Interiores e Interiores, e 03 (três) visitas para projetos Comerciais — com emissão de relatório técnico por visita; e (ii) visitas em lojas e showrooms para curadoria conjunta de materiais, acabamentos e mobiliário. As visitas deverão ser previamente agendadas, conforme disponibilidade das partes, e realizadas durante a execução da obra.<br />
            Plano contratado: {'{'}plano_executivo{'}'} {'{'}plano_completo{'}'}</p>

            <p>4.4 Os serviços não inclusos no escopo, salvo quando expressamente previsto no presente contrato ou em seus anexos, não fazem parte do escopo dos serviços prestados pelos CONTRATADOS:<br />
            4.4.1 Elaboração de projetos complementares, tais como:<br />
            – projeto estrutural – projeto elétrico – projeto hidrossanitário – projeto de prevenção e combate a incêndio – projeto de climatização ou ar-condicionado – projeto luminotécnico técnico – projeto de automação residencial ou comercial<br />
            4.4.2 Levantamentos técnicos especializados, incluindo:<br />
            – levantamento topográfico ou planialtimétrico – sondagem do solo – laudos técnicos ou perícias de engenharia<br />
            4.4.3 Gerenciamento, fiscalização ou execução da obra;<br />
            4.4.4 Acompanhamento técnico contínuo da obra, salvo quando expressamente contratado;<br />
            4.4.5 Taxas, emolumentos ou custos administrativos relacionados à aprovação do projeto junto a órgãos públicos, concessionárias ou condomínios;<br />
            4.4.6 Impressão, plotagem ou reprodução física de projetos.</p>

            <p>4.5 Caso o CONTRATANTE tenha interesse na contratação de quaisquer dos serviços acima mencionados, estes poderão ser prestados pelos CONTRATADOS ou por profissionais por eles indicados, mediante contratação adicional e remuneração específica, conforme os termos estabelecidos neste contrato e seus anexos.</p>
            
            <p>4.6 A relação de serviços adicionais que poderão ser eventualmente contratados encontra-se descrita no ANEXO IV – SERVIÇOS ADICIONAIS (OPCIONAIS), o qual integra o presente contrato para todos os efeitos.</p>
            
            <p>4.7 A contratação de quaisquer serviços adicionais dependerá de aprovação expressa e por escrito do CONTRATANTE, formalizada por meio de aditivo contratual ou termo de aceite específico, podendo implicar revisão de honorários, prazos e condições de execução, conforme negociação prévia entre as partes.</p>
            
            <p>4.8 Durante o desenvolvimento das etapas de estudo preliminar e anteprojeto, estão incluídas até 02 (duas) rodadas de ajustes ou revisões solicitadas pelo CONTRATANTE. Solicitações adicionais que impliquem alterações substanciais no projeto poderão ser consideradas serviços adicionais, sujeitos à revisão de prazo e honorários.</p>

          </div>
          
          {/* FOOTER TÉCNICO */}
          <div className="footer-tech">
            <div>NL Arquitetos</div>
            <div>NL-2026-{c.numero.split('-').pop()}</div>
            <div>Rubrica: __________/__________</div>
            <div>Pág. 10 de 12</div>
          </div>
        </div>


        {/* ANEXO II — CRONOGRAMA DE DESENVOLVIMENTO */}
        <div className="page-content">
          <h2 className="annex-title">ANEXO II — CRONOGRAMA DE DESENVOLVIMENTO DO PROJETO</h2>

          <div className="clause-body">
            <p style={{ fontStyle: "italic" }}>Integra o Contrato de Prestação de Serviços de Arquitetura — NL Arquitetos</p>
            <p>1.1 O presente Anexo, rubricado e assinado pelas partes, integra de forma indissociável o Contrato de Prestação de Serviços de Arquitetura celebrado entre CONTRATANTE e CONTRATADOS, tendo por finalidade estabelecer o cronograma estimado para o desenvolvimento das etapas do projeto arquitetônico objeto do contrato.</p>
            <p>1.2 O cronograma aqui estabelecido possui caráter estimativo, podendo ser ajustado mediante comunicação prévia e justificativa detalhada, em razão de fatores técnicos, operacionais ou administrativos que venham a surgir durante o desenvolvimento do projeto.</p>
            <p>1.3 Os prazos previstos neste cronograma consideram condições normais de desenvolvimento do projeto e poderão sofrer alterações em decorrência de:
              <br />1.3.1 atrasos no fornecimento de documentos ou informações pelo CONTRATANTE;
              <br />1.3.2 solicitações de revisões ou alterações no projeto;
              <br />1.3.3 exigências técnicas ou legais identificadas ao longo do desenvolvimento do projeto;
              <br />1.3.4 exigências formuladas por órgãos públicos ou administração de condomínio;
              <br />1.3.5 fatores externos alheios ao controle dos CONTRATADOS.</p>

            <p><strong style={{ color: "#8B7355" }}>2.0 INÍCIO DO CRONOGRAMA</strong></p>
            <p>2.1 O cronograma de desenvolvimento do projeto terá início após o atendimento das seguintes condições:
              <br />2.1.1 assinatura do contrato pelas partes;
              <br />2.1.2 fornecimento das informações e documentos necessários pelo CONTRATANTE;
              <br />2.1.3 pagamento da primeira parcela dos honorários, quando aplicável.</p>
            <p>2.2 O prazo de desenvolvimento das etapas será contado em dias úteis, excluindo-se sábados, domingos e feriados.</p>

            <p><strong style={{ color: "#8B7355" }}>3.0 SEQUÊNCIA DAS ETAPAS DO PROJETO</strong></p>
            <p>3.1 O desenvolvimento do projeto observará, em regra, a seguinte sequência de etapas técnicas, conforme a modalidade de projeto contratada.</p>
            
            <p><strong>3.1.1 Levantamento de Dados e Análise Inicial</strong><br />
            Compreende a análise das informações disponíveis sobre o imóvel, documentos fornecidos pelo CONTRATANTE e identificação das condicionantes técnicas e legais aplicáveis ao projeto.<br />
            Prazo estimado: {c.prazo_briefing} dias úteis.</p>

            <p><strong>3.1.2 Briefing e Programa de Necessidades</strong><br />
            Etapa destinada à definição das necessidades do CONTRATANTE, dos ambientes desejados, das diretrizes funcionais e das premissas conceituais do projeto.<br />
            Prazo estimado: {c.prazo_briefing} dias úteis.</p>

            <p><strong>3.1.3 Estudo Preliminar</strong><br />
            Desenvolvimento da proposta inicial do projeto arquitetônico, incluindo a organização espacial dos ambientes, implantação da edificação e concepção geral do projeto.<br />
            Prazo estimado: {c.prazo_estudo} dias úteis.</p>

            <p><strong>3.1.4 Concepção Tridimensional (3D)</strong><br />
            Modelagem tridimensional do projeto arquitetônico e elaboração de imagens ou perspectivas destinadas à melhor visualização da proposta arquitetônica.<br />
            Prazo estimado: {c.prazo_estudo} dias úteis.</p>

            <p><strong>3.1.5 Projeto Legal</strong><br />
            Elaboração do conjunto de desenhos técnicos e documentos necessários para submissão do projeto aos órgãos públicos competentes ou à administração de condomínio, quando aplicável.<br />
            Prazo estimado: {c.prazo_legal} dias úteis.</p>

            <p><strong>3.1.6 Projeto Executivo de Arquitetura</strong><br />
            Elaboração do conjunto completo de desenhos técnicos destinados à correta compreensão arquitetônica e orientação da execução da obra, conforme definido no ANEXO I – Escopo dos Serviços de Projeto.<br />
            Prazo estimado: {c.prazo_executivo} dias úteis.</p>


            <p>3.2 Consideradas as etapas descritas neste cronograma, o prazo total estimado para desenvolvimento do projeto arquitetônico é de aproximadamente: <strong>{c.prazo_total_dias} dias úteis</strong></p>
            
            <p>3.3 O prazo total poderá ser ajustado caso ocorram revisões significativas do projeto, alterações solicitadas pelo CONTRATANTE ou outras situações previstas neste contrato.</p>
            <p>3.4 Após a apresentação de cada etapa do projeto, o CONTRATANTE disporá de prazo de até 05 (cinco) dias úteis para análise, aprovação ou solicitação de ajustes.
              <br />3.4.1 As solicitações de ajustes deverão ser apresentadas de forma clara e consolidada, preferencialmente em uma única manifestação.
              <br />3.4.2 Caso não haja manifestação do CONTRATANTE dentro do prazo estabelecido, a etapa apresentada poderá ser considerada tacitamente aprovada para fins de continuidade do desenvolvimento do projeto.
              <br />3.4.3 Estão incluídas neste contrato até 02 (duas) rodadas de ajustes por etapa do projeto, desde que não impliquem alteração substancial do conceito arquitetônico previamente aprovado. Alterações adicionais ou modificações que demandem retrabalho significativo poderão ser consideradas serviços adicionais, sujeitas à revisão de prazo e honorários.
              <br />3.4.3.1 Quaisquer solicitações de ajustes ou alterações em etapas consideradas tacitamente aprovadas, conforme 3.4.2, serão tratadas como serviços adicionais, sujeitas à revisão de prazos e honorários, independentemente de implicarem ou não em alteração substancial do conceito arquitetônico previamente aprovado.
              <br />3.4.4 Caso o CONTRATANTE solicite alterações que impliquem retorno a etapas do projeto já concluídas e previamente aprovadas, os CONTRATADOS poderão reavaliar:
              <br />3.4.4.1 os prazos de desenvolvimento do projeto;
              <br />3.4.4.2 o cronograma inicialmente estabelecido;
              <br />3.4.4.3 os honorários profissionais, caso o retrabalho implique atividades não previstas no escopo original.
              <br />3.4.5 Sempre que houver retorno a etapas anteriores do projeto, os ajustes de prazo e eventuais revisões de honorários serão previamente comunicados ao CONTRATANTE para aprovação.</p>

            <p>3.5 Caso o projeto permaneça sem manifestação ou retorno do CONTRATANTE por período superior a 30 (trinta) dias corridos consecutivos, e após notificação formal ao CONTRATANTE, os CONTRATADOS poderão suspender temporariamente o desenvolvimento dos serviços.
              <br />3.5.1 Nessa hipótese, o cronograma inicialmente estabelecido poderá ser revisto ou reprogramado, de acordo com a disponibilidade da agenda dos CONTRATADOS.</p>
            <p>3.6 Os prazos de análise, exigências e aprovação do projeto pelos órgãos públicos competentes ou pela administração de condomínio não integram o prazo de desenvolvimento do projeto estabelecido neste anexo, por dependerem exclusivamente dos procedimentos administrativos dessas instituições.</p>

            <p><strong style={{ color: "#8B7355" }}>4.0 CONTRATAÇÃO CONJUNTA DE MODALIDADES DE PROJETO</strong></p>
            <p>4.1 Quando o CONTRATANTE optar pela contratação conjunta de mais de uma modalidade de projeto, tais como Projeto de Arquitetura Residencial e Projeto de Arquitetura de Interiores, o cronograma de desenvolvimento poderá sofrer acréscimo proporcional de prazo, considerando o aumento do escopo técnico e da complexidade das atividades a serem executadas.
              <br />4.2 Nesses casos, as etapas referentes ao Projeto de Arquitetura de Interiores poderão ser desenvolvidas de forma complementar ou subsequente às etapas do Projeto de Arquitetura, respeitando a sequência lógica de desenvolvimento do projeto.
              <br />4.3 O prazo total estimado do cronograma poderá ser ajustado pelos CONTRATADOS de acordo com:
              <br />4.3.1 a área total do projeto;
              <br />4.3.2 a quantidade de ambientes contemplados no projeto de interiores;
              <br />4.3.3 o nível de detalhamento técnico solicitado;
              <br />4.3.4 a complexidade das soluções arquitetônicas e construtivas.
              <br />4.4 O novo prazo estimado será informado ao CONTRATANTE pelos CONTRATADOS no início do desenvolvimento do projeto ou no momento da contratação adicional da modalidade de interiores.
              <br />4.5 Nos casos de contratação conjunta de Projeto de Arquitetura e Projeto de Interiores, o desenvolvimento do projeto de interiores terá início após a definição e aprovação da configuração arquitetônica básica da edificação, incluindo layout geral, dimensões dos ambientes e posicionamento dos elementos construtivos principais.</p>

          </div>

          {/* FOOTER TÉCNICO */}
          <div className="footer-tech">
            <div>NL Arquitetos</div>
            <div>NL-2026-{c.numero.split('-').pop()}</div>
            <div>Rubrica: __________/__________</div>
            <div>Pág. 11 de 12</div>
          </div>
        </div>


        {/* ANEXO III — HONORÁRIOS E FORMA DE PAGAMENTO */}
        <div className="page-content">
          <h2 className="annex-title">ANEXO III — HONORÁRIOS E FORMA DE PAGAMENTO</h2>

          <div className="clause-body">
            <p style={{ fontStyle: "italic" }}>Integra o Contrato de Prestação de Serviços de Arquitetura — NL Arquitetos</p>
            <p>1.1 O presente Anexo, rubricado e assinado pelas partes, integra de forma indissociável o Contrato de Prestação de Serviços de Arquitetura celebrado entre CONTRATANTE e CONTRATADOS, tendo por finalidade estabelecer os honorários profissionais e as condições de pagamento referentes aos serviços objeto do contrato.</p>
            <p>1.2 Os honorários profissionais aqui definidos correspondem exclusivamente aos serviços descritos no ANEXO I – Escopo dos Serviços de Projeto, não incluindo serviços adicionais, os quais poderão ser contratados separadamente conforme previsto no contrato e no ANEXO IV – Serviços Adicionais (Opcionais).</p>

            <p><strong style={{ color: "#8B7355" }}>2.0 VALORES DOS HONORÁRIOS</strong></p>
            <p>2.1 Pelos serviços profissionais descritos no contrato e em seus anexos, o CONTRATANTE pagará aos CONTRATADOS o valor total de: <strong>R$ {c.valor_total} ({c.valor_total_extenso})</strong>.</p>
            <p>2.2 O valor dos honorários foi definido considerando: a complexidade do projeto, o tempo estimado para a sua execução, e os custos indiretos relacionados à prestação dos serviços.
              <br />2.2.1 a área aproximada do projeto;
              <br />2.2.2 a complexidade técnica do projeto;
              <br />2.2.3 a modalidade de projeto contratada;
              <br />2.2.4 o nível de detalhamento técnico previsto no escopo.</p>

            <p><strong style={{ color: "#8B7355" }}>3.0 FORMA DE PAGAMENTO</strong></p>
            <p>3.1 O pagamento dos honorários será realizado da seguinte forma: Os honorários serão pagos em 03 (três) marcos vinculados ao avanço do projeto, aplicáveis aos dois planos (Executivo e Completo):</p>
            <p>3.2 <strong>Marco 1 — Entrada:</strong> 30% (trinta por cento) na assinatura do contrato. Valor: <strong>R$ {c.marco1_valor} ({c.marco1_extenso})</strong>.<br />
            <strong>Marco 2 — Anteprojeto aprovado:</strong> 40% (quarenta por cento) na aprovação formal do anteprojeto pelo CONTRATANTE. Valor: <strong>R$ {c.marco2_valor} ({c.marco2_extenso})</strong>.<br />
            <strong>Marco 3 — Entrega do executivo:</strong> 30% (trinta por cento) na entrega dos cadernos técnicos executivos. Valor: <strong>R$ {c.marco3_valor} ({c.marco3_extenso})</strong>.</p>
            
            <p>3.3 O cronograma de pagamentos está atrelado aos marcos técnicos de desenvolvimento do projeto — anteprojeto aprovado e entrega do executivo — conforme definido na Cláusula 6.2 e no item 3.1 deste Anexo. Os CONTRATADOS poderão suspender os serviços mediante notificação prévia de 5 (cinco) dias úteis em caso de atraso do CONTRATANTE que impacte o cronograma técnico, sem que isso configure inadimplemento dos CONTRATADOS.</p>
            <p>3.4 Os valores devidos deverão ser pagos até a data do marco correspondente, mediante transferência bancária, PIX ou cartão de crédito/débito. Boleto bancário disponível sob demanda. Esta proposta tem validade de 30 (trinta) dias corridos a partir da data de assinatura. Após esse prazo, os valores poderão ser revisados pelos CONTRATADOS.
              <br />3.4.1 Os dados bancários para pagamento serão informados pelos CONTRATADOS ao CONTRATANTE.</p>

            <p><strong style={{ color: "#8B7355" }}>4.0 ATRASO NO PAGAMENTO</strong></p>
            <p>4.1 Em caso de atraso no pagamento de qualquer parcela, incidirão sobre o valor devido:
              <br />4.1.1 multa de 2% (dois por cento) sobre o valor da parcela;
              <br />4.1.2 juros de 1% (um por cento) ao mês, calculados proporcionalmente aos dias de atraso.</p>
            <p>4.2 O atraso superior a 10 (dez) dias no pagamento de qualquer parcela acarretará a suspensão temporária do desenvolvimento dos serviços, até a regularização do pagamento.</p>
            <p>4.3 A suspensão dos serviços por inadimplência do CONTRATANTE implicará revisão automática do cronograma de desenvolvimento do projeto, conforme disponibilidade de agenda dos CONTRATADOS.</p>
            <p>4.4 Em caso de rescisão do presente contrato após o início da execução dos serviços, por iniciativa de qualquer das partes, serão devidos aos CONTRATADOS os valores correspondentes às parcelas já vencidas, bem como os honorários proporcionais às etapas do projeto efetivamente desenvolvidas até a data da rescisão. A proporcionalidade dos honorários será determinada com base no percentual de conclusão técnica dos serviços, considerando os marcos de desenvolvimento estabelecidos no Anexo II ou, na ausência de definição expressa, mediante avaliação técnica realizada pelos CONTRATADOS, devidamente justificada e documentada, não se limitando ao valor das parcelas eventualmente já pagas. Na hipótese de discordância do CONTRATANTE quanto à avaliação técnica apresentada, poderá ser solicitada a realização de avaliação por terceiro independente e tecnicamente habilitado, sendo os custos dessa avaliação suportados pela parte que a solicitar.</p>
            <p>4.5 Os valores pagos a título de honorários profissionais não são reembolsáveis, considerando a natureza técnica e intelectual dos serviços prestados.</p>
            <p>4.6 Caso o cancelamento ocorra após a conclusão de determinada etapa do projeto, o valor correspondente à etapa será considerado integralmente devido.</p>
            <p>4.7 Considera-se realizado o pagamento somente após a efetiva compensação do valor na conta bancária indicada pelos CONTRATADOS.</p>

            <p><strong style={{ color: "#8B7355" }}>5.0 SERVIÇOS ADICIONAIS</strong></p>
            <p>5.1 Serviços não previstos no escopo original poderão ser contratados mediante aprovação prévia e formal do CONTRATANTE, com a devida formalização por meio de termo aditivo, contendo a definição específica de honorários, prazos e eventuais impactos no cronograma geral do projeto.</p>
            <p>5.2 A contratação de serviços adicionais poderá implicar revisão do cronograma do projeto, conforme previsto no ANEXO II – Cronograma de Desenvolvimento do Projeto, devendo a nova versão do cronograma ser formalmente aprovada por ambas as partes por meio de aditivo contratual.</p>

            <p><strong style={{ color: "#8B7355" }}>6.0 DESPESAS NÃO INCLUSAS</strong></p>
            <p>6.1 Não estão incluídos nos honorários profissionais previstos neste contrato, sendo de responsabilidade exclusiva do CONTRATANTE:
              <br />6.1.1 taxas de aprovação em órgãos públicos;
              <br />6.1.2 emolumentos cartoriais;
              <br />6.1.3 taxas de condomínio ou administração;
              <br />6.1.4 custos de impressão, plotagem ou reprodução física de projetos;
              <br />6.1.5 deslocamentos extraordinários não previstos no escopo.</p>

          </div>

          {/* FOOTER TÉCNICO */}
          <div className="footer-tech">
            <div>NL Arquitetos</div>
            <div>NL-2026-{c.numero.split('-').pop()}</div>
            <div>Rubrica: __________/__________</div>
            <div>Pág. 9 de 10</div>
          </div>
        </div>

        {/* ANEXO IV — SERVIÇOS ADICIONAIS (OPCIONAIS) */}
        <div className="page-content">
          <h2 className="annex-title">ANEXO IV — SERVIÇOS ADICIONAIS (OPCIONAIS)</h2>

          <div className="clause-body">
            <p style={{ fontStyle: "italic" }}>Integra o Contrato de Prestação de Serviços de Arquitetura — NL Arquitetos</p>
            <p>1.1 O presente Anexo integra o Contrato de Prestação de Serviços de Arquitetura firmado entre CONTRATANTE e CONTRATADOS.</p>
            <p>1.2 Os serviços descritos neste Anexo não fazem parte do escopo original do projeto, definido no ANEXO I – Escopo dos Serviços, sendo considerados serviços adicionais, passíveis de contratação específica.</p>
            <p>1.3 A execução de qualquer serviço adicional dependerá de solicitação do CONTRATANTE e aprovação prévia dos CONTRATADOS, com definição de honorários e prazos.</p>
            <p>1.4 A contratação de serviços adicionais poderá implicar revisão do cronograma de desenvolvimento do projeto, conforme disponibilidade de agenda dos CONTRATADOS.</p>
            
            <p><strong style={{ color: "#8B7355" }}>2.0 SITUAÇÕES QUE CONFIGUREM SERVIÇOS ADICIONAIS</strong></p>
            <p>2.1 PROJETOS COMPLEMENTARES<br />
            Os seguintes projetos técnicos poderão ser necessários para o pleno desenvolvimento e execução da obra, sendo normalmente elaborados por profissionais ou empresas especializadas:
              <br />2.1.1 Projeto estrutural.
              <br />2.1.2 Projeto elétrico.
              <br />2.1.3 Projeto hidrossanitário.
              <br />2.1.4 Projeto de climatização.
              <br />2.1.5 Projeto de prevenção e combate a incêndio.
              <br />2.1.6 Projeto luminotécnico.
              <br />2.1.7 Projeto de paisagismo.
              <br />2.1.8 Projeto de interiores detalhado. (a depender do escopo do Anexo I)
              <br />2.1.9 Projeto de marcenaria sob medida (a depender do escopo do Anexo I)
              <br />2.1.10 Salvo disposição expressa em contrário no contrato principal, os projetos complementares acima não estão incluídos nos honorários do projeto arquitetônico, podendo ser contratados separadamente pelo CONTRATANTE.</p>
            
            <p>2.2 ESTUDO DE VIABILIDADE FINANCEIRA DO PROJETO
              <br />2.2.1 Na fase inicial do desenvolvimento do projeto, os CONTRATADOS poderão realizar análise preliminar de viabilidade, considerando parâmetros gerais de custo de construção.
              <br />2.2.2 Essa análise tem caráter estimativo e orientativo, não constituindo orçamento executivo de obra.
              <br />2.2.3 O objetivo do estudo é verificar se o conceito inicial do projeto está compatível com a capacidade de investimento estimada do CONTRATANTE, permitindo eventuais ajustes antes do desenvolvimento das etapas seguintes.
              <br />2.2.3.1 Os CONTRATADOS poderão propor substituição de materiais, acabamentos ou soluções construtivas, desde que tais alterações:
              <br />I – Não modifiquem substancialmente o conceito arquitetônico do projeto;
              <br />II – Não alterem o programa de necessidades previamente aprovado;
              <br />III – Não impliquem reformulação integral do projeto.</p>
            
            <p>2.3 Ajustes pontuais destinados à adequação de custo da obra poderão ser realizados dentro da etapa em desenvolvimento, sem caracterizar serviço adicional.
              <br />2.3.1 Entende-se por 'ajustes pontuais' pequenas modificações que não alterem o conceito arquitetônico, o programa de necessidades ou a área construída significativamente. Contudo, caso tais ajustes demandem retrabalho em etapas já desenvolvidas, poderão ser cobrados honorários adicionais, mediante proposta formal e aprovação do CONTRATANTE.</p>
            <p>2.4 Caso as alterações solicitadas impliquem modificação significativa do projeto, poderão ser consideradas serviços adicionais, mediante comunicação prévia e justificada dos CONTRATADOS ao CONTRATANTE, detalhando o impacto das alterações e a necessidade de contratação como serviço adicional. A decisão final sobre a contratação do serviço adicional caberá ao CONTRATANTE.</p>
            
            <p><strong style={{ color: "#8B7355" }}>3.0 SERVIÇOS DE APOIO</strong></p>
            <p>3.1 Durante o desenvolvimento do projeto ou nas etapas posteriores, o CONTRATANTE poderá solicitar aos CONTRATADOS apoio técnico em decisões relacionadas à obra, aos materiais, aos sistemas construtivos ou à execução do projeto.</p>
            <p>3.2 Entre os serviços que poderão ser contratados ao longo do processo, destacam-se:
              <br />3.2.1 Consultoria na escolha de materiais e acabamentos.
              <br />3.2.2 Apoio técnico na seleção de fornecedores e prestadores de serviço.
              <br />3.2.3 Análise técnica de orçamentos de obra.
              <br />3.2.4 Apoio na compatibilização entre decisões de obra e o projeto arquitetônico.
              <br />3.2.5 Consultoria durante etapas específicas da execução da obra.</p>
            <p>3.3 Tais serviços poderão ser contratados a qualquer momento durante o desenvolvimento do projeto ou da obra, mediante acordo entre as partes quanto aos honorários e às condições de execução.</p>
            <p>3.4 A contratação desses serviços tem como objetivo auxiliar o CONTRATANTE na tomada de decisões técnicas, contribuindo para melhor qualidade da obra e maior fidelidade ao projeto desenvolvido.</p>
            <p>3.5 Os CONTRATADOS poderão apresentar ao CONTRATANTE sugestões de serviços técnicos complementares que possam contribuir para a qualidade, eficiência ou viabilidade da obra.</p>
            
            <p><strong style={{ color: "#8B7355" }}>4.0 HONORÁRIOS DOS SERVIÇOS ADICIONAIS</strong></p>
            <p>4.1 Os honorários referentes aos serviços adicionais serão definidos caso a caso, considerando a complexidade da solicitação, o tempo técnico necessário e o impacto no cronograma do projeto.
              <br />4.1.1 A proposta formal para serviços adicionais deverá detalhar o escopo, os honorários, a forma de pagamento e os prazos de execução, os quais deverão ser expressamente aprovados pelo CONTRATANTE antes do início dos trabalhos.</p>
            <p>4.2 A execução de serviços adicionais somente terá início após aprovação expressa do CONTRATANTE, incluindo concordância com os honorários correspondentes.</p>
            <p>4.3 A contratação de serviços adicionais deverá ser formalizada, preferencialmente, por meio de:
              <br />4.3.1 termo aditivo ao contrato;
              <br />4.3.2 proposta complementar aprovada por escrito;
              <br />4.3.3 aceite formal por e-mail ou WhatsApp, desde que contenha manifestação inequívoca de concordância.</p>
            <p>4.4 A execução de serviços adicionais poderá implicar revisão dos prazos de desenvolvimento do projeto, conforme disponibilidade técnica dos CONTRATADOS.</p>
          </div>

          {/* FOOTER TÉCNICO */}
          <div className="footer-tech">
            <div>NL Arquitetos</div>
            <div>NL-2026-{c.numero.split('-').pop()}</div>
            <div>Rubrica: __________/__________</div>
            <div>Pág. 12 de 12</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ContratoCliente;

