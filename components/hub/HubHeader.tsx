"use client";

import Image from "next/image";
import Link from "next/link";

export function HubHeader() {
  return (
    <header className="hub-header">
      <Link href="/" aria-label="Made by Felipe — Home" className="hub-header__logo-link">
        <Image
          src="/logo-black.png"
          alt="Made by Felipe"
          width={154}
          height={26}
          priority
          className="hub-header__logo"
        />
      </Link>

      <nav className="hub-header__nav">
        <Link href="/" className="hub-header__link">
          Site Principal
        </Link>
      </nav>
    </header>
  );
}
