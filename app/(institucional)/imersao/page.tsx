import type { Metadata } from "next";
import { alternatesDe } from "@/lib/i18n";
import { OG_IMAGE } from "@/lib/site";
import { ImersaoForm } from "@/components/institucional/ImersaoForm";
import { InstContato } from "@/components/institucional/InstContato";
import { social } from "@/lib/institucional";

export const metadata: Metadata = {
  title: "Agende a imersão de branding | Made by Felipe",
  description:
    "Agende a imersão em dois encontros de cerca de 1h30: diagnóstico, estudo de mercado e construção da marca do consultório de psicologia, apresentados em até 30 dias com o site incluso, dentro do artigo 20 do Código de Ética.",
  alternates: alternatesDe("/imersao", "pt"),
  openGraph: {
    title: "Agende a imersão de branding | Made by Felipe",
    description:
      "Dois encontros de imersão. Posicionamento, identidade visual e verbal em até 30 dias, com o site incluso.",
    url: "/imersao",
    siteName: "Made by Felipe",
    images: [OG_IMAGE],
    locale: "pt_BR",
    type: "website"
  }
};

export default function ImersaoPage() {
  return (
    <main id="conteudo">
      <header className="inst-shell" style={{ padding: "128px 40px 96px" }}>
        <h1 className="inst-manifesto">
          Quem procura você decide muito antes da primeira mensagem.
        </h1>
      </header>

      <section id="imersao" className="inst-dark">
        <div className="inst-section">
          <div className="inst-imersao">
            <div>
              <p className="inst-kicker inst-kicker--inverse">Imersão</p>
              <p className="inst-imersao__title">
                Para agendar, três informações bastam.
              </p>
            </div>
            <ImersaoForm />
          </div>
        </div>
      </section>

      <InstContato flushBottom />

      <section className="inst-section" style={{ paddingBlock: "0 96px" }}>
        <p className="inst-kicker" style={{ marginBottom: "8px" }}>
          Social
        </p>
        {social.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inst-linkrow"
          >
            <span>{item.display}</span>
            <span className="inst-linkrow__arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </section>
    </main>
  );
}
