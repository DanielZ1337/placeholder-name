import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        shdcnborder: "hsl(var(--border))",
        shdcninput: "hsl(var(--input))",
        shdcnring: "hsl(var(--ring))",
        shdcnbackground: "hsl(var(--background))",
        shdcnforeground: "hsl(var(--foreground))",
        shdcnprimary: {
          DEFAULT: "hsl(var(--primary))",
          shdcnforeground: "hsl(var(--primary-foreground))",
        },
        shdcnsecondary: {
          DEFAULT: "hsl(var(--secondary))",
          shdcnforeground: "hsl(var(--secondary-foreground))",
        },
        shdcndestructive: {
          DEFAULT: "hsl(var(--destructive))",
          shdcnforeground: "hsl(var(--destructive-foreground))",
        },
        shdcnmuted: {
          DEFAULT: "hsl(var(--muted))",
          shdcnforeground: "hsl(var(--muted-foreground))",
        },
        shdcnaccent: {
          DEFAULT: "hsl(var(--accent))",
          shdcnforeground: "hsl(var(--accent-foreground))",
        },
        shdcnpopover: {
          DEFAULT: "hsl(var(--popover))",
          shdcnforeground: "hsl(var(--popover-foreground))",
        },
        shdcncard: {
          DEFAULT: "hsl(var(--card))",
          shdcnforeground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: '0' },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: '0' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(),require("tailwindcss-animate")],
}
export default config
