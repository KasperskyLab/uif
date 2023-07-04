const self = this
self.expanded = false
self.childNodes = self.opts.childNodesResolver(self.opts.model)
self.nodesList = []
self.update()
self.selectNode = function (evt) {
  evt.stopPropagation()
  self.active = true
  if (self.opts.onnodeselect) {
    self.opts.onnodeselect(self)
  }
}

self.onExpanderClick = function (evt) {
  evt.stopPropagation()
  self.update({ expanded: !self.expanded })
}

function setExpanded () {
  self.update({ expanded: true })
}

function setCollapsed () {
  self.update({ expanded: false })
}

self.on('mount', () => {
  runtime.on('forms-list:expand-all', setExpanded)
  runtime.on('forms-list:collapse-all', setCollapsed)
})

self.on('unmount', () => {
  runtime.off('forms-list:expand-all', setExpanded)
  runtime.off('forms-list:collapse-all', setCollapsed)
})
