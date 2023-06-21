/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      "colors": {
        "primary": {
          "50": "#ebf4f1",
          "100": "#d8e8e2",
          "200": "#b1d1c5",
          "300": "#89baa8",
          "400": "#62a38b",
          "500": "#3b8c6e",
          "600": "#2f7058",
          "700": "#235442",
          "800": "#18382c",
          "900": "#0c1c16"
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

