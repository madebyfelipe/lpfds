"use client";

import { useMemo, useState } from "react";
import { metricasDe, type Campanha } from "@/lib/prospeccao/config";
import { api, erro, pct, type Contexto } from "./comum";

const CAMPOS: Array<{ k: keyof Campanha; rotulo: string; ajuda: string; linhas: number }> = [
  { k: "icp", rotulo: "Para quem (ICP)", ajuda: "Quem procurar, em linguagem natural. A rotina lê isto como briefing.", linhas: 4 },
  { k: "oferta", rotulo: "Oferta / ângulo", ajuda: "O que oferecer e por que importa para este público.", linhas: 2 },
  { k: "regioes", rotulo: "Regiões", ajuda: "Cidades, estados, “online Brasil”.", linhas: 2 },
  { k: "excluir", rotulo: "Excluir", ajuda: "Quem/onde não contatar nesta campanha.", linhas: 2 },
  { k: "referencias", rotulo: "Parecidas com", ajuda: "Sites de referência (um por linha): a rotina procura negócios parecidos.", linhas: 2 },
  { k: "tom", rotulo: "Tom e instruções", ajuda: "Como escrever. Vale para a rotina e para a IA.", linhas: 3 }
];

const VAZIA: Omit<Campanha, "id"> = { nome: "", slug: "", status: "ATIVA", icp: "", oferta: "", regioes: "", excluir: "", referencias: "", tom: "" };

export function Campanhas({ ctx }: { ctx: Contexto }) {
  const campanhas = (ctx.estado?.campanhas ?? []).filter((c) => c.status !== "ARQUIVADA");
  const arquivadas = (ctx.estado?.campanhas ?? []).filter((c) => c.status === "ARQUIVADA");
  const [editando, setEditando] = useState<string | null>(null);
  const [nova, setNova] = useState(false);

  return (
    <div className="painel-stack">
      <div className="painel-head-row">
        <div>
          <h2 className="painel-h2">Campanhas</h2>
          <p className="painel-muted">
            Cada campanha é um briefing para a rotina noturna e um interruptor para o disparo. A rotina divide a pesquisa
            entre as ativas pelo desempenho — mais leads para a que gera mais respostas positivas.
          </p>
        </div>
        {!nova && (
          <button type="button" className="painel-btn" onClick={() => setNova(true)}>
            Nova campanha
          </button>
        )}
      </div>

      {nova && <FormCampanha inicial={VAZIA} ctx={ctx} onFim={() => setNova(false)} />}

      <div className="painel-cards">
        {campanhas.map((c) =>
          editando === c.id ? (
            <FormCampanha key={c.id} inicial={c} id={c.id} ctx={ctx} onFim={() => setEditando(null)} />
          ) : (
            <CardCampanha key={c.id} campanha={c} ctx={ctx} onEditar={() => setEditando(c.id)} />
          )
        )}
        {campanhas.length === 0 && !nova && <p className="painel-empty painel-card">Nenhuma campanha. Crie a primeira.</p>}
      </div>
      {arquivadas.length > 0 && (
        <p className="painel-muted">Arquivadas: {arquivadas.map((c) => c.nome).join(", ")}.</p>
      )}

      <div className="painel-grid2">
        <Importar ctx={ctx} />
        <Bloqueios ctx={ctx} />
      </div>
    </div>
  );
}

function CardCampanha({ campanha, ctx, onEditar }: { campanha: Campanha; ctx: Contexto; onEditar: () => void }) {
  const m = useMemo(() => metricasDe(ctx.leads.filter((l) => l.campanha === campanha.slug)), [ctx.leads, campanha.slug]);
  const [ocupado, setOcupado] = useState(false);

  async function status(novo: Campanha["status"]) {
    setOcupado(true);
    const r = await api(`/painel/api/campanhas/${campanha.id}`, { method: "PATCH", body: JSON.stringify({ status: novo }) });
    setOcupado(false);
    ctx.avisar(r.ok ? `Campanha ${novo === "ATIVA" ? "ativada" : novo === "PAUSADA" ? "pausada — nada dela sai, nem follow-up" : "arquivada"}.` : erro(r.error));
    await ctx.recarregar();
  }

  return (
    <article className="painel-card painel-pad">
      <div className="painel-head-row">
        <div>
          <p className="painel-kicker painel-kicker--tight">— {campanha.slug}</p>
          <h3 className="painel-h2">{campanha.nome}</h3>
        </div>
        <span className={`painel-pill${campanha.status === "PAUSADA" ? " painel-pill--red" : ""}`}>{campanha.status === "ATIVA" ? "Ativa" : "Pausada"}</span>
      </div>
      <p className="painel-muted painel-clamp">{campanha.icp}</p>
      <dl className="painel-kpis">
        <div>
          <dt>Leads</dt>
          <dd>{m.leads}</dd>
        </div>
        <div>
          <dt>Contatados</dt>
          <dd>{m.contatados}</dd>
        </div>
        <div>
          <dt>Respostas</dt>
          <dd>
            {m.respostas} <small>{pct(m.taxaResposta)}</small>
          </dd>
        </div>
        <div>
          <dt>Quentes</dt>
          <dd>
            {m.positivas} <small>{pct(m.taxaPositiva)}</small>
          </dd>
        </div>
        <div>
          <dt>Bounce</dt>
          <dd>{pct(m.taxaBounce)}</dd>
        </div>
      </dl>
      <div className="painel-actions">
        <button type="button" className="painel-btn painel-btn--ghost" onClick={onEditar}>
          Editar briefing
        </button>
        {campanha.status === "ATIVA" ? (
          <button type="button" className="painel-link" disabled={ocupado} onClick={() => status("PAUSADA")}>
            Pausar
          </button>
        ) : (
          <button type="button" className="painel-link" disabled={ocupado} onClick={() => status("ATIVA")}>
            Reativar
          </button>
        )}
        <button
          type="button"
          className="painel-link"
          disabled={ocupado}
          onClick={() => window.confirm("Arquivar? Os leads continuam no CRM, mas nada mais sai desta campanha.") && status("ARQUIVADA")}
        >
          Arquivar
        </button>
      </div>
    </article>
  );
}

