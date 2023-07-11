const self = this
self.columns = []
self.on('mount', () => {
  // self.actions = self.opts.state.actions ? self.opts.state.actions.actions : []
  // self.columns = self.opts.state.columns ? self.opts.state.columns.columns : ''
  const state = self.opts.setup.getState()
  syncState(state)
  runtime.on(`value:changed#${self.opts.setup.id}`, onPropertyChanged)
  runtime.on(`column:drop#${self.opts.setup.id}`, onColumnDrop)
  runtime.on('control:delete', self.deleteControl)
  self.update()
  if (state.elements) {
    state.elements.forEach((savedState) => {
      if (savedState) {
        self.addControl(
          // eslint-disable-next-line no-undef
          new ControlSetup(savedState.type, savedState.id, savedState.state),
          savedState.index
        )
      }
    })
  }
})

self.setupStore = []

function onPropertyChanged (val, controlSetup) {
  syncState(self.opts.setup.getState())
  self.update()
}

function syncState (state) {
  self.actions = state.buttons ? _.filter(state.buttons.actions, { selected: true }) : []
  self.columns = state.columns ? state.columns.columns : ''
}

function onColumnDrop (columnIndex) {
  const state = self.opts.setup.getState()
  if (columnIndex !== undefined) {
    state.elements.splice(columnIndex, 1)
    state.elements.forEach((element, index) => {
      element.index = index
    })
    elementsField.removeColumn(columnIndex)
  }
}

let elementsField

function addControl (controlSetup, index) {
  if (index != null) activeCtrIndex = index
  self.opts.setup.getProperties().forEach((item) => {
    if (elementsField) return
    if (item.items) {
      elementsField = _.filter(item.items, {
        type: 'ListEditorElementsField'
      })[0]
    } else if (item.type === 'ListEditorElementsField') {
      elementsField = item
    }
  })
  // var memberState = tag.serializeState()
  // currentControlSetup.setFieldState(tag.opts.fieldName, memberState)
  controlSetup.index = activeCtrIndex
  elementsField.addControlSetup(controlSetup, activeCtrIndex)
  runtime.on(`state:changed#${controlSetup.id}`, () => {
    const listEditorState = self.opts.setup.getState()
    listEditorState.elements = listEditorState.elements || []
    listEditorState.elements[controlSetup.index] = controlSetup.serialize()
    // self.opts.setup.setFieldState(fieldName, state)
  })
  self.refs[`cd_${activeCtrIndex}`].root._tag.setControlSetup(controlSetup)
}
self.addControl = addControl

self.deleteControl = function (controlSetup) {
  if (activeCtrIndex == null || typeof controlSetup === 'function') return
  const state = self.opts.setup.getState()
  state.elements[_.findIndex(state.elements, { id: controlSetup.id })] = null
  elementsField = _.filter(self.opts.setup.getProperties(), {
    type: 'ListEditorElementsField'
  })[0]

  elementsField.removeControlSetup(controlSetup)
  self.refs[`cd_${activeCtrIndex}`].root._tag.clear()
  self.refs[`cd_${activeCtrIndex}`].root._tag.activate()
  runtime.trigger('control-receiver:register', self)

  // activeCtrIndex = null
}

let selectedCol
let activeCtrIndex

self.selectContainer = function (evt) {
  if (evt) evt.stopPropagation()

  activeCtrIndex = evt.item.i
  const { state: { elements = [] } = {} } = self.opts
  if (elements[activeCtrIndex] && elements[activeCtrIndex].type === 20) {
    return
  }
  runtime.trigger('control-receiver:register', self)
  if (selectedCol) {
    selectedCol.selected = false
  }
  selectedCol = evt.item
  selectedCol.selected = true
  self.update()
}
