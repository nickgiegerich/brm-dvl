const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      montserrat: ["Montserrat"],
    },
    colors: {
      primary: "#757976",
      secondary: "#BCC3A7",
      brown: "#CFC1A7",
      sage: "#BCC3A7",
      creme: "#FFFDF0",
      beige: "#D9D6C2",
      black: "#000",
      opBlack: "#808080",
      white: "#FFF",
      gray: colors.gray,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
