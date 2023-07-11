const self = this
self.items = []
self.on('mount', function () {
  self.items = opts.items || []
  self.sourceType = self.opts.sourceType || '0'
  self.update()
})

self.addNewItem = function () {
  self.items.push({
    value: '',
    text: ''
  })
  self.update()
}
self.editRow = function (evt) {
  self.update()
}

self.saveKeyChange = function (evt) {
  evt.item.pair.value = evt.target.value.trim()
  self.trigger('value-changed')
}

self.saveValueChange = function (evt) {
  evt.item.pair.text = evt.target.value.trim()
  self.trigger('value-changed')
}

self.processClick = function (evt) {
  const input = evt.currentTarget.getElementsByTagName('input')[0]
  const events = document.createEvent('HTMLEvents')
  events.initEvent('change', true, false)
  input.dispatchEvent(events)
}

self.getValue = function () {
  return self.items
}

self.serializeState = function () {
  return {
    items: self.items,
    sourceType: self.sourceType,
    source: self.refs.source ? self.refs.source.value : '',
    variable: self.refs.variable ? self.refs.variable.value : ''
  }
}

self.onValueChange = function () {
  self.trigger('value-changed')
}

self.onSourceTypeSelect = function (evt) {
  self.sourceType = evt.target.value
  self.update()
}
