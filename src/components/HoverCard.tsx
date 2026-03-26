import { type ReactNode } from "react";

const TEAL = "#5eead4";
const SLATE_200 = "#e2e8f0";

interface Props {
  children: ReactNode;
  href?: string;
}

export default function HoverCard({ children, href }: Props) {
  const inner = (
    <div
      style={{
        position: "relative",
        borderRadius: "8px",
        padding: "20px",
        transition: "background 0.25s ease, box-shadow 0.25s ease",
        cursor: "default",
      }}
      className="card-item"
    >
      {/* Hover background layer */}
      <div
        className="card-bg"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "8px",
          background: "rgba(148,163,184,0.05)",
          border: "1px solid rgba(148,163,184,0.1)",
          opacity: 0,
          transition: "opacity 0.25s ease",
          pointerEvents: "none",
        }}
      />
      {children}
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block" }}
        className="card-item-link">
        {inner}
      </a>
    );
  }
  return inner;
}

export { TEAL, SLATE_200 };
