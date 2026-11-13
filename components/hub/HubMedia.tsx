"use client";

import Link from "next/link";
import { useState } from "react";
import { ScheduleLink } from "@/components/ScheduleLink";
import { subscribe } from "@/lib/newsletter";
import { MButtonInner } from "@/components/institucional/home/MButton";

/**
 * Assinatura da newsletter + mentoria. A oferta do e-book NAO mora aqui: ela e
 * do card /E-BOOK do baralho, que abre o EbookModal. Esta secao e cadastro
 * puro — quem assina por aqui entra na lista sem passar pelo portao do e-book.
 */
export function HubMedia() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    if (!consent) return;
    setStatus("sending");

    try {
      const result = await subscribe({ email, source: "hub-newsletter", consent });
      if (!result.ok) throw new Error("cadastro recusado");
      setStatus("sent");
      setEmail("");
      setConsent(false);
    } catch {
      setStatus("error");
    }
  }

  const buttonLabel = status === "sending" ? "Enviando…" : status === "error" ? "Tentar de novo" : "Assinar";

  return (
    <section className="hub2-media" id="newsletter" aria-labelledby="hub-news">
      <div className="hub2-media__news">
        <div className="meyebrow">
          <span className="meyebrow__marker" aria-hidden="true" />
          <p className="meyebrow__text">Newsletter</p>
        </div>
        <h2 id="hub-news" className="hub2-media__title">
          Marca de consultório, direto no seu e-mail.
        </h2>
        <p className="hub2-media__desc">
          Notas sobre posicionamento, presença e o que faz um consultório ser escolhido antes da primeira conversa.
        </p>

        {status === "sent" ? (
          <p className="hub2-media__sent" role="status">
            Pronto — você está na lista.
          </p>
        ) : (
          <form className="hub2-media__form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="hub-newsletter-email">
              Seu melhor e-mail
            </label>
            <div className="hub2-media__row">
              <input
                id="hub-newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                disabled={status === "sending"}
                placeholder="voce@consultorio.com.br"
                className="hub2-media__input"
                autoComplete="email"
              />
              <button type="submit" className="mbtn" disabled={status === "sending" || !consent}>
                <MButtonInner>{buttonLabel}</MButtonInner>
              </button>
            </div>
            <label className="hub2-media__consent" htmlFor="hub-newsletter-consent">
              <input
                id="hub-newsletter-consent"
                type="checkbox"
                required
                aria-required="true"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                disabled={status === "sending"}
              />
              <span>
                Aceito receber a newsletter por e-mail, nos termos da{" "}
                <Link href="/privacidade" className="inst-link">
                  Política de Privacidade
                </Link>
                .
              </span>
            </label>
          </form>
        )}

        <p className="hub2-media__note mmono">
          {status === "error"
            ? "Não consegui cadastrar agora. Tenta de novo em instantes."
            : "Cancele quando quiser pelo link de descadastro."}
        </p>
      </div>

      <ScheduleLink className="hub2-media__card">
        <span className="hub2-media__card-label mmono">Mentoria</span>
        <span className="hub2-media__card-title">Uma conversa, seu posicionamento destravado.</span>
        <span className="hub2-media__card-cta">Agendar mentoria →</span>
      </ScheduleLink>
    </section>
  );
}
