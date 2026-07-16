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

type NavProps = {
  collapsible?: boolean;
};

export function Nav({ collapsible = false }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(collapsible);

  useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  const collapsed = collapsible && isCollapsed;

  return (
    <header className={`topbar${collapsed ? " topbar--collapsed" : ""}`}>
      <div className="site-shell">
        <nav className={`topbar__frame${isOpen ? " topbar__frame--open" : ""}`}>
          <a href="/" className="topbar__brand" aria-label="Ir para a pagina inicial" onClick={() => setIsOpen(false)}>
            <Image
              src="/logo-white.png"
              alt="Made by Felipe"
              width={154}
              height={28}
              priority
              className="topbar__logo"
            />
          </a>

          {collapsed ? (
            <button
              type="button"
              className="topbar__expandButton"
              aria-label="Expandir menu"
              onClick={() => setIsCollapsed(false)}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>
          ) : (
            <>
              <div className="topbar__links">
                {navigationLinks.map((link) => (
                  <a key={link.href} href={link.href} className="topbar__link">
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="topbar__actions">
                {collapsible && (
                  <button
                    type="button"
                    className="topbar__collapseButton"
                    aria-label="Recolher menu"
                    onClick={() => {
                      setIsOpen(false);
                      setIsCollapsed(true);
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 6 9 12 15 18" />
                    </svg>
                  </button>
                )}

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
            </>
          )}
        </nav>

        {!collapsed && (
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
        )}
      </div>
    </header>
  );
}
