import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Painel interno (atrás de senha) e APIs não têm o que indexar.
      disallow: ["/painel", "/api/", "/r/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
