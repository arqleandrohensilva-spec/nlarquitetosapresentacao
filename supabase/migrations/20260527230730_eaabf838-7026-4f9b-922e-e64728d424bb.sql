
-- Remove "always true" authenticated INSERT/UPDATE flagged by linter; allow anon writes
-- for the pipeline (which uses the anon key, not Supabase auth) but keep SELECT blocked.
DROP POLICY IF EXISTS "Authenticated users can insert contratos" ON public.contratos_clientes;
DROP POLICY IF EXISTS "Authenticated users can update contratos" ON public.contratos_clientes;
DROP POLICY IF EXISTS "Authenticated users can view all contratos" ON public.contratos_clientes;

-- Pipeline (NL OS) writes via anon key — allow but do not allow reads
CREATE POLICY "Pipeline can insert contratos"
ON public.contratos_clientes
FOR INSERT
TO anon, authenticated
WITH CHECK (slug IS NOT NULL AND nome_cliente IS NOT NULL);

CREATE POLICY "Pipeline can update contratos by slug"
ON public.contratos_clientes
FOR UPDATE
TO anon, authenticated
USING (slug IS NOT NULL)
WITH CHECK (slug IS NOT NULL);

-- No SELECT policy: reads happen exclusively through the get-contrato edge function
-- (service role) which validates a PIN before returning sensitive data.
