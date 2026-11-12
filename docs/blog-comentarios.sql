-- Comentários do blog (publicação imediata). Rodar uma vez no SQL Editor do
-- Supabase. O navegador nunca acessa o Supabase: só o servidor, com a Secret
-- key (ou service_role). RLS ligado e SEM policy = a anon key não lê nem grava nada.

create table if not exists public.blog_comments (
  id            uuid primary key default gen_random_uuid(),
  slug          text not null,
  nome          text not null check (char_length(nome) between 1 and 80),
  texto         text not null check (char_length(texto) between 3 and 2000),
  created_at    timestamptz not null default now(),
  -- Moderação depois de publicado: marcar true e o comentário some da página
  -- na hora, sem deploy.
  hidden        boolean not null default false,
  -- Assinatura do desafio de captcha usado no envio. Única: o mesmo desafio
  -- resolvido não vale duas vezes (barra reenvio automático).
  challenge_sig text unique
);

create index if not exists blog_comments_slug_created_idx
  on public.blog_comments (slug, created_at);
create index if not exists blog_comments_created_idx
  on public.blog_comments (created_at);

alter table public.blog_comments enable row level security;
