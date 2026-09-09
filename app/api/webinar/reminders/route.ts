import { NextResponse } from "next/server";
import { REMINDER_DAYS, webinar, webinarDaysUntil } from "@/lib/webinar";
import { sendReminder } from "@/lib/webinarMailer";

/**
 * Lembretes do webinar (7/3/1 dias antes) — endpoint de CRON.
 *
 * O Vercel Cron bate aqui uma vez por dia (ver `vercel.json`). A rota calcula
 * quantos dias faltam para o evento (calendário, fuso de Brasília) e, se hoje
 * for um dos marcos (7, 3 ou 1), lê a lista de inscritos no Twenty (origem
 * WEBINAR) e manda o lembrete daquele marco por SMTP.
 *
 * Idempotência sem flag por pessoa: como só dispara nos 3 dias-marco exatos e o
 * cron roda uma vez ao dia, cada inscrito recebe no máximo um lembrete por
 * marco. Quem se inscreve depois de um marco passado só recebe os próximos.
 *
 * Segurança: exige `Authorization: Bearer <CRON_SECRET>` (o Vercel Cron manda
 * esse header quando CRON_SECRET está setado no projeto). Sem CRON_SECRET no
 * ambiente a rota recusa — não fica um gatilho aberto para qualquer um.
 *
 * `?dry=1` (com o segredo) calcula e conta os inscritos sem enviar nada.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const { TWENTY_API_KEY, CRON_SECRET } = process.env;
const TWENTY_BASE = (process.env.TWENTY_BASE_URL ?? "https://crm.madebyfelipe.agency").replace(/\/$/, "");
const REST = `${TWENTY_BASE}/rest`;
const TIMEOUT_MS = 12000;

type Registrant = { email: string; nome: string };

/** Inscritos no webinar = Person com origem=WEBINAR e e-mail. Pagina por cursor. */
async function fetchRegistrants(): Promise<Registrant[]> {
  if (!TWENTY_API_KEY) return [];
  const out: Registrant[] = [];
  const seen = new Set<string>();
  let after: string | null = null;

  for (let page = 0; page < 40; page++) {
    const filter = `origem%5Beq%5D:%22WEBINAR%22`;
    const cursor = after ? `&starting_after=${encodeURIComponent(after)}` : "";
    const res = await fetch(`${REST}/people?filter=${filter}&limit=60${cursor}`, {
      headers: { Authorization: `Bearer ${TWENTY_API_KEY}` },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) throw new Error(`Twenty GET /people → ${res.status} ${await res.text()}`);
    const json = (await res.json()) as {
      data?: { people?: Array<Record<string, unknown>> };
      pageInfo?: { hasNextPage?: boolean; endCursor?: string };
    };
    const people = json.data?.people ?? [];
    for (const p of people) {
      const emails = p.emails as { primaryEmail?: string } | undefined;
      const name = p.name as { firstName?: string; lastName?: string } | undefined;
      const email = (emails?.primaryEmail ?? "").trim().toLowerCase();
      if (!email || seen.has(email)) continue;
      seen.add(email);
      const nome = [name?.firstName, name?.lastName].filter(Boolean).join(" ").trim() || email;
      out.push({ email, nome });
    }
    if (!json.pageInfo?.hasNextPage || !json.pageInfo.endCursor || people.length === 0) break;
    after = json.pageInfo.endCursor;
  }
  return out;
}

async function handle(request: Request) {
  // Sem segredo configurado, a rota não roda (evita gatilho aberto).
  if (!CRON_SECRET) {
    return NextResponse.json({ ok: false, error: "cron_unconfigured" }, { status: 503 });
  }
  if (request.headers.get("authorization") !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  const dias = webinarDaysUntil();
  const dry = new URL(request.url).searchParams.get("dry") === "1";

  // Fora dos marcos: não faz nada (o cron roda todo dia, só age em 7/3/1).
  if (!REMINDER_DAYS.includes(dias as (typeof REMINDER_DAYS)[number])) {
    return NextResponse.json({ ok: true, evento: webinar.dataLabel, dias, marco: false, enviados: 0 });
  }

  let registrants: Registrant[];
  try {
    registrants = await fetchRegistrants();
  } catch (error) {
    console.error("[webinar/reminders] busca de inscritos falhou:", error);
    return NextResponse.json({ ok: false, error: "registrants_fetch_failed" }, { status: 502 });
  }

  if (dry) {
    return NextResponse.json({ ok: true, dias, marco: true, dry: true, inscritos: registrants.length });
  }

  let enviados = 0;
  let falhas = 0;
  for (const r of registrants) {
    try {
      if (await sendReminder(r.email, r.nome, dias)) enviados++;
      else falhas++; // SMTP não configurado
    } catch (error) {
      falhas++;
      console.error(`[webinar/reminders] envio falhou para ${r.email}:`, error);
    }
  }

  return NextResponse.json({ ok: true, dias, marco: true, inscritos: registrants.length, enviados, falhas });
}

// O Vercel Cron usa GET; o POST fica disponível para disparo manual autenticado.
export const GET = handle;
export const POST = handle;
