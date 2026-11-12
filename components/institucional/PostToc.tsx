"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/blog-body";

/**
 * Sumário "Neste artigo". O HTML estático já traz todos os links (funcionam
 * sem JS). Com `spy`, a seção que está sendo lida ganha `aria-current` e o
 * destaque do filete — usado só no sumário fixo do desktop; a versão recolhida
 * do mobile não precisa acompanhar a rolagem.
 */
export function PostToc({ headings, spy = false }: { headings: Heading[]; spy?: boolean }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!spy) return;
    const targets = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!targets.length) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      // Ativa o último título que já passou da linha logo abaixo da nav fixa.
      let current: string | null = null;
      for (const el of targets) {
        if (el.getBoundingClientRect().top <= 140) current = el.id;
        else break;
      }
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [headings, spy]);

  return (
    <ol className="inst-toc__list">
      {headings.map((h) => (
        <li key={h.id}>
          <a
            href={`#${h.id}`}
            className="inst-toc__link"
            aria-current={active === h.id ? "location" : undefined}
          >
            {h.text}
          </a>
        </li>
      ))}
    </ol>
  );
}
