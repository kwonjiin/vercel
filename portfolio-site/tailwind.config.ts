import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#16181d",
        "bg-elevated": "#1e2128",
        "bg-elevated-2": "#25282f",
        fg: "#e8e6e1",
        "fg-dim": "#8b8f98",
        "fg-faint": "#5a5e68",
        border: "#2a2d35",
        "border-bright": "#3a3e48",
        cyan: "#7dd3c0",
        amber: "#e8b567",
        magenta: "#d68fd6",
        rose: "#e08585",
      },
      fontFamily: {
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(125,211,192,0.08), transparent 70%)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
