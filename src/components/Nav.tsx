"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks: { href: "/writing" | "/projects" | "/about" | "/now"; label: string }[] = [
  { href: "/writing", label: "写作" },
  { href: "/projects", label: "项目" },
  { href: "/about", label: "关于" },
  { href: "/now", label: "现在" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="nav-header">
      <div className="nav-inner">
        <Link href="/" className="nav-brand">
          <span className="nav-brand-zh">曾言</span>
          Zeng Yan
        </Link>

        <nav>
          <ul className="nav-links">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-link${pathname === href || pathname.startsWith(href + "/") ? " nav-link--active" : ""}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <style>{`
        .nav-header {
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid var(--border);
          background-color: var(--bg);
          transition: background-color 200ms ease;
        }
        .nav-inner {
          max-width: var(--max-page);
          margin: 0 auto;
          padding: 0 24px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-brand {
          font-family: var(--font-serif);
          font-size: 15px;
          color: var(--text);
          text-decoration: none;
          letter-spacing: -0.01em;
        }
        .nav-brand-zh {
          color: var(--muted);
          margin-right: 6px;
          font-style: italic;
        }
        .nav-links {
          display: flex;
          gap: 28px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-link {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 400;
          color: var(--muted);
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: color 150ms ease;
        }
        .nav-link:hover,
        .nav-link--active {
          color: var(--text);
        }
        @media (max-width: 480px) {
          .nav-links { gap: 16px; }
          .nav-link { font-size: 12px; }
        }
      `}</style>
    </header>
  );
}
