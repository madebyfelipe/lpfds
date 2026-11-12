"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { InstThemeToggle } from "@/components/institucional/InstThemeToggle";
import {
  CONFIG_PADRAO,
  OBJECOES,
  PROMPT_ROTINA,
  RESULTADOS,
  STATUS,
  finalizado,
  metricas,
  ordenarFila,
  roteiro,
  type Config,
  type Estado,
  type Lead,
  type Resultado,
} from "@/lib/cold-call/model";

const API = "/painel/api/cold-call";
const data = (v: string | null) =>
  v
    ? new Date(v).toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
        day: "2-digit",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "Sem horário";
const telefone = (s: string) =>
  s.replace(/^55(\d{2})(\d{4,5})(\d{4})$/, "+55 ($1) $2-$3");
const relogio = (s: number) =>
  `${Math.floor(s / 60)
    .toString()
    .padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;
const uid = () => crypto.randomUUID();
async function api(body?: unknown) {
  const r = await fetch(API, {
    method: body ? "POST" : "GET",
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined,
    cache: "no-store",
  });
  let v;
  try {
    v = await r.json();
  } catch {
    throw new Error(
      "Sessão indisponível. Recarregue e entre novamente no painel.",
    );
  }
  if (!r.ok || !v.ok) throw new Error(v.error || "Não foi possível concluir.");
  return v;
}
function salvarArquivo(nome: string, conteudo: string, tipo: string) {
  const u = URL.createObjectURL(new Blob([conteudo], { type: tipo }));
  const a = document.createElement("a");
  a.href = u;
  a.download = nome;
  a.click();
  setTimeout(() => URL.revokeObjectURL(u), 1000);
}
function exportar(leads: Lead[]) {
  const cell = (v: string) =>
    `"${(/^[=+@\-\t\r]/.test(v) ? "'" : "") + v.replace(/"/g, '""')}"`;
  const rows = [
    [
      "Empresa",
      "Contato",
      "Telefone",
      "Cidade",
      "Status",
      "Responsável",
      "Próximo passo",
      "Retorno",
      "Tentativas",
    ],
    ...leads.map((l) => [
      l.empresa,
      l.contato,
      l.telefone,
      l.cidade,
      STATUS[l.status],
      l.responsavel,
      l.proximaAcao,
      l.retornoEm || "",
      String(l.historico.length),
    ]),
  ];
  salvarArquivo(
    "cold-call.csv",
    "\ufeff" + rows.map((r) => r.map(cell).join(";")).join("\r\n"),
    "text/csv;charset=utf-8",
  );
}
function calendario(l: Lead) {
  if (!l.retornoEm) return;
  const esc = (s: string) =>
    s.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/[,;]/g, "\\$&");
  const iso = (d: Date) =>
    d
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}/, "");
  const inicio = new Date(l.retornoEm);
  salvarArquivo(
    `retorno-${l.id}.ics`,
    [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Made by Felipe//Cold Call//PT-BR",
      "BEGIN:VEVENT",
      `UID:${l.id}-${inicio.getTime()}@madebyfelipe.com.br`,
      `DTSTAMP:${iso(new Date())}`,
      `DTSTART:${iso(inicio)}`,
      `DTEND:${iso(new Date(inicio.getTime() + 20 * 60000))}`,
      `SUMMARY:${esc(`${l.status === "REUNIAO" ? "Reunião" : "Retorno"} · ${l.empresa}`)}`,
      `DESCRIPTION:${esc(`${l.proximaAcao}\n${telefone(l.telefone)}\nResponsável: ${l.responsavel}`)}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n"),
    "text/calendar;charset=utf-8",
  );
}
function Icon({ tipo = "arrow" }: { tipo?: "arrow" | "phone" | "search" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      {tipo === "phone" ? (
        <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2a14 14 0 0 1-7-7l2-2-2-5Z" />
      ) : tipo === "search" ? (
        <>
          <circle cx="10" cy="10" r="6" />
          <path d="m15 15 6 6" />
        </>
      ) : (
        <path d="M5 19 19 5M5 5h14v14" />
      )}
    </svg>
  );
}
const Botao = ({
  children,
  onClick,
  disabled = false,
  ghost = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  ghost?: boolean;
}) => (
  <button
    type="button"
    className={`cc-btn${ghost ? " cc-btn--ghost" : ""}`}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export function ColdCallPanel() {
  const [estado, setEstado] = useState<Estado | null>(null),
    [erro, setErro] = useState(""),
    [aviso, setAviso] = useState(""),
    [carregando, setCarregando] = useState(true),
    [ocupado, setOcupado] = useState(false);
  const [aba, setAba] = useState("mesa"),
    [selecionado, setSelecionado] = useState(""),
    [busca, setBusca] = useState(""),
    [filtro, setFiltro] = useState("fila"),
    [owner, setOwner] = useState("todos"),
    [sdr, setSdr] = useState("Leonardo"),
    [emLigacao, setEmLigacao] = useState(false);
  const modal = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const n = localStorage.getItem("cold-call-sdr");
    if (n) setSdr(n);
    const ativo = sessionStorage.getItem("cc-active");
    if (ativo) setSelecionado(ativo);
  }, []);
  const carregar = useCallback(async () => {
    setCarregando(true);
    try {
      setEstado(await api());
      setErro("");
    } catch (e) {
      setErro((e as Error).message);
    } finally {
      setCarregando(false);
    }
  }, []);
  useEffect(() => {
    void carregar();
  }, [carregar]);
  async function acao(body: unknown, msg: string) {
    if (ocupado) return false;
    setOcupado(true);
    setErro("");
    try {
      const r = await api(body);
      setAviso(
        r.resultado?.duplicado
          ? "Este telefone já está na base. O histórico foi preservado."
          : msg,
      );
      await carregar();
      return true;
    } catch (e) {
      setErro((e as Error).message);
      return false;
    } finally {
      setOcupado(false);
    }
  }
  const leads = estado?.leads || [];
  const cfg = estado?.config || CONFIG_PADRAO;
  const conectado = Boolean(estado?.conectado);
  const m = metricas(leads);
  const lista = useMemo(
    () =>
      ordenarFila(
        leads.filter((l) => {
          const match = `${l.empresa} ${l.contato} ${l.cidade} ${l.telefone}`
            .toLocaleLowerCase("pt-BR")
            .includes(busca.toLocaleLowerCase("pt-BR"));
          return (
            match &&
            (owner === "todos" || l.responsavel === owner) &&
            (filtro === "todos" ||
              (filtro === "fila" && !finalizado(l)) ||
              (filtro === "retornos" &&
                !finalizado(l) &&
                !!l.retornoEm &&
                new Date(l.retornoEm) <= new Date()) ||
              l.status === filtro)
          );
        }),
      ),
    [leads, busca, filtro, owner],
  );
  const sel = leads.find((l) => l.id === selecionado) || lista[0];
  const agenda = leads
    .filter(
      (l) =>
        l.retornoEm &&
        !["NAO_CONTATAR", "SEM_INTERESSE", "NUMERO_INVALIDO"].includes(
          l.status,
        ),
    )
    .sort((a, b) => a.retornoEm!.localeCompare(b.retornoEm!));
  function abrir(l: Lead) {
    if (emLigacao) return;
    setSelecionado(l.id);
    setAba("mesa");
  }
  async function copiar(s: string) {
    try {
      await navigator.clipboard.writeText(s);
      setAviso("Copiado para a área de transferência.");
    } catch {
      setErro(
        "O navegador bloqueou a cópia. Selecione e copie o texto manualmente.",
      );
    }
  }
  return (
    <div className="cc-shell">
      <aside className="cc-sidebar">
        <a className="cc-brand" href="/painel/campanhas">
          Made by Felipe<sup>®</sup>
        </a>
        <p className="cc-eyebrow">COMERCIAL / WORKSPACE</p>
        <nav aria-label="Painéis comerciais">
          <a href="/painel/campanhas">
            01 <span>Campanhas</span>
          </a>
          <a href="/painel/cold-call" aria-current="page">
            02 <span>Cold call</span>
            <Icon tipo="phone" />
          </a>
          <a href="/painel/identidade">
            03 <span>Identidade</span>
          </a>
        </nav>
        <div className="cc-sidebar-bottom">
          <span>
            CONSTRUA A CONVERSA.
            <br />
            DEPOIS, A OPORTUNIDADE.
          </span>
          <div className="cc-theme">
            <InstThemeToggle />
            <span>Made by Felipe · SDR</span>
          </div>
        </div>
      </aside>
      <main className="cc-main">
        <header className="cc-top">
          <div>
            <p className="cc-eyebrow">— CENTRAL SDR / COLD CALL</p>
            <h1>
              Boas conversas.
              <br />
              <em>Próximos passos.</em>
            </h1>
            <p>Contexto antes da ligação. Intenção em cada contato.</p>
          </div>
          <div className="cc-top-actions">
            <label className="cc-label">
              Quem está ligando?
              <input
                value={sdr}
                maxLength={80}
                onChange={(e) => {
                  setSdr(e.target.value);
                  localStorage.setItem("cold-call-sdr", e.target.value);
                }}
              />
            </label>
            <Botao
              onClick={() => modal.current?.showModal()}
              disabled={!conectado || ocupado}
            >
              + Nova empresa
            </Botao>
          </div>
        </header>
        <div className="cc-connection">
          <span className={`cc-dot${conectado ? " cc-dot--connected" : ""}`} />
          {carregando
            ? "Atualizando operação…"
            : conectado
              ? "CRM conectado · histórico salvo no Twenty"
              : "CRM aguardando conexão"}
          <span className="cc-clock">Horários em Brasília</span>
          <button
            type="button"
            onClick={carregar}
            disabled={carregando || emLigacao}
            className="cc-text-btn"
          >
            Atualizar ↻
          </button>
        </div>
        {erro && (
          <div className="cc-alert" role="alert">
            {erro}
          </div>
        )}
        {estado && !conectado && (
          <div className="cc-alert">
            Conecte o Twenty com <code>TWENTY_API_KEY</code> no ambiente do site
            para salvar empresas e ligações. A rotina usa{" "}
            <code>PROSPECCAO_TOKEN</code>, o mesmo das campanhas. Nenhuma
            empresa foi importada ainda.
          </div>
        )}
        <div className="cc-announcement" role="status" aria-live="polite">
          {aviso}
        </div>
        <section className="cc-metrics" aria-label="Resultados de hoje">
          <div className="cc-metric cc-metric--feature">
            <span>LIGAÇÕES HOJE</span>
            <strong>
              {m.ligacoes}
              <small> / {cfg.metaDiaria}</small>
            </strong>
            <div className="cc-progress">
              <span
                style={{
                  width: `${Math.min((m.ligacoes / cfg.metaDiaria) * 100, 100)}%`,
                }}
              />
            </div>
            <p>Seu ritmo, uma conversa por vez.</p>
          </div>
          <div className="cc-metric">
            <span>CONTATOS ATENDIDOS</span>
            <strong>{m.conversas.toString().padStart(2, "0")}</strong>
            <p>{m.taxa}% das tentativas de hoje</p>
          </div>
          <div className="cc-metric">
            <span>REUNIÕES MARCADAS</span>
            <strong>{m.reunioes.toString().padStart(2, "0")}</strong>
            <p>Próximos passos com data e objetivo</p>
          </div>
          <div className="cc-metric">
            <span>RETORNOS VENCIDOS</span>
            <strong>{m.pendentes.toString().padStart(2, "0")}</strong>
            <p>Prioridade na próxima rodada</p>
          </div>
        </section>
        <nav className="cc-tabs" aria-label="Seções de cold call">
          {[
            ["mesa", "Mesa de ligação"],
            ["agenda", "Agenda"],
            ["resultados", "Resultados"],
            ["rotina", "Rotina Codex"],
          ].map(([id, t]) => (
            <button
              key={id}
              type="button"
              aria-pressed={aba === id}
              disabled={emLigacao && aba !== id}
              onClick={() => setAba(id)}
            >
              {t}
              {id === "agenda" && agenda.length > 0 && (
                <span>{agenda.length}</span>
              )}
            </button>
          ))}
          <span className="cc-tab-caption">
            PESQUISAR → CONVERSAR → AVANÇAR
          </span>
        </nav>
        {aba === "mesa" && (
          <section className="cc-workspace" aria-label="Mesa de ligação">
            <div className="cc-queue">
              <div className="cc-queue-title">
                <h2>
                  Sua fila <span>{lista.length}</span>
                </h2>
                <p>Retornos vencidos aparecem primeiro.</p>
              </div>
              <label className="cc-search">
                <span className="painel-sr">Buscar empresas</span>
                <Icon tipo="search" />
                <input
                  type="search"
                  placeholder="Empresa, contato, cidade…"
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  disabled={emLigacao}
                />
              </label>
              <div className="cc-filters">
                <label>
                  <span className="painel-sr">Filtrar status</span>
                  <select
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                    disabled={emLigacao}
                  >
                    <option value="fila">Fila ativa</option>
                    <option value="retornos">Retornos vencidos</option>
                    <option value="todos">Todos os contatos</option>
                    {Object.entries(STATUS).map(([s, t]) => (
                      <option key={s} value={s}>
                        {t}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  <span className="painel-sr">Responsável</span>
                  <select
                    value={owner}
                    onChange={(e) => setOwner(e.target.value)}
                    disabled={emLigacao}
                  >
                    <option value="todos">Todos os SDRs</option>
                    {Array.from(new Set(leads.map((l) => l.responsavel))).map(
                      (n) => (
                        <option key={n}>{n}</option>
                      ),
                    )}
                  </select>
                </label>
              </div>
              <div className="cc-queue-items">
                {lista.length ? (
                  lista.map((l) => (
                    <button
                      type="button"
                      className={`cc-lead${sel?.id === l.id ? " cc-lead--selected" : ""}`}
                      key={l.id}
                      onClick={() => abrir(l)}
                      disabled={emLigacao && sel?.id !== l.id}
                      aria-pressed={sel?.id === l.id}
                    >
                      <span className="cc-lead-line">
                        <span className={`cc-score cc-score--${l.prioridade}`}>
                          {l.prioridade} / {l.score}
                        </span>
                        <span className="cc-small">
                          {l.historico.length} tentativas
                        </span>
                      </span>
                      <strong>{l.empresa}</strong>
                      <span>
                        {l.cidade} · {l.contato || "Decisor a confirmar"}
                      </span>
                      <span className="cc-lead-line">
                        <span className="cc-tag">{STATUS[l.status]}</span>
                        {l.retornoEm && (
                          <span className="cc-small">{data(l.retornoEm)}</span>
                        )}
                      </span>
                    </button>
                  ))
                ) : (
                  <div className="cc-empty">
                    <Icon tipo="search" />
                    <h3>
                      {leads.length
                        ? "Nenhum contato neste filtro"
                        : "Sua próxima conversa começa aqui."}
                    </h3>
                    <p>
                      {leads.length
                        ? "Ajuste a busca ou selecione outro status."
                        : "Cadastre uma empresa ou prepare a rotina Codex para receber pesquisas com contexto."}
                    </p>
                    <Botao ghost onClick={() => setAba("rotina")}>
                      Preparar rotina <Icon />
                    </Botao>
                  </div>
                )}
              </div>
            </div>
            {sel ? (
              <Dossie
                key={sel.id}
                lead={sel}
                sdr={sdr}
                oferta={cfg.oferta}
                ocupado={ocupado}
                onAcao={acao}
                onCall={setEmLigacao}
                onCopy={copiar}
              />
            ) : (
              <div className="cc-welcome">
                <span className="cc-welcome-number">01—05</span>
                <p className="cc-eyebrow">SEU PLAYBOOK, EM UM SÓ LUGAR</p>
                <h2>
                  Entre na ligação
                  <br />
                  com contexto.
                </h2>
                <p>
                  Veja o que a empresa faz, por que faz sentido conversar e qual
                  pergunta abre a porta.
                </p>
                <div className="cc-playbook-grid">
                  {[
                    "Entenda a empresa",
                    "Encontre o gancho",
                    "Faça boas perguntas",
                    "Registre o combinado",
                  ].map((v, i) => (
                    <div key={v}>
                      <span>0{i + 1}</span>
                      <strong>{v}</strong>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}
        {aba === "agenda" && (
          <section className="cc-section">
            <div className="cc-section-head">
              <div>
                <p className="cc-eyebrow">NENHUM COMBINADO PERDIDO</p>
                <h2>Agenda de próximos passos</h2>
              </div>
              <span>{agenda.length} compromissos</span>
            </div>
            {agenda.length ? (
              agenda.map((l) => (
                <article key={l.id} className="cc-agenda-row">
                  <div>
                    <span className="cc-tag">{STATUS[l.status]}</span>
                    <h3>{data(l.retornoEm)}</h3>
                  </div>
                  <div>
                    <h3>{l.empresa}</h3>
                    <p>{l.proximaAcao || "Próximo passo a definir"}</p>
                    <small>
                      {l.responsavel} · {telefone(l.telefone)}
                    </small>
                  </div>
                  <div className="cc-actions">
                    <Botao ghost onClick={() => calendario(l)}>
                      Calendário ↓
                    </Botao>
                    <Botao onClick={() => abrir(l)}>
                      Abrir contato <Icon />
                    </Botao>
                  </div>
                </article>
              ))
            ) : (
              <Empty
                titulo="Agenda livre por enquanto."
                texto="Retornos e reuniões aparecem aqui quando você registra uma ligação com data e próximo passo."
              />
            )}
          </section>
        )}
        {aba === "resultados" && (
          <section className="cc-section">
            <div className="cc-section-head">
              <div>
                <p className="cc-eyebrow">VISIBILIDADE DA OPERAÇÃO</p>
                <h2>Da tentativa à conversa.</h2>
              </div>
              <Botao
                ghost
                disabled={!leads.length}
                onClick={() => exportar(leads)}
              >
                Exportar contatos CSV ↓
              </Botao>
            </div>
            <div className="cc-results-grid">
              <div>
                <h3>Resultado das ligações · histórico completo</h3>
                {Object.entries(RESULTADOS).map(([id, label]) => {
                  const total = leads.flatMap((l) => l.historico);
                  const n = total.filter((c) => c.resultado === id).length;
                  return (
                    <div className="cc-result-row" key={id}>
                      <span>{label}</span>
                      <strong>{n}</strong>
                      <div className="cc-bar">
                        <span
                          style={{
                            width: `${total.length ? (n / total.length) * 100 : 0}%`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                <h3>Por responsável · histórico completo</h3>
                {Array.from(
                  new Set(
                    leads.flatMap((l) => l.historico.map((c) => c.responsavel)),
                  ),
                ).map((nome) => {
                  const calls = leads
                    .flatMap((l) => l.historico)
                    .filter((c) => c.responsavel === nome);
                  return (
                    <div className="cc-sdr" key={nome}>
                      <span>{nome}</span>
                      <strong>{calls.length} ligações</strong>
                      <small>
                        {calls.filter((c) => c.resultado === "REUNIAO").length}{" "}
                        reuniões
                      </small>
                    </div>
                  );
                })}
                {!leads.some((l) => l.historico.length > 0) && (
                  <p className="cc-muted">
                    O primeiro registro de ligação inicia os resultados da
                    equipe.
                  </p>
                )}
                <div className="cc-note">
                  <strong>O score mede preparo, não chance de venda.</strong>
                  <p>
                    Telefone e fonte: 20 pontos. Decisor: 10. Site: 10. Resumo:
                    15. Gancho: 15. Hipótese: 10. Fontes: até 20. Prioridade A ≥
                    80; B ≥ 55; C abaixo de 55.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
        {aba === "rotina" && (
          <Rotina
            estado={estado}
            ocupado={ocupado}
            onAcao={acao}
            onCopy={copiar}
          />
        )}
        <footer className="cc-footer">
          <span>Made by Felipe® · Central SDR</span>
          <span>Pesquisa com fonte. Conversa com intenção.</span>
        </footer>
      </main>
      <dialog
        aria-label="Nova empresa"
        ref={modal}
        className="cc-dialog"
        onClick={(e) => {
          if (e.target === modal.current && !ocupado) modal.current?.close();
        }}
      >
        <NovoContato
          ocupado={ocupado}
          sdr={sdr}
          onFechar={() => modal.current?.close()}
          erro={erro}
          onSalvar={async (lead) => {
            const ok = await acao(
              { acao: "criar", lead },
              "Empresa adicionada à revisão.",
            );
            if (ok) modal.current?.close();
            return ok;
          }}
        />
      </dialog>
    </div>
  );
}
function Empty({ titulo, texto }: { titulo: string; texto: string }) {
  return (
    <div className="cc-empty">
      <h3>{titulo}</h3>
      <p>{texto}</p>
    </div>
  );
}
function Dossie({
  lead: l,
  sdr,
  oferta,
  ocupado,
  onAcao,
  onCall,
  onCopy,
}: {
  lead: Lead;
  sdr: string;
  oferta: string;
  ocupado: boolean;
  onAcao: (b: unknown, m: string) => Promise<boolean>;
  onCall: (b: boolean) => void;
  onCopy: (s: string) => void;
}) {
  const [aba, setAba] = useState("pesquisa"),
    [inicio, setInicio] = useState<number | null>(null),
    [segundos, setSegundos] = useState(0),
    [id, setId] = useState(""),
    [resultado, setResultado] = useState<Resultado>("NAO_ATENDEU"),
    [notas, setNotas] = useState(""),
    [proximo, setProximo] = useState(""),
    [retorno, setRetorno] = useState(""),
    [responsavel, setResponsavel] = useState(l.responsavel),
    [recuperado, setRecuperado] = useState(false),
    [formError, setFormError] = useState("");
  const storageKey = `cc-draft:${l.id}`;
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(storageKey);
      if (raw) {
        const d = JSON.parse(raw);
        if (l.historico.some((h) => h.id === d.id)) {
          sessionStorage.removeItem(storageKey);
          sessionStorage.removeItem("cc-active");
          return;
        }
        setInicio(d.inicio);
        setId(d.id);
        setNotas(d.notas || "");
        setResultado(d.resultado || "NAO_ATENDEU");
        setProximo(d.proximo || "");
        setRetorno(d.retorno || "");
        onCall(true);
        setRecuperado(true);
      }
    } catch {
      /* Rascunho local opcional. */
    }
  }, [storageKey, onCall]);
  useEffect(() => {
    if (!inicio) return;
    const atualizar = () =>
      setSegundos(
        Math.min(14400, Math.max(0, Math.floor((Date.now() - inicio) / 1000))),
      );
    atualizar();
    const t = setInterval(atualizar, 1000);
    const before = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };
    window.addEventListener("beforeunload", before);
    return () => {
      clearInterval(t);
      window.removeEventListener("beforeunload", before);
    };
  }, [inicio]);
  useEffect(() => {
    if (inicio)
      try {
        sessionStorage.setItem(
          storageKey,
          JSON.stringify({ inicio, id, notas, resultado, proximo, retorno }),
        );
      } catch {
        /* Sem bloqueio se armazenamento local indisponível. */
      }
  }, [inicio, id, notas, resultado, proximo, retorno, storageKey]);
  const script = roteiro(l, sdr, oferta);
  const podeLigar = !finalizado(l) && l.status !== "REVISAR";
  function iniciar() {
    sessionStorage.setItem("cc-active", l.id);
    setInicio(Date.now());
    setId(uid());
    setSegundos(0);
    setAba("roteiro");
    onCall(true);
  }
  function limpar() {
    setInicio(null);
    setNotas("");
    setRetorno("");
    setProximo("");
    setRecuperado(false);
    onCall(false);
    sessionStorage.removeItem(storageKey);
    sessionStorage.removeItem("cc-active");
  }
  async function registrar(e: React.FormEvent) {
    e.preventDefault();
    setFormError("");
    const retornoIso = retorno
      ? new Date(`${retorno}:00-03:00`).toISOString()
      : null;
    const ok = await onAcao(
      {
        acao: "ligacao",
        ligacao: {
          id,
          leadId: l.id,
          resultado,
          notas,
          duracao: segundos,
          proximaAcao: proximo,
          retornoEm: retornoIso,
          responsavel: sdr.trim() || l.responsavel,
        },
      },
      "Ligação salva no histórico e próximo passo atualizado.",
    );
    if (ok) {
      limpar();
      setAba("historico");
    } else
      setFormError(
        "O registro não foi salvo. Confira a mensagem acima; seu rascunho foi mantido.",
      );
  }
  return (
    <div className="cc-dossier">
      <header className="cc-dossier-head">
        <div className="cc-dossier-meta">
          <span className="cc-tag">{STATUS[l.status]}</span>
          <span className="cc-score">
            PRIORIDADE {l.prioridade} · {l.score}/100
          </span>
        </div>
        <h2>{l.empresa}</h2>
        <p>
          {l.segmento} / {l.cidade}
        </p>
        <div className="cc-contact">
          <div>
            <span className="cc-eyebrow">PESSOA DE CONTATO</span>
            <strong>{l.contato || "Decisor a confirmar"}</strong>
            <span>{telefone(l.telefone)}</span>
          </div>
          <div className="cc-actions">
            <Botao ghost onClick={() => onCopy(l.telefone)}>
              Copiar telefone
            </Botao>
            {l.status === "REVISAR" ? (
              <>
                <Botao
                  ghost
                  disabled={ocupado}
                  onClick={() =>
                    onAcao(
                      { acao: "descartar", id: uid(), leadId: l.id },
                      "Contato descartado por estar fora do perfil.",
                    )
                  }
                >
                  Fora do perfil
                </Botao>
                <Botao
                  disabled={ocupado}
                  onClick={() =>
                    onAcao(
                      { acao: "aprovar", id: uid(), leadId: l.id },
                      "Empresa aprovada para ligação.",
                    )
                  }
                >
                  Aprovar contato <Icon />
                </Botao>
              </>
            ) : (
              <Botao
                disabled={!podeLigar || !!inicio || ocupado || !sdr.trim()}
                onClick={iniciar}
              >
                <Icon tipo="phone" />
                {inicio ? "Ligação em andamento" : "Iniciar ligação"}
              </Botao>
            )}
          </div>
        </div>
        {l.status === "NAO_CONTATAR" && (
          <p className="cc-alert">
            Este contato pediu para não receber novas ligações e está fora da
            fila.
          </p>
        )}
        <div className="cc-links">
          {l.site && (
            <a href={l.site} target="_blank" rel="noreferrer">
              Visitar site ↗
            </a>
          )}
          <a href={l.fonteTelefone} target="_blank" rel="noreferrer">
            Fonte do telefone ↗
          </a>
          <label>
            Responsável{" "}
            <input
              value={responsavel}
              maxLength={80}
              onChange={(e) => setResponsavel(e.target.value)}
              disabled={!!inicio}
            />
          </label>
          <button
            type="button"
            className="cc-text-btn"
            disabled={
              ocupado ||
              !!inicio ||
              responsavel === l.responsavel ||
              !responsavel.trim()
            }
            onClick={() =>
              onAcao(
                { acao: "atribuir", id: uid(), leadId: l.id, responsavel },
                "Responsável atualizado.",
              )
            }
          >
            Salvar
          </button>
        </div>
      </header>
      {inicio && (
        <div className="cc-live-bar">
          <span>
            <Icon tipo="phone" />
            Em ligação · {relogio(segundos)}
          </span>
          <a href={`tel:+${l.telefone}`}>Abrir discador ↗</a>
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("cc-call-result")
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            Registrar resultado ↓
          </button>
        </div>
      )}
      <nav className="cc-detail-tabs" aria-label="Dossiê da empresa">
        {[
          ["pesquisa", "Análise da empresa"],
          ["roteiro", "Roteiro & objeções"],
          ["historico", `Histórico (${l.historico.length})`],
        ].map(([a, t]) => (
          <button
            key={a}
            type="button"
            aria-pressed={a === aba}
            onClick={() => setAba(a)}
          >
            {t}
          </button>
        ))}
      </nav>
      <div className="cc-dossier-body">
        {aba === "pesquisa" && (
          <>
            <div className="cc-insight">
              <span className="cc-eyebrow">O QUE A EMPRESA FAZ</span>
              <h3>{l.pesquisa.resumo || "Pesquisa ainda não preenchida."}</h3>
            </div>
            <div className="cc-hypothesis">
              <span className="cc-eyebrow">GANCHO PARA A CONVERSA</span>
              <p>
                {l.pesquisa.gancho ||
                  "Consulte o site e confirme um fato específico antes de ligar."}
              </p>
            </div>
            <div className="cc-insight">
              <h3>
                Onde podemos ajudar <span className="cc-tag">Hipótese</span>
              </h3>
              <p>
                {l.pesquisa.oportunidade ||
                  "Descubra a necessidade durante a conversa."}
              </p>
            </div>
            <div className="cc-insight">
              <h3>O que ainda precisa ser confirmado</h3>
              <p>
                {l.pesquisa.limite ||
                  "Decisor, momento, orçamento e parceiro atual ainda não confirmados."}
              </p>
            </div>
            <div className="cc-evidence">
              <h3>Fontes & evidências</h3>
              {l.pesquisa.fontes.length ? (
                l.pesquisa.fontes.map((f, i) => (
                  <a key={i} href={f.url} target="_blank" rel="noreferrer">
                    <span>0{i + 1}</span>
                    <div>
                      <p>{f.fato}</p>
                      <small>{new URL(f.url).hostname}</small>
                    </div>
                    <Icon />
                  </a>
                ))
              ) : (
                <p className="cc-muted">
                  Cadastro manual. A fonte do telefone está disponível acima.
                </p>
              )}
            </div>
          </>
        )}
        {aba === "roteiro" && (
          <>
            <div className="cc-script-heading">
              <p>
                Um guia para ouvir melhor. Adapte a fala à resposta da pessoa.
              </p>
              <button
                className="cc-text-btn"
                type="button"
                onClick={() =>
                  onCopy(
                    script.map((s) => `${s.titulo}\n${s.texto}`).join("\n\n"),
                  )
                }
              >
                Copiar roteiro
              </button>
            </div>
            {script.map((s) => (
              <article className="cc-script-step" key={s.titulo}>
                <h3>{s.titulo}</h3>
                <p>{s.texto}</p>
              </article>
            ))}
            <h3 className="cc-eyebrow">SE A CONVERSA TRAVAR</h3>
            {OBJECOES.map((o) => (
              <details className="cc-objection" key={o.titulo}>
                <summary>
                  {o.titulo}
                  <span>+</span>
                </summary>
                <p>{o.resposta}</p>
              </details>
            ))}
          </>
        )}
        {aba === "historico" &&
          (l.historico.length ? (
            <ol className="cc-timeline">
              {[...l.historico].reverse().map((h) => (
                <li key={h.id}>
                  <span className="cc-eyebrow">
                    {data(h.criadoEm)} · {h.responsavel} · {relogio(h.duracao)}
                  </span>
                  <h3>{RESULTADOS[h.resultado]}</h3>
                  <p>{h.notas}</p>
                  {h.proximaAcao && (
                    <div className="cc-note">
                      <strong>Próximo passo · {data(h.retornoEm)}</strong>
                      <p>{h.proximaAcao}</p>
                    </div>
                  )}
                </li>
              ))}
            </ol>
          ) : (
            <Empty
              titulo="A primeira conversa ainda está por vir."
              texto="Depois da ligação, registre o resultado e o combinado. A equipe poderá continuar de onde você parou."
            />
          ))}
      </div>
      {inicio && (
        <form id="cc-call-result" className="cc-call" onSubmit={registrar}>
          <div className="cc-call-top">
            <div>
              <span className="cc-eyebrow">LIGAÇÃO EM ANDAMENTO</span>
              <strong aria-label="Tempo de ligação">{relogio(segundos)}</strong>
            </div>
            <a href={`tel:+${l.telefone}`} className="cc-btn cc-btn--ghost">
              <Icon tipo="phone" />
              Abrir discador
            </a>
          </div>
          <p className="cc-muted">
            O discador abre no seu dispositivo. O cronômetro registra o tempo
            informado, sem gravação de áudio.
          </p>
          {recuperado && (
            <p className="cc-note">
              Rascunho recuperado desta sessão. Confira o resultado antes de
              salvar.
            </p>
          )}
          <div className="cc-form-grid">
            <label>
              Resultado
              <select
                aria-label="Resultado da ligação"
                value={resultado}
                onChange={(e) => {
                  const r = e.target.value as Resultado;
                  setResultado(r);
                  if (
                    [
                      "SEM_INTERESSE",
                      "NUMERO_INVALIDO",
                      "NAO_CONTATAR",
                    ].includes(r)
                  )
                    setRetorno("");
                }}
              >
                {Object.entries(RESULTADOS).map(([r, t]) => (
                  <option value={r} key={r}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Próximo contato · Brasília
              <input
                type="datetime-local"
                value={retorno}
                disabled={[
                  "SEM_INTERESSE",
                  "NUMERO_INVALIDO",
                  "NAO_CONTATAR",
                ].includes(resultado)}
                required={["RETORNO", "REUNIAO"].includes(resultado)}
                onChange={(e) => setRetorno(e.target.value)}
              />
            </label>
          </div>
          <label>
            O que você ouviu?
            <textarea
              required
              rows={3}
              maxLength={4000}
              placeholder="Necessidade, decisor, objeção e contexto da conversa…"
              value={notas}
              onChange={(e) => setNotas(e.target.value)}
            />
          </label>
          <label>
            Próximo passo
            <input
              maxLength={500}
              required={["RETORNO", "REUNIAO"].includes(resultado)}
              placeholder="Ex.: conversa com Felipe sobre posicionamento, por vídeo"
              value={proximo}
              onChange={(e) => setProximo(e.target.value)}
            />
          </label>
          {formError && <p role="alert">{formError}</p>}
          <div className="cc-actions">
            <button className="cc-btn" type="submit" disabled={ocupado}>
              {ocupado ? "Salvando…" : "Salvar resultado"}
              <Icon />
            </button>
            <Botao
              ghost
              disabled={ocupado}
              onClick={() => {
                if (window.confirm("Descartar o rascunho desta ligação?"))
                  limpar();
              }}
            >
              Cancelar registro
            </Botao>
          </div>
        </form>
      )}
    </div>
  );
}
function NovoContato({
  sdr,
  ocupado,
  erro,
  onFechar,
  onSalvar,
}: {
  sdr: string;
  ocupado: boolean;
  erro: string;
  onFechar: () => void;
  onSalvar: (lead: unknown) => Promise<boolean>;
}) {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const d = Object.fromEntries(new FormData(form).entries());
        const ok = await onSalvar({
          ...d,
          responsavel: sdr || "Leonardo",
          pesquisa: {
            resumo: d.resumo,
            gancho: d.gancho,
            oportunidade: d.oportunidade,
            limite: "Cadastro manual; confirmar decisor e momento na ligação.",
            fontes: [],
          },
        });
        if (ok) form.reset();
      }}
    >
      <div className="cc-section-head">
        <div>
          <p className="cc-eyebrow">NOVO CONTATO</p>
          <h2>Uma empresa. Um contexto.</h2>
        </div>
        <button
          type="button"
          className="cc-close"
          aria-label="Fechar cadastro"
          onClick={onFechar}
          disabled={ocupado}
        >
          ×
        </button>
      </div>
      <div className="cc-form-grid">
        <label>
          Empresa *<input name="empresa" required maxLength={160} />
        </label>
        <label>
          Pessoa de contato
          <input name="contato" maxLength={120} />
        </label>
        <label>
          Telefone com DDD *
          <input name="telefone" type="tel" required maxLength={40} />
        </label>
        <label>
          Cidade *<input name="cidade" required maxLength={100} />
        </label>
        <label>
          Segmento *
          <input
            name="segmento"
            required
            maxLength={120}
            defaultValue="Psicologia infantil · TEA"
          />
        </label>
        <label>
          Site
          <input
            name="site"
            type="url"
            maxLength={1000}
            placeholder="https://"
          />
        </label>
      </div>
      <label>
        Onde o telefone profissional está publicado? *
        <input
          name="fonteTelefone"
          type="url"
          required
          maxLength={1000}
          placeholder="https://clinica.com.br/contato"
        />
      </label>
      <label>
        Resumo da empresa
        <textarea name="resumo" maxLength={1800} rows={2} />
      </label>
      <label>
        Gancho para a ligação
        <textarea name="gancho" maxLength={600} rows={2} />
      </label>
      <label>
        Hipótese de oportunidade
        <textarea name="oportunidade" maxLength={1200} rows={2} />
      </label>
      {erro && (
        <p className="cc-alert" role="alert">
          {erro}
        </p>
      )}
      <p className="cc-muted">
        O contato entra em revisão. Telefone repetido preserva o cadastro e o
        histórico existentes.
      </p>
      <button className="cc-btn" disabled={ocupado} type="submit">
        {ocupado ? "Salvando…" : "Adicionar à revisão"}
        <Icon />
      </button>
    </form>
  );
}
function Rotina({
  estado,
  ocupado,
  onAcao,
  onCopy,
}: {
  estado: Estado | null;
  ocupado: boolean;
  onAcao: (b: unknown, m: string) => Promise<boolean>;
  onCopy: (s: string) => void;
}) {
  const [cfg, setCfg] = useState<Config>(estado?.config || CONFIG_PADRAO);
  const [pedido, setPedido] = useState("");
  useEffect(() => {
    if (estado) setCfg(estado.config);
  }, [estado]);
  return (
    <section className="cc-routine">
      <div className="cc-routine-hero">
        <div>
          <p className="cc-eyebrow">CODEX / INTELIGÊNCIA DE PROSPECÇÃO</p>
          <h2>
            Enquanto você conversa,
            <br />a próxima pesquisa ganha forma.
          </h2>
          <p>
            O Codex pesquisa empresas, reúne evidências e prepara o gancho. Você
            revisa os contatos e conduz as ligações.
          </p>
        </div>
        <span className="cc-routine-symbol" aria-hidden="true">
          ↗
        </span>
      </div>
      <div className="cc-routine-grid">
        <div className="cc-section">
          <h3>Perfil da próxima busca</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              void onAcao(
                { acao: "config", id: uid(), config: cfg },
                "Perfil de prospecção salvo. A próxima execução consultará estas regras.",
              );
            }}
          >
            <label>
              Público / critérios de qualificação
              <textarea
                rows={5}
                value={cfg.icp}
                maxLength={2000}
                required
                onChange={(e) => setCfg({ ...cfg, icp: e.target.value })}
              />
            </label>
            <label>
              Regiões
              <input
                value={cfg.regioes}
                maxLength={600}
                required
                onChange={(e) => setCfg({ ...cfg, regioes: e.target.value })}
              />
            </label>
            <label>
              Proposta de valor
              <textarea
                rows={3}
                value={cfg.oferta}
                maxLength={1200}
                required
                onChange={(e) => setCfg({ ...cfg, oferta: e.target.value })}
              />
            </label>
            <div className="cc-form-grid">
              <label>
                Meta diária de ligações
                <input
                  type="number"
                  min={1}
                  max={100}
                  required
                  value={cfg.metaDiaria}
                  onChange={(e) =>
                    setCfg({ ...cfg, metaDiaria: Number(e.target.value) })
                  }
                />
              </label>
              <label>
                Capacidade da fila
                <input
                  type="number"
                  min={1}
                  max={100}
                  required
                  value={cfg.tamanhoFila}
                  onChange={(e) =>
                    setCfg({ ...cfg, tamanhoFila: Number(e.target.value) })
                  }
                />
              </label>
            </div>
            <label className="cc-checkbox">
              <input
                type="checkbox"
                checked={cfg.pausada}
                onChange={(e) => setCfg({ ...cfg, pausada: e.target.checked })}
              />
              Pausar entrada de novos leads pela rotina
            </label>
            <button
              type="submit"
              className="cc-btn"
              disabled={ocupado || !estado?.conectado}
            >
              Salvar perfil <Icon />
            </button>
          </form>
        </div>
        <div>
          <div className="cc-section">
            <p className="cc-eyebrow">CONEXÃO COM A ROTINA</p>
            <h3>
              {estado?.execucoes.length
                ? `Última execução: ${data(estado.execucoes[0].criadoEm)}`
                : "Nenhuma execução recebida ainda"}
            </h3>
            <p className="cc-muted">
              {estado?.tokenConfigurado
                ? "Token de entrada configurado no site."
                : "Configure PROSPECCAO_TOKEN no site e no ambiente da rotina Codex."}{" "}
              O agendamento é feito no Codex; este painel mostra as execuções
              recebidas.
            </p>
            <ol className="cc-setup">
              <li>
                Crie uma rotina no Codex para este repositório. Sugestão: dias
                úteis, 7h, horário de Brasília.
              </li>
              <li>
                Use as instruções abaixo. Configure acesso ao site e às fontes
                públicas de pesquisa.
              </li>
              <li>
                Execute uma vez e confira o relatório nesta página antes de
                contar com a recorrência.
              </li>
            </ol>
            <pre className="cc-prompt">{PROMPT_ROTINA}</pre>
            <Botao ghost onClick={() => onCopy(PROMPT_ROTINA)}>
              Copiar instruções
            </Botao>
            <a
              className="cc-doc-link"
              href="https://github.com/madebyfelipe/lpfds/blob/main/docs/cold-call-rotina.md"
              target="_blank"
              rel="noreferrer"
            >
              Guia completo da rotina ↗
            </a>
          </div>
          <div className="cc-section">
            <h3>Direcione o próximo lote</h3>
            <p className="cc-muted">
              A solicitação fica na fila e será lida na próxima execução do
              Codex. Ela não inicia uma execução imediata.
            </p>
            <label>
              Observação para a pesquisa
              <textarea
                value={pedido}
                onChange={(e) => setPedido(e.target.value)}
                rows={3}
                maxLength={1000}
                placeholder="Ex.: priorizar Sorocaba e clínicas com orientação parental."
              />
            </label>
            <Botao
              disabled={ocupado || !estado?.conectado || cfg.pausada}
              onClick={async () => {
                if (
                  await onAcao(
                    { acao: "pedido", id: uid(), observacao: pedido },
                    "Pedido salvo para a próxima execução do Codex.",
                  )
                )
                  setPedido("");
              }}
            >
              Solicitar próximo lote <Icon />
            </Botao>
            <p className="cc-muted">
              {estado?.pedidos.length || 0} solicitações aguardando a rotina.
            </p>
          </div>
        </div>
      </div>
      <div className="cc-section">
        <h3>Diário de execução</h3>
        {estado?.execucoes.length ? (
          estado.execucoes.map((e) => (
            <details className="cc-run" key={e.id}>
              <summary>
                <span>{data(e.criadoEm)}</span>
                <strong>
                  {e.importados} importados / {e.pesquisados} pesquisados
                </strong>
                <span>+</span>
              </summary>
              <p>{e.resumo}</p>
              <small>
                {e.descartados} descartados · {e.requestIds.length} solicitações
                atendidas
              </small>
            </details>
          ))
        ) : (
          <Empty
            titulo="A primeira pesquisa vai aparecer aqui."
            texto="Os relatórios mostram o que foi pesquisado, os contatos importados e os motivos de descarte."
          />
        )}
      </div>
    </section>
  );
}
