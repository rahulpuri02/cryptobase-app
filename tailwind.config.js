/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { nunito: "Nunito" },
    },
    colors: {
      white: '#fff',
      gray: { 100: "#808080", 200: "#323232", 300: "#212121" },
      blue: '#2b6c20',
      red: '#dc2626',
      green: '#16a34a',
    },

    fontSize:{
      sm: "14px",
       md: "18px",
       lg: "24px",
       xl: "32px",
       base: "16px",
    },
  },
  plugins: [],
}