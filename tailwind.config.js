import { colors } from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark:"#d4713a",
          light: "#c14826",
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
