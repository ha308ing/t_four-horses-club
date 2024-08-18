export default {
  plugins: {
    "@csstools/postcss-global-data": {
      files: ["src/css/breakpoints.pcss"],
    },
    "postcss-mixins": {
      mixinsDir: "src/css/mixins",
    },
    "postcss-custom-properties": {},
    "postcss-custom-media": {},
  },
};
