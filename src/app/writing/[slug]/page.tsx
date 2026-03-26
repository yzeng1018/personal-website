import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Link from "next/link";

// Placeholder — will be replaced with MDX
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: slug.replace(/-/g, " "),
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <>
      <Nav />
      <main className="article-main">
        {/* Back link */}
        <Link href="/writing" className="back-link">
          ← 所有文章
        </Link>

        <article className="prose article-prose">
          <header className="article-header">
            <p className="article-date">2026.03</p>
            <h1>
              {slug
                .split("-")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" ")}
            </h1>
          </header>

          <p>
            这篇文章还在写作中。MDX 内容系统即将接入——届时这里将显示完整文章内容。
          </p>

          <p>
            如果你想在文章发布时第一时间收到通知，欢迎关注我的{" "}
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            。
          </p>
        </article>
      </main>

      <style>{`
        .article-main {
          max-width: var(--max-prose);
          margin: 0 auto;
          padding: 48px 24px 120px;
        }

        .back-link {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--muted);
          text-decoration: none;
          letter-spacing: 0.04em;
          display: inline-block;
          margin-bottom: 48px;
          transition: color 150ms ease;
        }

        .back-link:hover { color: var(--text); }

        .article-prose {
          max-width: var(--max-prose);
        }

        .article-header {
          margin-bottom: 40px;
          padding-bottom: 32px;
          border-bottom: 1px solid var(--border);
        }

        .article-date {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--muted);
          margin-bottom: 12px;
          letter-spacing: 0.04em;
        }

        .article-header h1 {
          font-family: var(--font-serif);
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 400;
          letter-spacing: -0.025em;
          line-height: 1.15;
          color: var(--text);
          margin: 0;
        }
      `}</style>
    </>
  );
}
