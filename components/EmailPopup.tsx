"use client";

import { useEffect, useState } from "react";
import { subscribe } from "@/lib/newsletter";

const STORAGE_KEY = "mbf-manual-popup";
const OPEN_DELAY = 12000;

export function EmailPopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // localStorage indisponível — segue mostrando o popup
    }

    const timer = window.setTimeout(() => setOpen(true), OPEN_DELAY);

    const onExitIntent = (e: MouseEvent) => {
      if (e.clientY <= 0) setOpen(true);
    };
    document.addEventListener("mouseout", onExitIntent);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseout", onExitIntent);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function close() {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // sem persistência — apenas fecha nesta sessão
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      const result = await subscribe({ email, source: "landing-manual-popup" });
      if (!result.ok) throw new Error("cadastro recusado");
      setStatus("sent");
      setEmail("");
      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // segue sem persistência
      }
    } catch {
      setStatus("error");
    }
  }

  if (!open) return null;

  const buttonLabel =
    status === "sent"
      ? "Enviado ✓"
      : status === "sending"
        ? "Enviando…"
        : status === "error"
          ? "Tentar de novo"
          : "QUERO O MANUAL";

  return (
    <div
      className="email-popup"
      role="dialog"
      aria-modal="true"
      aria-labelledby="email-popup-title"
      onClick={close}
    >
      <div className="email-popup__card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="email-popup__close"
          aria-label="Fechar"
          onClick={close}
        >
          ✕
        </button>

        {status === "sent" ? (
          <div className="email-popup__done">
            <span className="email-popup__kicker">Prontinho</span>
            <h2 className="email-popup__title" id="email-popup-title">
              Manual a caminho <em>do seu e-mail</em>
            </h2>
            <p className="email-popup__copy">
              Confere a caixa de entrada (e o spam, só por garantia). Bom proveito.
            </p>
            <button type="button" className="button button--primary email-popup__submit" onClick={close}>
              Fechar
            </button>
          </div>
        ) : (
          <>
            <span className="email-popup__kicker">Material gratuito</span>
            <h2 className="email-popup__title" id="email-popup-title">
              Receba um <em>manual de conteúdo</em>
            </h2>
            <p className="email-popup__copy">
              O passo a passo que eu uso pra transformar autoridade em post que atrai cliente —
              sem depender de inspiração. Direto no seu e-mail, de graça.
            </p>
            <form className="email-popup__form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="email-popup__input"
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
                className="button button--primary email-popup__submit"
                disabled={status === "sending"}
              >
                {buttonLabel}
              </button>
            </form>
            {status === "error" && (
              <p className="email-popup__feedback" role="alert">
                Não consegui enviar agora. Tenta de novo em instantes.
              </p>
            )}
            <p className="email-popup__note">Sem spam. Cancele quando quiser.</p>
          </>
        )}
      </div>
    </div>
  );
}
