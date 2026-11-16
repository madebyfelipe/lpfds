import { LpFooter } from "@/components/lp/LpFooter";
import { LpHeader } from "@/components/lp/LpHeader";
import "../institucional.css";
import "../monolog.css";
import "./lp.css";

/**
 * Casca das LPs de captação (/lp/marca, /lp/site). Fora do route group
 * institucional de propósito: quem chega por anúncio não tem menu para sair —
 * só o quiz, o WhatsApp e os links legais do rodapé. Usa os tokens do site
 * (`.inst` declara a paleta e a tipografia) com o CSS próprio em lp.css.
 */
export default function LpLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="inst lp">
      <LpHeader />
      {children}
      <LpFooter />
      <div className="mgrain" aria-hidden="true" />
    </div>
  );
}
