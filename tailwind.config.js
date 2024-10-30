/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        edu: ["Martian Mono", "monospace"],
      },
      colors: {
        "black-500": "#121212",
        "black-100": "#242424",
        light: "#f5f5f5",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
