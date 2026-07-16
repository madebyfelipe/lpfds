import type { Metadata } from "next";
import { HubHeader } from "@/components/hub/HubHeader";
import { HubHero } from "@/components/hub/HubHero";
import { HubProducts } from "@/components/hub/HubProducts";
import { HubMedia } from "@/components/hub/HubMedia";
import { HubBio } from "@/components/hub/HubBio";
import { HubFooter } from "@/components/hub/HubFooter";
import "./hub.css";

export const metadata: Metadata = {
  title: "Hub | Made by Felipe — Conexões e Projetos",
  description:
    "Branding e Social Media Estratégico. Confira nossos produtos, assine nossa newsletter, conheça o Felipe ou agende uma mentoria.",
  openGraph: {
    title: "Hub | Made by Felipe — Conexões e Projetos",
    description:
      "Branding e Social Media Estratégico. Confira nossos produtos, assine nossa newsletter, conheça o Felipe ou agende uma mentoria.",
    images: ["/logo-black.png"],
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
