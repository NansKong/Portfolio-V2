import { research } from "../data";
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

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: "16px", height: "16px" }}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Research() {
  return (
    <div>
      <SectionHeader>Research</SectionHeader>

      <div className="card-list">
        {research.map((item, i) => (
          <div key={i} className="card-outer">
            <div className="card-bg-hover" />
            <div className="relative flex flex-col-reverse sm:grid sm:grid-cols-8 sm:gap-4 md:gap-6 lg:gap-8 z-10 w-full">
              
              {/* Content */}
              <div className="sm:order-2 sm:col-span-6 z-10">
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "4px" }}>
                  <h3 style={{ fontSize: "0.9375rem", fontWeight: 600, lineHeight: 1.4, flex: 1 }}>
                    <a
                      href={item.demo || item.github}
                      target="_blank"
                      rel="noreferrer"
                      className="card-title-link"
                      style={{ display: "inline-flex", alignItems: "center", color: SLATE_200, textDecoration: "none", transition: "color 0.2s" }}
                    >
                      {item.title}
                      <ArrowUpRight />
                    </a>
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginLeft: "12px", flexShrink: 0 }}>
                    {item.demo && (
                      <a
                        href={item.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Live Demo"
                        className="live-icon"
                        style={{ color: "#64748b", transition: "color 0.2s, transform 0.2s", opacity: 0 }}
                      >
                        <ExternalLinkIcon />
                      </a>
                    )}
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Repository"
                      className="github-icon"
                      style={{ color: "#64748b", transition: "color 0.2s, transform 0.2s", opacity: 0 }}
                    >
                      <GitHubIcon />
                    </a>
                  </div>
                </div>
                <p style={{ marginBottom: "12px", fontSize: "0.875rem", lineHeight: 1.75, color: SLATE_400 }}>
                  {item.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {item.tech.map((t) => <Pill key={t}>{t}</Pill>)}
                </div>
              </div>

              {/* Left Column (Label) */}
              <div className="sm:order-1 sm:col-span-2 pt-1 z-10 shrink-0 mb-4 sm:mb-0">
                <span style={{
                  fontSize: "0.625rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: TEAL,
                  opacity: 0.7,
                  lineHeight: 1.5,
                }}>
                  {item.label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
