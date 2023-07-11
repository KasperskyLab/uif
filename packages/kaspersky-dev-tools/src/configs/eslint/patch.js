require('@rushstack/eslint-patch/modern-module-resolution')

const getConfigPath = (config) => `./node_modules/@kaspersky/dev-tools/src/configs/eslint/${config}`

module.exports = {
  getConfigPath
}
