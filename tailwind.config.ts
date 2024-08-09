import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "spin-slow": "spin 5s linear infinite",
      },
      colors: {
        background: "#0C111B",
        primary: "#F5F5F5",
        secondary: "#BFBFBF",
        spotify: "#1ED760",
      },
    },
  },
  variants: {
    extend: {
      animation: { "spin-slow": "spin 5s linear infinite" },
    },
  },
  plugins: [],
} satisfies Config;
