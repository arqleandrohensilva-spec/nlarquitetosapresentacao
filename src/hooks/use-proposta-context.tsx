import { createContext, useContext, ReactNode } from 'react';
import { PropostaParams } from './use-proposta-params';

const PropostaContext = createContext<PropostaParams | null>(null);

export const PropostaProvider = ({ children, value }: { children: ReactNode; value: PropostaParams }) => {
  return <PropostaContext.Provider value={value}>{children}</PropostaContext.Provider>;
};

export const usePropostaContext = () => useContext(PropostaContext);
