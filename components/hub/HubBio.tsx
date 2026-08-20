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
            className="hub-bio__image"
          />
        </div>

        <div className="hub-bio__content">
          <span className="hub-bio__kicker">/QUEM FAZ</span>
          <h2 className="hub-bio__title">Sou Felipe, designer de marca.</h2>
          <p className="hub-bio__text">
            Faço isso há sete anos. Comecei aos quinze, passei por quatro agências e há três anos toco meu próprio estúdio, aqui de Sorocaba.
          </p>
          <p className="hub-bio__text">
            Nesse tempo construí marca para mais de 150 empresas e profissionais. Liderei eventos presenciais com mais de 1500 participantes, gerei mais de 1 milhão de impressões e ajudei centenas de profissionais a construírem seu posicionamento e sua marca.
          </p>
          <p className="hub-bio__text">
            Hoje eu faço isso para <span className="hub-bio__highlight">psicólogos e clínicas</span>. Passo uma manhã com você e, em 30 dias, seu posicionamento, sua identidade visual e o seu jeito de falar entram no ar. Tudo dentro do artigo 20 do Código de Ética.
          </p>
        </div>
      </div>
    </section>
  );
}
