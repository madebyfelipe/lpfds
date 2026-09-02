"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { InstThemeToggle } from "@/components/institucional/InstThemeToggle";

const links = [
  { href: "/", label: "Início" },
  { href: "/metodologia", label: "Método" },
  { href: "/projetos", label: "Projetos" },
  { href: "/imersao", label: "Contato" }
];

export function InstNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Navegar fecha o menu (o link pode apontar para a própria página).
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Esc fecha; o burguer só existe no mobile, então não travamos o scroll.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav className="inst-nav" data-open={open ? "true" : undefined}>
      <Link href="/" className="inst-nav__brand">
        Made by Felipe®
      </Link>

      <div className="inst-nav__links" id="inst-nav-menu">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="inst-nav__link"
            aria-current={isActive(link.href) ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="inst-nav__end">
        <InstThemeToggle />
        <button
          type="button"
          className="inst-nav__burger"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="inst-nav-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="inst-nav__burger-bar" />
          <span className="inst-nav__burger-bar" />
          <span className="inst-nav__burger-bar" />
        </button>
      </div>
    </nav>
  );
}
