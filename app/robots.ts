import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Painel interno (atrás de senha) e APIs não têm o que indexar.
      disallow: ["/painel", "/api/"],
    },
    sitemap: "https://madebyfelipe.com/sitemap.xml",
  };
}
