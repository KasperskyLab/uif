function ControlGroupElementsField (config) {
  config = config || {}
  const controlSetupList = {}

  return {
    type: 'ControlGroupElementsField',
    hidden: true,
    getList: function () {
      return controlSetupList
    },
    getControlSetup: function (index) {
      return controlSetupList[index]
    },
    addControlSetup: function (setup, index) {
      controlSetupList[index] = setup
    },
    removeControlSetup: function (setup) {
      controlSetupList[setup.index] = null
    },
    excludeFromJSON: config.excludeFromJSON,
    buildJSON: function () {
      const result = {}
      const elements = []

      _.forEach(controlSetupList, function (elem) {
        if (elem && elem.buildJSON) {
          elements.push(elem.buildJSON())
        }
      })

      result[config.fieldName] = elements
      return result
    }
  }
}

module.exports = ControlGroupElementsField
