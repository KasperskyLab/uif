const self = this

self.onValueChange = function (evt) {
  if (self.opts.onChange) {
    self.opts.onChange(evt.target.value)
  }
  self.trigger('value-changed')
}

self.getSelectedState = function (item) {
  return item.value === self.opts.slct
}

self.serializeState = function () {
  return {
    slct: self.refs.slct.value
  }
}

self.opts.onMount && self.on('mount', self.opts.onMount.call(self, self.opts.slct))
