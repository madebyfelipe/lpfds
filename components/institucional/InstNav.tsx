"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ScheduleLink } from "@/components/ScheduleLink";
import { InstThemeToggle } from "@/components/institucional/InstThemeToggle";
import { SoundToggle } from "@/components/institucional/UiSound";
import { MButtonInner } from "@/components/institucional/home/MButton";
import { UI, localeDoPath } from "@/lib/i18n";

/**
 * Nav no padrão do Monolog. Na home ela é fixa e transparente e troca de
 * tinta conforme a seção que passa sob ela (`data-theme-section` →
 * `data-theme-nav`). Nas outras páginas não há seções marcadas: ela vira
 * barra sólida, sticky, na cor da página. No mobile os links saem da barra e
 * vão para o painel aberto pelo botão "Menu".
 */
export function InstNav() {
  const pathname = usePathname();
  const locale = localeDoPath(pathname);
  const t = UI[locale];
  const links = t.links;
  const home = links[0].href;
  const overlay = pathname === home;
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const navRef = useRef<HTMLElement>(null);

  const isActive = (href: string) => (href === home ? pathname === home : pathname.startsWith(href));

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!overlay) return;
    const update = () => {
      const mid = (navRef.current?.offsetHeight ?? 80) / 2;
      for (const section of document.querySelectorAll<HTMLElement>("[data-theme-section]")) {
        const r = section.getBoundingClientRect();
        if (r.top <= mid && r.bottom >= mid) {
          setTheme(section.dataset.themeSection === "dark" ? "dark" : "light");
          return;
        }
      }
      setTheme("dark");
    };
    update();
    addEventListener("scroll", update, { passive: true });
    addEventListener("resize", update);
    return () => {
      removeEventListener("scroll", update);
      removeEventListener("resize", update);
    };
  }, [overlay, pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      ref={navRef}
      className="inst-nav mnav"
      data-overlay={overlay || undefined}
      data-theme-nav={overlay ? theme : undefined}
      data-open={open || undefined}
    >
      <a href="#conteudo" className="inst-skip">
        {t.pular}
      </a>
      <div className="mnav__contain mgrid">
        <div className="mnav__clip mnav__home-wrap">
          <Link href={home} className="mnav__home" data-nav-intro>
            Made by Felipe®
          </Link>
        </div>
        <nav className="mnav__links" aria-label={t.navPrincipal}>
          <ul className="mnav__ul">
            {links.map((link) => (
              <li key={link.href} className="mnav__li mnav__clip">
                <Link
                  href={link.href}
                  className="mnav__link"
                  data-nav-intro
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mnav__cta mnav__clip">
          <div className="mnav__square" data-nav-intro>
            <SoundToggle />
          </div>
          <div className="mnav__square" data-nav-intro>
            <InstThemeToggle />
          </div>
          <div className="mnav__cta-btn" data-nav-intro>
            <ScheduleLink className="mbtn">
              <MButtonInner>{t.conversar}</MButtonInner>
            </ScheduleLink>
          </div>
          <button
            type="button"
            className="mnav__menu-btn"
            aria-expanded={open}
            aria-controls="mnav-menu"
            onClick={() => setOpen((v) => !v)}
            data-nav-intro
          >
            <span className="mnav__menu-span">{t.menu}</span>
            <span className="mnav__menu-span is-close" aria-hidden="true">
              {t.fechar}
            </span>
            <span className="sr-only">{open ? t.fecharMenu : t.abrirMenu}</span>
          </button>
        </div>
      </div>

      <div className="mnav__menu" id="mnav-menu" inert={!open}>
        <ul className="mnav__menu-ul">
          {links.map((link) => (
            <li key={link.href} className="mnav__menu-li">
              <Link href={link.href} className="mnav__menu-link" onClick={() => setOpen(false)}>
                <span>{link.label}</span>
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
          <li className="mnav__menu-li">
            <ScheduleLink className="mnav__menu-link">
              <span>{t.conversar15}</span>
              <span aria-hidden="true">↗</span>
            </ScheduleLink>
          </li>
        </ul>
      </div>
      <button
        type="button"
        className="mnav__scrim"
        tabIndex={-1}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />
    </header>
  );
}
