/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Nunito", "sans-serif"],
      }
    },

    colors: {
      gray: { 100: "#272727", 200: "#323232", 300: "#212121" },
      white: '#fcfcfc',
      blue: '#0d6eff',
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