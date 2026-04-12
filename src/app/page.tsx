import Nav from "@/components/Nav";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 4);
  return (
    <>
      <Nav />
      <main className="home-main">
        {/* Hero */}
        <section className="hero">
          <h1 className="hero-name">
            <span className="hero-name-zh">曾言</span>
            {" / "}
            <span className="hero-name-en">Samuel Zeng</span>
          </h1>

          <p className="hero-bio">
            Product Director. Math PhD. I&rsquo;ve spent 10+ years building
            consumer products at scale — ride-hailing in Latin America,
            short video in Brazil, flight booking across Europe and China.
          </p>

          <p className="hero-bio" style={{ marginTop: "12px" }}>
            I think in systems. Math trained me to find the simplest model
            that explains the most.{" "}
            <Link href="/writing" className="hero-link">
              Products are just models with users.
            </Link>
          </p>

          <div className="hero-now">
            <span className="now-dot" aria-hidden="true" />
            <span>
              Now: CPO of{" "}
              <a
                href="https://www.travix.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-link"
              >
                Travix
              </a>
              {" "}(Trip.com Group), leading AI-native flight booking in Europe
            </span>
          </div>
        </section>

        {/* Divider */}
        <hr className="section-hr" />

        {/* Recent Writing */}
        <section className="writing-section">
          <p className="section-label">Recent Writing</p>

          {recentPosts.length > 0 ? (
            <ul className="writing-list">
              {recentPosts.map((post) => (
                <li key={post.slug} className="writing-item">
                  <Link
                    href={`/writing/${post.slug}`}
                    className="writing-title"
                  >
                    {post.title}
                  </Link>
                  <span className="writing-date">{post.date}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ color: "var(--muted)", fontSize: "14px", fontFamily: "var(--font-mono)" }}>
              Essays coming soon.
            </p>
          )}

          <div className="writing-all-link">
            <Link href="/writing" className="view-all">
              All writing →
            </Link>
          </div>
        </section>
      </main>

      <style>{`
        .home-main {
          max-width: var(--max-prose);
          margin: 0 auto;
          padding: 80px 24px 120px;
        }

        /* Hero */
        .hero { margin-bottom: 0; }

        .hero-name {
          font-family: var(--font-serif);
          font-size: clamp(2.25rem, 5vw, 3.25rem);
          font-weight: 400;
          letter-spacing: -0.025em;
          line-height: 1.1;
          margin-bottom: 28px;
          color: var(--text);
        }

        .hero-name-zh {
          font-style: italic;
          color: var(--muted);
        }

        .hero-bio {
          font-family: var(--font-sans);
          font-size: 17px;
          line-height: 1.7;
          color: var(--text);
          margin: 0;
        }

        .hero-link {
          color: var(--accent);
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-color: transparent;
          transition: text-decoration-color 150ms ease;
        }

        .hero-link:hover {
          text-decoration-color: var(--accent);
        }

        .hero-now {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 32px;
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--muted);
          letter-spacing: 0.02em;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.75); }
        }
        .now-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--accent);
          flex-shrink: 0;
          animation: pulse 2.4s ease-in-out infinite;
        }

        /* Divider */
        .section-hr {
          border: none;
          border-top: 1px solid var(--border);
          margin: 56px 0 48px;
        }

        /* Writing */
        .section-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 24px;
        }

        .writing-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .writing-item {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 16px;
          padding: 14px 0;
          border-bottom: 1px solid var(--border);
        }

        .writing-item:first-child {
          border-top: 1px solid var(--border);
        }

        .writing-title {
          font-family: var(--font-serif);
          font-size: 17px;
          letter-spacing: -0.01em;
          color: var(--text);
          text-decoration: none;
          transition: color 150ms ease;
        }

        .writing-title:hover {
          color: var(--accent);
        }

        .writing-date {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--muted);
          white-space: nowrap;
          flex-shrink: 0;
        }

        .writing-all-link {
          margin-top: 24px;
        }

        .view-all {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 500;
          color: var(--accent);
          text-decoration: none;
          transition: opacity 150ms ease;
        }

        .view-all:hover { opacity: 0.7; }
      `}</style>
    </>
  );
}
