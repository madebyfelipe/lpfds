/**
 * Newsletter — ponto único de configuração.
 *
 * O opt-in é o portão do e-book: o link do mirror só aparece depois que o
 * e-mail é aceito pelo /api/newsletter (que repassa para o Twenty e o Make).
 *
 * Quem assina pela newsletter (sem passar pelo portão) cai em outro workflow
 * do Twenty — só e-mail de confirmação, sem e-book — e a rota não devolve
 * `download` nesse caso.
 */

/** Material entregue em troca do opt-in. */
export const ebook = {
  /** Nome completo do produto (usado no CRM e nos títulos). */
  title: "E-book de construção de marca para psicólogos",
  /** Versão curta, para o card do deck do hub. */
  short: "E-book de marca",
  /** Identificador enviado ao CRM. */
  id: "ebook-marca-psicologos",
  /** Mirror do arquivo — só é revelado depois do opt-in. */
  url: "https://file.madebyfelipe.agency/api/shares/ebook/files/05379551-d4cf-4f87-af58-92e533912124"
} as const;

/**
 * De onde veio o cadastro — vira o campo `source` no Twenty e escolhe o
 * workflow: só `hub-ebook` dispara a entrega do e-book.
 */
export const newsletterSources = [
  "hub-ebook",
  "hub-newsletter",
  "landing-manual-popup"
] as const;

export type NewsletterSource = (typeof newsletterSources)[number];

/** Guard usado na rota: origem desconhecida não pode pedir o e-book. */
export function isNewsletterSource(value: unknown): value is NewsletterSource {
  return (
    typeof value === "string" &&
    (newsletterSources as readonly string[]).includes(value)
  );
}

export type SubscribeInput = {
  email: string;
  /** Opcional: o popup da landing só pede e-mail. */
  name?: string;
  source: NewsletterSource;
};

export type SubscribeResult = {
  ok: boolean;
  /** URL do e-book — presente apenas no cadastro vindo do portão (`hub-ebook`). */
  download?: string;
};

/**
 * Envia o cadastro para /api/newsletter (rota de servidor: mantém as URLs dos
 * webhooks fora do bundle e evita depender do CORS de cada provedor).
 */
export async function subscribe(input: SubscribeInput): Promise<SubscribeResult> {
  const res = await fetch("/api/newsletter", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input)
  });

  if (!res.ok) throw new Error(`Newsletter respondeu ${res.status}`);
  return (await res.json()) as SubscribeResult;
}
