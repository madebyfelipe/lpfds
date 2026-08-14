"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { InstThemeToggle } from "@/components/institucional/InstThemeToggle";

const links = [
  { href: "/", label: "Início" },
  { href: "/projetos", label: "Projetos" },
  { href: "/imersao", label: "Contato" }
];

export function InstNav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="inst-nav">
      <Link href="/" className="inst-nav__brand">
        Made by Felipe®
      </Link>
      <div className="inst-nav__links">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="inst-nav__link"
            aria-current={isActive(link.href) ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
        <InstThemeToggle />
      </div>
    </nav>
  );
}
