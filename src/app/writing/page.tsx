import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "写作",
  description: "AI 产品、商业判断和系统思考相关的文章。",
};

export default function WritingPage() {
  const posts = getAllPosts();

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

        {posts.length === 0 ? (
          <p style={{ color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: "13px" }}>
            文章即将发布。
          </p>
        ) : (
          <ul className="post-list">
            {posts.map((post) => (
              <li key={post.slug} className="post-item">
                <Link href={`/writing/${post.slug}`} className="post-link">
                  <div className="post-top">
                    <span className="post-title">{post.title}</span>
                    <span className="post-date">{post.date}</span>
                  </div>
                  <p className="post-desc-text">{post.description}</p>
                  <div className="post-meta">
                    <span className="post-reading-time">{post.readingTime}阅读</span>
                    {post.tags?.map((tag) => (
                      <span key={tag} className="post-tag">{tag}</span>
                    ))}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>

      <style>{`
        .page-main {
          max-width: var(--max-prose);
          margin: 0 auto;
          padding: 64px 24px 120px;
        }
        .page-header { margin-bottom: 56px; }
        .page-title {
          font-family: var(--font-serif);
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 400;
          letter-spacing: -0.025em;
          line-height: 1.1;
          margin-bottom: 12px;
          color: var(--text);
        }
        .page-desc {
          font-family: var(--font-sans);
          font-size: 16px;
          line-height: 1.7;
          color: var(--muted);
          margin: 0;
        }
        .post-list { list-style: none; margin: 0; padding: 0; }
        .post-item { border-top: 1px solid var(--border); }
        .post-item:last-child { border-bottom: 1px solid var(--border); }
        .post-link {
          display: block;
          padding: 22px 0;
          text-decoration: none;
        }
        .post-link:hover .post-title { color: var(--accent); }
        .post-top {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 8px;
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
          margin: 0 0 10px;
        }
        .post-meta {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .post-reading-time {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--muted);
          letter-spacing: 0.04em;
        }
        .post-tag {
          font-family: var(--font-mono);
          font-size: 10px;
          padding: 2px 7px;
          border-radius: 3px;
          border: 1px solid var(--border);
          color: var(--muted);
          letter-spacing: 0.04em;
        }
      `}</style>
    </>
  );
}
