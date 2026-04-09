import { problemItems, solutionItems } from "@/lib/data";

export function ProblemSolution() {
  return (
    <section className="section section--compare">
      <div className="site-shell">
        <div className="section-header">
          <span className="section-kicker sr">Solução</span>
          <h2 className="section-title sr">
            Por que a maioria das marcas desiste de produzir conteúdo
          </h2>
          <p className="section-copy sr">
            (e como a Made by Felipe resolve isso)
          </p>
        </div>
        <div className="compare">
          <article className="compare-card compare-card--problem sr">
            <p className="compare-card__title">Seu cenário atual</p>
            <ul className="compare-card__list">
              {problemItems.map((item) => (
                <li key={item} className="compare-card__item">
                  <span className="compare-card__itemMark compare-card__itemMark--x" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="compare-card compare-card--solution sr">
            <p className="compare-card__title">Com a Made by Felipe</p>
            <ul className="compare-card__list">
              {solutionItems.map((item) => (
                <li key={item} className="compare-card__item">
                  <span className="compare-card__itemMark compare-card__itemMark--check" aria-hidden="true">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>

  );
}
