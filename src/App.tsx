import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ArchivePage from "./pages/ArchivePage";
import CertificateArchivePage from "./pages/CertificateArchivePage";
import Portal from "./components/Portal";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/certificates" element={<CertificateArchivePage />} />
      </Routes>
      <Portal />
    </div>
  );
}

function HomePage() {
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", color: "#94a3b8", position: "relative" }}>
      {/* Mouse spotlight */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background: `radial-gradient(800px circle at ${mouse.x}px ${mouse.y}px, rgba(29,78,216,0.10) 0%, transparent 80%)`,
        }}
      />

      <div
        style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        data-layout="two-col"
      >
        {/* LEFT sidebar */}
        <div data-layout="sidebar" style={{ padding: "96px 0" }}>
          <Header activeSection={activeSection} />
        </div>

        {/* RIGHT content */}
        <main data-layout="content" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
          {[
            { id: "about", Component: About },
            { id: "skills", Component: Skills },
            { id: "experience", Component: Experience },
            { id: "education", Component: Education },
            { id: "certificates", Component: Certificates },
            { id: "projects", Component: Projects },
          ].map(({ id, Component }) => (
            <section key={id} id={id} style={{ marginBottom: "144px", scrollMarginTop: "96px" }}>
              <Component />
            </section>
          ))}
          <Footer />
        </main>
      </div>
    </div>
  );
}
