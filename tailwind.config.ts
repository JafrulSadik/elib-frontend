import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontSize: {
        xxs: "10px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgPrimary: "#2B1810",
        bgSecondary: "#3D261C",
        textPrimary: "#C5A572",
        textSecondary: "",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
