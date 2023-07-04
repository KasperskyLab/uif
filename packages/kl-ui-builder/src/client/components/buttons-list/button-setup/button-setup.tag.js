const self = this

self.haveBorder = true
self.mappedToFunc = false
self.fncName = ''
self.saveSelection = saveSelection
self.mapToFunc = mapToFunc
self.deleteFncMapping = deleteFncMapping
self.serializeState = serializeState
self.onFncSelect = onFncSelect
// self.on('before-mount', onBeforeMount);
self.on('mount', onMount)

function serializeState () {
  const res = {
    active: self.refs.chbActive.root._tag.getValue(),
    mapped: self.mappedToFunc,
    type: opts.type
  }

  if (self.mappedToFunc) { res.fncName = self.refs.slctCustomFncName.value }
  return res
}

function deSerializeState (state) {
  if (state == null) return
  self.active = state.active
  self.fncName = state.fncName
  self.mappedToFunc = state.mapped
}

function onMount () {
  deSerializeState(opts.state)
  self.update()
}

function onFncSelect () {
  triggerValueChangeEvent('value-changed')
  self.update()
}

function saveSelection (evt) {
  self.active = evt.item.button.selected = !evt.item.button.selected
  self.update()
  triggerValueChangeEvent('value-changed')
}

function mapToFunc () {
  self.mappedToFunc = true
  self.update()
  triggerValueChangeEvent('value-changed')
}

function deleteFncMapping () {
  self.mappedToFunc = false
  self.update()
  triggerValueChangeEvent('value-changed')
}

function triggerValueChangeEvent () {
  self.parent.trigger('value-changed')
}
