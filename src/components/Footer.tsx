import profileData from "../data/profile.json"

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(0,212,255,0.06)",
        padding: "28px 32px",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.68rem",
            color: "#1e293b",
          }}
        >
          © {new Date().getFullYear()} {profileData.shortName}
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.68rem",
            color: "#1e293b",
          }}
        >
          Built with React + TypeScript + Vite
        </span>
      </div>
    </footer>
  )
}
