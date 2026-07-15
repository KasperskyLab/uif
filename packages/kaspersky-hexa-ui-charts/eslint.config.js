const { defineConfig, globalIgnores } = require("eslint/config");
const { configs } = require("@kaspersky/dev-tools");

module.exports = defineConfig([
  configs.eslint.base,
  configs.eslint.react,
  configs.eslint.typescript,
  globalIgnores([
    "dist/**/*",
    "**/*.min.*",
    "node_modules/**/*",
    "**/eslint.config.js",
    "**/webpack.config.js",
    "eslint.config.js",
    ".storybook/**/*",
    "playwright.visual.config.ts",
    "tests/visual/**/*",
  ]),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: "tsconfig.json",
      },
    },
  },
]);
