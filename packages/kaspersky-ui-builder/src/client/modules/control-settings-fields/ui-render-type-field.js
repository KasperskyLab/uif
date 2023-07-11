const builder = require('./builder')

function UIRenderTypeField (config) {
  config = config || {}

  return {
    type: 'UIRenderTypeField',
    fieldName: config.fieldName,
    excludeFromJSON: config.excludeFromJSON,
    render: function (opts) {
      return builder.build('ui-render-type', _.extend({}, config, opts))
    }
  }
}

module.exports = UIRenderTypeField
