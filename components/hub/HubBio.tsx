import Image from "next/image";

export function HubBio() {
  return (
    <section className="hub-bio">
      <div className="hub-bio__container">
        <div className="hub-bio__portrait">
          <Image
            src="/eu.jpg"
            alt="Felipe — Designer de marca"
            width={260}
            height={320}
            priority
            className="hub-bio__image"
          />
        </div>

        <div className="hub-bio__content">
          <span className="hub-bio__kicker">/SOBRE MIM</span>
          <h2 className="hub-bio__title">Oi, eu me chamo Felipe.</h2>
          <p className="hub-bio__text">
            Sou designer de marca. Trabalho no ponto em que estratégia, conteúdo e interface se encontram — onde uma empresa deixa de parecer "mais uma".
          </p>
          <p className="hub-bio__text">
            Nomes como Nikolas Ferreira, Filipe Trindade, Lucas Scudeller e Pedro Superti já confiaram esse trabalho a mim. Ele já foi ao ar na Record, SBT e Band.
          </p>
          <p className="hub-bio__text">
            Pra mim, um projeto não começa na primeira tela. Começa na pergunta que quase ninguém faz: como essa marca precisa ser percebida para valer o que cobra?
          </p>
          <p className="hub-bio__text">
            Design bonito chama atenção. Do meu jeito, design existe pra mudar a{" "}
            <span className="hub-bio__highlight">percepção da marca</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
