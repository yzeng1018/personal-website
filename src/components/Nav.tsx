"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks: { href: "/writing" | "/projects" | "/about" | "/now"; label: string }[] = [
  { href: "/writing", label: "Writing" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/now", label: "Now" },
];

export default function Nav() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const resolved = stored ?? (prefersDark ? "dark" : "light");
    setTheme(resolved);
    document.documentElement.setAttribute("data-theme", resolved);
    setMounted(true);
  }, []);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  }

  return (
    <header className="nav-header">
      <div className="nav-inner">
        <Link href="/" className="nav-brand">
          <span className="nav-brand-zh">曾言</span>
          Samuel Zeng
        </Link>

        <div className="nav-right">
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

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "light" ? "切换深色模式" : "切换浅色模式"}
            style={{ opacity: mounted ? 1 : 0 }}
          >
            {theme === "light" ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            )}
          </button>
        </div>
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
        .nav-right {
          display: flex;
          align-items: center;
          gap: 20px;
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
        .theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border: none;
          background: none;
          cursor: pointer;
          color: var(--muted);
          border-radius: 4px;
          transition: color 150ms ease, opacity 200ms ease;
          padding: 0;
          flex-shrink: 0;
        }
        .theme-toggle:hover {
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
