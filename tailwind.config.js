/** @type {import('tailwindcss').Config} */
const { screens, spacing, typography, form, components } = require("./configs/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ...screens
    },
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ...spacing,
        ...typography,
        ...form,
        ...components,
      })
    }
  ],
}

