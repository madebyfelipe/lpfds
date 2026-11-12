"use client";

import { useMemo } from "react";
import { SAUDE, diaBrt, metricasDe, type Lead } from "@/lib/prospeccao/config";
import { pct, type Contexto } from "./comum";

/**
 * Resultados — o que o Explee chama de status da campanha e custo por lead,
 * aqui medido em resposta (sem pixel, abertura não existe). Gráficos de uma
 * série só, numa cor (--red-ink, que passa 3:1 nos dois temas); cada número
 * também aparece em texto ou tabela, então nada depende só da cor.
 */
export function Resultados({ ctx }: { ctx: Contexto }) {
  const leads = ctx.leads;
  const m = useMemo(() => metricasDe(leads), [leads]);
  const campanhas = ctx.estado?.campanhas ?? [];

  const porDia = useMemo(() => {
    const dias: string[] = [];
    const hoje = new Date();
    for (let i = 13; i >= 0; i--) dias.push(diaBrt(new Date(hoje.getTime() - i * 86400_000)));
    const conta = new Map(dias.map((d) => [d, 0]));
    for (const l of leads) {
      if (!l.enviadoEm) continue;
      const d = diaBrt(new Date(l.enviadoEm));
      if (conta.has(d)) conta.set(d, (conta.get(d) ?? 0) + 1);
    }
    return dias.map((d) => ({ rotulo: `${d.slice(8, 10)}/${d.slice(5, 7)}`, valor: conta.get(d) ?? 0 }));
  }, [leads]);

  const porEtapa = useMemo(
    () =>
      [1, 2, 3, 4].map((e) => ({
        rotulo: e === 1 ? "1º e-mail" : `Follow-up ${e - 1}`,
        valor: leads.filter((l) => l.etapaResposta === e).length
      })),
    [leads]
  );

  const ab = useMemo(() => {
    const testados = leads.filter((l) => l.assuntoB && l.variante);
    return (["A", "B"] as const).map((v) => {
      const grupo = testados.filter((l) => l.variante === v);
      const respostas = grupo.filter((l) => l.respondeuEm).length;
      return { v, enviados: grupo.length, respostas, taxa: grupo.length ? respostas / grupo.length : 0 };
    });
  }, [leads]);

  const funil = [
    { rotulo: "Contatados", valor: m.contatados },
    { rotulo: "Responderam", valor: m.respostas },
    { rotulo: "Quentes", valor: m.positivas },
    { rotulo: "Reuniões", valor: m.reunioes }
  ];

  return (
    <div className="painel-stack">
      <div className="painel-grid2">
        <section className="painel-card painel-pad" aria-labelledby="r-funil">
          <h2 className="painel-h2" id="r-funil">
            Do envio à reunião
          </h2>
          <p className="painel-muted">Percentual sobre quem recebeu ao menos um e-mail.</p>
          <ul className="painel-funnel">
            {funil.map((f) => (
              <li key={f.rotulo}>
                <span className="painel-funnel__label">{f.rotulo}</span>
                <span className="painel-funnel__track" aria-hidden="true">
                  <span className="painel-funnel__bar" style={{ width: `${m.contatados ? (f.valor / m.contatados) * 100 : 0}%` }} />
                </span>
                <span className="painel-funnel__value">
                  {f.valor} <small>{m.contatados ? pct(f.valor / m.contatados) : "—"}</small>
                </span>
              </li>
            ))}
          </ul>
          <p className="painel-muted">
            Bounce {pct(m.taxaBounce)} · descadastros {m.descadastros}. Acima de {SAUDE.maxBounce * 100}% de bounce numa caixa, ela
            se pausa sozinha.
          </p>
        </section>

        <section className="painel-card painel-pad" aria-labelledby="r-dia">
          <h2 className="painel-h2" id="r-dia">
            Primeiros contatos por dia
          </h2>
          <p className="painel-muted">Últimos 14 dias. Follow-ups não entram aqui.</p>
          <Barras dados={porDia} nome="Primeiros contatos" />
        </section>
      </div>

      <div className="painel-grid2">
        <section className="painel-card painel-pad" aria-labelledby="r-etapa">
          <h2 className="painel-h2" id="r-etapa">
            Em que e-mail ela respondeu
          </h2>
          <p className="painel-muted">Se os follow-ups trazem resposta, a sequência está fazendo o trabalho.</p>
          <Barras dados={porEtapa} nome="Respostas" />
        </section>

        <section className="painel-card painel-pad" aria-labelledby="r-ab">
          <h2 className="painel-h2" id="r-ab">
            Teste A/B de assunto
          </h2>
          {ab.every((x) => x.enviados === 0) ? (
            <p className="painel-muted">
              Nenhum teste rodou ainda. Preencha o “Assunto B” na revisão (ou peça à rotina): metade dos leads recebe cada um.
            </p>
          ) : (
            <>
              <ul className="painel-funnel">
                {ab.map((x) => (
                  <li key={x.v}>
                    <span className="painel-funnel__label">Assunto {x.v}</span>
                    <span className="painel-funnel__track" aria-hidden="true">
                      <span className="painel-funnel__bar" style={{ width: `${Math.max(...ab.map((y) => y.taxa)) ? (x.taxa / Math.max(...ab.map((y) => y.taxa))) * 100 : 0}%` }} />
                    </span>
                    <span className="painel-funnel__value">
                      {pct(x.taxa)} <small>{x.respostas}/{x.enviados}</small>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="painel-muted">
                Com menos de ~50 envios por lado, a diferença ainda é sorte. Taxa = respostas ÷ quem recebeu aquele assunto.
              </p>
            </>
          )}
        </section>
      </div>

      <section className="painel-card" aria-labelledby="r-camp">
        <h2 className="painel-h2 painel-pad-x" id="r-camp">
          Por campanha
        </h2>
        <div className="painel-table-wrap" tabIndex={0} role="region" aria-label="Resultados por campanha">
          <table className="painel-table">
            <thead>
              <tr>
                <th scope="col">Campanha</th>
                <th scope="col">Leads</th>
                <th scope="col">Na fila</th>
                <th scope="col">Contatados</th>
                <th scope="col">Resposta</th>
                <th scope="col">Quentes</th>
                <th scope="col">Reuniões</th>
                <th scope="col">Bounce</th>
              </tr>
            </thead>
            <tbody>
              {[...campanhas.map((c) => ({ nome: c.nome, slug: c.slug })), { nome: "Sem campanha", slug: "" }]
                .map((c) => ({ ...c, m: metricasDe(leads.filter((l: Lead) => (c.slug ? l.campanha === c.slug : !campanhas.some((x) => x.slug === l.campanha)))) }))
                .filter((c) => c.m.leads > 0 || c.slug)
                .map((c) => (
                  <tr key={c.slug || "sem"}>
                    <td>
                      <strong>{c.nome}</strong>
                      {c.slug && <small>{c.slug}</small>}
                    </td>
                    <td>{c.m.leads}</td>
                    <td>{c.m.naFila}</td>
                    <td>{c.m.contatados}</td>
                    <td>
                      {pct(c.m.taxaResposta)} <small>{c.m.respostas}</small>
                    </td>
                    <td>
                      {pct(c.m.taxaPositiva)} <small>{c.m.positivas}</small>
                    </td>
                    <td>{c.m.reunioes}</td>
                    <td>{pct(c.m.taxaBounce)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="painel-card" aria-labelledby="r-caixas">
        <h2 className="painel-h2 painel-pad-x" id="r-caixas">
          Saúde das caixas · {SAUDE.janelaDias} dias
        </h2>
        <div className="painel-table-wrap" tabIndex={0} role="region" aria-label="Saúde das caixas">
          <table className="painel-table">
            <thead>
              <tr>
                <th scope="col">Caixa</th>
                <th scope="col">Hoje</th>
                <th scope="col">1ºs envios</th>
                <th scope="col">Bounce</th>
                <th scope="col">Descadastro</th>
                <th scope="col">Respostas</th>
                <th scope="col">Estado</th>
              </tr>
            </thead>
            <tbody>
              {(ctx.estado?.caixas ?? []).map((c) => (
                <tr key={c.email}>
                  <td>
                    <strong>{c.email}</strong>
                    <small>teto {c.teto}/dia</small>
                  </td>
                  <td>
                    {c.enviadosHoje}/{c.limiteHoje}
                  </td>
                  <td>{c.saude.enviados}</td>
                  <td>{pct(c.saude.taxaBounce)}</td>
                  <td>{pct(c.saude.taxaDescadastro)}</td>
                  <td>{c.saude.respostas}</td>
                  <td>{c.pausada ? "Pausada" : c.saude.degradada ? "Degradada" : "Ativa"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

/**
 * Barras verticais de uma série: base comum, ponta arredondada de 4px, 2px de
 * respiro entre barras, rótulo e valor em texto. Cada barra é focável e mostra
 * o valor no hover/foco; a tabela logo abaixo dá a mesma leitura sem gráfico.
 */
function Barras({ dados, nome }: { dados: Array<{ rotulo: string; valor: number }>; nome: string }) {
  const max = Math.max(1, ...dados.map((d) => d.valor));
  const total = dados.reduce((a, d) => a + d.valor, 0);
  return (
    <figure className="painel-chart">
      <div className="painel-chart__plot" role="list" aria-label={`${nome}: ${total} no total`}>
        {dados.map((d) => (
          <div key={d.rotulo} className="painel-chart__col" role="listitem" tabIndex={0} aria-label={`${d.rotulo}: ${d.valor}`}>
            <span className="painel-chart__tip" aria-hidden="true">
              {d.rotulo} · {d.valor}
            </span>
            <span className="painel-chart__bar" style={{ height: `${(d.valor / max) * 100}%` }} />
          </div>
        ))}
      </div>
      <div className="painel-chart__axis" aria-hidden="true">
        {dados.map((d, i) => (
          <span key={d.rotulo}>{dados.length > 7 && i % 2 === 1 ? "" : d.rotulo}</span>
        ))}
      </div>
      <figcaption className="painel-muted">
        Total: {total} · máximo num dia: {max === 1 && total === 0 ? 0 : max}
      </figcaption>
      <details className="painel-details painel-details--flat">
        <summary>Ver tabela</summary>
        <table className="painel-table painel-table--compact">
          <thead>
            <tr>
              <th scope="col">Período</th>
              <th scope="col">{nome}</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((d) => (
              <tr key={d.rotulo}>
                <td>{d.rotulo}</td>
                <td>{d.valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}
