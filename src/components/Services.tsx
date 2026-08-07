import { useState } from "react"
import servicesData from "../data/services.json"

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "130px 32px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg,transparent 0%,rgba(0,255,136,0.012) 50%,transparent 100%)",
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
            // Servicios
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Cómo puedo <span style={{ color: "#00ff88" }}>ayudarte</span>
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}
          className="services-grid"
        >
          {servicesData.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service: s }: { service: typeof servicesData[0] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 14,
        border: `1px solid ${hovered ? "rgba(0,212,255,0.2)" : "rgba(0,212,255,0.07)"}`,
        background: hovered ? "rgba(0,212,255,0.04)" : "rgba(0,212,255,0.015)",
        padding: "36px 30px",
        display: "flex",
        flexDirection: "column",
        gap: 18,
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow orb */}
      <div
        style={{
          position: "absolute",
          bottom: -40,
          right: -40,
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${s.color}18 0%, transparent 70%)`,
          transition: "opacity 0.3s ease",
          opacity: hovered ? 1 : 0,
          pointerEvents: "none",
        }}
      />

      {/* Icon */}
      <span
        style={{
          fontSize: "1.6rem",
          color: s.color,
          textShadow: hovered ? `0 0 20px ${s.color}80` : "none",
          transition: "text-shadow 0.3s ease",
          lineHeight: 1,
        }}
      >
        {s.icon}
      </span>

      {/* Content */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <h3
          style={{
            margin: 0,
            fontSize: "1.02rem",
            fontWeight: 600,
            color: hovered ? "#e2e8f0" : "#94a3b8",
            transition: "color 0.2s ease",
            letterSpacing: "-0.01em",
          }}
        >
          {s.title}
        </h3>
        <p style={{ margin: 0, fontSize: "0.86rem", lineHeight: 1.72, color: "#475569" }}>
          {s.description}
        </p>
      </div>
    </div>
  )
}
