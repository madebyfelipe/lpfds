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

/** Sigla, nome e hreflang de cada idioma, na ordem do seletor. */
export const IDIOMAS: ReadonlyArray<{
  locale: Locale;
  sigla: string;
  nome: string;
  lang: string;
}> = [
  { locale: "pt", sigla: "PT", nome: "Português", lang: "pt-BR" },
  { locale: "en", sigla: "EN", nome: "English", lang: "en" }
];

export const LOCALE_COOKIE = "mbf-lang";

/** Guarda a escolha de idioma por 12 meses (listada em /cookies). */
export function gravarIdioma(locale: Locale): void {
  const ano = 60 * 60 * 24 * 365;
  document.cookie = `${LOCALE_COOKIE}=${locale}; Max-Age=${ano}; Path=/; SameSite=Lax`;
}

/** Idioma já escolhido nesta máquina, ou null (aí vale a sugestão do navegador). */
export function lerIdioma(): string | null {
  const m = document.cookie.match(new RegExp(`(?:^|; )${LOCALE_COOKIE}=([^;]*)`));
  return m ? decodeURIComponent(m[1]) : null;
}

/** Pares de páginas equivalentes: [português, inglês]. */
export const ROTAS: ReadonlyArray<readonly [pt: string, en: string]> = [
  ["/", "/en"],
  ["/metodologia", "/en/method"],
  ["/cases", "/en/website-process"],
  ["/imersao", "/en/contact"]
];

/**
 * Pares que existem nos dois idiomas mas ficam fora do sitemap e do índice
 * (`noindex`, só por link direto): o portfólio e os cases. O seletor de idioma
 * e o hreflang continuam funcionando; o sitemap lê só `ROTAS`.
 */
export const ROTAS_OCULTAS: ReadonlyArray<readonly [pt: string, en: string]> = [
  ["/portfolio", "/en/portfolio"]
];

const TODOS_OS_PARES = [...ROTAS, ...ROTAS_OCULTAS];

export function localeDoPath(path: string): Locale {
  return path === "/en" || path.startsWith("/en/") ? "en" : "pt";
}

const semBarraFinal = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p);

/** Endereço equivalente no outro idioma (ou a home dele, se não houver par). */
export function rotaEquivalente(path: string, alvo: Locale): string {
  const p = semBarraFinal(path.split(/[?#]/)[0] || "/");
  const atual = localeDoPath(p);
  if (atual === alvo) return p;
  const par = TODOS_OS_PARES.find(([pt, en]) => (atual === "pt" ? pt === p : en === p));
  if (par) return alvo === "en" ? par[1] : par[0];

  // Cases: /portfolio/<slug> ↔ /en/portfolio/<slug>.
  const caso = p.match(/^\/(?:en\/)?portfolio\/(.+)$/);
  if (caso) return `${alvo === "en" ? "/en/portfolio" : "/portfolio"}/${caso[1]}`;

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
      { href: "/portfolio", label: "Portfólio" },
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
      { href: "/en/portfolio", label: "Work" },
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

/** Troca `{chave}` pelo valor — rótulos com o nome do cliente no meio. */
export function fmt(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ""));
}

/**
 * Portfólio (carrossel e gaveta). O texto dos cases em si fica em
 * lib/portfolio-texto.ts — aqui só a interface em volta.
 */
export const PFL = {
  pt: {
    titulo: "Portfólio",
    contador: "({n})",
    contadorSr: ", {n} projetos",
    regiao: "Projetos",
    filtro: "Filtrar projetos por categoria",
    todos: "Todos os projetos",
    cursor: "Ver projeto",
    cartao: "{cliente}, {categoria}: ver projeto",
    aoVivo: "Projeto {n} de {total}: {cliente}",
    fechar: "Fechar",
    escopo: "Escopo",
    pecas: "Peças do projeto {cliente}",
    pecaAlt: "Peça {n} do projeto {cliente}",
    anterior: "Peça anterior",
    proxima: "Próxima peça",
    sobre: "Sobre o projeto",
    verCase: "Ver o case completo",
    acessarSite: "Acessar o site",
    acessarSiteAria: "Acessar o site de {cliente} (abre em nova aba)",
    novaAba: " (abre em nova aba)"
  },
  en: {
    titulo: "Work",
    contador: "({n})",
    contadorSr: ", {n} projects",
    regiao: "Projects",
    filtro: "Filter projects by category",
    todos: "All projects",
    cursor: "View project",
    cartao: "{cliente}, {categoria}: view project",
    aoVivo: "Project {n} of {total}: {cliente}",
    fechar: "Close",
    escopo: "Scope",
    pecas: "Pieces from {cliente}",
    pecaAlt: "Piece {n} from {cliente}",
    anterior: "Previous piece",
    proxima: "Next piece",
    sobre: "About the project",
    verCase: "View the full case",
    acessarSite: "Visit the site",
    acessarSiteAria: "Visit {cliente}'s site (opens in a new tab)",
    novaAba: " (opens in a new tab)"
  }
} as const;

/** Rótulos das páginas de case (/portfolio/<slug>). */
export const CASO = {
  pt: {
    naoEncontrado: "Projeto não encontrado | Portfólio — Made by Felipe",
    galeria: "Galeria",
    pecaGaleria: "{cliente} — peça {n}",
    ampliar: "Ampliar imagem: {alt}",
    fecharVisualizador: "Fechar visualizador",
    escopo: "Escopo",
    execucao: "Execução",
    sobre: "Sobre o projeto",
    bastidores: "Bastidores do projeto {cliente}",
    oSite: "O site, ao vivo",
    apresentacao: "Apresentação",
    apresentacaoPadrao: "O projeto completo, como foi entregue ao cliente.",
    proximo: "Próximo projeto",
    proximoAlt: "Próximo projeto: {cliente}",
    capa: "Capa do projeto {cliente}",
    apresentacaoCompleta: "Apresentação completa da marca {cliente}",
    expandir: "Ver apresentação completa",
    recolher: "Recolher apresentação",
    paginasDoSite: "Páginas do site {cliente}",
    rolarPagina: "{cliente} — página {pagina}. Role para percorrer a tela inteira.",
    captura: "Captura completa da página {pagina} do site da {cliente}",
    rolar: "Role para navegar pelo site ↓",
    abrirPagina: "Abrir a página {pagina} na janela acima"
  },
  en: {
    naoEncontrado: "Project not found | Work — Made by Felipe",
    galeria: "Gallery",
    pecaGaleria: "{cliente} — piece {n}",
    ampliar: "Enlarge image: {alt}",
    fecharVisualizador: "Close viewer",
    escopo: "Scope",
    execucao: "Execution",
    sobre: "About the project",
    bastidores: "Behind the scenes of {cliente}",
    oSite: "The live site",
    apresentacao: "Presentation",
    apresentacaoPadrao: "The full project, as delivered to the client.",
    proximo: "Next project",
    proximoAlt: "Next project: {cliente}",
    capa: "{cliente} project cover",
    apresentacaoCompleta: "{cliente} full brand presentation",
    expandir: "View the full presentation",
    recolher: "Collapse the presentation",
    paginasDoSite: "{cliente} site pages",
    rolarPagina: "{cliente} — {pagina} page. Scroll to go through the whole screen.",
    captura: "Full screenshot of the {pagina} page of {cliente}'s site",
    rolar: "Scroll to browse the site ↓",
    abrirPagina: "Open the {pagina} page in the window above"
  }
} as const;
