import { PropostaParams, usePropostaParams as useUrlParams } from './use-proposta-params';
import { usePropostaContext } from './use-proposta-context';

export function usePropostaParams(): PropostaParams {
  const contextData = usePropostaContext();
  const urlData = useUrlParams();

  // Se houver dados no contexto (vindos do banco de dados), use-os. 
  // Caso contrário, use os da URL (comportamento original).
  return contextData || urlData;
}
