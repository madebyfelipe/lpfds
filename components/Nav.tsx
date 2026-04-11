"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MotionLink } from "@/components/MotionLink";

function trackSchedule() {
  if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
    (window as any).fbq("track", "Schedule");
  }
}
import { navigationLinks } from "@/lib/data";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <header className="topbar">
      <div className="site-shell">
        <nav className={`topbar__frame${isOpen ? " topbar__frame--open" : ""}`}>
          <a href="#" className="topbar__brand" aria-label="Ir para o topo da pagina" onClick={() => setIsOpen(false)}>
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

          <div className="topbar__actions">
            <MotionLink
              href="https://cal.com/madebyfelipe/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="button topbar__cta"
              onClick={trackSchedule}
            >
              Agendar conversa
            </MotionLink>

            <button
              type="button"
              className={`topbar__menuButton${isOpen ? " topbar__menuButton--open" : ""}`}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setIsOpen((current) => !current)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>

        <div id="mobile-menu" className={`topbar__mobilePanel${isOpen ? " topbar__mobilePanel--open" : ""}`}>
          <div className="topbar__mobileLinks">
            {navigationLinks.map((link) => (
              <a key={link.href} href={link.href} className="topbar__mobileLink" onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>

          <MotionLink
            href="https://cal.com/madebyfelipe/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="button button--primary topbar__mobileCta"
            onClick={trackSchedule}
          >
            Agendar conversa gratuita
          </MotionLink>
        </div>
      </div>
    </header>
  );
}
