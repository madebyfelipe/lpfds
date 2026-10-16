"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { InstThemeToggle } from "@/components/institucional/InstThemeToggle";
import {
  CADENCIA,
  LINKEDIN_STATUS,
  PROSP_STATUS_LABEL,
  REGRAS_COPY,
  checarCopy,
  contarPalavras,
  type Lead,
  type LinkedinStatus,
  type ProspStatus
} from "@/lib/prospeccao/config";

/**
 * Painel comercial — sucessor do protótipo estático do Codex
 * (previews/campanhas/index.html). Mesma ideia (revisar cada contato e cada
 * mensagem antes do envio), agora ligada ao Twenty, ao disparo e à rotina.
 *
 * Abas: Revisão · Leads · Domínio · Rotina · Meta. Tudo via /painel/api/*,
 * que fica atrás do mesmo HTTP Basic desta página.
 */

type Cfg = {
  modo: "revisao" | "automatico";
  inicio: string;
  pausado: boolean;
  pausaPeloPainel?: boolean;
  limiteHoje: number;
  limiteAmanha: number;
};
type Remetente = { email: string; nome: string; dominio: string; smtpHost: string; imapHost: string; dedicada: boolean };
type Execucao = { id: string; titulo: string; markdown: string; criadoEm: string };
type Estado = {
  ok: boolean;
  error?: string;
  cfg: Cfg;
  pronto: { twenty: boolean; smtp: boolean; token: boolean; secret: boolean; cron: boolean };
  remetente: Remetente;
  enviadosHoje?: number;
  fila?: Array<{ id: string; tipo: "primeiro" | "followup" }>;
  leads?: Lead[];
  execucoes?: Execucao[];
};
type Checagem = {
  id: string;
  rotulo: string;
  estado: "ok" | "atencao" | "falta";
  detalhe: string;
  correcao?: { tipo: string; nome: string; valor: string };
};
type Dominio = {
  remetente: Remetente;
  dns: Checagem[];
  smtp: { ok: boolean; erro?: string };
  imap: { ok: boolean; erro?: string; enviados?: string };
};

const ABAS = [
  ["revisao", "Revisão"],
  ["leads", "Leads"],
  ["dominio", "Domínio"],
  ["rotina", "Rotina"],
  ["meta", "Meta"]
] as const;
type Aba = (typeof ABAS)[number][0];

const ERROS: Record<string, string> = {
  assunto_longo: `Assunto longo: até ${REGRAS_COPY.maxPalavrasAssunto} palavras / ${REGRAS_COPY.maxCharsAssunto} caracteres.`,
  assunto_com_exclamacao: "Assunto sem exclamação — e-mail interno não grita.",
  assunto_com_emoji: "Assunto sem emoji.",
  assunto_finge_resposta: "Não comece o assunto com Re:/Fwd: — engana o destinatário.",
  assunto_caixa_alta: "Assunto sem palavra em caixa alta.",
  link_no_assunto: "Assunto sem link.",
  mensagem_mais_de_100_palavras: "O 1º e-mail passou de 100 palavras.",
  mensagem_sem_pergunta: "O 1º e-mail precisa terminar numa pergunta (uma só).",
  mensagem_com_mais_de_uma_pergunta: "Uma pergunta só no 1º e-mail.",
  mensagem_pede_reuniao: "Sem pedido de reunião no 1º e-mail — troque por uma pergunta sobre o trabalho dela.",
  followup1_longo: `Follow-up 1 passou de ${REGRAS_COPY.maxPalavrasFollowup} palavras.`,
  followup2_longo: `Follow-up 2 passou de ${REGRAS_COPY.maxPalavrasFollowup} palavras.`,
  followup3_longo: `Follow-up 3 passou de ${REGRAS_COPY.maxPalavrasFollowup} palavras.`,
  followup1_com_mais_de_uma_pergunta: "Follow-up 1 com mais de uma pergunta.",
  followup2_com_mais_de_uma_pergunta: "Follow-up 2 com mais de uma pergunta.",
  followup3_com_mais_de_uma_pergunta: "Follow-up 3 com mais de uma pergunta.",
  followups_com_buraco: "Follow-up vazio no meio da sequência — o seguinte nunca sairia.",
  termo_proibido: "Texto com expressão proibida (promessa de resultado, caso clínico…).",
  ja_enviado: "Este e-mail já saiu; o texto enviado não muda.",
  texto_vazio: "Assunto e mensagem são obrigatórios.",
  twenty_failed: "O CRM não respondeu. Tente de novo.",
  twenty_unconfigured: "TWENTY_API_KEY não está no ambiente.",
  envio_falhou: "O envio de teste falhou.",
  unauthorized: "Sessão expirada — recarregue a página."
};
const erro = (code?: string) => (code ? (ERROS[code] ?? code) : "Erro desconhecido.");

