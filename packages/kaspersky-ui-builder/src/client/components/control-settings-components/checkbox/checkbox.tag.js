const self = this

self.getValue = function () {
  return self.value
}

self.on('mount', () => {
  self.value = self.opts.riotValue
})

self.processClick = () => {
  self.value = !self.value
  self.refs.input.checked = self.value
  const events = document.createEvent('HTMLEvents')
  events.initEvent('change', true, false)
  self.refs.input.dispatchEvent(events)
}
