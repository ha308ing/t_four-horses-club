/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-use-logical"],
  rules: {
    "csstools/use-logical": true,
    "property-no-unknown": [
      true,
      {
        ignoreProperties: ["composes"],
      },
    ],
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["mixin"],
      },
    ],
    "selector-class-pattern": [
      "^[a-z][a-zA-Z0-9]+$",
      { message: "class should be in lowerCamelCase" },
    ],
  },
};
