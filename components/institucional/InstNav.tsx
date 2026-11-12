"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ScheduleLink } from "@/components/ScheduleLink";
import { InstThemeToggle } from "@/components/institucional/InstThemeToggle";

const links = [
  { href: "/", label: "Início" },
  { href: "/metodologia", label: "Método" },
  { href: "/blog", label: "Blog" },
  { href: "/imersao", label: "Imersão" }
];

export function InstNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // Na home a nav fica transparente por cima do hero escuro (#inicio), como
  // no Monolog. Começa ligada já no HTML do servidor para não piscar a barra
  // clara no primeiro paint; o observer desliga quando o hero sai de baixo.
  const [overHero, setOverHero] = useState(pathname === "/");
  const navRef = useRef<HTMLElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Navegar fecha o menu (o link pode apontar para a própria página).
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const hero = pathname === "/" ? document.getElementById("inicio") : null;
    if (!hero || !navRef.current) {
      setOverHero(false);
      return;
    }
    const navHeight = navRef.current.offsetHeight;
    const observer = new IntersectionObserver(
      ([entry]) => setOverHero(entry.isIntersecting),
      { rootMargin: `-${navHeight}px 0px 0px 0px` }
    );
    observer.observe(hero);
    return () => observer.disconnect();
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
    <nav
      ref={navRef}
      className="inst-nav"
      data-open={open ? "true" : undefined}
      data-hero={overHero ? "true" : undefined}
    >
      {/* Primeiro ponto de parada do Tab em toda página que tem a nav: sem
          ele, quem navega por teclado atravessa o menu inteiro a cada troca
          de página antes de chegar ao conteúdo. Fica invisível até receber
          foco (regra .inst-skip). */}
      <a href="#conteudo" className="inst-skip">
        Pular para o conteúdo
      </a>

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
        <ScheduleLink className="inst-nav__cta">
          Conversar
          <span className="inst-nav__cta-arrow" aria-hidden="true">
            ↗
          </span>
        </ScheduleLink>
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
