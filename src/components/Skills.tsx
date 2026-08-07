import skillsData from "../data/skills.json"

export default function Skills() {
  const grouped = skillsData.reduce<Record<string, typeof skillsData>>((acc, s) => {
    if (!acc[s.category]) acc[s.category] = []
    acc[s.category].push(s)
    return acc
  }, {})

  return (
    <section
      id="skills"
      style={{
        padding: "130px 32px",
        position: "relative",
      }}
    >
      {/* Subtle gradient band */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg,transparent 0%,rgba(0,212,255,0.018) 50%,transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{ marginBottom: 72, display: "flex", flexDirection: "column", gap: 14 }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.18em",
              color: "#00d4ff",
              opacity: 0.8,
            }}
          >
            // Stack tecnológico
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Tecnologías que <span style={{ color: "#00d4ff" }}>domino</span>
          </h2>
        </div>

        {/* Skill rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {Object.entries(grouped).map(([cat, skills]) => (
            <div
              key={cat}
              style={{ display: "flex", gap: 32, alignItems: "flex-start" }}
              className="skill-row"
            >
              {/* Category label */}
              <div style={{ minWidth: 120, paddingTop: 6 }}>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.62rem",
                    color: "#1e3a4a",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  {cat}
                </span>
              </div>

              {/* Skill pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {skills.map((s) => (
                  <SkillPill key={s.name} name={s.name} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom divider accent */}
        <div
          style={{
            marginTop: 72,
            height: 1,
            background:
              "linear-gradient(90deg,transparent,rgba(0,212,255,0.15) 30%,rgba(0,212,255,0.15) 70%,transparent)",
          }}
        />
      </div>
    </section>
  )
}

function SkillPill({ name }: { name: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "7px 16px",
        borderRadius: 5,
        border: "1px solid rgba(0,212,255,0.1)",
        background: "rgba(0,212,255,0.03)",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.76rem",
        color: "#475569",
        letterSpacing: "0.03em",
        cursor: "default",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(0,212,255,0.35)"
        e.currentTarget.style.background = "rgba(0,212,255,0.07)"
        e.currentTarget.style.color = "#00d4ff"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(0,212,255,0.1)"
        e.currentTarget.style.background = "rgba(0,212,255,0.03)"
        e.currentTarget.style.color = "#475569"
      }}
    >
      {name}
    </span>
  )
}
