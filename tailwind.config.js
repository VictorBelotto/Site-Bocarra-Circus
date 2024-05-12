import withMT from "@material-tailwind/react/utils/withMT";
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          default: '#d03438',
          hover: '#ba2c30'
        },
        blue: {
          default: '#2c1a53',
          hover: '#100a20'
        },
        slate: colors.blueGray,
        emerald: colors.emerald,
        cerceta: colors.teal
      },
    },
  },
  plugins: [],
});

