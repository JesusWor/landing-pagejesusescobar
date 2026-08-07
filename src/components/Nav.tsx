import { useState, useEffect } from "react"
import navData from "../data/nav.json"
import profileData from "../data/profile.json"

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState("#hero")

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const sections = navData.map((l) => l.href)
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.querySelector(sections[i]) as HTMLElement | null
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
        background: scrolled ? "rgba(4,8,15,0.88)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(0,212,255,0.08)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>

          {/* Wordmark */}
          <a href="#hero" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.82rem",
              color: "#00d4ff",
              letterSpacing: "0.06em",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}>
              <span style={{
                width: 28,
                height: 28,
                borderRadius: 6,
                border: "1px solid rgba(0,212,255,0.3)",
                background: "rgba(0,212,255,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.7rem",
                color: "#00d4ff",
              }}>JE</span>
              {profileData.handle}
            </span>
          </a>

          {/* Desktop links */}
          <div
            style={{ display: "flex", gap: 4, alignItems: "center" }}
            className="nav-desktop"
          >
            {navData.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.72rem",
                  letterSpacing: "0.04em",
                  color: active === l.href ? "#00d4ff" : "#475569",
                  textDecoration: "none",
                  padding: "6px 14px",
                  borderRadius: 6,
                  transition: "all 0.2s ease",
                  background: active === l.href ? "rgba(0,212,255,0.06)" : "transparent",
                  border: active === l.href ? "1px solid rgba(0,212,255,0.15)" : "1px solid transparent",
                }}
                onMouseEnter={(e) => {
                  if (active !== l.href) {
                    e.currentTarget.style.color = "#94a3b8"
                  }
                }}
                onMouseLeave={(e) => {
                  if (active !== l.href) {
                    e.currentTarget.style.color = "#475569"
                  }
                }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-mobile-btn"
            style={{
              background: "none",
              border: "1px solid rgba(0,212,255,0.15)",
              borderRadius: 6,
              color: "#00d4ff",
              cursor: "pointer",
              fontSize: "1rem",
              width: 36,
              height: 36,
              display: "none",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div
            style={{
              padding: "16px 0 24px",
              borderTop: "1px solid rgba(0,212,255,0.08)",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {navData.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.8rem",
                  color: active === l.href ? "#00d4ff" : "#475569",
                  textDecoration: "none",
                  padding: "10px 12px",
                  borderRadius: 6,
                  background: active === l.href ? "rgba(0,212,255,0.06)" : "transparent",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
