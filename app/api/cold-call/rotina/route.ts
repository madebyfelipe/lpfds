import { autorizaRotina } from "@/lib/prospeccao/seguranca";
import { conhecidos } from "@/lib/prospeccao/twenty";
import {
  finalizado,
  idValido,
  inteiro,
  validarLead,
  Validacao,
} from "@/lib/cold-call/model";
import { criarLead, estado, executar } from "@/lib/cold-call/store";
import { body, falha, json } from "@/lib/cold-call/http";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;
const capacidade = (s: Awaited<ReturnType<typeof estado>>) =>
  s.config.pausada
    ? 0
    : Math.max(
        0,
        Math.min(
          15,
          s.config.tamanhoFila - s.leads.filter((l) => !finalizado(l)).length,
        ),
      );
export async function GET(request: Request) {
  if (!autorizaRotina(request))
    return json({ ok: false, error: "Acesso não autorizado." }, 401);
  try {
    const s = await estado();
    return json({
      ok: true,
      config: s.config,
      pesquisarAte: capacidade(s),
      conhecidos: s.leads.map((l) => ({
        telefone: l.telefone,
        empresa: l.empresa,
        site: l.site,
        status: l.status,
      })),
      pedidos: s.pedidos,
      ultimaExecucao: s.execucoes[0] ?? null,
    });
  } catch (e) {
    return falha(e);
  }
}
export async function POST(request: Request) {
  if (!autorizaRotina(request))
    return json({ ok: false, error: "Acesso não autorizado." }, 401);
  try {
    const b = await body(request);
    if (b.acao === "relatorio") {
      const resumo = typeof b.resumo === "string" ? b.resumo.trim() : "";
      if (!resumo || resumo.length > 12000)
        throw new Validacao(
          "Escreva o resumo real da execução (até 12.000 caracteres).",
        );
      const requestIds = Array.isArray(b.requestIds)
        ? b.requestIds.map(idValido)
        : [];
      if (requestIds.length > 100) throw new Validacao("Muitos pedidos.");
      const s = await estado();
      const validos = new Set([
        ...s.pedidos.map((p) => p.id),
        ...s.execucoes.flatMap((e) => e.requestIds),
      ]);
      if (requestIds.some((id) => !validos.has(id)))
        throw new Validacao("Pedido desconhecido.");
      const pesquisados = inteiro(b.pesquisados, 0, 500);
      const importados = inteiro(b.importados, 0, 15);
      const descartados = inteiro(b.descartados, 0, 500);
      if (importados + descartados > pesquisados)
        throw new Validacao("Os totais do relatório não conferem.");
      return json({
        ok: true,
        id: await executar(idValido(b.id), {
          resumo,
          pesquisados,
          importados,
          descartados,
          requestIds,
        }),
      });
    }
    if (
      b.acao !== "importar" ||
      !Array.isArray(b.leads) ||
      !b.leads.length ||
      b.leads.length > 15
    )
      throw new Validacao("Envie acao importar e de 1 a 15 leads.");
    const s = await estado();
    if (s.config.pausada)
      return json({ ok: false, error: "Rotina pausada no painel." }, 409);
    // Respeita clientes/contatos que já existem no CRM de campanhas.
    const base = await conhecidos();
    const dominios = new Set(base.dominios);
    let vagas = capacidade(s);
    const criados: string[] = [];
    const ignorados: Array<{ indice: number; motivo: string }> = [];
    for (const [indice, raw] of b.leads.entries()) {
      let l;
      try {
        l = validarLead(raw, true);
      } catch (e) {
        if (e instanceof Validacao) {
          ignorados.push({ indice, motivo: e.message });
          continue;
        }
        throw e;
      }
      if (s.leads.some((x) => x.telefone === l.telefone)) {
        ignorados.push({
          indice,
          motivo: "Telefone já cadastrado; histórico e supressão preservados.",
        });
        continue;
      }
      if (
        l.site &&
        dominios.has(new URL(l.site).hostname.replace(/^www\./, ""))
      ) {
        ignorados.push({ indice, motivo: "Domínio já é contato no CRM." });
        continue;
      }
      if (!vagas) {
        ignorados.push({ indice, motivo: "Fila cheia." });
        continue;
      }
      const r = await criarLead(l);
      if (r.duplicado) {
        ignorados.push({ indice, motivo: "Telefone já cadastrado." });
        continue;
      }
      criados.push(r.id);
      vagas--;
    }
    return json({ ok: true, criados, ignorados });
  } catch (e) {
    return falha(e);
  }
}
