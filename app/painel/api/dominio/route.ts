import { NextResponse } from "next/server";
import { listarCaixas, publica, testarImap, testarSmtp } from "@/lib/prospeccao/caixas";
import { checarDominio, type Checagem } from "@/lib/prospeccao/dominio";
import { autorizaPainel } from "@/lib/prospeccao/painel";

/** Por caixa: DNS do domínio (MX/SPF/DKIM/DMARC/Spamhaus) + login no SMTP e no IMAP. */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function GET(request: Request) {
  if (!autorizaPainel(request)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  const caixas = listarCaixas();
  const porDominio = new Map<string, Promise<Checagem[]>>();
  const resultado = await Promise.all(
    caixas.map(async (c) => {
      const dominio = c.email.split("@")[1] ?? "";
      const relatorio = process.env.PROSPECCAO_DMARC_RUA || c.email;
      if (!porDominio.has(dominio)) {
        porDominio.set(
          dominio,
          checarDominio(dominio, relatorio).catch(() => [
            { id: "dns", rotulo: "DNS", estado: "atencao" as const, detalhe: "Não consegui consultar o DNS agora (rede). Tente de novo." }
          ])
        );
      }
      const [dns, smtp, imap] = await Promise.all([porDominio.get(dominio)!, testarSmtp(c), testarImap(c)]);
      return { caixa: publica(c), dns, smtp, imap };
    })
  );
  return NextResponse.json({ ok: true, caixas: resultado });
}
