const builder = require('./builder')

function LinkButtonField (config) {
  config = config || {}

  return {
    id: config.fieldName,
    type: 'LinkButtonField',
    excludeFromJSON: true,
    fieldName: config.fieldName,
    render: function (opts) {
      return builder.build('link-button', _.extend({}, config, opts))
    }
  }
}

module.exports = LinkButtonField
