const self = this
self.checked = self.opts.enabled
self.onToggle = function (evt) {
  self.checked = evt.target.checked
  self.update()
  if (self.opts.onchange) {
    self.opts.onchange()
  }
}
self.onValueChange = function () {
  self.trigger('value-changed')
  self.value = _.get(self.refs, 'memberSearch.value')
  if (self.opts.onchange) {
    self.opts.onchange()
  }
}
