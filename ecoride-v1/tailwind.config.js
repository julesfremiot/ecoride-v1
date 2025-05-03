/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // run
      // rm -rf node_modules/.vite npm
      // run dev 
      // after making changes to apply (use line break)
      colors: {
        forestGreen: "#002e15",
        earthBrown: "#5c3417",
        skyBlue: "#2f8bed",
        leafyGreen: "#007a23",
        sunsetYellow: "#ccaa60",
        stoneGray: "#708090",
        oceanBlue: "#0b0045",
        mossGreen: "#43bf51",
        pineGreen: "#1b7300",
        cloudWhite: "#F0F8FF",
      },
    },
  },
  plugins: [],
}