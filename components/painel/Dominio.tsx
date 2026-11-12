"use client";

import { useCallback, useEffect, useState } from "react";
import { CADENCIA, SAUDE } from "@/lib/prospeccao/config";
import { api, erro, pct, type Contexto } from "./comum";

type Checagem = {
  id: string;
  rotulo: string;
  estado: "ok" | "atencao" | "falta";
  detalhe: string;
  correcao?: { tipo: string; nome: string; valor: string };
};
type ResultadoCaixa = {
  caixa: { email: string; nome: string; smtpHost: string; imapHost: string; dominio: string };
  dns: Checagem[];
  smtp: { ok: boolean; erro?: string };
  imap: { ok: boolean; erro?: string; enviados?: string };
};

const ESTADO_LABEL = { ok: "OK", atencao: "Atenção", falta: "Falta" } as const;

/** "Conectar domínio": cada caixa do pool com DNS, login e a chave de pausar. */
export function Dominio({ ctx }: { ctx: Contexto }) {
  const [res, setRes] = useState<ResultadoCaixa[] | null>(null);
  const [carregando, setCarregando] = useState(false);
  const [copiado, setCopiado] = useState("");

  const checar = useCallback(async () => {
    setCarregando(true);
    const r = await api<{ caixas: ResultadoCaixa[] }>("/painel/api/dominio");
    setRes(r.ok ? r.caixas : []);
    setCarregando(false);
  }, []);
  useEffect(() => {
    checar();
  }, [checar]);

  async function pausar(email: string, pausar: boolean) {
    const r = await api("/painel/api/caixas", { method: "POST", body: JSON.stringify({ email, pausar }) });
    ctx.avisar(r.ok ? (pausar ? `${email} saiu do pool.` : `${email} voltou ao pool.`) : erro(r.error));
    await ctx.recarregar();
  }

  async function copiar(texto: string, id: string) {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(id);
    } catch {
      setCopiado("");
    }
  }

  const estados = ctx.estado?.caixas ?? [];

  return (
    <div className="painel-stack">
      <div className="painel-head-row">
        <div>
          <h2 className="painel-h2">Caixas e domínios</h2>
          <p className="painel-muted">
            {estados.length} caixa{estados.length === 1 ? "" : "s"} no pool. Lead novo vai para a caixa com mais folga; a conversa
            inteira fica na caixa que mandou o 1º e-mail.
          </p>
        </div>
        <button type="button" className="painel-btn painel-btn--ghost" onClick={checar} disabled={carregando}>
          {carregando ? "Checando…" : "Checar de novo"}
        </button>
      </div>

      {(res ?? []).map((r) => {
        const e = estados.find((x) => x.email === r.caixa.email);
        return (
          <section key={r.caixa.email} className="painel-card painel-pad" aria-label={`Caixa ${r.caixa.email}`}>
            <div className="painel-head-row">
              <div>
                <p className="painel-kicker painel-kicker--tight">— {r.caixa.dominio}</p>
                <h3 className="painel-h2">{r.caixa.email}</h3>
                <p className="painel-muted">
                  Envia como {r.caixa.nome} · {r.caixa.smtpHost}
                  {e && ` · hoje ${e.enviadosHoje}/${e.limiteHoje} · amanhã até ${e.limiteAmanha} · bounce 30d ${pct(e.saude.taxaBounce)}`}
                </p>
                {e?.pausada && (
                  <p className="painel-rule" role="status">
                    Pausada: {e.pausada}
                  </p>
                )}
              </div>
              {e && (
                <button type="button" className={e.pausada ? "painel-btn" : "painel-btn painel-btn--ghost"} onClick={() => pausar(r.caixa.email, !e.pausada)}>
                  {e.pausada ? "Reativar caixa" : "Pausar caixa"}
                </button>
              )}
            </div>
            <ul className="painel-checks">
              {r.dns.map((c) => (
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
                        <button type="button" className="painel-link" onClick={() => copiar(c.correcao!.valor, `${r.caixa.email}-${c.id}`)}>
                          {copiado === `${r.caixa.email}-${c.id}` ? "Copiado" : "Copiar valor"}
                        </button>
                      </div>
                    )}
                  </div>
                </li>
              ))}
              <li className={`painel-check painel-check--${r.smtp.ok ? "ok" : "falta"}`}>
                <span className="painel-check__badge">{r.smtp.ok ? "OK" : "Falta"}</span>
                <div>
                  <strong>Login SMTP (envio)</strong>
                  <p>{r.smtp.ok ? "Autenticou." : r.smtp.erro}</p>
                </div>
              </li>
              <li className={`painel-check painel-check--${r.imap.ok ? "ok" : "falta"}`}>
                <span className="painel-check__badge">{r.imap.ok ? "OK" : "Falta"}</span>
                <div>
                  <strong>Login IMAP (respostas e Enviados)</strong>
                  <p>{r.imap.ok ? `Autenticou. Cópias vão para “${r.imap.enviados}”.` : r.imap.erro}</p>
                </div>
              </li>
            </ul>
          </section>
        );
      })}
      {res && res.length === 0 && <p className="painel-card painel-empty">Nenhuma caixa configurada.</p>}

      <section className="painel-card painel-pad">
        <h3 className="painel-h2">Como conectar mais uma caixa</h3>
        <ol className="painel-steps">
          <li>
            <strong>Domínio secundário, não o principal.</strong> Ex.: madebyfelipe.agency (já tem e-mail Hostinger, SPF, DKIM e
            DMARC com relatório). E-mail frio com denúncia de spam derruba a reputação do domínio inteiro — e o .com.br entrega
            webinar, imersão e e-book.
          </li>
          <li>Crie a caixa no hPanel (ex.: felipe@madebyfelipe.agency) e ative o DKIM em E-mails → Configurações de DNS.</li>
          <li>
            Na Vercel, a variável <code>PROSPECCAO_CAIXAS</code> recebe a lista (JSON):{" "}
            <code>{`[{"email":"felipe@madebyfelipe.agency","senha":"…","inicio":"2026-10-20"}]`}</code>. Cada caixa tem rampa própria a
            partir do seu <code>inicio</code> (começa em {CADENCIA.limiteInicial}/dia, +{CADENCIA.incrementoPorDiaUtil} por dia útil,
            até {CADENCIA.teto}; <code>teto</code> muda o máximo). Sem a variável, vale a caixa única de <code>PROSPECCAO_SMTP_*</code>{" "}
            ou <code>SMTP_*</code>.
          </li>
          <li>Redeploy, volte aqui e confira tudo em OK. Mande um teste para um Gmail pessoal (aba Revisão).</li>
          <li>
            Saúde: com mais de {SAUDE.maxBounce * 100}% de bounce em {SAUDE.amostraMinima}+ envios ({SAUDE.janelaDias} dias), a caixa
            sai do pool sozinha. Limpe a lista antes de reativar.
          </li>
        </ol>
      </section>
    </div>
  );
}
