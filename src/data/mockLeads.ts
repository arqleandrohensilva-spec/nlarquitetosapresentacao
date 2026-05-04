import { Lead } from "@/types/pipeline";

export const INITIAL_LEADS: Lead[] = [
  {
    id: "1",
    nome: "Carlos Mendonça",
    whats: "(12) 99623-0001",
    cidade: "São José dos Campos",
    tipo: "Arq+Int",
    area: 340,
    orcamento: 1100000,
    origem: "Indicação",
    temp: "Quente",
    score: 9,
    stage: "Proposta Enviada",
    obs: "Indicado pelo Rodrigo. Construção em condomínio de alto padrão.",
    criado: "2026-04-22",
    etapa_desde: "2026-04-28",
    logs: [
      { id: "l1", tipo: "W", nota: "Primeiro contato. Agendada apresentação.", data: "2026-04-24", autor: "Leandro" },
      { id: "l2", tipo: "R", nota: "Apresentação realizada. Proposta enviada.", data: "2026-04-28", autor: "Leandro" }
    ]
  },
  {
    id: "2",
    nome: "Fernanda Alves",
    whats: "(12) 99623-0002",
    cidade: "São José dos Campos",
    tipo: "Interiores",
    area: 180,
    orcamento: 0,
    origem: "Instagram",
    temp: "Morno",
    score: 6,
    stage: "Reunião Agendada",
    obs: "Viu o post do espaço gourmet. Quer reformar apartamento.",
    criado: "2026-05-01",
    etapa_desde: "2026-05-01",
    logs: [
      { id: "l3", tipo: "W", nota: "Respondeu o DM. Reunião agendada 05 Mai.", data: "2026-05-01", autor: "Leandro" }
    ]
  },
  {
    id: "3",
    nome: "Rodrigo Teixeira",
    whats: "(12) 99623-0003",
    cidade: "Taubaté",
    tipo: "Comercial",
    area: 520,
    orcamento: 1800000,
    origem: "Google",
    temp: "Quente",
    score: 8,
    stage: "Negociação",
    obs: "Reforma de escritório corporativo. Prazo definido: setembro.",
    criado: "2026-04-18",
    etapa_desde: "2026-04-30",
    logs: [
      { id: "l4", tipo: "E", nota: "Contrato enviado. Aguardando assinatura.", data: "2026-04-30", autor: "Leandro" },
      { id: "l5", tipo: "L", nota: "Dúvidas sobre cronograma. Alinhado.", data: "2026-05-02", autor: "Neandro" }
    ]
  },
  {
    id: "4",
    nome: "Beatriz Santos",
    whats: "(12) 99623-0004",
    cidade: "São José dos Campos",
    tipo: "Arq+Int",
    area: 260,
    orcamento: 850000,
    origem: "Indicação",
    temp: "Morno",
    score: 7,
    stage: "Novo Lead",
    obs: "Marido é engenheiro. Quer interlocução técnica de alto nível.",
    criado: "2026-05-02",
    etapa_desde: "2026-05-02",
    logs: []
  },
  {
    id: "5",
    nome: "Paulo Gomes",
    whats: "(12) 99623-0005",
    cidade: "São José dos Campos",
    tipo: "Arq+Int",
    area: 410,
    orcamento: 1400000,
    origem: "Instagram",
    temp: "Quente",
    score: 9,
    stage: "Novo Lead",
    obs: "Viu a Residência Jacareí. Quer o mesmo nível de projeto.",
    criado: "2026-05-02",
    etapa_desde: "2026-05-02",
    logs: []
  },
  {
    id: "6",
    nome: "Mariana Costa",
    whats: "(12) 99623-0006",
    cidade: "Jacareí",
    tipo: "Interiores",
    area: 140,
    orcamento: 0,
    origem: "Site",
    temp: "Frio",
    score: 4,
    stage: "Novo Lead",
    obs: "Formulário do site. Orçamento abaixo do ticket ideal da NL.",
    criado: "2026-04-29",
    etapa_desde: "2026-04-29",
    logs: []
  },
  {
    id: "7",
    nome: "André Lima",
    whats: "(12) 99623-0007",
    cidade: "São José dos Campos",
    tipo: "Arq+Int",
    area: 300,
    orcamento: 980000,
    origem: "Indicação",
    temp: "Quente",
    score: 8,
    stage: "Reunião Agendada",
    obs: "Indicado pelo Carlos Mendonça. Reunião marcada para 06 Mai.",
    criado: "2026-05-01",
    etapa_desde: "2026-05-01",
    logs: [
      { id: "l6", tipo: "W", nota: "Primeiro contato. Reunião agendada.", data: "2026-05-01", autor: "Leandro" }
    ]
  },
  {
    id: "8",
    nome: "Julia Ferreira",
    whats: "(12) 99623-0008",
    cidade: "São José dos Campos",
    tipo: "Comercial",
    area: 220,
    orcamento: 720000,
    origem: "Instagram",
    temp: "Morno",
    score: 5,
    stage: "Perdido",
    obs: "Escolheu outro escritório por questão de preço.",
    criado: "2026-04-15",
    etapa_desde: "2026-04-28",
    logs: [
      { id: "l7", tipo: "N", nota: "Perdido por preço. Não valorizou o método NL.", data: "2026-04-28", autor: "Leandro" }
    ]
  }
];
