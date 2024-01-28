/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "global-bg": "#2C3333",
        "box-border": "#CBE4DE",
        "box-bg": "#121212",
        "tile-color": "#242424",
        "secondary-text": "#949494",
      }
    },
  },
  plugins: [],
}

