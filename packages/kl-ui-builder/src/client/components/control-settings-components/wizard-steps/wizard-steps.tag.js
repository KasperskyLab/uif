this.steps = []

this.pluginList = [
  { name: 'kes_windows' },
  { name: 'admin_server' },
  { name: 'admin_agent' }
]

const filteredPlugins = availablePlugins.filter(pluginName => !~pluginName.indexOf('web-console'))
this.pluginMode = pluginId !== 'web-console'
this.defaultPluginId = this.pluginMode && filteredPlugins[0]

const syncState = () => this.trigger('value-changed')

const buttons = [{
  predefinedType: 'back',
  active: false,
  className: '',
  title: 'Back',
  useHandler: false
}, {
  predefinedType: 'next',
  active: false,
  className: 'primary',
  title: 'Next',
  useHandler: false
}, {
  predefinedType: 'ok',
  active: false,
  className: 'primary',
  title: 'Ok',
  useHandler: false
}]

this.addStep = () => {
  this.steps.push({
    pluginId: this.defaultPluginId,
    buttons: buttons.map(button => Object.assign({}, button))
  })
  syncState()
}

this.removeStep = index => () => {
  const stepNode = this.root.querySelector(`[data-step="${index}"]`)
  const height = getComputedStyle(stepNode).height
  stepNode.style.height = height
  setTimeout(() => {
    stepNode.style.height = '0px'
    setTimeout(() => {
      this.steps.splice(index, 1)
      this.update()
      syncState()
    }, 250)
  }, 0)
}

this.activateButton = (index, buttonIndex) => () => {
  this.steps[index].buttons[buttonIndex].active = !this.steps[index].buttons[buttonIndex].active
  this.steps[index].buttons[buttonIndex].useHandler = false
  delete this.steps[index].buttons[buttonIndex].onClick
  this.update()
  syncState()
}

this.useHandlerForButton = (index, buttonIndex) => () => {
  this.steps[index].buttons[buttonIndex].useHandler = true
  this.update()
  syncState()
}

this.removeButtonHandler = (index, buttonIndex) => () => {
  this.steps[index].buttons[buttonIndex].useHandler = false
  delete this.steps[index].buttons[buttonIndex].onClick
  this.update()
  syncState()
}

this.customizeButtons = index => () => {
  this.steps[index].customButtons = !this.steps[index].customButtons
  syncState()
}

this.customButtonsGetterChanged = index => ({ target: { value } }) => {
  this.steps[index].customButtonsGetter = value
  syncState()
}

this.formIdChanged = index => ({ target: { value } }) => {
  this.steps[index].formId = value
  syncState()
}

this.changeButtonHandler = (index, buttonIndex) => ({ target: { value } }) => {
  this.steps[index].buttons[buttonIndex].onClick = value
  syncState()
}

this.pluginizeStep = index => ({ target: { checked } }) => {
  if (checked) {
    this.steps[index].pluginId = this.pluginList[0].name
  } else {
    delete this.steps[index].pluginId
  }
  syncState()
}

this.pluginIdChanged = (index) => ({ target: { value } }) => {
  this.steps[index].pluginId = value
  syncState()
}

this.serializeState = () => {
  let steps = this.steps.map(step => Object.assign({}, step))
  steps = steps.map(step => {
    step.buttons = step.buttons.map(button => Object.assign({}, button))
    return step
  })
  return { steps }
}

if (this.opts.steps) {
  this.steps = this.opts.steps.map(step => {
    if (step.customButtonsGetter) {
      step.customButtons = true
    }
    const savedButtons = step.buttons
    step.buttons = buttons.map(button => Object.assign({}, button))
    savedButtons && savedButtons.forEach(button => {
      step.buttons = step.buttons.map(copiedButton => {
        if (copiedButton.predefinedType === button.predefinedType) {
          if (button.active !== undefined) {
            copiedButton.active = button.active
          } else {
            copiedButton.active = true
          }
          if (button.onClick) {
            copiedButton.onClick = button.onClick
            copiedButton.useHandler = true
          }
        }
        return copiedButton
      })
    })
    return step
  })
  this.update()
  syncState()
}

runtime.trigger('forms:get', forms => {
  forms = Object.keys(forms).map(key => forms[key])
  this.forms = forms.map(({ id, name }) => ({ id, name }))
  this.update()
})

syncState()
