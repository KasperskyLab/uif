const builder = require('./builder')

function LockSourceField (config) {
  config = config || {}
  config.label = 'Control is manged by the lock-group'
  config.fieldName = 'lock'
  let tag
  return {
    type: 'LockSourceField',
    fieldName: config.fieldName,
    required: config.required,
    title: config.label,
    excludeFromJSON: config.excludeFromJSON,
    showOutline: true,
    outlineIcon: 'i-lock',
    outlineHeader: 'Lock-group',
    localized: config.localized,
    render: function (opts) {
      tag = builder.build('lock-source-mapper', _.extend({}, config, opts))
      return tag
    },
    buildJSON: function (memberState) {
      const result = {}
      result[config.fieldName] = memberState ? memberState.lockSource : ''
      return result
    },
    validate: function (state) {
      this.valid = state.input !== ''
      return this.valid
    }
  }
}

module.exports = LockSourceField
