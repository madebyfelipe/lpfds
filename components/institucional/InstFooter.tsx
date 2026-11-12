import Link from "next/link";
import { agenda, social } from "@/lib/institucional";
import { CONTATO_EMAIL, empresa, paginasLegais } from "@/lib/legal";
import { FooterRelogio, FooterTopo } from "./FooterExtras";

/**
 * Rodapé no padrão do Mammut Studios: selo de agenda, contato em tipo grande,
 * fileira de apoio e o nome da marca ocupando a largura inteira. O selo usa
 * `agenda.numProjetos`, a mesma fonte da faixa "Agenda" da home — nada de
 * número solto aqui.
 */
export function InstFooter() {
  return (
    <footer className="inst-footer">
      <div className="inst-footer__inner">
        <p className="inst-footer__badge">
          <span className="inst-footer__pill">
            {agenda.numProjetos} projetos por trimestre
          </span>
          Consulte a disponibilidade da próxima imersão
        </p>

        <a className="inst-footer__mail" href={`mailto:${CONTATO_EMAIL}`}>
          {CONTATO_EMAIL}
        </a>

        <div className="inst-footer__meta">
          <p className="inst-footer__where">
            Sorocaba/Brasil <FooterRelogio />
          </p>
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
          <FooterTopo />
        </div>

        {/* Segunda fileira: obrigações legais + copyright. Separada da social
            para não competir com ela, mas presente em toda página do site. */}
        <div className="inst-footer__legal">
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
            {empresa.cnpj ? ` — CNPJ ${empresa.cnpj}` : ""}
          </p>
        </div>

        {/* Decorativo: o nome já está no copyright; lido de novo seria ruído. */}
        <p className="inst-footer__mark" aria-hidden="true">
          Made by Felipe
        </p>
      </div>
    </footer>
  );
}
