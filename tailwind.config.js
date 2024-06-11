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
          default: '#00162B',
          hover: '#100a20'
        },
        white: {
          contraste: '#ACACAC'
        },
        slate: colors.slate,
        emerald: colors.emerald,
        cerceta: colors.teal
      },
    },
  },
  plugins: [],
});

