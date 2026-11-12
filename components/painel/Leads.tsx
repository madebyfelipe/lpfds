"use client";

import { useState } from "react";
import { CLASSIFICACAO_LABEL, PROSP_STATUS_LABEL, STATUS_EM_SEQUENCIA, type Lead, type ProspStatus } from "@/lib/prospeccao/config";
import { api, dataCurta, erro, type Contexto } from "./comum";

/** Tabela de todos os leads, com o passo de cada um e a saída de emergência de uma sequência. */
export function Leads({ ctx }: { ctx: Contexto }) {
  const [status, setStatus] = useState<ProspStatus | "todos">("todos");
  const [campanha, setCampanha] = useState("todas");
  const campanhas = ctx.estado?.campanhas ?? [];
  const lista = ctx.leads
    .filter((l) => status === "todos" || l.status === status)
    .filter((l) => campanha === "todas" || l.campanha === campanha);

  async function parar(l: Lead) {
    if (!window.confirm(`Parar a sequência de ${l.email}? Nenhum follow-up sai mais.`)) return;
    const r = await api(`/painel/api/leads/${l.id}`, { method: "PATCH", body: JSON.stringify({ acao: "parar" }) });
    ctx.avisar(r.ok ? "Sequência interrompida." : erro(r.error));
    await ctx.recarregar();
  }

  return (
    <div className="painel-card">
      <div className="painel-list__tools painel-list__tools--wrap">
        <label className="painel-label" htmlFor="filtro-tabela">
          Status
        </label>
        <select id="filtro-tabela" className="painel-input" value={status} onChange={(e) => setStatus(e.target.value as ProspStatus | "todos")}>
          <option value="todos">Todos ({ctx.leads.length})</option>
          {(Object.keys(PROSP_STATUS_LABEL) as ProspStatus[]).map((s) => (
            <option key={s} value={s}>
              {PROSP_STATUS_LABEL[s]} ({ctx.leads.filter((l) => l.status === s).length})
            </option>
          ))}
        </select>
        {campanhas.length > 1 && (
          <>
            <label className="painel-label" htmlFor="filtro-tabela-campanha">
              Campanha
            </label>
            <select id="filtro-tabela-campanha" className="painel-input" value={campanha} onChange={(e) => setCampanha(e.target.value)}>
              <option value="todas">Todas</option>
              {campanhas.map((c) => (
                <option key={c.id} value={c.slug}>
                  {c.nome}
                </option>
              ))}
            </select>
          </>
        )}
      </div>
      <div className="painel-table-wrap" tabIndex={0} role="region" aria-label="Tabela de leads; role para os lados">
        <table className="painel-table">
          <caption className="painel-sr">Leads da prospecção</caption>
          <thead>
            <tr>
              <th scope="col">Contato</th>
              <th scope="col">Status</th>
              <th scope="col">Etapa</th>
              <th scope="col">Caixa · variante</th>
              <th scope="col">1º envio</th>
              <th scope="col">Último</th>
              <th scope="col">Resposta</th>
              <th scope="col">
                <span className="painel-sr">Ações</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {lista.map((l) => (
              <tr key={l.id}>
                <td>
                  <strong>{l.empresa || l.nome}</strong>
                  <small>{l.email}</small>
                  <small>{l.campanha}</small>
                </td>
                <td>
                  {PROSP_STATUS_LABEL[l.status]}
                  {l.erro && <small>{l.erro.slice(0, 80)}</small>}
                </td>
                <td>{l.etapa}/4</td>
                <td>
                  {l.caixa || "—"}
                  {l.variante && <small>assunto {l.variante}</small>}
                </td>
                <td>{dataCurta(l.enviadoEm)}</td>
                <td>{dataCurta(l.followupEm)}</td>
                <td>
                  {dataCurta(l.respondeuEm)}
                  {l.classificacao && <small>{CLASSIFICACAO_LABEL[l.classificacao]}</small>}
                </td>
                <td>
                  {STATUS_EM_SEQUENCIA.includes(l.status) && (
                    <button type="button" className="painel-link" onClick={() => parar(l)}>
                      Parar
                    </button>
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
