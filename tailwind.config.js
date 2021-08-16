const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      montserrat: ["Montserrat"],
      cormorant: [`"Cormorant Garamond"`],
      martel: ["Martel"],
      marcellus: ["Marcellus"],
      arsenal: ["Arsenal"],
      laila: ["Laila"],
      encode: [`"Encode Sans Condensed"`],
      niramit: ["Niramit"],
      maitree: ["Maitree"],
      rajdhani: ["Rajdhani"],
      windsong: ["WindSong"]
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
