import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "showSlow" : "showSlow 0.2s ease-in-out",
        "showFromBottom" : "showFromBottom 0.3s ease-in-out"
      },
      keyframes: {
        showSlow: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        showFromBottom: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      }
    },
  },
  plugins: [],
};
export default config;
