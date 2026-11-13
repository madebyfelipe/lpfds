import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/legal";

/**
 * Cabeçalho mínimo das LPs de captação (/lp/marca, /lp/site): sem o menu do
 * InstNav — tráfego pago não deve ter para onde sair além do form ou do
 * WhatsApp. Só a marca (volta para a home) e um atalho de contato.
 */
export function LpHeader() {
  return (
    <header className="lp-header">
      <Link href="/" className="lp-header__brand">
        Made by Felipe
      </Link>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="lp-header__cta">
        Falar no WhatsApp
      </a>
    </header>
  );
}
