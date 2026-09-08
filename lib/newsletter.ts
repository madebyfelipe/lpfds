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

/* -------------------------------------------------------------------------- */
/* UTM — atribuição de campanha                                               */
/* -------------------------------------------------------------------------- */

/** Parâmetros UTM padrão capturados da URL. */
export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term"
] as const;

export type UtmParams = Partial<Record<(typeof UTM_KEYS)[number], string>>;

/** Onde a captura fica entre a chegada no /hub e o envio do formulário. */
const UTM_STORAGE_KEY = "mbf-utm";
const MAX_UTM = 300;

/**
 * Captura os UTMs da URL atual e guarda na sessão. Rodada no mount de qualquer
 * página do /hub: se o visitante chegou por um anúncio, os parâmetros ficam
 * retidos mesmo que ele navegue antes de abrir o modal do e-book.
 *
 * Só grava quando a URL traz algo — assim uma navegação interna (sem UTM) não
 * apaga a atribuição da mesma sessão.
 */
export function captureUtm(): void {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const captured: UtmParams = {};
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) captured[key] = value.slice(0, MAX_UTM);
    }
    if (Object.keys(captured).length === 0) return;
    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(captured));
  } catch {
    // sem sessionStorage: os UTMs ainda são lidos da URL viva no submit
  }
}

/**
 * Lê os UTMs no momento do envio: a URL viva tem prioridade e, na falta dela,
 * cai no que a sessão guardou de uma chegada anterior.
 */
export function readUtm(): UtmParams {
  if (typeof window === "undefined") return {};
  const merged: UtmParams = {};
  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (stored) Object.assign(merged, JSON.parse(stored) as UtmParams);
  } catch {
    // ignora — segue com o que a URL trouxer
  }
  try {
    const params = new URLSearchParams(window.location.search);
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) merged[key] = value.slice(0, MAX_UTM);
    }
  } catch {
    // ignora
  }
  return merged;
}

export type SubscribeInput = {
  email: string;
  /** Opcional: o popup da landing só pede e-mail. */
  name?: string;
  source: NewsletterSource;
  /** Atribuição de campanha capturada na URL do /hub. */
  utm?: UtmParams;
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
