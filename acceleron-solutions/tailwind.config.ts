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
        primary: {
          DEFAULT: "#252F61",
          dark: "#1a2250",
          light: "#3B4A9E",
        },
        brand: {
          white: "#FFFFFF",
          offwhite: "#F5F7FB",
          navy: "#0E1535",
        },
      },
      fontFamily: {
        sans: ["Inter", "Manrope", "system-ui", "sans-serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #252F61 0%, #3B4A9E 50%, #1a2250 100%)",
      },
      boxShadow: {
        "brand": "0 20px 60px rgba(37, 47, 97, 0.15)",
        "brand-lg": "0 30px 80px rgba(37, 47, 97, 0.25)",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
