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
      screens: {
        'grande': '1420px'
      },
      colors: {
        red: {
          default: '#d03438',
          hover: '#ba2c30'
        },
        blue: {
          default: '#00162B',
          hover: '#100a20',
          text: '#001A30'
        },
        white: {
          contraste: '#ACACAC',
          fundo: '#f9f9f9',
        },
        gray: {
          text: '#4C4C4C'
        },
        black: {
          text: '#050411'
        },
        slate: colors.slate,
        emerald: colors.emerald,
        cerceta: colors.teal
      },
    },
  },
  plugins: [],
});

