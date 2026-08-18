import { ScheduleLink } from "@/components/ScheduleLink";

export function HubHero() {
  return (
    <section className="hub-hero">
      <span className="hub-hero__kicker">/A IMERSÃO</span>
      <h1 className="hub-hero__title">
        Meio dia com você.
        <br />
        <em>Trinta dias no ar.</em>
      </h1>
      <div className="hub-hero__subtitle">
        <p>
          Uma manhã para ler o consultório: histórico, carteira, valor da sessão, o público que você atende melhor e a concorrência da sua região.
        </p>
        <p>
          Depois vem o território — posicionamento, recorte e discurso —, aprovado antes de qualquer arte. E o sistema aplicado nos pontos de contato que a pessoa vê primeiro, com checagem de conformidade em cada peça.
        </p>
        <p>
          Trinta dias do briefing ao ar. Começa com quinze minutos de conversa.
        </p>
      </div>
      <div className="hub-hero__actions">
        <ScheduleLink className="button button--primary hub-hero__cta">
          Agendar 15 minutos
        </ScheduleLink>
      </div>
    </section>
  );
}