const dataCurta = (iso: string | null) =>
  iso
    ? new Date(iso).toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      })
    : "—";

async function api<T>(url: string, init?: RequestInit): Promise<T & { ok: boolean; error?: string }> {
  const res = await fetch(url, {
    ...init,
    headers: { "Content-Type": "application/json", ...(init?.headers ?? {}) },
    cache: "no-store"
  });
  try {
    return await res.json();
  } catch {
    return { ok: false, error: `http_${res.status}` } as T & { ok: boolean; error?: string };
  }
}

export function PainelCampanhas() {
  const [estado, setEstado] = useState<Estado | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [aba, setAba] = useState<Aba>("revisao");
  const [aviso, setAviso] = useState("");
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);

  const carregar = useCallback(async () => {
    setCarregando(true);
    const r = await api<Estado>("/painel/api/estado");
    setEstado(r as Estado);
    setCarregando(false);
  }, []);

  useEffect(() => {
    carregar();
  }, [carregar]);

  const leads = useMemo(() => estado?.leads ?? [], [estado]);
  const metricas = useMemo(() => {
    const contatados = leads.filter((l) => l.etapa > 0 || l.enviadoEm).length;
    const respostas = leads.filter((l) => l.status === "RESPONDEU").length;
    return {
      fila: leads.filter((l) => l.status === "REVISAR" || l.status === "PRONTO").length,
      revisar: leads.filter((l) => l.status === "REVISAR").length,
      sequencia: leads.filter((l) => l.status === "ENVIADO" || l.status === "FOLLOWUP_ENVIADO").length,
      contatados,
      respostas,
      taxa: contatados ? Math.round((respostas / contatados) * 100) : 0,
      bounces: leads.filter((l) => l.status === "BOUNCE").length,
      descadastros: leads.filter((l) => l.status === "DESCADASTRADO").length
    };
  }, [leads]);

  async function alternarPausa() {
    if (!estado) return;
    const pausar = !estado.cfg.pausado;
    const r = await api("/painel/api/pausa", { method: "POST", body: JSON.stringify({ pausar }) });
    setAviso(r.ok ? (pausar ? "Envios pausados. Nada sai até você retomar." : "Envios retomados.") : erro(r.error));
    carregar();
  }

  function teclaAba(e: React.KeyboardEvent, i: number) {
    let n = i;
    if (e.key === "ArrowRight") n = (i + 1) % ABAS.length;
    else if (e.key === "ArrowLeft") n = (i - 1 + ABAS.length) % ABAS.length;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = ABAS.length - 1;
    else return;
    e.preventDefault();
    setAba(ABAS[n][0]);
    tabsRef.current[n]?.focus();
  }

  const cfg = estado?.cfg;
  const pausaEnv = cfg?.pausado && !cfg.pausaPeloPainel;

  return (
    <div className="painel-shell">
      <header className="painel-top">
        <div>
          <p className="painel-kicker">— Comercial · prospecção</p>
          <h1 className="painel-title">Campanhas, com intenção.</h1>
        </div>
        <div className="painel-top__end">
          {cfg && (
            <span className={`painel-pill${cfg.pausado ? " painel-pill--red" : ""}`}>
              {cfg.pausado ? "Pausado" : cfg.inicio ? `Modo ${cfg.modo === "automatico" ? "automático" : "revisão"}` : "Ensaio · sem início"}
            </span>
          )}
          {cfg && (
            <button
              type="button"
              className="painel-btn painel-btn--ghost"
              onClick={alternarPausa}
              disabled={Boolean(pausaEnv)}
              title={pausaEnv ? "Pausado por PROSPECCAO_PAUSADO no ambiente" : undefined}
            >
              {cfg.pausado ? "Retomar envios" : "Pausar envios"}
            </button>
          )}
          <InstThemeToggle />
        </div>
      </header>

      <p className="painel-status" role="status">
        {aviso}
      </p>

      {estado && !estado.ok && (
        <div className="painel-alert" role="alert">
          <strong>O painel não conseguiu ler o CRM.</strong> {erro(estado.error)} Configure as variáveis listadas em
          docs/prospeccao.md.
        </div>
      )}

      <section className="painel-metrics" aria-label="Indicadores">
        <Metric rotulo="Enviados hoje" valor={`${estado?.enviadosHoje ?? 0} / ${cfg?.limiteHoje ?? 0}`} sub={`amanhã: até ${cfg?.limiteAmanha ?? 0}`} />
        <Metric rotulo="Na fila" valor={String(metricas.fila)} sub={`${metricas.revisar} aguardando revisão`} />
        <Metric rotulo="Em sequência" valor={String(metricas.sequencia)} sub={`${metricas.contatados} contatados no total`} />
        <Metric rotulo="Respostas" valor={String(metricas.respostas)} sub={`${metricas.taxa}% de quem recebeu`} destaque />
        <Metric rotulo="Bounce · saída" valor={`${metricas.bounces} · ${metricas.descadastros}`} sub="bounces · descadastros" />
      </section>

      <div className="painel-tabs">
        <div className="painel-tabs__list" role="tablist" aria-label="Áreas do painel">
        {ABAS.map(([id, rotulo], i) => (
          <button
            key={id}
            ref={(el) => {
              tabsRef.current[i] = el;
            }}
            role="tab"
            id={`tab-${id}`}
            aria-selected={aba === id}
            aria-controls={`painel-${id}`}
            tabIndex={aba === id ? 0 : -1}
            className="painel-tab"
            onClick={() => setAba(id)}
            onKeyDown={(e) => teclaAba(e, i)}
          >
            {rotulo}
            {id === "revisao" && metricas.revisar > 0 && <span className="painel-tab__count">{metricas.revisar}</span>}
          </button>
        ))}
        </div>
        <button type="button" className="painel-link painel-tabs__reload" onClick={carregar} disabled={carregando}>
          {carregando ? "Carregando…" : "Atualizar"}
        </button>
      </div>

      <div role="tabpanel" id={`painel-${aba}`} aria-labelledby={`tab-${aba}`} className="painel-panel">
        {aba === "revisao" && <Revisao leads={leads} fila={estado?.fila ?? []} onMudou={carregar} setAviso={setAviso} remetente={estado?.remetente} />}
        {aba === "leads" && <TabelaLeads leads={leads} />}
        {aba === "dominio" && <DominioView />}
        {aba === "rotina" && <RotinaView estado={estado} onMudou={carregar} setAviso={setAviso} />}
        {aba === "meta" && <Meta />}
      </div>

      <footer className="painel-footer">
        Made by Felipe® · Painel comercial · dados no Twenty · nenhum pixel de rastreio nos e-mails
      </footer>
    </div>
  );
}

