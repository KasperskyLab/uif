const builder = require('./builder')

function CustomLayoutField (config) {
  config = config || {}
  return {
    type: 'CustomLayoutField',
    fieldName: config.fieldName,
    title: config.label,
    localized: config.localized,
    render: function (opts) {
      return builder.build('custom-layout', _.extend({}, config, opts))
    },
    excludeFromJSON: config.excludeFromJSON,
    buildJSON: function (memberState = {}) {
      return {
        [config.fieldName]: {
          ...memberState
        }
      }
    }
  }
}

module.exports = CustomLayoutField
