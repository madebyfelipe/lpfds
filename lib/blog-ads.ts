import type { Post } from "@/lib/blog";

/**
 * Banner de anúncio do post (o "Totvs/RD Station" do layout de referência),
 * só com ofertas do próprio estúdio — nunca anúncio de terceiro.
 *
 * Três peças: a LP de construção de marca, a LP de site e o e-book. Cada post
 * leva a que mais conversa com o assunto dele: primeiro pelo slug (o assunto
 * real do artigo), depois pelo tema principal. Um post pode forçar outra com
 * o campo `ad`.
 */
export type AdSlug = "marca" | "site" | "ebook";

export type Ad = {
  slug: AdSlug;
  href: string;
  /** Linha pequena acima do título do banner. */
  eyebrow: string;
  title: string;
  copy: string;
  cta: string;
};

export const ads: Record<AdSlug, Ad> = {
  marca: {
    slug: "marca",
    href: "/lp/marca",
    eyebrow: "Imersão de marca",
    title: "A marca que faz escolherem você antes de comparar preço.",
    copy: "Dois encontros de imersão. Em até 30 dias, tudo apresentado, com o site incluso.",
    cta: "Conhecer a imersão"
  },
  site: {
    slug: "site",
    href: "/lp/site",
    eyebrow: "Site para psicólogas",
    title: "Seu site profissional por R$ 599.",
    copy: "Página única ou site institucional, em até 12x sem juros e sem mensalidade.",
    cta: "Ver os planos"
  },
  ebook: {
    slug: "ebook",
    // O modal do e-book vive no /hub e abre sozinho com o hash #ebook.
    href: "/hub#ebook",
    eyebrow: "E-book gratuito",
    title: "Construção de marca para psicólogos, do começo ao fim.",
    copy: "O passo a passo do método em um material para baixar.",
    cta: "Baixar o e-book"
  }
};

// Assunto do slug primeiro: "site-para-clinica…" é sobre site mesmo que o
// tema principal seja posicionamento.
const SITE_SLUG = /(^|-)(site|seo|google|agendamento|pagina|email)(-|$)/;
const MARCA_SLUG =
  /(^|-)(marca|branding|identidade|logo|posicionamento|nome|slogan|tom|rebranding|cores|papelaria|placa|cartao|manual|nicho)(-|$)/;

export function adForPost(post: Post): Ad {
  if (post.ad) return ads[post.ad];
  if (SITE_SLUG.test(post.slug)) return ads.site;
  if (MARCA_SLUG.test(post.slug)) return ads.marca;
  const tema = post.tags[0];
  if (tema === "presenca-digital") return ads.site;
  if (tema === "identidade-visual" || tema === "posicionamento") return ads.marca;
  // Ética e neurodivergência: leitor ainda frio para uma proposta — vai o e-book.
  return ads.ebook;
}
