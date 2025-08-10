
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fuzzy: ['"Fuzzy Bubbles"', 'cursive'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
