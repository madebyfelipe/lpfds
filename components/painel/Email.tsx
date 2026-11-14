"use client";

import { useCallback, useEffect, useState } from "react";
import type { Linha, MetricasEmail } from "@/lib/prospeccao/email-metricas";
import { api, erro, Metric } from "./comum";

/**
 * Aba "E-mail" — cold mail em números (painel + Dylan, mesmo Twenty).
 * Só agregados: a rota /painel/api/email não devolve nome, e-mail nem id.
 * Definições iguais às do relatório diário da campanha (benchmark.js).
 * Sem pixel: abertura não existe; o clique vem do link rastreado /r/<token>.
 */

const pct = (x: number) => `${(x * 100).toFixed(1).replace(".", ",")}%`;
const diaCurto = (d: string) => `${d.slice(8, 10)}/${d.slice(5, 7)}`;

function Tabela({ id, titulo, legenda, linhas, rotulo = (g: string) => g }: {
  id: string;
  titulo: string;
  legenda?: string;
  linhas: Linha[];
  rotulo?: (g: string) => string;
}) {
  return (
    <section className="painel-card painel-pad" aria-labelledby={id}>
      <h2 className="painel-h2" id={id}>
        {titulo}
      </h2>
      {legenda && <p className="painel-muted">{legenda}</p>}
      {linhas.length === 0 ? (
        <p className="painel-muted">Sem envios ainda.</p>
      ) : (
        <div className="painel-table-wrap" role="region" aria-labelledby={id} tabIndex={0}>
          <table className="painel-table painel-table--compact">
            <caption className="painel-sr">{titulo}</caption>
            <thead>
              <tr>
                <th scope="col">Grupo</th>
                <th scope="col">Enviados</th>
                <th scope="col">Bounce</th>
                <th scope="col">Resposta</th>
                <th scope="col">Positiva</th>
                <th scope="col">SAIR</th>
                <th scope="col">Clique</th>
              </tr>
            </thead>
            <tbody>
              {linhas.map((l) => (
                <tr key={l.grupo}>
                  <th scope="row">{rotulo(l.grupo)}</th>
                  <td>{l.enviados}</td>
                  <td>
                    {l.bounces} <small>{pct(l.taxaBounce)}</small>
                  </td>
                  <td>
                    {l.respostas} <small>{pct(l.taxaResposta)}</small>
                  </td>
                  <td>
                    {l.positivas} <small>{pct(l.taxaPositiva)}</small>
                  </td>
                  <td>
                    {l.sair} <small>{pct(l.taxaSair)}</small>
                  </td>
                  <td>
                    {l.cliques} <small>{pct(l.taxaClique)}</small>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export function Email() {
  const [m, setM] = useState<MetricasEmail | null>(null);
  const [falha, setFalha] = useState("");
  const [carregando, setCarregando] = useState(true);

  const carregar = useCallback(async () => {
    setCarregando(true);
    const r = await api<{ metricas: MetricasEmail }>("/painel/api/email");
    if (r.ok) {
      setM(r.metricas);
      setFalha("");
    } else setFalha(erro(r.error));
    setCarregando(false);
  }, []);

  useEffect(() => {
    carregar();
  }, [carregar]);

  if (carregando && !m) return <p className="painel-muted" role="status">Carregando os números do e-mail…</p>;
  if (falha && !m)
    return (
      <div className="painel-alert" role="alert">
        <strong>Não deu para ler o CRM.</strong> {falha}
      </div>
    );
  if (!m) return null;

  const t = m.total;
  const base = m.funil[0]?.valor ?? 0;

  return (
    <div className="painel-stack">
      <div className="painel-head-row">
        <p className="painel-muted">
          Cold mail do painel e do Dylan, no mesmo CRM. Só números: nenhum contato aparece aqui. Atualizado às{" "}
          {new Date(m.geradoEm).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", timeZone: "America/Sao_Paulo" })}.
        </p>
        <button type="button" className="painel-btn painel-btn--ghost" onClick={carregar} disabled={carregando}>
          {carregando ? "Atualizando…" : "Atualizar"}
        </button>
      </div>

      {m.alertas.length > 0 && (
        <div className="painel-alert" role="alert">
          {m.alertas.map((a) => (
            <p key={a}>{a}</p>
          ))}
        </div>
      )}

      <div className="painel-metrics" role="group" aria-label="Totais do e-mail">
        <Metric rotulo="Enviados" valor={String(t.enviados)} sub="1º e-mail, todas as caixas" />
        <Metric rotulo="Bounce" valor={pct(t.taxaBounce)} sub={`${t.bounces} · meta abaixo de 2%`} destaque={t.taxaBounce > 0.02} />
        <Metric rotulo="Resposta" valor={pct(t.taxaResposta)} sub={`${t.respostas} · meta 3%+`} />
        <Metric rotulo="Positiva" valor={pct(t.taxaPositiva)} sub={`${t.positivas} · meta 1%+`} />
        <Metric rotulo="SAIR" valor={pct(t.taxaSair)} sub={`${t.sair} · meta abaixo de 3%`} destaque={t.taxaSair > 0.03} />
      </div>

      <div className="painel-grid2">
        <section className="painel-card painel-pad" aria-labelledby="e-funil">
          <h2 className="painel-h2" id="e-funil">
            Funil
          </h2>
          <p className="painel-muted">Percentual sobre quem recebeu o 1º e-mail.</p>
          <ul className="painel-funnel">
            {m.funil.map((f) => (
              <li key={f.etapa}>
                <span className="painel-funnel__label">{f.etapa}</span>
                <span className="painel-funnel__track" aria-hidden="true">
                  <span className="painel-funnel__bar" style={{ width: `${base ? (f.valor / base) * 100 : 0}%` }} />
                </span>
                <span className="painel-funnel__value">
                  {f.valor} <small>{base ? pct(f.valor / base) : "—"}</small>
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="painel-card painel-pad" aria-labelledby="e-fila">
          <h2 className="painel-h2" id="e-fila">
            Fila e cliques
          </h2>
          <ul className="painel-mini-list">
            <li>
              <strong>{m.fila.elegiveis}</strong> leads elegíveis para o 1º e-mail (mesma fila do envio do Dylan: sem site,
              responsável vendedor, nunca contatados, sem SAIR).
            </li>
            <li>
              <strong>{m.fila.seguradasComSite}</strong> seguradas (com site): site fraco local e Google Maps, fora dos
              elegíveis.
            </li>
            <li>
              <strong>{m.fila.followupsDevidos}</strong> follow-ups devidos ({m.fila.diasParaFollowup}+ dias sem resposta depois do
              último envio; estimativa).
            </li>
            <li>
              {m.cliques.disponivel ? (
                <>
                  <strong>{m.cliques.leadsComClique}</strong> pessoas clicaram no link ({pct(m.cliques.taxa)} dos enviados), {m.cliques.total}{" "}
                  cliques no total. Robôs e pré-busca não contam.
                </>
              ) : (
                <>Cliques: o campo prospCliques ainda não existe no CRM.</>
              )}
            </li>
          </ul>
        </section>
      </div>

      <Tabela id="e-dia" titulo="Por dia (últimos 14)" linhas={[...m.porDia].reverse()} rotulo={diaCurto} />
      <Tabela id="e-semana" titulo="Por semana" legenda="Semana começando na segunda-feira." linhas={m.porSemana} rotulo={(g) => `Semana de ${diaCurto(g)}`} />
      <Tabela
        id="e-variante"
        titulo="Por variante de assunto"
        legenda={`${m.porVariante.vencedor ? `Vencedor: ${m.porVariante.vencedor}. ` : ""}${m.porVariante.motivo}`}
        linhas={m.porVariante.linhas}
      />
      <Tabela id="e-caixa" titulo="Por caixa de envio" linhas={m.porCaixa} />
      <Tabela id="e-nicho" titulo="Por nicho" legenda="Primeiras três palavras do campo nicho." linhas={m.porNicho} />
      <Tabela id="e-campanha" titulo="Por campanha" linhas={m.porCampanha} />
    </div>
  );
}
