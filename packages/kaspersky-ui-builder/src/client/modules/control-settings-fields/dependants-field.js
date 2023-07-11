let dpCtr = 0
function DependantsField (config) {
  config = config || {}
  const dependantsMap = {}
  return {
    id: ++dpCtr,
    type: 'DependantsField',
    fieldName: 'dependants',
    hidden: true,
    buildJSON: function (memberState) {
      const depList = []
      Object.keys(dependantsMap)
        .forEach(function (key) {
          const setup = dependantsMap[key]
          switch (setup.state.masterType) {
            case '1':
              break
            case '2':
              break
            default:

              depList.push({
                state: setup.state,
                forElements: setup.contorlId,
                when: { value: setup.when.value }
              })

              break
          }
        })

      const result = {}
      result[this.fieldName] = depList
      return result
    },
    addDependant: function (dependencySetup) {
      dependantsMap[dependencySetup.dependencyItemId] = dependencySetup
    },
    removeDependant: function (dependencySetup) {
      delete dependantsMap[dependencySetup.dependencyItemId]
    }
  }
}

module.exports = DependantsField
