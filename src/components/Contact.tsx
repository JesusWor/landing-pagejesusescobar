import profileData from "../data/profile.json"
import { GithubIcon, LinkedinIcon } from "./Icons"

export default function Contact() {
  const { social, location } = profileData

  return (
    <section id="contact" style={{ padding: "130px 32px 100px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        {/* Two-column layout */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
          className="contact-grid"
        >
          {/* Left: big headline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.68rem",
                letterSpacing: "0.18em",
                color: "#00d4ff",
                opacity: 0.8,
              }}
            >
              // Contacto
            </span>
            <h2
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              ¿Tienes un proyecto<br />
              en mente?{" "}
              <span
                style={{
                  color: "#00d4ff",
                  textShadow: "0 0 40px rgba(0,212,255,0.3)",
                }}
              >
                Hablemos.
              </span>
            </h2>
            <p style={{ fontSize: "0.97rem", lineHeight: 1.78, color: "#64748b", maxWidth: 420, margin: 0 }}>
              Estoy disponible para proyectos freelance, colaboraciones y oportunidades profesionales. No dudes en escribirme.
            </p>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", paddingTop: 8 }}>
              <ContactBtn
                href={social.whatsapp}
                label="WhatsApp"
                emoji="💬"
                primary
              />
            </div>
          </div>

          {/* Right: links card */}
          <div
            style={{
              borderRadius: 16,
              border: "1px solid rgba(0,212,255,0.1)",
              background: "rgba(0,212,255,0.02)",
              padding: "36px 36px",
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  color: "#1e3a4a",
                  letterSpacing: "0.14em",
                }}
              >
                REDES PROFESIONALES
              </span>
              <div style={{ height: 1, background: "rgba(0,212,255,0.06)" }} />
            </div>

            <SocialRow
              href={social.github}
              icon={<GithubIcon size={20} />}
              label="GitHub"
              handle="@JesusWor"
              desc="Código y proyectos open source"
            />
            <SocialRow
              href={social.linkedin}
              icon={<LinkedinIcon size={20} />}
              label="LinkedIn"
              handle="jesus-escobar-123572344"
              desc="Perfil profesional y experiencia"
            />

            <div
              style={{
                paddingTop: 20,
                borderTop: "1px solid rgba(0,212,255,0.06)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#00ff88",
                  boxShadow: "0 0 8px #00ff88",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.7rem",
                  color: "#334155",
                }}
              >
                {location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactBtn({
  href,
  label,
  emoji,
  primary,
}: {
  href: string
  label: string
  emoji?: string
  primary?: boolean
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "13px 28px",
        borderRadius: 9,
        fontWeight: primary ? 700 : 500,
        fontSize: "0.9rem",
        textDecoration: "none",
        transition: "all 0.2s ease",
        ...(primary
          ? {
              background: "linear-gradient(135deg,#00d4ff 0%,#0099c4 100%)",
              color: "#03070e",
              boxShadow: "0 4px 24px rgba(0,212,255,0.2)",
            }
          : {
              border: "1px solid rgba(0,212,255,0.22)",
              color: "#94a3b8",
              background: "rgba(0,212,255,0.03)",
            }),
      }}
      onMouseEnter={(e) => {
        if (primary) {
          e.currentTarget.style.boxShadow = "0 4px 40px rgba(0,212,255,0.45)"
          e.currentTarget.style.transform = "translateY(-2px)"
        } else {
          e.currentTarget.style.borderColor = "rgba(0,212,255,0.45)"
          e.currentTarget.style.color = "#00d4ff"
        }
      }}
      onMouseLeave={(e) => {
        if (primary) {
          e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,212,255,0.2)"
          e.currentTarget.style.transform = "translateY(0)"
        } else {
          e.currentTarget.style.borderColor = "rgba(0,212,255,0.22)"
          e.currentTarget.style.color = "#94a3b8"
        }
      }}
    >
      {emoji && <span>{emoji}</span>}
      {label}
    </a>
  )
}

function SocialRow({
  href,
  icon,
  label,
  handle,
  desc,
}: {
  href: string
  icon: React.ReactNode
  label: string
  handle: string
  desc: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        textDecoration: "none",
        padding: "14px 16px",
        borderRadius: 10,
        border: "1px solid transparent",
        transition: "all 0.2s ease",
        margin: "0 -16px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(0,212,255,0.12)"
        e.currentTarget.style.background = "rgba(0,212,255,0.03)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "transparent"
        e.currentTarget.style.background = "transparent"
      }}
    >
      <span
        style={{
          width: 42,
          height: 42,
          borderRadius: 10,
          border: "1px solid rgba(0,212,255,0.12)",
          background: "rgba(0,212,255,0.04)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#00d4ff",
          flexShrink: 0,
        }}
      >
        {icon}
      </span>
      <div style={{ display: "flex", flexDirection: "column", gap: 2, overflow: "hidden" }}>
        <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#e2e8f0" }}>{label}</span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            color: "#334155",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {handle}
        </span>
        <span style={{ fontSize: "0.78rem", color: "#475569" }}>{desc}</span>
      </div>
    </a>
  )
}
