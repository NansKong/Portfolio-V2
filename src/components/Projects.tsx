import { useRef, useState, useEffect } from "react";
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

function LivePreview({ url, title, href }: { url: string; title: string; href: string }) {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const [scale, setScale] = useState(0.125);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        if (width > 0) {
          setScale(width / 1280);
        }
      }
    };
    updateScale();
    const ro = new ResizeObserver(updateScale);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", updateScale);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${title} live website`}
      ref={containerRef}
      className="group/preview block relative w-32 sm:w-full aspect-[16/9] rounded border-[2px] border-slate-200/10 hover:border-teal-300/60 focus-visible:border-teal-300/80 transition-all duration-300 hover:scale-[1.04] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(94,234,212,0.25)] overflow-hidden bg-slate-900 drop-shadow-sm sm:translate-y-1 cursor-pointer"
    >
      <iframe
        src={url}
        title={`${title} live preview`}
        className="absolute top-0 left-0 origin-top-left pointer-events-none select-none transition-transform duration-500"
        style={{
          width: "1280px",
          height: "720px",
          transform: `scale(${scale})`,
          border: "none",
        }}
        loading="lazy"
        tabIndex={-1}
        aria-hidden="true"
      />
      {/* Dark overlay with "Live Site ↗" pill on hover */}
      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1.5px] pointer-events-none">
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-slate-900/90 text-teal-300 border border-teal-300/40 shadow-lg transform translate-y-1 group-hover/preview:translate-y-0 transition-transform duration-300">
          Live Site
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: "12px", height: "12px" }}>
            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
          </svg>
        </span>
      </div>
    </a>
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
                      href={project.demo || project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="card-title-link"
                      style={{ display: "inline-flex", alignItems: "center", color: SLATE_200, textDecoration: "none", transition: "color 0.2s" }}
                    >
                      {project.title}
                      <ArrowUpRight />
                    </a>
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginLeft: "12px", flexShrink: 0 }}>
                    {project.demo && (
                      <a
                        href={project.demo}
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
                      href={project.github}
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
                  {project.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {project.tech.map((t) => <Pill key={t}>{t}</Pill>)}
                </div>
              </div>

              {/* Left Column (Live Preview, Image or Badge) */}
              <div className="sm:order-1 sm:col-span-2 pt-1 z-10 shrink-0 mb-4 sm:mb-0">
                {project.livePreview ? (
                  <LivePreview
                    url={project.livePreview}
                    title={project.title}
                    href={project.demo || project.github}
                  />
                ) : project.image ? (
                  <a
                    href={project.demo || project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="group/img block relative w-32 sm:w-full aspect-[16/9] rounded border-[2px] border-slate-200/10 hover:border-teal-300/60 focus-visible:border-teal-300/80 transition-all duration-300 hover:scale-[1.04] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(94,234,212,0.25)] overflow-hidden bg-slate-900 drop-shadow-sm sm:translate-y-1 cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} thumbnail`}
                      loading="lazy"
                      width="200"
                      height="112"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1.5px] pointer-events-none">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-slate-900/90 text-teal-300 border border-teal-300/40 shadow-lg transform translate-y-1 group-hover/img:translate-y-0 transition-transform duration-300">
                        {project.demo ? "Live Site" : "View Code"}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: "12px", height: "12px" }}>
                          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </div>
                  </a>
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

