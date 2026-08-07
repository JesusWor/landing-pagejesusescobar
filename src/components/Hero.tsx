import { useState, useEffect } from "react"
import profileData from "../data/profile.json"
import { GithubIcon, LinkedinIcon } from "./Icons"

function TerminalCard() {
  const lines = [
    { prompt: true,  text: "whoami",                       color: "#94a3b8" },
    { prompt: false, text: "jesus_escobar",                color: "#00ff88" },
    { prompt: true,  text: "cat stack.txt",                color: "#94a3b8" },
    { prompt: false, text: "React · Next.js · TypeScript", color: "#e2e8f0" },
    { prompt: false, text: "Python · Flask · PHP",         color: "#e2e8f0" },
    { prompt: false, text: "Tailwind · Git · REST APIs",   color: "#e2e8f0" },
    { prompt: true,  text: "echo $STATUS",                 color: "#94a3b8" },
    { prompt: false, text: "open_to_opportunities=true",   color: "#00ff88" },
  ]

  return (
    <div
      style={{
        borderRadius: 14,
        overflow: "hidden",
        border: "1px solid rgba(0,212,255,0.14)",
        background: "rgba(4,12,22,0.8)",
        backdropFilter: "blur(16px)",
        width: 360,
        boxShadow: "0 0 40px rgba(0,212,255,0.07), 0 24px 60px rgba(0,0,0,0.5)",
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      {/* Window chrome */}
      <div
        style={{
          padding: "11px 16px",
          background: "rgba(0,212,255,0.04)",
          borderBottom: "1px solid rgba(0,212,255,0.08)",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57", opacity: 0.9 }} />
        <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#febc2e", opacity: 0.9 }} />
        <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840", opacity: 0.9 }} />
        <span style={{ marginLeft: 10, fontSize: "0.68rem", color: "#2d4a63", letterSpacing: "0.05em" }}>
          portfolio.sh — zsh
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: "20px 22px 24px", display: "flex", flexDirection: "column", gap: 5 }}>
        {lines.map((l, i) => (
          <div key={i} style={{ display: "flex", gap: 8, fontSize: "0.77rem", lineHeight: 1.7 }}>
            {l.prompt && (
              <span style={{ color: "#00d4ff", flexShrink: 0 }}>$</span>
            )}
            <span style={{ color: l.color }}>{l.text}</span>
          </div>
        ))}
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4 }}>
          <span style={{ color: "#00d4ff", fontSize: "0.77rem" }}>$</span>
          <span
            style={{
              display: "inline-block",
              width: 7,
              height: 15,
              background: "#00d4ff",
              animation: "blink 1s step-end infinite",
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const [tick, setTick] = useState(0)
  const { taglines, name, social, bio } = profileData

  useEffect(() => {
    const id = setInterval(() => setTick((t) => (t + 1) % taglines.length), 2800)
    return () => clearInterval(id)
  }, [taglines.length])

  const firstName = name.split(" ")[0] + " Eduardo"
  const lastName = name.split(" ").slice(2).join(" ")

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 68,
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg,rgba(0,212,255,0.03) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Ambient glows */}
      <div style={{ position: "absolute", top: "20%", left: "40%", width: 700, height: 700, background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "5%",  width: 400, height: 400, background: "radial-gradient(circle, rgba(0,255,136,0.04) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "80px 32px", width: "100%", position: "relative" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 64, alignItems: "center" }}
          className="hero-grid"
        >
          {/* ── Left column ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>

            {/* Availability badge */}
            <div style={{ animation: "slideUp 0.6s ease both" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "5px 14px",
                  borderRadius: 100,
                  border: "1px solid rgba(0,255,136,0.2)",
                  background: "rgba(0,255,136,0.05)",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.68rem",
                  color: "#00ff88",
                  letterSpacing: "0.08em",
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00ff88", boxShadow: "0 0 8px #00ff88", display: "inline-block" }} />
                DISPONIBLE PARA PROYECTOS
              </span>
            </div>

            {/* Name */}
            <div style={{ animation: "slideUp 0.6s 0.1s ease both", opacity: 0 }}>
              <h1
                style={{
                  fontSize: "clamp(2.6rem, 5.5vw, 4.8rem)",
                  fontWeight: 800,
                  lineHeight: 1.06,
                  margin: 0,
                  color: "#e2e8f0",
                  letterSpacing: "-0.02em",
                }}
              >
                {firstName}<br />
                <span
                  style={{
                    color: "#00d4ff",
                    textShadow: "0 0 40px rgba(0,212,255,0.35)",
                  }}
                >
                  {lastName}
                </span>
              </h1>
            </div>

            {/* Rotating role */}
            <div style={{ animation: "slideUp 0.6s 0.18s ease both", opacity: 0, height: 28, overflow: "hidden" }}>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "1rem",
                  color: "#475569",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span style={{ color: "#00d4ff" }}>//</span>
                <span key={tick} style={{ animation: "slideUp 0.4s ease both", color: "#94a3b8" }}>
                  {taglines[tick]}
                </span>
              </span>
            </div>

            {/* Bio */}
            <div style={{ animation: "slideUp 0.6s 0.26s ease both", opacity: 0, maxWidth: 520 }}>
              <p style={{ fontSize: "1rem", lineHeight: 1.78, color: "#64748b", margin: 0 }}>
                {bio[0]}
              </p>
            </div>

            {/* CTAs */}
            <div
              style={{
                animation: "slideUp 0.6s 0.34s ease both",
                opacity: 0,
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <a
                href="#projects"
                style={{
                  padding: "12px 28px",
                  borderRadius: 8,
                  background: "linear-gradient(135deg,#00d4ff 0%,#0099c4 100%)",
                  color: "#03070e",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  display: "inline-block",
                  letterSpacing: "0.01em",
                  boxShadow: "0 4px 24px rgba(0,212,255,0.2)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 4px 40px rgba(0,212,255,0.45)"; e.currentTarget.style.transform = "translateY(-2px)" }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,212,255,0.2)"; e.currentTarget.style.transform = "translateY(0)" }}
              >
                Ver Proyectos
              </a>
              <a
                href={social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "12px 28px",
                  borderRadius: 8,
                  border: "1px solid rgba(0,212,255,0.25)",
                  color: "#94a3b8",
                  fontWeight: 500,
                  fontSize: "0.88rem",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  display: "inline-block",
                  background: "rgba(0,212,255,0.03)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.5)"; e.currentTarget.style.color = "#00d4ff"; e.currentTarget.style.background = "rgba(0,212,255,0.06)" }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.25)"; e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.background = "rgba(0,212,255,0.03)" }}
              >
                Contáctame
              </a>
            </div>

            {/* Social row */}
            <div
              style={{
                animation: "slideUp 0.6s 0.42s ease both",
                opacity: 0,
                display: "flex",
                gap: 20,
                alignItems: "center",
              }}
            >
              <SocialLink href={social.github} icon={<GithubIcon size={17} />} label="JesusWor" />
              <div style={{ width: 1, height: 16, background: "rgba(255,255,255,0.07)" }} />
              <SocialLink href={social.linkedin} icon={<LinkedinIcon size={17} />} label="LinkedIn" />
            </div>
          </div>

          {/* ── Right column: Terminal ── */}
          <div
            style={{ animation: "fadeIn 0.8s 0.3s ease both, float 5s 1s ease-in-out infinite", opacity: 0 }}
            className="hero-terminal"
          >
            <TerminalCard />
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 96,
            animation: "fadeIn 1s 0.8s ease both",
            opacity: 0,
          }}
        >
          <a
            href="#about"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
              opacity: 0.4,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.4")}
          >
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "#475569", letterSpacing: "0.18em" }}>
              SCROLL
            </span>
            <div style={{ width: 1, height: 36, background: "linear-gradient(to bottom, rgba(0,212,255,0.5), transparent)" }} />
          </a>
        </div>
      </div>
    </section>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 7,
        color: "#334155",
        textDecoration: "none",
        transition: "color 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#00d4ff")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#334155")}
    >
      {icon}
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.04em" }}>
        {label}
      </span>
    </a>
  )
}
