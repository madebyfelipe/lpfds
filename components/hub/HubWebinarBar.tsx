import Link from "next/link";
import { hubWebinarHref, webinar } from "@/lib/webinar";

/**
 * Faixa fixa no topo do /hub anunciando o webinar. Fica ANTES da InstNav e as
 * duas grudam no topo (sticky): a faixa em top:0 e a nav logo abaixo dela (ver
 * `.hub-webinar-bar + .inst-nav` no hub.css). A faixa inteira é um link.
 *
 * Cores hardcoded no vermelho da marca: o vermelho é a única cor que não
 * inverte com o tema, então não vira token — e a faixa mora fora do `.inst`.
 */
export function HubWebinarBar() {
  return (
    <Link href={hubWebinarHref} className="hub-webinar-bar">
      <span className="hub-webinar-bar__dot" aria-hidden="true" />
      <strong className="hub-webinar-bar__label">{webinar.short}</strong>
      <span className="hub-webinar-bar__mid">{webinar.dataCurta}</span>
      <span className="hub-webinar-bar__cta">
        Garantir vaga <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
