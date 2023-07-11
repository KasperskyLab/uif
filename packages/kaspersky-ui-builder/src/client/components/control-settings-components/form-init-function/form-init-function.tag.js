const self = this
self.serializeState = function () {
  return { fncName: self.refs.controlSwitch.checked ? self.refs.controlSwitch.refs.fncName.value : null }
}
self.onValueChange = function () {
  self.trigger('value-changed')
}

self.on('mount', function () {
  self.refs.controlSwitch.on('value-changed', function () {
    self.trigger('value-changed')
  })
})
