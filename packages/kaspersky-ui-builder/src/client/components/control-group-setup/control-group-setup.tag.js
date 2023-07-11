const self = this
let activeCtrIndex
let elementsField
self.containers = []

self.on('before-mount', onBeforeMount)
self.on('mount', onMount)

self.addControl = addControl
self.deleteControl = deleteControl
self.selectContainer = selectContainer
self.createReceiver = createReceiver
self.moveUp = moveUp
self.moveDown = moveDown
self.pasteControls = pasteControls

function onBeforeMount () {
  elementsField = _.find(self.opts.setup.getProperties()[0].items, { type: 'ControlGroupElementsField' })
}

self.on('update', () => {
  const state = this.opts.setup.getState()
  if (state) {
    const {
      inheritControls: { checkbox: isInherited } = {},
      formToInherit: { slct: formToInherit } = {}
    } = state
    if (isInherited !== self.isInherited || formToInherit !== self.formToInherit) {
      self.isInherited = isInherited
      self.formToInherit = formToInherit
      self.update()
    }
  }
})

function onMount () {
  const state = self.opts.setup.getState()
  const elements = state.elements

  _.forEach(elements, () => self.containers.push({ hidden: false }))
  self.containers.push({ hidden: true })

  runtime.on('value:changed#' + self.opts.setup.id, self.update.bind(self))
  runtime.on('control:delete', self.deleteControl)
  runtime.on('control:moveUp', self.moveUp)
  runtime.on('control:moveDown', self.moveDown)

  self.update()

  _.forEach(elements, (elem, i) => self.addControl(new ControlSetup(elem.type, elem.id, elem.state), i))
}

function addControl (controlSetup, index) {
  if (index != null) activeCtrIndex = index

  controlSetup.index = activeCtrIndex
  elementsField.addControlSetup(controlSetup, activeCtrIndex)

  runtime.on('state:changed#' + controlSetup.id, onControlStateChanged.bind(null, controlSetup))

  if (self.refs['cd_' + activeCtrIndex]) {
    if (_.isArray(self.refs['cd_' + activeCtrIndex])) {
      self.refs['cd_' + activeCtrIndex] = _.last(self.refs['cd_' + activeCtrIndex])
    }
    self.refs['cd_' + activeCtrIndex].root._tag.setControlSetup(controlSetup)
    self.containers[activeCtrIndex].hidden = false
  }
  createReceiver()

  self.update()
};

function deleteControl (controlSetup) {
  if (controlSetup.index === undefined) return
  if (activeCtrIndex === null) return

  const state = self.opts.setup.getState()

  state.elements.splice(_.findIndex(state.elements, { id: controlSetup.id }), 1)
  runtime.off('state:changed#' + controlSetup.id, onControlStateChanged)
  elementsField.removeControlSetup(controlSetup)
  self.containers.splice(controlSetup.index, 1)
  self.update()
};

function onControlStateChanged (controlSetup) {
  const listEditorState = self.opts.setup.getState()
  listEditorState.elements = listEditorState.elements || []
  listEditorState.elements[controlSetup.index] = controlSetup.serialize()
}

function selectContainer (evt) {
  if (evt) evt.stopPropagation()
  activeCtrIndex = evt.item.i
  self.activeCtrIndex = activeCtrIndex
  runtime.trigger('control-receiver:register', self)

  self.update()
};

function createReceiver (evt) {
  if (!self.containers.some(cont => cont.hidden)) {
    self.containers.push({ hidden: true })
  }
  activeCtrIndex = _.findIndex(self.containers, { hidden: true })
  runtime.trigger('control-receiver:register', self)
  self.update()
}

function moveUp () {
  if (self.containers[activeCtrIndex].hidden) return
  const trgIndex = activeCtrIndex - 1
  const list = elementsField.getList()
  if (trgIndex >= 0) moveElement(list, activeCtrIndex, trgIndex)
}

function moveDown () {
  if (self.containers[activeCtrIndex].hidden) return
  const trgIndex = activeCtrIndex + 1
  const list = elementsField.getList()
  if (self.containers[trgIndex] && self.containers[trgIndex].hidden) return
  if (trgIndex < self.containers.length) moveElement(list, activeCtrIndex, trgIndex)
}

function changeElementsPositionInState (currentPos, targetPos) {
  const state = self.opts.setup.getState()
  const elements = state.elements

  elements.splice(targetPos, 0, elements.splice(currentPos, 1)[0])
}

function moveElement (list, currentPos, targetPos) {
  list.temp = list[currentPos]
  list[currentPos].index = targetPos
  list[targetPos].index = currentPos
  list[currentPos] = list[targetPos]
  list[targetPos] = list.temp
  delete list.temp

  changeElementsPositionInState(currentPos, targetPos)

  _.forEach(list, function (setup, key) {
    self.addControl(setup, setup.index)
  })
  self.refs['cd_' + currentPos].deactivate()
  self.refs['cd_' + targetPos].activate()
  activeCtrIndex = targetPos

  _.forEach(list, function (setup) {
    const aliasName = setup.getState().alias.input || 'Label'
    self.refs['cd_' + setup.index].root.querySelector('.ui-form-label').innerHTML = aliasName
  })
}

function pasteControls (controls) {
  if (Array.isArray(controls)) {
    controls.forEach(function (ctrl) {
      createReceiver()
      ctrl.index = self.containers.length - 1
      elementsField.addControlSetup(ctrl, self.containers.length - 1)
      self.addControl(ctrl, ctrl.index)
    })
    self.update()
  }
}
