const self = this

if (self.opts.config) self.opts.config(self)

self.close = function () {
  self.unmount()
}