function Metric({ rotulo, valor, sub, destaque }: { rotulo: string; valor: string; sub: string; destaque?: boolean }) {
  return (
    <div className={`painel-metric${destaque ? " painel-metric--red" : ""}`}>
      <span className="painel-metric__label">{rotulo}</span>
      <strong className="painel-metric__value">{valor}</strong>
      <span className="painel-metric__sub">{sub}</span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Revisão                                                                    */
/* -------------------------------------------------------------------------- */

function Revisao({
  leads,
  fila,
  onMudou,
  setAviso,
  remetente
}: {
  leads: Lead[];
  fila: Array<{ id: string; tipo: string }>;
  onMudou: () => void;
  setAviso: (s: string) => void;
  remetente?: Remetente;
}) {
  const [filtro, setFiltro] = useState<"REVISAR" | "PRONTO" | "todos">("REVISAR");
  const [busca, setBusca] = useState("");
  const lista = useMemo(() => {
    const t = busca.trim().toLowerCase();
    return leads
      .filter((l) => (filtro === "todos" ? l.status === "REVISAR" || l.status === "PRONTO" : l.status === filtro))
      .filter((l) => !t || `${l.empresa} ${l.cidade} ${l.email} ${l.nome}`.toLowerCase().includes(t));
  }, [leads, filtro, busca]);
  const [selId, setSelId] = useState<string | null>(null);
  const sel = lista.find((l) => l.id === selId) ?? lista[0] ?? null;
  const posFila = sel ? fila.findIndex((f) => f.id === sel.id) : -1;

  return (
    <div className="painel-review">
      <div className="painel-card painel-list">
        <div className="painel-list__tools">
          <label className="painel-sr" htmlFor="busca-leads">
            Buscar
          </label>
          <input
            id="busca-leads"
            className="painel-input"
            type="search"
            placeholder="Buscar clínica, cidade, e-mail…"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          <label className="painel-sr" htmlFor="filtro-status">
            Status
          </label>
          <select
            id="filtro-status"
            className="painel-input"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value as typeof filtro)}
          >
            <option value="REVISAR">Aguardando revisão</option>
            <option value="PRONTO">Aprovados</option>
            <option value="todos">Todos na fila</option>
          </select>
        </div>
        {lista.length === 0 ? (
          <p className="painel-empty">
            Nada aqui. A rotina noturna traz leads novos; eles aparecem em “Aguardando revisão”.
          </p>
        ) : (
          <ul className="painel-list__items">
            {lista.map((l) => (
              <li key={l.id}>
                <button
                  type="button"
                  className="painel-row"
                  aria-pressed={sel?.id === l.id}
                  onClick={() => setSelId(l.id)}
                >
                  <span className="painel-row__main">
                    <strong>{l.empresa || l.nome}</strong>
                    <span>{l.cidade || l.email}</span>
                  </span>
                  <span className={`painel-prio painel-prio--${l.prioridade ?? "C"}`}>
                    {l.prioridade ?? "C"}
                    {l.score != null ? ` · ${l.score}` : ""}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {sel ? (
        <Editor key={sel.id} lead={sel} posFila={posFila} onMudou={onMudou} setAviso={setAviso} remetente={remetente} />
      ) : (
        <div className="painel-card painel-empty">Selecione um contato.</div>
      )}
    </div>
  );
}

function Editor({
  lead,
  posFila,
  onMudou,
  setAviso,
  remetente
}: {
  lead: Lead;
  posFila: number;
  onMudou: () => void;
  setAviso: (s: string) => void;
  remetente?: Remetente;
}) {
  const [assunto, setAssunto] = useState(lead.assunto);
  const [mensagem, setMensagem] = useState(lead.mensagem);
  const [followups, setFollowups] = useState<string[]>([...lead.followups]);
  const [nota, setNota] = useState(lead.linkedinNota);
  const [testeEmail, setTesteEmail] = useState("");
  const [ocupado, setOcupado] = useState(false);
  const [falha, setFalha] = useState("");
  const editado =
    assunto !== lead.assunto || mensagem !== lead.mensagem || followups.some((f, i) => f !== lead.followups[i]);
  const regra = checarCopy({ assunto, mensagem, followups });

  async function acao(nome: "editar" | "aprovar" | "revisar" | "descartar") {
    setOcupado(true);
    setFalha("");
    const r = await api(`/painel/api/leads/${lead.id}`, {
      method: "PATCH",
      body: JSON.stringify({ acao: nome, assunto, mensagem, followups })
    });
    setOcupado(false);
    if (!r.ok) {
      setFalha(erro(r.error));
      return;
    }
    setAviso(
      {
        editar: "Texto salvo.",
        aprovar: "Aprovado — entra na fila do próximo lote.",
        revisar: "Devolvido para revisão.",
        descartar: "Descartado. Não recebe nada."
      }[nome]
    );
    onMudou();
  }

  async function teste(etapa: number) {
    setOcupado(true);
    setFalha("");
    const r = await api<{ para?: string; detalhe?: string }>("/painel/api/teste", {
      method: "POST",
      body: JSON.stringify({ id: lead.id, etapa, para: testeEmail || undefined })
    });
    setOcupado(false);
    if (r.ok) setAviso(`Teste enviado para ${r.para}. Confira se caiu na entrada ou no spam.`);
    else setFalha(`${erro(r.error)} ${r.detalhe ?? ""}`);
  }

  async function linkedin(status: LinkedinStatus) {
    const r = await api(`/painel/api/leads/${lead.id}`, {
      method: "PATCH",
      body: JSON.stringify({ acao: "linkedin", linkedinStatus: status, linkedinNota: nota })
    });
    if (r.ok) {
      setAviso("LinkedIn atualizado.");
      onMudou();
    } else setFalha(erro(r.error));
  }

  const palavras = contarPalavras(mensagem);
  const perguntas = (mensagem.match(/\?/g) ?? []).length;

  return (
    <article className="painel-card painel-editor" aria-label={`Mensagem para ${lead.empresa || lead.email}`}>
      <div className="painel-editor__head">
        <div>
          <p className="painel-kicker painel-kicker--tight">— {PROSP_STATUS_LABEL[lead.status]}</p>
          <h2 className="painel-h2">{lead.empresa || lead.nome}</h2>
          <p className="painel-muted">
            {lead.email} · {lead.cidade || "cidade não informada"}
            {posFila >= 0 ? ` · ${posFila + 1}º na fila` : ""}
          </p>
        </div>
      </div>

      <aside className="painel-evidence">
        <p className="painel-kicker painel-kicker--tight">— Por que ela</p>
        <p>{lead.evidencia}</p>
        {lead.hipotese && <p className="painel-muted">Hipótese: {lead.hipotese}</p>}
        {lead.limite && <p className="painel-muted">Não confirmado: {lead.limite}</p>}
        {lead.fonte && (
          <a className="inst-link" href={lead.fonte} target="_blank" rel="noopener noreferrer">
            Ver fonte pública
          </a>
        )}
      </aside>

      <div className="painel-field">
        <label className="painel-label" htmlFor="ed-assunto">
          Assunto
        </label>
        <input id="ed-assunto" className="painel-input" value={assunto} onChange={(e) => setAssunto(e.target.value)} />
      </div>

      <div className="painel-field">
        <label className="painel-label" htmlFor="ed-mensagem">
          1º e-mail
          <span className={`painel-count${palavras > REGRAS_COPY.maxPalavrasMensagem ? " painel-count--over" : ""}`}>
            {palavras}/{REGRAS_COPY.maxPalavrasMensagem} palavras · {perguntas} pergunta{perguntas === 1 ? "" : "s"}
          </span>
        </label>
        <textarea
          id="ed-mensagem"
          className="painel-input painel-textarea"
          rows={8}
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
      </div>

      {[0, 1, 2].map((i) => (
        <div className="painel-field" key={i}>
          <label className="painel-label" htmlFor={`ed-fu-${i}`}>
            Follow-up {i + 1} · +{CADENCIA.diasEntreEtapas[i]} dias úteis
            <span
              className={`painel-count${contarPalavras(followups[i] ?? "") > REGRAS_COPY.maxPalavrasFollowup ? " painel-count--over" : ""}`}
            >
              {contarPalavras(followups[i] ?? "")}/{REGRAS_COPY.maxPalavrasFollowup}
            </span>
          </label>
          <textarea
            id={`ed-fu-${i}`}
            className="painel-input painel-textarea painel-textarea--short"
            rows={3}
            value={followups[i] ?? ""}
            placeholder={i === 0 ? "Vazio = sem follow-up" : "Vazio = a sequência para aqui"}
            onChange={(e) => setFollowups((f) => f.map((v, j) => (j === i ? e.target.value : v)))}
          />
        </div>
      ))}

      <p className="painel-muted painel-footer-note">
        Rodapé automático em todo envio: assinatura, “Vi seu e-mail em {lead.fonte.replace(/^https?:\/\/(www\.)?/, "") || "…"}”
        e o link de descadastro. Sai de {remetente?.email || "—"}, só texto, sem rastreio.
      </p>

      {regra && (
        <p className="painel-rule" role="alert">
          {erro(regra)}
        </p>
      )}
      {falha && (
        <p className="painel-rule" role="alert">
          {falha}
        </p>
      )}

      <div className="painel-actions">
        {lead.status === "REVISAR" ? (
          <button type="button" className="painel-btn" disabled={ocupado || Boolean(regra)} onClick={() => acao("aprovar")}>
            Aprovar e pôr na fila
          </button>
        ) : (
          <button type="button" className="painel-btn painel-btn--ghost" disabled={ocupado} onClick={() => acao("revisar")}>
            Tirar da fila
          </button>
        )}
        <button
          type="button"
          className="painel-btn painel-btn--ghost"
          disabled={ocupado || !editado || Boolean(regra)}
          onClick={() => acao("editar")}
        >
          Salvar texto
        </button>
        <button type="button" className="painel-link" disabled={ocupado} onClick={() => acao("descartar")}>
          Descartar contato
        </button>
      </div>

      <details className="painel-details">
        <summary>Enviar teste para mim</summary>
        <div className="painel-field">
          <label className="painel-label" htmlFor="ed-teste">
            Para (vazio = {remetente?.email || "caixa de envio"})
          </label>
          <input
            id="ed-teste"
            className="painel-input"
            type="email"
            placeholder="seu-gmail@gmail.com"
            value={testeEmail}
            onChange={(e) => setTesteEmail(e.target.value)}
          />
        </div>
        <div className="painel-actions">
          <button type="button" className="painel-btn painel-btn--ghost" disabled={ocupado || editado} onClick={() => teste(0)}>
            Testar 1º e-mail
          </button>
          {followups[0] && (
            <button type="button" className="painel-link" disabled={ocupado || editado} onClick={() => teste(1)}>
              Testar follow-up 1
            </button>
          )}
        </div>
        {editado && <p className="painel-muted">Salve o texto antes de testar — o teste usa o que está no CRM.</p>}
      </details>

      <details className="painel-details">
        <summary>LinkedIn {lead.linkedinStatus ? `· ${lead.linkedinStatus.toLowerCase()}` : ""}</summary>
        {lead.linkedin ? (
          <p>
            <a className="inst-link" href={lead.linkedin} target="_blank" rel="noopener noreferrer">
              Abrir perfil
            </a>{" "}
            <span className="painel-muted">— o convite é seu, enviado à mão (automação viola os termos do LinkedIn).</span>
          </p>
        ) : (
          <p className="painel-muted">A pesquisa não achou perfil.</p>
        )}
        <div className="painel-field">
          <label className="painel-label" htmlFor="ed-nota">
            Nota do convite <span className="painel-count">{nota.length}/300</span>
          </label>
          <textarea
            id="ed-nota"
            className="painel-input painel-textarea painel-textarea--short"
            rows={3}
            maxLength={300}
            value={nota}
            onChange={(e) => setNota(e.target.value)}
          />
        </div>
        <div className="painel-actions">
          {LINKEDIN_STATUS.map((s) => (
            <button
              key={s}
              type="button"
              className={lead.linkedinStatus === s ? "painel-btn" : "painel-btn painel-btn--ghost"}
              aria-pressed={lead.linkedinStatus === s}
              onClick={() => linkedin(s)}
            >
              {{ SUGERIDO: "Sugerido", ENVIADO: "Convite enviado", CONECTADO: "Conectado", SEM_PERFIL: "Sem perfil" }[s]}
            </button>
          ))}
        </div>
      </details>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/* Leads                                                                      */
/* -------------------------------------------------------------------------- */

function TabelaLeads({ leads }: { leads: Lead[] }) {
  const [status, setStatus] = useState<ProspStatus | "todos">("todos");
  const lista = status === "todos" ? leads : leads.filter((l) => l.status === status);
  return (
    <div className="painel-card">
      <div className="painel-list__tools">
        <label className="painel-label" htmlFor="filtro-tabela">
          Status
        </label>
        <select
          id="filtro-tabela"
          className="painel-input"
          value={status}
          onChange={(e) => setStatus(e.target.value as ProspStatus | "todos")}
        >
          <option value="todos">Todos ({leads.length})</option>
          {(Object.keys(PROSP_STATUS_LABEL) as ProspStatus[]).map((s) => (
            <option key={s} value={s}>
              {PROSP_STATUS_LABEL[s]} ({leads.filter((l) => l.status === s).length})
            </option>
          ))}
        </select>
      </div>
      <div className="painel-table-wrap" tabIndex={0} role="region" aria-label="Tabela de leads; role para os lados">
        <table className="painel-table">
          <caption className="painel-sr">Leads da prospecção</caption>
          <thead>
            <tr>
              <th scope="col">Contato</th>
              <th scope="col">Status</th>
              <th scope="col">Etapa</th>
              <th scope="col">1º envio</th>
              <th scope="col">Último</th>
              <th scope="col">Respondeu</th>
              <th scope="col">Fonte</th>
            </tr>
          </thead>
          <tbody>
            {lista.map((l) => (
              <tr key={l.id}>
                <td>
                  <strong>{l.empresa || l.nome}</strong>
                  <small>{l.email}</small>
                </td>
                <td>
                  {PROSP_STATUS_LABEL[l.status]}
                  {l.erro && <small>{l.erro.slice(0, 80)}</small>}
                </td>
                <td>{l.etapa}/4</td>
                <td>{dataCurta(l.enviadoEm)}</td>
                <td>{dataCurta(l.followupEm)}</td>
                <td>{dataCurta(l.respondeuEm)}</td>
                <td>
                  {l.fonte ? (
                    <a className="inst-link" href={l.fonte} target="_blank" rel="noopener noreferrer">
                      fonte
                    </a>
                  ) : (
                    "—"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Domínio                                                                    */
/* -------------------------------------------------------------------------- */

const ESTADO_LABEL = { ok: "OK", atencao: "Atenção", falta: "Falta" } as const;

function DominioView() {
  const [d, setD] = useState<Dominio | null>(null);
  const [carregando, setCarregando] = useState(false);
  const [copiado, setCopiado] = useState("");

  const checar = useCallback(async () => {
    setCarregando(true);
    setD((await api<Dominio>("/painel/api/dominio")) as Dominio);
    setCarregando(false);
  }, []);
  useEffect(() => {
    checar();
  }, [checar]);

  async function copiar(texto: string, id: string) {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(id);
    } catch {
      setCopiado("");
    }
  }

  return (
    <div className="painel-grid2">
      <div className="painel-card painel-pad">
        <div className="painel-head-row">
          <h2 className="painel-h2">Domínio de envio</h2>
          <button type="button" className="painel-btn painel-btn--ghost" onClick={checar} disabled={carregando}>
            {carregando ? "Checando…" : "Checar de novo"}
          </button>
        </div>
        <p className="painel-muted">
          {d?.remetente?.email ? (
            <>
              Envia como <strong>{d.remetente.nome}</strong> &lt;{d.remetente.email}&gt; via {d.remetente.smtpHost}.
            </>
          ) : (
            "Nenhuma caixa configurada (PROSPECCAO_SMTP_USER ou SMTP_USER)."
          )}
        </p>
        <ul className="painel-checks">
          {(d?.dns ?? []).map((c) => (
            <li key={c.id} className={`painel-check painel-check--${c.estado}`}>
              <span className="painel-check__badge">{ESTADO_LABEL[c.estado]}</span>
              <div>
                <strong>{c.rotulo}</strong>
                <p>{c.detalhe}</p>
                {c.correcao && c.estado !== "ok" && (
                  <div className="painel-record">
                    <code>
                      {c.correcao.tipo} · {c.correcao.nome} · {c.correcao.valor}
                    </code>
                    <button type="button" className="painel-link" onClick={() => copiar(c.correcao!.valor, c.id)}>
                      {copiado === c.id ? "Copiado" : "Copiar valor"}
                    </button>
                  </div>
                )}
              </div>
            </li>
          ))}
          {d && (
            <>
              <li className={`painel-check painel-check--${d.smtp.ok ? "ok" : "falta"}`}>
                <span className="painel-check__badge">{d.smtp.ok ? "OK" : "Falta"}</span>
                <div>
                  <strong>Login SMTP (envio)</strong>
                  <p>{d.smtp.ok ? "Autenticou." : d.smtp.erro}</p>
                </div>
              </li>
              <li className={`painel-check painel-check--${d.imap.ok ? "ok" : "falta"}`}>
                <span className="painel-check__badge">{d.imap.ok ? "OK" : "Falta"}</span>
                <div>
                  <strong>Login IMAP (respostas e Enviados)</strong>
                  <p>{d.imap.ok ? `Autenticou. Cópias vão para “${d.imap.enviados}”.` : d.imap.erro}</p>
                </div>
              </li>
            </>
          )}
        </ul>
      </div>

      <div className="painel-card painel-pad">
        <h2 className="painel-h2">Como conectar um domínio</h2>
        <ol className="painel-steps">
          <li>
            <strong>Use uma caixa só para prospecção.</strong> Ex.: felipe@madebyfelipe.agency (o domínio já tem e-mail
            Hostinger, SPF, DKIM e DMARC com relatório). E-mail frio que leva denúncia de spam derruba a reputação do
            domínio inteiro — e o madebyfelipe.com.br entrega webinar, imersão e e-book.
          </li>
          <li>
            Crie a caixa no hPanel e preencha <code>PROSPECCAO_SMTP_USER</code> e <code>PROSPECCAO_SMTP_PASSWORD</code> na
            Vercel. Sem elas, a prospecção usa a caixa do site.
          </li>
          <li>Corrija o que estiver em “Falta” ou “Atenção” ao lado, no DNS da Hostinger. Propaga em minutos a horas.</li>
          <li>
            Mande um teste para um Gmail pessoal (aba Revisão → Enviar teste) e confira: caiu na entrada? Em “Mostrar
            original”, SPF, DKIM e DMARC devem dizer PASS.
          </li>
          <li>
            Defina <code>PROSPECCAO_INICIO</code> (data do 1º envio). O limite começa em {CADENCIA.limiteInicial}/dia e sobe{" "}
            {CADENCIA.incrementoPorDiaUtil} por dia útil até {CADENCIA.teto} — é o aquecimento.
          </li>
        </ol>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Rotina                                                                     */
/* -------------------------------------------------------------------------- */

function RotinaView({ estado, onMudou, setAviso }: { estado: Estado | null; onMudou: () => void; setAviso: (s: string) => void }) {
  const [previa, setPrevia] = useState<Array<{ email: string; tipo: string; assunto: string }> | null>(null);
  const [avisos, setAvisos] = useState<string[]>([]);
  const [ocupado, setOcupado] = useState(false);
  const cfg = estado?.cfg;

  async function rodar(dry: boolean) {
    if (!dry && !window.confirm("Enviar agora o que resta do limite de hoje?")) return;
    setOcupado(true);
    const r = await api<{ previa?: typeof previa; enviados?: unknown[]; falhas?: unknown[]; avisos?: string[]; motivo?: string }>(
      "/painel/api/disparo",
      { method: "POST", body: JSON.stringify({ dry }) }
    );
    setOcupado(false);
    setAvisos(r.avisos ?? (r.motivo ? [r.motivo] : []));
    if (dry) setPrevia(r.previa ?? []);
    else {
      setAviso(r.ok ? `${r.enviados?.length ?? 0} enviados, ${r.falhas?.length ?? 0} falhas.` : `Não enviou: ${r.motivo ?? r.error}`);
      onMudou();
    }
  }

  const pronto = estado?.pronto;
  const itens: Array<[string, boolean | undefined]> = [
    ["TWENTY_API_KEY (CRM)", pronto?.twenty],
    ["Caixa SMTP/IMAP", pronto?.smtp],
    ["PROSPECCAO_TOKEN (rotina)", pronto?.token],
    ["PROSPECCAO_SECRET (descadastro)", pronto?.secret],
    ["CRON_SECRET (Vercel Cron)", pronto?.cron],
    ["PROSPECCAO_INICIO (1º dia de envio)", Boolean(cfg?.inicio)]
  ];

  return (
    <div className="painel-grid2">
      <div className="painel-card painel-pad">
        <h2 className="painel-h2">Como roda</h2>
        <ol className="painel-steps">
          <li>
            <strong>2h56, seg–sex — rotina noturna.</strong> Uma sessão do Claude pesquisa psicólogas que atendem pais de
            crianças autistas e neurodivergentes, lê o site/LinkedIn de cada uma, escreve o e-mail e até 3 follow-ups e
            grava aqui como “aguardando revisão”. Roteiro: docs/prospeccao-rotina.md.
          </li>
          <li>
            <strong>Você revisa</strong> até as 9h.{" "}
            {cfg?.modo === "automatico"
              ? `Modo automático: o que você não vetar sai sozinho ${CADENCIA.janelaVetoHoras}h depois de chegar.`
              : "Modo revisão: só sai o que você aprovar."}
          </li>
          <li>
            <strong>9h, 11h e 14h — disparo.</strong> Cada lote lê a caixa (resposta ou bounce encerram a sequência), manda
            follow-ups vencidos e depois os novos, com 14–26 s entre um e outro.
          </li>
        </ol>
        <h3 className="painel-h3">Configuração</h3>
        <ul className="painel-config">
          {itens.map(([rotulo, ok]) => (
            <li key={rotulo}>
              <span className={`painel-check__badge painel-check__badge--${ok ? "ok" : "falta"}`}>{ok ? "OK" : "Falta"}</span>
              {rotulo}
            </li>
          ))}
        </ul>
        <div className="painel-actions">
          <button type="button" className="painel-btn painel-btn--ghost" disabled={ocupado} onClick={() => rodar(true)}>
            Ver próxima fila
          </button>
          <button
            type="button"
            className="painel-btn"
            disabled={ocupado || !cfg?.inicio || cfg?.pausado}
            onClick={() => rodar(false)}
          >
            Enviar agora
          </button>
        </div>
        {avisos.length > 0 && (
          <ul className="painel-muted">
            {avisos.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        )}
        {previa && (
          <ol className="painel-previa">
            {previa.length === 0 && <li>Fila vazia para este momento.</li>}
            {previa.map((p) => (
              <li key={`${p.email}-${p.tipo}`}>
                <strong>{p.tipo === "followup" ? "Follow-up" : "1º e-mail"}</strong> · {p.email} — {p.assunto}
              </li>
            ))}
          </ol>
        )}
      </div>

      <div className="painel-card painel-pad">
        <h2 className="painel-h2">Execuções</h2>
        {(estado?.execucoes ?? []).length === 0 ? (
          <p className="painel-muted">Nenhuma execução registrada ainda.</p>
        ) : (
          <ul className="painel-runs">
            {estado!.execucoes!.map((e) => (
              <li key={e.id}>
                <details>
                  <summary>
                    <strong>{e.titulo}</strong> <span className="painel-muted">{dataCurta(e.criadoEm)}</span>
                  </summary>
                  <pre className="painel-pre">{e.markdown}</pre>
                </details>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Meta (simulador do protótipo, mantido)                                     */
/* -------------------------------------------------------------------------- */

const money = (n: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(n);

function Meta() {
  const [preco, setPreco] = useState(5000);
  const [horas, setHoras] = useState(40);
  const [manter, setManter] = useState(true);
  const META = 12000;
  const ATUAL = 4200;
  const base = manter ? ATUAL : 0;
  const n = Math.ceil((META - base) / preco);
  return (
    <div className="painel-grid2">
      <div className="painel-card painel-pad">
        <h2 className="painel-h2">R$ 12 mil por mês</h2>
        <p className="painel-muted">Faturamento atual e meta informados por você. Horas por projeto são hipótese.</p>
        <div className="painel-field">
          <label className="painel-label" htmlFor="meta-preco">
            Preço por projeto · {money(preco)}
          </label>
          <input id="meta-preco" type="range" min={2000} max={5000} step={250} value={preco} onChange={(e) => setPreco(Number(e.target.value))} />
        </div>
        <div className="painel-field">
          <label className="painel-label" htmlFor="meta-horas">
            Horas por projeto · {horas} h
          </label>
          <input id="meta-horas" type="range" min={16} max={80} step={2} value={horas} onChange={(e) => setHoras(Number(e.target.value))} />
        </div>
        <label className="painel-check-label">
          <input type="checkbox" checked={manter} onChange={(e) => setManter(e.target.checked)} />
          Contar os {money(ATUAL)} atuais como receita que continua
        </label>
      </div>
      <div className="painel-card painel-pad painel-dark">
        <p className="painel-kicker painel-kicker--tight">— Para chegar lá</p>
        <p className="painel-big">
          {n} <small>{manter ? "novos projetos / mês" : "projetos / mês"}</small>
        </p>
        <p>
          {money(base + n * preco)} / mês brutos · {n * horas} h de entrega · ~{(n * 1.5).toLocaleString("pt-BR")} projetos em
          paralelo (45 dias cada).
        </p>
        <p className="painel-muted">
          Com a cadência atual (até {CADENCIA.teto} e-mails/dia), {n} projeto{n === 1 ? "" : "s"} por mês pede{" "}
          {n} conversa{n === 1 ? "" : "s"} fechada{n === 1 ? "" : "s"} — acompanhe a taxa de resposta na aba Leads.
        </p>
      </div>
    </div>
  );
}
