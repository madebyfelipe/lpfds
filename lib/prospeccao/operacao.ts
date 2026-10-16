import "server-only";
import {
  CADENCIA,
  SAUDE,
  STATUS_CONVERSA,
  STATUS_EM_SEQUENCIA,
  STATUS_FINAIS,
  assuntoEnviado,
  classificarPorRegra,
  diaBrt,
  followupVencido,
  inicioDoDiaBrtIso,
  limiteDoDia,
  proximoDiaUtil,
  proximoFollowup,
  varianteDe,
  type Campanha,
  type Lead
} from "./config";
import {
  abrirImap,
  caixaConfigurada,
  caixaDoLead,
  enviar,
  guardarEmEnviados,
  listarCaixas,
  publica,
  varrerCaixa,
  type Caixa,
  type CaixaPublica
} from "./caixas";
import { iaConfigurada, lerResposta } from "./ia";
import {
  DOMINIOS_WEBMAIL,
  atualizarLead,
  bloqueado,
  caixasPausadas,
  definirPausaCaixa,
  lerBloqueios,
  listarCampanhas,
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
 *                       ela existir. Cada caixa pode ter o seu `inicio` (rampa
 *                       própria) em PROSPECCAO_CAIXAS.
 *   PROSPECCAO_MODO     "revisao" (padrão) — só sai o que foi aprovado no painel.
 *                       "automatico" — o que a rotina trouxe sai sozinho depois da
 *                       janela de veto (CADENCIA.janelaVetoHoras).
 *   PROSPECCAO_PAUSADO  "1" pausa tudo (o painel também pausa, sem redeploy).
 *   PROSPECCAO_LINK_AGENDA  link de agendamento que a IA põe na resposta a quem
 *                       demonstrou interesse (Cal.com, Calendly, Google Agenda).
 */
export function configuracao() {
  const env = process.env;
  const modo = env.PROSPECCAO_MODO === "automatico" ? "automatico" : "revisao";
  return {
    modo: modo as "revisao" | "automatico",
    inicio: env.PROSPECCAO_INICIO ?? "",
    pausado: env.PROSPECCAO_PAUSADO === "1",
    linkAgenda: env.PROSPECCAO_LINK_AGENDA ?? ""
  };
}

/* -------------------------------------------------------------------------- */
/* Caixas: limite do dia e saúde                                              */
/* -------------------------------------------------------------------------- */

/** Envios de uma caixa desde `iso` (1º contato e follow-up contam igual). */
export function enviadosDaCaixa(leads: Lead[], caixa: Caixa, caixas: Caixa[], iso: string): number {
  return leads.reduce((n, l) => {
    if (caixaDoLead(l.caixa || undefined, caixas)?.email !== caixa.email) return n;
    return n + (l.enviadoEm && l.enviadoEm >= iso ? 1 : 0) + (l.followupEm && l.followupEm >= iso ? 1 : 0);
  }, 0);
}

export type SaudeCaixa = {
  enviados: number;
  bounces: number;
  descadastros: number;
  respostas: number;
  taxaBounce: number;
  taxaDescadastro: number;
  degradada: boolean;
};

/** Últimos 30 dias da caixa: bounce alto = caixa degradada (sai do pool). */
export function saudeDaCaixa(leads: Lead[], caixa: Caixa, caixas: Caixa[]): SaudeCaixa {
  const desde = new Date(Date.now() - SAUDE.janelaDias * 86400_000).toISOString();
  const daCaixa = leads.filter(
    (l) => l.enviadoEm && l.enviadoEm >= desde && caixaDoLead(l.caixa || undefined, caixas)?.email === caixa.email
  );
  const enviados = daCaixa.length;
  const bounces = daCaixa.filter((l) => l.status === "BOUNCE").length;
  const descadastros = daCaixa.filter((l) => l.status === "DESCADASTRADO").length;
  const respostas = daCaixa.filter((l) => l.respondeuEm).length;
  const taxaBounce = enviados ? bounces / enviados : 0;
  return {
    enviados,
    bounces,
    descadastros,
    respostas,
    taxaBounce,
    taxaDescadastro: enviados ? descadastros / enviados : 0,
    degradada: enviados >= SAUDE.amostraMinima && taxaBounce > SAUDE.maxBounce
  };
}

export type EstadoCaixa = CaixaPublica & {
  limiteHoje: number;
  limiteAmanha: number;
  enviadosHoje: number;
  pausada: string | null;
  saude: SaudeCaixa;
};

export async function estadoDasCaixas(leads: Lead[]): Promise<EstadoCaixa[]> {
  const caixas = listarCaixas();
  const pausadas = await caixasPausadas();
  const cfg = configuracao();
  const hoje = diaBrt();
  const iso = inicioDoDiaBrtIso();
  return caixas.map((c) => ({
    ...publica(c),
    // Sem PROSPECCAO_INICIO, nenhuma caixa envia (chave geral).
    limiteHoje: cfg.inicio ? limiteDoDia(c.inicio, hoje, c.teto) : 0,
    limiteAmanha: cfg.inicio ? limiteDoDia(c.inicio, proximoDiaUtil(hoje), c.teto) : 0,
    enviadosHoje: enviadosDaCaixa(leads, c, caixas, iso),
    pausada: pausadas.get(c.email) ?? null,
    saude: saudeDaCaixa(leads, c, caixas)
  }));
}

/* -------------------------------------------------------------------------- */
/* Fila                                                                       */
/* -------------------------------------------------------------------------- */

const PESO_PRIORIDADE = { A: 0, B: 1, C: 2 } as const;

/** O lead está liberado para o 1º envio neste modo? */
export function liberado(l: Lead, modo: "revisao" | "automatico", agora = Date.now()): boolean {
  if (l.status === "PRONTO") return true;
  if (modo !== "automatico" || l.status !== "REVISAR") return false;
  const criado = Date.parse(l.criadoEm);
  return Number.isFinite(criado) && agora - criado >= CADENCIA.janelaVetoHoras * 3600_000;
}

export type ItemFila = { lead: Lead; tipo: "primeiro" | "followup"; corpo: string };

const ultimoEnvio = (l: Lead) => l.followupEm ?? l.enviadoEm;

/** Campanha bloqueia envio? (pausada/arquivada; lead sem campanha conhecida passa). */
export function campanhaParada(l: Lead, campanhas: readonly Campanha[]): boolean {
  const c = campanhas.find((x) => x.slug === l.campanha);
  return Boolean(c && c.status !== "ATIVA");
}

/** Fila do momento: follow-ups vencidos primeiro, depois novos por prioridade. */
export function montarFila(
  leads: Lead[],
  modo: "revisao" | "automatico",
  filtros: { campanhas?: readonly Campanha[]; bloqueios?: readonly string[] } = {}
): ItemFila[] {
  const campanhas = filtros.campanhas ?? [];
  const bloqueios = filtros.bloqueios ?? [];
  const elegivel = (l: Lead) => !campanhaParada(l, campanhas) && !bloqueado(l.email, bloqueios);

  const followups = leads
    .filter((l) => STATUS_EM_SEQUENCIA.includes(l.status) && proximoFollowup(l) && elegivel(l))
    .filter((l) => {
      const u = ultimoEnvio(l);
      return Boolean(u && followupVencido(u, l.etapa));
    })
    .sort((a, b) => (ultimoEnvio(a) ?? "").localeCompare(ultimoEnvio(b) ?? ""))
    .map((lead) => ({ lead, tipo: "followup" as const, corpo: proximoFollowup(lead)! }));

  const novos = leads
    .filter((l) => liberado(l, modo) && l.mensagem && elegivel(l))
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

/**
 * Distribui a fila pelas caixas: follow-up fica na caixa da conversa; lead
 * novo vai para a caixa com mais folga no lote. Devolve só o que cabe.
 */
export function distribuir(
  fila: ItemFila[],
  orcamento: Map<string, number>,
  caixas: Caixa[],
  caixasLidas: ReadonlySet<string>
): Array<ItemFila & { caixa: Caixa }> {
  const resto = new Map(orcamento);
  const usados = new Map<string, number>();
  const out: Array<ItemFila & { caixa: Caixa }> = [];
  for (const item of fila) {
    if (item.tipo === "followup") {
      const c = caixaDoLead(item.lead.caixa || undefined, caixas);
      // Follow-up só sai de caixa ativa E lida nesta execução (uma resposta
      // não lida faria o follow-up atropelar a conversa).
      if (!c || !caixasLidas.has(c.email) || (resto.get(c.email) ?? 0) <= 0) continue;
      resto.set(c.email, (resto.get(c.email) ?? 0) - 1);
      out.push({ ...item, caixa: c });
    } else {
      // Proporcional à folga de cada caixa (não à folga absoluta): uma caixa
      // nova, de teto menor, recebe a sua parte desde o 1º lote em vez de
      // esperar a maior "alcançar" o mesmo número.
      const fracao = (x: Caixa) => (resto.get(x.email) ?? 0) / Math.max(1, orcamento.get(x.email) ?? 0);
      const c = caixas
        .filter((x) => (resto.get(x.email) ?? 0) > 0)
        .sort((a, b) => fracao(b) - fracao(a) || (usados.get(a.email) ?? 0) - (usados.get(b.email) ?? 0))[0];
      if (!c) continue;
      resto.set(c.email, (resto.get(c.email) ?? 0) - 1);
      usados.set(c.email, (usados.get(c.email) ?? 0) + 1);
      out.push({ ...item, caixa: c });
    }
  }
  return out;
}

/* -------------------------------------------------------------------------- */
/* Disparo                                                                    */
/* -------------------------------------------------------------------------- */

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
  optOuts: number;
  bounces: number;
  classificadasIa: number;
  enviados: Array<{ email: string; tipo: "primeiro" | "followup"; caixa: string }>;
  falhas: Array<{ email: string; erro: string }>;
  ignorados: Array<{ email: string; motivo: string }>;
  caixasPausadasAgora: string[];
  previa?: Array<{ email: string; tipo: "primeiro" | "followup"; assunto: string; caixa: string }>;
  avisos: string[];
};

/**
 * Uma execução de disparo. Cron = fatia do limite diário de cada caixa;
 * `tudo` = usa o que resta do dia de uma vez (botão manual). `dry` = só lê e
 * calcula, sem enviar nem gravar.
 */
export async function disparar(opts: { dry?: boolean; tudo?: boolean; prazoMs?: number }): Promise<ResultadoDisparo> {
  const inicioExec = Date.now();
  const prazo = opts.prazoMs ?? 230_000;
  const cfg = configuracao();
  const dia = diaBrt();
  const r: ResultadoDisparo = {
    ok: true,
    dia,
    modo: cfg.modo,
    limiteHoje: 0,
    jaEnviadosHoje: 0,
    orcamento: 0,
    respostas: 0,
    optOuts: 0,
    bounces: 0,
    classificadasIa: 0,
    enviados: [],
    falhas: [],
    ignorados: [],
    caixasPausadasAgora: [],
    avisos: []
  };

  if (!twentyConfigurado()) return { ...r, ok: false, motivo: "twenty_unconfigured" };
  if (!caixaConfigurada()) return { ...r, ok: false, motivo: "smtp_unconfigured" };
  if (!process.env.PROSPECCAO_SECRET) return { ...r, ok: false, motivo: "prospeccao_secret_unconfigured" };
  if (cfg.pausado || (await pausaAtiva())) return { ...r, ok: false, motivo: "pausado" };

  const caixas = listarCaixas();
  const [pausadas, campanhas, bloqueios] = await Promise.all([caixasPausadas(), listarCampanhas(), lerBloqueios()]);
  const imaps = new Map<string, Awaited<ReturnType<typeof abrirImap>>>();
  const lidas = new Set<string>();
  const novasRespostas: string[] = [];

  try {
    // 1. Caixas de entrada: resposta, pedido de saída e bounce encerram a
    //    sequência ANTES de qualquer follow-up sair. Caixa que não abriu não
    //    manda follow-up nesta execução.
    let leads = await listarLeads();
    const acompanhados = leads.filter((l) => STATUS_EM_SEQUENCIA.includes(l.status) || STATUS_CONVERSA.includes(l.status));
    const desde = new Date(Date.now() - 45 * 86400_000);
    for (const c of caixas) {
      try {
        const client = await abrirImap(c);
        imaps.set(c.email, client);
        const achados = acompanhados.length ? await varrerCaixa(client, desde, acompanhados) : [];
        lidas.add(c.email);
        for (const a of achados) {
          const lead = acompanhados.find((l) => l.email === a.email);
          if (!lead || opts.dry) continue;
          if (a.tipo === "bounce") {
            if (lead.status === "BOUNCE" || STATUS_CONVERSA.includes(lead.status)) continue;
            await atualizarLead(lead.id, { prospStatus: "BOUNCE", prospErro: "bounce detectado na caixa" });
            r.bounces++;
            continue;
          }
          // Mesma resposta já registrada (o lote anterior leu): nada a fazer.
          if (a.messageId && a.messageId === lead.respostaMessageId) continue;
          if (lead.respondeuEm && a.data <= lead.respondeuEm) continue;
          const regra = classificarPorRegra(a.texto);
          const primeira = !lead.respondeuEm;
          await atualizarLead(lead.id, {
            prospStatus: regra.optOut ? "DESCADASTRADO" : lead.status === "REUNIAO" ? "REUNIAO" : "RESPONDEU",
            prospRespondeuEm: a.data,
            prospResposta: a.texto,
            prospRespostaMessageId: a.messageId,
            // Nova resposta deixa a sugestão anterior velha.
            prospRespostaSugerida: "",
            prospClassificacao: regra.classificacao,
            ...(primeira ? { prospEtapaResposta: lead.etapa } : {})
          });
          if (regra.optOut) r.optOuts++;
          else {
            r.respostas++;
            novasRespostas.push(lead.id);
          }
        }
      } catch (e) {
        r.avisos.push(`IMAP ${c.email}: ${e instanceof Error ? e.message : String(e)} — follow-ups desta caixa suspensos.`);
      }
    }

    // 2. Orçamento por caixa (pausada = zero; chave geral = PROSPECCAO_INICIO).
    leads = opts.dry ? leads : await listarLeads();
    const iso = inicioDoDiaBrtIso();
    const orcamento = new Map<string, number>();
    for (const c of caixas) {
      const limite = cfg.inicio && !pausadas.has(c.email) ? limiteDoDia(c.inicio, dia, c.teto) : 0;
      const feitos = enviadosDaCaixa(leads, c, caixas, iso);
      const restante = Math.max(0, limite - feitos);
      orcamento.set(c.email, opts.tudo ? restante : Math.min(restante, Math.ceil(limite / CADENCIA.lotesPorDia)));
      r.limiteHoje += limite;
      r.jaEnviadosHoje += feitos;
    }
    r.orcamento = [...orcamento.values()].reduce((a, b) => a + b, 0);
    if (!cfg.inicio) r.avisos.push("PROSPECCAO_INICIO não definido: nada sai.");
    else if (r.limiteHoje === 0) r.avisos.push("Hoje não é dia de envio (fim de semana, antes do início ou caixas pausadas).");

    const fila = distribuir(montarFila(leads, cfg.modo, { campanhas, bloqueios }), orcamento, caixas, lidas);

    if (opts.dry) {
      r.previa = fila.map(({ lead, tipo, caixa }) => ({
        email: lead.email,
        tipo,
        assunto: assuntoEnviado(lead),
        caixa: caixa.email
      }));
      return r;
    }

    // 3. Envios, com ritmo humano entre um e outro.
    for (let i = 0; i < fila.length; i++) {
      if (Date.now() - inicioExec > prazo) {
        r.avisos.push("Prazo da execução atingido — o resto fica para o próximo lote.");
        break;
      }
      const { lead, tipo, corpo, caixa } = fila[i];

      // Supressão na hora H: o mesmo e-mail pode ter entrado por outro caminho
      // (webinar, newsletter) ou saído depois da fila montada.
      const mesmas = await pessoasPorEmail(lead.email);
      const outraOrigem = mesmas.some((p) => p.id !== lead.id && p.origem !== "PROSPECCAO");
      const suprimido = mesmas.some((p) => p.id !== lead.id && STATUS_FINAIS.includes(p.prospStatus as never));
      if (outraOrigem || suprimido) {
        await atualizarLead(lead.id, {
          prospStatus: "DESCARTADO",
          prospErro: outraOrigem ? "já é contato por outra origem" : "e-mail na supressão"
        });
        r.ignorados.push({ email: lead.email, motivo: outraOrigem ? "outra_origem" : "suprimido" });
        continue;
      }

      try {
        if (tipo === "followup" && !lead.messageId) throw new Error("sem Message-ID do 1º e-mail");
        const variante = tipo === "primeiro" ? varianteDe(lead.email, Boolean(lead.assuntoB)) : lead.variante || "A";
        const assunto = variante === "B" && lead.assuntoB ? lead.assuntoB : lead.assunto;
        const { messageId, raw } = await enviar(caixa, {
          para: lead.email,
          assunto,
          corpo,
          fonte: lead.fonte,
          emRespostaA: tipo === "followup" ? lead.messageId : undefined
        });
        const agora = new Date().toISOString();
        await atualizarLead(
          lead.id,
          tipo === "followup"
            ? { prospStatus: "FOLLOWUP_ENVIADO", prospFollowupEm: agora, prospEtapa: lead.etapa + 1, prospErro: "" }
            : {
                prospStatus: "ENVIADO",
                prospEnviadoEm: agora,
                prospEtapa: 1,
                prospMessageId: messageId,
                prospCaixa: caixa.email,
                prospVariante: variante,
                prospErro: ""
              }
        );
        r.enviados.push({ email: lead.email, tipo, caixa: caixa.email });
        const imap = imaps.get(caixa.email);
        if (imap) await guardarEmEnviados(imap, raw).catch(() => {});
      } catch (e) {
        const erro = e instanceof Error ? e.message : String(e);
        // 5xx do servidor de destino = endereço não existe; não insistir.
        const permanente = /\b55[0-4]\b|user unknown|does not exist|mailbox unavailable/i.test(erro);
        await atualizarLead(lead.id, {
          prospErro: erro.slice(0, 500),
          ...(permanente ? { prospStatus: "BOUNCE" as const, prospCaixa: caixa.email } : {})
        }).catch(() => {});
        r.falhas.push({ email: lead.email, erro: erro.slice(0, 200) });
      }

      if (i < fila.length - 1) {
        const s = CADENCIA.intervaloMinSeg + Math.random() * (CADENCIA.intervaloMaxSeg - CADENCIA.intervaloMinSeg);
        await dormir(s * 1000);
      }
    }

    // 4. Saúde: caixa com bounce alto sai do pool sozinha (o Felipe reativa no painel).
    const depois = await listarLeads();
    for (const c of caixas) {
      if (pausadas.has(c.email)) continue;
      const s = saudeDaCaixa(depois, c, caixas);
      if (s.degradada) {
        await definirPausaCaixa(
          c.email,
          true,
          `Pausada automaticamente em ${dia}: bounce de ${(s.taxaBounce * 100).toFixed(1)}% em ${s.enviados} envios (limite ${SAUDE.maxBounce * 100}%). Limpe a lista antes de reativar.`
        );
        r.caixasPausadasAgora.push(c.email);
      }
    }

    // 5. IA: lê as respostas novas e rascunha a réplica (o envio é do Felipe).
    if (iaConfigurada() && novasRespostas.length) {
      for (const id of novasRespostas.slice(0, 6)) {
        // Teto da função é 300 s; cada leitura leva alguns segundos.
        if (Date.now() - inicioExec > 255_000) break;
        const lead = depois.find((l) => l.id === id);
        if (!lead) continue;
        const enviado = lead.etapa > 1 ? lead.followups[lead.etapa - 2] || lead.mensagem : lead.mensagem;
        const leitura = await lerResposta(lead, enviado, cfg.linkAgenda, campanhas.find((c) => c.slug === lead.campanha));
        if (!leitura.ok) continue;
        await atualizarLead(lead.id, {
          prospClassificacao: leitura.dados.classificacao,
          prospRespostaSugerida: leitura.dados.sugestao
        });
        r.classificadasIa++;
      }
    }
  } finally {
    for (const client of imaps.values()) await client.logout().catch(() => {});
  }

  if (r.enviados.length || r.falhas.length || r.respostas || r.bounces || r.optOuts || r.caixasPausadasAgora.length) {
    await registrarExecucao(
      `disparo ${dia} ${new Date().toLocaleTimeString("pt-BR", { timeZone: "America/Sao_Paulo", hour: "2-digit", minute: "2-digit" })}`,
      [
        `**Disparo** · modo ${cfg.modo} · limite do dia ${r.limiteHoje} (${caixas.length} caixa${caixas.length === 1 ? "" : "s"})`,
        "",
        `- Enviados: ${r.enviados.length} (${r.enviados.filter((e) => e.tipo === "followup").length} follow-ups)`,
        `- Falhas: ${r.falhas.length}`,
        `- Respostas: ${r.respostas} (${r.classificadasIa} lidas pela IA) · Pedidos de saída: ${r.optOuts} · Bounces: ${r.bounces}`,
        ...r.caixasPausadasAgora.map((c) => `- **Caixa pausada por saúde:** ${c}`),
        ...r.falhas.map((f) => `  - ${f.email}: ${f.erro}`),
        ...r.avisos.map((a) => `- Aviso: ${a}`)
      ].join("\n")
    ).catch(() => {});
  }
  return r;
}
