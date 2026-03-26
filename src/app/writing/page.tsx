import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Link from "next/link";

export const metadata: Metadata = {
  title: "写作",
  description: "AI 产品、商业判断和系统思考相关的文章。",
};

type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  lang?: "zh" | "en";
};

// Placeholder — replace with MDX/data layer
const allPosts: Post[] = [
  {
    slug: "why-most-ai-products-fail-on-usability",
    title: "为什么大多数 AI 产品都死在了「好用」这一关",
    date: "2026.03",
    description:
      "能力很强，但体验很差。AI 产品失败的核心原因往往不是技术，而是对用户工作流的误解。",
    lang: "zh",
  },
  {
    slug: "investor-vs-pm-perspective-on-product",
    title: "投资人看产品，和产品经理看产品，有什么不同",
    date: "2026.02",
    description:
      "两种视角都正确，但它们关注的时间尺度完全不同。理解这个差异，会让你的产品决策更清醒。",
    lang: "zh",
  },
  {
    slug: "decision-framework-under-uncertainty",
    title: "从 0 到 1 的产品决策框架：不确定性下的取舍逻辑",
    date: "2026.01",
    description:
      "当信息不完整时，如何做出可逆性高、方向正确的决策。一套我在实际工作中验证过的框架。",
    lang: "zh",
  },
  {
    slug: "model-vs-market",
    title: "The Model vs. The Market: Where AI PMs Go Wrong",
    date: "2025.12",
    description:
      "The rarest skill isn't knowing how the model works — it's knowing when the model is good enough to ship.",
    lang: "en",
  },
];

export default function WritingPage() {
  return (
    <>
      <Nav />
      <main className="page-main">
        <header className="page-header">
          <h1 className="page-title">写作</h1>
          <p className="page-desc">
            关于 AI 产品、商业判断和系统思考的文章。
            <br />
            偶尔也用英文写。
          </p>
        </header>

        <ul className="post-list">
          {allPosts.map((post) => (
            <li key={post.slug} className="post-item">
              <Link href={`/writing/${post.slug}`} className="post-link">
                <div className="post-top">
                  <span className="post-title">{post.title}</span>
                  <span className="post-date">{post.date}</span>
                </div>
                <p className="post-desc-text">{post.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <style>{`
        .page-main {
          max-width: var(--max-prose);
          margin: 0 auto;
          padding: 64px 24px 120px;
        }

        .page-header {
          margin-bottom: 56px;
        }

        .page-title {
          font-family: var(--font-serif);
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 400;
          letter-spacing: -0.025em;
          line-height: 1.1;
          margin-bottom: 16px;
          color: var(--text);
        }

        .page-desc {
          font-family: var(--font-sans);
          font-size: 16px;
          line-height: 1.7;
          color: var(--muted);
          margin: 0;
        }

        .post-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .post-item {
          border-top: 1px solid var(--border);
        }

        .post-item:last-child {
          border-bottom: 1px solid var(--border);
        }

        .post-link {
          display: block;
          padding: 20px 0;
          text-decoration: none;
          transition: opacity 150ms ease;
        }

        .post-link:hover .post-title {
          color: var(--accent);
        }

        .post-top {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 6px;
        }

        .post-title {
          font-family: var(--font-serif);
          font-size: 18px;
          letter-spacing: -0.01em;
          color: var(--text);
          line-height: 1.3;
          transition: color 150ms ease;
        }

        .post-date {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--muted);
          white-space: nowrap;
          flex-shrink: 0;
        }

        .post-desc-text {
          font-family: var(--font-sans);
          font-size: 14px;
          line-height: 1.6;
          color: var(--muted);
          margin: 0;
        }
      `}</style>
    </>
  );
}
