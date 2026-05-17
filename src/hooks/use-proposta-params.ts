import { PropostaParams, usePropostaParams as useUrlParams } from './use-proposta-params-types';
import { usePropostaContext } from './use-proposta-context';

export function usePropostaParams(): PropostaParams {
  const contextData = usePropostaContext();
  const urlData = useUrlParams();

  return contextData || urlData;
}
