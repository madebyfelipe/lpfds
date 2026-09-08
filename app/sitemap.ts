import type { MetadataRoute } from "next";
import { paginasLegais } from "@/lib/legal";

// /projetos, /portfolio e os cases /portfolio/[slug] ficam fora do sitemap
// de propósito: são acessíveis só por link direto (noindex nas próprias
// páginas), não devem ser públicos/indexados.
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://madebyfelipe.com";

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
      url: `${baseUrl}/contato`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/hub`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
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
