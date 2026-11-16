"use client";

import { useEffect } from "react";

/**
 * Acerta o `lang` do <html> por idioma. O layout raiz é um só (pt-BR) — dividi-lo
 * em dois layouts raiz obrigaria a mover todas as pastas do app. A página em
 * inglês marca o próprio conteúdo com `lang="en"` no wrapper (vale para leitor
 * de tela e para quem lê o HTML) e este componente corrige o <html> no
 * navegador, inclusive na navegação client-side entre PT e EN.
 */
export function HtmlLang({ lang }: { lang: "pt-BR" | "en" }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
