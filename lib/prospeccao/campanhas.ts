import { CAMPANHA_STATUS, type CampanhaStatus } from "./config";
import type { DadosCampanha } from "./twenty";

/** Validação do formulário de campanha do painel (texto livre, com teto). */
export function lerCampanha(body: Record<string, unknown>, parcial: boolean): { ok: true; valor: Partial<DadosCampanha> } | { ok: false; motivo: string } {
  const txt = (k: string, max: number) => (typeof body[k] === "string" ? (body[k] as string).trim().slice(0, max) : undefined);
  const out: Partial<DadosCampanha> = {};
  const nome = txt("nome", 120);
  if (nome !== undefined) out.nome = nome;
  const slugBruto = txt("slug", 60);
  if (slugBruto !== undefined) {
    const slug = slugBruto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    if (!slug) return { ok: false, motivo: "slug_invalido" };
    out.slug = slug;
  }
  if (body.status !== undefined) {
    if (!(CAMPANHA_STATUS as readonly string[]).includes(String(body.status))) return { ok: false, motivo: "status_invalido" };
    out.status = body.status as CampanhaStatus;
  }
  for (const k of ["icp", "oferta", "regioes", "excluir", "referencias", "tom"] as const) {
    const v = txt(k, 2000);
    if (v !== undefined) out[k] = v;
  }
  if (!parcial) {
    if (!out.nome) return { ok: false, motivo: "falta_nome" };
    if (!out.icp) return { ok: false, motivo: "falta_icp" };
    out.slug ??= out.nome
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 60);
    out.status ??= "ATIVA";
  }
  return { ok: true, valor: out };
}
