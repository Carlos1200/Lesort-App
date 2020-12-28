module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      Oswald: ["Oswald", "sans-serif"],
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#003346",

      secondary: "#f6f6f6",

      "secundary-blue": "#277292",

      gris: "#d3d4ce",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
