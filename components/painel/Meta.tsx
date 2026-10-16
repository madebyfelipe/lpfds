"use client";

import { useState } from "react";
import { metricasDe } from "@/lib/prospeccao/config";
import { pct, type Contexto } from "./comum";

const money = (n: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(n);

/**
 * Simulador da meta (herdado do protótipo do Codex), agora ligado ao funil
 * real: quantos e-mails/dia a meta pede, dada a taxa de conversa medida.
 */
export function Meta({ ctx }: { ctx: Contexto }) {
  const [preco, setPreco] = useState(5000);
  const [horas, setHoras] = useState(40);
  const [manter, setManter] = useState(true);
  const [fechamento, setFechamento] = useState(25);
  const META = 12000;
  const ATUAL = 4200;
  const base = manter ? ATUAL : 0;
  const n = Math.ceil((META - base) / preco);
  const m = metricasDe(ctx.leads);
  // Conversa = reunião (ou quente, enquanto não há reunião registrada).
  const taxaConversa = m.contatados ? (m.reunioes || m.positivas) / m.contatados : 0;
  const conversasMes = Math.ceil(n / (fechamento / 100));
  const contatosMes = taxaConversa ? Math.ceil(conversasMes / taxaConversa) : null;

  return (
    <div className="painel-grid2">
      <div className="painel-card painel-pad">
        <h2 className="painel-h2">R$ 12 mil por mês</h2>
        <p className="painel-muted">Faturamento atual e meta informados por você. Horas e fechamento são hipóteses.</p>
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
        <div className="painel-field">
          <label className="painel-label" htmlFor="meta-fech">
            Conversas que viram projeto · {fechamento}%
          </label>
          <input id="meta-fech" type="range" min={5} max={60} step={5} value={fechamento} onChange={(e) => setFechamento(Number(e.target.value))} />
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
          {money(base + n * preco)} / mês brutos · {n * horas} h de entrega · ~{(n * 1.5).toLocaleString("pt-BR")} projetos em paralelo (45
          dias cada).
        </p>
        <p>
          Pede ~{conversasMes} conversas por mês.{" "}
          {contatosMes
            ? `Com a taxa medida até agora (${pct(taxaConversa)} dos contatados viram conversa), são ~${contatosMes} contatos novos por mês — ~${Math.ceil(contatosMes / 21)} por dia útil.`
            : "Ainda não há conversas medidas para estimar quantos contatos isso exige."}
        </p>
        <p className="painel-muted">Estimativa, não previsão: a taxa muda com nicho, copy e época do ano.</p>
      </div>
    </div>
  );
}
