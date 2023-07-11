const self = this

runtime.trigger('form:accordion-control:get-names', function (ctrls) {
  self.accordionSources = ctrls
  self.update()
})

self.serializeState = function () {
  return { accordionSource: self.refs.controlSwitch.checked ? self.refs.controlSwitch.refs.accordionSourceName.value : null }
}

self.onValueChange = function () {
  self.trigger('value-changed')
}
