import type { ReactNode } from "react";
import type { TemaSlug } from "@/lib/blog-temas";
import { post as brandingParaPsicologos } from "@/content/blog/branding-para-psicologos";
import { post as identidadeVisualParaPsicologo } from "@/content/blog/identidade-visual-para-psicologo";
import { post as logoParaPsicologoInfantil } from "@/content/blog/logo-para-psicologo-infantil";
import { post as marcaAutismo } from "@/content/blog/marca-para-psicologo-autismo-neurodivergencia";
import { post as precoPsicologo } from "@/content/blog/psicologo-pode-divulgar-preco";
import { post as sitePsicologo } from "@/content/blog/site-para-psicologo";
import { post as instagramPsicologos } from "@/content/blog/instagram-para-psicologos";
import { post as marketingPsicologos } from "@/content/blog/marketing-para-psicologos-codigo-de-etica";
import { post as nomeConsultorio } from "@/content/blog/nome-para-consultorio-de-psicologia";
import { post as posicionamentoPsicologo } from "@/content/blog/posicionamento-para-psicologo";
import { post as depoimentoPaciente } from "@/content/blog/psicologo-pode-postar-depoimento-de-paciente";
import { post as googleMeuNegocio } from "@/content/blog/google-meu-negocio-para-psicologo";
import { post as criacaoSite } from "@/content/blog/criacao-de-site-para-psicologos";
import { post as cartaoVisita } from "@/content/blog/cartao-de-visita-para-psicologo";
import { post as conseguirPacientes } from "@/content/blog/como-conseguir-pacientes-psicologo";
import { post as googleAds } from "@/content/blog/google-ads-para-psicologos";
import { post as whatsappBusiness } from "@/content/blog/whatsapp-business-para-psicologo";
import { post as conteudoInfantil } from "@/content/blog/conteudo-para-psicologo-infantil";
import { post as linguagemNeuro } from "@/content/blog/linguagem-neuroafirmativa-psicologo";
import { post as avaliacaoNeuro } from "@/content/blog/pagina-de-avaliacao-neuropsicologica";
import { post as orientacaoParental } from "@/content/blog/orientacao-parental-como-divulgar";
import { post as iaPsicologo } from "@/content/blog/psicologo-inteligencia-artificial-divulgacao";
import { post as fotoProfissional } from "@/content/blog/foto-profissional-para-psicologo";
import { post as bioInstagram } from "@/content/blog/bio-instagram-psicologo-exemplos";

/**
 * Blog — conteúdo em arquivo, sem CMS. Cada post é um módulo em
 * `content/blog/<slug>.tsx` que exporta `post`; para publicar, crie o
 * arquivo e registre-o na lista abaixo. A página, a metadata, o JSON-LD e o
 * sitemap saem daqui.
 */
export type Post = {
  slug: string;
  /** H1 e <title>. Leva a palavra-chave principal. */
  title: string;
  /** Meta description e lead do post (até ~160 caracteres). */
  description: string;
  /** Palavra-chave principal — só referência editorial, não é renderizada. */
  keyword: string;
  /** Temas do post (filtro da listagem e "continue lendo"). Ao menos um. */
  tags: TemaSlug[];
  /** ISO `AAAA-MM-DD`. */
  publishedAt: string;
  updatedAt?: string;
  /**
   * Resposta direta (2–3 frases) exibida no topo — o trecho que o Google e
   * assistentes de IA citam. Responde a pergunta do título sem rodeio.
   */
  summary?: string;
  /** Perguntas frequentes: renderizadas no fim do post e marcadas como FAQPage. */
  faq?: { q: string; a: string }[];
  /** Banner do post (opcional). Sem ele, o og:image é o gerado com o título. */
  cover?: Cover;
  body: ReactNode;
};

/**
 * Imagem de capa. Padrão em CLAUDE.md ("Blog → Imagens"): arquivo-fonte em
 * `public/blog/<slug>/<palavra-chave>.jpg`, 16:9, no mínimo 1920×1080. O
 * next/image entrega AVIF/WebP redimensionado; o original fica para o
 * og:image, o JSON-LD e o sitemap de imagens (Google Imagens).
 */
export type Cover = {
  src: string;
  /** Descreve a imagem em pt-BR, com a palavra-chave quando couber. */
  alt: string;
  /** Legenda visível sob o banner (opcional). */
  caption?: string;
  /** Pixels reais do arquivo-fonte. */
  width: number;
  height: number;
};

/** Imagem de compartilhamento: a capa, ou a gerada com o título (og.png). */
export function postImage(post: Post) {
  return post.cover
    ? { url: post.cover.src, width: post.cover.width, height: post.cover.height, alt: post.cover.alt }
    : { url: `/blog/${post.slug}/og.png`, width: 1200, height: 630, alt: post.title };
}

// Trava de build: capa fora do padrão derruba o `next build` em vez de ir ao
// ar pixelada, sem alt ou com nome de arquivo genérico.
function assertCover(post: Post) {
  const c = post.cover;
  if (!c) return;
  const fail = (msg: string) => {
    throw new Error(`[blog] capa de "${post.slug}": ${msg}`);
  };
  if (!c.src.startsWith(`/blog/${post.slug}/`)) fail(`src deve ficar em /blog/${post.slug}/`);
  if (!/\.(jpe?g|png|webp|avif)$/i.test(c.src)) fail("formato deve ser jpg, png, webp ou avif");
  if (c.width < 1920 || c.height < 1080) fail("mínimo 1920×1080");
  if (Math.abs(c.width / c.height - 16 / 9) > 0.02) fail("proporção deve ser 16:9");
  if (c.alt.trim().length < 15) fail("alt descritivo é obrigatório");
}

/** Mais recente primeiro. */
export const posts: Post[] = [
  brandingParaPsicologos,
  logoParaPsicologoInfantil,
  identidadeVisualParaPsicologo,
  marcaAutismo,
  sitePsicologo,
  precoPsicologo,
  instagramPsicologos,
  marketingPsicologos,
  nomeConsultorio,
  posicionamentoPsicologo,
  depoimentoPaciente,
  googleMeuNegocio,
  criacaoSite,
  cartaoVisita,
  conseguirPacientes,
  googleAds,
  whatsappBusiness,
  conteudoInfantil,
  linguagemNeuro,
  avaliacaoNeuro,
  orientacaoParental,
  iaPsicologo,
  fotoProfissional,
  bioInstagram
].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt)
);

posts.forEach(assertCover);

// Trava de build: slug, título e description repetidos competem entre si na busca.
for (const field of ["slug", "title", "description"] as const) {
  const seen = new Set<string>();
  for (const p of posts) {
    if (seen.has(p[field])) throw new Error(`[blog] ${field} repetido: "${p[field]}"`);
    seen.add(p[field]);
  }
}

for (const p of posts) {
  if (!p.tags.length) throw new Error(`[blog] "${p.slug}" precisa de ao menos um tema`);
}

/** Posts que dividem tema com o atual: mais temas em comum primeiro, depois o mais recente. */
export function relatedPosts(post: Post, limit = 3) {
  const overlap = (p: Post) => p.tags.filter((t) => post.tags.includes(t)).length;
  return posts
    .filter((p) => p.slug !== post.slug && overlap(p) > 0)
    .sort((a, b) => overlap(b) - overlap(a))
    .slice(0, limit);
}

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

/** "7 de novembro de 2026" — sem depender do fuso do servidor. */
export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  });
}
