import { about } from "../data";

export default function About() {
  return (
    <div>
      <SectionHeader>About</SectionHeader>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {about.split("\n\n").map((para, i) => (
          <p key={i} style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "#94a3b8" }}>
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}

export function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="lg:hidden"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        background: "rgba(15,23,42,0.85)",
        backdropFilter: "blur(8px)",
        marginBottom: "24px",
        marginLeft: "-24px",
        marginRight: "-24px",
        padding: "16px 24px",
      }}
    >
      <h2
        style={{
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#e2e8f0",
        }}
      >
        {children}
      </h2>
    </div>
  );
}
