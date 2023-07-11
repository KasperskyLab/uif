const builder = require('./builder')
function FormInitFunctionField (config) {
  config = config || {}
  let tag
  return {
    type: 'FormInitFunctionField',
    fieldName: config.fieldName,
    required: config.required,
    title: config.label,
    excludeFromJSON: config.excludeFromJSON,
    render: function (opts) {
      tag = builder.build('form-init-function', _.extend({}, config, opts))
      return tag
    },
    buildJSON: function (memberState) {
      const result = {}
      result[config.fieldName] = memberState ? memberState.fncName : ''
      return result
    },
    validate: function (state) {
      this.valid = state.input !== ''
      return this.valid
    }
  }
}

module.exports = FormInitFunctionField
