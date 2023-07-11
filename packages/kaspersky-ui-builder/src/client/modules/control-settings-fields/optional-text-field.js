const builder = require('./builder')

function OptionalTextField (config) {
  config = config || {}
  return {
    type: 'OptionalFunctionField',
    fieldName: config.fieldName,
    title: config.title,
    render: function (opts) {
      return builder.build('optional-text-field', _.extend({}, config, opts))
    },
    buildJSON: function (memberState) {
      const result = {}
      result[config.fieldName] = memberState ? memberState.value : ''
      return result
    }
  }
}

module.exports = OptionalTextField
