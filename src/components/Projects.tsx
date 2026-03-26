import { useNavigate } from "react-router-dom";
import { projects } from "../data";
import { SectionHeader } from "./About";
import { Pill } from "./Experience";

const TEAL = "#5eead4";
const SLATE_200 = "#e2e8f0";
const SLATE_400 = "#94a3b8";

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      style={{ width: "14px", height: "14px", display: "inline", flexShrink: 0, marginLeft: "4px", transition: "transform 0.2s" }}
      className={`arrow-icon ${className}`}
    >
      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: "16px", height: "16px" }}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div>
      <SectionHeader>Projects</SectionHeader>

      <div className="card-list">
        {projects.map((project, i) => (
          <div key={i} className="card-outer">
            <div className="card-bg-hover" />
            <div className="relative flex flex-col-reverse sm:grid sm:grid-cols-8 sm:gap-4 md:gap-6 lg:gap-8 z-10 w-full">
              
              {/* Content */}
              <div className="sm:order-2 sm:col-span-6 z-10">
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "4px" }}>
                  <h3 style={{ fontSize: "0.9375rem", fontWeight: 600, lineHeight: 1.4, flex: 1 }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="card-title-link"
                      style={{ display: "inline-flex", alignItems: "center", color: SLATE_200, textDecoration: "none", transition: "color 0.2s" }}
                    >
                      {project.title}
                      <ArrowUpRight />
                    </a>
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Repository"
                    className="github-icon"
                    style={{ marginLeft: "12px", color: "#64748b", flexShrink: 0, transition: "color 0.2s, transform 0.2s", opacity: 0 }}
                  >
                    <GitHubIcon />
                  </a>
                </div>
                <p style={{ marginBottom: "12px", fontSize: "0.875rem", lineHeight: 1.75, color: SLATE_400 }}>
                  {project.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {project.tech.map((t) => <Pill key={t}>{t}</Pill>)}
                </div>
              </div>

              {/* Left Column (Image or Badge) */}
              <div className="sm:order-1 sm:col-span-2 pt-1 z-10 shrink-0 mb-4 sm:mb-0">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} thumbnail`}
                    loading="lazy"
                    width="200"
                    height="112"
                    className="rounded border-[2px] border-slate-200/10 transition-colors duration-300 group-hover:border-slate-200/30 object-cover sm:w-full sm:translate-y-1 w-32 aspect-[16/9] drop-shadow-sm group-hover:drop-shadow-md"
                  />
                ) : (
                  <span style={{
                    fontSize: "0.625rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: TEAL,
                    opacity: 0.7,
                    lineHeight: 1.5,
                  }}>
                    {project.label}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View Full Project Archive link */}
      <div style={{ marginTop: "32px", marginLeft: "120px" }}>
        <button
          onClick={() => navigate("/archive")}
          className="resume-link"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
            padding: 0,
            fontSize: "0.9375rem",
            fontWeight: 600,
            color: "#e2e8f0",
            transition: "color 0.2s, gap 0.2s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = TEAL;
            e.currentTarget.style.gap = "10px";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = "#e2e8f0";
            e.currentTarget.style.gap = "6px";
          }}
        >
          View Full Project Archive
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: "16px", height: "16px", transition: "transform 0.2s" }}>
            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}

