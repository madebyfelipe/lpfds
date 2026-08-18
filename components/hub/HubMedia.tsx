"use client";

import { ScheduleLink } from "@/components/ScheduleLink";
import { ebook } from "@/lib/newsletter";
import { openEbookModal } from "./EbookModal";

export function HubMedia() {
  return (
    <section className="hub-media" id="ebook">
      <div className="hub-media__grid">
        <div className="hub-media__newsletter">
          <span className="hub-media__newsletter-kicker">Material gratuito</span>
          <h3 className="hub-media__newsletter-title">{ebook.title}</h3>
          <p className="hub-media__newsletter-desc">
            O passo a passo pra transformar formação e experiência em uma presença que
            comunica no nível do seu preparo. Entre na newsletter e o download libera
            na hora.
          </p>
          <button
            type="button"
            className="button button--primary hub-media__submit-btn"
            onClick={openEbookModal}
          >
            QUERO O E-BOOK
          </button>
          <p className="hub-media__newsletter-note">
            O download exige assinatura da newsletter. Sem spam, cancele quando quiser.
          </p>
        </div>

        <ScheduleLink className="hub-media__coupon">
          <span className="hub-media__coupon-label">MENTORIA</span>
          <h3 className="hub-media__coupon-code" style={{ fontSize: "1.45rem", lineHeight: "1.2", fontWeight: 700, textTransform: "none", margin: "8px 0" }}>
            Uma conversa, seu posicionamento destravado.
          </h3>
          <span className="hub-media__coupon-desc">Agendar mentoria →</span>
        </ScheduleLink>
      </div>
    </section>
  );
}
