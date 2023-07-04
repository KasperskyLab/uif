const self = this

self.toggleState = function (evt) {
  self.active = !self.active
  runtime.trigger('mini-popup:state-changed', self.active)
  self.update()
}
