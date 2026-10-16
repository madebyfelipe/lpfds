import "server-only";
import { randomUUID } from "node:crypto";
import nodemailer from "nodemailer";
import MailComposer from "nodemailer/lib/mail-composer";
import { ImapFlow } from "imapflow";
import { ASSINATURA_PADRAO, rodape } from "./config";
import { tokenDescadastro } from "./seguranca";

/**
 * A caixa de onde a prospecção sai — SMTP para enviar, IMAP para guardar a
 * cópia em Enviados e para ler respostas e bounces.
 *
 * Por padrão é a mesma caixa do site (SMTP_*). O recomendado é uma caixa
 * própria para prospecção (PROSPECCAO_SMTP_*), de preferência num domínio
 * secundário: e-mail frio com reclamação de spam derruba a reputação do
 * domínio inteiro, e o domínio principal é o que entrega a confirmação do
 * webinar, o form da imersão e o e-book. Ver docs/prospeccao.md.
 */
const env = process.env;
const SMTP_HOST = env.PROSPECCAO_SMTP_HOST || env.SMTP_HOST || "smtp.hostinger.com";
const SMTP_PORT = Number(env.PROSPECCAO_SMTP_PORT || env.SMTP_PORT || 465);
const USER = env.PROSPECCAO_SMTP_USER || env.SMTP_USER || "";
const PASS = env.PROSPECCAO_SMTP_PASSWORD || env.SMTP_PASSWORD || "";
const IMAP_HOST = env.PROSPECCAO_IMAP_HOST || SMTP_HOST.replace(/^smtp\./, "imap.");
const IMAP_PORT = Number(env.PROSPECCAO_IMAP_PORT || 993);
const NOME = env.PROSPECCAO_REMETENTE_NOME || "Felipe | Made by Felipe";
const SITE = (env.PROSPECCAO_SITE_URL || "https://madebyfelipe.com.br").replace(/\/$/, "");
const TIMEOUT_MS = 15000;

export const remetente = () => ({
  email: USER,
  nome: NOME,
  dominio: USER.split("@")[1] ?? "",
  smtpHost: SMTP_HOST,
  imapHost: IMAP_HOST,
  dedicada: Boolean(env.PROSPECCAO_SMTP_USER)
});

export const caixaConfigurada = () => Boolean(USER && PASS);

let transporter: nodemailer.Transporter | null = null;
function smtp(): nodemailer.Transporter {
  if (!caixaConfigurada()) throw new Error("smtp_unconfigured");
  transporter ??= nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: { user: USER, pass: PASS },
    connectionTimeout: TIMEOUT_MS,
    greetingTimeout: TIMEOUT_MS
  });
  return transporter;
}

export function linkDescadastro(email: string): string {
  return `${SITE}/api/prospeccao/descadastro?t=${tokenDescadastro(email)}`;
}

export type Mensagem = {
  para: string;
  assunto: string;
  corpo: string;
  fonte: string;
  /** Follow-up: responde na mesma conversa do 1º e-mail. */
  emRespostaA?: string;
};

/** Corpo final = texto da rotina/painel + rodapé fixo (identificação, origem, saída). */
export function corpoFinal(m: Pick<Mensagem, "para" | "corpo" | "fonte">): string {
  return (
    m.corpo.trim() +
    "\n" +
    rodape({
      email: m.para,
      fonte: m.fonte,
      linkDescadastro: linkDescadastro(m.para),
      assinatura: `${ASSINATURA_PADRAO}\n${USER}`
    })
  );
}

/**
 * Monta e envia. Só texto puro, sem pixel de abertura e sem link rastreado:
 * e-mail frio em HTML com rastreio cai mais no spam, o pixel exige
 * consentimento que um contato frio não deu, e o Apple Mail infla a métrica
 * de abertura de qualquer jeito. A métrica que vale aqui é resposta.
 */
