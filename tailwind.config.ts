import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "orange",
        secondary: "black",
      },
    },
    fontFamily: {
      abc: ["Libre Bodoni"],
      rye: ["Rye"]
    },
  },
  plugins: [],
};
export default config;