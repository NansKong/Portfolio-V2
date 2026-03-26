import { education } from "../data";
import { SectionHeader } from "./About";
import { Pill } from "./Experience";

const TEAL = "#5eead4";
const SLATE_200 = "#e2e8f0";
const SLATE_400 = "#94a3b8";

export default function Education() {
  return (
    <div>
      <SectionHeader>Education</SectionHeader>
      <div className="card-list">
        {education.map((item, i) => (
          <div key={i} className="card-outer">
            <div className="card-bg-hover" />
            <div style={{ position: "relative", display: "flex", gap: "24px" }}>
              {/* Date */}
              <div style={{ flexShrink: 0, width: "140px", paddingTop: "4px" }}>
                <span style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#64748b" }}>
                  {item.dates}
                </span>
              </div>
              {/* Content */}
              <div style={{ flex: 1 }}>
                <h3 style={{ marginBottom: "4px", fontSize: "0.9375rem", fontWeight: 600, lineHeight: 1.4 }}>
                  <span className="card-title" style={{ color: SLATE_200 }}>{item.degree}</span>
                </h3>
                {item.institutionUrl ? (
                  <a href={item.institutionUrl} target="_blank" rel="noreferrer"
                    style={{ fontSize: "0.875rem", color: TEAL, textDecoration: "none", display: "block", marginBottom: "8px" }}>
                    {item.institution}
                  </a>
                ) : (
                  <p style={{ fontSize: "0.875rem", color: TEAL, marginBottom: "8px" }}>{item.institution}</p>
                )}
                <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: SLATE_400 }}>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
