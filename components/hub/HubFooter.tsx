import Image from "next/image";

const Arrow = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const links = [
  { label: "Instagram", href: "https://www.instagram.com/madebyfelipe.com.br" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/madebyfelipe/" },
  { label: "Behance", href: "https://www.behance.net/madebyfelipe" },
  { label: "WhatsApp", href: "https://wa.me/5515992835226" },
  { label: "E-mail", href: "mailto:alo@madebyfelipe.com.br" },
];

export function HubFooter() {
  return (
    <footer id="contato" className="hub-footer">
      <div className="hub-footer__top">
        <Image
          src="/logo-white.png"
          alt="Made by Felipe"
          width={120}
          height={22}
          className="hub-footer__logo"
        />
        <span className="hub-footer__location">SOROCABA · SP</span>
      </div>

      <div className="hub-footer__links">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hub-footer__link"
          >
            {link.label}
            <span className="hub-footer__link-arrow">
              <Arrow />
            </span>
          </a>
        ))}
      </div>

      <div className="hub-footer__bottom">
        <span>FONTE · NEUE HAAS GROTESK</span>
        <span>© 2026 MADE BY FELIPE</span>
      </div>
    </footer>
  );
}
