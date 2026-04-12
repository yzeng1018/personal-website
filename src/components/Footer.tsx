const socialLinks = [
  { label: "X", href: "https://x.com/hitchbull" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yan-zeng-90a12a15/" },
  { label: "GitHub", href: "https://github.com/yzeng1018" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span className="footer-name">
          <span className="footer-name-zh">曾言</span>
          {" "}Samuel Zeng
        </span>

        <div className="footer-links">
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .site-footer {
          border-top: 1px solid var(--border);
          margin-top: auto;
        }
        .footer-inner {
          max-width: var(--max-page);
          margin: 0 auto;
          padding: 24px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .footer-name {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--muted);
          letter-spacing: 0.04em;
        }
        .footer-name-zh {
          font-family: var(--font-serif);
          font-style: italic;
        }
        .footer-links {
          display: flex;
          gap: 20px;
        }
        .footer-link {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--muted);
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: color 150ms ease;
        }
        .footer-link:hover {
          color: var(--text);
        }
        @media (max-width: 480px) {
          .footer-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>
    </footer>
  );
}
