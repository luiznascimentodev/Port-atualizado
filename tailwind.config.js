/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./curriculo.html",
    "./projetos.html",
    "./contato.html",
    "./servicos.html",
    "./404.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  purge: {
    enabled: true,
    content: [
      "./index.html",
      "./curriculo.html",
      "./projetos.html",
      "./contato.html",
      "./servicos.html",
      "./404.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    safelist: [
      "animate-fade-in",
      "animate-slide-up",
      "animate-float",
      "animate-pulse-slow",
      "animate-drift",
      "animate-glow",
      "animate-float-gentle",
      "animate-rotate-slow",
      "animate-shimmer",
    ],
  },
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          900: "#1e3a8a",
        },
        secondary: {
          500: "#10b981",
          600: "#059669",
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        typing:
          "typing 3.5s steps(40, end), blink-caret .75s step-end infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        drift: "drift 8s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        "float-gentle": "float-gentle 6s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "blink-caret": {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "rgb(59, 130, 246)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        drift: {
          "0%, 100%": { transform: "translateX(0px) translateY(0px)" },
          "25%": { transform: "translateX(5px) translateY(-3px)" },
          "50%": { transform: "translateX(-3px) translateY(5px)" },
          "75%": { transform: "translateX(3px) translateY(3px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(59, 130, 246, 0.3)" },
          "50%": {
            boxShadow:
              "0 0 20px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.4)",
          },
        },
        "float-gentle": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      backdropBlur: {
        "3xl": "64px",
      },
    },
  },
};
