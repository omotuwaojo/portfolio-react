/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Heebo', 'sans-serif'],  // Replace 'Heeboi' with your font's name
      }
    },
  },
  plugins: [],
}