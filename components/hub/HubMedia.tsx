"use client";

import { useState } from "react";
import { ScheduleLink } from "@/components/ScheduleLink";

const NEWSLETTER_WEBHOOK = "https://hook.us2.make.com/1fnsymphi9b64q1tcq8we9ap7xxgxcv7";

export function HubMedia() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      const res = await fetch(NEWSLETTER_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "hub-newsletter",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error(`Webhook respondeu ${res.status}`);
      setStatus("sent");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  const buttonLabel =
    status === "sent"
      ? "Feito ✓"
      : status === "sending"
        ? "Enviando…"
        : status === "error"
          ? "Tentar de novo"
          : "QUERO OS BASTIDORES";

  return (
    <section className="hub-media">
      <div className="hub-media__grid">
        <div className="hub-media__newsletter">
          <h3 className="hub-media__newsletter-title">Newsletter</h3>
          <p className="hub-media__newsletter-desc">
            Os bastidores do meu trabalho. Como eu transformo uma decisão de design em percepção — sem enrolação.
          </p>
          <form className="hub-media__newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="hub-media__input"
              placeholder="voce@email.com"
              required
              aria-label="Seu e-mail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error" || status === "sent") setStatus("idle");
              }}
              disabled={status === "sending"}
            />
            <button
              type="submit"
              className="button button--primary hub-media__submit-btn"
              disabled={status === "sending" || status === "sent"}
            >
              {buttonLabel}
            </button>
          </form>
          {status === "error" && (
            <p className="hub-media__newsletter-feedback" role="alert">
              Não consegui enviar agora. Tente novamente em instantes.
            </p>
          )}
          {status === "sent" && (
            <p className="hub-media__newsletter-feedback" role="status">
              Pronto! Você vai receber os bastidores no seu e-mail.
            </p>
          )}
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
