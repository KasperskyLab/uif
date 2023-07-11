function ListEditorElementsField (config) {
  config = config || {}
  let controlSetupList = {}

  return {
    type: 'ListEditorElementsField',
    fieldName: config.fieldName,
    hidden: true,
    addControlSetup: function (setup, index) {
      controlSetupList[index] = setup
    },
    removeControlSetup: function (setup) {
      controlSetupList[setup.index] = null
    },
    removeColumn: function (index) {
      controlSetupList = Object.keys(controlSetupList).reduce((result, key) => {
        result[key > index ? key - 1 : key] = controlSetupList[key]
        return result
      }, {})
    },
    excludeFromJSON: config.excludeFromJSON,
    buildJSON: function (memberState) {
      const result = {}
      const elements = {}
      Object.keys(controlSetupList).forEach(function (key) {
        const setup = controlSetupList[key]
        let fieldJSON = null
        if (setup) fieldJSON = setup.buildJSON()
        elements[key] = fieldJSON
      })
      result[config.fieldName] = elements
      return result
    }
  }
}

module.exports = ListEditorElementsField
