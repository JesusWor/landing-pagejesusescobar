import profileData from "../data/profile.json"

export default function About() {
  const { bio, stats, education, activities } = profileData

  return (
    <section id="about" style={{ padding: "130px 32px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}
          className="about-grid"
        >
          {/* ── Left ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <SectionLabel>// Sobre mí</SectionLabel>
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  fontWeight: 700,
                  margin: 0,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                Construyo cosas<br />
                <span style={{ color: "#00d4ff" }}>para la web</span>
              </h2>
            </div>

            {bio.map((p, i) => (
              <p key={i} style={{ fontSize: "0.97rem", lineHeight: 1.8, color: "#64748b", margin: 0 }}>
                {p}
              </p>
            ))}

            {/* Stats row */}
            <div style={{ display: "flex", gap: 40, paddingTop: 8, borderTop: "1px solid rgba(0,212,255,0.06)" }}>
              {stats.map((s) => (
                <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "2.2rem",
                      fontWeight: 800,
                      color: "#00d4ff",
                      lineHeight: 1,
                      textShadow: "0 0 30px rgba(0,212,255,0.3)",
                    }}
                  >
                    {s.value}
                  </span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.65rem",
                      color: "#334155",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Education & Activities ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SectionLabel>// Formación & Actividades</SectionLabel>

            {/* Timeline */}
            <div style={{ position: "relative", paddingLeft: 28, display: "flex", flexDirection: "column", gap: 0 }}>
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 10,
                  bottom: 10,
                  width: 1,
                  background: "linear-gradient(to bottom, #00d4ff 0%, rgba(0,212,255,0.08) 100%)",
                }}
              />
              {education.map((e, i) => (
                <div
                  key={i}
                  style={{
                    position: "relative",
                    padding: "20px 22px",
                    borderRadius: 10,
                    border: "1px solid rgba(0,212,255,0.08)",
                    background: "rgba(0,212,255,0.02)",
                    marginBottom: i < education.length - 1 ? 12 : 0,
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,212,255,0.2)"
                    e.currentTarget.style.background = "rgba(0,212,255,0.04)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,212,255,0.08)"
                    e.currentTarget.style.background = "rgba(0,212,255,0.02)"
                  }}
                >
                  {/* Timeline dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: -34,
                      top: 22,
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#00d4ff",
                      boxShadow: "0 0 12px rgba(0,212,255,0.7)",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.68rem",
                      color: "#00ff88",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {e.period}
                  </span>
                  <p style={{ margin: "6px 0 2px", fontWeight: 600, color: "#e2e8f0", fontSize: "0.93rem" }}>
                    {e.degree}
                  </p>
                  <p style={{ margin: 0, color: "#475569", fontSize: "0.82rem" }}>{e.institution}</p>
                </div>
              ))}
            </div>

            {/* Activities */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }}>
              {activities.map((a) => (
                <div
                  key={a.title}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "14px 18px",
                    borderRadius: 10,
                    border: "1px solid rgba(0,212,255,0.06)",
                    background: "rgba(0,212,255,0.015)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,212,255,0.16)"
                    e.currentTarget.style.background = "rgba(0,212,255,0.04)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,212,255,0.06)"
                    e.currentTarget.style.background = "rgba(0,212,255,0.015)"
                  }}
                >
                  <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{a.emoji}</span>
                  <div>
                    <p style={{ margin: 0, fontSize: "0.87rem", fontWeight: 500, color: "#e2e8f0" }}>{a.title}</p>
                    <p style={{ margin: 0, fontSize: "0.76rem", color: "#475569" }}>{a.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.68rem",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "#00d4ff",
        opacity: 0.8,
      }}
    >
      {children}
    </span>
  )
}
