const builder = require('./builder')

function DependencyListField (config) {
  config = config || { fieldName: 'dependencies' }
  let component
  const id = shortid.generate()
  const dependencies = []
  return {
    id: id,
    type: 'DependencyListField',
    fieldName: 'dependencies',
    title: '',
    showOutline: true,
    render: function (opts) {
      component = builder.build('dependency-list', _.extend({}, config, opts))
      return component
    },
    addDependency: function (dependency) {
      dependencies.push(dependency)
    },
    removeDependency: function (dependency) {
      delete dependencies.splice(dependencies.indexOf(dependency))
    },
    buildJSON: function (memberState) {
      const deps = []
      const result = { }
      result[config.fieldName] = deps

      if (component) {
        component.getDependencySetupList().forEach(function (dependencySetup) {
          deps.push(dependencySetup.getDependency())
        })
      } else if (typeof memberState !== 'undefined' && memberState[config.fieldName]) {
        memberState[config.fieldName].forEach(function (depState) {
          const dependency = {}
          dependency.set = {
            state: depState.state
          }
          dependency.when = {
            type: depState.masterType
          }
          if (depState.operator === '[]') {
            dependency.when.value = depState.value.split(',')
          } else {
            dependency.when.value = depState.value
          }
          switch (dependency.when.type) {
            case '0':
              dependency.when.masterCtrlId = depState.masterCtrlId ? depState.masterCtrlId : null
              break
            case '1':
              dependency.when.varName = depState.runtimeVarName
              break
            case '2':
              dependency.when.fncName = depState.resolverFncName
              break
            case '3':
              dependency.when.modelPropName = depState.modelPropName
              break
            case '4':
              dependency.when.complexCondition = depState.complexCondition
              break
          }
          dependency.when.valueType = depState.valueType
          deps.push(dependency)
        })
      }

      return result
    }
  }
}

module.exports = DependencyListField
