const self = this

self.setContent = function (content) {
  if (content == null) return
  if (typeof content === 'string') {
    self.root.innerHTML = content || ''
  } else {
    self.root.appendChild(content)
  }
  self.update()
}
self.on('mount', function () {
  self.opts.source(self)
})
