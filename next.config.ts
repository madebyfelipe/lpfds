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
      // /cases era redirect para /portfolio (links antigos de bio). Desde
      // nov/2026 é a página de cases própria, que linka o portfólio.
      // Workshop fora do ar (webinarNoAr em lib/webinar.ts). Temporário (307):
      // a página continua no repo e pode voltar; remova esta linha para reativar.
      { source: "/webinar", destination: "/", permanent: false },
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
