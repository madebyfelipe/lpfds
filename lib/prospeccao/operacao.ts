import "server-only";
import {
  CADENCIA,
  STATUS_FINAIS,
  diaBrt,
  followupVencido,
  inicioDoDiaBrtIso,
  limiteDoDia,
  proximoFollowup,
  type Lead
} from "./config";
import { abrirImap, caixaConfigurada, enviar, guardarEmEnviados, varrerCaixa } from "./caixa";
import {
  DOMINIOS_WEBMAIL,
  atualizarLead,
  leadsEmSequenciaComMessageId,
  listarLeads,
  pausaAtiva,
  pessoasPorEmail,
  registrarExecucao,
  twentyConfigurado
} from "./twenty";

/**
 * Configuração operacional. Vem do ambiente (Vercel → Environment Variables):
 *
 *   PROSPECCAO_INICIO   "YYYY-MM-DD" — 1º dia de disparo. Vazio = nada sai.
 *                       É a chave geral: o sistema inteiro fica em ensaio até
 *                       ela existir, e a rampa de aquecimento conta a partir dela.
 *   PROSPECCAO_MODO     "revisao" (padrão) — só sai o que foi aprovado no painel.
 *                       "automatico" — o que a rotina trouxe sai sozinho depois da
 *                       janela de veto (CADENCIA.janelaVetoHoras).
 *   PROSPECCAO_PAUSADO  "1" pausa tudo (freio de emergência sem redeploy de código).
 */
export function configuracao() {
  const env = process.env;
  const modo = env.PROSPECCAO_MODO === "automatico" ? "automatico" : "revisao";
  const inicio = env.PROSPECCAO_INICIO ?? "";
  return {
    modo: modo as "revisao" | "automatico",
    inicio,
    pausado: env.PROSPECCAO_PAUSADO === "1",
    limiteHoje: limiteDoDia(inicio),
    limiteAmanha: limiteDoDia(inicio, proximoDiaUtil())
  };
}

function proximoDiaUtil(): string {
  const d = new Date(`${diaBrt()}T12:00:00-03:00`);
  do d.setUTCDate(d.getUTCDate() + 1);
  while (d.getUTCDay() === 0 || d.getUTCDay() === 6);
  return diaBrt(d);
}

const PESO_PRIORIDADE = { A: 0, B: 1, C: 2 } as const;

export function enviadosDesde(leads: Lead[], iso: string): number {
  return leads.reduce(
    (n, l) => n + (l.enviadoEm && l.enviadoEm >= iso ? 1 : 0) + (l.followupEm && l.followupEm >= iso ? 1 : 0),
    0
  );
}

/** O lead está liberado para o 1º envio neste modo? */
export function liberado(l: Lead, modo: "revisao" | "automatico", agora = Date.now()): boolean {
  if (l.status === "PRONTO") return true;
  if (modo !== "automatico" || l.status !== "REVISAR") return false;
  const criado = Date.parse(l.criadoEm);
  return Number.isFinite(criado) && agora - criado >= CADENCIA.janelaVetoHoras * 3600_000;
}

export type ItemFila = { lead: Lead; tipo: "primeiro" | "followup"; corpo: string };

const ultimoEnvio = (l: Lead) => l.followupEm ?? l.enviadoEm;

/** Fila do momento: follow-ups vencidos primeiro, depois novos por prioridade. */
export function montarFila(leads: Lead[], modo: "revisao" | "automatico"): ItemFila[] {
  const followups = leads
    .filter((l) => (l.status === "ENVIADO" || l.status === "FOLLOWUP_ENVIADO") && proximoFollowup(l))
    .filter((l) => {
      const u = ultimoEnvio(l);
      return Boolean(u && followupVencido(u, l.etapa));
    })
    .sort((a, b) => (ultimoEnvio(a) ?? "").localeCompare(ultimoEnvio(b) ?? ""))
    .map((lead) => ({ lead, tipo: "followup" as const, corpo: proximoFollowup(lead)! }));

  const novos = leads
    .filter((l) => liberado(l, modo))
    .sort(
      (a, b) =>
        PESO_PRIORIDADE[a.prioridade ?? "C"] - PESO_PRIORIDADE[b.prioridade ?? "C"] ||
        (b.score ?? 0) - (a.score ?? 0) ||
        a.criadoEm.localeCompare(b.criadoEm)
    )
    .map((lead) => ({ lead, tipo: "primeiro" as const, corpo: lead.mensagem }));

  // Uma clínica por vez: dois endereços do mesmo domínio próprio no mesmo
  // lote parecem disparo em massa para o servidor de lá.
  const dominios = new Set<string>();
  return [...followups, ...novos].filter(({ lead, tipo }) => {
    if (tipo === "followup") return true;
    const dom = lead.email.split("@")[1] ?? "";
    if (DOMINIOS_WEBMAIL.has(dom)) return true;
    if (dominios.has(dom)) return false;
    dominios.add(dom);
    return true;
  });
}

