/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'verdes':'#02D1A8',
      }
    },
  },
  plugins: [require("daisyui")],
};
