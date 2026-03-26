import type { Metadata } from "next";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "项目",
  description: "曾言参与和构建的项目——以思考过程为主，不是技能矩阵。",
};

type Project = {
  name: string;
  period: string;
  role: string;
  description: string;
  tags: string[];
  link?: string;
};

const projects: Project[] = [
  {
    name: "[项目名 1]",
    period: "2025—",
    role: "创始人 / 产品负责人",
    description:
      "[这里写这个项目的核心思考：为什么做这件事、解决什么本质问题、你在其中的判断是什么。重点不是「用了什么技术」，而是「你做了什么决策，为什么」。]",
    tags: ["AI", "B2B", "SaaS"],
  },
  {
    name: "[项目名 2]",
    period: "2024—2025",
    role: "产品经理",
    description:
      "[同上。用叙事而非简历语言来描述。读者需要理解你的思考方式，而不是你的技能列表。]",
    tags: ["企业软件", "工作流"],
  },
  {
    name: "[内容/播客项目]",
    period: "2023—",
    role: "主理人",
    description:
      "[如果你有播客、公众号或其他内容项目，这里写它的定位和你为什么做它。]",
    tags: ["内容", "AI产品"],
    link: "https://your-link.com",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="page-main">
        <header className="page-header">
          <h1 className="page-title">项目</h1>
          <p className="page-desc">
            我参与和构建的事情。重点是思考过程，不是技能清单。
          </p>
        </header>

        <ul className="projects-list">
          {projects.map((project) => (
            <li key={project.name} className="project-item">
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

        .projects-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .project-item {
          padding: 32px 0;
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
          margin-bottom: 12px;
        }

        .project-name {
          font-family: var(--font-serif);
          font-size: 20px;
          letter-spacing: -0.01em;
          color: var(--text);
          display: block;
          margin-bottom: 4px;
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
          line-height: 1.7;
          color: var(--text);
          margin: 0 0 16px;
        }

        .project-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .tag {
          font-family: var(--font-mono);
          font-size: 11px;
          padding: 3px 8px;
          border-radius: 3px;
          border: 1px solid var(--border);
          color: var(--muted);
          letter-spacing: 0.04em;
        }
      `}</style>
    </>
  );
}
