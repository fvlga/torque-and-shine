import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        asphalt: "#15171a",
        concrete: "#24272b",
        "concrete-2": "#2f3338",
        chalk: "#f1efe9",
        "chalk-dim": "#b9b6ae",
        amber: "#e8a33d",
        "amber-light": "#f2b352",
        "wax-red": "#8c3232",
        line: "rgba(241,239,233,0.1)",
      },
      fontFamily: {
        display: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      borderRadius: {
        DEFAULT: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
