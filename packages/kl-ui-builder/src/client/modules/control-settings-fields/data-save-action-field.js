const builder = require('./builder')

export function DataSaveActionField (config = {}) {
  return {
    type: 'DataSaveActionField',
    fieldName: config.fieldName,
    excludeFromJSON: config.excludeFromJSON,
    title: config.label,
    render: function (opts) {
      return builder.build('data-source-mapper', _.extend({}, config, opts))
    },
    buildJSON: function (memberState) {
      if (memberState.dsType === '') return {}

      const dsConfig = { type: '' }
      if (memberState.dsType === 'url') {
        dsConfig.type = 'serverAPICall'
        dsConfig.apiMethod = memberState.serverFunctionName
        dsConfig.params = memberState.params
        dsConfig.parsedParams = memberState.parsedParams
        dsConfig.paramsHandler = memberState.paramsHandler
      } else if (memberState.dsType === 'function') {
        dsConfig.type = 'staticFunction'
        dsConfig.name = memberState.staticFunctionName
        dsConfig.params = memberState.params
        dsConfig.parsedParams = memberState.parsedParams
      }
      const result = {}
      result[this.fieldName] = dsConfig
      return result
    }
  }
}
