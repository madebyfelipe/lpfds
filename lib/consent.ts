/**
 * Consentimento de cookies — fonte única.
 *
 * O site não carrega nada de terceiro antes do aceite: o Meta Pixel e os
 * embeds de Instagram/TikTok só entram na página depois que `getConsent()`
 * devolve "granted". Sem decisão, nada é carregado (o padrão é recusa, não
 * aceite tácito — é o que a LGPD pede no art. 7º, I).
 *
 * Guardamos no localStorage, não em cookie: a decisão nunca precisa ir ao
 * servidor, então não há motivo para viajar em toda requisição.
 */

export const CONSENT_KEY = "mbf-consent";

/** Depois disso a escolha caduca e o banner volta a perguntar. */
export const CONSENT_TTL_DIAS = 365;

export type ConsentValue = "granted" | "denied";

/** `null` = ainda não decidiu (ou a decisão caducou). */
export type ConsentState = ConsentValue | null;

/** Disparado no `window` sempre que a decisão muda, para as telas reagirem. */
export const CONSENT_EVENT = "mbf:consent-change";

type StoredConsent = { value: ConsentValue; at: string };

function isConsentValue(value: unknown): value is ConsentValue {
  return value === "granted" || value === "denied";
}

/**
 * Lê a decisão vigente. Devolve `null` no servidor, quando nunca houve
 * decisão, quando o registro está corrompido ou quando já passou do TTL.
 */
export function getConsent(): ConsentState {
  if (typeof window === "undefined") return null;

  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(CONSENT_KEY);
  } catch {
    // Navegador com armazenamento bloqueado: trata como quem não decidiu.
    return null;
  }
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as Partial<StoredConsent>;
    if (!isConsentValue(parsed.value)) return null;

    const at = Date.parse(parsed.at ?? "");
    if (Number.isNaN(at)) return null;

    const idadeDias = (Date.now() - at) / 86_400_000;
    if (idadeDias > CONSENT_TTL_DIAS) return null;

    return parsed.value;
  } catch {
    return null;
  }
}

/** Grava a decisão e avisa a página inteira. */
export function setConsent(value: ConsentValue): void {
  if (typeof window === "undefined") return;

  const registro: StoredConsent = { value, at: new Date().toISOString() };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(registro));
  } catch {
    // Sem persistência a escolha vale só nesta navegação — melhor do que
    // travar o fluxo; o evento abaixo ainda aplica a decisão na hora.
  }

  window.dispatchEvent(new CustomEvent<ConsentValue>(CONSENT_EVENT, { detail: value }));
}

/**
 * Apaga a decisão — o banner volta a aparecer.
 *
 * Recusar depois de ter aceitado não desfaz o que a Meta já gravou: os
 * cookies de terceiro ficam no domínio deles, fora do alcance deste código.
 * O que garantimos é que o script para de ser carregado a partir daqui; a
 * página é recarregada para limpar o que já estava em memória.
 */
export function clearConsent(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(CONSENT_KEY);
  } catch {
    // nada a fazer
  }
  window.dispatchEvent(new CustomEvent<ConsentValue | null>(CONSENT_EVENT, { detail: null }));
}
