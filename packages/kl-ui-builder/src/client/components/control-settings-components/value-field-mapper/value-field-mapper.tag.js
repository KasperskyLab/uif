const self = this
self.valueSourceType = 0
self.shouldPatchAfterRead = opts.shouldPatchAfterRead
self.shouldPatchBeforeSave = opts.shouldPatchBeforeSave
self.shouldProcessValueChange = opts.shouldProcessValueChange
self.ignoreModelUpdates = opts.ignoreModelUpdates
self.highlightChanges = opts.highlightChanges
self.update()

self.onValueSourceTypeChange = function (evt) {
  anounceLocalizationState(evt.target.value)
  setValueSourceType(+evt.target.value)
  self.trigger('value-changed')
}

self.onSetPatchAfterRead = function (evt) {
  self.shouldPatchAfterRead = evt.target.checked
  self.trigger('value-changed')
  self.update()
}

self.onSetPatchBeforeSave = function (evt) {
  self.shouldPatchBeforeSave = evt.target.checked
  self.trigger('value-changed')
  self.update()
}

function anounceLocalizationState (state) {
  // console.log('localizing')
  // return
  // if (state == '0' && opts.simpleValueIsLocalized) {
  //   runtime.trigger('control-settings:value-field:state:set:localized')
  // } else {
  //   runtime.trigger('control-settings:value-field:state:set:non-localized')
  // }
}

function setValueSourceType (type) {
  self.valueSourceType = type
  self.update()
}

self.serializeState = function () {
  const res = {}
  res.isInSilentChangeMode = self.isInSilentChangeMode
  res.callGetterOnce = self.callGetterOnce
  res.ignoreModelUpdates = self.ignoreModelUpdates
  res.highlightChanges = self.highlightChanges
  res.slct = +self.refs.slct.value
  res.simpleValue = self.refs.simpleValue.value
  res.getterFncName = self.refs.getterFncName.value
  res.setterFncName = self.refs.setterFncName.value
  res.contextPropName = self.refs.contextPropName.value
  res.shouldPatchAfterRead = self.shouldPatchAfterRead
  res.shouldPatchBeforeSave = self.shouldPatchBeforeSave
  res.shouldProcessValueChange = self.shouldProcessValueChange
  res.valueType = self.refs.valueType.value
  res.afterReadPatchFncName = self.shouldPatchAfterRead
    ? self.refs.slctAfterReadPatchFncName.value
    : ''
  res.beforeSavePatchFncName = self.shouldPatchBeforeSave ? self.refs.slctBeforeSavePatchFncName.value : ''
  res.changeHandlerFncName = self.shouldProcessValueChange ? self.refs.slctChangeHandlerFncName.value : ''
  res.variableName = self.refs.variableName.value
  return res
}

self.createFunction = function () {
  runtime.trigger('pills:select#setupModes', 1)
}

self.onValueChange = function () {
  self.trigger('value-changed')
}

self.on('mount', function () {
  setValueSourceType(+self.refs.slct.value)

  anounceLocalizationState(self.refs.slct.value)
  forceUpdateContext()
  checkAndUpdatePatchFncNames()
})

runtime.on('context:update', function (context) {
  self.ctx = context
  self.tags['mini-popup'].update()
})

function forceUpdateContext () {
  runtime.trigger('context:get', function (context) {
    self.ctx = context
    self.update()
  })
}

function checkAndUpdatePatchFncNames () {
  if (opts.shouldPatchAfterRead && opts.afterReadPatchFncName !== undefined) {
    self.refs.slctAfterReadPatchFncName.value = opts.afterReadPatchFncName
  }
  if (opts.shouldPatchBeforeSave && opts.beforeSaveReadPatchFncName !== undefined) {
    self.refs.slctBeforeSavePatchFncName.value = opts.beforeSaveReadPatchFncName
  }
}

self.getContextNodes = function (model) {
  if (typeof model !== 'object' || Array.isArray(model)) return null
  const childNodes = []
  _.each(model, function (value, key) {
    childNodes.push({
      __$nodename: key,
      __$data: value
    })
  })
  return childNodes
}

self.onSetChangeHandler = function (evt) {
  self.shouldProcessValueChange = evt.target.checked
  self.trigger('value-changed')
  self.update()
}

self.onSetSilentChangeMode = function (evt) {
  self.isInSilentChangeMode = evt.target.checked
  self.trigger('value-changed')
  self.update()
}

self.onSetIgnoreModelUpdates = function ({ target: { checked } }) {
  self.ignoreModelUpdates = checked
  self.trigger('value-changed')
  self.update()
}

self.onSetHighlightChanges = function ({ target: { checked } }) {
  self.highlightChanges = !checked
  self.trigger('value-changed')
  self.update()
}

self.onCallGetterOnce = function ({ target: { checked } }) {
  self.callGetterOnce = checked
  self.trigger('value-changed')
  self.update()
}

self.selectProp = function (e) {
  if (e.stopPropagation) e.stopPropagation()
  const node = e.node || e.item.node
  self.refs.contextPropName.value = node.keyPath
  self.tags['mini-popup'].toggleState()
  self.trigger('value-changed')
  self.update()
}

runtime.on('mini-popup:state-changed', function (state) {
  const objectTree = self.tags['mini-popup'].tags.tree
  if (state) objectTree.turnArrowNavigationON()
  else objectTree.turnArrowNavigationOFF()
})
