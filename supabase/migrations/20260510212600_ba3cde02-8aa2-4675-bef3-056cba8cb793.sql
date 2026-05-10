-- Create the proposal engagement tracking table
CREATE TABLE IF NOT EXISTS public.proposta_engajamento (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    proposta_id TEXT NOT NULL,
    secao TEXT NOT NULL,
    tempo_segundos INTEGER NOT NULL DEFAULT 0,
    dispositivo TEXT NOT NULL,
    criado_em TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.proposta_engajamento ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts for tracking
CREATE POLICY "Allow public inserts for engagement tracking" 
ON public.proposta_engajamento 
FOR INSERT 
WITH CHECK (true);

-- Allow viewing only for authenticated users (internal staff)
CREATE POLICY "Allow authenticated users to view engagement data" 
ON public.proposta_engajamento 
FOR SELECT 
USING (auth.role() = 'authenticated');
