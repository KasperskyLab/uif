const builder = require('./builder')

function OptionalFunctionField (config) {
  config = config || {}
  return {
    type: 'OptionalFunctionField',
    fieldName: config.fieldName,
    title: config.title,
    render: function (opts) {
      return builder.build('optional-function-field', _.extend({}, config, opts))
    },
    buildJSON: function (memberState) {
      const result = {}
      result[config.fieldName] = memberState ? memberState.fncName : ''
      return result
    }
  }
}

module.exports = OptionalFunctionField
