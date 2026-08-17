"use client";

import { useState } from "react";
import { ScheduleLink } from "@/components/ScheduleLink";
import { ebook, subscribe } from "@/lib/newsletter";

export function HubMedia() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  // O link do mirror só existe depois que a API aceita o cadastro — é o portão.
  const [download, setDownload] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      const result = await subscribe(email, "hub-ebook");
      if (!result.ok || !result.download) throw new Error("cadastro recusado");
      setDownload(result.download);
      setStatus("sent");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  const buttonLabel =
    status === "sending"
      ? "Enviando…"
      : status === "error"
        ? "Tentar de novo"
        : "QUERO O E-BOOK";

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

          {status === "sent" && download ? (
            <>
              <a
                className="hub-media__download-btn"
                href={download}
                target="_blank"
                rel="noopener noreferrer"
              >
                Baixar o e-book →
              </a>
              <p className="hub-media__newsletter-feedback" role="status">
                Pronto! Você está na lista — os bastidores do estúdio chegam por e-mail.
              </p>
            </>
          ) : (
            <>
              <form className="hub-media__newsletter-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="hub-media__input"
                  placeholder="voce@email.com"
                  required
                  aria-label="Seu e-mail"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  disabled={status === "sending"}
                />
                <button
                  type="submit"
                  className="button button--primary hub-media__submit-btn"
                  disabled={status === "sending"}
                >
                  {buttonLabel}
                </button>
              </form>
              {status === "error" && (
                <p className="hub-media__newsletter-feedback" role="alert">
                  Não consegui enviar agora. Tente novamente em instantes.
                </p>
              )}
              <p className="hub-media__newsletter-note">
                O download exige assinatura da newsletter. Sem spam, cancele quando quiser.
              </p>
            </>
          )}
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
