import { hero } from "../data";

const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "projects", label: "Projects" },
];

interface Props {
  activeSection: string;
}

const TEAL = "#5eead4";
const SLATE_200 = "#e2e8f0";
const SLATE_400 = "#94a3b8";

export default function Header({ activeSection }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
      <div>
        {/* Name */}
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.025em", color: SLATE_200, lineHeight: 1.1, marginBottom: "12px" }}>
          <a href="/" style={{ textDecoration: "none", color: "inherit", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = TEAL)}
            onMouseLeave={e => (e.currentTarget.style.color = SLATE_200)}>
            {hero.name}
          </a>
        </h1>

        {/* Title */}
        <h2 style={{ fontSize: "clamp(0.875rem, 2vw, 1.25rem)", fontWeight: 500, color: SLATE_200, marginBottom: "16px", letterSpacing: "0.01em" }}>
          AI/ML Engineer &amp; Full-Stack Developer
        </h2>

        {/* Tagline */}
        <p style={{ maxWidth: "320px", fontSize: "0.9375rem", lineHeight: 1.625, color: SLATE_400 }}>
          I build intelligent, production-ready systems — from ML models to scalable APIs and automation tools.
        </p>

        {/* Nav */}
        <nav style={{ marginTop: "48px" }} className="hidden lg:block">
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px" }}>
            {navLinks.map(({ id, label }) => {
              const isActive = activeSection === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      textDecoration: "none",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: isActive ? SLATE_200 : SLATE_400,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = SLATE_200;
                      const line = e.currentTarget.querySelector(".nav-line") as HTMLElement;
                      if (line) { line.style.width = "64px"; line.style.background = SLATE_200; }
                    }}
                    onMouseLeave={e => {
                      if (!isActive) e.currentTarget.style.color = SLATE_400;
                      const line = e.currentTarget.querySelector(".nav-line") as HTMLElement;
                      if (line) {
                        line.style.width = isActive ? "64px" : "32px";
                        line.style.background = isActive ? SLATE_200 : "#64748b";
                      }
                    }}
                  >
                    <span
                      className="nav-line"
                      style={{
                        display: "inline-block",
                        height: "1px",
                        width: isActive ? "64px" : "32px",
                        background: isActive ? SLATE_200 : "#64748b",
                        transition: "width 0.2s ease, background 0.2s ease",
                        flexShrink: 0,
                      }}
                    />
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Social icons */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px", marginTop: "32px" }}>
        <SocialLink href={hero.github} label="GitHub">
          <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "22px", height: "22px" }}>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </SocialLink>

        <SocialLink href={hero.linkedin} label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "22px", height: "22px" }}>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </SocialLink>

        <SocialLink href={hero.medium} label="Medium">
          <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "22px", height: "22px" }}>
            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
          </svg>
        </SocialLink>

        <SocialLink href={`mailto:${hero.email}`} label="Email">
          <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "22px", height: "22px" }}>
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
        </SocialLink>
      </div>
    </div>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      style={{ color: "#64748b", transition: "color 0.2s, transform 0.2s", display: "flex" }}
      onMouseEnter={e => {
        e.currentTarget.style.color = TEAL;
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.color = "#64748b";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {children}
    </a>
  );
}
