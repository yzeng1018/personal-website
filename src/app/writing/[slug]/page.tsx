import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { getAllPostSlugs, getPost } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: { title: post.title, description: post.description },
  };
}

const mdxOptions = {
  mdxOptions: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: { light: "github-light", dark: "github-dark" },
          keepBackground: false,
        },
      ],
    ] as never,
  },
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main className="article-main">
        <Link href="/writing" className="back-link">
          ← 写作
        </Link>

        <article>
          <header className="article-header">
            <div className="article-meta">
              <span className="article-date">{post.date}</span>
              <span className="meta-sep">·</span>
              <span className="article-reading-time">{post.readingTime}阅读</span>
              {post.tags?.map((tag) => (
                <span key={tag} className="article-tag">{tag}</span>
              ))}
            </div>
            <h1 className="article-title">{post.title}</h1>
            <p className="article-desc">{post.description}</p>
          </header>

          <div className="prose article-body">
            <MDXRemote source={post.content} options={mdxOptions} />
          </div>
        </article>

        <footer className="article-footer">
          <hr className="footer-hr" />
          <Link href="/writing" className="back-link">
            ← 所有文章
          </Link>
        </footer>
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

        .article-header {
          margin-bottom: 48px;
          padding-bottom: 40px;
          border-bottom: 1px solid var(--border);
        }

        .article-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .article-date,
        .article-reading-time {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--muted);
          letter-spacing: 0.04em;
        }

        .meta-sep {
          color: var(--border);
          font-size: 12px;
        }

        .article-tag {
          font-family: var(--font-mono);
          font-size: 10px;
          padding: 2px 7px;
          border-radius: 3px;
          border: 1px solid var(--border);
          color: var(--muted);
          letter-spacing: 0.04em;
        }

        .article-title {
          font-family: var(--font-serif);
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 400;
          letter-spacing: -0.025em;
          line-height: 1.2;
          color: var(--text);
          margin: 0 0 16px;
        }

        .article-desc {
          font-family: var(--font-sans);
          font-size: 17px;
          line-height: 1.65;
          color: var(--muted);
          margin: 0;
          font-style: italic;
        }

        /* prose overrides for code blocks from rehype-pretty-code */
        .article-body [data-rehype-pretty-code-figure] {
          margin: 1.5rem 0;
        }
        .article-body pre {
          background: var(--surface) !important;
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 1.25rem 1.5rem;
          overflow-x: auto;
          font-size: 0.875rem;
          line-height: 1.65;
        }
        .article-body code {
          font-family: var(--font-mono);
          counter-reset: line;
        }
        [data-line] { display: block; }

        .article-footer { margin-top: 64px; }
        .footer-hr {
          border: none;
          border-top: 1px solid var(--border);
          margin-bottom: 32px;
        }
      `}</style>
    </>
  );
}
