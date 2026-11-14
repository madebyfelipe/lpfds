import type { Metadata } from "next";
import { ScheduleLink } from "@/components/ScheduleLink";
import { alternatesDe } from "@/lib/i18n";
import { EMAIL, social } from "@/lib/institucional";
import { OG_IMAGE } from "@/lib/site";

// /en/contact — English counterpart of /imersao. The PT form asks for a
// Brazilian CRP and a WhatsApp number (and its API validates both), so this page
// offers the call and email instead. No prices: "get a quote".

const title = "Get a Quote for Your Practice's Brand | Made by Felipe";
const description =
  "Tell us about your therapy practice and get a quote, or ask for a free homepage preview. Book a 15-minute call or email the studio.";

export const metadata: Metadata = {
  title,
  description,
  alternates: alternatesDe("/imersao", "en"),
  openGraph: {
    title,
    description,
    url: "/en/contact",
    siteName: "Made by Felipe",
    images: [OG_IMAGE],
    locale: "en_US",
    alternateLocale: ["pt_BR"],
    type: "website"
  }
};

const assunto = encodeURIComponent("Quote for my practice");
const corpo = encodeURIComponent(
  "Hi Felipe,\n\nMy name is … and I'm a … (therapist / counselor / psychologist) in … (city, state).\nMy practice website (if any): …\n\nI'd like a quote / a free homepage preview.\n"
);

export default function ContactEn() {
  return (
    <main id="conteudo">
      <header className="inst-shell" style={{ padding: "128px 40px 96px" }}>
        <h1 className="inst-manifesto">People decide about you long before they send the first message.</h1>
      </header>

      <section id="imersao" className="inst-dark">
        <div className="inst-section">
          <div className="inst-imersao">
            <div>
              <p className="inst-kicker inst-kicker--inverse">Get a quote</p>
              <p className="inst-imersao__title">Get a quote, or ask for a free homepage preview.</p>
            </div>
            <div>
              <p className="inst-method__intro">
                A 15-minute call is enough to understand your practice and tell you whether the immersion makes sense
                for you. Prefer email? Tell us who you work with and where, and we&apos;ll reply with a quote.
              </p>
              <p>
                <ScheduleLink className="inst-submit">Book a 15-minute call</ScheduleLink>
              </p>
              <p className="inst-contact__line">
                Or email{" "}
                <a href={`mailto:${EMAIL}?subject=${assunto}&body=${corpo}`} className="inst-link">
                  {EMAIL}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="inst-section" style={{ paddingBlock: "96px 40px" }}>
        <p className="inst-kicker inst-kicker--tight">Contact</p>
        <p className="inst-contact__line">
          Projects and partnerships:{" "}
          <a href={`mailto:${EMAIL}`} className="inst-link">
            {EMAIL}
          </a>
        </p>
      </section>

      <section className="inst-section" style={{ paddingBlock: "0 96px" }}>
        <p className="inst-kicker" style={{ marginBottom: "8px" }}>
          Social
        </p>
        {social.map((item) => (
          <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="inst-linkrow">
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
