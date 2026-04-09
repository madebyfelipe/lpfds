import Image from "next/image";
import { navigationLinks } from "@/lib/data";

const contacts = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "WhatsApp", href: "https://wa.me/" },
  { label: "Email", href: "mailto:contato@madebyfelipe.com" }
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="site-shell">
        <div className="footer__grid">
          <div>
            <Image
              src="/logo-white.png"
              alt="Made by Felipe"
              width={154}
              height={28}
              className="footer__logo"
            />
            <p className="footer__description">
              Branding + Social Media Estratégico pra profissionais e escritórios que precisam ser
              percebidos à altura do que entregam.
            </p>
          </div>

          <div>
            <p className="footer__heading">Navegação</p>
            <div className="footer__links">
              {navigationLinks.map((link) => (
                <a key={link.href} href={link.href} className="footer__link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="footer__heading">Contato</p>
            <div className="footer__links">
              {contacts.map((contact) => (
                <a key={contact.label} href={contact.href} className="footer__link">
                  {contact.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">Made by Felipe © 2026 — São Paulo, SP</div>
      </div>
    </footer>
  );
}
