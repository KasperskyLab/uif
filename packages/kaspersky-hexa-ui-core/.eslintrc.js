const { getConfigPath } = require('@kaspersky/dev-tools/src/configs/eslint/patch')

module.exports = {
  extends: [
    getConfigPath('base'),
    getConfigPath('typescript')
  ],
  parserOptions: { tsconfigRootDir: __dirname, createDefaultProgram: true },
  ignorePatterns: ['dist/*', 'node_modules/*']
}
