import { NextResponse } from "next/server";
import { remetente, testarImap, testarSmtp } from "@/lib/prospeccao/caixa";
import { checarDominio } from "@/lib/prospeccao/dominio";
import { autorizaPainel } from "@/lib/prospeccao/painel";

/** DNS do domínio de envio + login no SMTP e no IMAP da caixa de prospecção. */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (!autorizaPainel(request)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  const r = remetente();
  const relatorio = process.env.PROSPECCAO_DMARC_RUA || r.email || "alo@madebyfelipe.com.br";
  const [dns, smtp, imap] = await Promise.all([
    r.dominio
      ? checarDominio(r.dominio, relatorio).catch(() => [
          {
            id: "dns",
            rotulo: "DNS",
            estado: "atencao" as const,
            detalhe: "Não consegui consultar o DNS agora (rede). Tente de novo em instantes."
          }
        ])
      : Promise.resolve([]),
    testarSmtp(),
    testarImap()
  ]);
  return NextResponse.json({ ok: true, remetente: r, dns, smtp, imap });
}
