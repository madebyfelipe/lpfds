import { NextResponse } from "next/server";
import { getPost } from "@/lib/blog";
import { MAX_NOME, MAX_TEXTO, validateComentario, type ComentarioInput } from "@/lib/comentarios";
import { IMERSAO_TO } from "@/lib/imersao";
import { SITE_URL } from "@/lib/site";
import { escapeHtml } from "@/lib/webinarEmailContent";
import { MAIL_FROM, getTransporter } from "@/lib/webinarMailer";

/**
 * Comentário do blog → e-mail de moderação para o Felipe. Nada é publicado
 * aqui: a aprovação é adicionar o comentário em content/blog/comentarios.ts.
 */
export const runtime = "nodejs";

// shortcut: limite por IP em memória — vale por instância e zera a cada cold
// start. Basta como anti-spam básico; trocar por store compartilhado (KV) se
// o volume de spam crescer.
const JANELA_MS = 10 * 60 * 1000;
const MAX_POR_JANELA = 3;
const envios = new Map<string, number[]>();

function excedeuLimite(ip: string) {
  const agora = Date.now();
  const recentes = (envios.get(ip) ?? []).filter((t) => agora - t < JANELA_MS);
  recentes.push(agora);
  envios.set(ip, recentes);
  if (envios.size > 5000) envios.clear(); // não deixa o mapa crescer sem fim
  return recentes.length > MAX_POR_JANELA;
}

export async function POST(request: Request) {
  let body: Partial<ComentarioInput>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot preenchido: responde "ok" para o robô não insistir, e descarta.
  if (String(body.site ?? "").trim()) return NextResponse.json({ ok: true });

  const ip = (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "anon";
  if (excedeuLimite(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const clean = {
    slug: String(body.slug ?? ""),
    nome: String(body.nome ?? "").trim().slice(0, MAX_NOME),
    texto: String(body.texto ?? "").trim().slice(0, MAX_TEXTO),
    consentimento: body.consentimento === true
  };

  const post = getPost(clean.slug);
  const invalid = post ? validateComentario(clean) : "slug";
  if (invalid) {
    return NextResponse.json({ ok: false, error: "invalid_field", field: invalid }, { status: 400 });
  }

  const mailer = getTransporter();
  if (!mailer) {
    console.error("[comentarios] SMTP não configurado.");
    return NextResponse.json({ ok: false, error: "smtp_unconfigured" }, { status: 500 });
  }

  const recebidoEm = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
  const url = `${SITE_URL}/blog/${clean.slug}`;
  const hoje = new Date().toISOString().slice(0, 10);
  // Linha pronta para colar em content/blog/comentarios.ts ao aprovar.
  const entrada = `{ slug: ${JSON.stringify(clean.slug)}, nome: ${JSON.stringify(clean.nome)}, texto: ${JSON.stringify(clean.texto)}, data: "${hoje}" },`;

  try {
    await mailer.sendMail({
      from: MAIL_FROM,
      to: IMERSAO_TO,
      subject: `Comentário pendente — ${post!.title}`,
      text: [
        `Post: ${url}`,
        `Nome: ${clean.nome}`,
        `Recebido em: ${recebidoEm} (horário de Brasília)`,
        `Aceite da política: sim — ${recebidoEm}`,
        "",
        clean.texto,
        "",
        "O comentário NÃO está publicado. Para aprovar, peça a publicação (ou cole a linha abaixo em content/blog/comentarios.ts). Para recusar, apague este e-mail.",
        "",
        entrada
      ].join("\n"),
      html: `
        <div style="font-family:Helvetica,Arial,sans-serif;color:#151515;max-width:560px">
          <p style="font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#bc0319;margin:0 0 16px">Comentário pendente de aprovação</p>
          <p style="margin:0 0 8px"><a href="${url}" style="color:#bc0319">${escapeHtml(post!.title)}</a></p>
          <p style="margin:0 0 16px;color:#696969;font-size:13px">${escapeHtml(clean.nome)} · ${escapeHtml(recebidoEm)} · aceite da política: sim</p>
          <blockquote style="margin:0 0 24px;padding:16px 20px;border-left:3px solid #bc0319;background:#f6f6f6;white-space:pre-wrap">${escapeHtml(clean.texto)}</blockquote>
          <p style="font-size:13px;color:#454545">O comentário <strong>não está publicado</strong>. Para aprovar, peça a publicação ou cole a linha abaixo em <code>content/blog/comentarios.ts</code>. Para recusar, apague este e-mail.</p>
          <pre style="font-size:12px;background:#ececec;padding:12px;white-space:pre-wrap;border-radius:2px">${escapeHtml(entrada)}</pre>
        </div>`
    });
  } catch (error) {
    console.error("[comentarios] Envio falhou:", error);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
