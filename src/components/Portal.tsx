import { useState, useEffect } from "react";

export default function Portal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Scroll visibility logic
  useEffect(() => {
    const handleScroll = () => {
      // Show portal when user scrolls near the bottom of the page
      const isAtBottom =
        window.innerHeight + Math.round(window.scrollY) >=
        document.documentElement.scrollHeight - 150;
      setIsVisible(isAtBottom);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close with Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <div 
        className={`fixed bottom-0 right-0 z-40 p-4 sm:p-6 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isVisible || isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-16 opacity-0 pointer-events-none"
        }`}
      >
        {/* Trigger TARDIS Button */}
        <button
          className="group inline-flex items-center justify-center font-medium text-slate-400 hover:-translate-y-2 focus-visible:-translate-y-2 transition-transform duration-300"
          type="button"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
        >
          <span className="sr-only">Click to time travel</span>
          <div className="relative w-12 h-[72px] drop-shadow-[0_4px_12px_rgba(94,234,212,0.4)] group-hover:drop-shadow-[0_8px_25px_rgba(94,234,212,0.8)] transition-all orbit-motion">
            <svg
              viewBox="0 0 100 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Light on top */}
              <rect x="45" y="0" width="10" height="15" fill="#e2e8f0" />
              <path d="M40 15 L60 15 L55 5 L45 5 Z" fill="#1e3a8a" />
              <circle
                cx="50"
                cy="5"
                r="4"
                fill="#5eead4"
                className="group-hover:animate-pulse"
                style={{
                  filter: "drop-shadow(0 0 8px #5eead4)",
                }}
              />

              {/* Roof */}
              <rect x="30" y="15" width="40" height="5" fill="#1e3a8a" />
              <rect x="25" y="20" width="50" height="5" fill="#1e3a8a" />
              <rect x="20" y="25" width="60" height="10" fill="#1e3a8a" />

              {/* Police box sign */}
              <rect x="25" y="30" width="50" height="12" fill="#0f172a" stroke="#e2e8f0" strokeWidth="1.5" />
              <text x="50" y="39" fontSize="7px" fill="#e2e8f0" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" letterSpacing="0.5px">
                POLICE BOX
              </text>

              {/* Main body */}
              <rect x="20" y="45" width="60" height="105" fill="#1e3a8a" stroke="#1e40af" strokeWidth="2" />

              {/* Windows / Panels */}
              <rect x="28" y="55" width="18" height="20" fill="#e2e8f0" />
              <line x1="37" y1="55" x2="37" y2="75" stroke="#1e3a8a" strokeWidth="2" />
              <line x1="28" y1="65" x2="46" y2="65" stroke="#1e3a8a" strokeWidth="2" />

              <rect x="54" y="55" width="18" height="20" fill="#e2e8f0" />
              <line x1="63" y1="55" x2="63" y2="75" stroke="#1e3a8a" strokeWidth="2" />
              <line x1="54" y1="65" x2="72" y2="65" stroke="#1e3a8a" strokeWidth="2" />

              <rect x="28" y="85" width="18" height="25" fill="#1e40af" />
              <rect x="54" y="85" width="18" height="25" fill="#1e40af" />

              <rect x="28" y="120" width="18" height="25" fill="#1e40af" />
              <rect x="54" y="120" width="18" height="25" fill="#1e40af" />

              {/* Center line */}
              <line x1="50" y1="45" x2="50" y2="150" stroke="#0f172a" strokeWidth="2.5" />
            </svg>
          </div>
        </button>
      </div>

      {isOpen && (
        <div
          role="dialog"
          className="fixed inset-0 z-50 flex h-full w-full items-center justify-center pointer-events-auto"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-md transition-opacity animate-in fade-in duration-500"
            onClick={() => setIsOpen(false)}
          />

          {/* Close button */}
          <button
            className="absolute right-0 top-0 p-4 text-slate-500 hover:text-slate-200 focus-visible:text-slate-200 z-50"
            aria-label="Close"
            onClick={() => setIsOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Magical Background Orb (CodePen Implementation) */}
          <div className="pointer-events-none fixed inset-0 flex items-center justify-center overflow-hidden mix-blend-screen opacity-90 z-0">
            <div className="portal-orb"></div>
            <div className="portal-orb"></div>
            <div className="portal-orb"></div>
            <div className="portal-orb"></div>
            <div className="portal-orb"></div>
          </div>

          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-lg star-wars-perspective animate-in fade-in zoom-in-90 duration-700 delay-200 fill-mode-both px-4">
            <div className="star-wars-skew text-center">
              <h2 className="mx-auto mb-10 max-w-sm text-center text-2xl font-bold leading-tight tracking-tight text-white drop-shadow-lg sm:text-3xl lg:max-w-md lg:text-4xl text-shadow-[0_2px_15px_rgba(255,255,255,0.4)]">
                Looking for a different site? Go back in time...
              </h2>
              <div className="flex justify-center">
                <a
                  className="group relative block transition-all hover:scale-[1.03]"
                  href="https://rudraxkongbrailatpam.vercel.app/"
                  aria-label="Portfolio version 1"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div className="relative mx-auto w-[320px] h-[180px] rounded border-[3px] border-zinc-900/30 bg-slate-800 drop-shadow-[0_10px_35px_rgba(0,0,0,0.55)] transition-all group-hover:drop-shadow-[0_15px_45px_rgba(94,234,212,0.4)] overflow-hidden pointer-events-none">
                    <iframe
                      src="https://rudraxkongbrailatpam.vercel.app/"
                      title="Portfolio version 1 preview"
                      className="absolute top-0 left-0 origin-top-left pointer-events-none"
                      style={{ width: "1280px", height: "720px", transform: "scale(0.25)" }}
                      tabIndex={-1}
                      aria-hidden="true"
                    />
                  </div>
                  {/* Dark overlay on hover */}
                  <div className="absolute left-0 top-0 hidden h-full w-full items-center justify-center rounded border-4 border-teal-400/0 bg-zinc-900/60 align-middle opacity-0 backdrop-blur-[2px] transition-all group-hover:opacity-100 group-hover:border-teal-400/80 group-focus-visible:opacity-100 lg:flex duration-300">
                    <h3 className="not-sr-only text-3xl font-extrabold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] tracking-widest">
                      v1
                    </h3>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Credit */}
          <a
            className="absolute inset-x-0 bottom-0 z-40 block p-8 text-center text-xs text-slate-500 underline hover:text-slate-200 focus-visible:text-slate-200 sm:left-auto md:p-4 pointer-events-auto animate-in fade-in duration-1000 delay-700 fill-mode-both"
            href="https://codepen.io/jasesmith/pen/qqgvZe"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Credit: A Portal to Tomorrow by @jasesmith"
          >
            A Portal to Tomorrow by @jasesmith
          </a>
        </div>
      )}
    </>
  );
}
