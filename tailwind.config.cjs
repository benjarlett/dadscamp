/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'blue': '#1fb6ff',
      },
      fontFamily: {
        serif: ['Bellefair', 'serif'],
        serif2: ['Freehand', 'serif'],
      },
    },
  },
  plugins: [],
}