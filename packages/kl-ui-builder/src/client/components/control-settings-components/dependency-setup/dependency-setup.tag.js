const self = this
let currentControlSetup
let activeControlId
const dependencyItemId = self.opts.setup.id || shortid.generate()
const dependency = {
//    dependencyItemId: dependencyItemId // unique id of this dependency setup
}
let masterControlId

self.onChange = onChange
self.onIdSelect = onIdSelect
self.remove = remove
self.masterType = self.opts.setup.masterType || '0'
self.serializeState = serializeState

function serializeState () {
  return {
    id: dependencyItemId,
    state: self.refs.state.value,
    value: self.refs.val ? parseValue(self.refs.val.value, self.refs.operator.value).join(',') : null,
    valueType: self.refs.valueType ? self.refs.valueType.value : null,
    masterType: self.refs.masterTypeSelect ? self.refs.masterTypeSelect.value : null,
    masterCtrlId: masterControlId,
    operator: self.refs.operator ? self.refs.operator.value : null,
    resolverFncName: self.refs.resolverFncName ? self.refs.resolverFncName.value : null,
    runtimeVarName: self.refs.runtimeVarName ? self.refs.runtimeVarName.value : null,
    modelPropName: self.refs.modelPropName ? self.refs.modelPropName.value : null,
    complexCondition: self.refs.complexCondition ? self.refs.complexCondition.value : null
  }
}

function parseValue (value, operator) {
  const values = operator === '[]' ? value.split(',') : [value]
  let res
  switch (self.refs.valueType.value) {
    case 'Int':
      res = values.map(val => !isNaN(val) && parseInt(val))
      break
    case 'Float':
    case 'Number':
      res = values.map(val => !isNaN(val) && parseFloat(val))
      break
    case 'Bool':
      return values.map(val => (val.toLowerCase() === 'true' || val === '1'))
    case 'Date':
      res = values.map(val => !isNaN(Date.parse(val)) && new Date(val))
      break
    case 'String':
    default:
      res = values
      break
  }
  return res.filter(val => val !== false)
}

function remove () {
  self.parent.trigger('dependency-removed', self.opts.index)
}

function init (controlSetup) {
  if (controlSetup.type === -1) {
    currentControlSetup = null
    return
  }

  currentControlSetup = controlSetup
  activeControlId = currentControlSetup.getState().id.input

  runtime.trigger('form:control:get-names', function (crtls) {
    self.controlIds = []
    self.update()
    if (activeControlId !== '') {
      _.remove(crtls, { id: activeControlId })
    }
    self.controlIds = crtls
    self.update()
  })
}

self.on('mount', function () {
  init(runtime.variable.get('active-control'))
  if (self.opts.setup) { onChange() }
})

function onIdSelect () {
  if (self.refs.masterCtrlId) {
    masterControlId = self.refs.masterCtrlId.value
  }
  self.parent.trigger('value-changed')
}

function onChange () {
  dependency.set = {
    state: self.refs.state.value
  }
  dependency.when = {
    type: self.refs.masterTypeSelect.value
  }
  const operator = self.refs.operator.value
  const parsedValue = parseValue(self.refs.val.value, operator)
  dependency.when.value = operator === '[]' ? parsedValue : parsedValue[0]

  dependency.when.valueType = self.refs.valueType.value
  masterControlId = self.refs.masterCtrlId && self.refs.masterCtrlId.value

  switch (dependency.when.type) {
    case '0':
      dependency.when.masterCtrlId = self.refs.masterCtrlId ? self.refs.masterCtrlId.value : null
      break
    case '1':
      dependency.when.varName = self.refs.runtimeVarName.value
      break
    case '2':
      dependency.when.fncName = self.refs.resolverFncName.value
      break
    case '3':
      dependency.when.modelPropName = self.refs.modelPropName.value
      break
    case '4':
      dependency.when.complexCondition = self.refs.complexCondition.value
      break
  }

  self.parent.trigger('value-changed')
}

self.onMasterTypeSelect = function (evt) {
  self.masterType = evt.target.value
  self.update()
  onChange()
}

self.getDependency = function () {
  return dependency
}
