import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { paginasLegais } from "@/lib/legal";
import { SITE_URL } from "@/lib/site";

// /projetos, /portfolio e os cases /portfolio/[slug] ficam fora do sitemap
// de propósito: são acessíveis só por link direto (noindex nas próprias
// páginas), não devem ser públicos/indexados. /contato também: a página é
// noindex, e sitemap com URL noindex é sinal contraditório para o Google.
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/metodologia`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/imersao`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/webinar`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hub`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: posts[0] ? new Date(posts[0].updatedAt ?? posts[0].publishedAt) : new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // Posts usam a data do próprio post, não a do build: lastmod que muda a
    // cada deploy ensina o Google a ignorar o campo.
    ...posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt ?? post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      // Sitemap de imagens (image:image): só a capa real, em alta, para o
      // Google Imagens — o og.png gerado não é conteúdo.
      ...(post.cover && { images: [`${baseUrl}${post.cover.src}`] }),
    })),
    // Páginas legais: entram no sitemap porque precisam ser encontráveis —
    // prioridade baixa, já que não disputam busca.
    ...paginasLegais.map((pagina) => ({
      url: `${baseUrl}${pagina.href}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
