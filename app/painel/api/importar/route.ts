import { NextResponse } from "next/server";
import { lerCsv } from "@/lib/prospeccao/config";
import { autorizaPainel } from "@/lib/prospeccao/painel";
import { triar, type Triagem } from "@/lib/prospeccao/triagem";
import { criarLead, listarCampanhas, type NovoLead } from "@/lib/prospeccao/twenty";
import { validarImportado } from "@/lib/prospeccao/validacao";

/**
 * Importa uma planilha (CSV colado) para uma campanha. Cada linha entra como
 * PESQUISAR, sem texto: a rotina desta noite abre o site, escreve a evidência
 * e a sequência, ou descarta. Mesma triagem da rotina (CRM inteiro, bloqueios,
 * MX). `origem` (de onde a lista veio) é obrigatória — vai para o rodapé do
 * e-mail: o titular tem direito de saber de onde veio o contato (LGPD art. 9º).
 *
 * Colunas reconhecidas (cabeçalho, sem acento/maiúscula): email, nome,
 * empresa|clinica|consultorio, cidade, site|website|url, linkedin, instagram.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 120;

const MAX_LINHAS = 300;

export async function POST(request: Request) {
  if (!autorizaPainel(request)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  let body: { csv?: unknown; campanha?: unknown; origem?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }
  const origem = typeof body.origem === "string" ? body.origem.trim().slice(0, 200) : "";
  if (!origem) return NextResponse.json({ ok: false, error: "falta_origem" }, { status: 400 });
  const campanha = typeof body.campanha === "string" ? body.campanha : "";
  const linhas = lerCsv(typeof body.csv === "string" ? body.csv : "");
  if (!linhas.length) return NextResponse.json({ ok: false, error: "csv_vazio" }, { status: 400 });
  if (linhas.length > MAX_LINHAS) return NextResponse.json({ ok: false, error: "csv_grande", max: MAX_LINHAS }, { status: 400 });
  if (!linhas.some((l) => "email" in l)) return NextResponse.json({ ok: false, error: "csv_sem_email" }, { status: 400 });

  try {
    if (!(await listarCampanhas()).some((c) => c.slug === campanha)) {
      return NextResponse.json({ ok: false, error: "campanha_desconhecida" }, { status: 400 });
    }
    const ignorados: Triagem[] = [];
    const validos: NovoLead[] = [];
    for (const row of linhas) {
      const v = validarImportado(row, campanha, origem);
      if (v.ok) validos.push(v.valor);
      else ignorados.push({ email: row.email ?? "", motivo: v.motivo });
    }
    const aceitos = await triar(validos, ignorados);
    let criados = 0;
    for (const lead of aceitos) {
      try {
        await criarLead(lead);
        criados++;
      } catch (error) {
        console.error("[painel/importar] criar falhou:", error);
        ignorados.push({ email: lead.email, motivo: "twenty_failed" });
      }
    }
    return NextResponse.json({ ok: true, linhas: linhas.length, criados, ignorados });
  } catch (error) {
    console.error("[painel/importar]", error);
    return NextResponse.json({ ok: false, error: "twenty_failed" }, { status: 502 });
  }
}
