//tailwind.config.ts
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#A9A9A9",
        darkBg: "#131424",
        primary: "#000000",
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        display: ["var(--font-display)", "serif"],
        miTipografia: ["Albra", "sans-serif"],
      },
      scale: {
        160: "1.6",
        180: "1.8",
        200: "2",
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.object-left-20': { 'object-position': '20% 50%' },
        '.object-left-30': { 'object-position': '30% 50%' },
        '.object-left-40': { 'object-position': '40% 50%' },
        '.object-left-50': { 'object-position': '50% 50%' },
        '.object-left-60': { 'object-position': '60% 50%' },
        '.object-left-70': { 'object-position': '70% 50%' },
        '.object-right-20': { 'object-position': '80% 50%' },
        '.object-right-30': { 'object-position': '70% 50%' },
        '.object-right-40': { 'object-position': '60% 50%' },
        '.object-right-50': { 'object-position': '50% 50%' },
        '.object-right-60': { 'object-position': '40% 50%' },
        '.object-right-70': { 'object-position': '30% 50%' },
        '.object-right-80': { 'object-position': '20% 50%' },
      })
    })
  ],
};

export default config;