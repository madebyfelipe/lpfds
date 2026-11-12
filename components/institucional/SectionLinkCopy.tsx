"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Clicar num subtítulo (h2) do artigo copia o link direto para aquela seção.
 * Melhoria progressiva: sem JS o sumário continua levando às âncoras. O
 * teclado já tem o sumário "Neste artigo"; aqui é atalho para quem lê com mouse
 * ou toque.
 */
export function SectionLinkCopy({ scopeSelector }: { scopeSelector: string }) {
  const [message, setMessage] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const scope = document.querySelector<HTMLElement>(scopeSelector);
    if (!scope) return;
    scope.setAttribute("data-copy", "");

    const onClick = async (event: MouseEvent) => {
      const heading = (event.target as Element).closest<HTMLElement>("h2[id]");
      if (!heading || !scope.contains(heading) || window.getSelection()?.toString()) return;
      const url = `${location.origin}${location.pathname}#${heading.id}`;
      history.replaceState(null, "", `#${heading.id}`);
      let text = "Link da seção copiado.";
      try {
        await navigator.clipboard.writeText(url);
      } catch {
        text = "Endereço da seção na barra do navegador.";
      }
      setMessage(text);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setMessage(""), 2600);
    };

    scope.addEventListener("click", onClick);
    return () => {
      scope.removeEventListener("click", onClick);
      scope.removeAttribute("data-copy");
      clearTimeout(timer.current);
    };
  }, [scopeSelector]);

  return (
    <p role="status" className="inst-toast" data-show={message ? "" : undefined}>
      {message}
    </p>
  );
}