function FormCampanha({ inicial, id, ctx, onFim }: { inicial: Omit<Campanha, "id">; id?: string; ctx: Contexto; onFim: () => void }) {
  const [v, setV] = useState(inicial);
  const [falha, setFalha] = useState("");
  const [ocupado, setOcupado] = useState(false);

  async function salvar(e: React.FormEvent) {
    e.preventDefault();
    setOcupado(true);
    setFalha("");
    const r = await api(id ? `/painel/api/campanhas/${id}` : "/painel/api/campanhas", {
      method: id ? "PATCH" : "POST",
      body: JSON.stringify(v)
    });
    setOcupado(false);
    if (!r.ok) return setFalha(erro(r.error));
    ctx.avisar(id ? "Briefing salvo — a rotina usa a versão nova esta noite." : "Campanha criada. A rotina começa a pesquisar para ela esta noite.");
    await ctx.recarregar();
    onFim();
  }

  return (
    <form className="painel-card painel-pad painel-form" onSubmit={salvar}>
      <h3 className="painel-h2">{id ? `Editar · ${inicial.nome}` : "Nova campanha"}</h3>
      <div className="painel-grid2 painel-grid2--tight">
        <div className="painel-field">
          <label className="painel-label" htmlFor={`c-nome-${id ?? "nova"}`}>
            Nome
          </label>
          <input id={`c-nome-${id ?? "nova"}`} className="painel-input" required value={v.nome} onChange={(e) => setV({ ...v, nome: e.target.value })} />
        </div>
        <div className="painel-field">
          <label className="painel-label" htmlFor={`c-slug-${id ?? "nova"}`}>
            Slug <span className="painel-count">{id ? "não muda depois de criado" : "vazio = gerado do nome"}</span>
          </label>
          <input id={`c-slug-${id ?? "nova"}`} className="painel-input" value={v.slug} disabled={Boolean(id)} onChange={(e) => setV({ ...v, slug: e.target.value })} />
        </div>
      </div>
      {CAMPOS.map((c) => (
        <div className="painel-field" key={c.k}>
          <label className="painel-label" htmlFor={`c-${c.k}-${id ?? "nova"}`}>
            {c.rotulo}
          </label>
          <textarea
            id={`c-${c.k}-${id ?? "nova"}`}
            className="painel-input painel-textarea painel-textarea--short"
            rows={c.linhas}
            value={String(v[c.k as keyof typeof v] ?? "")}
            onChange={(e) => setV({ ...v, [c.k]: e.target.value })}
            aria-describedby={`c-${c.k}-ajuda-${id ?? "nova"}`}
          />
          <span id={`c-${c.k}-ajuda-${id ?? "nova"}`} className="painel-muted painel-help">
            {c.ajuda}
          </span>
        </div>
      ))}
      {falha && (
        <p className="painel-rule" role="alert">
          {falha}
        </p>
      )}
      <div className="painel-actions">
        <button type="submit" className="painel-btn" disabled={ocupado}>
          {id ? "Salvar briefing" : "Criar campanha"}
        </button>
        <button type="button" className="painel-link" onClick={onFim}>
          Cancelar
        </button>
      </div>
    </form>
  );
}

