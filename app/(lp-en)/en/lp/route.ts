import { readFileSync } from "node:fs";
import { join } from "node:path";
import { SITE_URL } from "@/lib/site";

/**
 * /en/lp — LP da oferta em inglês (sites para terapeutas, com prévia grátis).
 *
 * É HTML autônomo (CSS, JS e animações próprios, em content/lp/sellbird.html), então
 * sai por route handler: fora do layout raiz, sem o CSS escuro do site, sem o cursor
 * e o banner de cookies do restante. A página não grava cookie nem carrega medição —
 * por isso não há o que consentir além do aceite do formulário. O `{{SITE_URL}}` do
 * canonical/og vem de lib/site.ts (nunca a URL escrita à mão).
 *
 * Exceção de preço (Felipe, 15/11/2026): US$ 499 / US$ 1.499 só aqui; /en segue sem preço.
 */
export const dynamic = "force-static";

export function GET() {
  const html = readFileSync(join(process.cwd(), "content/lp/sellbird.html"), "utf8").replaceAll(
    "{{SITE_URL}}",
    SITE_URL
  );
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
      "X-Robots-Tag": "noindex, follow"
    }
  });
}
