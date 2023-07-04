const self = this
self.onValueChange = function () {
  self.value = self.refs.fncName.value
  self.trigger('value-changed')
  if (self.opts.onchange) {
    self.opts.onchange()
  }
}
