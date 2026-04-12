import type { Metadata } from "next";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Now",
  description: "What Samuel Zeng is working on, reading, and thinking about right now.",
};

export default function NowPage() {
  return (
    <>
      <Nav />
      <main className="page-main">
        <header className="page-header">
          <h1 className="page-title">Now</h1>
          <p className="page-meta">Updated April 2026</p>
        </header>

        <div className="now-content prose">
          <h2>Work</h2>
          <p>
            At Trip.com Group, leading flight product for the overseas market and
            serving as CPO of Travix — the European flight booking business.
            Current focus: AI-native product transformation, specifically applying
            LLM and strategy models to the booking funnel to improve conversion
            and per-user revenue.
          </p>

          <h2>Building</h2>
          <p>
            Continuing to build AI applications on the side. The{" "}
            <a
              href="https://github.com/yzeng1018/trip-agent"
              target="_blank"
              rel="noopener noreferrer"
            >
              AI travel agent
            </a>{" "}
            is live. Working on improving its itinerary generation and flight
            booking integration.
          </p>

          <h2>Reading</h2>
          <ul>
            <li>
              <em>Poor Charlie&rsquo;s Almanack</em> — Charlie Munger
            </li>
            <li>
              <em>Thinking in Systems</em> — Donella Meadows
            </li>
          </ul>

          <h2>Thinking about</h2>
          <p>
            What the right interface for AI-native travel booking actually looks
            like. Conversational interfaces feel obvious but may not be the
            endgame — the right model might be closer to a portfolio manager
            working on your behalf than a chatbot you query.
          </p>

          <h2>Get in touch</h2>
          <p>
            If you&rsquo;re thinking about similar problems, feel free to reach
            out at{" "}
            <a href="mailto:samuel295@163.com">samuel295@163.com</a>.
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