export async function enviar(m: Mensagem): Promise<{ messageId: string; raw: Buffer }> {
  const dominio = USER.split("@")[1] || "madebyfelipe.com.br";
  const messageId = `<prosp-${randomUUID()}@${dominio}>`;
  const unsub = linkDescadastro(m.para);
  const opts: ConstructorParameters<typeof MailComposer>[0] = {
    from: { name: NOME, address: USER },
    to: m.para,
    subject: m.emRespostaA && !/^re:/i.test(m.assunto) ? `Re: ${m.assunto}` : m.assunto,
    text: corpoFinal(m),
    messageId,
    headers: {
      // RFC 8058 — o Gmail e o Yahoo exigem descadastro em um clique de quem
      // manda volume; o botão "Cancelar inscrição" deles usa estes headers.
      "List-Unsubscribe": `<${unsub}>, <mailto:${USER}?subject=descadastro>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click"
    }
  };
  if (m.emRespostaA) {
    opts.inReplyTo = m.emRespostaA;
    opts.references = [m.emRespostaA];
  }
  const raw = await new MailComposer(opts).compile().build();
  await smtp().sendMail({ envelope: { from: USER, to: [m.para] }, raw });
  return { messageId, raw };
}

/** Confere login no SMTP (painel → Domínio → testar). */
export async function testarSmtp(): Promise<{ ok: boolean; erro?: string }> {
  try {
    await smtp().verify();
    return { ok: true };
  } catch (e) {
    return { ok: false, erro: e instanceof Error ? e.message : String(e) };
  }
}

/* -------------------------------------------------------------------------- */
/* IMAP                                                                       */
/* -------------------------------------------------------------------------- */

export async function abrirImap(): Promise<ImapFlow | null> {
  if (!caixaConfigurada()) return null;
  const client = new ImapFlow({
    host: IMAP_HOST,
    port: IMAP_PORT,
    secure: IMAP_PORT === 993,
    auth: { user: USER, pass: PASS },
    logger: false,
    connectionTimeout: TIMEOUT_MS,
    greetingTimeout: TIMEOUT_MS
  });
  await client.connect();
  return client;
}

export async function testarImap(): Promise<{ ok: boolean; erro?: string; enviados?: string }> {
  let client: ImapFlow | null = null;
  try {
    client = await abrirImap();
    if (!client) return { ok: false, erro: "smtp_unconfigured" };
    return { ok: true, enviados: (await pastaEnviados(client)) ?? "não encontrada" };
  } catch (e) {
    return { ok: false, erro: e instanceof Error ? e.message : String(e) };
  } finally {
    await client?.logout().catch(() => {});
  }
}

async function pastaEnviados(client: ImapFlow): Promise<string | null> {
  const lista = await client.list();
  const sent =
    lista.find((b) => b.specialUse === "\\Sent") ??
    lista.find((b) => /^(inbox\.)?(sent|enviad)/i.test(b.path));
  return sent?.path ?? null;
}

/**
 * Guarda a cópia do que saiu na pasta Enviados. Envio por SMTP não deixa
 * cópia no servidor; sem isso o Felipe abriria o webmail e não veria a
 * conversa quando a resposta chegasse.
 */
export async function guardarEmEnviados(client: ImapFlow, raw: Buffer): Promise<void> {
  const pasta = await pastaEnviados(client);
  if (pasta) await client.append(pasta, raw, ["\\Seen"], new Date());
}

export type Achado = { email: string; tipo: "resposta" | "bounce"; data: string };

/**
 * Varre a INBOX desde `desde` atrás de respostas e bounces dos leads em
 * sequência. Resposta = remetente é o lead OU In-Reply-To aponta para um dos
 * nossos Message-IDs (cobre quem responde de outro endereço). Resposta
 * automática (férias, "recebemos sua mensagem") não conta: não é conversa,
 * e parar a sequência por ela faria perder o follow-up.
 */
export async function varrerCaixa(
  client: ImapFlow,
  desde: Date,
  leads: Array<{ email: string; messageId: string }>
): Promise<Achado[]> {
  const porEmail = new Set(leads.map((l) => l.email.toLowerCase()));
  const porMessageId = new Map(leads.filter((l) => l.messageId).map((l) => [l.messageId, l.email]));
  const achados = new Map<string, Achado>();

  const lock = await client.getMailboxLock("INBOX");
  try {
    // Bounces ficam para depois do laço: o imapflow não aceita outro comando
    // (o download) enquanto um FETCH ainda está sendo iterado.
    const bounces: Array<{ uid: number; data: string }> = [];
    for await (const msg of client.fetch(
      { since: desde },
      { uid: true, envelope: true, headers: ["auto-submitted", "x-autoreply", "x-autorespond", "precedence"], internalDate: true },
      { uid: true }
    )) {
      const env = msg.envelope;
      if (!env) continue;
      const de = (env.from?.[0]?.address ?? "").toLowerCase();
      const data = (msg.internalDate instanceof Date ? msg.internalDate : new Date()).toISOString();
      const headers = msg.headers?.toString("utf8").toLowerCase() ?? "";

      if (/mailer-daemon|postmaster/.test(de)) {
        bounces.push({ uid: msg.uid, data });
        continue;
      }

      const automatica =
        /auto-submitted:\s*auto-(replied|generated)/.test(headers) ||
        /x-autoreply|x-autorespond/.test(headers) ||
        /precedence:\s*(auto_reply|bulk|junk)/.test(headers);
      if (automatica) continue;

      const viaThread = env.inReplyTo ? porMessageId.get(env.inReplyTo.trim()) : undefined;
      const email = viaThread ?? (porEmail.has(de) ? de : undefined);
      if (email && !achados.has(email)) achados.set(email, { email, tipo: "resposta", data });
    }

    // O endereço que voltou vem no corpo do DSN, não no envelope.
    for (const b of bounces.slice(-40)) {
      const fonte = await client.download(String(b.uid), undefined, { uid: true, maxBytes: 60_000 }).catch(() => null);
      if (!fonte) continue;
      const chunks: Buffer[] = [];
      for await (const c of fonte.content) chunks.push(c as Buffer);
      const texto = Buffer.concat(chunks).toString("utf8").toLowerCase();
      for (const email of porEmail) {
        if (texto.includes(email)) achados.set(email, { email, tipo: "bounce", data: b.data });
      }
    }
  } finally {
    lock.release();
  }
  return [...achados.values()];
}
