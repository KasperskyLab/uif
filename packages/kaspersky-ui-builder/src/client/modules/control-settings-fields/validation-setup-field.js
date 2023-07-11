const builder = require('./builder')

function ValidationSetupField (config) {
  config = config || { fieldName: 'value' }

  return {
    type: 'ValidationSetupField',
    title: 'Validation',
    fieldName: config.fieldName,
    excludeFromJSON: config.excludeFromJSON,
    render: function (opts) {
      return builder.build('', _.extend({}, config || {}, opts))
    },
    buildJSON: function (memberState) {
      const result = {}
      switch (memberState.slct) {
        case 0:
          result.value = memberState ? memberState.simpleValue : ''
          break
        case 1:
          result.value = {
            mapTo: {
              type: 'function',
              name: memberState ? memberState.evaluatorFncName : ''
            }
          }
          break
        case 2:
          result.value = {
            mapTo: {
              type: 'property',
              name: memberState ? memberState.contextPropName : ''
            }
          }
          break
      }
      return result
    }
  }
}

module.exports = ValidationSetupField
