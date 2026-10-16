"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { InstThemeToggle } from "@/components/institucional/InstThemeToggle";
import { CLASSIFICACOES_POSITIVAS, STATUS_CONVERSA, metricasDe } from "@/lib/prospeccao/config";
import { Campanhas } from "./Campanhas";
import { api, erro, Metric, pct, type Contexto, type Estado } from "./comum";
import { Conversas } from "./Conversas";
import { Dominio } from "./Dominio";
import { Leads } from "./Leads";
import { Meta } from "./Meta";
import { Resultados } from "./Resultados";
import { Revisao } from "./Revisao";
import { Rotina } from "./Rotina";

/**
 * Painel comercial — sucessor do protótipo estático do Codex
 * (previews/campanhas/index.html), no modelo das ferramentas de SDR com IA
 * (Explee): campanhas com briefing, várias caixas, revisão de cada e-mail,
 * caixa unificada de respostas, resultados e a rotina noturna que pesquisa.
 *
 * Tudo via /painel/api/*, atrás do mesmo HTTP Basic desta página.
 */

const ABAS = [
  ["conversas", "Conversas"],
  ["revisao", "Revisão"],
  ["campanhas", "Campanhas"],
  ["leads", "Leads"],
  ["resultados", "Resultados"],
  ["dominio", "Caixas"],
  ["rotina", "Rotina"],
  ["meta", "Meta"]
] as const;
type Aba = (typeof ABAS)[number][0];

export function PainelCampanhas() {
  const [estado, setEstado] = useState<Estado | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [aba, setAba] = useState<Aba>("revisao");
  const [aviso, setAviso] = useState("");
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);

  const recarregar = useCallback(async () => {
    setCarregando(true);
    setEstado((await api<Estado>("/painel/api/estado")) as Estado);
    setCarregando(false);
  }, []);

  useEffect(() => {
    recarregar();
  }, [recarregar]);

  const leads = useMemo(() => estado?.leads ?? [], [estado]);
  const ctx: Contexto = { estado, leads, recarregar, avisar: setAviso };
  const m = useMemo(() => metricasDe(leads), [leads]);
  const pendentes = leads.filter(
    (l) => STATUS_CONVERSA.includes(l.status) && (!l.respondidoEm || (l.respondeuEm ?? "") > l.respondidoEm)
  ).length;
  const quentes = leads.filter(
    (l) => STATUS_CONVERSA.includes(l.status) && (l.status === "REUNIAO" || (l.classificacao && CLASSIFICACOES_POSITIVAS.includes(l.classificacao)))
  ).length;
  const revisar = leads.filter((l) => l.status === "REVISAR").length;

  // Abre direto em Conversas quando há resposta esperando.
  const abriu = useRef(false);
  useEffect(() => {
    if (!abriu.current && estado?.ok) {
      abriu.current = true;
      if (pendentes > 0) setAba("conversas");
    }
  }, [estado, pendentes]);

  async function alternarPausa() {
    if (!estado) return;
    const pausar = !estado.cfg.pausado;
    const r = await api("/painel/api/pausa", { method: "POST", body: JSON.stringify({ pausar }) });
    setAviso(r.ok ? (pausar ? "Tudo pausado. Nada sai até você retomar." : "Envios retomados.") : erro(r.error));
    recarregar();
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
  const contagem: Partial<Record<Aba, number>> = { conversas: pendentes, revisao: revisar };

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
              {cfg.pausado ? "Retomar envios" : "Pausar tudo"}
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
          <strong>O painel não conseguiu ler o CRM.</strong> {erro(estado.error)} Configure as variáveis listadas em docs/prospeccao.md.
        </div>
      )}

      <section className="painel-metrics" aria-label="Indicadores">
        <Metric rotulo="Enviados hoje" valor={`${cfg?.enviadosHoje ?? 0} / ${cfg?.limiteHoje ?? 0}`} sub={`${estado?.caixas?.length ?? 0} caixa(s) · amanhã até ${cfg?.limiteAmanha ?? 0}`} />
        <Metric rotulo="Na fila" valor={String(m.naFila)} sub={`${revisar} aguardando revisão`} />
        <Metric rotulo="Contatados" valor={String(m.contatados)} sub={`${leads.filter((l) => l.status === "ENVIADO" || l.status === "FOLLOWUP_ENVIADO").length} em sequência`} />
        <Metric rotulo="Respostas" valor={String(m.respostas)} sub={`${pct(m.taxaResposta)} · ${pendentes} esperando você`} destaque={pendentes > 0} />
        <Metric rotulo="Leads quentes" valor={String(quentes)} sub={`${m.reunioes} reunião(ões) · bounce ${pct(m.taxaBounce)}`} />
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
              {(contagem[id] ?? 0) > 0 && <span className="painel-tab__count">{contagem[id]}</span>}
            </button>
          ))}
        </div>
        <button type="button" className="painel-link painel-tabs__reload" onClick={recarregar} disabled={carregando}>
          {carregando ? "Carregando…" : "Atualizar"}
        </button>
      </div>

      <div role="tabpanel" id={`painel-${aba}`} aria-labelledby={`tab-${aba}`} className="painel-panel">
        {!estado ? (
          <p className="painel-empty">Carregando…</p>
        ) : (
          <>
            {aba === "conversas" && <Conversas ctx={ctx} />}
            {aba === "revisao" && <Revisao ctx={ctx} />}
            {aba === "campanhas" && <Campanhas ctx={ctx} />}
            {aba === "leads" && <Leads ctx={ctx} />}
            {aba === "resultados" && <Resultados ctx={ctx} />}
            {aba === "dominio" && <Dominio ctx={ctx} />}
            {aba === "rotina" && <Rotina ctx={ctx} />}
            {aba === "meta" && <Meta ctx={ctx} />}
          </>
        )}
      </div>

      <footer className="painel-footer">
        Made by Felipe® · Painel comercial · dados no Twenty · nenhum pixel de rastreio nos e-mails
      </footer>
    </div>
  );
}
