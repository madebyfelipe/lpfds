"use client";

import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

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
          className="hub-header__logo hub-header__logo--light"
        />
        <Image
          src="/logo-white.png"
          alt=""
          aria-hidden="true"
          width={154}
          height={26}
          priority
          className="hub-header__logo hub-header__logo--dark"
        />
      </Link>

      <div className="hub-header__actions">
        <nav className="hub-header__nav">
          <Link href="/" className="hub-header__link">
            Site Principal
          </Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
