"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IDIOMAS, UI, gravarIdioma, localeDoPath, rotaEquivalente } from "@/lib/i18n";

/**
 * Seletor PT | EN do portfólio, dentro da faixa do título.
 *
 * Nos outros páginas do site ele é o pill flutuante (LangFloater); aqui não
 * cabe: o carrossel ocupa a tela inteira e o pill cobria os filtros no canto
 * inferior esquerdo. Então o mesmo par de links vive ao lado do título, na
 * mesma linguagem visual (`.langfloat__nav` / `.langfloat__opt`), e o pill
 * flutuante é escondido pela CSS nesta página.
 */
export function PflLangSwitch() {
  const pathname = usePathname() ?? "/";
  const atual = localeDoPath(pathname);

  return (
    <nav className="langfloat__nav pfl__lang" aria-label={UI[atual].idioma}>
      {IDIOMAS.map((o) => {
        const ativo = o.locale === atual;
        return (
          <Link
            key={o.locale}
            href={rotaEquivalente(pathname, o.locale)}
            hrefLang={o.lang}
            lang={o.lang}
            className="langfloat__opt"
            aria-current={ativo ? "true" : undefined}
            aria-label={`${o.sigla}, ${o.nome}`}
            onClick={() => gravarIdioma(o.locale)}
          >
            {o.sigla}
          </Link>
        );
      })}
    </nav>
  );
}
