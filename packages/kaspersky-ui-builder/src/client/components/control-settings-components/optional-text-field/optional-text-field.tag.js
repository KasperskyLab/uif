const self = this
self.serializeState = function () {
  return { value: self.refs.controlSwitch.checked ? self.refs.controlSwitch.refs.input.value : null }
}
self.onValueChange = function () {
  self.trigger('value-changed')
}

self.on('mount', function () {
  self.refs.controlSwitch.on('value-changed', function () {
    self.trigger('value-changed')
  })
})
