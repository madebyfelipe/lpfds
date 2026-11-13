import { createCipheriv, createDecipheriv, createHash, randomBytes } from "node:crypto";

/**
 * Link rastreado do cold mail (sem pixel).
 *
 * O e-mail frio continua em texto puro, sem pixel de abertura (decisão
 * registrada em lib/prospeccao/caixas.ts e mantida pelo Felipe em 13/11/2026).
 * O único rastreio é o clique num link: /r/<token> grava o clique no lead e
 * redireciona para a página de exemplo.
 *
 * Token opaco: AES-256-GCM do id do lead (UUID do Twenty) com uma chave
 * derivada de CLIQUE_SECRET (ou, sem ele, PROSPECCAO_SECRET). O link não
 * mostra o id, não dá para trocar um lead por outro (a tag do GCM falha) e a
 * rota não precisa de tabela para saber de quem é o clique.
 *
 * Arquivo puro (sem `server-only`): os testes em tests/ importam daqui.
 */

const VERSAO = "1";
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const chave = (segredo: string) => createHash("sha256").update(`clique-v${VERSAO}:${segredo}`).digest();

/** UUID → 16 bytes (o token fica mais curto que cifrar o texto). */
const uuidBytes = (id: string) => Buffer.from(id.replace(/-/g, ""), "hex");
const bytesUuid = (b: Buffer) => {
  const h = b.toString("hex");
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;
};

export function gerarToken(idLead: string, segredo: string): string {
  if (!segredo) throw new Error("clique_secret_ausente");
  if (!UUID.test(idLead)) throw new Error("id_invalido");
  const iv = randomBytes(12);
  const c = createCipheriv("aes-256-gcm", chave(segredo), iv);
  const cifrado = Buffer.concat([c.update(uuidBytes(idLead)), c.final()]);
  return VERSAO + Buffer.concat([iv, cifrado, c.getAuthTag()]).toString("base64url");
}

/** Id do lead, ou null se o token for inválido, adulterado ou de outro segredo. */
export function lerToken(token: string, segredo: string): string | null {
  if (!segredo || typeof token !== "string" || token[0] !== VERSAO || token.length > 80) return null;
  try {
    const b = Buffer.from(token.slice(1), "base64url");
    if (b.length !== 12 + 16 + 16) return null;
    const d = createDecipheriv("aes-256-gcm", chave(segredo), b.subarray(0, 12));
    d.setAuthTag(b.subarray(28));
    const id = bytesUuid(Buffer.concat([d.update(b.subarray(12, 28)), d.final()]));
    return UUID.test(id) ? id : null;
  } catch {
    return null;
  }
}

/**
 * Pedido que não é uma pessoa clicando: pré-busca do navegador, robôs de
 * prévia de link (WhatsApp, Slack, redes) e scanners de segurança de e-mail
 * (Microsoft Safe Links, Proofpoint, Mimecast, Barracuda…), que abrem todo link
 * assim que a mensagem chega. Esses não contam como clique.
 */
const UA_ROBO =
  /bot\b|bot\/|crawl|spider|slurp|preview|scanner|scan\b|python|curl|wget|go-http|java\/|okhttp|axios|node-fetch|undici|headless|phantom|lighthouse|facebookexternalhit|whatsapp|telegram|slack|discord|skype|microsoft office|ms-office|safelinks|proofpoint|mimecast|barracuda|forcepoint|sophos|trend ?micro|fortinet|symantec|messagelabs|zscaler|cisco|ironport|virustotal|urlscan|google-?read-?aloud|googleimageproxy|yahoomailproxy|bingpreview/i;

export function ehRobo(method: string, headers: Headers): boolean {
  if (method.toUpperCase() !== "GET") return true; // HEAD/OPTIONS: verificação de link, não clique
  const ua = headers.get("user-agent") ?? "";
  if (!ua.trim() || UA_ROBO.test(ua)) return true;
  const proposito = `${headers.get("purpose") ?? ""} ${headers.get("sec-purpose") ?? ""} ${headers.get("x-purpose") ?? ""} ${headers.get("x-moz") ?? ""}`;
  if (/prefetch|prerender|preview/i.test(proposito)) return true;
  return false;
}

/** Destino do link: página de exemplo de site de psicóloga (dados fictícios, noindex). */
export const DESTINO_CLIQUE = "/exemplo/site-psicologa";
