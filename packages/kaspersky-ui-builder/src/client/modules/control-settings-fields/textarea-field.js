const builder = require('./builder')

function TextAreaField (config) {
  config = config || {}
  let tag
  return {
    type: 'TextAreaField',
    fieldName: config.fieldName,
    title: config.label,
    excludeFromJSON: config.excludeFromJSON,
    render: function (opts) {
      tag = builder.build('opts-editor', _.extend({}, config, opts))
      return tag
    },
    buildJSON: function (memberState) {
      const result = {}
      result[config.fieldName] = memberState && memberState.input.length ? JSON.parse(memberState.input) : {}
      return result
    },
    validate: function (state) {
      this.valid = state.input !== ''
      return this.valid
    }
  }
}

module.exports = TextAreaField
