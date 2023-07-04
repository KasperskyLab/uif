const self = this
self.valueSourceType = 0

self.onValueSourceTypeChange = function (evt) {
  setValueSourceType(+evt.target.value)
  self.trigger('value-changed')
}

function setValueSourceType (type) {
  self.valueSourceType = type
  self.update()
}

self.serializeState = function () {
  const res = {}
  res.slct = +self.refs.slct.value
  res.simpleValue = self.refs.simpleValue.value
  res.keyPropertyName = self.refs.keyPropertyName.value
  res.pluginPropertyName = self.refs.pluginPropertyName.value
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
  forceUpdateContext()
})

runtime.on('context:update', function (context) {
  self.ctx = context
})

function forceUpdateContext () {
  runtime.trigger('context:get', function (context) {
    self.ctx = context
    self.update()
  })
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

self.selectProp = function (e) {
  if (e.stopPropagation) e.stopPropagation()
  const node = e.node || e.item.node
  self.refs.contextPropName.value = node.keyPath
  self.trigger('value-changed')
  self.update()
}
