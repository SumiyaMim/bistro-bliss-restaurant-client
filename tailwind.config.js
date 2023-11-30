/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      fontFamily: {
        display: "'Cinzel', serif",
        raleway: "'Raleway', sans-serif",
      }
    },
  },
  plugins: [require("daisyui")],
}

