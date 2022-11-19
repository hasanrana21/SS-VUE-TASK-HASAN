/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-1': '#00cf5d',
        'primary-2': '#f0db4f',
        'primary-3': '#111a28',
      },
    },
  },
  plugins: [],
}
