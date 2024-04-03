const { getConfigPath } = require('@kaspersky/dev-tools/src/configs/eslint/patch')

module.exports = {
  extends: [
    getConfigPath('base'),
    getConfigPath('typescript')
  ],
  parserOptions: { tsconfigRootDir: __dirname },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
