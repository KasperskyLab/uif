const { getConfigPath } = require('@kl/dev-tools/src/configs/eslint/patch')

module.exports = {
  extends: [
    getConfigPath('base'),
    getConfigPath('react'),
    getConfigPath('typescript'),
    getConfigPath('storybook')
  ],
  parserOptions: { tsconfigRootDir: __dirname },
  ignorePatterns: ['esm/*', 'node_modules/*'],
  rules: {
    'no-console': 'warn'
  },
  globals: {
    HTMLElement: true,
    HTMLDivElement: true,
    Element: true,
    File: true
  }
}
