import type { Metadata } from "next";
import Link from "next/link";
import { recemFormados, recemFormadosHref } from "@/lib/recemFormados";
import { InstNav } from "@/components/institucional/InstNav";
import { HubWebinarBar } from "@/components/hub/HubWebinarBar";
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
  alternates: { canonical: "/hub" },
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
      {/* Faixa fixa do webinar — precede a nav e as duas grudam no topo. */}
      <HubWebinarBar />
      {/* Header padrão do site principal. Fica fora do `.hub` porque o wrapper
          usa `overflow-x: clip` (full-bleed do baralho) e o sticky da nav tem
          de valer contra a viewport. */}
      <InstNav />
      <div className="hub">
        <main id="conteudo">
          <HubHero />
          <section className="hub-lives" aria-labelledby="hub-lives-title">
            <Link href={recemFormadosHref} className="hub-lives__link">
              <div>
                <span className="hub-lives__kicker">{recemFormados.hub.kicker}</span>
                <h2 id="hub-lives-title">{recemFormados.hub.title}</h2>
                <p>{recemFormados.hub.description}</p>
                <span className="hub-lives__cta">{recemFormados.hub.cta}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" /></svg>
                </span>
              </div>
              <svg className="hub-lives__arrow" width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" /></svg>
            </Link>
          </section>
          <HubProducts />
          <HubMedia />
          <HubSocial />
          <HubBio />
        </main>
        <HubFooter />
        <EbookModal />
      </div>
    </>
  );
}
