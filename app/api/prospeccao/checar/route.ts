import { NextResponse } from "next/server";
import { autorizaRotina } from "@/lib/prospeccao/seguranca";
import { DOMINIOS_WEBMAIL, conhecidos } from "@/lib/prospeccao/twenty";

/**
 * Dedup antes de escrever (POST, Bearer PROSPECCAO_TOKEN): a rotina manda os
 * e-mails candidatos e recebe quais já existem no CRM — por e-mail exato ou
 * pelo domínio próprio da clínica. Só responde sim/não por candidato: a lista
 * do CRM (inscritos do webinar, newsletter) nunca sai daqui.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (!autorizaRotina(request)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  let body: { emails?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }
  const emails = (Array.isArray(body.emails) ? body.emails : [])
    .filter((e): e is string => typeof e === "string")
    .map((e) => e.trim().toLowerCase())
    .slice(0, 200);

  try {
    const base = await conhecidos();
    const porEmail = new Set(base.emails);
    const porDominio = new Set(base.dominios);
    const resultado = emails.map((email) => {
      const dom = email.split("@")[1] ?? "";
      const motivo = porEmail.has(email)
        ? "email_no_crm"
        : !DOMINIOS_WEBMAIL.has(dom) && porDominio.has(dom)
          ? "dominio_no_crm"
          : null;
      return { email, conhecido: Boolean(motivo), motivo };
    });
    return NextResponse.json({ ok: true, resultado });
  } catch (error) {
    console.error("[prospeccao/checar]", error);
    return NextResponse.json({ ok: false, error: "twenty_failed" }, { status: 502 });
  }
}
