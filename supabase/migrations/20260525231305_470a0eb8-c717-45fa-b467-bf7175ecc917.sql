-- Refine UPDATE policy on propostas_clientes
DROP POLICY IF EXISTS "Permitir atualização de acessos" ON public.propostas_clientes;
CREATE POLICY "Permitir atualização de acessos" ON public.propostas_clientes 
FOR UPDATE 
USING (id IS NOT NULL)
WITH CHECK (id IS NOT NULL);

-- Refine INSERT policy on proposta_engajamento
DROP POLICY IF EXISTS "Allow public inserts for engagement tracking" ON public.proposta_engajamento;
CREATE POLICY "Allow public inserts for engagement tracking" ON public.proposta_engajamento 
FOR INSERT 
WITH CHECK (proposta_id IS NOT NULL);
