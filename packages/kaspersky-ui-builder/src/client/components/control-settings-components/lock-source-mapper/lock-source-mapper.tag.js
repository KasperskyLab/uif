const self = this

runtime.trigger('form:lock-control:get-names', function (ctrls) {
  self.lockSources = ctrls
  self.update()
})

self.serializeState = function () {
  return {
    lockSource: self.refs.controlSwitch.checked ? self.refs.controlSwitch.refs.lockSourceName.value : null,
    getterFncName: self.refs.getterFncName.value,
    setterFncName: self.refs.setterFncName.value
  }
}

self.onValueChange = function () {
  self.trigger('value-changed')
}

self.onSwitchGetterSetterFnc = function (evt) {
  self.userGetterSetter = evt.target.checked
  self.trigger('value-changed')
  self.update()
}
