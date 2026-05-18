import { usePropostaContext } from './use-proposta-context';
import { usePropostaParams as useOriginalParams } from './use-proposta-params-types';

export function usePropostaParams() {
  const context = usePropostaContext();
  const originalParams = useOriginalParams();

  if (context) {
    return context;
  }

  return originalParams;
}
