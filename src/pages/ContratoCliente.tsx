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
        }

        .contrato-container {
          background: #000;
          width: 210mm;
          margin: 0 auto;
          color: #fff;
          font-family: 'DM Mono', monospace;
          padding: 20mm 22mm;
        }

        .clause-title {
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
            <p><strong style={{ color: "#8B7355" }}>CONTRATADOS:</strong> Leandro Henrique da Silva, brasileiro, arquiteto e urbanista, inscrito no CAU nº A252250-0 portador do CPF nº 425.437.568-92 e Neandro Jacque Garcia, brasileiro, arquiteto e urbanista, inscrito no CAU nº A264629-3 portador do CPF nº 382.857.218-92, atuando sob a denominação fantasia NL Arquitetura e Interiores, doravante denominados conjuntamente CONTRATADOS.</p>
            <p>As partes, devidamente qualificadas, resolvem celebrar o presente Contrato de Prestação de Serviços de Arquitetura, o qual se regerá pela legislação brasileira aplicável, notadamente o Código de Defesa do Consumidor, a Lei Federal nº 12.378/2010, as Resoluções nº 21 e nº 64 do CAU/BR, a Lei Federal nº 9.610/1998, e o Código Civil.</p>
          </div>

          <div className="clause-title">CLÁUSULA SEGUNDA — DO OBJETO</div>
          <div className="clause-body">
            <p>2.1 O presente contrato tem por objeto a prestação de serviços técnicos profissionais de arquitetura pelos CONTRATADOS ao CONTRATANTE, compreendendo o desenvolvimento de projetos e/ou serviços relacionados à arquitetura e interiores.</p>
            <p>2.2 O escopo específico dos serviços, as etapas de desenvolvimento, os prazos, os honorários, a forma de pagamento e as demais condições particulares de cada projeto serão detalhadas nos Anexos deste contrato, que o integram para todos os efeitos legais.</p>
          </div>

          <div className="clause-title">CLÁUSULA TERCEIRA — DOS SERVIÇOS OFERTADOS</div>
          <div className="clause-body">
            <p>3.1 Os serviços técnicos de arquitetura que poderão ser prestados pelos CONTRATADOS ao CONTRATANTE compreendem, de forma exemplificativa e não limitativa, atividades como: levantamento de dados, elaboração de briefing, estudos preliminares, anteprojeto, projeto legal, projeto executivo, compatibilização de projetos e gerenciamento de projetos (se contratado).</p>
            <p>3.2 A definição específica do escopo será estabelecida nos Anexos deste contrato.</p>
            <p>3.3 Os serviços previstos nesta cláusula referem-se exclusivamente às atividades de desenvolvimento de projeto, não incluindo execução, gerenciamento ou acompanhamento de obra, salvo quando expressamente contratado.</p>
          </div>

          <div className="clause-title">CLÁUSULA QUARTA — DO PRAZO</div>
          <div className="clause-body">
            <p>4.1 Os prazos para execução dos serviços objeto deste contrato serão definidos nos Anexos correspondentes, nos quais constará o cronograma estimado de desenvolvimento das etapas do projeto.</p>
            <p>4.2 Os prazos estabelecidos possuem caráter estimativo e poderão sofrer ajustes por revisões solicitadas pelo CONTRATANTE, atraso no fornecimento de informações ou documentos, exigências de órgãos públicos ou fatos imprevisíveis.</p>
            <p>4.3 Eventuais atrasos decorrentes de fatores alheios à atuação dos CONTRATADOS não caracterizarão inadimplemento contratual.</p>
          </div>

          <div className="clause-title">CLÁUSULA QUINTA — DAS ALTERAÇÕES</div>
          <div className="clause-body">
            <p>5.1 Cada etapa do projeto contemplas até 02 (duas) revisões, desde que as alterações solicitadas estejam relacionadas à proposta inicialmente desenvolvida e não impliquem mudança substancial do conceito arquitetônico aprovado.</p>
            <p>5.3 Caso o CONTRATANTE solicite mais de 02 (duas) rodadas de revisão em uma mesma etapa, ou alterações que impliquem mudanças significativas no conceito arquitetônico, tais modificações serão consideradas serviços adicionais, cobradas por hora técnica.</p>
            <p>5.8 Após a aprovação do Projeto Executivo, o projeto será considerado tecnicamente finalizado, não estando incluídas revisões ou modificações posteriores no escopo deste contrato.</p>
          </div>

          <div className="clause-title">CLÁUSULA SEXTA — DOS HONORÁRIOS</div>
          <div className="clause-body">
            <p>6.1 Em contrapartida aos serviços prestados, o CONTRATANTE compromete-se a pagar os honorários profissionais conforme estabelecido no Anexo III.</p>
            <p>6.3 Salvo disposição em contrário, não estão incluídos nos honorários: projetos complementares, execução da obra, taxas de aprovação em órgãos públicos e custos de impressão.</p>
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

        {/* ANEXOS */}
        <div className="nova-pagina" style={{ paddingTop: "20mm" }}>
          <h2 className="annex-title">Anexo I — Escopo dos Serviços de Projeto</h2>
          <div className="clause-body">
            <p>1.1 O presente Anexo integra de forma indissociável o Contrato de Prestação de Serviços de Arquitetura celebrado entre as partes, tendo por finalidade a definição do escopo técnico a ser executado.</p>
            <p>4.2.3 Estudo Preliminar: Concepção inicial do projeto, planta baixa com proposta de organização espacial.</p>
            <p>4.2.4 Concepção Tridimensional: Elaboração de imagens realistas em 3D e vídeo de apresentação.</p>
            <p>4.2.5 Projeto Legal: Conjunto de desenhos técnicos para aprovação junto aos órgãos públicos e condomínio.</p>
            <p>4.2.6 Projeto Executivo: Etapa final com todos os detalhamentos técnicos para execução (layout, luminotécnico, forro, etc).</p>
          </div>

          <h2 className="annex-title" style={{ marginTop: "40px" }}>Anexo II — Cronograma de Desenvolvimento</h2>
          <div className="clause-body">
            <p>1.1 Este anexo estabelece os prazos estimados para cada etapa do projeto, contados em dias úteis a partir da aprovação da etapa anterior e fornecimento de dados pelo Contratante.</p>
            <p>Prazo Total Estimado: {c.prazo_semanas} semanas.</p>
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
