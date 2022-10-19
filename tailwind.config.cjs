/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'verdes':'#02D1A8',
      },
      backgroundImage:{
        'fondoHome':"url('https://img.freepik.com/foto-gratis/angulo-vista-rascacielos_1359-1105.jpg?w=2000')",
      }
    },
  },
  plugins: [require("daisyui")],
};
