import Image from "next/image";

export function HubBio() {
  return (
    <section className="hub-bio">
      <div className="hub-bio__container">
        <div className="hub-bio__portrait">
          <Image
            src="/eu.jpg"
            alt="Felipe Silva — estrategista de marca"
            width={260}
            height={320}
            className="hub-bio__image"
          />
        </div>

        <div className="hub-bio__content">
          <span className="hub-bio__kicker">/QUEM FAZ</span>
          <h2 className="hub-bio__title">
            Felipe Silva é estrategista de marca e especialista em posicionamento visual.
          </h2>
          <p className="hub-bio__text">
            Mais de 7 anos de experiência de mercado. É o nome à frente do estúdio Made by Felipe, somando mais de 150 projetos entregues e ecossistemas digitais estruturados.
          </p>
          <p className="hub-bio__text">
            Hoje ajuda <span className="hub-bio__highlight">psicólogos e clínicas</span> a construírem marcas e ensina sobre seu método nas redes sociais.
          </p>
        </div>
      </div>
    </section>
  );
}
