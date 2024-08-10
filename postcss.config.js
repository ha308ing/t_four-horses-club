export default {
  plugins: {
    "postcss-font-magician": {
      aliases: {
        serif: "Merriweather",
        "sans-serif": "Golos Text",
      },
      variants: {
        "sans-serif": {
          400: [],
          500: [],
          600: [],
          700: [],
        },
        serif: {
          400: [],
        },
      },
      foundries: ["google"],
    },
  },
};
