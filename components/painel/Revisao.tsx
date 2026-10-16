"use client";

import { useMemo, useState } from "react";
import {
  CADENCIA,
  LINKEDIN_STATUS,
  PROSP_STATUS_LABEL,
  REGRAS_COPY,
  checarCopy,
  contarPalavras,
  type Lead,
  type LinkedinStatus
} from "@/lib/prospeccao/config";
import { api, erro, type Contexto } from "./comum";

type Filtro = "REVISAR" | "PRONTO" | "PESQUISAR" | "fila";

export function Revisao({ ctx }: { ctx: Contexto }) {
  const [filtro, setFiltro] = useState<Filtro>("REVISAR");
  const [campanha, setCampanha] = useState("todas");
  const [busca, setBusca] = useState("");
  const campanhas = ctx.estado?.campanhas ?? [];
  const lista = useMemo(() => {
    const t = busca.trim().toLowerCase();
    return ctx.leads
      .filter((l) => (filtro === "fila" ? l.status === "REVISAR" || l.status === "PRONTO" : l.status === filtro))
      .filter((l) => campanha === "todas" || l.campanha === campanha)
      .filter((l) => !t || `${l.empresa} ${l.cidade} ${l.email} ${l.nome}`.toLowerCase().includes(t));
  }, [ctx.leads, filtro, campanha, busca]);
  const [selId, setSelId] = useState<string | null>(null);
  const sel = lista.find((l) => l.id === selId) ?? lista[0] ?? null;
  const fila = ctx.estado?.fila ?? [];
  const posFila = sel ? fila.findIndex((f) => f.id === sel.id) : -1;

  return (
    <div className="painel-review">
      <div className="painel-card painel-list">
        <div className="painel-list__tools painel-list__tools--wrap">
          <label className="painel-sr" htmlFor="busca-leads">
            Buscar
          </label>
          <input
            id="busca-leads"
            className="painel-input painel-input--grow"
            type="search"
            placeholder="Buscar clínica, cidade, e-mail…"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          <label className="painel-sr" htmlFor="filtro-status">
            Status
          </label>
          <select id="filtro-status" className="painel-input" value={filtro} onChange={(e) => setFiltro(e.target.value as Filtro)}>
            <option value="REVISAR">Aguardando revisão</option>
            <option value="PRONTO">Aprovados</option>
            <option value="PESQUISAR">Importados (rotina completa)</option>
            <option value="fila">Todos na fila</option>
          </select>
          {campanhas.length > 1 && (
            <>
              <label className="painel-sr" htmlFor="filtro-campanha">
                Campanha
              </label>
              <select id="filtro-campanha" className="painel-input" value={campanha} onChange={(e) => setCampanha(e.target.value)}>
                <option value="todas">Todas as campanhas</option>
                {campanhas.map((c) => (
                  <option key={c.id} value={c.slug}>
                    {c.nome}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>
        {lista.length === 0 ? (
          <p className="painel-empty">
            {filtro === "PESQUISAR"
              ? "Nenhum importado pendente. Importe uma planilha na aba Campanhas."
              : "Nada aqui. A rotina noturna traz leads novos; eles aparecem em “Aguardando revisão”."}
          </p>
        ) : (
          <ul className="painel-list__items">
            {lista.map((l) => (
              <li key={l.id}>
                <button type="button" className="painel-row" aria-pressed={sel?.id === l.id} onClick={() => setSelId(l.id)}>
                  <span className="painel-row__main">
                    <strong>{l.empresa || l.nome || l.email}</strong>
                    <span>{l.instrucao ? `Reescrita pedida: ${l.instrucao}` : l.cidade || l.email}</span>
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
        sel.status === "PESQUISAR" ? (
          <Importado key={sel.id} lead={sel} ctx={ctx} />
        ) : (
          <Editor key={`${sel.id}-${sel.assunto}-${sel.mensagem.length}`} lead={sel} posFila={posFila} ctx={ctx} />
        )
      ) : (
        <div className="painel-card painel-empty">Selecione um contato.</div>
      )}
    </div>
  );
}

function Importado({ lead, ctx }: { lead: Lead; ctx: Contexto }) {
  async function descartar() {
    const r = await api(`/painel/api/leads/${lead.id}`, { method: "PATCH", body: JSON.stringify({ acao: "descartar" }) });
    ctx.avisar(r.ok ? "Descartado." : erro(r.error));
    await ctx.recarregar();
  }
  return (
    <article className="painel-card painel-editor">
      <p className="painel-kicker painel-kicker--tight">— {PROSP_STATUS_LABEL[lead.status]}</p>
      <h2 className="painel-h2">{lead.empresa || lead.nome || lead.email}</h2>
      <p className="painel-muted">
        {lead.email} · {lead.cidade || "cidade não informada"} · campanha {lead.campanha}
      </p>
      <aside className="painel-evidence">
        <p>
          Importado de: <strong>{lead.fonte}</strong>. {lead.evidencia}
        </p>
        <p className="painel-muted">
          A rotina desta noite abre o site, escreve a evidência e a sequência (ou descarta, se não servir). Ele volta para
          “Aguardando revisão”.
        </p>
      </aside>
      <div className="painel-actions">
        <button type="button" className="painel-link" onClick={descartar}>
          Descartar contato
        </button>
      </div>
    </article>
  );
}

function Editor({ lead, posFila, ctx }: { lead: Lead; posFila: number; ctx: Contexto }) {
  const [assunto, setAssunto] = useState(lead.assunto);
  const [assuntoB, setAssuntoB] = useState(lead.assuntoB);
  const [mensagem, setMensagem] = useState(lead.mensagem);
  const [followups, setFollowups] = useState<string[]>([...lead.followups]);
  const [instrucao, setInstrucao] = useState(lead.instrucao);
  const [nota, setNota] = useState(lead.linkedinNota);
  const [testeEmail, setTesteEmail] = useState("");
  const [ocupado, setOcupado] = useState(false);
  const [falha, setFalha] = useState("");
  const ia = Boolean(ctx.estado?.pronto.ia);
  const editado =
    assunto !== lead.assunto ||
    assuntoB !== lead.assuntoB ||
    mensagem !== lead.mensagem ||
    followups.some((f, i) => f !== lead.followups[i]);
  const regra = checarCopy({ assunto, assuntoB, mensagem, followups });

  async function acao(nome: string, extra: Record<string, unknown> = {}, ok = "") {
    setOcupado(true);
    setFalha("");
    const r = await api<{ aviso?: string }>(`/painel/api/leads/${lead.id}`, {
      method: "PATCH",
      body: JSON.stringify({ acao: nome, assunto, assuntoB, mensagem, followups, ...extra })
    });
    setOcupado(false);
    if (!r.ok) return setFalha(erro(r.error));
    ctx.avisar(
      r.aviso === "na_rotina"
        ? "Pedido guardado: a rotina desta noite reescreve (sem ANTHROPIC_API_KEY, a IA do painel fica desligada)."
        : r.aviso === "reescrito"
          ? "Reescrito pela IA — revise e aprove."
          : ok
    );
    await ctx.recarregar();
  }

  async function teste(etapa: number) {
    setOcupado(true);
    setFalha("");
    const r = await api<{ para?: string; de?: string }>("/painel/api/teste", {
      method: "POST",
      body: JSON.stringify({ id: lead.id, etapa, para: testeEmail || undefined })
    });
    setOcupado(false);
    if (r.ok) ctx.avisar(`Teste enviado de ${r.de} para ${r.para}. Confira se caiu na entrada ou no spam.`);
    else setFalha(`${erro(r.error)} ${r.detalhe ?? ""}`);
  }

  async function linkedin(status: LinkedinStatus) {
    const r = await api(`/painel/api/leads/${lead.id}`, {
      method: "PATCH",
      body: JSON.stringify({ acao: "linkedin", linkedinStatus: status, linkedinNota: nota })
    });
    if (r.ok) {
      ctx.avisar("LinkedIn atualizado.");
      await ctx.recarregar();
    } else setFalha(erro(r.error));
  }

  const palavras = contarPalavras(mensagem);
  const perguntas = (mensagem.match(/\?/g) ?? []).length;

  return (
    <article className="painel-card painel-editor" aria-label={`Mensagem para ${lead.empresa || lead.email}`}>
      <p className="painel-kicker painel-kicker--tight">— {PROSP_STATUS_LABEL[lead.status]}</p>
      <h2 className="painel-h2">{lead.empresa || lead.nome}</h2>
      <p className="painel-muted">
        {lead.email} · {lead.cidade || "cidade não informada"} · {lead.campanha || "sem campanha"}
        {posFila >= 0 ? ` · ${posFila + 1}º na fila` : ""}
      </p>

      <aside className="painel-evidence">
        <p className="painel-kicker painel-kicker--tight">— Por que ela</p>
        <p>{lead.evidencia}</p>
        {lead.hipotese && <p className="painel-muted">Hipótese: {lead.hipotese}</p>}
        {lead.limite && <p className="painel-muted">Não confirmado: {lead.limite}</p>}
        {/^https?:\/\//.test(lead.fonte) && (
          <a className="inst-link" href={lead.fonte} target="_blank" rel="noopener noreferrer">
            Ver fonte pública
          </a>
        )}
      </aside>

      <div className="painel-grid2 painel-grid2--tight">
        <div className="painel-field">
          <label className="painel-label" htmlFor="ed-assunto">
            Assunto A
          </label>
          <input id="ed-assunto" className="painel-input" value={assunto} onChange={(e) => setAssunto(e.target.value)} />
        </div>
        <div className="painel-field">
          <label className="painel-label" htmlFor="ed-assunto-b">
            Assunto B <span className="painel-count">opcional · teste A/B</span>
          </label>
          <input
            id="ed-assunto-b"
            className="painel-input"
            value={assuntoB}
            placeholder="Vazio = sem teste"
            onChange={(e) => setAssuntoB(e.target.value)}
          />
        </div>
      </div>

      <div className="painel-field">
        <label className="painel-label" htmlFor="ed-mensagem">
          1º e-mail
          <span className={`painel-count${palavras > REGRAS_COPY.maxPalavrasMensagem ? " painel-count--over" : ""}`}>
            {palavras}/{REGRAS_COPY.maxPalavrasMensagem} palavras · {perguntas} pergunta{perguntas === 1 ? "" : "s"}
          </span>
        </label>
        <textarea id="ed-mensagem" className="painel-input painel-textarea" rows={8} value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
      </div>

      {[0, 1, 2].map((i) => (
        <div className="painel-field" key={i}>
          <label className="painel-label" htmlFor={`ed-fu-${i}`}>
            Follow-up {i + 1} · +{CADENCIA.diasEntreEtapas[i]} dias úteis
            <span className={`painel-count${contarPalavras(followups[i] ?? "") > REGRAS_COPY.maxPalavrasFollowup ? " painel-count--over" : ""}`}>
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
        Rodapé automático: assinatura, origem do contato e link de descadastro. Só texto, sem rastreio.
      </p>

      {(regra || falha) && (
        <p className="painel-rule" role="alert">
          {falha || erro(regra ?? undefined)}
        </p>
      )}

      <div className="painel-actions">
        {lead.status === "REVISAR" ? (
          <button type="button" className="painel-btn" disabled={ocupado || Boolean(regra)} onClick={() => acao("aprovar", {}, "Aprovado — entra na fila do próximo lote.")}>
            Aprovar e pôr na fila
          </button>
        ) : (
          <button type="button" className="painel-btn painel-btn--ghost" disabled={ocupado} onClick={() => acao("revisar", {}, "Tirado da fila.")}>
            Tirar da fila
          </button>
        )}
        <button type="button" className="painel-btn painel-btn--ghost" disabled={ocupado || !editado || Boolean(regra)} onClick={() => acao("editar", {}, "Texto salvo.")}>
          Salvar texto
        </button>
        <button type="button" className="painel-link" disabled={ocupado} onClick={() => acao("descartar", {}, "Descartado. Não recebe nada.")}>
          Descartar contato
        </button>
      </div>

      <details className="painel-details" open={Boolean(lead.instrucao)}>
        <summary>Reescrever {ia ? "com IA" : "(rotina desta noite)"}</summary>
        <div className="painel-field">
          <label className="painel-label" htmlFor="ed-instrucao">
            O que mudar
          </label>
          <textarea
            id="ed-instrucao"
            className="painel-input painel-textarea painel-textarea--short"
            rows={2}
            placeholder="Ex.: abrir pelo grupo de mães, pergunta mais concreta sobre o Instagram"
            value={instrucao}
            onChange={(e) => setInstrucao(e.target.value)}
          />
        </div>
        <div className="painel-actions">
          <button type="button" className="painel-btn painel-btn--ghost" disabled={ocupado || !instrucao.trim()} onClick={() => acao("reescrever", { instrucao })}>
            {ocupado ? "Reescrevendo…" : ia ? "Reescrever agora" : "Pedir à rotina"}
          </button>
        </div>
        {editado && <p className="painel-muted">A reescrita parte do texto salvo no CRM — salve antes, se mudou algo.</p>}
      </details>

      <details className="painel-details">
        <summary>Enviar teste para mim</summary>
        <div className="painel-field">
          <label className="painel-label" htmlFor="ed-teste">
            Para (vazio = a própria caixa)
          </label>
          <input id="ed-teste" className="painel-input" type="email" placeholder="seu-gmail@gmail.com" value={testeEmail} onChange={(e) => setTesteEmail(e.target.value)} />
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
            <span className="painel-muted">— o convite é seu, à mão (automação viola os termos do LinkedIn).</span>
          </p>
        ) : (
          <p className="painel-muted">A pesquisa não achou perfil.</p>
        )}
        <div className="painel-field">
          <label className="painel-label" htmlFor="ed-nota">
            Nota do convite <span className="painel-count">{nota.length}/300</span>
          </label>
          <textarea id="ed-nota" className="painel-input painel-textarea painel-textarea--short" rows={3} maxLength={300} value={nota} onChange={(e) => setNota(e.target.value)} />
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
