/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: false,
  },
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      monserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#4A3AFF",
      },
    },
  },
  plugins: [require("daisyui")],
};

