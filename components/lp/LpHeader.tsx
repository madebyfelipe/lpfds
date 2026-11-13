import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/legal";

/** Cabeçalho mínimo das LPs: marca, WhatsApp e o atalho para o quiz. */
export function LpHeader() {
  return (
    <header className="lp-head">
      <a href="#conteudo" className="inst-skip">
        Pular para o conteúdo
      </a>
      <Link href="/" className="lp-head__brand">
        Made by Felipe®
      </Link>
      <div className="lp-head__end">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="lp-head__wa">
          WhatsApp
        </a>
        <a href="#quiz" className="lp-head__cta">
          Começar <span aria-hidden="true">→</span>
        </a>
      </div>
    </header>
  );
}
