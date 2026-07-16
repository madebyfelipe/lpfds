"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MotionLink } from "@/components/MotionLink";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navigationLinks } from "@/lib/data";

function trackSchedule() {
  if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
    (window as any).fbq("track", "Schedule");
  }
}

type NavProps = {
  collapsible?: boolean;
  theme?: "light" | "dark";
};

export function Nav({ collapsible = false, theme = "light" }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <header className={`topbar topbar--${theme}`}>
      <nav className={`topbar__frame${isOpen ? " topbar__frame--open" : ""}`}>
        {/* Logo (Left-aligned) */}
        <a href="/" className="topbar__brand" aria-label="Ir para a página inicial" onClick={() => setIsOpen(false)}>
          <Image
            src="/logo-black.png"
            alt="Made by Felipe"
            width={198}
            height={36}
            priority
            className="topbar__logo topbar__logo--light"
          />
          <Image
            src="/logo-white.png"
            alt=""
            aria-hidden="true"
            width={198}
            height={36}
            priority
            className="topbar__logo topbar__logo--dark"
          />
        </a>

        {/* Menu Container (Right-aligned) */}
        <div className="topbar__menu-container">
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
              className="topbar__cta"
              onClick={trackSchedule}
            >
              Agendar projeto
            </MotionLink>

            <ThemeToggle />

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
          className="topbar__mobileLink topbar__mobileLink--cta"
          onClick={trackSchedule}
        >
          Agendar conversa gratuita
        </MotionLink>
      </div>
    </header>
  );
}
