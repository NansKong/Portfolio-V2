import { hero } from "../data";

export default function Footer() {
  return (
    <footer style={{ paddingBottom: "32px" }}>
      <p style={{ fontSize: "0.8125rem", color: "#475569", lineHeight: 1.75 }}>
        Designed &amp; built by{" "}
        <a
          href={hero.github}
          target="_blank"
          rel="noreferrer"
          style={{ color: "#94a3b8", textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#5eead4")}
          onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}
        >
          Rudrax Kongbrailatpam
        </a>
        {/* . Inspired by{" "}
        <a
          href="https://brittanychiang.com"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#94a3b8", textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#5eead4")}
          onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}
        >
          Brittany Chiang
        </a> */}
        .
      </p>
    </footer>
  );
}
