import type { Metadata } from "next";
import { HubHeader } from "@/components/hub/HubHeader";
import { HubHero } from "@/components/hub/HubHero";
import { HubProducts } from "@/components/hub/HubProducts";
import { HubMedia } from "@/components/hub/HubMedia";
import { HubBio } from "@/components/hub/HubBio";
import { HubFooter } from "@/components/hub/HubFooter";
import "./hub.css";

export const metadata: Metadata = {
  title: "Hub | Made by Felipe — Tudo num só lugar",
  description:
    "Links, serviços, portfólio e contato do Made by Felipe. Design de marca sério, sóbrio e orientado a resultado. Sorocaba e região.",
  openGraph: {
    title: "Hub | Made by Felipe",
    description:
      "Posicionamento, branding e social media estratégico. Tudo o que o Felipe faz, num só lugar.",
    images: ["/logo-white.png"],
    locale: "pt_BR",
    type: "website",
  },
};

export default function HubPage() {
  return (
    <div className="hub">
      <HubHeader />
      <main>
        <HubHero />
        <HubProducts />
        <HubMedia />
        <HubBio />
      </main>
      <HubFooter />
    </div>
  );
}
