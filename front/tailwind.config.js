const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      games: {
        1: "#004080",
        2: "#f8981d",
        3: "#fdf100",
      },
      gray: {
        50: "#f8f9f8",
        100: "#edf1f3",
        200: "#d7dfe4",
        300: "#aebdc5",
        400: "#7c969d",
        500: "#5f7479",
        600: "#4c595c",
        700: "#3f474a",
        800: "#282d31",
        900: "#181b1f",
      },
      manatee: {
        50: "#f9fafa",
        100: "#f1f1f5",
        200: "#e0dce9",
        300: "#beb8ce",
        400: "#998eab",
        500: "#7b6b8a",
        600: "#634f6b",
        700: "#4a3b50",
        800: "#322836",
        900: "#1d1821",
      },
      steel: {
        50: "#f9fafa",
        100: "#eff1f7",
        200: "#dcdcee",
        300: "#b8b8d6",
        400: "#928fb8",
        500: "#756b9b",
        600: "#5e507d",
        700: "#473b5d",
        800: "#302840",
        900: "#1c1826",
      },
      denim: {
        50: "#f9fafa",
        100: "#eef1f9",
        200: "#dadcf1",
        300: "#b6b7de",
        400: "#908ec5",
        500: "#746aad",
        600: "#5d4e90",
        700: "#463a6d",
        800: "#30274a",
        900: "#1b182c",
      },
      wisteria: {
        50: "#f9fafa",
        100: "#f0f1f9",
        200: "#dddaf2",
        300: "#bcb6df",
        400: "#9a8bc7",
        500: "#7e67af",
        600: "#664b92",
        700: "#4c386f",
        800: "#34264b",
        900: "#1d172c",
      },
      plum: {
        50: "#fafafb",
        100: "#f1f1f9",
        200: "#e0daf1",
        300: "#c0b4df",
        400: "#a28ac6",
        500: "#8665ae",
        600: "#6d4991",
        700: "#51366e",
        800: "#37254a",
        900: "#1f162b",
      },
      orchid: {
        50: "#fbfbfb",
        100: "#f5f1f6",
        200: "#e9d8ed",
        300: "#d0b1d5",
        400: "#ba84b7",
        500: "#a0609a",
        600: "#83447a",
        700: "#61335a",
        800: "#42223c",
        900: "#261522",
      },
      blush: {
        50: "#fbfbfa",
        100: "#f6f1f4",
        200: "#edd8e7",
        300: "#d7b0ca",
        400: "#c483a6",
        500: "#aa5e86",
        600: "#8d4366",
        700: "#69324a",
        800: "#472232",
        900: "#29151c",
      },
      chestnut: {
        50: "#fbfbfa",
        100: "#f7f1f1",
        200: "#eed8e1",
        300: "#d8b1c0",
        400: "#c48497",
        500: "#aa5f74",
        600: "#8c4455",
        700: "#69333f",
        800: "#47232a",
        900: "#2a1519",
      },
      beaver: {
        50: "#fbfbfa",
        100: "#f5f1f1",
        200: "#eadae1",
        300: "#d0b4c0",
        400: "#b68898",
        500: "#9a6474",
        600: "#7d4955",
        700: "#5d363f",
        800: "#3f252b",
        900: "#25161a",
      },

      black: colors.black,
      white: colors.white,
      indigo: colors.indigo,
      red: colors.rose,
      blue: colors.blue,

      green: colors.green,

      yellow: colors.yellow,
    },
    // screens: {
    //   sm: { min: "640px", max: "767px" },
    //   md: { min: "768px", max: "1023px" },
    //   lg: { min: "1024px", max: "1279px" },
    //   xl: { min: "1280px" },
    // },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
