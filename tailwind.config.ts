import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       secondary: "#007aff",
       darkBg: "#131424"
      },
      backgroundImage: {
        "gradient-cover":
          "Linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) - 5.91% rgba(74,47,189,0.5) 1111.58%)"
      },
    },
  },
  plugins: [],
} satisfies Config;
