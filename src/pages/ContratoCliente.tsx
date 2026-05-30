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
          body { margin: 0; background: #000 !important; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          [data-pdf-hide] { display: none !important; }
          @page { size: A4; margin: 0; }
          .nova-pagina { page-break-before: always; }
          .no-break { page-break-inside: avoid; }
        }

        .contrato-container {
          background: #000;
          width: 210mm;
          margin: 0 auto;
          color: #fff;
          font-family: 'DM Mono', monospace;
          padding: 20mm 22mm;
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
          margin-top: 60px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
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

          <div>
            <Row label="Nº DO CONTRATO" value={c.numero} />
            <Row label="CONTRATANTE" value={c.nome_cliente} />
            <Row label="TIPO DE PROJETO" value={c.tipo_projeto} />
            <Row label="PLANO CONTRATADO" value={c.plano} />
            <Row label="ENDEREÇO DO IMÓVEL" value={c.endereco_imovel} />
            <Row label="VALOR TOTAL DOS HONORÁRIOS" value={`R$ ${c.valor_total} (${c.valor_total_extenso})`} />
            <Row label="PRAZO TOTAL ESTIMADO" value={`${c.prazo_semanas} semanas a partir da assinatura e entrega dos documentos`} />
            <Row label="DATA DE ASSINATURA" value={`São José dos Campos, SP | ${c.data}`} />
          </div>

          <div style={{ marginTop: "auto", borderLeft: "2px solid #8B7355", paddingLeft: "20px", marginBottom: "60px" }}>
            <p style={{ fontStyle: "italic", fontSize: "11px", color: "#666", lineHeight: "1.6" }}>
              "A NL não projeta para impressionar. Projeta para funcionar — e o resultado impressiona porque cada decisão foi tomada antes de a obra começar."
            </p>
          </div>

          <div style={{ fontSize: "8px", color: "#333", letterSpacing: "0.2em", textTransform: "uppercase", display: "flex", gap: "20px" }}>
            <span>NL Arquitetos</span><span>·</span><span>São José dos Campos, SP</span><span>·</span><span>Versão 1.0</span>
          </div>
        </div>

        {/* CLÁUSULAS COMPLETAS */}
        <div className="nova-pagina" style={{ paddingTop: "20mm" }}>
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

          <div className="clause-title">CLÁUSULA SÉTIMA — DAS OBRIGAÇÕES DO CONTRATANTE</div>
          <div className="clause-body">
            <p>7.1 Fornecer de forma completa e tempestiva todos os documentos e informações necessários ao desenvolvimento do projeto.</p>
            <p>7.2 Analisar e aprovar as etapas do projeto apresentadas dentro dos prazos estabelecidos no Anexo II.</p>
            <p>7.6 Contratar obrigatoriamente os profissionais responsáveis pelos projetos complementares (estrutural, elétrico, hidrossanitário, etc).</p>
            <p>7.8 Executar a obra em conformidade com o projeto elaborado, sendo vedadas alterações sem a prévia autorização técnica dos autores do projeto.</p>
          </div>

          <div className="clause-title">CLÁUSULA OITAVA — DAS OBRIGAÇÕES DOS CONTRATADOS</div>
          <div className="clause-body">
            <p>8.1 Prestar os serviços profissionais com diligência, competência e observância às normas técnicas aplicáveis e ao Código de Ética do CAU/BR.</p>
            <p>8.2 Elaborar o projeto arquitetônico em estrita conformidade com o escopo definido no Anexo I.</p>
            <p>8.6 Emitir o Registro de Responsabilidade Técnica (RRT) referente aos serviços efetivamente prestados.</p>
          </div>

          <div className="clause-title">CLÁUSULA NONA — DOS DIREITOS AUTORAIS</div>
          <div className="clause-body">
            <p>9.1 O projeto constitui obra intelectual protegida pela Lei nº 9.610/1998 e pela Lei nº 12.378/2010.</p>
            <p>9.3 O CONTRATANTE adquire o direito de utilizar o projeto exclusivamente para a execução da obra no imóvel especificado, após a quitação integral dos honorários.</p>
            <p>9.4 Sem autorização prévia e expressa, o CONTRATANTE não poderá: reproduzir o projeto em outro terreno, reutilizá-lo em outra obra ou cedê-lo a terceiros.</p>
          </div>

          <div className="clause-title">CLÁUSULA DÉCIMA — DA RESPONSABILIDADE TÉCNICA</div>
          <div className="clause-body">
            <p>10.1 Restringe-se à elaboração do projeto conforme o escopo definido no Anexo I.</p>
            <p>10.3 Os CONTRATADOS não se responsabilizam por: execução da obra, qualidade dos materiais ou vícios construtivos decorrentes de falhas na execução.</p>
          </div>

          <div className="clause-title">CLÁUSULA DÉCIMA PRIMEIRA — DA RESCISÃO CONTRATUAL</div>
          <div className="clause-body">
            <p>11.1 Em caso de rescisão pelo CONTRATANTE antes da conclusão, será aplicada multa compensatória de 20% sobre o saldo contratual remanescente.</p>
            <p>11.2 Os CONTRATADOS poderão rescindir o contrato em caso de atraso superior a 30 dias no pagamento ou descumprimento de obrigações contratuais.</p>
          </div>

          <div className="clause-title">CLÁUSULA DÉCIMA SEGUNDA — CONSIDERAÇÕES FINAIS</div>
          <div className="clause-body">
            <p>12.3 O início dos serviços está condicionado à assinatura do instrumento e ao pagamento da primeira parcela.</p>
            <p>12.5 Todas as comunicações relevantes deverão ser realizadas por e-mail ou outro meio eletrônico formal.</p>
          </div>

          <div className="clause-title">CLÁUSULA DÉCIMA TERCEIRA — LIMITAÇÃO DE RESPONSABILIDADE</div>
          <div className="clause-body">
            <p>13.3 A responsabilidade civil dos CONTRATADOS, caso configurada, estará limitada ao valor total dos honorários efetivamente recebidos.</p>
          </div>

          <div className="clause-title">CLÁUSULA DÉCIMA QUARTA — DO FORO</div>
          <div className="clause-body">
            <p>14.1 As partes elegem o foro da comarca de São José dos Campos - SP para dirimir quaisquer controvérsias.</p>
          </div>
        </div>

        {/* ASSINATURAS */}
        <div className="nova-pagina" style={{ paddingTop: "20mm" }}>
          <h2 className="annex-title">Assinaturas</h2>
          <div className="clause-body">
            <p>E, por estarem assim justas e contratadas, as partes assinam o presente instrumento em 02 (duas) vias de igual teor e forma, juntamente com duas testemunhas, para que produza seus jurídicos e legais efeitos.</p>
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
        </div>

        {/* ANEXO I — ESCOPO DOS SERVIÇOS DE PROJETO */}
        <div className="nova-pagina" style={{ paddingTop: "20mm" }}>
          <h2 className="annex-title">ANEXO I — ESCOPO DOS SERVIÇOS DE PROJETO</h2>
          <div className="clause-body">
            <p style={{ fontStyle: "italic" }}>Integra o Contrato de Prestação de Serviços de Arquitetura — NL Arquitetos</p>
            <p>1.1 O presente Anexo integra de forma indissociável o Contrato de Prestação de Serviços de Arquitetura celebrado entre as partes, tendo por finalidade a definição do escopo técnico a ser executado.</p>
            <p>1.2 O escopo detalhado segue as diretrizes da NL Arquitetos para o plano {c.plano}.</p>
          </div>
        </div>

        {/* ANEXO II — CRONOGRAMA DE DESENVOLVIMENTO */}
        <div className="nova-pagina" style={{ paddingTop: "20mm" }}>
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
              <br />3.4.3 Estão incluídas neste contrato até 02 (duas) rodadas de ajustes por etapa do projeto, desde que não impliquem alteração substancial do conceito arquitetônico previamente aprovado.
              <br />3.4.3.1 Quaisquer solicitações de ajustes ou alterações em etapas consideradas tacitamente aprovadas, conforme 3.4.2, serão tratadas como serviços adicionais.
              <br />3.4.4 Caso o CONTRATANTE solicite alterações que impliquem retorno a etapas do projeto já concluídas e previamente aprovadas, os CONTRATADOS poderão reavaliar prazos e honorários.</p>

            <p>3.5 Caso o projeto permaneça sem manifestação ou retorno do CONTRATANTE por período superior a 30 (trinta) dias corridos consecutivos, os CONTRATADOS poderão suspender temporariamente o desenvolvimento dos serviços.</p>
            <p>3.6 Os prazos de análise, exigências e aprovação do projeto pelos órgãos públicos competentes ou pela administração de condomínio não integram o prazo de desenvolvimento do projeto estabelecido neste anexo.</p>

            <p><strong style={{ color: "#8B7355" }}>4.0 CONTRATAÇÃO CONJUNTA DE MODALIDADES DE PROJETO</strong></p>
            <p>4.1 Quando o CONTRATANTE optar pela contratação conjunta de mais de uma modalidade de projeto, o cronograma poderá sofrer acréscimo proporcional de prazo.</p>
          </div>
        </div>

        {/* ANEXO III — HONORÁRIOS E FORMA DE PAGAMENTO */}
        <div className="nova-pagina" style={{ paddingTop: "20mm" }}>
          <h2 className="annex-title">ANEXO III — HONORÁRIOS E FORMA DE PAGAMENTO</h2>
          <div className="clause-body">
            <p style={{ fontStyle: "italic" }}>Integra o Contrato de Prestação de Serviços de Arquitetura — NL Arquitetos</p>
            <p>1.1 O presente Anexo, rubricado e assinado pelas partes, integra de forma indissociável o Contrato de Prestação de Serviços de Arquitetura celebrado entre CONTRATANTE e CONTRATADOS, tendo por finalidade estabelecer os honorários profissionais e as condições de pagamento referentes aos serviços objeto do contrato.</p>
            
            <p><strong style={{ color: "#8B7355" }}>2.0 VALORES DOS HONORÁRIOS</strong></p>
            <p>2.1 Pelos serviços profissionais descritos no contrato e em seus anexos, o CONTRATANTE pagará aos CONTRATADOS o valor total de: <strong>R$ {c.valor_total} ({c.valor_total_extenso})</strong>.</p>
            
            <p><strong style={{ color: "#8B7355" }}>3.0 FORMA DE PAGAMENTO</strong></p>
            <p>3.1 O pagamento dos honorários será realizado da seguinte forma: Os honorários serão pagos em 03 (três) marcos vinculados ao avanço do projeto, aplicáveis aos dois planos (Executivo e Completo):</p>
            <p>
              <strong>Marco 1 — Entrada:</strong> 30% na assinatura do contrato. Valor: R$ {c.marco1_valor} ({c.marco1_extenso}).<br />
              <strong>Marco 2 — Anteprojeto aprovado:</strong> 40% na aprovação formal do anteprojeto pelo CONTRATANTE. Valor: R$ {c.marco2_valor} ({c.marco2_extenso}).<br />
              <strong>Marco 3 — Entrega do executivo:</strong> 30% na entrega dos cadernos técnicos executivos. Valor: R$ {c.marco3_valor} ({c.marco3_extenso}).
            </p>
            
            <p>3.3 O cronograma de pagamentos está atrelado aos marcos técnicos de desenvolvimento do projeto — anteprojeto aprovado e entrega do executivo.</p>

            <p><strong style={{ color: "#8B7355" }}>4.0 ATRASO NO PAGAMENTO</strong></p>
            <p>4.1 Em caso de atraso, incidirão multa de 2% e juros de 1% ao mês.</p>
            <p>4.4 Em caso de rescisão, serão devidos aos CONTRATADOS os valores correspondentes às parcelas já vencidas, bem como os honorários proporcionais às etapas efetivamente desenvolvidas.</p>
            <p>4.5 Os valores pagos a título de honorários profissionais não são reembolsáveis.</p>
          </div>
        </div>

        {/* ANEXO IV — SERVIÇOS ADICIONAIS (OPCIONAIS) */}
        <div className="nova-pagina" style={{ paddingTop: "20mm" }}>
          <h2 className="annex-title">ANEXO IV — SERVIÇOS ADICIONAIS (OPCIONAIS)</h2>
          <div className="clause-body">
            <p style={{ fontStyle: "italic" }}>Integra o Contrato de Prestação de Serviços de Arquitetura — NL Arquitetos</p>
            <p>1.1 O presente Anexo integra o Contrato de Prestação de Serviços de Arquitetura firmado entre CONTRATANTE e CONTRATADOS.</p>
            <p>1.2 Os serviços descritos neste Anexo não fazem parte do escopo original do projeto.</p>
            
            <p><strong style={{ color: "#8B7355" }}>2.0 SITUAÇÕES QUE CONFIGUREM SERVIÇOS ADICIONAIS</strong></p>
            <p>2.1 PROJETOS COMPLEMENTARES: Estrutural, elétrico, hidrossanitário, climatização, prevenção e combate a incêndio, luminotécnico, paisagismo, marcenaria sob medida.</p>
            <p>2.2 ESTUDO DE VIABILIDADE FINANCEIRA DO PROJETO: Na fase inicial do desenvolvimento do projeto, os CONTRATADOS poderão realizar análise preliminar de viabilidade de custo de construção.</p>
            
            <p><strong style={{ color: "#8B7355" }}>3.0 SERVIÇOS DE APOIO</strong></p>
            <p>3.1 Consultoria na escolha de materiais, seleção de fornecedores, análise técnica de orçamentos e acompanhamento de etapas específicas da execução.</p>
            
            <p><strong style={{ color: "#8B7355" }}>4.0 HONORÁRIOS DOS SERVIÇOS ADICIONAIS</strong></p>
            <p>4.1 Os honorários referentes aos serviços adicionais serão definidos caso a caso, considerando a complexidade da solicitação e tempo técnico necessário.</p>
          </div>
        </div>

        {/* FOOTER TÉCNICO */}
        <div className="footer-tech">
          <div>NL Arquitetos</div>
          <div>NL-2026-{c.numero.split('-').pop()}</div>
          <div>Rubrica: __________/__________</div>
          <div>Pág. 1 de 26</div>
        </div>
      </div>
    </div>
  );
};

export default ContratoCliente;
