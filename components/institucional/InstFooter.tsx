import Link from "next/link";
import { social } from "@/lib/institucional";

export function InstFooter() {
  return (
    <footer className="inst-footer">
      <div className="inst-footer__inner">
        <div className="inst-footer__links">
          {social.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inst-footer__link"
            >
              {item.label}
            </a>
          ))}
          {/* Backlink para o hub de links, que segue no ar como está. */}
          <Link href="/hub" className="inst-footer__link">
            Hub
          </Link>
        </div>
        <p className="inst-footer__copy">
          © {new Date().getFullYear()} Made by Felipe — Sorocaba/Brasil
        </p>
      </div>
    </footer>
  );
}
