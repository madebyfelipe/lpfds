import Link from "next/link";
import { social } from "@/lib/institucional";
import { empresa, paginasLegais } from "@/lib/legal";

export function InstFooter() {
  return (
    <footer className="inst-footer">
      <div className="inst-footer__inner">
        <div className="inst-footer__links">
          {social.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inst-footer__link"
            >
              {item.label}
            </a>
          ))}
          {/* Backlink para o hub de links, que segue no ar como está. */}
          <Link href="/hub" className="inst-footer__link">
            Hub
          </Link>
        </div>
        {/* Segunda fileira: obrigações legais. Separada da social para não
            competir com ela, mas presente em toda página do site. */}
        <div className="inst-footer__links inst-footer__links--legal">
          {paginasLegais.map((pagina) => (
            <Link
              key={pagina.href}
              href={pagina.href}
              className="inst-footer__link inst-footer__link--legal"
            >
              {pagina.label}
            </Link>
          ))}
        </div>

        <p className="inst-footer__copy">
          © {new Date().getFullYear()} {empresa.nomeFantasia}
          {empresa.cnpj ? ` — CNPJ ${empresa.cnpj}` : ""} — Sorocaba/Brasil
        </p>
      </div>
    </footer>
  );
}
