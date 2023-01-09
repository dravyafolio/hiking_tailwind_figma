/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        moonDance:"moonDance",
        Popinns: "Poppins",

      },
      colors: {
        "primary": "#F9A826",
        "secondary": "#3D405B",
      },
      backgroundImage: {
        Hero: "url('assets/background.png",
      }
    },
  },
  plugins: [],
}