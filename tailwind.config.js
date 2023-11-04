/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-green': '#00AD33',
        'main-dark': '#090C06',
        'dark-gray': '#4D504B',
        'lighter-gray': '#F8F8F7'
      }
    },
  },
  plugins: [],
}

