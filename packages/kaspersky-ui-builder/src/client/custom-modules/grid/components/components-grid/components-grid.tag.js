/* eslint-disable no-irregular-whitespace */
const self = this
self.gridItemId = null
self.controls = []
self.selectedControlNum = undefined

self.on('mount', () => {
  if (!self.opts.setup) {
    throw new Error('There are no setup for components-grid')
  }
  self.gridItem = self.opts.gridItem
  self.gridItemId = self.opts.gridItem.id
  self.controls = []

  runtime.on('control:delete', self.deleteControl)
  runtime.on('control:moveUp', self.moveUp)
  runtime.on('control:moveDown', self.moveDown)

  const innerComponents = self.gridItem.innerComponents
  _.forEach(innerComponents, () => self.controls.push({ hidden: false }))
  self.controls.push({ hidden: true })
  self.update()
  _.forEach(innerComponents, (elem, i) => self.addControl(new ControlSetup(elem.type, elem.id, elem.state), i))
})

self.createReceiver = () => {
  if (!self.controls.some(cont => cont.hidden)) {
    self.controls.push({ hidden: true })
  }
  self.selectedControlNum = _.findIndex(self.controls, { hidden: true })
  runtime.trigger('control-receiver:register', self)
  self.update()
}

self.addControl = function (controlSetup, index) {
  if (index !== null && index !== undefined) self.selectedControlNum = index
  controlSetup.index = self.selectedControlNum

  if (!self.gridItem.innerComponents) {
    self.gridItem.innerComponents = []
  }
  self.gridItem.innerComponents[controlSetup.index] = controlSetup.serialize()
  runtime.on(`state:changed#${controlSetup.id}`, onInnerControlStateChanged.bind(null, controlSetup))
  runtime.on(`state:index-decrement#${controlSetup.id}`, decrementControlIndex.bind(null, controlSetup))

  const selectedComponentDraftRef = `cd_${self.gridItemId}_${self.selectedControlNum}`
  self.refs[selectedComponentDraftRef].root._tag.setControlSetup(controlSetup)

  self.controls[self.selectedControlNum].hidden = false
  self.createReceiver()
  self.update()
}

function onInnerControlStateChanged (controlSetup) {
  if (!self.gridItem.innerComponents) {
    self.gridItem.innerComponents = []
  }
  self.gridItem.innerComponents[controlSetup.index] = controlSetup.serialize()
}

function decrementControlIndex (controlSetup) {
  --controlSetup.index
}

self.deleteControl = function (controlSetup) {
  const selectedGridItemId = runtime.variable.get('grid.selectedGridItemId')
  if (selectedGridItemId !== self.gridItemId) return

  if (controlSetup.index === undefined) return
  if (self.gridItem.innerComponents) {
    self.gridItem.innerComponents.splice(controlSetup.index, 1)
    self.controls.splice(controlSetup.index, 1)

    runtime.off(`state:changed#${controlSetup.id}`, onInnerControlStateChanged)
    runtime.off(`state:index-decrement#${controlSetup.id}`, decrementControlIndex)
    for (let i = controlSetup.index; i < self.gridItem.innerComponents.length; ++i) {
      const control = self.gridItem.innerComponents[i]
      --control.index
      runtime.trigger(`state:index-decrement#${control.id}`)
    }
  }
  self.update()
}

self.moveUp = function () {
  const selectedGridItemId = runtime.variable.get('grid.selectedGridItemId')
  if (selectedGridItemId !== self.gridItemId) return

  if (!Number.isInteger(self.selectedControlNum)) return
  if (self.controls[self.selectedControlNum].hidden) return
  const trgIndex = self.selectedControlNum - 1

  if (trgIndex >= 0) moveElement(self.selectedControlNum, trgIndex)
}

self.moveDown = function () {
  const selectedGridItemId = runtime.variable.get('grid.selectedGridItemId')
  if (selectedGridItemId !== self.gridItemId) return

  if (!Number.isInteger(self.selectedControlNum)) return
  if (self.controls[self.selectedControlNum].hidden) return
  const trgIndex = self.selectedControlNum + 1
  if (self.controls[trgIndex] && self.controls[trgIndex].hidden) return
  if (trgIndex < self.controls.length) moveElement(self.selectedControlNum, trgIndex)
}

function moveElement (currentPos, targetPos) {
  const gridItemControllers = self.gridItem.innerComponents

  const targetComponentDraftRef = `cd_${self.gridItemId}_${targetPos}`
  const targetSerializedControl = gridItemControllers[targetPos]
  const targetControlSetup = new ControlSetup(
    targetSerializedControl.type,
    targetSerializedControl.id,
    targetSerializedControl.state
  )
  targetControlSetup.index = currentPos

  const currentControllerDraftRef = `cd_${self.gridItemId}_${currentPos}`
  const currentSerializedControl = gridItemControllers[currentPos]
  const currentControlSetup = new ControlSetup(
    currentSerializedControl.type,
    currentSerializedControl.id,
    currentSerializedControl.state
  )
  currentControlSetup.index = targetPos

  self.refs[targetComponentDraftRef].root._tag.setControlSetup(currentControlSetup)
  self.refs[currentControllerDraftRef].root._tag.setControlSetup(targetControlSetup)

  const tmp = gridItemControllers[targetPos]
  gridItemControllers[targetPos] = gridItemControllers[currentPos]
  gridItemControllers[currentPos] = tmp

  self.update()
}

self.selectContainer = (controlNum) => (evt) => {
  if (evt) evt.stopPropagation()
  self.selectedControlNum = controlNum
  runtime.trigger('control-receiver:register', self)
  runtime.variable.set('grid.selectedGridItemId', self.gridItemId)
  self.update()
}
