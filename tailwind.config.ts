import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        surface: "#121221",
        surfaceElevated: "#1a1a2e",
        border: "#2a2a3d",
        accent: {
          DEFAULT: "#a855f7",
          soft: "#c084fc",
          deep: "#7c3aed",
        },
        muted: "#8b8ba7",
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse at top, rgba(168, 85, 247, 0.18), transparent 60%), radial-gradient(ellipse at bottom right, rgba(124, 58, 237, 0.12), transparent 60%)",
        "accent-gradient":
          "linear-gradient(135deg, #a855f7 0%, #7c3aed 60%, #4f46e5 100%)",
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(168, 85, 247, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
