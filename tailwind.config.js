const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#5E8F66",
      secondary: "#9CAF88",
      tan: "#BDA06A",
      lightGray: "#404040",
      black: "#000", 
      opBlack: "#808080",
      white: "#FFF",
      gray: colors.gray
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
