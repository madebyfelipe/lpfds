import { NextResponse } from "next/server";
import { ebook, isNewsletterSource, type NewsletterSource } from "@/lib/newsletter";

/**
 * Cadastro na newsletter — repassa para os dois destinos:
 *
 *  - Twenty (crm.madebyfelipe.agency): workflow que cria/atualiza o contato.
 *  - Make: automação antiga de disparo de e-mail, ainda em uso.
 *
 * Regra: basta UM dos dois aceitar para o cadastro valer. Se o workflow do
 * Twenty estiver desativado (ele responde 400 INVALID_WORKFLOW_STATUS), o
 * visitante ainda entra na lista e continua liberando o download do e-book.
 *
 * São DOIS workflows no Twenty, escolhidos pela origem do cadastro:
 *
 *  - `hub-ebook`  → workflow de entrega: e-mail com o link do mirror.
 *  - demais       → workflow de confirmação: só o "você está na lista".
 *
 * Por isso o payload do caminho de confirmação NÃO carrega `downloadUrl` —
 * assim um passo de e-mail mal configurado não tem como vazar o e-book.
 */
const TWENTY_EBOOK_WEBHOOK =
  "https://crm.madebyfelipe.agency/webhooks/workflows/a14da497-8251-4656-9f2b-29817711eb70/101a12f0-aa21-4f20-b0f0-51b3ba7ca398";
// TODO: trocar pela URL do workflow DUPLICADO (o primeiro UUID tem que ser
// diferente do de cima — hoje esta URL é outra versão do mesmo workflow).
const TWENTY_NEWSLETTER_WEBHOOK =
  "https://crm.madebyfelipe.agency/webhooks/workflows/a14da497-8251-4656-9f2b-29817711eb70/445abfee-76af-4edb-ac36-8c8e70bcd200";
const MAKE_WEBHOOK = "https://hook.us2.make.com/1fnsymphi9b64q1tcq8we9ap7xxgxcv7";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const TIMEOUT_MS = 10000;
const MAX_NAME = 120;

async function post(url: string, payload: unknown) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(TIMEOUT_MS)
  });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  return true;
}

export async function POST(request: Request) {
  let email: unknown;
  let name: unknown;
  let source: unknown;

  try {
    ({ email, name, source } = await request.json());
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  // A origem decide o workflow e a entrega do e-book, então não pode ser
  // string livre: o que não estiver na lista cai no caminho de confirmação.
  const origin: NewsletterSource | "site" = isNewsletterSource(source) ? source : "site";
  const wantsEbook = origin === "hub-ebook";

  // O nome vem do modal do e-book; o popup da landing não pede. Fica opcional
  // aqui para os dois caminhos usarem a mesma rota.
  const fullName = typeof name === "string" ? name.trim().slice(0, MAX_NAME) : "";
  const [firstName, ...rest] = fullName.split(/\s+/).filter(Boolean);

  const payload = {
    email: email.trim().toLowerCase(),
    // `firstName`/`lastName` vão separados porque o objeto People do Twenty tem
    // os dois campos — assim o Upsert mapeia direto, sem partir string no CRM.
    name: fullName,
    firstName: firstName ?? "",
    lastName: rest.join(" "),
    source: origin,
    submittedAt: new Date().toISOString(),
    // `product`, `productTitle` e `downloadUrl` existem só no caminho do
    // e-book, para o passo "Send Email" montar a entrega sem link hardcoded no
    // workflow: trocar o mirror em lib/newsletter.ts basta.
    ...(wantsEbook
      ? { product: ebook.id, productTitle: ebook.title, downloadUrl: ebook.url }
      : {})
  };

  const [twenty, make] = await Promise.allSettled([
    post(wantsEbook ? TWENTY_EBOOK_WEBHOOK : TWENTY_NEWSLETTER_WEBHOOK, payload),
    post(MAKE_WEBHOOK, payload)
  ]);

  if (twenty.status === "rejected") {
    console.error("[newsletter] Twenty falhou:", twenty.reason);
  }
  if (make.status === "rejected") {
    console.error("[newsletter] Make falhou:", make.reason);
  }

  const ok = twenty.status === "fulfilled" || make.status === "fulfilled";
  if (!ok) {
    return NextResponse.json({ ok: false, error: "webhooks_down" }, { status: 502 });
  }

  return NextResponse.json({
    ok: true,
    // O mirror só volta para quem passou pelo portão do e-book.
    ...(wantsEbook ? { download: ebook.url } : {}),
    delivered: {
      twenty: twenty.status === "fulfilled",
      make: make.status === "fulfilled"
    }
  });
}
