/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans)", "sans-serif"],
        serif: ["var(--font-noto-serif)", "serif"],
      },
      colors: {
        gray: {
          10: "#1A1A1A",
          11: "#808080",
          12: "#D9D9D9",
          13: "#EDEDED",
        },
        gold: {
          20: "#BFA25B",
        },
      },
    },
  },
  plugins: [],
};
