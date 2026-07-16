import { ScheduleLink } from "@/components/ScheduleLink";

export function HubHero() {
  return (
    <section className="hub-hero">
      <span className="hub-hero__kicker">/SOBRE</span>
      <h1 className="hub-hero__title">
        O design é só
        <br />
        <em>o começo.</em>
      </h1>
      <div className="hub-hero__subtitle">
        <p>
          Eu junto estratégia, branding, conteúdo e experiência digital numa coisa só — pra que sua marca diga a mesma coisa em cada ponto de contato.
        </p>
        <p>
          Da identidade ao site, do conteúdo às campanhas: uma marca só é levada a sério quando comunica a mesma mensagem em todo lugar. Eu cuido pra que isso aconteça.
        </p>
        <p>
          É isso que eu construo.
        </p>
      </div>
      <div className="hub-hero__actions">
        <ScheduleLink className="button button--primary hub-hero__cta">
          Começar um projeto
        </ScheduleLink>
      </div>
    </section>
  );
}
