import { NextResponse } from "next/server";
import { getPost } from "@/lib/blog";
import {
  MAX_NOME,
  MAX_TEXTO,
  motivoBloqueio,
  validateComentario,
  type ComentarioInput
} from "@/lib/comentarios";
import { configurado, contarRecentes, gravar, listar, verificarDesafio } from "@/lib/comentarios-server";
import { IMERSAO_TO } from "@/lib/imersao";
import { SITE_URL } from "@/lib/site";
import { escapeHtml } from "@/lib/webinarEmailContent";
import { MAIL_FROM, getTransporter } from "@/lib/webinarMailer";

/**
 * Comentários do blog. POST publica na hora (sem aprovação prévia) e avisa o
 * Felipe por e-mail; GET lista os visíveis de um post. Ver lib/comentarios.ts
 * para as camadas de defesa e CLAUDE.md ("Blog → Comentários").
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// shortcut: limite por IP em memória — vale por instância e zera a cada cold
// start. O disjuntor global abaixo (conta no banco) cobre o que isso não pega.
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

// Disjuntor global: mais de N comentários no site todo em 10 min = enxurrada.
// Passa a recusar até esfriar. Conta no banco, então vale entre instâncias e
// não guarda dado pessoal nenhum.
const MAX_GLOBAL_NA_JANELA = 20;

const erro = (error: string, status: number, extra: Record<string, unknown> = {}) =>
  NextResponse.json({ ok: false, error, ...extra }, { status });

export async function GET(request: Request) {
  const slug = new URL(request.url).searchParams.get("slug") ?? "";
  if (!getPost(slug)) return erro("invalid_slug", 400);
  // Sem banco configurado a lista é só vazia; o formulário é quem avisa a indisponibilidade.
  if (!configurado()) return NextResponse.json({ comentarios: [] });
  try {
    return NextResponse.json(
      { comentarios: await listar(slug) },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (e) {
    console.error("[comentarios] listar falhou:", e);
    return erro("list_failed", 502);
  }
}

export async function POST(request: Request) {
  let body: Partial<ComentarioInput>;
  try {
    body = await request.json();
  } catch {
    return erro("invalid_json", 400);
  }

  // Honeypot preenchido: responde "ok" para o robô não insistir, e descarta.
  if (String(body.site ?? "").trim()) return NextResponse.json({ ok: true });

  // Nunca mostrar "publicado" sem ter gravado: sem banco, o form avisa que está fora.
  if (!configurado()) {
    console.error("[comentarios] Supabase/COMENTARIOS_SECRET não configurados.");
    return erro("unconfigured", 503);
  }

  const ip = (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "anon";
  if (excedeuLimite(ip)) return erro("rate_limited", 429);

  const clean = {
    slug: String(body.slug ?? ""),
    nome: String(body.nome ?? "").trim().slice(0, MAX_NOME),
    texto: String(body.texto ?? "").trim().slice(0, MAX_TEXTO),
    consentimento: body.consentimento === true
  };

  const post = getPost(clean.slug);
  const invalido = post ? validateComentario(clean) : "slug";
  if (invalido) return erro("invalid_field", 400, { field: invalido });

  const bloqueio = motivoBloqueio(`${clean.nome} ${clean.texto}`);
  if (bloqueio) return erro("blocked_content", 400, { reason: bloqueio });

  if (!verificarDesafio(body.captcha)) return erro("captcha_failed", 400);

  try {
    if ((await contarRecentes(JANELA_MS)) >= MAX_GLOBAL_NA_JANELA) return erro("busy", 429);

    const gravado = await gravar({ ...clean, assinatura: body.captcha!.signature });
    // Desafio já usado: trata como robô repetindo e descarta sem dar pista.
    if (gravado.status === "reuso") return NextResponse.json({ ok: true });

    void avisar(clean.slug, post!.title, gravado.comentario.id ?? "", clean.nome, clean.texto);
    return NextResponse.json({ ok: true, comentario: gravado.comentario });
  } catch (e) {
    console.error("[comentarios] gravar falhou:", e);
    return erro("save_failed", 502);
  }
}

/** Aviso ao Felipe depois de publicar. Falha de e-mail não derruba o comentário. */
async function avisar(slug: string, titulo: string, id: string, nome: string, texto: string) {
  const mailer = getTransporter();
  if (!mailer) return;
  const url = `${SITE_URL}/blog/${slug}`;
  const quando = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
  try {
    await mailer.sendMail({
      from: MAIL_FROM,
      to: IMERSAO_TO,
      subject: `Novo comentário — ${titulo}`,
      text: [
        `Post: ${url}`,
        `Nome: ${nome}`,
        `Publicado em: ${quando} (horário de Brasília)`,
        "",
        texto,
        "",
        `O comentário JÁ ESTÁ PUBLICADO. Para ocultar, abra a tabela blog_comments no Supabase e marque hidden = true na linha id ${id}. Some da página na hora, sem deploy.`
      ].join("\n"),
      html: `
        <div style="font-family:Helvetica,Arial,sans-serif;color:#151515;max-width:560px">
          <p style="font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#bc0319;margin:0 0 16px">Novo comentário publicado</p>
          <p style="margin:0 0 8px"><a href="${url}" style="color:#bc0319">${escapeHtml(titulo)}</a></p>
          <p style="margin:0 0 16px;color:#696969;font-size:13px">${escapeHtml(nome)} · ${escapeHtml(quando)}</p>
          <blockquote style="margin:0 0 24px;padding:16px 20px;border-left:3px solid #bc0319;background:#f6f6f6;white-space:pre-wrap">${escapeHtml(texto)}</blockquote>
          <p style="font-size:13px;color:#454545">O comentário <strong>já está publicado</strong>. Para ocultar, abra a tabela <code>blog_comments</code> no Supabase e marque <code>hidden = true</code> na linha <code>${escapeHtml(id)}</code>. Some da página na hora, sem deploy.</p>
        </div>`
    });
  } catch (e) {
    console.error("[comentarios] aviso por e-mail falhou:", e);
  }
}
