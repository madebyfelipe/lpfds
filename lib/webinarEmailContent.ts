/**
 * Conteúdo dos e-mails do webinar (confirmação + lembretes 7/3/1). Funções puras
 * que devolvem { subject, text, html } — sem nodemailer nem `server-only`, para
 * poderem ser importadas tanto pelo mailer do servidor quanto por um script de
 * teste. O envio em si mora em `lib/webinarMailer.ts`.
 *
 * HTML no padrão da marca (cream #f6f6f6 / preto #151515 / vermelho #bc0319),
 * tudo com estilo inline e caixa quadrada (raio 2px) — nada de arredondado, nem
 * cor fora da paleta. Copy no tom aprovado: assertivo, direto, sem promessa de
 * resultado e sem menção a paciente/atendimento.
 */
import { webinar } from "./webinar";

const URL_WEBINAR = "https://madebyfelipe.com.br/webinar";

export function escapeHtml(v: string): string {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Primeiro nome, para a saudação. */
function primeiroNome(nome: string): string {
  return (nome.trim().split(/\s+/)[0] || nome).trim();
}

type Shell = {
  kicker: string;
  titulo: string;
  /** HTML do corpo (parágrafos já montados). */
  corpo: string;
  /** Linha de destaque (data do evento) — opcional. */
  destaque?: string;
  /** Botão opcional. */
  cta?: { label: string; href: string };
  /** Texto do preheader (some no preview do cliente). */
  preheader: string;
};

/** Casca HTML da marca — e-mail-safe (estilo inline, tabela do botão). */
function shell({ kicker, titulo, corpo, destaque, cta, preheader }: Shell): string {
  return `<!-- preheader --><div style="display:none;max-height:0;overflow:hidden;opacity:0">${escapeHtml(
    preheader,
  )}</div>
<div style="margin:0;padding:24px;background:#f6f6f6;font-family:Helvetica,Arial,sans-serif">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #ececec;border-radius:2px;padding:40px">
    <p style="margin:0 0 20px;font-size:12px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#bc0319">${escapeHtml(
      kicker,
    )}</p>
    <h1 style="margin:0 0 20px;font-size:26px;line-height:1.15;font-weight:800;color:#151515;letter-spacing:-0.01em">${escapeHtml(
      titulo,
    )}</h1>
    ${corpo}
    ${
      destaque
        ? `<p style="margin:24px 0;padding:14px 18px;background:#f6f6f6;border-left:3px solid #bc0319;font-size:15px;font-weight:700;color:#151515">${escapeHtml(
            destaque,
          )}</p>`
        : ""
    }
    ${
      cta
        ? `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:28px 0 4px"><tr><td style="border-radius:2px;background:#bc0319">
        <a href="${escapeHtml(
          cta.href,
        )}" style="display:inline-block;padding:14px 28px;font-size:13px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#f6f6f6;text-decoration:none">${escapeHtml(
            cta.label,
          )}</a></td></tr></table>`
        : ""
    }
    <p style="margin:32px 0 0;padding-top:20px;border-top:1px solid #ececec;font-size:12px;line-height:1.6;color:#696969">
      Made by Felipe · Você recebeu este e-mail porque se inscreveu no workshop.
    </p>
  </div>
</div>`;
}

function paragrafo(texto: string): string {
  return `<p style="margin:0 0 14px;font-size:15px;line-height:1.65;color:#454545">${texto}</p>`;
}

export type EmailContent = { subject: string; text: string; html: string };

/** Confirmação de inscrição — enviada assim que o lead se inscreve. */
export function confirmationEmail(nome: string): EmailContent {
  const first = primeiroNome(nome);
  const subject = "Sua vaga no workshop está confirmada";
  const linhas = [
    `Olá ${first}, tudo certo. Você está inscrita no workshop de criação de conteúdo.`,
    `${webinar.dataLabel} · ${webinar.duracao}`,
    "O link de acesso chega por e-mail perto da data — e eu mando lembretes antes, para não passar batido.",
    "Qualquer dúvida, é só responder este e-mail.",
    "— Felipe",
  ];
  const text = `${subject}\n\n${linhas.join("\n\n")}\n\n${URL_WEBINAR}`;
  const html = shell({
    kicker: "Inscrição confirmada",
    titulo: "Sua vaga está garantida.",
    preheader: `${webinar.dataLabel} — o link de acesso chega perto da data.`,
    corpo: [
      paragrafo(
        `Olá <strong>${escapeHtml(
          first,
        )}</strong>, tudo certo. Você está inscrita no <strong>workshop de criação de conteúdo</strong>.`,
      ),
      paragrafo(
        "O link de acesso chega por e-mail perto da data — e eu mando lembretes antes, para não passar batido.",
      ),
      paragrafo("Qualquer dúvida, é só responder este e-mail."),
      paragrafo("— Felipe"),
    ].join(""),
    destaque: `${webinar.dataLabel} · ${webinar.duracao}`,
    cta: { label: "Ver a página do workshop", href: URL_WEBINAR },
  });
  return { subject, text, html };
}

/** Copy de cada marco de lembrete. */
const REMINDER: Record<number, { kicker: string; titulo: string; abre: string }> = {
  7: {
    kicker: "Falta uma semana",
    titulo: "Seu workshop é daqui a 7 dias.",
    abre: "passando para lembrar: o workshop de criação de conteúdo está chegando.",
  },
  3: {
    kicker: "Faltam 3 dias",
    titulo: "Faltam 3 dias para o seu workshop.",
    abre: "deixa reservado na agenda — falta pouco para o workshop de criação de conteúdo.",
  },
  1: {
    kicker: "É amanhã",
    titulo: "Seu workshop é amanhã.",
    abre: "é amanhã! O workshop de criação de conteúdo está quase na hora.",
  },
};

/** Lembrete de N dias antes (7, 3 ou 1). */
export function reminderEmail(nome: string, dias: number): EmailContent {
  const first = primeiroNome(nome);
  const c = REMINDER[dias] ?? REMINDER[1];
  const subject =
    dias === 1
      ? "Seu workshop é amanhã"
      : `Seu workshop é em ${dias} dias`;
  const fecha =
    dias === 1
      ? "O link de acesso chega algumas horas antes. Até amanhã!"
      : "O link de acesso chega por e-mail perto da data.";
  const linhas = [
    `Olá ${first}, ${c.abre}`,
    `${webinar.dataLabel} · ${webinar.duracao}`,
    fecha,
    "— Felipe",
  ];
  const text = `${subject}\n\n${linhas.join("\n\n")}\n\n${URL_WEBINAR}`;
  const html = shell({
    kicker: c.kicker,
    titulo: c.titulo,
    preheader: `${webinar.dataLabel}. ${fecha}`,
    corpo: [
      paragrafo(`Olá <strong>${escapeHtml(first)}</strong>, ${escapeHtml(c.abre)}`),
      paragrafo(escapeHtml(fecha)),
      paragrafo("— Felipe"),
    ].join(""),
    destaque: `${webinar.dataLabel} · ${webinar.duracao}`,
    cta: { label: "Ver a página do workshop", href: URL_WEBINAR },
  });
  return { subject, text, html };
}
