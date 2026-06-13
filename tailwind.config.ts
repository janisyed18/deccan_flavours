import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1180px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ink: "#0d1f19",
        charcoal: "#162b22",
        forest: {
          50: "#edf6f2",
          100: "#c8e8db",
          500: "#1e6b52",
          700: "#144d3b",
          900: "#0a2e22",
        },
        turmeric: {
          100: "#fdf0c7",
          300: "#f0c040",
          500: "#c99a15",
          700: "#8a6710",
        },
        terracotta: {
          100: "#fde8dd",
          300: "#e8855a",
          500: "#c45e30",
          700: "#8f3d1a",
        },
        leaf: "#1e6b52",
        smoke: "#f5f2ec",
      },
      boxShadow: {
        lift: "0 18px 45px rgba(10, 46, 34, 0.18)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
