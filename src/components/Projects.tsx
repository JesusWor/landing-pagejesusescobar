import { useState } from "react"
import projectsData from "../data/projects.json"
import { GithubIcon, ExternalLinkIcon } from "./Icons"

type Project = typeof projectsData[0]

function ProjectCard({ project: p }: { project: Project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 14,
        border: `1px solid ${hovered ? "rgba(0,212,255,0.22)" : "rgba(0,212,255,0.08)"}`,
        background: hovered ? "rgba(0,212,255,0.04)" : "rgba(0,212,255,0.015)",
        padding: "28px 28px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 18,
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        cursor: "default",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, ${p.accent} 0%, transparent 75%)`,
          opacity: hovered ? 1 : 0.3,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Header row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.62rem",
            color: "#1e3a4a",
            letterSpacing: "0.16em",
          }}
        >
          PROJECT_{p.id} / {p.year}
        </span>
        <div style={{ display: "flex", gap: 14 }}>
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: hovered ? "#94a3b8" : "#1e3a4a",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00d4ff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = hovered ? "#94a3b8" : "#1e3a4a")}
            >
              <GithubIcon size={15} />
            </a>
          )}
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: hovered ? "#94a3b8" : "#1e3a4a",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00d4ff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = hovered ? "#94a3b8" : "#1e3a4a")}
            >
              <ExternalLinkIcon size={15} />
            </a>
          )}
        </div>
      </div>

      {/* Title & description */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <h3
          style={{
            margin: 0,
            fontSize: "1.05rem",
            fontWeight: 600,
            color: hovered ? "#e2e8f0" : "#94a3b8",
            transition: "color 0.2s ease",
            letterSpacing: "-0.01em",
          }}
        >
          {p.title}
        </h3>
        <p style={{ margin: 0, fontSize: "0.855rem", lineHeight: 1.72, color: "#475569" }}>
          {p.description}
        </p>
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
        {p.tags.map((t) => (
          <span
            key={t}
            style={{
              padding: "3px 10px",
              borderRadius: 4,
              border: "1px solid rgba(0,212,255,0.1)",
              background: "rgba(0,212,255,0.03)",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.68rem",
              color: "#334155",
              letterSpacing: "0.02em",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "130px 32px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 56, display: "flex", flexDirection: "column", gap: 14 }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.18em",
              color: "#00d4ff",
              opacity: 0.8,
            }}
          >
            // Proyectos destacados
          </span>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 700,
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Lo que he <span style={{ color: "#00d4ff" }}>construido</span>
            </h2>
            <a
              href="https://github.com/JesusWor"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.72rem",
                color: "#334155",
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00d4ff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#334155")}
            >
              <GithubIcon size={14} /> Ver todos en GitHub
            </a>
          </div>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {projectsData.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
