import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Light parchment mode (TikTok / print)
        parchment: "#EDE5D8",
        linen: "#F5EFE6",
        beige: "#DDD0BE",
        // ── Dark atmospheric mode (app screens)
        "atmo-dark": "#2A211A",
        "atmo-deep": "#1E1812",
        "atmo-surface": "rgba(42,33,26,0.72)",
        // ── Text
        cream: "#F5EDE2",
        "cream-dim": "#D8CCBE",
        ink: "#2A211A",
        "ink-light": "#5A4E44",
        // ── Accents
        sakura: "#E8C0B4",
        amber: "#C4943A",
        "amber-glow": "#D4A84A",
        mist: "#9AA4A8",
        clay: "#C8A882",
        "clay-dark": "#A07850",
        // ── Interactive
        "pill-bg": "rgba(237,229,216,0.18)",
        "pill-border": "rgba(237,229,216,0.35)",
        "pill-hover": "rgba(237,229,216,0.28)",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-sm": ["2.5rem", { lineHeight: "1.15" }],
      },
      backgroundImage: {
        "parchment-gradient": "linear-gradient(160deg,#F0E8DC 0%,#E8DDD0 60%,#DDD5C8 100%)",
      },
      backdropBlur: {
        pill: "12px",
      },
      borderRadius: {
        pill: "9999px",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out",
        "rise": "rise 0.7s ease-out",
        "glow": "glow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%,100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
