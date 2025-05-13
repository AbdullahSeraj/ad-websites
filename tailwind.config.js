/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": { transform: "scale(0) translateX(-50%)" },
          "60%": { transform: "scale(1.2) translateX(-50%)" },
          "100%": { transform: "scale(1) translateX(-50%)" },
        },
        rotatefull: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out",
        rotatefull: "rotatefull .3s ease-in-out",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
