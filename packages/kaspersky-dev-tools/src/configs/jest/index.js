const { parseCliConfig } = require('./helpers/command-line-parser')
const { getApplicationsConfig } = require('./applications/config')
const { getPluginsConfig } = require('./plugins/config')

const testConfigurationProductEnum = {
  app: getApplicationsConfig,
  plugin: getPluginsConfig
}

/**
 * Function that finds and exports requested configuration for jest tests
 * @param { Any } param0 container to provide params
 * @param { String } param0.product product is value, which describes which configuration should be returned.
 * E.g. app will return applications configuration, which applies to NWC, Cloud Console, etc. And plugin value will
 * return only configurations, which apply to NWC plugins. Allowed values: ['app', 'plugin']
 */
function jest ({ product }) {
  if (!product) throw Error('Please, provide product argument!')
  const { type } = parseCliConfig()
  return testConfigurationProductEnum[product](type)
}

module.exports = {
  jest
}
