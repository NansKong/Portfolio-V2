import { archiveProjects } from "../archiveData";
import { useNavigate } from "react-router-dom";

const TEAL = "#5eead4";
const SLATE_200 = "#e2e8f0";
const SLATE_400 = "#94a3b8";
const SLATE_500 = "#64748b";

function ArrowUpRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      style={{ width: "14px", height: "14px", display: "inline", flexShrink: 0, marginLeft: "4px", transition: "transform 0.2s", verticalAlign: "middle" }}
      className="arrow-icon"
    >
      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
    </svg>
  );
}

export default function ArchivePage() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", color: "#94a3b8" }}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "clamp(60px, 8vw, 100px) clamp(24px, 5vw, 80px)",
        }}
      >
        {/* Back link */}
        <button
          onClick={() => navigate("/")}
          className="archive-back-btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: TEAL,
            fontSize: "0.875rem",
            fontWeight: 500,
            fontFamily: "inherit",
            padding: 0,
            marginBottom: "48px",
            transition: "gap 0.2s ease",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: "16px", height: "16px", flexShrink: 0 }}>
            <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
          </svg>
          Rudrax Kongbrailatpam
        </button>

        {/* Title */}
        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 700, color: SLATE_200, letterSpacing: "-0.025em", marginBottom: "64px" }}>
          All Projects
        </h1>

        {/* Table */}
        <table className="archive-table" style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(148,163,184,0.1)" }}>
              {["Year", "Project", "Built With", "Link"].map((h) => (
                <th key={h} style={{
                  textAlign: "left",
                  paddingBottom: "16px",
                  paddingRight: "24px",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: SLATE_500,
                }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {archiveProjects.map((p, i) => (
              <ArchiveRow key={i} project={p} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ArchiveRow({ project }: { project: (typeof archiveProjects)[0] }) {
  return (
    <tr className="archive-row">
      {/* Year */}
      <td style={{ paddingTop: "16px", paddingBottom: "16px", paddingRight: "24px", verticalAlign: "top", whiteSpace: "nowrap" }}>
        <span style={{ fontSize: "0.8125rem", color: "#64748b", fontVariantNumeric: "tabular-nums" }}>
          {project.year}
        </span>
      </td>

      {/* Project name */}
      <td style={{ paddingTop: "16px", paddingBottom: "16px", paddingRight: "24px", verticalAlign: "top" }}>
        <span className="archive-title" style={{ fontWeight: 600, color: "#e2e8f0", transition: "color 0.2s", lineHeight: 1.4, display: "block" }}>
          {project.title}
        </span>
      </td>

      {/* Built with */}
      <td style={{ paddingTop: "16px", paddingBottom: "16px", paddingRight: "24px", verticalAlign: "top" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {project.tech.map((t) => (
            <span key={t} style={{
              display: "inline-flex",
              alignItems: "center",
              borderRadius: "9999px",
              padding: "3px 10px",
              fontSize: "0.6875rem",
              fontWeight: 500,
              letterSpacing: "0.02em",
              background: "rgba(94,234,212,0.1)",
              color: "#5eead4",
            }}>
              {t}
            </span>
          ))}
        </div>
      </td>

      {/* Link */}
      <td style={{ paddingTop: "16px", paddingBottom: "16px", verticalAlign: "top", whiteSpace: "nowrap" }}>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="archive-link"
          style={{
            display: "inline-flex",
            alignItems: "center",
            color: "#64748b",
            textDecoration: "none",
            fontSize: "0.8125rem",
            transition: "color 0.2s",
          }}
        >
          GitHub
          <ArrowUpRight />
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="archive-link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              color: "#64748b",
              textDecoration: "none",
              fontSize: "0.8125rem",
              transition: "color 0.2s",
              marginLeft: "16px",
            }}
          >
            Live
            <ArrowUpRight />
          </a>
        )}
      </td>
    </tr>
  );
}
