import "server-only";

/**
 * Saúde do domínio de envio — o equivalente à tela "conectar domínio" das
 * ferramentas de cold e-mail. Lê o DNS público e diz o que falta, já com o
 * registro pronto para colar no painel DNS da Hostinger.
 *
 * Estado em 16/10/2026 (madebyfelipe.com.br): MX Hostinger ok, SPF ok, DKIM
 * ok (hostingermail-a), DMARC `p=none` SEM relatório (rua) — é o que falta.
 */

export type Estado = "ok" | "atencao" | "falta";
export type Checagem = {
  id: string;
  rotulo: string;
  estado: Estado;
  detalhe: string;
  /** Registro sugerido para corrigir (quando há). */
  correcao?: { tipo: "TXT" | "CNAME" | "MX"; nome: string; valor: string };
};

const SELETORES_DKIM = (process.env.PROSPECCAO_DKIM_SELETORES || "hostingermail-a,hostingermail-b,hostingermail-c")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

/**
 * Consulta por DNS-over-HTTPS (Google, com Cloudflare de reserva) em vez do
 * resolvedor do sistema: dá a mesma resposta que o resto da internet vê, e
 * funciona em ambiente sem DNS próprio. Falha de rede ≠ registro ausente —
 * quando nenhum dos dois responde, a checagem lança e o painel diz isso.
 */
type Resposta = { Status: number; Answer?: Array<{ type: number; data: string }> };
const TIPOS = { A: 1, MX: 15, TXT: 16 } as const;

export async function doh(nome: string, tipo: keyof typeof TIPOS): Promise<string[]> {
  const urls = [
    `https://dns.google/resolve?name=${encodeURIComponent(nome)}&type=${tipo}`,
    `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(nome)}&type=${tipo}`
  ];
  for (const url of urls) {
    try {
      const res = await fetch(url, {
        headers: { accept: "application/dns-json" },
        signal: AbortSignal.timeout(6000),
        cache: "no-store"
      });
      if (!res.ok) continue;
      const json = (await res.json()) as Resposta;
      // 0 = NOERROR, 3 = NXDOMAIN (não existe — resposta válida, lista vazia).
      if (json.Status !== 0 && json.Status !== 3) continue;
      return (json.Answer ?? []).filter((a) => a.type === TIPOS[tipo]).map((a) => a.data);
    } catch {
      /* tenta o próximo */
    }
  }
  throw new Error("dns_indisponivel");
}

/** TXT vem entre aspas e às vezes partido em pedaços de 255 — junta. */
const txt = async (nome: string) =>
  (await doh(nome, "TXT")).map((d) => d.replace(/"\s*"/g, "").replace(/^"|"$/g, ""));

