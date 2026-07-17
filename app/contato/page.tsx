import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/hub/ThemeToggle";
import "../hub/hub.css";

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
    <div className="hub contato-page">
      {/* Header — mesmo layout/posicionamento do hub */}
      <header className="hub-header">
        <Link href="/" aria-label="Made by Felipe — Home" className="hub-header__logo-link">
          <Image
            src="/logo-black.png"
            alt="Made by Felipe"
            width={154}
            height={26}
            priority
            className="hub-header__logo hub-header__logo--light"
          />
          <Image
            src="/logo-white.png"
            alt=""
            aria-hidden="true"
            width={154}
            height={26}
            priority
            className="hub-header__logo hub-header__logo--dark"
          />
        </Link>

        <div className="hub-header__actions">
          <nav className="hub-header__nav">
            <Link href="/hub" className="hub-header__link">
              Voltar ao hub
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </header>

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
        <Link href="/portfolio" className="contato-footer__link">
          Ver portfólio completo →
        </Link>
      </footer>
    </div>
  );
}
