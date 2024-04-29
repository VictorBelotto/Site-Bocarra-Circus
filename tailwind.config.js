/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        red:{
          default: '#d03438',
          hover: '#9d272a'
        },
        blue:{
          default: '#2c1a53',
          hover: '#100a20'
        }
      },
     
    },
  },
  plugins: [],
}

