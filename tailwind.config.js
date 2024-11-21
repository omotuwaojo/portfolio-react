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
      },
      keyframes: {
        loadBar: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--progress-width)' },
        },
      },
      animation: {
        load: 'loadBar 2s ease-in',
      },
    },
  },
  plugins: [],
}