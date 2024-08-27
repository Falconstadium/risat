/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        IBM: ['IBM Plex Sans', 'sans-serif'],
        edu: ['Edu VIC WA NT Beginner', 'cursive'],
      },
      colors: {
        "black-500": "#121212",
        "light": "#f9f9f9"
      },
    },
  },
  plugins: [],
};
