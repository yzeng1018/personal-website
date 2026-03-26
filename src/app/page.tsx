import Nav from "@/components/Nav";
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  date: string;
  lang?: "zh" | "en";
};

// Placeholder posts — replace with real MDX/data layer
const recentPosts: Post[] = [
  {
    slug: "why-most-ai-products-fail-on-usability",
    title: "为什么大多数 AI 产品都死在了「好用」这一关",
    date: "2026.03",
    lang: "zh",
  },
  {
    slug: "investor-vs-pm-perspective-on-product",
    title: "投资人看产品，和产品经理看产品，有什么不同",
    date: "2026.02",
    lang: "zh",
  },
  {
    slug: "decision-framework-under-uncertainty",
    title: "从 0 到 1 的产品决策框架：不确定性下的取舍逻辑",
    date: "2026.01",
    lang: "zh",
  },
  {
    slug: "model-vs-market",
    title: "The Model vs. The Market: Where AI PMs Go Wrong",
    date: "2025.12",
    lang: "en",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main className="home-main">
        {/* Hero */}
        <section className="hero">
          <h1 className="hero-name">
            <span className="hero-name-zh">曾言</span>
            {" / "}
            <span className="hero-name-en">Zeng Yan</span>
          </h1>

          <p className="hero-bio">
            AI 产品经理，也懂商业。
            <br />
            我在思考{" "}
            <Link href="/writing" className="hero-link">
              AI 如何重构产品、组织和市场的边界
            </Link>
            。
          </p>

          <p className="hero-bio" style={{ marginTop: "12px" }}>
            目前在构建{" "}
            <Link href="/projects" className="hero-link">
              [项目名]
            </Link>
            ，同时写关于 AI 产品方法论和商业判断的文章。
          </p>

          <div className="hero-now">
            <span className="now-dot" aria-hidden="true" />
            <span>当前关注：用 AI 重建企业软件的工作流层</span>
          </div>
        </section>

        {/* Divider */}
        <hr className="section-hr" />

        {/* Recent Writing */}
        <section className="writing-section">
          <p className="section-label">最新文章</p>

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

          <div className="writing-all-link">
            <Link href="/writing" className="view-all">
              所有文章 →
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

        .now-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--accent);
          flex-shrink: 0;
        }

        /* Divider */
        .section-hr {
          border: none;
          border-top: 1px solid var(--border);
          margin: 56px 0 48px;
        }

        /* Writing */
        .writing-section {}

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
