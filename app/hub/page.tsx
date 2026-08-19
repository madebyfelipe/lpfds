import type { Metadata } from "next";
import { InstNav } from "@/components/institucional/InstNav";
import { HubHero } from "@/components/hub/HubHero";
import { HubProducts } from "@/components/hub/HubProducts";
import { HubMedia } from "@/components/hub/HubMedia";
import { HubSocial } from "@/components/hub/HubSocial";
import { EbookModal } from "@/components/hub/EbookModal";
import { HubBio } from "@/components/hub/HubBio";
import { HubFooter } from "@/components/hub/HubFooter";
import "../institucional.css";
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
    <>
      {/* Header padrão do site principal. Fica fora do `.hub` porque o wrapper
          usa `overflow-x: clip` (full-bleed do baralho) e o sticky da nav tem
          de valer contra a viewport. */}
      <InstNav />
      <div className="hub">
        <main>
          <HubBio />
          <HubProducts />
          <HubMedia />
          <HubSocial />
          <HubHero />
        </main>
        <HubFooter />
        <EbookModal />
      </div>
    </>
  );
}
