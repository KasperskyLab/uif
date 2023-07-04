const self = this
const validationItemId = opts.setup.id || shortid.generate()

self.onChange = onChange
self.remove = remove
self.serializeState = serializeState
self.allowEmptyValue = opts.setup.allowEmptyValue

function serializeState () {
  return {
    id: validationItemId,
    method: self.refs.method ? self.refs.method.value : null,
    from: self.refs.from ? Number(self.refs.from.value) : 0,
    to: self.refs.to ? Number(self.refs.to.value) : 0,
    allowEmptyValue: Boolean(self.allowEmptyValue),
    condition: setCondition(),
    lengthSize: self.refs.lengthSize ? Number(self.refs.lengthSize.value) : 0,
    functionName: _.get(self, 'refs.customFunctionSearch.value', null) || _.get(self, 'refs.customFunctionSearch.opts.term', null),
    equalsTo: self.refs.equalsTo ? self.refs.equalsTo.value : null,
    notEqualsTo: self.refs.notEqualsTo ? self.refs.notEqualsTo.value : null
  }
}

function setCondition () {
  if (self.refs.method && self.refs.method.value === 'regexp') {
    return _.escapeRegExp(self.condition)
  } else {
    return self.refs.condition ? self.refs.condition.value : null
  }
}

function remove () {
  self.parent.trigger('validation-removed', self.opts.index)
}

self.on('mount', function () {
  if (opts.setup) {
    self.method = opts.setup.method
    onChange()
    self.update()
  }
})

function onChange () {
  const rule = {}
  rule.method = self.refs.method.value
  self.method = rule.method
  self.parent.trigger('value-changed')
}

self.onValueChange = function (evt) {
  const target = evt.target
  self[target.getAttribute('ref')] = target.type === 'checkbox' ? target.checked : target.value
  self.update()
  onChange()
}

self.onFunctionNameChange = function () {
  self.functionName = self.refs.customFunctionSearch.value
  self.update()
  onChange()
}
