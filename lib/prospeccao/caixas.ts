import "server-only";
import { randomUUID } from "node:crypto";
import nodemailer from "nodemailer";
import MailComposer from "nodemailer/lib/mail-composer";
import { ImapFlow } from "imapflow";
import { simpleParser } from "mailparser";
import { ASSINATURA_PADRAO, CADENCIA, limparResposta, rodape } from "./config";
import { tokenDescadastro } from "./seguranca";

/**
 * As caixas de onde a prospecção sai — o "pool de inboxes" do Explee, em
 * escala de estúdio. Cada lead fica preso à caixa que mandou o 1º e-mail
 * (follow-ups e respostas saem dela, na mesma conversa); o 1º e-mail de um
 * lead novo vai para a caixa com mais folga no dia.
 *
 * Configuração, em ordem de precedência:
 *   1. PROSPECCAO_CAIXAS — JSON: [{ "email", "senha", "nome"?, "inicio"?,
 *      "teto"?, "smtpHost"?, "smtpPort"?, "imapHost"?, "imapPort"? }]
 *   2. PROSPECCAO_SMTP_USER / PROSPECCAO_SMTP_PASSWORD (uma caixa dedicada)
 *   3. SMTP_USER / SMTP_PASSWORD (a caixa do site)
 *
 * O recomendado é caixa em domínio secundário: e-mail frio com denúncia de
 * spam derruba a reputação do domínio inteiro, e o madebyfelipe.com.br é o que
 * entrega webinar, imersão e e-book. Ver docs/prospeccao.md.
 */
export type Caixa = {
  email: string;
  senha: string;
  nome: string;
  /** 1º dia de envio desta caixa (rampa própria). Padrão: PROSPECCAO_INICIO. */
  inicio: string;
  teto: number;
  smtpHost: string;
  smtpPort: number;
  imapHost: string;
  imapPort: number;
};

/** O que pode sair para o navegador (sem senha). */
export type CaixaPublica = Omit<Caixa, "senha"> & { dominio: string };

const env = process.env;
const NOME_PADRAO = env.PROSPECCAO_REMETENTE_NOME || "Felipe | Made by Felipe";
const SITE = (env.PROSPECCAO_SITE_URL || "https://madebyfelipe.com.br").replace(/\/$/, "");
const TIMEOUT_MS = 15000;

function montar(c: Partial<Caixa> & { email: string; senha: string }): Caixa {
  const smtpHost = c.smtpHost || env.PROSPECCAO_SMTP_HOST || env.SMTP_HOST || "smtp.hostinger.com";
  return {
    email: c.email.trim().toLowerCase(),
    senha: c.senha,
    nome: c.nome || NOME_PADRAO,
    inicio: c.inicio || env.PROSPECCAO_INICIO || "",
    teto: Math.max(1, Math.min(100, Number(c.teto) || CADENCIA.teto)),
    smtpHost,
    smtpPort: Number(c.smtpPort || env.PROSPECCAO_SMTP_PORT || env.SMTP_PORT || 465),
    imapHost: c.imapHost || env.PROSPECCAO_IMAP_HOST || smtpHost.replace(/^smtp\./, "imap."),
    imapPort: Number(c.imapPort || env.PROSPECCAO_IMAP_PORT || 993)
  };
}

let cache: Caixa[] | null = null;

export function listarCaixas(): Caixa[] {
  if (cache) return cache;
  const out: Caixa[] = [];
  if (env.PROSPECCAO_CAIXAS) {
    try {
      const lista = JSON.parse(env.PROSPECCAO_CAIXAS) as Array<Record<string, unknown>>;
      for (const c of Array.isArray(lista) ? lista : []) {
        const email = typeof c.email === "string" ? c.email : "";
        const senha = typeof c.senha === "string" ? c.senha : "";
        if (email && senha) out.push(montar({ ...(c as Partial<Caixa>), email, senha }));
      }
    } catch {
      console.error("[prospeccao] PROSPECCAO_CAIXAS não é JSON válido — usando a caixa única.");
    }
  }
  if (!out.length) {
    const email = env.PROSPECCAO_SMTP_USER || env.SMTP_USER || "";
    const senha = env.PROSPECCAO_SMTP_PASSWORD || env.SMTP_PASSWORD || "";
    if (email && senha) out.push(montar({ email, senha }));
  }
  cache = out;
  return out;
}

export const caixaConfigurada = () => listarCaixas().length > 0;

export const publica = ({ senha: _s, ...c }: Caixa): CaixaPublica => ({ ...c, dominio: c.email.split("@")[1] ?? "" });

