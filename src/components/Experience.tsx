import { experience } from "../data";
import { SectionHeader } from "./About";

const TEAL = "#5eead4";
const SLATE_200 = "#e2e8f0";
const SLATE_400 = "#94a3b8";

function ArrowUpRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      style={{ width: "14px", height: "14px", display: "inline", verticalAlign: "middle", flexShrink: 0, marginLeft: "4px", transition: "transform 0.2s" }}
      className="arrow-icon"
    >
      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
    </svg>
  );
}

export default function Experience() {
  return (
    <div>
      <SectionHeader>Experience</SectionHeader>

      {/* Card list — pure CSS group hover */}
      <div className="card-list">
        {experience.map((item, i) => (
          <div key={i} className="card-outer">
            <div className="card-bg-hover" />
            <div style={{ position: "relative", display: "flex", gap: "24px" }}>
              {/* Date column */}
              <div style={{ flexShrink: 0, width: "140px", paddingTop: "4px" }}>
                <span style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#64748b", lineHeight: 1.5 }}>
                  {item.dates}
                </span>
              </div>

              {/* Content column */}
              <div style={{ flex: 1 }}>
                <h3 style={{ marginBottom: "4px", fontSize: "0.9375rem", fontWeight: 600, lineHeight: 1.4 }}>
                  {item.companyUrl ? (
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="card-title-link"
                      style={{ display: "inline-flex", alignItems: "center", color: SLATE_200, textDecoration: "none", transition: "color 0.2s" }}
                    >
                      {item.title}
                      {item.company && (
                        <span style={{ color: TEAL, whiteSpace: "pre" }}> · {item.company}</span>
                      )}
                      <ArrowUpRight />
                    </a>
                  ) : (
                    <span className="card-title" style={{ color: SLATE_200 }}>
                      {item.title}
                      {item.company && (
                        <span style={{ color: TEAL, whiteSpace: "pre" }}> · {item.company}</span>
                      )}
                    </span>
                  )}
                </h3>
                <p style={{ marginBottom: "12px", fontSize: "0.875rem", lineHeight: 1.75, color: SLATE_400 }}>
                  {item.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {item.tech.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View Resume link */}
      <div style={{ marginTop: "32px", marginLeft: "120px" }}>
        <a
          href="https://drive.google.com/file/d/1o3J1R6fWFTtGQbzrdFhDQFoVP6x26Q08/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
          style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "0.9375rem", fontWeight: 600, color: SLATE_200, textDecoration: "none", transition: "color 0.2s" }}
        >
          View Full Résumé
          <ArrowUpRight />
        </a>
      </div>
    </div>
  );
}

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      borderRadius: "9999px",
      padding: "4px 12px",
      fontSize: "0.75rem",
      fontWeight: 500,
      letterSpacing: "0.025em",
      background: "rgba(94,234,212,0.1)",
      color: TEAL,
    }}>
      {children}
    </span>
  );
}