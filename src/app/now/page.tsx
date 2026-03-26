import type { Metadata } from "next";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "现在",
  description: "曾言当前在做什么、读什么、思考什么。",
};

export default function NowPage() {
  return (
    <>
      <Nav />
      <main className="page-main">
        <header className="page-header">
          <h1 className="page-title">现在</h1>
          <p className="page-meta">更新于 2026 年 3 月</p>
        </header>

        <div className="now-content prose">
          <h2>在做的事</h2>
          <p>
            [在这里写你当前的主要项目和工作重心。这部分保持动态更新，让读者感受到一个活跃的思考者。]
          </p>

          <h2>在读的书</h2>
          <ul>
            <li>
              <em>Poor Charlie&apos;s Almanack</em> — Charlie Munger
            </li>
            <li>
              <em>Thinking in Systems</em> — Donella Meadows
            </li>
            <li>[你当前在读的书]</li>
          </ul>

          <h2>在思考的问题</h2>
          <p>
            [一两个你最近反复思考的问题或主题。这是 &ldquo;Now&rdquo; 页面最有价值的部分——展示思考过程，而不仅仅是行动清单。]
          </p>

          <h2>联系我</h2>
          <p>
            如果你也在思考类似的问题，欢迎通过{" "}
            <a href="mailto:your@email.com">邮件</a>
            {" "}或{" "}
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>{" "}
            联系我。
          </p>
        </div>
      </main>

      <style>{`
        .page-main {
          max-width: var(--max-prose);
          margin: 0 auto;
          padding: 64px 24px 120px;
        }

        .page-header {
          margin-bottom: 48px;
        }

        .page-title {
          font-family: var(--font-serif);
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 400;
          letter-spacing: -0.025em;
          line-height: 1.1;
          margin-bottom: 8px;
          color: var(--text);
        }

        .page-meta {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--muted);
          letter-spacing: 0.04em;
          margin: 0;
        }

        .now-content a {
          color: var(--accent);
          text-underline-offset: 3px;
        }
      `}</style>
    </>
  );
}
