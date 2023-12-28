/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js}"
  ],
  theme: {
    extend: {
      colors: {
        uniqueBlack: '#262626'
      },
      fontFamily: {
        bebasNeue: ['Bebas Neue']
      }
    }
  },
  plugins: [],
}

