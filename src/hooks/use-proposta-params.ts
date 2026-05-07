import { useSearchParams } from 'react-router-dom'

export interface PropostaParams {
  nome: string
  tipo: string
  cidade: string
  estado: string
  area: string
  objetivo: string
  data: string
  plano: string
  valor_executivo: string
  valor_completo: string
  validade: string
}

export function usePropostaParams(): PropostaParams {
  const [searchParams] = useSearchParams()

  return {
    nome: searchParams.get('nome') || '[Nome do Cliente]',
    tipo: searchParams.get('tipo') || '[Residencial · Comercial · Interiores]',
    cidade: searchParams.get('cidade') || '[Cidade]',
    estado: searchParams.get('estado') || '[Estado]',
    area: searchParams.get('area') || '[XXX]',
    objetivo: searchParams.get('objetivo') || '[Descrição breve do objetivo do cliente]',
    data: searchParams.get('data') || '[DD Mês AAAA]',
    plano: searchParams.get('plano') || '',
    valor_executivo: searchParams.get('valor_executivo') || 'Sob consulta',
    valor_completo: searchParams.get('valor_completo') || 'Sob consulta',
    validade: searchParams.get('validade') || '30 dias corridos',
  }
}
