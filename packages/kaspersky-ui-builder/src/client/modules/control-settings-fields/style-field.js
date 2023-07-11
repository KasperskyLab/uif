const builder = require('./builder')

function StyleField (config) {
  config = config || { fieldName: 'style' }
  config.fieldName = config.fieldName || 'style'
  config.rules = config.rules || ['indent', 'labelPos', 'labelType', 'width', 'state', 'customClass']

  return {
    type: 'StyleField',
    fieldName: config.fieldName,
    excludeFromJSON: config.excludeFromJSON,
    render (opts) {
      return builder.build('style-setup', _.extend({}, config || {}, opts))
    },
    buildJSON (memberState) {
      const result = {}
      result[config.fieldName] = {}
      const valToStateMap = {
        1: 'disabled',
        3: 'hidden'
      }
      if (memberState) {
        _.each(config.rules, (ruleName) => {
          if (ruleName === 'state') {
            if (memberState[ruleName] !== 0) {
              result[config.fieldName][ruleName] = valToStateMap[memberState[ruleName]]
            }
          } else {
            result[config.fieldName][ruleName] = memberState[ruleName]
          }
        })
      }

      return result
    }
  }
}

module.exports = StyleField
