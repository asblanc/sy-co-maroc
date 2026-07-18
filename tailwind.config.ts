import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        "2xl": "1140px",
      },
    },
    extend: {
      colors: {
        teal: {
          // aligned with the SY&CO logo green
          DEFAULT: "#097D7A",
          dark: "#076B68",
        },
        orange: {
          // the logo's second (accent) color
          DEFAULT: "#FD8B15",
          dark: "#E67C08",
        },
        pink: {
          DEFAULT: "#ED0F7D",
        },
        yellow: {
          brand: "#FCD430",
        },
        blue: {
          brand: "#1076DA",
        },
        peach: {
          DEFAULT: "#FFBC7D",
        },
        ink: "#000000",
      },
      fontFamily: {
        heading: ["var(--font-arvo)", "serif"],
        body: ["var(--font-open-sans)", "sans-serif"],
        display: ["var(--font-artifika)", "serif"],
      },
      maxWidth: {
        container: "1140px",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease forwards",
        "fade-up": "fade-up 0.7s ease forwards",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
