const { getConfigPath } = require('@kl/dev-tools/src/configs/eslint/patch')

module.exports = {
  extends: [
    getConfigPath('base')
  ],
  globals: { kl: 'readonly' }
}
