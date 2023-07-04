const self = this
self.rootNodes = null
const treeData = self.opts
const TE = require('./tree-engine')
const ObjectHash = require('object-hash')
const TreeEngine = TE(treeData.treeName, onTreeUpdate)

self.on('mount', function () {
  self.rootNodes = prepareModelForTreeEngine(treeData.model)
  if (self.opts.navigation_on) self.turnArrowNavigationON()
  self.update()
})

self.on('unmount', function () {
  runtime.off('tree[' + TreeEngine.treeId + ']:node-click-selected')
  runtime.off('tree[' + TreeEngine.treeId + ']:node-is-expanded')
  runtime.off('tree[' + TreeEngine.treeId + ']:node-is-collapsed')
  runtime.off('tree[' + TreeEngine.treeId + ']:node-doubleclick')
})

self.on('update', function (e) {
  TreeEngine.reset()
  self.rootNodes = prepareModelForTreeEngine(self.opts.model)
})

runtime.on('tree[' + TreeEngine.treeId + ']:node-click-selected', function (node) {
  TreeEngine.setSelectedNode(node.nodeId)
})
runtime.on('tree[' + TreeEngine.treeId + ']:node-is-expanded', function (node) {
  TreeEngine.setExpandedNode(node.nodeId)
})
runtime.on('tree[' + TreeEngine.treeId + ']:node-is-collapsed', function (node) {
  TreeEngine.setCollapsedNode(node.nodeId)
})
runtime.on('tree[' + TreeEngine.treeId + ']:node-doubleclick', function (evt) {
  if (treeData.ondblclick) treeData.ondblclick(evt)
})

function onTreeUpdate (update) {
  if (update.action === 'expand') runtime.trigger('tree-node[' + update.previous + ']:expand')
  if (update.action === 'collapse') runtime.trigger('tree-node[' + update.new + ']:collapse')
  runtime.trigger('tree-node[' + update.previous + ']:toggle')
  runtime.trigger('tree-node[' + update.new + ']:toggle')
}

function treeDataFormIsModel (treeData) {
  const isIdCollection = _.find(treeData, function (i) { return !!i.id })
  const isArray = Array.isArray(treeData)
  return isArray && !!isIdCollection
}

function treeDataIsSimpleObject (treeData) {
  return !Array.isArray(treeData) && typeof treeData === 'object'
}

function prepareModelForTreeEngine (model) {
  if (treeDataFormIsModel(model)) {
    return processFormModel(model)
  }
  if (treeDataIsSimpleObject(model)) {
    return processSimpleObject(model)
  }
}

function processFormModel (model, parent) {
  return model.map(function (modelItem) {
    const nodeSetup = {
      nodeName: modelItem.name,
      model: modelItem,
      childNodesResolver: function (raw, _parent) {
        const rawModel = treeData.childNodesResolver(raw)
        return rawModel ? processFormModel(rawModel, _parent) : null
      },
      onnodeselect: treeData.onnodeselect,
      treeId: TreeEngine.treeId,
      expandByDefault: treeData.expandbydefault
    }
    nodeSetup.nodeId = ObjectHash(modelItem)
    return resolveToTree(nodeSetup, parent)
  })
}
function getKeyPath (parent, key) {
  if (!parent || !parent.keyPath) return key
  return parent.keyPath + '.' + key
}
function processSimpleObject (model, parent) {
  return Object.keys(model).map(function (key) {
    const nodeSetup = {
      nodeName: key,
      model: model[key],
      childNodesResolver: function (model, parent) {
        return treeDataIsSimpleObject(model) ? processSimpleObject(model, parent) : null
      },
      onnodeselect: treeData.onnodeselect,
      treeId: TreeEngine.treeId,
      keyPath: getKeyPath(parent, key)
    }
    nodeSetup.nodeId = ObjectHash(nodeSetup)
    return resolveToTree(nodeSetup, parent)
  })
}

function resolveToTree (setup, parent) {
  const existedNode = TreeEngine.getNodeById(setup.nodeId)
  if (!existedNode) TreeEngine.registerNodeToTree(setup, parent)
  return setup
}

function onEnterPress (e) {
  const selectedNode = TreeEngine.getCurrentPointerNode().data
  e.item = { node: selectedNode }
  if (treeData.ondblclick) treeData.ondblclick(e)
}

self.turnArrowNavigationON = function () {
  key('right', TreeEngine.moveRight)
  key('down', TreeEngine.moveDown)
  key('left', TreeEngine.moveLeft)
  key('up', TreeEngine.moveUp)
  key('enter', onEnterPress)
}

self.turnArrowNavigationOFF = function () {
  key.unbind('right')
  key.unbind('down')
  key.unbind('up')
  key.unbind('left')
  key.unbind('enter')
}
