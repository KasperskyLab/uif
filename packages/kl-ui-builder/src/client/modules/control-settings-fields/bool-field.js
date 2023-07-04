const builder = require('./builder')

function BoolField (config) {
  config = config || {}

  return {
    type: 'BoolField',
    fieldName: config.fieldName,
    excludeFromJSON: config.excludeFromJSON,
    render: function (opts) {
      return builder.build('bool-field-mapper', _.extend({}, config, opts))
    },
    buildJSON: function (memberState) {
      const result = {}
      result[config.fieldName] = memberState ? memberState.checkbox : ''
      return result
    }
  }
}

module.exports = BoolField
