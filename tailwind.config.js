/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1a191d",
        secondary: "#033054",
        whitish: "#f9f9f9",
        danger: "#e3342f",
      },
      fontSize: {
        title_xl: "14rem",
        title_lg: "10rem",
        title_md: "8rem",
        title_sm: "6rem",
        title_xs: "4rem",
      },
      screens: {
        xs: "300px",
      },
    },
  },
  plugins: [],
};
