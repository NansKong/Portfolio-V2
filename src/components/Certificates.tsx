import { certificates } from "../data";
import { SectionHeader } from "./About";
import { Pill } from "./Experience";
import { useNavigate } from "react-router-dom";

const TEAL = "#5eead4";
const SLATE_200 = "#e2e8f0";
const SLATE_400 = "#94a3b8";

function ArrowUpRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      style={{ width: "14px", height: "14px", display: "inline", flexShrink: 0, marginLeft: "4px", transition: "transform 0.2s" }}
      className="arrow-icon"
    >
      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
    </svg>
  );
}

export default function Certificates() {
  const navigate = useNavigate();

  return (
    <div>
      <SectionHeader>Certificates</SectionHeader>
      <div className="card-list">
        {certificates.map((cert, i) => (
          <div key={i} className="card-outer">
            <div className="card-bg-hover" />
            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "4px" }}>
                <h3 style={{ fontSize: "0.9375rem", fontWeight: 600, lineHeight: 1.4, flex: 1 }}>
                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noreferrer"
                    className="card-title-link"
                    style={{ display: "inline-flex", alignItems: "center", color: SLATE_200, textDecoration: "none", transition: "color 0.2s" }}
                  >
                    {cert.name}
                    <ArrowUpRight />
                  </a>
                </h3>
                <span style={{
                  marginLeft: "12px",
                  flexShrink: 0,
                  fontSize: "0.625rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: TEAL,
                  background: "rgba(94,234,212,0.1)",
                  border: "1px solid rgba(94,234,212,0.2)",
                  borderRadius: "4px",
                  padding: "2px 8px",
                }}>
                  VERIFIED
                </span>
              </div>
              <p style={{ fontSize: "0.8125rem", color: "#64748b", marginBottom: "12px" }}>
                {cert.issuer} · <span>{cert.date}</span>
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {cert.tags.map((t) => <Pill key={t}>{t}</Pill>)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View Full Certificate Archive link */}
      <div style={{ marginTop: "32px" }}>
        <button
          onClick={() => navigate("/certificates")}
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
          View Full Certificate Archive
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: "16px", height: "16px", transition: "transform 0.2s" }}>
            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}