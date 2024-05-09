import withMT from "@material-tailwind/react/utils/withMT";
/** @type {import('tailwindcss').Config} */
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
          hover: '#9d272a'
        },
        blue: {
          default: '#2c1a53',
          hover: '#100a20'
        }
      },
    },
  },
  plugins: [],
});

