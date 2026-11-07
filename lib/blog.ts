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
  body: ReactNode;
};

/** Mais recente primeiro. */
export const posts: Post[] = [
  brandingParaPsicologos,
  logoParaPsicologoInfantil,
  identidadeVisualParaPsicologo
].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt)
);

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
