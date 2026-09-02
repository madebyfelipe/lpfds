import type { Metadata } from "next";
import { ImersaoForm } from "@/components/institucional/ImersaoForm";
import { InstContato } from "@/components/institucional/InstContato";
import { social } from "@/lib/institucional";

export const metadata: Metadata = {
  title: "Agende a imersão de branding | Made by Felipe",
  description:
    "Agende a imersão de dois dias: posicionamento, identidade visual e verbal no ar em 45 dias. Branding e social media em Sorocaba (SP) e São Paulo.",
  alternates: { canonical: "/imersao" },
  openGraph: {
    title: "Agende a imersão de branding | Made by Felipe",
    description:
      "Dois dias de imersão. Posicionamento, identidade visual e verbal no ar em 45 dias.",
    url: "/imersao",
    siteName: "Made by Felipe",
    locale: "pt_BR",
    type: "website"
  }
};

export default function ImersaoPage() {
  return (
    <main>
      <header className="inst-shell" style={{ padding: "128px 40px 96px" }}>
        <p className="inst-manifesto">
          Quem procura você decide muito antes da primeira mensagem.
        </p>
      </header>

      <section id="imersao" className="inst-dark">
        <div className="inst-section">
          <div className="inst-imersao">
            <div>
              <p className="inst-kicker inst-kicker--inverse">— Imersão</p>
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
          — Social
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
