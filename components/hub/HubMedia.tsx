"use client";

import { useState } from "react";

export function HubMedia() {
  const [sent, setSent] = useState(false);

  return (
    <section id="newsletter" className="hub-media">
      <span className="hub-media__badge">Fique por dentro</span>

      <div className="hub-media__grid">
        <div className="hub-media__newsletter">
          <h3 className="hub-media__newsletter-title">Newsletter</h3>
          <p className="hub-media__newsletter-desc">
            Bastidores de um designer de marca. Sem enrolação.
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
            <button type="submit" className="button button--primary">
              {sent ? "Feito ✓" : "Assinar"}
            </button>
          </form>
        </div>

        <div className="hub-media__coupon">
          <div className="hub-media__coupon-label">CUPOM</div>
          <div className="hub-media__coupon-code">FELIPE10</div>
          <div className="hub-media__coupon-desc">
            10% na primeira mentoria.
          </div>
        </div>
      </div>
    </section>
  );
}
