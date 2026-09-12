import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#1A1A1A",
        surface: "#262626",
        surfaceLine: "#3E3E3E",
        ink: "#EFF2F6",
        muted: "#9A9A9A",
        trace: "#4DE8B0",
        amber: "#F5A623",
        accent: "#FFA116",
        easy: "#00B8A3",
        medium: "#FFC01E",
        hard: "#FF375F",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
