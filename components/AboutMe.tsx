import Image from "next/image";

export function AboutMe() {
  return (
    <section id="sobre-mim" className="aboutme-section">
      <div className="site-shell">
        <div className="aboutme__layout">
          <div className="aboutme__content sr">
            <span className="aboutme__kicker">/SOBRE MIM</span>
            <h2 className="aboutme__title">Oi, eu me chamo Felipe.</h2>
            <p className="aboutme__text">
              Sou designer especializado em conteúdo, interfaces digitais e posicionamento de marcas.
            </p>
            <p className="aboutme__text">
              Já trabalhei com diversos nomes como Nikolas Ferreira, Filipe Trindade, Lucas Scudeller, Pedro Superti, entre outros. Meu trabalho já foi exibido na Record, SBT, Band, etc.
            </p>
            <p className="aboutme__text">
              Acredito que um bom projeto começa muito antes da primeira tela ou do primeiro layout. Começa entendendo o negócio, seus objetivos e como a marca deve ser percebida.
            </p>
            <p className="aboutme__text" style={{ fontWeight: 700, color: "var(--text-inverse)" }}>
              Porque um bom design chama atenção. Um design estratégico muda a <em>percepção da marca</em>.
            </p>
          </div>

          <div className="aboutme__portrait-wrap sr">
            <Image
              src="/eu.jpg"
              alt="Felipe"
              fill
              className="aboutme__portrait"
              sizes="(max-width: 768px) 320px, 320px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
