const builder = require('./builder')

function CheckboxField (config) {
  config = config || {}

  return {
    id: config.fieldName,
    type: 'CheckboxField',
    fieldName: config.fieldName,
    title: config.label,
    localized: config.localized,
    excludeFromJSON: config.excludeFromJSON,
    render: function (opts) {
      return builder.build('select-field-mapper', _.extend({}, config, opts))
    },
    buildJSON: function (memberState) {
      const result = {}
      result[config.fieldName] = memberState ? memberState.slct : ''
      return result
    },
    validate: function (state) {
      return state.slct !== ''
    }
  }
}

module.exports = CheckboxField
