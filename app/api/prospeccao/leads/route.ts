import { NextResponse } from "next/server";
import { autorizaRotina } from "@/lib/prospeccao/seguranca";
import { DOMINIOS_WEBMAIL, conhecidos, criarLead } from "@/lib/prospeccao/twenty";
import { validarNovoLead } from "@/lib/prospeccao/validacao";

/**
 * Entrada da rotina noturna (POST, Bearer PROSPECCAO_TOKEN).
 *
 * Corpo: { campanha: "psico-interior-sp", leads: [{ email, empresa, ... }] }
 * (formato completo em docs/prospeccao-rotina.md).
 *
 * Cada lead é validado (lib/prospeccao/validacao.ts) e deduplicado contra o
 * CRM inteiro — qualquer origem. Quem já é contato (inscrito do webinar,
 * newsletter, cliente) NUNCA vira prospecção fria, e nada existente é
 * sobrescrito: esta rota só cria. Tudo entra como REVISAR.
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

  let base: Awaited<ReturnType<typeof conhecidos>>;
  try {
    base = await conhecidos();
  } catch (error) {
    console.error("[prospeccao/leads] dedup falhou:", error);
    // Sem dedup, não grava — melhor perder uma noite que prospectar um cliente.
    return NextResponse.json({ ok: false, error: "twenty_failed" }, { status: 502 });
  }
  const emails = new Set(base.emails);
  const dominios = new Set(base.dominios);

  const criados: Array<{ email: string; id: string }> = [];
  const ignorados: Array<{ email: string; motivo: string }> = [];

  for (const raw of brutos) {
    const v = validarNovoLead(raw, campanha);
    const emailBruto = String((raw as { email?: unknown })?.email ?? "");
    if (!v.ok) {
      ignorados.push({ email: emailBruto, motivo: v.motivo });
      continue;
    }
    const { lead } = v;
    const dom = lead.email.split("@")[1] ?? "";
    if (emails.has(lead.email)) {
      ignorados.push({ email: lead.email, motivo: "email_no_crm" });
      continue;
    }
    if (!DOMINIOS_WEBMAIL.has(dom) && dominios.has(dom)) {
      ignorados.push({ email: lead.email, motivo: "dominio_no_crm" });
      continue;
    }
    try {
      const id = await criarLead(lead);
      criados.push({ email: lead.email, id });
      // Vale para o resto do lote também (dois e-mails da mesma clínica).
      emails.add(lead.email);
      if (!DOMINIOS_WEBMAIL.has(dom)) dominios.add(dom);
    } catch (error) {
      console.error("[prospeccao/leads] criar falhou:", error);
      ignorados.push({ email: lead.email, motivo: "twenty_failed" });
    }
  }

  return NextResponse.json({ ok: true, campanha, criados, ignorados });
}