function Importar({ ctx }: { ctx: Contexto }) {
  const ativas = (ctx.estado?.campanhas ?? []).filter((c) => c.status === "ATIVA");
  const [campanha, setCampanha] = useState(ativas[0]?.slug ?? "");
  const [origem, setOrigem] = useState("");
  const [csv, setCsv] = useState("");
  const [ocupado, setOcupado] = useState(false);
  const [resultado, setResultado] = useState<{ criados: number; ignorados: Array<{ email: string; motivo: string }> } | null>(null);
  const [falha, setFalha] = useState("");

  async function importar(e: React.FormEvent) {
    e.preventDefault();
    setOcupado(true);
    setFalha("");
    const r = await api<{ criados: number; ignorados: Array<{ email: string; motivo: string }> }>("/painel/api/importar", {
      method: "POST",
      body: JSON.stringify({ csv, campanha, origem })
    });
    setOcupado(false);
    if (!r.ok) return setFalha(erro(r.error));
    setResultado({ criados: r.criados, ignorados: r.ignorados });
    ctx.avisar(`${r.criados} importados. A rotina completa a pesquisa esta noite.`);
    await ctx.recarregar();
  }

  return (
    <form className="painel-card painel-pad painel-form" onSubmit={importar}>
      <h3 className="painel-h2">Importar lista</h3>
      <p className="painel-muted">
        Cole um CSV com cabeçalho (<code>email</code>, e se tiver <code>nome</code>, <code>empresa</code>, <code>cidade</code>,{" "}
        <code>site</code>, <code>linkedin</code>). Entra como “importado”: a rotina abre o site, escreve a sequência ou descarta.
        Passa pela mesma triagem (CRM inteiro, bloqueios, MX).
      </p>
      <div className="painel-field">
        <label className="painel-label" htmlFor="imp-campanha">
          Campanha
        </label>
        <select id="imp-campanha" className="painel-input" required value={campanha} onChange={(e) => setCampanha(e.target.value)}>
          {ativas.map((c) => (
            <option key={c.id} value={c.slug}>
              {c.nome}
            </option>
          ))}
        </select>
      </div>
      <div className="painel-field">
        <label className="painel-label" htmlFor="imp-origem">
          De onde veio a lista
        </label>
        <input
          id="imp-origem"
          className="painel-input"
          required
          placeholder="Ex.: lista de expositoras do congresso X (2026)"
          value={origem}
          onChange={(e) => setOrigem(e.target.value)}
          aria-describedby="imp-origem-ajuda"
        />
        <span id="imp-origem-ajuda" className="painel-muted painel-help">
          Vai para o rodapé do e-mail (“seu contato chegou até mim por…”). LGPD: o titular tem direito de saber a origem.
        </span>
      </div>
      <div className="painel-field">
        <label className="painel-label" htmlFor="imp-csv">
          CSV
        </label>
        <textarea
          id="imp-csv"
          className="painel-input painel-textarea painel-mono"
          rows={6}
          required
          placeholder={"email,nome,empresa,cidade,site\ncontato@clinica.com.br,Ana,Clínica Ana,Sorocaba,clinica.com.br"}
          value={csv}
          onChange={(e) => setCsv(e.target.value)}
        />
      </div>
      {falha && (
        <p className="painel-rule" role="alert">
          {falha}
        </p>
      )}
      <div className="painel-actions">
        <button type="submit" className="painel-btn" disabled={ocupado || !ativas.length}>
          {ocupado ? "Importando…" : "Importar"}
        </button>
      </div>
      {resultado && (
        <div className="painel-muted" role="status">
          <p>
            {resultado.criados} importados · {resultado.ignorados.length} ignorados
          </p>
          {resultado.ignorados.length > 0 && (
            <ul className="painel-mini-list">
              {resultado.ignorados.slice(0, 30).map((i, n) => (
                <li key={`${i.email}-${n}`}>
                  {i.email || "(sem e-mail)"} — {i.motivo}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </form>
  );
}

function Bloqueios({ ctx }: { ctx: Contexto }) {
  const [texto, setTexto] = useState((ctx.estado?.bloqueios ?? []).join("\n"));
  const [ocupado, setOcupado] = useState(false);

  async function salvar(e: React.FormEvent) {
    e.preventDefault();
    setOcupado(true);
    const r = await api<{ bloqueios: string[] }>("/painel/api/bloqueios", { method: "POST", body: JSON.stringify({ texto }) });
    setOcupado(false);
    if (r.ok) {
      setTexto(r.bloqueios.join("\n"));
      ctx.avisar(`${r.bloqueios.length} bloqueios salvos. Valem já no próximo lote.`);
      await ctx.recarregar();
    } else ctx.avisar(erro(r.error));
  }

  return (
    <form className="painel-card painel-pad painel-form" onSubmit={salvar}>
      <h3 className="painel-h2">Não contatar</h3>
      <p className="painel-muted">
        Um e-mail ou domínio por linha (clientes, parceiras, concorrentes). Bloqueia a rotina, a importação e o envio — inclusive
        follow-up em andamento.
      </p>
      <div className="painel-field">
        <label className="painel-label" htmlFor="bloq">
          Bloqueios
        </label>
        <textarea
          id="bloq"
          className="painel-input painel-textarea painel-mono"
          rows={8}
          placeholder={"clinicaparceira.com.br\nfulana@gmail.com"}
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
      </div>
      <div className="painel-actions">
        <button type="submit" className="painel-btn painel-btn--ghost" disabled={ocupado}>
          Salvar lista
        </button>
      </div>
    </form>
  );
}
