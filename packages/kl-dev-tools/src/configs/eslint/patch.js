require('@rushstack/eslint-patch/modern-module-resolution')

const getConfigPath = (config) => `./node_modules/@kl/dev-tools/src/configs/eslint/${config}`

module.exports = {
  getConfigPath
}
