/**
 * Idiomas do site institucional (nov/2026, pedido do Felipe via Tyler).
 *
 * O português continua na raiz e não muda de URL. A versão em inglês, para
 * terapeutas de fora do Brasil (EUA primeiro), vive sob /en, num grupo de rota
 * próprio (`app/(en)/en`). O blog fica só em português nesta etapa.
 *
 * `ROTAS` é a fonte única dos pares PT ↔ EN: o seletor de idioma, o hreflang
 * das páginas e o sitemap leem daqui. Página sem par em inglês (blog, legais,
 * webinar…) leva para a home /en, e o hreflang dela não cita o inglês.
 */

export type Locale = "pt" | "en";

export const LOCALE_COOKIE = "mbf-lang";

/** Pares de páginas equivalentes: [português, inglês]. */
export const ROTAS: ReadonlyArray<readonly [pt: string, en: string]> = [
  ["/", "/en"],
  ["/metodologia", "/en/method"],
  ["/cases", "/en/website-process"],
  ["/imersao", "/en/contact"]
];

export function localeDoPath(path: string): Locale {
  return path === "/en" || path.startsWith("/en/") ? "en" : "pt";
}

const semBarraFinal = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p);

/** Endereço equivalente no outro idioma (ou a home dele, se não houver par). */
export function rotaEquivalente(path: string, alvo: Locale): string {
  const p = semBarraFinal(path.split(/[?#]/)[0] || "/");
  const atual = localeDoPath(p);
  if (atual === alvo) return p;
  const par = ROTAS.find(([pt, en]) => (atual === "pt" ? pt === p : en === p));
  if (par) return alvo === "en" ? par[1] : par[0];
  return alvo === "en" ? "/en" : "/";
}

/**
 * `alternates` do Metadata para uma página com par: canonical no próprio idioma
 * e hreflang pt-BR / en / x-default (x-default = português, o site principal).
 */
export function alternatesDe(ptPath: string, locale: Locale) {
  const par = ROTAS.find(([pt]) => pt === ptPath);
  if (!par) throw new Error(`[i18n] rota sem par em inglês: ${ptPath}`);
  const [pt, en] = par;
  return {
    canonical: locale === "en" ? en : pt,
    languages: { "pt-BR": pt, en, "x-default": pt }
  };
}

/** Textos da interface compartilhada (nav, rodapé, controles, banner). */
export const UI = {
  pt: {
    pular: "Pular para o conteúdo",
    navPrincipal: "Principal",
    links: [
      { href: "/", label: "Início" },
      { href: "/metodologia", label: "Método" },
      { href: "/blog", label: "Blog" },
      { href: "/imersao", label: "Imersão" }
    ],
    conversar: "Conversar",
    conversar15: "Conversar por 15 minutos",
    menu: "Menu",
    fechar: "Fechar",
    abrirMenu: "Abrir menu",
    fecharMenu: "Fechar menu",
    tema: "Alternar entre modo claro e escuro",
    somLigar: "Ligar sons",
    somDesligar: "Desligar sons",
    topo: "Voltar ao topo",
    topoPagina: "Voltar ao topo da página",
    idioma: "Idioma do site",
    sugestao: "Versão em português disponível",
    sugestaoFechar: "Dispensar sugestão de idioma"
  },
  en: {
    pular: "Skip to content",
    navPrincipal: "Main",
    links: [
      { href: "/en", label: "Home" },
      { href: "/en/method", label: "Method" },
      { href: "/en/website-process", label: "Websites" },
      { href: "/en/contact", label: "Contact" }
    ],
    conversar: "Book a call",
    conversar15: "Book a 15-minute call",
    menu: "Menu",
    fechar: "Close",
    abrirMenu: "Open menu",
    fecharMenu: "Close menu",
    tema: "Switch between light and dark mode",
    somLigar: "Turn sounds on",
    somDesligar: "Turn sounds off",
    topo: "Back to top",
    topoPagina: "Back to top of page",
    idioma: "Site language",
    sugestao: "English version available",
    sugestaoFechar: "Dismiss language suggestion"
  }
} as const;
