
-- 1. Add PIN column to contratos_clientes (last 4 of CPF by default, hashed)
ALTER TABLE public.contratos_clientes ADD COLUMN IF NOT EXISTS pin_hash text;

-- 2. Drop public SELECT on contratos_clientes (replaced by edge function with PIN check)
DROP POLICY IF EXISTS "Contratos são visíveis por todos via slug" ON public.contratos_clientes;

-- Authenticated NL staff can still read all contracts (for pipeline)
CREATE POLICY "Authenticated users can view all contratos"
ON public.contratos_clientes
FOR SELECT
TO authenticated
USING (true);

-- Authenticated NL staff can insert/update contracts
CREATE POLICY "Authenticated users can insert contratos"
ON public.contratos_clientes
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update contratos"
ON public.contratos_clientes
FOR UPDATE
TO authenticated
USING (true);

-- 3. Tighten propostas_clientes UPDATE: drop permissive policy, use SECURITY DEFINER RPC
DROP POLICY IF EXISTS "Permitir atualização de acessos" ON public.propostas_clientes;

CREATE OR REPLACE FUNCTION public.increment_proposta_acessos(_id uuid)
RETURNS void
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  UPDATE public.propostas_clientes
  SET acessos = COALESCE(acessos, 0) + 1,
      ultimo_acesso = now()
  WHERE id = _id;
$$;

GRANT EXECUTE ON FUNCTION public.increment_proposta_acessos(uuid) TO anon, authenticated;

-- 4. Tighten proposta_engajamento INSERT: require non-empty fields with length bounds
DROP POLICY IF EXISTS "Allow public inserts for engagement tracking" ON public.proposta_engajamento;

CREATE POLICY "Public engagement inserts validated"
ON public.proposta_engajamento
FOR INSERT
TO anon, authenticated
WITH CHECK (
  proposta_id IS NOT NULL
  AND length(proposta_id) BETWEEN 1 AND 100
  AND length(secao) BETWEEN 1 AND 100
  AND length(dispositivo) BETWEEN 1 AND 50
  AND tempo_segundos >= 0
  AND tempo_segundos <= 86400
);
