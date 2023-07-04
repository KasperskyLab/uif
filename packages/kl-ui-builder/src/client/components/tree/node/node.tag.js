const self = this
self.expanded = false
const nodeData = self.opts.nodedata
let children

self.toggleActive = function () {
  self.active = !self.active
  self.update()
}
self.dbClick = function (evt) {
  evt.stopPropagation()
  runtime.trigger('tree[' + nodeData.treeId + ']:node-doubleclick', evt)
}

self.selectNode = function (evt) {
  evt.stopPropagation()
  if (nodeData.onnodeselect) {
    nodeData.onnodeselect(self)
  }
  runtime.trigger('tree[' + nodeData.treeId + ']:node-click-selected', nodeData)
}

self.onExpanderClick = function (evt) {
  if (!children) return
  if (evt) evt.stopPropagation()
  self.expanded = !self.expanded
  self.expanded ? self.stateIcon = '▼' : self.stateIcon = '▶'
  self.expanded ? self.nodesList = children : self.nodesList = null
  if (self.expanded) runtime.trigger('tree[' + nodeData.treeId + ']:node-is-expanded', nodeData)
  if (!self.expanded) runtime.trigger('tree[' + nodeData.treeId + ']:node-is-collapsed', nodeData)
  self.update()
}

self.on('mount', function () {
  runtime.on('tree-node[' + nodeData.nodeId + ']:toggle', self.toggleActive)
  runtime.on('tree-node[' + nodeData.nodeId + ']:expand', self.onExpanderClick)
  runtime.on('tree-node[' + nodeData.nodeId + ']:collapse', self.onExpanderClick)
  children = nodeData.childNodesResolver(nodeData.model, nodeData)
  self.active = false
  self.stateIcon = children ? '▶' : ''
  self.update()
  if (!nodeData.expandByDefault) return
  self.onExpanderClick()
})

self.on('unmount', function () {
  runtime.off('tree-node[' + nodeData.nodeId + ']:toggle')
  runtime.off('tree-node[' + nodeData.nodeId + ']:expand')
  runtime.off('tree-node[' + nodeData.nodeId + ']:collapse')
})
