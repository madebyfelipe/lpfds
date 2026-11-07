import type { ReactNode } from "react";
import { post as brandingParaPsicologos } from "@/content/blog/branding-para-psicologos";
import { post as identidadeVisualParaPsicologo } from "@/content/blog/identidade-visual-para-psicologo";
import { post as logoParaPsicologoInfantil } from "@/content/blog/logo-para-psicologo-infantil";

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
  /** ISO `AAAA-MM-DD`. */
  publishedAt: string;
  updatedAt?: string;
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
  identidadeVisualParaPsicologo
].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt)
);

posts.forEach(assertCover);

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
