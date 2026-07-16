"use client";

import { useState } from "react";
import { ScheduleLink } from "@/components/ScheduleLink";

export function HubMedia() {
  const [sent, setSent] = useState(false);

  return (
    <section className="hub-media">
      <div className="hub-media__grid">
        <div className="hub-media__newsletter">
          <h3 className="hub-media__newsletter-title">Newsletter</h3>
          <p className="hub-media__newsletter-desc">
            Os bastidores do meu trabalho. Como eu transformo uma decisão de design em percepção — sem enrolação.
          </p>
          <form
            className="hub-media__newsletter-form"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <input
              type="email"
              className="hub-media__input"
              placeholder="voce@email.com"
              required
              aria-label="Seu e-mail"
            />
            <button type="submit" className="button button--primary hub-media__submit-btn">
              {sent ? "Feito ✓" : "QUERO OS BASTIDORES"}
            </button>
          </form>
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
