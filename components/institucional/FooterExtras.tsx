"use client";

import { useEffect, useState } from "react";

/**
 * Hora local de Sorocaba no rodapé (referência: Mammut Studios). Só aparece
 * depois da hidratação: renderizar a hora no servidor geraria diferença entre
 * HTML e cliente. Sem JS simplesmente não há relógio — nada quebra.
 */
export function FooterRelogio() {
  const [hora, setHora] = useState("");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("pt-BR", {
      timeZone: "America/Sao_Paulo",
      hour: "2-digit",
      minute: "2-digit"
    });
    const tick = () => setHora(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  if (!hora) return null;
  return (
    <time className="inst-footer__clock" aria-hidden="true">
      {hora}
    </time>
  );
}

/** "Voltar ao topo" do rodapé; respeita movimento reduzido. */
export function FooterTopo() {
  return (
    <button
      type="button"
      className="inst-footer__link inst-footer__top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth"
        })
      }
    >
      Voltar ao topo <span aria-hidden="true">↑</span>
    </button>
  );
}
