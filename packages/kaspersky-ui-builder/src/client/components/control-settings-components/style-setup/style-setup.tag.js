const self = this
self.rules = {}
self.ctrlSizes = _.range(1, 14)

self.opts.rules.forEach(rule => {
  self.rules[rule] = true
})

self.onValueChange = function () {
  self.trigger('value-changed')
}

self.serializeState = function () {
  const res = {}

  _.each(self.opts.rules, ruleName => {
    res[ruleName] = ruleName === 'customClass' ? self.refs[ruleName].value : Number(self.refs[ruleName].value)
  })

  return res
}

self.on('mount', function () {
  _.each(self.opts.rules, ruleName => {
    if (self.opts[ruleName] !== undefined) {
      self.refs[ruleName].value = self.opts[ruleName]
    }
  })
})
