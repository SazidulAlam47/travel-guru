/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F9A51A'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'bebasNeue': ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui'),],
}

