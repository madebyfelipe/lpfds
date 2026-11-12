"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Compartilhar o artigo. Só links simples e a área de transferência: nenhum
 * script de terceiros, então não depende do consentimento de cookies. Em
 * celulares com a Web Share API, o botão "Compartilhar" abre a folha nativa.
 */
export function ShareBar({ url, title }: { url: string; title: string }) {
  const [status, setStatus] = useState("");
  const [canShare, setCanShare] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- detecção de recurso só existe no cliente
    setCanShare(typeof navigator.share === "function");
    return () => clearTimeout(timer.current);
  }, []);

  const say = (message: string) => {
    setStatus(message);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus(""), 3000);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      say("Link copiado.");
    } catch {
      say("Não foi possível copiar. Copie o endereço pela barra do navegador.");
    }
  };

  const share = async () => {
    try {
      await navigator.share({ title, url });
    } catch {
      /* Quem fecha a folha de compartilhar não é erro. */
    }
  };

  const encoded = encodeURIComponent(url);
  const whatsapp = `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`;
  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`;

  return (
    <div className="inst-share" role="group" aria-label="Compartilhar este artigo">
      <ul className="inst-share__list">
        {canShare && (
          <li>
            <button type="button" className="inst-share__btn" onClick={share}>
              Compartilhar
            </button>
          </li>
        )}
        <li>
          <button type="button" className="inst-share__btn" onClick={copy}>
            Copiar link
          </button>
        </li>
        <li>
          <a className="inst-share__btn" href={whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp<span className="inst-share__sr"> (abre em nova aba)</span>
          </a>
        </li>
        <li>
          <a className="inst-share__btn" href={linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn<span className="inst-share__sr"> (abre em nova aba)</span>
          </a>
        </li>
      </ul>
      <p role="status" className="inst-share__status">
        {status}
      </p>
    </div>
  );
}
