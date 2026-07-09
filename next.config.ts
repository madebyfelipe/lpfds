import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Imagens do portfólio são estáticas — cache longo no CDN/navegador
    // (o PageSpeed penaliza o max-age curto padrão do /_next/image)
    minimumCacheTTL: 2678400 // 31 dias
  },
  async redirects() {
    return [
      // Link antigo (bios/links externos) — mantém as URLs /cases funcionando.
      { source: "/cases", destination: "/portfolio", permanent: true }
    ];
  }
};

export default nextConfig;
