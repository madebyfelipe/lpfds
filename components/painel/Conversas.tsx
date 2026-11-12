"use client";

import { useMemo, useState } from "react";
import {
  CLASSIFICACAO_LABEL,
  CLASSIFICACOES,
  CLASSIFICACOES_POSITIVAS,
  STATUS_CONVERSA,
  assuntoEnviado,
  type Classificacao,
  type Lead
} from "@/lib/prospeccao/config";
import { api, dataCurta, enviadosDoLead, erro, type Contexto } from "./comum";

/**
 * Caixa unificada: todas as respostas de todas as caixas num lugar só, com a
 * leitura (classificação) e o rascunho da réplica. A réplica sai pela caixa
 * que conduz o lead, na mesma conversa — e só quando o Felipe clica.
 */
export function Conversas({ ctx }: { ctx: Contexto }) {
  const [filtro, setFiltro] = useState<"pendentes" | "positivas" | "todas">("pendentes");
  const conversas = useMemo(() => {
    const todas = ctx.leads
      .filter((l) => STATUS_CONVERSA.includes(l.status) || (l.status === "DESCARTADO" && l.resposta))
      .sort((a, b) => (b.respondeuEm ?? "").localeCompare(a.respondeuEm ?? ""));
    if (filtro === "todas") return todas;
    if (filtro === "positivas") {
      return todas.filter(
        (l) => l.status === "REUNIAO" || (l.classificacao && CLASSIFICACOES_POSITIVAS.includes(l.classificacao))
      );
    }
    return todas.filter((l) => STATUS_CONVERSA.includes(l.status) && precisaResposta(l));
  }, [ctx.leads, filtro]);
  const [selId, setSelId] = useState<string | null>(null);
  const sel = conversas.find((l) => l.id === selId) ?? conversas[0] ?? null;

  return (
    <div className="painel-review">
      <div className="painel-card painel-list">
        <div className="painel-list__tools">
          <label className="painel-sr" htmlFor="filtro-conversas">
            Mostrar
          </label>
          <select
            id="filtro-conversas"
            className="painel-input painel-input--grow"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value as typeof filtro)}
          >
            <option value="pendentes">Esperando resposta sua</option>
            <option value="positivas">Leads quentes</option>
            <option value="todas">Todas as conversas</option>
          </select>
        </div>
        {conversas.length === 0 ? (
          <p className="painel-empty">
            {filtro === "pendentes"
              ? "Nenhuma conversa esperando você. As respostas aparecem aqui depois de cada lote (9h, 11h, 14h)."
              : "Nenhuma conversa ainda."}
          </p>
        ) : (
          <ul className="painel-list__items">
            {conversas.map((l) => (
              <li key={l.id}>
                <button type="button" className="painel-row" aria-pressed={sel?.id === l.id} onClick={() => setSelId(l.id)}>
                  <span className="painel-row__main">
                    <strong>
                      {precisaResposta(l) && STATUS_CONVERSA.includes(l.status) && (
                        <span className="painel-dot" aria-label="esperando resposta" />
                      )}
                      {l.empresa || l.nome}
                    </strong>
                    <span>{l.resposta.slice(0, 90) || l.email}</span>
                  </span>
                  <span className="painel-row__end">
                    <span className={`painel-tag${l.classificacao && CLASSIFICACOES_POSITIVAS.includes(l.classificacao) ? " painel-tag--hot" : ""}`}>
                      {l.status === "REUNIAO" ? "Reunião" : l.classificacao ? CLASSIFICACAO_LABEL[l.classificacao] : "Nova"}
                    </span>
                    <small>{dataCurta(l.respondeuEm)}</small>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {sel ? <Conversa key={`${sel.id}-${sel.respondeuEm}`} lead={sel} ctx={ctx} /> : <div className="painel-card painel-empty">Selecione uma conversa.</div>}
    </div>
  );
}

const precisaResposta = (l: Lead) => !l.respondidoEm || (l.respondeuEm ?? "") > l.respondidoEm;

function Conversa({ lead, ctx }: { lead: Lead; ctx: Contexto }) {
  const [texto, setTexto] = useState(lead.respostaSugerida);
  const [ocupado, setOcupado] = useState(false);
  const [falha, setFalha] = useState("");
  const ia = Boolean(ctx.estado?.pronto.ia);
  const linkAgenda = ctx.estado?.cfg.linkAgenda ?? "";
  const aberta = STATUS_CONVERSA.includes(lead.status);

  async function acao(nome: string, extra: Record<string, unknown> = {}, ok?: string) {
    setOcupado(true);
    setFalha("");
    const r = await api<{ lead?: Lead }>(`/painel/api/leads/${lead.id}`, {
      method: "PATCH",
      body: JSON.stringify({ acao: nome, ...extra })
    });
    setOcupado(false);
    if (!r.ok) return setFalha(erro(r.error));
    if (nome === "sugerir" && r.lead) setTexto(r.lead.respostaSugerida);
    if (ok) ctx.avisar(ok);
    await ctx.recarregar();
  }

  async function enviar() {
    if (!window.confirm(`Enviar esta resposta para ${lead.email}?`)) return;
    setOcupado(true);
    setFalha("");
    const r = await api<{ de?: string }>("/painel/api/responder", {
      method: "POST",
      body: JSON.stringify({ id: lead.id, texto })
    });
    setOcupado(false);
    if (!r.ok) return setFalha(`${erro(r.error)} ${r.detalhe ?? ""}`);
    ctx.avisar(`Resposta enviada de ${r.de}. A cópia fica em Enviados.`);
    await ctx.recarregar();
  }

  return (
    <article className="painel-card painel-editor" aria-label={`Conversa com ${lead.empresa || lead.email}`}>
      <div className="painel-head-row">
        <div>
          <p className="painel-kicker painel-kicker--tight">— {lead.campanha || "sem campanha"}</p>
          <h2 className="painel-h2">{lead.empresa || lead.nome}</h2>
          <p className="painel-muted">
            {lead.email} · conduzida por {lead.caixa || "caixa padrão"} · respondeu no {lead.etapaResposta ?? "?"}º e-mail
          </p>
        </div>
        <div className="painel-field painel-field--inline">
          <label className="painel-label" htmlFor="conv-class">
            Leitura
          </label>
          <select
            id="conv-class"
            className="painel-input"
            value={lead.classificacao ?? ""}
            disabled={!aberta || ocupado}
            onChange={(e) => acao("classificar", { classificacao: e.target.value }, "Leitura atualizada.")}
          >
            {!lead.classificacao && <option value="">—</option>}
            {CLASSIFICACOES.map((c: Classificacao) => (
              <option key={c} value={c}>
                {CLASSIFICACAO_LABEL[c]}
              </option>
            ))}
          </select>
        </div>
      </div>

      <ol className="painel-thread">
        {enviadosDoLead(lead).map((m) => (
          <li key={m.etapa} className="painel-msg">
            <p className="painel-msg__meta">
              Você · {m.etapa === 1 ? `1º e-mail · “${assuntoEnviado(lead)}”` : `follow-up ${m.etapa - 1}`}
              {m.etapa === 1 && lead.enviadoEm ? ` · ${dataCurta(lead.enviadoEm)}` : ""}
            </p>
            <p className="painel-msg__body">{m.texto}</p>
          </li>
        ))}
        <li className="painel-msg painel-msg--dela">
          <p className="painel-msg__meta">
            {lead.nome || lead.empresa} · {dataCurta(lead.respondeuEm)}
          </p>
          <p className="painel-msg__body">{lead.resposta || "(sem texto — abra no webmail)"}</p>
        </li>
        {lead.respondidoEm && (
          <li className="painel-msg">
            <p className="painel-msg__meta">Você respondeu · {dataCurta(lead.respondidoEm)}</p>
          </li>
        )}
      </ol>

      {aberta ? (
        <>
          <div className="painel-field">
            <label className="painel-label" htmlFor="conv-texto">
              Sua resposta
              <span className="painel-count">{texto.trim().split(/\s+/).filter(Boolean).length} palavras</span>
            </label>
            <textarea
              id="conv-texto"
              className="painel-input painel-textarea"
              rows={7}
              value={texto}
              placeholder={ia ? "Peça uma sugestão à IA ou escreva." : "Escreva a resposta. (Com ANTHROPIC_API_KEY, a IA sugere.)"}
              onChange={(e) => setTexto(e.target.value)}
            />
          </div>
          <p className="painel-muted painel-footer-note">
            Sai de {lead.caixa || "caixa padrão"}, na mesma conversa, com a sua assinatura e sem rodapé de descadastro.
          </p>
          {falha && (
            <p className="painel-rule" role="alert">
              {falha}
            </p>
          )}
          <div className="painel-actions">
            <button type="button" className="painel-btn" disabled={ocupado || !texto.trim()} onClick={enviar}>
              Enviar resposta
            </button>
            <button
              type="button"
              className="painel-btn painel-btn--ghost"
              disabled={ocupado || !ia}
              title={ia ? undefined : "Defina ANTHROPIC_API_KEY para usar a IA"}
              onClick={() => acao("sugerir", {}, "Sugestão pronta — revise antes de enviar.")}
            >
              {ocupado ? "…" : "Sugerir com IA"}
            </button>
            {linkAgenda && (
              <button
                type="button"
                className="painel-link"
                onClick={() => setTexto((t) => `${t.trimEnd()}${t.trim() ? "\n\n" : ""}Se preferir, escolha um horário aqui: ${linkAgenda}`)}
              >
                Inserir link de agenda
              </button>
            )}
            <button
              type="button"
              className="painel-link"
              disabled={ocupado || texto === lead.respostaSugerida}
              onClick={() => acao("rascunho", { texto }, "Rascunho guardado.")}
            >
              Guardar rascunho
            </button>
          </div>
          <div className="painel-actions painel-actions--sep">
            {lead.status !== "REUNIAO" && (
              <button type="button" className="painel-btn painel-btn--ghost" disabled={ocupado} onClick={() => acao("reuniao", {}, "Marcado como reunião.")}>
                Marcar reunião
              </button>
            )}
            <button
              type="button"
              className="painel-link"
              disabled={ocupado}
              onClick={() => window.confirm("Encerrar esta conversa? Ela sai daqui e o contato não recebe mais nada.") && acao("encerrar", {}, "Conversa encerrada.")}
            >
              Encerrar conversa
            </button>
          </div>
        </>
      ) : (
        <p className="painel-muted">Conversa encerrada. O contato está na supressão.</p>
      )}
    </article>
  );
}
