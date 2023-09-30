/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secondary: "#5EFF84",
      },
      backgroundImage: {
        'third': 'linear-gradient(135deg, #08aeea3b 0%, #0c111693 100%)',
      },
    },
  },
  plugins: [],
};
