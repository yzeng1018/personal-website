import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Product Director at Trip.com Group. Math PhD turned product leader — ride-hailing, short video, flight booking.",
};

const links = [
  { label: "X / Twitter", href: "https://x.com/hitchbull" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yan-zeng-90a12a15/" },
  { label: "GitHub", href: "https://github.com/yzeng1018" },
  { label: "Email", href: "mailto:samuel295@163.com" },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="page-main">
        <div className="about-layout">
          {/* Main bio */}
          <div className="about-body prose">
            <h1>About</h1>

            <p>
              I&rsquo;m Samuel Zeng — product leader, recovering mathematician.
              I have a PhD in Mathematics from the University of Rochester,
              where I spent five years studying things that turned out to be
              useful in ways I didn&rsquo;t expect.
            </p>

            <p>
              My career has been a series of bets on hard problems in
              fast-moving markets. I joined Didi when the international
              expansion was just a whiteboard idea, spent years building
              ride-hailing from zero in Brazil, Mexico, and Colombia — getting
              to roughly 30% market share. Then I moved to Kuaishou to run
              Brazil as GM, growing daily actives from 10 million to 30 million.
            </p>

            <p>
              I&rsquo;m now at Trip.com Group as Product Director for the{" "}
              <a
                href="https://www.trip.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Trip.com
              </a>{" "}
              overseas flight business, and serve as CPO of{" "}
              <a
                href="https://www.travix.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Travix
              </a>
              , Trip.com&rsquo;s European flight booking subsidiary.
            </p>

            <h2>How I think</h2>
            <p>
              Math trained me to find the simplest model that explains the most.
              That instinct transfers directly to product work: most problems
              look complex on the surface but have a small number of variables
              that actually drive the outcome. Find those, move them.
            </p>

            <p>
              I&rsquo;m an AI practitioner, not just an enthusiast. I&rsquo;ve
              shipped AI check-in products, built AIGC content pipelines, and
              in my personal time, built several AI applications from scratch —
              a travel planning agent, a stock monitoring system, an accounting
              tool. I write my own code. The products are sharper for it.
            </p>

            <h2>Outside work</h2>
            <p>
              I&rsquo;ve traveled to 30+ countries and lived on three
              continents — five years in the US (Rochester, then the Bay Area),
              three years in Brazil, one in Mexico. The accumulation of
              drastically different environments changed how I reason about
              almost everything: what people want, how organizations fail, why
              some places are poor and others aren&rsquo;t.
            </p>
            <p>
              I take photographs and study the night sky. Photography slows
              down the way I look at places. Stargazing is the only hobby I
              have that reliably puts problems in proportion.
            </p>

            <h2>This site</h2>
            <p>
              I use this as a place to think in public — longer-form writing
              that doesn&rsquo;t fit character limits elsewhere. If you want to
              see what I&rsquo;m working on right now, check the{" "}
              <Link href="/now">Now</Link> page.
            </p>
          </div>

          {/* Sidebar */}
          <aside className="about-sidebar">
            <div className="sidebar-block">
              <p className="sidebar-label">Experience</p>
              <ul className="sidebar-timeline">
                <li>
                  <span className="timeline-co">Trip.com Group</span>
                  <span className="timeline-role">Product Director</span>
                  <span className="timeline-year">2025—</span>
                </li>
                <li>
                  <span className="timeline-co">Kuaishou</span>
                  <span className="timeline-role">Product Director / Brazil GM</span>
                  <span className="timeline-year">2020—2025</span>
                </li>
                <li>
                  <span className="timeline-co">Didi</span>
                  <span className="timeline-role">Algorithm Eng / Product Ops</span>
                  <span className="timeline-year">2014—2020</span>
                </li>
              </ul>
            </div>

            <div className="sidebar-block">
              <p className="sidebar-label">Education</p>
              <ul className="sidebar-timeline">
                <li>
                  <span className="timeline-co">Univ. of Rochester</span>
                  <span className="timeline-role">PhD, Mathematics</span>
                  <span className="timeline-year">2008—2013</span>
                </li>
                <li>
                  <span className="timeline-co">Xiangtan University</span>
                  <span className="timeline-role">BS, Mathematics</span>
                  <span className="timeline-year">2004—2008</span>
                </li>
              </ul>
            </div>

            <div className="sidebar-block">
              <p className="sidebar-label">Contact</p>
              <ul className="sidebar-list">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
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
          grid-template-columns: 1fr 220px;
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

        .about-body a {
          color: var(--accent);
          text-underline-offset: 3px;
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
          margin-bottom: 12px;
        }

        .sidebar-timeline {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .sidebar-timeline li {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .timeline-co {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 500;
          color: var(--text);
          line-height: 1.4;
        }

        .timeline-role {
          font-family: var(--font-sans);
          font-size: 12px;
          color: var(--muted);
          line-height: 1.4;
        }

        .timeline-year {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--muted);
          letter-spacing: 0.04em;
        }

        .sidebar-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .sidebar-list li {
          font-family: var(--font-sans);
          font-size: 13px;
        }

        .sidebar-list a {
          color: var(--accent);
          text-decoration: none;
          text-underline-offset: 3px;
          transition: opacity 150ms ease;
        }

        .sidebar-list a:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  );
}
