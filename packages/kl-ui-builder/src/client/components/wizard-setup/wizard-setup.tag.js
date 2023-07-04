const render = () => {
  const state = this.opts.setup.getState()
  if (!state || !state.elements || !state.elements.steps) {
    return
  }
  const { elements: { steps } } = state
  this.steps = steps
  this.steps = this.steps.map(step => {
    step.buttons = step.buttons.map(button => {
      if (button.active === undefined) {
        button.active = true
        if (button.handler) {
          button.useHandler = true
        }
      }
      return button
    })
    if (step.customButtons === undefined && step.customButtonsGetter) {
      step.customButtons = true
    }
    return step
  })
  this.update()
}

this.on('mount', () => {
  runtime.on('value:changed#' + this.opts.setup.id, render)
  render()
})
