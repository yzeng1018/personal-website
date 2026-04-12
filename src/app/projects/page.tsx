import type { Metadata } from "next";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Products and markets I&rsquo;ve built — from Didi's Latin America launch to Kuaishou Brazil to Trip.com's flight business.",
};

type Project = {
  name: string;
  period: string;
  role: string;
  description: string;
  tags: string[];
  link?: string;
};

const work: Project[] = [
  {
    name: "Trip.com — Flight Product",
    period: "2025—",
    role: "Product Director · CPO, Travix",
    description:
      "Leading flight product strategy and experience for Trip.com's overseas markets, and serving as CPO of Travix — Trip.com Group's European flight booking subsidiary. Focus on CVR, revenue per visit, and AI-native feature development. Shipped an AI check-in product that increased online check-in coverage 80% and success rate 15 points.",
    tags: ["Travel", "AI", "Europe", "Growth"],
  },
  {
    name: "Kuaishou Brazil",
    period: "2020—2025",
    role: "Product Director · General Manager, Brazil",
    description:
      "Ran the Brazil business end-to-end — product, growth, creator ecosystem, and AIGC content pipeline. Grew daily active users from 10M to 30M. Rebuilt the creator side from the ground up: submission rate went from 2% to 7%. Built two products from zero: Topick (an overseas image-text community) and Sports (a sports vertical that reached 800K DAU and $200K daily revenue in six months).",
    tags: ["Consumer", "Brazil", "AIGC", "0→1"],
  },
  {
    name: "Didi International",
    period: "2014—2020",
    role: "Algorithm Engineering · Product Operations Lead",
    description:
      "Part of the founding team for Didi's international expansion. Built ride-hailing from zero in Brazil, Mexico, and Colombia — reaching roughly 30% market share in core markets. Worked across algorithm engineering (dynamic pricing, smart subsidy models in Scala + LibFFM) and operational scaling. Led the post-acquisition integration of 99, Brazil's incumbent ride-hailing platform, completing the systems and team merge in six months.",
    tags: ["Ride-hailing", "Latin America", "Algorithm", "M&A"],
  },
];

const personal: Project[] = [
  {
    name: "AI Travel Agent",
    period: "2024",
    role: "Solo builder",
    description:
      "Multi-turn conversational travel planner. Takes a user's preferences — origin, destination, dates, budget, travel style — and generates a full itinerary. Integrates flight search APIs for end-to-end booking. LLM-driven attraction recommendations with real-time price and availability.",
    tags: ["LLM", "Travel", "Next.js"],
    link: "https://github.com/yzeng1018/trip-agent",
  },
  {
    name: "Stock Anomaly Monitor",
    period: "2024",
    role: "Solo builder",
    description:
      "Python + GitHub Actions pipeline that scans A-share anomalies on a schedule, pulls financial news from Seeking Alpha, and runs multi-angle LLM analysis. Pushes alerts to WeChat Work.",
    tags: ["Python", "LLM", "Finance"],
    link: "https://github.com/yzeng1018/stock-monitor",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="page-main">
        <header className="page-header">
          <h1 className="page-title">Projects</h1>
          <p className="page-desc">
            Work and side projects. The focus is on decisions made, not
            technologies used.
          </p>
        </header>

        <section className="projects-section">
          <p className="section-label">Work</p>
          <ul className="projects-list">
            {work.map((project) => (
              <ProjectItem key={project.name} project={project} />
            ))}
          </ul>
        </section>

        <section className="projects-section" style={{ marginTop: "56px" }}>
          <p className="section-label">Personal builds</p>
          <ul className="projects-list">
            {personal.map((project) => (
              <ProjectItem key={project.name} project={project} />
            ))}
          </ul>
        </section>
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

        .section-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 0;
        }

        .projects-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .project-item {
          padding: 28px 0;
          border-top: 1px solid var(--border);
        }

        .project-item:last-child {
          border-bottom: 1px solid var(--border);
        }

        .project-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 10px;
        }

        .project-name {
          font-family: var(--font-serif);
          font-size: 19px;
          letter-spacing: -0.01em;
          color: var(--text);
          display: block;
          margin-bottom: 2px;
          line-height: 1.3;
        }

        .project-name-link {
          color: var(--text);
          text-decoration: none;
          transition: color 150ms ease;
        }

        .project-name-link:hover {
          color: var(--accent);
        }

        .project-role {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--muted);
          letter-spacing: 0.04em;
          display: block;
        }

        .project-period {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--muted);
          white-space: nowrap;
          flex-shrink: 0;
          padding-top: 4px;
        }

        .project-desc {
          font-family: var(--font-sans);
          font-size: 15px;
          line-height: 1.72;
          color: var(--text);
          margin: 0 0 14px;
        }

        .project-tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .tag {
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

function ProjectItem({ project }: { project: Project }) {
  return (
    <li className="project-item">
      <div className="project-top">
        <div>
          <span className="project-name">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-name-link"
              >
                {project.name} ↗
              </a>
            ) : (
              project.name
            )}
          </span>
          <span className="project-role">{project.role}</span>
        </div>
        <span className="project-period">{project.period}</span>
      </div>

      <p className="project-desc">{project.description}</p>

      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </li>
  );
}
