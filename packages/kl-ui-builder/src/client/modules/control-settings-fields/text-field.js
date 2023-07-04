const builder = require('./builder')

function TextField (config) {
  config = config || {}
  let tag
  return {
    type: 'TextField',
    fieldName: config.fieldName,
    required: config.required,
    title: config.label,
    excludeFromJSON: config.excludeFromJSON,
    localized: config.localized,
    render: function (opts) {
      tag = builder.build('text-field-mapper', _.extend({}, config, opts))
      return tag
    },
    buildJSON: function (memberState) {
      const result = {}
      result[config.fieldName] = memberState ? memberState.input : ''
      return result
    },
    validate: function (state) {
      this.valid = state.input !== ''
      return this.valid
    }
  }
}

module.exports = TextField
