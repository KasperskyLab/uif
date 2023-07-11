const self = this

self.onLinkClick = function () {
  self.opts.onclick && self.opts.onclick()
  return false
}
