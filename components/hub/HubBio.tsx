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
            Eu sou o Felipe. Construo marca há sete anos e hoje atendo exclusivamente psicólogos.
          </h2>
          <p className="hub-bio__text">
            Cheguei nesse mercado por um motivo pessoal: minha mulher está se formando em psicologia, e eu quis resolver pra ela a parte que a faculdade não ensina, que é como o paciente chega.
          </p>
          <p className="hub-bio__text">
            Estudei o nicho a fundo — as regras de publicidade do Conselho, as dinâmicas de captação, o comportamento de quem procura terapia pela primeira vez — e entendi uma coisa que mudou meu trabalho: com o atendimento online, a sala perdeu o endereço, e a escolha do paciente passou a acontecer <span className="hub-bio__highlight">antes da primeira sessão</span>. Ela acontece no perfil, no tom de voz, na clareza sobre quem aquela profissional atende.
          </p>
          <p className="hub-bio__text">
            É exatamente aí que eu atuo: na percepção que define o preço que você consegue cobrar, o tipo de paciente que agenda e a indicação que chega depois.
          </p>
        </div>
      </div>
    </section>
  );
}
