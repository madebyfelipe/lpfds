"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ebook, subscribe } from "@/lib/newsletter";

/**
 * Modal do e-book — a única superfície com formulário de newsletter no hub.
 * O card do deck e a seção Media só disparam openEbookModal(); o link do
 * mirror só existe depois que a API aceita o cadastro (é o portão).
 */
const OPEN_EVENT = "mbf:ebook-open";
/** Quem já assinou reabre o modal direto no download, sem cadastrar de novo. */
const STORAGE_KEY = "mbf-ebook-download";

export function openEbookModal() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function EbookModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [download, setDownload] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const consentId = useId();

  const close = useCallback(() => {
    setOpen(false);
    openerRef.current?.focus();
    openerRef.current = null;
  }, []);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setDownload(saved);
        setStatus("sent");
      }
    } catch {
      // sem persistência — o visitante só cadastra de novo
    }

    const onOpen = () => {
      openerRef.current = document.activeElement as HTMLElement | null;
      setOpen(true);
    };
    // Links externos para /hub#ebook continuam levando ao portão.
    const onHash = () => {
      if (window.location.hash === "#ebook") onOpen();
    };

    window.addEventListener(OPEN_EVENT, onOpen);
    window.addEventListener("hashchange", onHash);
    onHash();

    return () => {
      window.removeEventListener(OPEN_EVENT, onOpen);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab") return;

      // aria-modal="true" promete que o resto da pagina esta inerte; sem
      // prender o Tab, a promessa e falsa e o foco sai por trás do modal.
      const card = cardRef.current;
      if (!card) return;
      const foco = card.querySelectorAll<HTMLElement>(
        'a[href], button:not(:disabled), input:not(:disabled), [tabindex]:not([tabindex="-1"])'
      );
      if (foco.length === 0) return;

      const primeiro = foco[0];
      const ultimo = foco[foco.length - 1];
      if (e.shiftKey && document.activeElement === primeiro) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primeiro.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    if (!consent) return;
    setStatus("sending");

    try {
      const result = await subscribe({ name, email, source: "hub-ebook", consent });
      if (!result.ok || !result.download) throw new Error("cadastro recusado");
      setDownload(result.download);
      setStatus("sent");
      setName("");
      setEmail("");
      setConsent(false);
      try {
        localStorage.setItem(STORAGE_KEY, result.download);
      } catch {
        // segue sem persistência
      }
    } catch {
      setStatus("error");
    }
  }

  if (!open) return null;

  const buttonLabel =
    status === "sending"
      ? "Enviando…"
      : status === "error"
        ? "Tentar de novo"
        : "QUERO O E-BOOK";

  return (
    <div
      className="hub-ebook"
      role="dialog"
      aria-modal="true"
      aria-labelledby="hub-ebook-title"
      onClick={close}
    >
      <div ref={cardRef} className="hub-ebook__card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="hub-ebook__close"
          aria-label="Fechar a janela do e-book"
          onClick={close}
        >
          <span aria-hidden="true">✕</span>
        </button>

        {status === "sent" && download ? (
          <>
            <span className="hub-ebook__kicker">Liberado</span>
            <h2 className="hub-ebook__title" id="hub-ebook-title">
              Seu e-book está pronto
            </h2>
            <p className="hub-ebook__copy">
              Você está na lista — os bastidores do estúdio chegam por e-mail. O
              arquivo abre em uma nova aba.
            </p>
            <a
              className="hub-ebook__download"
              href={download}
              target="_blank"
              rel="noopener noreferrer"
            >
              Baixar o e-book →
            </a>
          </>
        ) : (
          <>
            <span className="hub-ebook__kicker">Material gratuito</span>
            <h2 className="hub-ebook__title" id="hub-ebook-title">
              {ebook.title}
            </h2>
            <p className="hub-ebook__copy">
              Deixe seu nome e e-mail para entrar na newsletter — o download libera
              na hora e o e-book também vai para a sua caixa de entrada.
            </p>
            <form className="hub-ebook__form" onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                type="text"
                className="hub-ebook__input"
                placeholder="Seu nome"
                required
                autoComplete="name"
                aria-label="Seu nome"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                disabled={status === "sending"}
              />
              <input
                type="email"
                className="hub-ebook__input"
                placeholder="voce@email.com"
                required
                autoComplete="email"
                aria-label="Seu e-mail"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                disabled={status === "sending"}
              />
              <label className="hub-ebook__consent" htmlFor={consentId}>
                <input
                  id={consentId}
                  type="checkbox"
                  required
                  aria-required="true"
                  checked={consent}
                  onChange={(e) => {
                    setConsent(e.target.checked);
                    if (status === "error") setStatus("idle");
                  }}
                  disabled={status === "sending"}
                />
                <span>
                  Aceito receber a newsletter e o e-book por e-mail, nos termos
                  da{" "}
                  <Link href="/privacidade" className="hub-ebook__consent-link">
                    Política de Privacidade
                  </Link>
                  . Posso cancelar quando quiser.
                </span>
              </label>
              <button
                type="submit"
                className="hub-ebook__submit"
                disabled={status === "sending" || !consent}
              >
                {buttonLabel}
              </button>
            </form>
            {status === "error" && (
              <p className="hub-ebook__feedback" role="alert">
                Não consegui enviar agora. Tente novamente em instantes.
              </p>
            )}
            <p className="hub-ebook__note">
              O download exige assinatura da newsletter. Usamos seu e-mail só
              para isso.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