const dormir = (ms: number) => new Promise((r) => setTimeout(r, ms));

export type ResultadoDisparo = {
  ok: boolean;
  motivo?: string;
  dia: string;
  modo: "revisao" | "automatico";
  limiteHoje: number;
  jaEnviadosHoje: number;
  orcamento: number;
  respostas: number;
  bounces: number;
  enviados: Array<{ email: string; tipo: "primeiro" | "followup" }>;
  falhas: Array<{ email: string; erro: string }>;
  ignorados: Array<{ email: string; motivo: string }>;
  previa?: Array<{ email: string; tipo: "primeiro" | "followup"; assunto: string }>;
  avisos: string[];
};

/**
 * Uma execução de disparo. `lote` = fatia do limite diário (cron); `tudo` =
 * usa o que resta do dia de uma vez (botão manual). `dry` = só calcula.
 */
export async function disparar(opts: { dry?: boolean; tudo?: boolean; prazoMs?: number }): Promise<ResultadoDisparo> {
  const inicioExec = Date.now();
  const prazo = opts.prazoMs ?? 240_000;
  const cfg = configuracao();
  const dia = diaBrt();
  const base: ResultadoDisparo = {
    ok: true,
    dia,
    modo: cfg.modo,
    limiteHoje: cfg.limiteHoje,
    jaEnviadosHoje: 0,
    orcamento: 0,
    respostas: 0,
    bounces: 0,
    enviados: [],
    falhas: [],
    ignorados: [],
    avisos: []
  };

  if (!twentyConfigurado()) return { ...base, ok: false, motivo: "twenty_unconfigured" };
  if (!caixaConfigurada()) return { ...base, ok: false, motivo: "smtp_unconfigured" };
  if (!process.env.PROSPECCAO_SECRET) return { ...base, ok: false, motivo: "prospeccao_secret_unconfigured" };
  if (cfg.pausado || (await pausaAtiva())) return { ...base, ok: false, motivo: "pausado" };

  // 1. Caixa de entrada: resposta ou bounce encerram a sequência ANTES de
  //    qualquer follow-up sair. Se o IMAP falhar, follow-up nenhum sai hoje.
  let imap: Awaited<ReturnType<typeof abrirImap>> = null;
  let caixaLida = false;
  let emSequencia: Awaited<ReturnType<typeof leadsEmSequenciaComMessageId>> = [];
  try {
    emSequencia = await leadsEmSequenciaComMessageId();
    imap = await abrirImap();
    if (imap && emSequencia.length) {
      const desde = new Date(Date.now() - 30 * 86400_000);
      const achados = await varrerCaixa(imap, desde, emSequencia);
      for (const a of achados) {
        const lead = emSequencia.find((l) => l.email === a.email);
        if (!lead || opts.dry) continue;
        if (a.tipo === "resposta") {
          await atualizarLead(lead.id, { prospStatus: "RESPONDEU", prospRespondeuEm: a.data });
          base.respostas++;
        } else {
          await atualizarLead(lead.id, { prospStatus: "BOUNCE", prospErro: "bounce detectado na caixa" });
          base.bounces++;
        }
      }
    }
    caixaLida = Boolean(imap);
  } catch (e) {
    base.avisos.push(`IMAP: ${e instanceof Error ? e.message : String(e)} — follow-ups suspensos nesta execução.`);
  }

  try {
    const leads = await listarLeads();
    base.jaEnviadosHoje = enviadosDesde(leads, inicioDoDiaBrtIso());
    const restante = Math.max(0, cfg.limiteHoje - base.jaEnviadosHoje);
    const porLote = Math.ceil(cfg.limiteHoje / CADENCIA.lotesPorDia);
    base.orcamento = opts.tudo ? restante : Math.min(restante, porLote);

    let fila = montarFila(leads, cfg.modo);
    if (!caixaLida) fila = fila.filter((i) => i.tipo !== "followup");
    fila = fila.slice(0, base.orcamento);

    if (cfg.limiteHoje === 0) {
      base.avisos.push(
        cfg.inicio ? "Hoje não é dia de envio (fim de semana ou antes do início)." : "PROSPECCAO_INICIO não definido: nada sai."
      );
    }

    if (opts.dry) {
      base.previa = fila.map(({ lead, tipo }) => ({ email: lead.email, tipo, assunto: lead.assunto }));
      return base;
    }

    for (let i = 0; i < fila.length; i++) {
      if (Date.now() - inicioExec > prazo) {
        base.avisos.push("Prazo da execução atingido — o resto fica para o próximo lote.");
        break;
      }
      const { lead, tipo, corpo } = fila[i];

      // Supressão na hora H: o mesmo e-mail pode ter entrado por outro caminho
      // (webinar, newsletter) ou ter sido descadastrado depois da fila montada.
      const mesmas = await pessoasPorEmail(lead.email);
      const outraOrigem = mesmas.some((p) => p.id !== lead.id && p.origem !== "PROSPECCAO");
      const suprimido = mesmas.some((p) => STATUS_FINAIS.includes(p.prospStatus as never) && p.id !== lead.id);
      if (outraOrigem || suprimido) {
        await atualizarLead(lead.id, {
          prospStatus: "DESCARTADO",
          prospErro: outraOrigem ? "já é contato por outra origem" : "e-mail na supressão"
        });
        base.ignorados.push({ email: lead.email, motivo: outraOrigem ? "outra_origem" : "suprimido" });
        continue;
      }

      try {
        const messageIdOriginal =
          tipo === "followup" ? emSequencia.find((l) => l.id === lead.id)?.messageId || undefined : undefined;
        if (tipo === "followup" && !messageIdOriginal) throw new Error("sem Message-ID do 1º e-mail");
        const { messageId, raw } = await enviar({
          para: lead.email,
          assunto: lead.assunto,
          corpo,
          fonte: lead.fonte,
          emRespostaA: messageIdOriginal
        });
        const agora = new Date().toISOString();
        await atualizarLead(
          lead.id,
          tipo === "followup"
            ? { prospStatus: "FOLLOWUP_ENVIADO", prospFollowupEm: agora, prospEtapa: lead.etapa + 1, prospErro: "" }
            : { prospStatus: "ENVIADO", prospEnviadoEm: agora, prospEtapa: 1, prospMessageId: messageId, prospErro: "" }
        );
        base.enviados.push({ email: lead.email, tipo });
        if (imap) await guardarEmEnviados(imap, raw).catch(() => {});
      } catch (e) {
        const erro = e instanceof Error ? e.message : String(e);
        // 5xx do servidor de destino = endereço não existe; não insistir.
        const permanente = /\b55[0-4]\b|user unknown|does not exist|mailbox unavailable/i.test(erro);
        await atualizarLead(lead.id, {
          prospErro: erro.slice(0, 500),
          ...(permanente ? { prospStatus: "BOUNCE" as const } : {})
        }).catch(() => {});
        base.falhas.push({ email: lead.email, erro: erro.slice(0, 200) });
      }

      if (i < fila.length - 1) {
        const s = CADENCIA.intervaloMinSeg + Math.random() * (CADENCIA.intervaloMaxSeg - CADENCIA.intervaloMinSeg);
        await dormir(s * 1000);
      }
    }
  } finally {
    await imap?.logout().catch(() => {});
  }

  if (base.enviados.length || base.falhas.length || base.respostas || base.bounces) {
    await registrarExecucao(
      `disparo ${dia} ${new Date().toLocaleTimeString("pt-BR", { timeZone: "America/Sao_Paulo", hour: "2-digit", minute: "2-digit" })}`,
      [
        `**Disparo** · modo ${cfg.modo} · limite do dia ${cfg.limiteHoje}`,
        "",
        `- Enviados: ${base.enviados.length} (${base.enviados.filter((e) => e.tipo === "followup").length} follow-ups)`,
        `- Falhas: ${base.falhas.length}`,
        `- Respostas detectadas: ${base.respostas} · Bounces: ${base.bounces}`,
        ...base.falhas.map((f) => `  - ${f.email}: ${f.erro}`),
        ...base.avisos.map((a) => `- Aviso: ${a}`)
      ].join("\n")
    ).catch(() => {});
  }
  return base;
}
