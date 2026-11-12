import { autorizaPainel } from "@/lib/prospeccao/painel";
import {
  CONFIG_PADRAO,
  idValido,
  validarConfig,
  validarLead,
  validarLigacao,
  Validacao,
} from "@/lib/cold-call/model";
import {
  aprovar,
  atribuir,
  configurado,
  configurar,
  criarLead,
  descartar,
  estado,
  ligar,
  pedir,
} from "@/lib/cold-call/store";
import { body, falha, json, sameOrigin } from "@/lib/cold-call/http";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  if (!autorizaPainel(request))
    return json({ ok: false, error: "Acesso não autorizado." }, 401);
  try {
    if (!configurado())
      return json({
        ok: true,
        leads: [],
        config: CONFIG_PADRAO,
        execucoes: [],
        pedidos: [],
        conectado: false,
        tokenConfigurado: Boolean(process.env.PROSPECCAO_TOKEN),
      });
    return json({ ok: true, ...(await estado()) });
  } catch (e) {
    return falha(e);
  }
}
export async function POST(request: Request) {
  if (!autorizaPainel(request))
    return json({ ok: false, error: "Acesso não autorizado." }, 401);
  if (!sameOrigin(request))
    return json({ ok: false, error: "Origem não autorizada." }, 403);
  try {
    const b = await body(request);
    let resultado: unknown;
    switch (b.acao) {
      case "criar":
        resultado = await criarLead(validarLead(b.lead));
        break;
      case "descartar":
        resultado = await descartar(idValido(b.id), idValido(b.leadId));
        break;
      case "aprovar":
        resultado = await aprovar(idValido(b.id), idValido(b.leadId));
        break;
      case "ligacao":
        resultado = await ligar(validarLigacao(b.ligacao));
        break;
      case "atribuir":
        resultado = await atribuir(
          idValido(b.id),
          idValido(b.leadId),
          String(b.responsavel || ""),
        );
        break;
      case "config":
        resultado = await configurar(idValido(b.id), validarConfig(b.config));
        break;
      case "pedido":
        resultado = await pedir(idValido(b.id), String(b.observacao || ""));
        break;
      default:
        throw new Validacao("Ação inválida.");
    }
    return json({ ok: true, resultado });
  } catch (e) {
    return falha(e);
  }
}
