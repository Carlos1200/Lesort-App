module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      primary: ["Roboto", "sans-serif"],
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#14274e",

      secondary: "#f1f6f9",

      "secundary-blue": "#394867",

      gris: "#d2d3c9",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
