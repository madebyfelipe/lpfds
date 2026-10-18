"use client";

import { useState } from "react";
import { CADENCIA } from "@/lib/prospeccao/config";
import { api, dataCurta, type Contexto } from "./comum";

/** Como o sistema roda, o que falta configurar, prévia/disparo manual e o histórico. */
export function Rotina({ ctx }: { ctx: Contexto }) {
  const [previa, setPrevia] = useState<Array<{ email: string; tipo: string; assunto: string; caixa: string }> | null>(null);
  const [avisos, setAvisos] = useState<string[]>([]);
  const [ocupado, setOcupado] = useState(false);
  const estado = ctx.estado;
  const cfg = estado?.cfg;

  async function rodar(dry: boolean) {
    if (!dry && !window.confirm("Enviar agora o que resta do limite de hoje?")) return;
    setOcupado(true);
    const r = await api<{
      previa?: typeof previa;
      enviados?: unknown[];
      falhas?: unknown[];
      avisos?: string[];
      motivo?: string;
    }>("/painel/api/disparo", { method: "POST", body: JSON.stringify({ dry }) });
    setOcupado(false);
    setAvisos(r.avisos ?? (r.motivo ? [r.motivo] : []));
    if (dry) setPrevia(r.previa ?? []);
    else {
      ctx.avisar(r.ok ? `${r.enviados?.length ?? 0} enviados, ${r.falhas?.length ?? 0} falhas.` : `Não enviou: ${r.motivo ?? r.error}`);
      await ctx.recarregar();
    }
  }

  const pronto = estado?.pronto;
  const itens: Array<[string, boolean | undefined, string]> = [
    ["TWENTY_API_KEY", pronto?.twenty, "CRM"],
    ["Caixa(s) SMTP/IMAP", pronto?.smtp, "envio e respostas"],
    ["PROSPECCAO_TOKEN", pronto?.token, "rotina"],
    ["PROSPECCAO_SECRET", pronto?.secret, "descadastro"],
    ["CRON_SECRET", pronto?.cron, "Vercel Cron"],
    ["PROSPECCAO_INICIO", Boolean(cfg?.inicio), "chave geral de envio"],
    ["ANTHROPIC_API_KEY", pronto?.ia, "opcional: IA no painel"],
    ["PROSPECCAO_LINK_AGENDA", Boolean(cfg?.linkAgenda), "opcional: link na resposta"]
  ];

  return (
    <div className="painel-grid2">
      <div className="painel-card painel-pad">
        <h2 className="painel-h2">Como roda</h2>
        <ol className="painel-steps">
          <li>
            <strong>2h56, seg–sex — rotina noturna.</strong> Uma sessão do Claude lê a pauta (campanhas ativas e quanto pesquisar para
            cada uma, importados para completar, reescritas pedidas
            {pronto?.ia ? "" : ", respostas para ler e rascunhar"}), pesquisa site/LinkedIn e grava tudo como “aguardando revisão”.
            Roteiro: docs/prospeccao-rotina.md.
          </li>
          <li>
            <strong>Você revisa</strong> até as 9h.{" "}
            {cfg?.modo === "automatico"
              ? `Modo automático: o que você não vetar sai sozinho ${CADENCIA.janelaVetoHoras}h depois de chegar.`
              : "Modo revisão: só sai o que você aprovar."}
          </li>
          <li>
            <strong>9h, 11h e 14h — disparo.</strong> Cada lote lê as caixas (resposta, pedido de saída ou bounce encerram a
            sequência), manda follow-ups vencidos e os novos, com {CADENCIA.intervaloMinSeg}–{CADENCIA.intervaloMaxSeg} s entre um e
            outro.{pronto?.ia ? " A IA lê as respostas novas e deixa o rascunho da réplica em Conversas." : ""}
          </li>
        </ol>
        <h3 className="painel-h3">Configuração</h3>
        <ul className="painel-config">
          {itens.map(([rotulo, ok, para]) => (
            <li key={rotulo}>
              <span className={`painel-check__badge painel-check__badge--${ok ? "ok" : "falta"}`}>{ok ? "OK" : "Falta"}</span>
              <span>
                <code>{rotulo}</code> <span className="painel-muted">· {para}</span>
              </span>
            </li>
          ))}
        </ul>
        <div className="painel-actions">
          <button type="button" className="painel-btn painel-btn--ghost" disabled={ocupado} onClick={() => rodar(true)}>
            Ver próxima fila
          </button>
          <button type="button" className="painel-btn" disabled={ocupado || !cfg?.inicio || cfg?.pausado} onClick={() => rodar(false)}>
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
                <strong>{p.tipo === "followup" ? "Follow-up" : "1º e-mail"}</strong> · {p.email} — {p.assunto}{" "}
                <span className="painel-muted">({p.caixa})</span>
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
