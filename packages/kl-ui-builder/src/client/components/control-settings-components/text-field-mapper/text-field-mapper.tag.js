const self = this

self.valid = true
self.onValueChange = function () {
  self.trigger('value-changed')
}

self.serializeState = function () {
  return {
    input: self.refs.input.value
  }
}

self.on('mount', function () {
  // opts.valid contains result of prop validation during form validation
  if (opts.valid != null) { self.valid = opts.valid }
  self.validate()
})

self.getValue = function () {
  return self.refs.input.value
}

self.validate = function () {
  if (!self.opts.required) return true
  self.valid = self.refs.input.value !== ''
  self.update()
  return self.valid
}
