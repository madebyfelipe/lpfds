"use client";

import { FormEvent } from "react";

export function NewsletterBand() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    alert("Inscrição simulada com sucesso!");
  }

  return (
    <section className="newsletter-band">
      <div className="site-shell">
        <div className="newsletter__layout">
          {/* Newsletter Box */}
          <div className="newsletter-box sr">
            <h3 className="newsletter-box__title">Newsletter</h3>
            <p className="newsletter-box__description">
              Bastidores de um designer de marca. Sem enrolação.
            </p>
            <form onSubmit={handleSubmit} className="newsletter-box__form">
              <input
                type="email"
                placeholder="voce@email.com"
                required
                className="newsletter-box__input"
              />
              <button type="submit" className="button button--primary">
                Assinar
              </button>
            </form>
          </div>

          {/* Coupon Box */}
          <div className="coupon-box sr">
            <span className="coupon-box__kicker">CUPOM</span>
            <div className="coupon-box__code">FELIPE10</div>
            <p className="coupon-box__description">10% na primeira mentoria.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
