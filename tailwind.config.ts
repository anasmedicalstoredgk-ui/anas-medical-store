import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#12211E",
        "ink-soft": "#43554F",
        primary: {
          DEFAULT: "#0B6E52",
          dark: "#084B38",
          light: "#0E8A66",
        },
        accent: {
          DEFAULT: "#1E5A82",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#EFF6F2",
        },
        line: "#DCE6E1",
      },
      fontFamily: {
        display: ["var(--font-archivo)", "sans-serif"],
        body: ["var(--font-plex)", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "10px",
        lg: "14px",
      },
    },
  },
  plugins: [],
};

export default config;
