import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      // Link antigo (bios/links externos) — mantém as URLs /cases funcionando.
      { source: "/cases", destination: "/portfolio", permanent: true }
    ];
  }
};

export default nextConfig;
