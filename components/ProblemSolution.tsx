import { problemItems, solutionItems } from "@/lib/data";

export function ProblemSolution() {
  return (
    <section className="section">
      <div className="site-shell">
        <div className="section-header">
          <span className="section-kicker sr">Por que isso importa</span>
          <h2 className="section-title sr">
            O cenário de quem <em>não investe</em> em posicionamento
          </h2>
        </div>

        <div className="compare">
          <article className="compare-card compare-card--problem sr-left">
            <p className="compare-card__title">✕ Seu cenário atual</p>
            <ul className="compare-card__list">
              {problemItems.map((item) => (
                <li key={item} className="compare-card__item">
                  <span className="compare-card__itemMark">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="compare-card compare-card--solution sr-right">
            <p className="compare-card__title">✦ Com a Made by Felipe</p>
            <ul className="compare-card__list">
              {solutionItems.map((item) => (
                <li key={item} className="compare-card__item">
                  <span className="compare-card__itemMark">•</span>
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
