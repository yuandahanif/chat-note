/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: { white: "#F9F9F9" },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
