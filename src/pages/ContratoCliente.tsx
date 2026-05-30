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
        valor_total: "33.687,22",
        valor_total_extenso: "trinta e três mil, seiscentos e oitenta e sete reais e vinte e dois centavos"
      });
      setValidated(true);
      setLoading(false);
    } else {
      setLoading(false); // Espera o PIN ser validado
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
          position: relative;
        }

        .capa-logo-nl {
          font-family: 'Cormorant Garamond', serif;
          font-size: 120px;
          color: #1a1a1a;
          line-height: 0.8;
          margin-bottom: 5px;
        }

        .capa-logo-arquitetos {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          letter-spacing: 1.2em;
          color: #8B7355;
          margin-left: 5px;
          text-transform: uppercase;
        }

        .clause-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 14px;
          color: #8B7355;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 30px;
          margin-bottom: 15px;
          border-bottom: 0.5px solid #333;
          padding-bottom: 5px;
        }

        .clause-body {
          font-size: 10px;
          line-height: 1.8;
          color: #aaa;
          text-align: justify;
          margin-bottom: 15px;
        }

        .annex-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          color: #fff;
          margin-bottom: 20px;
          border-bottom: 1px solid #8B7355;
          padding-bottom: 10px;
        }

        .footer-tech {
          font-size: 7px;
          color: #444;
          display: flex;
          justify-content: space-between;
          border-top: 0.5px solid #222;
          padding-top: 10px;
          margin-top: 40px;
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
        {/* CAPA - Identidade do Imagem */}
        <div style={{ minHeight: "250mm", display: "flex", flexDirection: "column" }}>
          <div style={{ marginBottom: "60px" }}>
            <div className="capa-logo-nl">NL</div>
            <div className="capa-logo-arquitetos">ARQUITETOS</div>
          </div>

          <div style={{ borderTop: "0.5px solid #333", paddingTop: "40px", marginBottom: "40px" }}>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", color: "#ccc", fontWeight: 300, marginBottom: "5px" }}>
              Contrato de Prestação de Serviços de Arquitetura
            </h1>
            <div style={{ fontSize: "8px", color: "#444", letterSpacing: "0.3em", textTransform: "uppercase" }}>
              INSTRUMENTO PARTICULAR · A ARQUITETURA COMO DECISÃO
            </div>
          </div>

          <div style={{ marginBottom: "60px" }}>
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
            <span>NL Arquitetos</span>
            <span>·</span>
            <span>São José dos Campos, SP</span>
            <span>·</span>
            <span>Versão 1.0</span>
          </div>
        </div>

        {/* CLÁUSULAS */}
        <div className="nova-pagina" style={{ paddingTop: "20mm" }}>
          <div className="clause-title">CLÁUSULA PRIMEIRA — DAS PARTES ENVOLVIDAS NO CONTRATO</div>
          <div className="clause-body">
            <p><strong style={{ color: "#8B7355" }}>CONTRATANTE:</strong> {c.nome_cliente}, {c.nacionalidade || "brasileiro"}, {c.estado_civil || "casado"}, {c.profissao || "Engenheiro"}, portador do CPF nº {c.cpf_cliente}, residente e domiciliado em {c.endereco_cliente}, doravante denominado simplesmente CONTRATANTE.</p>
            <p><strong style={{ color: "#8B7355" }}>CONTRATADOS:</strong> Leandro Henrique da Silva, brasileiro, arquiteto e urbanista, inscrito no CAU nº A252250-0 portador do CPF nº 425.437.568-92 e Neandro Jacque Garcia, brasileiro, arquiteto e urbanista, inscrito no CAU nº A264629-3 portador do CPF nº 382.857.218-92 atuando sob a denominação fantasia NL Arquitetura e Interiores doravante denominados conjuntamente CONTRATADOS.</p>
            <p>As partes, devidamente qualificadas, resolvem celebrar o presente Contrato de Prestação de Serviços de Arquitetura, o qual se regerá pela legislação brasileira aplicável, notadamente, quando aplicável, pelo Código de Defesa do Consumidor, pela Lei Federal nº 12.378/2010, pelas Resoluções nº 21 e nº 64 do CAU/BR, pela Lei Federal nº 9.610/1998, e subsidiariamente pelo Código Civil.</p>
          </div>

          <div className="clause-title">CLÁUSULA SEGUNDA — DO OBJETO</div>
          <div className="clause-body">
            <p>2.1 O presente contrato tem por objeto a prestação de serviços técnicos profissionais de arquitetura pelos CONTRATADOS ao CONTRATANTE, compreendendo o desenvolvimento de projetos e/ou serviços relacionados à arquitetura e interiores.</p>
            <p>2.2 O escopo específico dos serviços, as etapas de desenvolvimento, os prazos, os honorários, a forma de pagamento e as demais condições particulares de cada projeto serão detalhadas nos Anexos deste contrato, que o integram para todos os efeitos legais.</p>
          </div>

          <div className="clause-title">CLÁUSULA TERCEIRA — DOS SERVIÇOS OFERTADOS</div>
          <div className="clause-body">
            <p>3.1 Os serviços técnicos de arquitetura compreendem, de forma exemplificativa: levantamento de dados, elaboração de briefing, estudos preliminares, anteprojeto, projeto legal, projeto executivo, compatibilização de projetos e atividades técnicas relacionadas.</p>
            <p>3.2 A definição específica do escopo será estabelecida nos Anexos deste contrato.</p>
          </div>

          <div className="clause-title">CLÁUSULA QUARTA — DO PRAZO</div>
          <div className="clause-body">
            <p>4.1 Os prazos serão definidos nos Anexos correspondentes, contendo o cronograma estimado.</p>
            <p>4.2 Os prazos possuem caráter estimativo e poderão sofrer ajustes por fatores como: revisões solicitadas, atraso no fornecimento de dados, exigências de órgãos públicos ou fatos imprevisíveis.</p>
          </div>

          <div className="clause-title">CLÁUSULA QUINTA — DAS ALTERAÇÕES</div>
          <div className="clause-body">
            <p>5.1 Cada etapa contempla até 02 (duas) revisões, desde que não impliquem mudança substancial do conceito arquitetônico aprovado.</p>
            <p>5.3 Caso o CONTRATANTE solicite mais de 02 rodadas de revisão ou alterações significativas, tais modificações serão consideradas serviços adicionais cobrados por hora técnica.</p>
          </div>

          <div className="clause-title">CLÁUSULA SEXTA — DOS HONORÁRIOS</div>
          <div className="clause-body">
            <p>6.1 O CONTRATANTE compromete-se a pagar os honorários estabelecidos no Anexo III.</p>
            <p>6.3 Não estão incluídos nos honorários: projetos complementares (estrutural, elétrico, etc), execução da obra, taxas de aprovação, custos de plotagem.</p>
          </div>

          <div className="clause-title">CLÁUSULA SÉTIMA — DAS OBRIGAÇÕES DO CONTRATANTE</div>
          <div className="clause-body">
            <p>7.1 Fornecer documentos e informações tempestivamente.</p>
            <p>7.2 Analisar e aprovar etapas nos prazos estabelecidos.</p>
            <p>7.6 Contratar profissionais responsáveis pelos projetos complementares (estrutural, elétrico, etc).</p>
          </div>

          <div className="clause-title">CLÁUSULA OITAVA — DAS OBRIGAÇÕES DOS CONTRATADOS</div>
          <div className="clause-body">
            <p>8.1 Prestar serviços com diligência e competência.</p>
            <p>8.2 Elaborar projeto em conformidade com o escopo do Anexo I.</p>
            <p>8.6 Emitir o RRT (Registro de Responsabilidade Técnica).</p>
          </div>

          <div className="clause-title">CLÁUSULA NONA — DOS DIREITOS AUTORAIS</div>
          <div className="clause-body">
            <p>9.1 O projeto constitui obra intelectual protegida pela Lei nº 9.610/1998.</p>
            <p>9.3 O CONTRATANTE adquire o direito de utilizar o projeto exclusivamente para a execução da obra no imóvel especificado, após quitação integral dos honorários.</p>
          </div>

          <div className="clause-title">CLÁUSULA DÉCIMA — DA RESPONSABILIDADE TÉCNICA</div>
          <div className="clause-body">
            <p>10.1 Restringe-se à elaboração do projeto conforme escopo.</p>
            <p>10.3 Não se responsabilizam por: execução da obra, qualidade de materiais ou atrasos construtivos.</p>
          </div>

          <div className="clause-title">CLÁUSULA DÉCIMA PRIMEIRA — DA RESCISÃO</div>
          <div className="clause-body">
            <p>11.1 Em caso de rescisão pelo CONTRATANTE, será aplicada multa compensatória de 20% sobre o saldo remanescente.</p>
            <p>11.2 Os CONTRATADOS podem rescindir por atraso superior a 30 dias no pagamento ou falta de fornecimento de dados.</p>
          </div>

          <div className="clause-title">CLÁUSULA DÉCIMA SEGUNDA — CONSIDERAÇÕES FINAIS</div>
          <div className="clause-body">
            <p>12.3 O início dos serviços está condicionado à assinatura e pagamento da primeira parcela.</p>
            <p>12.5 Comunicações devem ser realizadas obrigatoriamente por e-mail ou meio eletrônico formal.</p>
          </div>

          <div className="clause-title">CLÁUSULA DÉCIMA TERCEIRA — LIMITAÇÃO DE RESPONSABILIDADE</div>
          <div className="clause-body">
            <p>13.3 A responsabilidade civil dos CONTRATADOS limita-se ao valor total dos honorários efetivamente recebidos.</p>
          </div>

          <div className="clause-title">CLÁUSULA DÉCIMA QUARTA — DO FORO</div>
          <div className="clause-body">
            <p>14.1 Fica eleito o foro da comarca de São José dos Campos - SP.</p>
          </div>
        </div>

        {/* ASSINATURAS */}
        <div className="nova-pagina" style={{ paddingTop: "20mm" }}>
          <h2 className="annex-title">Assinaturas</h2>
          <p style={{ fontSize: "10px", color: "#888", marginBottom: "40px" }}>
            E, por estarem assim justas e contratadas, as partes assinam o presente instrumento em 02 (duas) vias de igual teor e forma.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginTop: "40px" }}>
            <div style={{ borderTop: "1px solid #333", paddingTop: "10px", textAlign: "center" }}>
              <div style={{ fontSize: "10px" }}>{c.nome_cliente}</div>
              <div style={{ fontSize: "8px", color: "#555" }}>CONTRATANTE</div>
            </div>
            <div style={{ borderTop: "1px solid #333", paddingTop: "10px", textAlign: "center" }}>
              <div style={{ fontSize: "10px" }}>NL ARQUITETOS</div>
              <div style={{ fontSize: "8px", color: "#555" }}>CONTRATADOS</div>
            </div>
          </div>
        </div>

        {/* FOOTER TÉCNICO */}
        <div className="footer-tech">
          <div>NL Arquitetos</div>
          <div>NL-{new Date().getFullYear()}-{c.numero.split('-').pop()}</div>
          <div>Rubrica: __________/__________</div>
          <div>Pág. 1 de 26</div>
        </div>
      </div>
    </div>
  );
};

export default ContratoCliente;
