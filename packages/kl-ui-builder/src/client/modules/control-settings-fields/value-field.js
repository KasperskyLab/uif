const builder = require('./builder')

function ValueField (config) {
  config = config || { fieldName: 'value' }

  return {
    type: 'ValueField',
    fieldName: config.fieldName,
    excludeFromJSON: config.excludeFromJSON,
    render: function (opts) {
      return builder.build('value-field-mapper', _.extend({}, config || {}, opts))
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
              type: 'function',
              getter: {
                name: memberState ? memberState.getterFncName : '',
                once: !!memberState.callGetterOnce
              },
              setter: {
                name: memberState ? memberState.setterFncName : ''
              }
            }
          }
          break
        case 2:
          result.value = {
            mapTo: {
              type: 'property',
              name: memberState ? memberState.contextPropName : '',
              valueType: memberState ? memberState.valueType : ''
            }
          }
          break
        case 3:
          result.value = {
            mapTo: {
              type: 'runtimeVariable',
              name: memberState ? memberState.variableName : ''
            }
          }
          break
      }
      result.onBeforeRead = memberState.afterReadPatchFncName
      result.onBeforeSave = memberState.beforeSavePatchFncName
      if (memberState.shouldProcessValueChange) { result.onChange = memberState.changeHandlerFncName }
      result.isInSilentChangeMode = memberState.isInSilentChangeMode
      result.ignoreModelUpdates = memberState.ignoreModelUpdates
      result.highlightChanges = memberState.highlightChanges
      return result
    }
  }
}

module.exports = ValueField
