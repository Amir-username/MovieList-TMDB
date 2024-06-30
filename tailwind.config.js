import { colors } from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark:"#F19E39",
          light: "#D94F04",
        },
        light: "#F2F2F2",
        dark: "#121726",
      },
      fontFamily: {
        'title-font': 'Staatliches',
        'main-font': 'Roboto',
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
