/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lekton': ['Lekton', 'sans-serif'],
      },
      colors: {
        'ryancv-dark': '#1a1a1a',
        'ryancv-sidebar': '#222222',
        'ryancv-yellow': '#f6b846',
      },
      fontFamily: {
        'lekton': ['Lekton', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath fill='%232d2d2d' d='M0 0h20v20H0z'/%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
}