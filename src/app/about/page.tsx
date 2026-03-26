import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Link from "next/link";

export const metadata: Metadata = {
  title: "关于",
  description: "关于曾言——AI 产品经理，商业思考者，内容创作者。",
};

const reading = [
  "Poor Charlie's Almanack",
  "Thinking in Systems",
  "The Innovator's Dilemma",
];

const links = [
  { label: "Twitter / X", href: "https://twitter.com/yourhandle" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourprofile" },
  { label: "GitHub", href: "https://github.com/yourhandle" },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="page-main">
        <div className="about-layout">
          {/* Main bio */}
          <div className="about-body prose">
            <h1>关于我</h1>

            <p>
              我叫曾言，是一名 AI 产品经理，也在做内容创作。
              我相信未来十年最有价值的人，是那些同时理解技术边界和市场逻辑的人——
              不是「懂一点 AI 的商务人士」，也不是「不懂市场的工程师」，而是真正的复合型人才。
            </p>

            <p>
              我写文章，不是为了记录，而是为了迫使自己把模糊的想法变成清晰的论点。
              如果一件事我讲不清楚，说明我还没真正想明白。
            </p>

            <p>
              目前在 [公司] 负责 [方向]。此前在 [公司] 做过 [经历]。
              偶尔做播客，常常读书，有时写字写到凌晨两点。
            </p>

            <h2>我的判断框架</h2>
            <p>
              [这里可以写你对 AI 产品、商业判断的核心观点——类似 Karpathy 的 &ldquo;I believe&rdquo; 段落。
              这是吸引同频读者最有效的方式。]
            </p>

            <h2>这个网站</h2>
            <p>
              这里是我的长文写作阵地。比微信公众号更自由，比微博更长，比 LinkedIn 更真实。
              你可以通过{" "}
              <Link href="/writing" style={{ color: "var(--accent)" }}>写作</Link>
              {" "}或{" "}
              <Link href="/now" style={{ color: "var(--accent)" }}>现在</Link>
              {" "}页面了解我在想什么。
            </p>
          </div>

          {/* Sidebar */}
          <aside className="about-sidebar">
            <div className="sidebar-block">
              <p className="sidebar-label">在读</p>
              <ul className="sidebar-list">
                {reading.map((book) => (
                  <li key={book}>{book}</li>
                ))}
              </ul>
            </div>

            <div className="sidebar-block">
              <p className="sidebar-label">联系</p>
              <ul className="sidebar-list">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--accent)" }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-block">
              <p className="sidebar-label">邮件</p>
              <p className="sidebar-email">
                <a href="mailto:your@email.com" style={{ color: "var(--accent)", fontSize: "13px" }}>
                  your@email.com
                </a>
              </p>
            </div>
          </aside>
        </div>
      </main>

      <style>{`
        .page-main {
          max-width: var(--max-page);
          margin: 0 auto;
          padding: 64px 24px 120px;
        }

        .about-layout {
          display: grid;
          grid-template-columns: 1fr 240px;
          gap: 80px;
          align-items: start;
        }

        @media (max-width: 720px) {
          .about-layout {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }

        .about-body h1 {
          font-size: clamp(2rem, 4vw, 2.75rem);
        }

        .about-sidebar {
          padding-top: 8px;
          position: sticky;
          top: 72px;
        }

        .sidebar-block {
          margin-bottom: 32px;
        }

        .sidebar-label {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 10px;
        }

        .sidebar-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .sidebar-list li {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--text);
          line-height: 1.5;
          padding: 3px 0;
        }

        .sidebar-list li::before {
          content: '—';
          margin-right: 8px;
          color: var(--muted);
        }

        .sidebar-email { margin: 0; }
      `}</style>
    </>
  );
}
