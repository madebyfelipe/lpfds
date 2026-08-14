import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // 90 é usado na faixa de fotos do hero: são recortes grandes e o
    // padrão (75) deixava a compressão visível.
    qualities: [75, 90],
    // Imagens do portfólio são estáticas — cache longo no CDN/navegador
    // (o PageSpeed penaliza o max-age curto padrão do /_next/image)
    minimumCacheTTL: 2678400 // 31 dias
  },
  async redirects() {
    return [
      // Link antigo (bios/links externos) — mantém as URLs /cases funcionando.
      { source: "/cases", destination: "/portfolio", permanent: true },
      // O case institucional foi fundido ao case principal da Alves & Nabuco.
      {
        source: "/portfolio/alves-nabuco-institucional",
        destination: "/portfolio/alves-nabuco",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
