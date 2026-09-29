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
        background: "#0B0F14",
        surface: "#111810",
        "surface-alt": "#1A2026",
        foreground: "#E8E0CA",
        secondary: "#9AA0A6",
        accent: "#4F68FF",
        "accent-soft": "#E9ECFF",
        border: "#2A2F38",
        primary: "#E8E0CA",
        darkBg: "#0B0F14",
      },
      fontFamily: {
        sans: ["var(--font-helvetica)", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
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