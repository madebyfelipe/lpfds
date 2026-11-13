import Link from "next/link";
import { empresa } from "@/lib/legal";

/**
 * Rodapé mínimo das LPs de captação — só o que é obrigatório (identificação
 * da empresa, link para a política) e nada de navegação para o resto do
 * site. InstFooter completo fica fora de propósito, igual ao cabeçalho.
 */
export function LpFooter() {
  return (
    <footer className="lp-footer">
      <p className="lp-footer__empresa">
        {empresa.nomeFantasia}
        {empresa.cnpj && ` — CNPJ ${empresa.cnpj}`}
      </p>
      <nav className="lp-footer__links" aria-label="Legal">
        <Link href="/privacidade" className="inst-link">
          Privacidade
        </Link>
        <Link href="/termos" className="inst-link">
          Termos
        </Link>
      </nav>
    </footer>
  );
}
