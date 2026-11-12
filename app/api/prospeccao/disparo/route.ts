import { NextResponse } from "next/server";
import { disparar } from "@/lib/prospeccao/operacao";
import { autorizaDisparo } from "@/lib/prospeccao/seguranca";

/**
 * Disparo da prospecção — endpoint de CRON (vercel.json: 3 lotes em dias
 * úteis, 9h, 11h e 14h de Brasília). Cada lote varre a caixa (respostas e
 * bounces), manda follow-ups vencidos e novos e-mails, até a fatia do limite
 * diário. Tudo o que importa está em lib/prospeccao/operacao.ts.
 *
 * Auth: `Bearer CRON_SECRET` (Vercel Cron) ou `Bearer PROSPECCAO_TOKEN`.
 * `?dry=1` monta a fila e devolve a prévia sem enviar nem alterar o CRM.
 *
 * Nada sai enquanto PROSPECCAO_INICIO não estiver definido no ambiente.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
// Os envios são espaçados (14–26 s); um lote de 10 cabe com folga em 300 s.
export const maxDuration = 300;

async function handle(request: Request) {
  if (!autorizaDisparo(request)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  const dry = new URL(request.url).searchParams.get("dry") === "1";
  try {
    const r = await disparar({ dry });
    return NextResponse.json(r, { status: r.ok || r.motivo === "pausado" ? 200 : 503 });
  } catch (error) {
    console.error("[prospeccao/disparo]", error);
    return NextResponse.json({ ok: false, error: "disparo_failed" }, { status: 502 });
  }
}

export const GET = handle;
export const POST = handle;
