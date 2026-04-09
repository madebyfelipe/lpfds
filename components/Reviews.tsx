"use client";

import Image from "next/image";
import { useState } from "react";
import { reviews } from "@/lib/data";

function Avatar({ review, dark }: { review: (typeof reviews)[0]; dark?: boolean }) {
  if (review.avatarSrc) {
    return (
      <div className={`review-card__avatar${dark ? " review-card__avatar--dark" : ""} review-card__avatar--img`}>
        <Image src={review.avatarSrc} alt={review.name ?? review.role} fill style={{ objectFit: "cover" }} />
      </div>
    );
  }
  return (
    <div className={`review-card__avatar${dark ? " review-card__avatar--dark" : ""}${review.source === "google" ? " review-card__avatar--google" : ""}`}>
      {review.initials}
    </div>
  );
}

function cardClass(base: string, i: number, hovered: number | null) {
  const isActive = hovered === i;
  const isDim = hovered !== null && hovered !== i;
  return `${base}${isActive ? " review-card--active" : ""}${isDim ? " review-card--dim" : ""}`;
}

export function Reviews() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="resultados" className="section">
      <div className="site-shell">
        <div className="section-header">
          <span className="section-kicker sr">Resultados</span>
          <h2 className="section-title sr">
            Quem parou de <em>improvisar</em>
          </h2>
          <p className="section-copy sr">
            Parcerias de longo prazo que geram resultado real, não só likes.
          </p>
        </div>

        <div className="reviews__bento sr">
          {/* Card 0 — tall, with avatar photo */}
          <article
            className={cardClass("review-card review-card--tall", 0, hovered)}
            onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(null)}
          >
            <p className="review-card__quote">
              <span className="review-card__qq">"</span>
              {reviews[0].quote}
            </p>
            <div className="review-card__foot">
              <Avatar review={reviews[0]} />
              <div>
                <p className="review-card__name">{reviews[0].name ?? reviews[0].role}</p>
                <p className="review-card__role">{reviews[0].role} · {reviews[0].company}</p>
              </div>
            </div>
          </article>

          {/* Right column */}
          <div className="reviews__col">
            {/* Card 1 */}
            <article
              className={cardClass("review-card review-card--light", 1, hovered)}
              onMouseEnter={() => setHovered(1)}
              onMouseLeave={() => setHovered(null)}
            >
              <p className="review-card__quote">
                <span className="review-card__qq">"</span>
                {reviews[1].quote}
              </p>
              <div className="review-card__foot">
                <Avatar review={reviews[1]} />
                <div>
                  <p className="review-card__name">{reviews[1].role}</p>
                  {reviews[1].company && <p className="review-card__role">{reviews[1].company}</p>}
                </div>
              </div>
            </article>

            {/* Card 2 — dark */}
            <article
              className={cardClass("review-card review-card--dark", 2, hovered)}
              onMouseEnter={() => setHovered(2)}
              onMouseLeave={() => setHovered(null)}
            >
              <p className="review-card__quote">
                <span className="review-card__qq">"</span>
                {reviews[2].quote}
              </p>
              <div className="review-card__foot">
                <Avatar review={reviews[2]} dark />
                <div>
                  <p className="review-card__name">{reviews[2].role}</p>
                  {reviews[2].company && <p className="review-card__role">{reviews[2].company}</p>}
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Card 3 — full width */}
        <div className="sr">
        <article
          className={cardClass("review-card review-card--wide", 3, hovered)}
          onMouseEnter={() => setHovered(3)}
          onMouseLeave={() => setHovered(null)}
        >
          <p className="review-card__quote">
            <span className="review-card__qq">"</span>
            {reviews[3].quote}
          </p>
          <div className="review-card__foot">
            <Avatar review={reviews[3]} />
            <div>
              <p className="review-card__name">{reviews[3].role}</p>
              {reviews[3].company && <p className="review-card__role">{reviews[3].company}</p>}
            </div>
          </div>
        </article>
        </div>
      </div>
    </section>
  );
}
