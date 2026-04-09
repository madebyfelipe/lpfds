import Image from "next/image";
import { navigationLinks } from "@/lib/data";

export function Nav() {
  return (
    <header className="topbar">
      <div className="site-shell">
        <nav className="topbar__frame">
          <a href="#" className="topbar__brand" aria-label="Ir para o topo da página">
            <Image
              src="/logo-white.png"
              alt="Made by Felipe"
              width={154}
              height={28}
              priority
              className="topbar__logo"
            />
          </a>

          <div className="topbar__links">
            {navigationLinks.map((link) => (
              <a key={link.href} href={link.href} className="topbar__link">
                {link.label}
              </a>
            ))}
          </div>

          <a href="#agendar" className="button topbar__cta">
            Agendar conversa
          </a>
        </nav>
      </div>
    </header>
  );
}
