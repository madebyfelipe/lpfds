import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contato | Made by Felipe",
  description:
    "Agende uma conversa, mande uma mensagem ou siga no Instagram. Vamos construir sua presença digital juntos.",
  robots: { index: false, follow: false }
};

const WHATSAPP_NUMBER = "5515992835226";
const CALCOM_URL = "https://cal.com/madebyfelipe";
const EMAIL = "alo@madebyfelipe.com.br";
const INSTAGRAM_HANDLE = "madebyfelipe.com.br";

export default function ContatoPage() {
  return (
    <div className="contato-page">
      {/* Nav mínima */}
      <nav className="contato-nav">
        <Image
          src="/logo-white.png"
          alt="Made by Felipe"
          width={120}
          height={32}
          className="contato-nav__logo"
          priority
        />
        <a href="https://new.madebyfelipe.com.br" className="contato-nav__back">
          ← Site completo
        </a>
      </nav>

      <main>
        {/* Hero */}
        <section className="contato-hero">
          <div className="contato-hero__photo-wrap">
            <Image
              src="/eu.jpg"
              alt="Felipe"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
          </div>

          <span className="contato-hero__eyebrow">Made by Felipe</span>
          <h1 className="contato-hero__name">Vamos conversar?</h1>
          <p className="contato-hero__tagline">
            Branding &amp; social media para profissionais que querem ser percebidos à altura do que entregam.
          </p>
        </section>

        {/* CTAs */}
        <div className="contato-actions">
          {/* 1. Cal.com — principal */}
          <a
            href={CALCOM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contato-cta contato-cta--primary"
          >
            <span className="contato-cta__icon">📅</span>
            <span className="contato-cta__body">
              <span className="contato-cta__label">Agendar reunião</span>
              <span className="contato-cta__sub">Escolha um horário no meu calendário</span>
            </span>
            <span className="contato-cta__arrow">→</span>
          </a>

          <div className="contato-divider">ou</div>

          {/* 2. WhatsApp */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contato-cta"
          >
            <span className="contato-cta__icon">💬</span>
            <span className="contato-cta__body">
              <span className="contato-cta__label">WhatsApp</span>
              <span className="contato-cta__sub">Manda uma mensagem agora</span>
            </span>
            <span className="contato-cta__arrow">→</span>
          </a>

          {/* 3. E-mail */}
          <a
            href={`mailto:${EMAIL}`}
            className="contato-cta"
          >
            <span className="contato-cta__icon">📧</span>
            <span className="contato-cta__body">
              <span className="contato-cta__label">E-mail</span>
              <span className="contato-cta__sub">{EMAIL}</span>
            </span>
            <span className="contato-cta__arrow">→</span>
          </a>

          {/* 4. Instagram */}
          <a
            href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contato-cta"
          >
            <span className="contato-cta__icon">📸</span>
            <span className="contato-cta__body">
              <span className="contato-cta__label">Instagram</span>
              <span className="contato-cta__sub">@{INSTAGRAM_HANDLE}</span>
            </span>
            <span className="contato-cta__arrow">→</span>
          </a>
        </div>
      </main>

      {/* Footer mínimo */}
      <footer className="contato-footer">
        <span className="contato-footer__copy">
          © {new Date().getFullYear()} Made by Felipe
        </span>
        <a href="https://madebyfelipe.com.br/cases" target="_blank" rel="noopener noreferrer" className="contato-footer__link">
          Ver portfólio completo →
        </a>
      </footer>
    </div>
  );
}