/** Caixa do lead (a que conduz a conversa); sem registro = a 1ª (envios anteriores ao pool). */
export function caixaDoLead(email: string | undefined, caixas: Caixa[] = listarCaixas()): Caixa | undefined {
  if (!caixas.length) return undefined;
  return (email && caixas.find((c) => c.email === email.toLowerCase())) || (email ? undefined : caixas[0]);
}

const transportes = new Map<string, nodemailer.Transporter>();
function smtp(c: Caixa): nodemailer.Transporter {
  let t = transportes.get(c.email);
  if (!t) {
    t = nodemailer.createTransport({
      host: c.smtpHost,
      port: c.smtpPort,
      secure: c.smtpPort === 465,
      auth: { user: c.email, pass: c.senha },
      connectionTimeout: TIMEOUT_MS,
      greetingTimeout: TIMEOUT_MS
    });
    transportes.set(c.email, t);
  }
  return t;
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

/** Corpo final do e-mail frio = texto da rotina/painel + rodapé fixo. */
export function corpoFinal(c: Caixa, m: Pick<Mensagem, "para" | "corpo" | "fonte">): string {
  return (
    m.corpo.trim() +
    "\n" +
    rodape({ fonte: m.fonte, linkDescadastro: linkDescadastro(m.para), assinatura: `${ASSINATURA_PADRAO}\n${c.email}` })
  );
}

async function despachar(c: Caixa, opts: ConstructorParameters<typeof MailComposer>[0], para: string) {
  const raw = await new MailComposer(opts).compile().build();
  await smtp(c).sendMail({ envelope: { from: c.email, to: [para] }, raw });
  return raw;
}

const novoMessageId = (c: Caixa) => `<prosp-${randomUUID()}@${c.email.split("@")[1] || "madebyfelipe.com.br"}>`;

/**
 * E-mail frio (1º contato ou follow-up). Só texto puro, sem pixel de abertura
 * e sem link rastreado: HTML com rastreio cai mais no spam, o pixel exige
 * consentimento que um contato frio não deu, e o Apple Mail infla a métrica
 * de abertura de qualquer jeito. A métrica que vale aqui é resposta.
 */
export async function enviar(c: Caixa, m: Mensagem): Promise<{ messageId: string; raw: Buffer }> {
  const messageId = novoMessageId(c);
  const unsub = linkDescadastro(m.para);
  const opts: ConstructorParameters<typeof MailComposer>[0] = {
    from: { name: c.nome, address: c.email },
    to: m.para,
    subject: m.emRespostaA && !/^re:/i.test(m.assunto) ? `Re: ${m.assunto}` : m.assunto,
    text: corpoFinal(c, m),
    messageId,
    headers: {
      // RFC 8058 — o Gmail e o Yahoo exigem descadastro em um clique de quem
      // manda volume; o botão "Cancelar inscrição" deles usa estes headers.
      "List-Unsubscribe": `<${unsub}>, <mailto:${c.email}?subject=descadastro>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click"
    }
  };
  if (m.emRespostaA) {
    opts.inReplyTo = m.emRespostaA;
    opts.references = [m.emRespostaA];
  }
  return { messageId, raw: await despachar(c, opts, m.para) };
}

/**
 * Resposta dentro de uma conversa que ELA abriu (aba Conversas). Sem rodapé de
 * descadastro — já não é contato frio —, só a assinatura.
 */
export async function responder(
  c: Caixa,
  r: { para: string; assunto: string; corpo: string; emRespostaA: string; referencias: string[] }
): Promise<{ messageId: string; raw: Buffer }> {
  const messageId = novoMessageId(c);
  const raw = await despachar(
    c,
    {
      from: { name: c.nome, address: c.email },
      to: r.para,
      subject: /^re:/i.test(r.assunto) ? r.assunto : `Re: ${r.assunto}`,
      text: `${r.corpo.trim()}\n\n${ASSINATURA_PADRAO}`,
      messageId,
      inReplyTo: r.emRespostaA,
      references: [...new Set(r.referencias.filter(Boolean))]
    },
    r.para
  );
  return { messageId, raw };
}

/** Confere login no SMTP (painel → Domínio). */
export async function testarSmtp(c: Caixa): Promise<{ ok: boolean; erro?: string }> {
  try {
    await smtp(c).verify();
    return { ok: true };
  } catch (e) {
    return { ok: false, erro: e instanceof Error ? e.message : String(e) };
  }
}

/* -------------------------------------------------------------------------- */
/* IMAP                                                                       */
/* -------------------------------------------------------------------------- */

export async function abrirImap(c: Caixa): Promise<ImapFlow> {
  const client = new ImapFlow({
    host: c.imapHost,
    port: c.imapPort,
    secure: c.imapPort === 993,
    auth: { user: c.email, pass: c.senha },
    logger: false,
    connectionTimeout: TIMEOUT_MS,
    greetingTimeout: TIMEOUT_MS
  });
  await client.connect();
  return client;
}

export async function testarImap(c: Caixa): Promise<{ ok: boolean; erro?: string; enviados?: string }> {
  let client: ImapFlow | null = null;
  try {
    client = await abrirImap(c);
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
    lista.find((b) => b.specialUse === "\\Sent") ?? lista.find((b) => /^(inbox\.)?(sent|enviad)/i.test(b.path));
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

export type Achado =
  | { email: string; tipo: "resposta"; data: string; messageId: string; texto: string }
  | { email: string; tipo: "bounce"; data: string };

/**
 * Varre a INBOX desde `desde` atrás de respostas e bounces dos leads.
 * Resposta = remetente é o lead OU In-Reply-To aponta para um dos nossos
 * Message-IDs (cobre quem responde de outro endereço). Resposta automática
 * (férias, "recebemos sua mensagem") não conta: não é conversa, e parar a
 * sequência por ela faria perder o follow-up. Devolve só a resposta mais nova
 * de cada lead, com o texto (sem o histórico citado).
 */
export async function varrerCaixa(
  client: ImapFlow,
  desde: Date,
  leads: Array<{ email: string; messageId: string }>
): Promise<Achado[]> {
  const porEmail = new Set(leads.map((l) => l.email.toLowerCase()));
  const porMessageId = new Map(leads.filter((l) => l.messageId).map((l) => [l.messageId, l.email]));
  const respostas = new Map<string, { uid: number; data: string; messageId: string }>();
  const bounces: Array<{ uid: number; data: string }> = [];
  const achados: Achado[] = [];

  const lock = await client.getMailboxLock("INBOX");
  try {
    // Downloads ficam para depois do laço: o imapflow não aceita outro
    // comando enquanto um FETCH ainda está sendo iterado.
    // Últimas 500 mensagens por sequência, data filtrada aqui: não depende do
    // SEARCH SINCE do servidor (implementação varia) e limita o custo por lote.
    const total = client.mailbox ? client.mailbox.exists : 0;
    if (!total) return achados;
    for await (const msg of client.fetch(
      `${Math.max(1, total - 499)}:*`,
      {
        uid: true,
        envelope: true,
        internalDate: true,
        headers: ["auto-submitted", "x-autoreply", "x-autorespond", "precedence"]
      },
      {}
    )) {
      const env = msg.envelope;
      if (!env) continue;
      if (msg.internalDate instanceof Date && msg.internalDate < desde) continue;
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
      if (!email) continue;
      const atual = respostas.get(email);
      if (!atual || atual.data < data) respostas.set(email, { uid: msg.uid, data, messageId: env.messageId ?? "" });
    }

    for (const [email, r] of respostas) {
      achados.push({ email, tipo: "resposta", data: r.data, messageId: r.messageId, texto: await textoDe(client, r.uid) });
    }

    // O endereço que voltou vem no corpo do DSN, não no envelope.
    for (const b of bounces.slice(-40)) {
      const texto = (await fonteDe(client, b.uid, 60_000)).toLowerCase();
      for (const email of porEmail) {
        if (texto.includes(email)) achados.push({ email, tipo: "bounce", data: b.data });
      }
    }
  } finally {
    lock.release();
  }
  return achados;
}

async function fonteDe(client: ImapFlow, uid: number, maxBytes: number): Promise<string> {
  const dl = await client.download(String(uid), undefined, { uid: true, maxBytes }).catch(() => null);
  if (!dl) return "";
  const chunks: Buffer[] = [];
  for await (const c of dl.content) chunks.push(c as Buffer);
  return Buffer.concat(chunks).toString("utf8");
}

async function textoDe(client: ImapFlow, uid: number): Promise<string> {
  const fonte = await fonteDe(client, uid, 200_000);
  if (!fonte) return "";
  try {
    const parsed = await simpleParser(fonte);
    const texto = parsed.text || (typeof parsed.html === "string" ? parsed.html.replace(/<[^>]+>/g, " ") : "");
    return limparResposta(texto);
  } catch {
    return "";
  }
}
