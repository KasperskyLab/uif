const Arboreal = require('arboreal')
const treesContainer = {}
module.exports = function (treeName, treeUpdateResolver) {
  const treeId = shortid.generate()
  treesContainer[treeId] = {
    pointer: '0',
    tree: null,
    resolver: treeUpdateResolver,
    treeName: treeName,
    treeId: treeId
  }
  return {
    treeId: treeId,
    reset: resetTree.bind(treesContainer[treeId]),
    getCurrentPointerNode: getCurrentPointerNode.bind(treesContainer[treeId]),
    getNodeById: getNodeById.bind(treesContainer[treeId]),
    setSelectedNode: setSelectedNode.bind(treesContainer[treeId]),
    setExpandedNode: setExpansion.call(treesContainer[treeId], 'expand'),
    setCollapsedNode: setExpansion.call(treesContainer[treeId], 'collapse'),
    moveUp: verticalMovement.call(treesContainer[treeId], 'up'),
    moveDown: verticalMovement.call(treesContainer[treeId], 'down'),
    moveLeft: horisontalMovement.call(treesContainer[treeId], 'left'),
    moveRight: horisontalMovement.call(treesContainer[treeId], 'right'),
    registerNodeToTree: registerNodeToTree.bind(treesContainer[treeId]),
    resolvePathByProperty: resolvePathByProperty.bind(treesContainer[treeId])
  }
}

window.getTree = function () {
  return treesContainer
}

function resetTree () {
  this.pointer = '0'
  this.tree = null
}

function getCurrentPointerNode () {
  if (this.pointer === '0') return null
  return this.tree.find(this.pointer)
}

function setExpansion (state) {
  const instance = this
  return function (nodeId) {
    if (!instance.tree) return
    const selectedNode = instance.tree.find(function (item) { return item.data.nodeId === nodeId })
    if (state === 'expand') {
      selectedNode.expanded = true
    }
    if (state === 'collapse') {
      delete selectedNode.expanded
    }
  }
}

function setSelectedNode (nodeId) {
  const selectedNode = this.tree.find(function (item) { return item.data.nodeId === nodeId })
  if (!selectedNode) return
  const previousHighlight = this.pointer
  this.pointer = selectedNode.id
  selectionResolver(previousHighlight, this)
}

function selectionResolver (prev, instance) {
  const _new = instance.pointer
  const treeUpdate = {
    previous: instance.tree.find(prev).data.nodeId,
    new: instance.tree.find(_new).data.nodeId,
    p: prev,
    n: _new
  }
  if (_new === prev) {
    treeUpdate.new = null
    instance.pointer = '0'
  }
  return instance.resolver(treeUpdate)
}

function getNodeById (valueHash) {
  if (!this.tree) return null
  return this.tree.find(function (item) { return item.data.nodeId === valueHash })
}

function registerNodeToTree (nodeFrame, parent) {
  if (!this.tree) {
    this.tree = new Arboreal()
  }
  if (!parent) return this.tree.appendChild(nodeFrame)

  const parentNode = this.tree.find(function (item) {
    return parent.nodeId === item.data.nodeId
  })

  // eslint-disable-next-line
  if (!parentNode) return console.warn('There is no such parent in the tree', parent)

  return parentNode.appendChild(nodeFrame)
}

function nodeIsExpandable (instance) {
  const node = instance.tree.find(instance.pointer)
  return node.children.length > 0 || node.data.hasPredefinedChilds
}

function getBranchPosition (pos) {
  return parseInt(pos.match(/\d*$/))
}
function getParent (instance) {
  return instance.tree.find(instance.pointer).parent
}
function setBranchPosition (pos, newPos) {
  return pos.replace(/\d*$/, newPos)
}

function verticalMove (direction, instance) {
  const movementRange = getParent(instance).children.length
  const currentPosition = getBranchPosition(instance.pointer)
  const increasedPosition = currentPosition + 2 > movementRange ? 0 : currentPosition + 1
  const decreasedPosition = currentPosition - 1 < 0 ? movementRange - 1 : currentPosition - 1
  if (direction === 'up') return setBranchPosition(instance.pointer, decreasedPosition)
  if (direction === 'down') return setBranchPosition(instance.pointer, increasedPosition)
}

function resolver (prev, instance) {
  const _new = instance.pointer
  const previousNode = instance.tree.find(prev)
  const nextNode = instance.tree.find(_new)

  const treeUpdate = {
    previous: prev === '0' ? '0' : previousNode.data.nodeId,
    new: nextNode.data.nodeId,
    p: prev,
    n: _new
  }

  const previousTreeLevel = (prev === '0') ? null : prev.split('/').length
  const newTreeLevel = _new.split('/').length
  if (previousTreeLevel && (newTreeLevel > previousTreeLevel) && !previousNode.expanded) {
    treeUpdate.action = 'expand'
  }
  if (newTreeLevel && newTreeLevel < previousTreeLevel) {
    treeUpdate.action = 'collapse'
  }
  return instance.resolver(treeUpdate)
}

function pathResolver (path, instance, emitter) {
  const treeUpdate = {
    action: 'pathResolved',
    path: path,
    emitter: emitter
  }
  return instance.resolver(treeUpdate)
}

function verticalMovement (direction) {
  const instance = this
  return function () {
    const previousHighlight = instance.pointer
    if (instance.pointer === '0') {
      instance.pointer = '0/0'
    } else instance.pointer = verticalMove(direction, instance)
    resolver(previousHighlight, instance)
    //        logPosition(instance.pointer, nodeIsExpandable(instance));
    //        console.log(direction);
  }
}

function horisontalMovement (direction) {
  const instance = this
  return function () {
    if (instance.pointer === '0') return

    const previousHighlight = instance.pointer

    if (!nodeIsExpandable(instance) && direction === 'right') return

    if (direction === 'right') {
      instance.pointer += '/0'
    }
    if (direction === 'left') instance.pointer = instance.pointer.replace(/\/\d*$/, '')
    //        logPosition(instance.pointer, nodeIsExpandable(instance));
    resolver(previousHighlight, instance)
    //        console.log(direction);
  }
}

function resolvePathByProperty (propertyName) {
  const instance = this
  return function () {
    const result = []
    if (instance.pointer === '0') return
    let node = instance.tree.find(instance.pointer)
    const emitter = node.data
    while (node.data[propertyName]) {
      result.push(node.data[propertyName])
      node = node.parent
    }
    return pathResolver(result.reverse().join('.'), instance, emitter)
  }
}

// function treeChildResolver ( model ) {
//    var nodes = Object.keys(model);
//    if (nodes.length === 0) return [];
//    return nodes.map(function ( key ) {
//        return {
//            name: key,
//            children: treeChildResolver(model[key])
//        }
//    })
// }
