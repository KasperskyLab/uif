const builder = require('./builder')

function SimpleTextField (config) {
  config = config || {}

  return {
    type: 'SimpleTextField',
    render: function (opts) {
      const res = builder.build('simple-text', _.extend({}, config, opts))
      return res
    },
    excludeFromJSON: config.excludeFromJSON,
    buildJSON: function (memberState) {
      const result = {}
      result[config.fieldName] = memberState ? memberState.input : ''
      return result
    }
  }
}

module.exports = SimpleTextField
