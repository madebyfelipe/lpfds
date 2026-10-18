import { NextResponse } from "next/server";
import { autorizaRotina } from "@/lib/prospeccao/seguranca";
import { triar, type Triagem } from "@/lib/prospeccao/triagem";
import { criarLead, type NovoLead } from "@/lib/prospeccao/twenty";
import { validarNovoLead } from "@/lib/prospeccao/validacao";

/**
 * Entrada da rotina noturna (POST, Bearer PROSPECCAO_TOKEN).
 *
 * Corpo: { campanha: "psico-neurodivergencia", leads: [{ email, empresa, ... }] }
 * (formato completo em docs/prospeccao-rotina.md).
 *
 * Cada lead é validado (lib/prospeccao/validacao.ts), deduplicado contra o
 * CRM inteiro — qualquer origem —, conferido contra a lista de bloqueio e
 * contra o DNS (domínio sem MX = bounce certo). Quem já é contato (inscrito do
 * webinar, newsletter, cliente) NUNCA vira prospecção fria, e nada existente
 * é sobrescrito: esta rota só cria. Tudo entra como REVISAR.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_POR_LOTE = 25;

export async function POST(request: Request) {
  if (!autorizaRotina(request)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });

  let body: { campanha?: unknown; leads?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }
  const campanha =
    typeof body.campanha === "string" && body.campanha.trim()
      ? body.campanha.trim().slice(0, 80)
      : `rotina-${new Date().toISOString().slice(0, 10)}`;
  const brutos = Array.isArray(body.leads) ? body.leads : [];
  if (!brutos.length) return NextResponse.json({ ok: false, error: "no_leads" }, { status: 400 });
  if (brutos.length > MAX_POR_LOTE) {
    return NextResponse.json({ ok: false, error: "too_many", max: MAX_POR_LOTE }, { status: 400 });
  }

  const ignorados: Triagem[] = [];
  const validos: NovoLead[] = [];
  for (const raw of brutos) {
    const v = validarNovoLead(raw, campanha);
    if (v.ok) validos.push(v.valor);
    else ignorados.push({ email: String((raw as { email?: unknown })?.email ?? ""), motivo: v.motivo });
  }

  let aceitos: NovoLead[];
  try {
    aceitos = await triar(validos, ignorados);
  } catch (error) {
    console.error("[prospeccao/leads] triagem falhou:", error);
    // Sem dedup, não grava — melhor perder uma noite que prospectar um cliente.
    return NextResponse.json({ ok: false, error: "twenty_failed" }, { status: 502 });
  }

  const criados: Array<{ email: string; id: string }> = [];
  for (const lead of aceitos) {
    try {
      criados.push({ email: lead.email, id: await criarLead(lead) });
    } catch (error) {
      console.error("[prospeccao/leads] criar falhou:", error);
      ignorados.push({ email: lead.email, motivo: "twenty_failed" });
    }
  }

  return NextResponse.json({ ok: true, campanha, criados, ignorados });
}
