import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cyberTech: {
          hard_blue: "#0A66C2",
          soft_blue: "#70B5F9",
          white: "#FFFFFF",
          red: "F55987E",
          green: "#7FC15E",
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
