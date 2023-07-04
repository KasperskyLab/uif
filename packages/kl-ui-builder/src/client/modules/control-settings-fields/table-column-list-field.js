const builder = require('./builder')

function TableColumnListField (config) {
  config = config || {}
  return {
    type: 'TableColumnListField',
    fieldName: config.fieldName,
    title: config.label,
    localized: config.localized,
    render: function (opts) {
      return builder.build('table-column-list', _.extend({}, config, opts))
    },
    excludeFromJSON: config.excludeFromJSON,
    buildJSON: function (memberState) {
      const result = {}
      result[config.fieldName] = memberState ? memberState.columns : ''
      return result
    }
  }
}

module.exports = TableColumnListField
