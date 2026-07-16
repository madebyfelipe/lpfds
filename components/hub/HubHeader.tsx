"use client";

import Image from "next/image";

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Newsletter", href: "#newsletter" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function HubHeader() {
  return (
    <header className="hub-header">
      <a href="/hub" aria-label="Ir para o hub">
        <Image
          src="/logo-white.png"
          alt="Made by Felipe"
          width={154}
          height={26}
          priority
          className="hub-header__logo"
        />
      </a>

      <nav className="hub-header__nav">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="hub-header__pill">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
