/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "dark-blue": "#1D2130",
        "light-pink": "#D798E126",
        "bordered-blue": "#6199ED42",
        "input-bg": "#2B2E3C",
        "light-orange":"#FFACAC",
        "light-gray":"#F4F5F7",
        "light-purple":"#E0E4FC"
      }
    },
  },
  plugins: [],
}