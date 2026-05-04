export type LeadStage = 'Novo Lead' | 'Reunião Agendada' | 'Proposta Enviada' | 'Negociação' | 'Fechado' | 'Perdido';

export interface LeadLog {
  id: string;
  tipo: 'W' | 'R' | 'E' | 'L' | 'N';
  nota: string;
  data: string;
  autor: string;
}

export interface Lead {
  id: string;
  nome: string;
  whats: string;
  cidade: string;
  tipo: 'Arq+Int' | 'Interiores' | 'Comercial';
  area: number;
  orcamento: number;
  origem: 'Instagram' | 'Indicação' | 'Site' | 'Google' | 'Outro';
  temp: 'Quente' | 'Morno' | 'Frio';
  score: number;
  stage: LeadStage;
  obs: string;
  criado: string;
  etapa_desde: string;
  logs: LeadLog[];
  proxima_acao_tipo?: string;
  proxima_acao_nota?: string;
  proxima_acao_data?: string;
}
