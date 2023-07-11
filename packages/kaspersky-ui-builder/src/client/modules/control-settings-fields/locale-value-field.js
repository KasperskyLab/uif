const builder = require('./builder')

function LocaleValueField (config) {
  config = config || { fieldName: 'value' }

  return {
    type: 'LocaleValueField',
    title: 'Value',
    showOutline: true,
    fieldName: config.fieldName,
    excludeFromJSON: config.excludeFromJSON,
    render: function (opts) {
      return builder.build('locale-value-field-mapper', _.extend({}, config || {}, opts))
    },
    buildJSON: function (memberState) {
      const result = {}
      switch (memberState.slct) {
        case 0:
          result.value = memberState ? memberState.simpleValue : ''
          break
        case 1:
          result.value = {
            mapTo: {
              type: 'property',
              name: memberState ? memberState.keyPropertyName : '',
              valueType: 'string'
            }
          }
          result.pluginPropertyName = memberState ? memberState.pluginPropertyName : ''
          break
      }
      return result
    }
  }
}

module.exports = LocaleValueField
