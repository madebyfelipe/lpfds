import { lerTokenDescadastro } from "@/lib/prospeccao/seguranca";
import { atualizarLead, pessoasPorEmail } from "@/lib/prospeccao/twenty";

/**
 * Descadastro da prospecção — público, assinado (HMAC no token).
 *
 * - GET  ?t=…  → página de confirmação com um botão. Não descadastra no GET:
 *   antivírus corporativo e pré-visualização de link "clicam" em tudo, e um
 *   descadastro fantasma faz perder um contato que não pediu para sair.
 * - POST ?t=…  → descadastra. É o que o botão da página faz e o que o Gmail
 *   e o Yahoo chamam no "Cancelar inscrição" (RFC 8058, List-Unsubscribe-Post).
 *
 * O registro NÃO é apagado — vira DESCADASTRADO, que é a lista de supressão
 * (a rota de leads deduplica contra ele e o disparo pula). Ver CLAUDE.md.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function pagina(titulo: string, texto: string, form?: string): Response {
  const html = `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex"><title>${titulo} — Made by Felipe</title>
<style>
@font-face{font-family:"Neue Haas Grotesk Display";src:url("/fonts/NeueHaasDisplayRoman.ttf") format("truetype");font-weight:400;font-display:swap}
@font-face{font-family:"Neue Haas Grotesk Display";src:url("/fonts/NeueHaasDisplayBold.ttf") format("truetype");font-weight:700;font-display:swap}
/* Tokens do design system (app/institucional.css) — página avulsa, fora do .inst. */
:root{--cream:#f6f6f6;--black:#151515;--red:#bc0319;--red-dark:#8f0313;--red-ink:#bc0319;--on-red:#f6f6f6;--gray-500:#696969}
@media (prefers-color-scheme:dark){:root{--cream:#151515;--black:#f6f6f6;--gray-500:#9a9a9a;--red-ink:#ef4358}}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--cream);color:var(--black);font-family:"Neue Haas Grotesk Display",Helvetica,Arial,sans-serif;padding:24px 16px}
main{max-width:520px}
.k{font-size:12px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--gray-500);margin:0 0 24px}
h1{font-size:32px;line-height:1.1;margin:0 0 16px;font-weight:700}
p{font-size:17px;line-height:1.5;margin:0 0 28px}
button{background:var(--red);color:var(--on-red);border:0;border-radius:2px;padding:16px 32px;font-family:inherit;font-size:14px;font-weight:700;line-height:1;letter-spacing:.04em;text-transform:uppercase;cursor:pointer}
button:hover{background:var(--red-dark)}
button:focus-visible,a:focus-visible{outline:2px solid var(--red-ink);outline-offset:3px}
a{color:var(--red-ink);border-bottom:1px solid var(--red-ink);text-decoration:none}
</style></head>
<body><main><p class="k">— Made by Felipe</p><h1>${titulo}</h1><p>${texto}</p>${form ?? ""}</main></body></html>`;
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8", "X-Robots-Tag": "noindex" } });
}

const invalido = () =>
  pagina(
    "Link inválido",
    'Não reconheci este link. Para sair da lista, responda o e-mail com "não" ou escreva para <a href="mailto:alo@madebyfelipe.com.br">alo@madebyfelipe.com.br</a>.'
  );

export async function GET(request: Request) {
  const t = new URL(request.url).searchParams.get("t") ?? "";
  const email = lerTokenDescadastro(t);
  if (!email) return invalido();
  const esc = email.replace(/[&<>"']/g, "");
  return pagina(
    "Parar de receber",
    `Confirme e o endereço <strong>${esc}</strong> não recebe mais mensagens de prospecção da Made by Felipe.`,
    `<form method="post"><input type="hidden" name="t" value="${t.replace(/"/g, "")}"><button type="submit">Confirmar descadastro</button></form>`
  );
}

export async function POST(request: Request) {
  const url = new URL(request.url);
  let t = url.searchParams.get("t") ?? "";
  if (!t) {
    try {
      t = String((await request.formData()).get("t") ?? "");
    } catch {
      /* corpo vazio ou não-form */
    }
  }
  const email = lerTokenDescadastro(t);
  if (!email) return invalido();

  try {
    const pessoas = await pessoasPorEmail(email);
    const prosp = pessoas.filter((p) => p.origem === "PROSPECCAO");
    for (const p of prosp) await atualizarLead(p.id, { prospStatus: "DESCADASTRADO" });
    if (!prosp.length) console.warn("[prospeccao/descadastro] sem lead de prospecção para", email);
  } catch (error) {
    console.error("[prospeccao/descadastro] falhou:", error);
    return pagina(
      "Não consegui registrar",
      'Algo falhou do nosso lado. Responda o e-mail com "não" ou escreva para <a href="mailto:alo@madebyfelipe.com.br">alo@madebyfelipe.com.br</a> — retiro à mão.'
    );
  }
  return pagina("Pronto.", "Você não recebe mais mensagens de prospecção da Made by Felipe. Desculpe o incômodo.");
}
