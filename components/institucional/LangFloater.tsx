"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IDIOMAS, UI, gravarIdioma, lerIdioma, localeDoPath, rotaEquivalente, type Locale } from "@/lib/i18n";

/**
 * Seletor de idioma flutuante (PT | EN), canto inferior esquerdo — o CTA de
 * agendar e o "voltar ao topo" ficam à direita, e no celular ele sobe acima da
 * faixa .inst-mobile-cta. Leva à página equivalente (lib/i18n.ts → ROTAS); sem
 * par em inglês, leva à home /en.
 *
 * A escolha vai no cookie `mbf-lang` (12 meses, listado em /cookies). O idioma
 * do navegador só gera uma sugestão discreta, nunca redirecionamento: o
 * Googlebot e quem compartilha um link sempre recebem a página pedida.
 */
export function LangFloater() {
  const pathname = usePathname() ?? "/";
  const atual = localeDoPath(pathname);
  const t = UI[atual];
  const [sugerir, setSugerir] = useState(false);

  useEffect(() => {
    if (lerIdioma()) return setSugerir(false);
    const primeiro = (navigator.languages?.[0] ?? navigator.language ?? "").toLowerCase();
    const prefere: Locale | null = primeiro.startsWith("pt") ? "pt" : primeiro.startsWith("en") ? "en" : null;
    setSugerir(prefere !== null && prefere !== atual);
  }, [atual]);

  const outro: Locale = atual === "pt" ? "en" : "pt";
  // A sugestão é escrita no idioma que ela oferece (quem lê é quem prefere aquele idioma).
  const textoSugestao = UI[outro].sugestao;
  const fecharSugestao = UI[outro].sugestaoFechar;

  return (
    <div className="langfloat">
      {sugerir && (
        <p className="langfloat__hint" lang={outro === "en" ? "en" : "pt-BR"}>
          <Link href={rotaEquivalente(pathname, outro)} hrefLang={outro === "en" ? "en" : "pt-BR"} onClick={() => gravarIdioma(outro)}>
            {textoSugestao} →
          </Link>
          <button
            type="button"
            className="langfloat__dismiss"
            aria-label={fecharSugestao}
            onClick={() => {
              gravarIdioma(atual);
              setSugerir(false);
            }}
          >
            <span aria-hidden="true">×</span>
          </button>
        </p>
      )}
      <nav className="langfloat__nav" aria-label={t.idioma}>
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
    </div>
  );
}
