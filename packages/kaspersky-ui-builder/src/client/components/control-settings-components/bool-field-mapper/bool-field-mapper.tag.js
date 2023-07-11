const self = this

self.serializeState = function () {
  return {
    checkbox: self.refs.checkbox.getValue()
  }
}

self.on('mount', () => {
  const { defaultValue, checkbox } = self.opts
  if (defaultValue !== undefined && checkbox === undefined) {
    self.opts.checkbox = defaultValue
    self.update()
    self.trigger('value-changed')
  }
  self.opts.onMount && self.opts.onMount(checkbox)
})

self.onValueChange = function ({ target: { checked: value } }) {
  self.opts.onChange && self.opts.onChange(value)
  self.trigger('value-changed')
}
