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
        parchment: "#F5F0E8",
        beige: "#EDE8DC",
        clay: "#C8A882",
        "clay-dark": "#A07850",
        "candle-amber": "#D4943A",
        "muted-rose": "#C4917A",
        "charcoal-ink": "#3A3530",
        "mountain-mist": "#B8BEC8",
        linen: "#F0EBE0",
        "cherry-blossom": "#E8C4C4",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      lineHeight: {
        relaxed: "1.75",
        generous: "2",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      backgroundImage: {
        "gradient-parchment":
          "linear-gradient(135deg, #F5F0E8 0%, #EDE8DC 50%, #E8E0D0 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out",
        "rise": "rise 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
