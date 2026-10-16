import "server-only";
import { dominioRecebeEmail } from "./dominio";
import { DOMINIOS_WEBMAIL, bloqueado, conhecidos, lerBloqueios, type NovoLead } from "./twenty";

export type Triagem = { email: string; motivo: string };

/**
 * Dedup + bloqueio + MX, compartilhado com a importação do painel. Devolve os
 * que podem entrar; os outros vão para `ignorados` com o motivo.
 */
export async function triar(candidatos: NovoLead[], ignorados: Triagem[]): Promise<NovoLead[]> {
  const [base, bloqueios] = await Promise.all([conhecidos(), lerBloqueios()]);
  const emails = new Set(base.emails);
  const dominios = new Set(base.dominios);
  const out: NovoLead[] = [];
  for (const lead of candidatos) {
    const dom = lead.email.split("@")[1] ?? "";
    if (emails.has(lead.email)) {
      ignorados.push({ email: lead.email, motivo: "email_no_crm" });
      continue;
    }
    if (!DOMINIOS_WEBMAIL.has(dom) && dominios.has(dom)) {
      ignorados.push({ email: lead.email, motivo: "dominio_no_crm" });
      continue;
    }
    if (bloqueado(lead.email, bloqueios)) {
      ignorados.push({ email: lead.email, motivo: "bloqueado" });
      continue;
    }
    if ((await dominioRecebeEmail(dom)) === false) {
      ignorados.push({ email: lead.email, motivo: "dominio_sem_mx" });
      continue;
    }
    out.push(lead);
    // Vale para o resto do lote também (dois e-mails da mesma clínica).
    emails.add(lead.email);
    if (!DOMINIOS_WEBMAIL.has(dom)) dominios.add(dom);
  }
  return out;
}
