const self = this
self.serializeState = function () {
  return { memberName: self.refs.controlSwitch.checked ? self.refs.controlSwitch.refs.memberSearch.value : null }
}

self.onValueChange = function () {
  self.trigger('value-changed')
}
