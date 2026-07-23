import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        marca: "#1E2E6B",
        banner: "#2B4EA8",
        suave: "#E8EEFB",
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};
export default config;
