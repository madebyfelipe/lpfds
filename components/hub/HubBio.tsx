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
          <span className="hub-bio__kicker">/CONSULTÓRIO DE PSICOLOGIA</span>
          <h2 className="hub-bio__title">Marca de consultório em meio dia de imersão.</h2>
          <p className="hub-bio__text">
            Sou Felipe, designer de marca. Passo uma manhã com você e ponho posicionamento, identidade visual e verbal no ar em 30 dias — dentro do artigo 20 do Código de Ética Profissional do Psicólogo.
          </p>
          <p className="hub-bio__text">
            Antes de qualquer decisão visual, entram na mesa receita, carteira, valor de sessão e ocupação de agenda. É a leitura do negócio que decide o desenho, não o contrário.
          </p>
          <p className="hub-bio__text">
            Nomes como Nikolas Ferreira, Filipe Trindade, Lucas Scudeller e Pedro Superti já confiaram esse trabalho a mim. Ele já foi ao ar na Record, SBT e Band.
          </p>
          <p className="hub-bio__text">
            Formação longa e uma presença que comunica abaixo do próprio preparo: é esse intervalo que eu fecho, mudando a{" "}
            <span className="hub-bio__highlight">percepção da marca</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
