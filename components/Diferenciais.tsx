const differentials = [
  {
    title: "Estratégia antes do visual",
    description: "Todo projeto começa entendendo o negócio. O design só entra em cena quando os objetivos, o posicionamento e a estratégia estão claros.",
  },
  {
    title: "Comunicação alinhada ao negócio",
    description: "Cada site, identidade, interface ou peça é desenvolvida para comunicar valor, fortalecer a marca e apoiar objetivos reais de negócio.",
  },
  {
    title: "Experiência em branding e marketing",
    description: "Foco em criar percepção de autoridade e transformar interesse em conversão de clientes.",
  },
  {
    title: "UX/UI para produtos digitais",
    description: "Interfaces limpas e funcionais desenvolvidas para facilitar a experiência e guiar o usuário.",
  },
  {
    title: "Conteúdo pensado para autoridade",
    description: "Planejamento editorial e produção visual alinhados para destacar seu negócio da concorrência.",
  },
  {
    title: "Processo claro e parceria próxima",
    description: "Cronograma claro, cumprimento rigoroso de prazos e alinhamento constante em cada etapa.",
  },
];

export function Diferenciais() {
  return (
    <section id="diferenciais" className="diferenciais-section">
      <div className="site-shell">
        <div className="section-header">
          <span className="section-kicker sr">Diferenciais</span>
          <h2 className="section-title sr">
            O que você encontra <em>trabalhando comigo</em>
          </h2>
          <p className="section-copy sr">
            Não sou apenas o designer que entrega arquivos. Participo das decisões que fazem uma marca crescer.
          </p>
        </div>

        <div className="diferenciais__grid">
          {differentials.map((item, index) => (
            <article key={item.title} className="diferencial-card sr">
              <span className="diferencial-card__number">/0{index + 1}</span>
              <h3 className="diferencial-card__title">{item.title}</h3>
              <p className="diferencial-card__description">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
