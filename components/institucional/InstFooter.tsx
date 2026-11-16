import Link from "next/link";
import { EMAIL, social } from "@/lib/institucional";
import { empresa, paginasLegais } from "@/lib/legal";
import { ScheduleLink } from "@/components/ScheduleLink";
import { FooterFx, FooterRelogio, FooterTopo } from "./FooterExtras";
import { UI, type Locale } from "@/lib/i18n";

const TEXTO = {
  pt: {
    nav: [...UI.pt.links, { href: "/hub", label: "Hub" }],
    navegacao: "Navegação",
    estudio: "(Estúdio)",
    endereco: "Sorocaba (SP), Brasil.",
    redes: "(Redes)",
    legal: "(Legal)",
    imagens: "Imagens de banco:",
    agitar: "Segure para agitar",
    tese: "『Branding é tradução, não invenção.』"
  },
  en: {
    nav: [...UI.en.links],
    navegacao: "Navigation",
    estudio: "(Studio)",
    endereco: "Remote, based in São Paulo, Brazil.",
    redes: "(Social)",
    legal: "(Legal · in Portuguese)",
    imagens: "Stock images:",
    agitar: "Hold to shake",
    tese: "『Branding is translation, not invention.』"
  }
} as const;

/**
 * Rodapé no padrão do Monolog: navegação em tipo grande, dados do estúdio,
 * redes e links legais; fileira de baixo com hora de Sorocaba, voltar ao topo
 * e copyright; e a faixa de meio-tom animada (canvas) que entra por baixo com
 * parallax. A linha legal (CNPJ + páginas legais) é obrigatória em toda página.
 */
export function InstFooter({ locale = "pt" }: { locale?: Locale } = {}) {
  const t = TEXTO[locale];
  return (
    <footer className="inst-footer mfoot" data-footer-parallax>
      <div className="mfoot__wrap" data-footer-inner>
        <div className="mfoot__top">
          <div className="mfoot__nav-col">
            <div className="meyebrow">
              <span className="meyebrow__marker" aria-hidden="true" />
              <p className="meyebrow__text">{t.navegacao}</p>
            </div>
            <ul className="mfoot__nav">
              {t.nav.map((item) => (
                <li key={item.href} className="mfoot__nav-li">
                  <Link href={item.href} className="mfoot__nav-link">
                    <span className="mfoot__nav-text">{item.label}</span>
                    <span className="mfoot__nav-arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              ))}
              <li className="mfoot__nav-li">
                <ScheduleLink className="mfoot__nav-link">
                  <span className="mfoot__nav-text">{UI[locale].conversar15}</span>
                  <span className="mfoot__nav-arrow" aria-hidden="true">
                    →
                  </span>
                </ScheduleLink>
              </li>
            </ul>
          </div>

          <div className="mfoot__aside">
            <div className="mfoot__details">
              <p className="mfoot__label mmono">{t.estudio}</p>
              <a href={`mailto:${EMAIL}`} className="mfoot__email">
                ⮡ {EMAIL}
              </a>
              <p className="mfoot__address">
                {t.endereco}
                {empresa.cnpj ? (
                  <>
                    <br />
                    CNPJ {empresa.cnpj}
                  </>
                ) : null}
              </p>
            </div>
            <div className="mfoot__details">
              <p className="mfoot__label mmono">{t.redes}</p>
              <ul className="mfoot__socials">
                {social.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="mfoot__social">
                      {item.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mfoot__details">
              <p className="mfoot__label mmono">{t.legal}</p>
              <ul className="mfoot__legal">
                {paginasLegais.map((pagina) => (
                  <li key={pagina.href}>
                    <Link href={pagina.href} className="mfoot__legal-link">
                      {pagina.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mfoot__credit mmono">
                {t.imagens}{" "}
                <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer">
                  Freepik
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mfoot__bottom mgrid">
          <p className="mfoot__time">
            <FooterRelogio />
          </p>
          <div className="mfoot__totop">
            <FooterTopo />
          </div>
          <p className="mfoot__brand">
            © {new Date().getFullYear()} {empresa.nomeFantasia}
          </p>
        </div>

        {/* Decorativo: o nome já está no copyright; lido de novo seria ruído. */}
        <p className="mfoot__mark" aria-hidden="true">
          Made by Felipe
        </p>
      </div>
      <div className="mfoot__dark" data-footer-dark aria-hidden="true" />
      <div
        className="mfoot__canvas-wrap"
        data-footer-canvas
        data-cursor-hover
        data-cursor-label={t.agitar}
        aria-hidden="true"
      >
        <canvas className="mfoot__canvas" />
        <div className="mfoot__canvas-content">
          <span className="mfoot__canvas-logo" data-canvas-content="left">
            Made by Felipe®
          </span>
          <span className="mfoot__canvas-text" data-canvas-content="right">
            {t.tese}
          </span>
        </div>
      </div>
      <FooterFx />
    </footer>
  );
}
