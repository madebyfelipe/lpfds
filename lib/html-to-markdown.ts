/**
 * HTML → markdown, o suficiente para as páginas deste site.
 *
 * Não é um conversor genérico: o site é HTML do Next (seções, headings,
 * parágrafos, listas, links, imagens e tabelas simples). Um parser de verdade
 * (turndown + DOM) custaria uma dependência no edge e não traria nada a mais
 * para esse vocabulário. O que não é texto (script, style, svg, canvas) sai
 * fora antes de qualquer coisa.
 */

const DESCARTAR =
  /<(script|style|noscript|svg|canvas|iframe|template|video|audio)[\s\S]*?<\/\1>/gi;

function limpar(html: string) {
  return html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(DESCARTAR, "")
    .replace(/<head[\s\S]*?<\/head>/gi, "")
    .replace(/<nav[\s\S]*?<\/nav>/gi, "");
}

function inline(texto: string) {
  return texto
    .replace(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (_m, href: string, label: string) => {
      const limpo = label.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
      const url = href.startsWith("/") ? href : href;
      return limpo ? `[${limpo}](${url})` : url;
    })
    .replace(/<img\b[^>]*alt="([^"]*)"[^>]*src="([^"]*)"[^>]*>/gi, (_m, alt: string, src: string) =>
      alt ? `![${alt}](${src})` : ""
    )
    .replace(/<(strong|b)\b[^>]*>([\s\S]*?)<\/\1>/gi, (_m, _t, t: string) => `**${t.trim()}**`)
    .replace(/<(em|i)\b[^>]*>([\s\S]*?)<\/\1>/gi, (_m, _t, t: string) => `_${t.trim()}_`)
    .replace(/<code\b[^>]*>([\s\S]*?)<\/code>/gi, (_m, t: string) => `\`${t.trim()}\``)
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/[ \t]+/g, " ")
    .trim();
}

/**
 * Converte o HTML de `<main>` (ou do corpo) em markdown legível.
 * Listas viram "- ", headings viram "#", tabelas viram linhas com "|".
 */
export function htmlToMarkdown(html: string): string {
  let corpo = limpar(html);

  const main = corpo.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  if (main) corpo = main[1];

  // Tabelas: uma linha por <tr>, células separadas por " | ".
  corpo = corpo.replace(/<table\b[^>]*>([\s\S]*?)<\/table>/gi, (_m, tabela: string) => {
    const linhas = [...tabela.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)].map((tr) =>
      [...tr[1].matchAll(/<t[hd]\b[^>]*>([\s\S]*?)<\/t[hd]>/gi)]
        .map((celula) => inline(celula[1]))
        .join(" | ")
    );
    return `\n\n${linhas.map((l) => `| ${l} |`).join("\n")}\n\n`;
  });

  corpo = corpo
    .replace(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi, (_m, nivel: string, t: string) => {
      const texto = inline(t);
      return texto ? `\n\n${"#".repeat(Number(nivel))} ${texto}\n\n` : "";
    })
    .replace(/<blockquote\b[^>]*>([\s\S]*?)<\/blockquote>/gi, (_m, t: string) => `\n\n> ${inline(t)}\n\n`)
    .replace(/<li\b[^>]*>([\s\S]*?)<\/li>/gi, (_m, t: string) => `\n- ${inline(t)}`)
    .replace(/<p\b[^>]*>([\s\S]*?)<\/p>/gi, (_m, t: string) => {
      const texto = inline(t);
      return texto ? `\n\n${texto}\n\n` : "";
    })
    .replace(/<hr\s*\/?>/gi, "\n\n---\n\n")
    .replace(/<\/?(section|div|article|header|footer|aside|ul|ol|figure|figcaption|form|span)\b[^>]*>/gi, "\n");

  return corpo
    .replace(/<[^>]+>/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .split("\n")
    .map((linha) => linha.replace(/[ \t]+/g, " ").trimEnd())
    .filter((linha, i, todas) => linha.trim() !== "" || (todas[i - 1] ?? "").trim() !== "")
    .join("\n")
    .trim()
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .concat("\n");
}

/** Título do `<title>` e descrição do meta, para o cabeçalho do markdown. */
export function extrairMeta(html: string) {
  const titulo = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? "";
  const descricao =
    html.match(/<meta\b[^>]*name="description"[^>]*content="([^"]*)"/i)?.[1]?.trim() ?? "";
  return { titulo, descricao };
}
