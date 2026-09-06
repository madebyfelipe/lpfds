"use client";

import Link from "next/link";
import { useState } from "react";
import { ScheduleLink } from "@/components/ScheduleLink";
import { subscribe } from "@/lib/newsletter";

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

  const buttonLabel =
    status === "sending" ? "ENVIANDO…" : status === "error" ? "TENTAR DE NOVO" : "ASSINAR";

  return (
    <section className="hub-media" id="newsletter">
      <div className="hub-media__grid">
        <div className="hub-media__newsletter">
          <span className="hub-media__newsletter-kicker">Newsletter</span>
          <h3 className="hub-media__newsletter-title">
            Marca de consultório, direto no seu e-mail
          </h3>
          <p className="hub-media__newsletter-desc">
            Notas sobre posicionamento, presença e o que faz um consultório ser escolhido
            antes da primeira conversa.
          </p>

          {status === "sent" ? (
            <p className="hub-media__newsletter-sent" role="status">
              Pronto — você está na lista.
            </p>
          ) : (
            <form className="hub-media__form" onSubmit={handleSubmit}>
              <label className="hub-media__form-label" htmlFor="hub-newsletter-email">
                Seu melhor e-mail
              </label>
              <input
                id="hub-newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                disabled={status === "sending"}
                placeholder="voce@consultorio.com.br"
                className="hub-ebook__input"
                autoComplete="email"
              />
              <label className="hub-media__consent" htmlFor="hub-newsletter-consent">
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
                  <Link href="/privacidade" className="hub-media__consent-link">
                    Política de Privacidade
                  </Link>
                  .
                </span>
              </label>
              <button
                type="submit"
                className="button button--primary hub-media__submit-btn"
                disabled={status === "sending" || !consent}
              >
                {buttonLabel}
              </button>
            </form>
          )}

          <p className="hub-media__newsletter-note">
            {status === "error"
              ? "Não consegui cadastrar agora. Tenta de novo em instantes."
              : "Cancele quando quiser pelo link de descadastro."}
          </p>
        </div>

        <ScheduleLink className="hub-media__coupon">
          <span className="hub-media__coupon-label">MENTORIA</span>
          <h3 className="hub-media__coupon-code" style={{ fontSize: "1.45rem", lineHeight: "1.2", fontWeight: 700, textTransform: "none", margin: "8px 0" }}>
            Uma conversa, seu posicionamento destravado.
          </h3>
          <span className="hub-media__coupon-desc">Agendar mentoria →</span>
        </ScheduleLink>
      </div>
    </section>
  );
}
