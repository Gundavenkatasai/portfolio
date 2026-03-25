/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        heading: ["'DM Serif Display'", "serif"],
        body: ["'Inter'", "sans-serif"],
        inter: ["'Poppins'", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        border: "hsl(var(--border))",
        accent: "#667eea",
        "accent-light": "#a78bfa",
        "accent-pink": "#f093fb",
        "accent-blue": "#4facfe",
        "accent-cyan": "#00f2fe",
      },
      borderRadius: {
        full: "var(--radius)",
      },
      animation: {
        "float": "float 4s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "blur-in": "blur-in 0.6s ease-out forwards",
        "gradient": "gradient 15s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.5", boxShadow: "0 0 20px rgba(102, 126, 234, 0.5)" },
          "50%": { opacity: "1", boxShadow: "0 0 40px rgba(102, 126, 234, 0.8)" },
        },
        "blur-in": {
          "0%": { filter: "blur(10px)", opacity: "0" },
          "100%": { filter: "blur(0px)", opacity: "1" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundSize: {
        "400%": "400% 400%",
      },
    },
  },
  plugins: [],
}
