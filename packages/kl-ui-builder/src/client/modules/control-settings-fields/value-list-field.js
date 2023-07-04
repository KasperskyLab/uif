const builder = require('./builder')

function ValueListField (config) {
  config = config || {}
  let tag
  return {
    type: 'ValueListField',
    fieldName: config.fieldName,
    title: config.label,
    excludeFromJSON: config.excludeFromJSON,
    render: function (opts) {
      tag = builder.build('value-list', _.extend({}, config, opts))
      return tag
    },
    buildJSON: function (memberState) {
      const result = {}
      if (memberState.input) {
        result[config.fieldName] = [
          memberState.input
        ]
      }
      if (memberState.rows) {
        result[config.fieldName] = memberState.rows.map(item => item.text)
      }
      return result
    }
  }
}

module.exports = ValueListField
