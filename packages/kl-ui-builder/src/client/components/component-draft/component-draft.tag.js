const React = require('react') // eslint-disable-line no-unused-vars
const ReactDOM = require('react-dom')

const self = this

self.active = false
self.activate = function (evt, fromCb) {
  const isClickHandler = evt != null
  if (controlSetup.validated) {
    controlSetup.highlightValidationState()
  }
  if (!self.opts.parent_setup) {
    runtime.trigger('control-receiver:unregister', self)
  }
  if (!self.opts.parent_setup && isClickHandler) {
    evt.stopPropagation()
  }
  if (fromCb || (evt && evt.ctrlKey)) {
    self.active = !self.active
    runtime.trigger('component-draft:multiselection')
  } else {
    runtime.trigger('component-draft:deactivate')
    self.active = true
    runtime.trigger('component-draft:activate', controlSetup)
  }
  controlSetup._active = self.active
  self.update()
}

self.deactivate = function () {
  self.active = false
  controlSetup._active = self.active
  self.update()
}

let controlSetup
self.setControlSetup = function (setup) {
  controlSetup = setup
  renderControl()
}

function setBuildType () {
  const state = controlSetup.getState()
  self.refs.buildType.setBuildType(_.get(state, 'buildType.slct'))
  self.refs.buildType.update()
}

function renderControl () {
  if (!controlSetup) { return }
  runtime.on(`state:changed#${controlSetup.id}`, setBuildType.bind(self))
  self.refs.container.innerHTML = controlSetup.render()
  const state = controlSetup.getState()
  setBuildType()
  self.opts.buildLabel = _.get(state, 'buildType.slct')

  const renderComponent = () => {
    const Component = controlSetup.component.default // eslint-disable-line no-unused-vars
    ReactDOM.render(<Component setup={controlSetup} state={controlSetup.getState()} />, self.refs.container)
  }

  if (controlSetup.tag) {
    riot.mount(self.refs.container, controlSetup.tag, { setup: controlSetup, state: state })
  } else if (controlSetup.component) {
    runtime.on(`value:changed#${controlSetup.id}`, renderComponent)
    self.on('update', renderComponent)
    renderComponent()
  }
  runtime.on('field-alias:changed#' + controlSetup.id, function (aliasText) {
    if (self.opts.compact) return
    const element = self.refs.container.querySelector('.ui-form-label')
    if (element) element.innerHTML = aliasText
  })
  if (controlSetup.active && !controlSetup.isEmpty()) {
    self.activate()
  }
  if (state.alias && state.alias.input) {
    runtime.trigger('field-alias:changed#' + controlSetup.id, state.alias.input)
  }
}

function handleValidation (valid) {
  self.invalid = !valid
  self.update()
}

self.on('mount', function () {
  runtime.on('component-draft:deactivate', self.deactivate)
  controlSetup = self.opts.control_setup || new ControlSetup()

  controlSetup.onSetValidationState(handleValidation)
  attachHandlers()
  renderControl()
})

self.on('unmount', function () {
  runtime.off('field-alias:changed#' + controlSetup.id)
  runtime.off('component-draft:deactivate', self.deactivate)
  runtime.off(`state:changed#${controlSetup.id}`)
})

self.clear = function () {
  controlSetup = new ControlSetup()
  renderControl()
}

function attachHandlers () {
  if (!controlSetup) return
  controlSetup.onActivate(function () {
    self.activate(null, true)
  })
  controlSetup.onDeactivate(function () {
    self.deactivate()
    if (self.opts.parent_setup) { self.opts.parent_setup.activate() }
  })
}