export async function checarDominio(dominio: string, emailRelatorio: string): Promise<Checagem[]> {
  const out: Checagem[] = [];
  const hostinger = true; // a caixa é Hostinger (MX mx1/mx2.hostinger.com)

  // MX — sem MX, resposta não chega e alguns filtros recusam o remetente.
  const mx = (await doh(dominio, "MX"))
    .map((d) => d.split(/\s+/))
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .map((p) => (p[1] ?? "").replace(/\.$/, ""));
  out.push(
    mx.length
      ? { id: "mx", rotulo: "MX (recebimento)", estado: "ok", detalhe: mx.join(", ") }
      : {
          id: "mx",
          rotulo: "MX (recebimento)",
          estado: "falta",
          detalhe: "Nenhum MX publicado — respostas não chegam.",
          correcao: { tipo: "MX", nome: "@", valor: "5 mx1.hostinger.com · 10 mx2.hostinger.com" }
        }
  );

  // SPF — um único v=spf1, autorizando o servidor que envia.
  const spfs = (await txt(dominio)).filter((t) => t.toLowerCase().startsWith("v=spf1"));
  const spfSugerido = "v=spf1 include:_spf.mail.hostinger.com ~all";
  if (spfs.length === 0) {
    out.push({
      id: "spf",
      rotulo: "SPF",
      estado: "falta",
      detalhe: "Sem SPF: o destinatário não sabe se a Hostinger pode enviar por este domínio.",
      correcao: { tipo: "TXT", nome: "@", valor: spfSugerido }
    });
  } else if (spfs.length > 1) {
    out.push({
      id: "spf",
      rotulo: "SPF",
      estado: "falta",
      detalhe: `${spfs.length} registros SPF — o padrão exige um só (os dois passam a falhar). Junte num registro.`,
      correcao: { tipo: "TXT", nome: "@", valor: spfSugerido }
    });
  } else if (hostinger && !/_spf\.mail\.hostinger\.com/.test(spfs[0])) {
    out.push({
      id: "spf",
      rotulo: "SPF",
      estado: "falta",
      detalhe: `SPF não inclui a Hostinger: ${spfs[0]}`,
      correcao: { tipo: "TXT", nome: "@", valor: spfs[0].replace(/\s[~\-?+]all/, " include:_spf.mail.hostinger.com$&") }
    });
  } else {
    out.push({ id: "spf", rotulo: "SPF", estado: "ok", detalhe: spfs[0] });
  }

  // DKIM — ao menos um seletor com chave publicada.
  const chaves: string[] = [];
  for (const sel of SELETORES_DKIM) {
    const reg = (await txt(`${sel}._domainkey.${dominio}`)).find((t) => /v=dkim1/i.test(t));
    if (reg && /p=[A-Za-z0-9+/]{40,}/.test(reg)) chaves.push(sel);
  }
  out.push(
    chaves.length
      ? { id: "dkim", rotulo: "DKIM (assinatura)", estado: "ok", detalhe: `Chave ativa em: ${chaves.join(", ")}` }
      : {
          id: "dkim",
          rotulo: "DKIM (assinatura)",
          estado: "falta",
          detalhe:
            "Nenhuma chave DKIM encontrada. Na Hostinger: E-mails → Configurações de DNS → ativar DKIM (cria os CNAMEs hostingermail-a/b/c).",
          correcao: {
            tipo: "CNAME",
            nome: "hostingermail-a._domainkey",
            valor: "hostingermail-a.dkim.mail.hostinger.com"
          }
        }
  );

  // DMARC — existe, tem relatório, e a política sobe com o tempo.
  const dmarc = (await txt(`_dmarc.${dominio}`)).find((t) => /^v=dmarc1/i.test(t));
  const dmarcSugerido = `v=DMARC1; p=none; rua=mailto:${emailRelatorio}; fo=1; adkim=r; aspf=r; pct=100`;
  if (!dmarc) {
    out.push({
      id: "dmarc",
      rotulo: "DMARC",
      estado: "falta",
      detalhe: "Sem DMARC. Desde 2024 o Gmail e o Yahoo exigem DMARC de quem envia volume.",
      correcao: { tipo: "TXT", nome: "_dmarc", valor: dmarcSugerido }
    });
  } else {
    const p = /;\s*p=(\w+)/i.exec(dmarc)?.[1]?.toLowerCase() ?? "none";
    const rua = /rua=/i.test(dmarc);
    if (!rua) {
      out.push({
        id: "dmarc",
        rotulo: "DMARC",
        estado: "atencao",
        detalhe: `Publicado (${dmarc}), mas sem rua: ninguém recebe o relatório de quem está falhando a autenticação.`,
        correcao: { tipo: "TXT", nome: "_dmarc", valor: dmarcSugerido }
      });
    } else if (p === "none") {
      out.push({
        id: "dmarc",
        rotulo: "DMARC",
        estado: "atencao",
        detalhe: `p=none com relatório — ok para começar. Depois de 2–4 semanas de relatórios limpos, suba para p=quarantine.`,
        correcao: { tipo: "TXT", nome: "_dmarc", valor: dmarc.replace(/p=none/i, "p=quarantine") }
      });
    } else {
      out.push({ id: "dmarc", rotulo: "DMARC", estado: "ok", detalhe: dmarc });
    }
  }

  // Lista de bloqueio (Spamhaus DBL). Resolver público pode ser recusado
  // (127.255.255.x) — aí o painel diz que não deu para verificar.
  const r = await doh(`${dominio}.dbl.spamhaus.org`, "A").catch(() => null);
  if (r === null) {
    out.push({ id: "dbl", rotulo: "Lista de bloqueio", estado: "atencao", detalhe: "Não deu para consultar — conferir em check.spamhaus.org." });
  } else if (r.length) {
    const recusado = r.every((ip) => ip.startsWith("127.255.255."));
    out.push(
      recusado
        ? { id: "dbl", rotulo: "Lista de bloqueio", estado: "atencao", detalhe: "Spamhaus recusou a consulta deste servidor — conferir em check.spamhaus.org." }
        : { id: "dbl", rotulo: "Lista de bloqueio", estado: "falta", detalhe: `Domínio listado no Spamhaus DBL (${r.join(", ")}). Pare os envios.` }
    );
  } else {
    out.push({ id: "dbl", rotulo: "Lista de bloqueio", estado: "ok", detalhe: "Fora do Spamhaus DBL." });
  }

  return out;
}

/**
 * O domínio do destinatário recebe e-mail? Sem MX (nem A, o fallback do SMTP)
 * o envio é bounce certo — e bounce é o que mais derruba a reputação da caixa.
 * É a verificação barata que dá para fazer sem sondar o servidor de lá (a
 * Vercel não abre a porta 25). Falha de rede = `null` (não sabe), não recusa.
 */
const cacheMx = new Map<string, boolean>();

export async function dominioRecebeEmail(dominio: string): Promise<boolean | null> {
  const d = dominio.toLowerCase();
  if (cacheMx.has(d)) return cacheMx.get(d)!;
  try {
    const mx = await doh(d, "MX");
    // MX "0 ." (RFC 7505) = o domínio declara que não recebe e-mail.
    const valido = mx.some((r) => !/^0\s+\.$/.test(r.trim()));
    const ok = valido || (mx.length === 0 && (await doh(d, "A")).length > 0);
    cacheMx.set(d, ok);
    return ok;
  } catch {
    return null;
  }
}
