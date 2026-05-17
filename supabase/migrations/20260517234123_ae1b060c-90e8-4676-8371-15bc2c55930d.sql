create table if not exists public.propostas_clientes (
  id uuid default gen_random_uuid() primary key,
  tipo text not null check (tipo in ('arqint', 'int', 'comercial')),
  slug text unique not null,
  nome_cliente text,
  tipo_negocio text,
  cidade text,
  estado text default 'SP',
  area text,
  objetivo text,
  valor_executivo text default 'Sob consulta',
  valor_completo text default 'Sob consulta',
  validade text default '30 dias corridos',
  acessos integer default 0,
  ultimo_acesso timestamptz,
  criado_em timestamptz default now()
);

-- Enable RLS
alter table public.propostas_clientes enable row level security;

-- Create policies
create policy "Propostas são visíveis por todos via slug" 
on public.propostas_clientes for select 
using (true);

create policy "Permitir atualização de acessos"
on public.propostas_clientes for update
using (true)
with check (true);
