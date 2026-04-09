import { reviews } from "@/lib/data";

export function Reviews() {
  const [primaryReview, secondaryReview, featuredReview] = reviews;

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

        <div className="reviews__grid">
          <div className="reviews__stack">
            {[primaryReview, secondaryReview].map((review) => (
              <article key={review.initials} className="review-card sr">
                <div className="review-card__head">
                  <div className="review-card__avatar">{review.initials}</div>
                  <div>
                    <p className="review-card__name">{review.role}</p>
                    <p className="review-card__role">{review.company}</p>
                  </div>
                </div>
                <p className="review-card__quote">{review.quote}</p>
                <button type="button" className="review-card__reply button button--ghost">
                  ↩ Responder
                </button>
              </article>
            ))}
          </div>

          <article className="review-card review-card--featured sr">
            <div className="review-card__head">
              <div className="review-card__avatar">{featuredReview.initials}</div>
              <div>
                <p className="review-card__name">{featuredReview.role}</p>
                <p className="review-card__role">{featuredReview.company}</p>
              </div>
            </div>
            <p className="review-card__quote">{featuredReview.quote}</p>
            <button type="button" className="review-card__reply button button--ghost">
              ↩ Responder
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}
