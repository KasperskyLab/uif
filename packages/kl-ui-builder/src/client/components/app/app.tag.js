let controls

function storeControls (_ctrls) {
  controls = _ctrls
}

function getControls () {
  const _controls = _.map(controls, ctrl => ctrl.clone())
  runtime.trigger('form-controls:stored-controls', _controls)
}

this.on('mount', () => {
  runtime.on('form-controls:store', storeControls)
  runtime.on('form-controls:get', getControls)
})

this.on('onmount', () => {
  runtime.off('form-controls:store', storeControls)
  runtime.off('form-controls:get', getControls)
})
