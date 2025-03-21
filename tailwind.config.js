/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        caros: ["Caros-Bold", "sans-serif"],
      },
      colors:{
        'gray': '#EBEAEA',
        'lightGray': '#D9D9D9'
      }
    },
  },
  plugins: [],
};
