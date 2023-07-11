const self = this
self.sourceType = self.opts.dsType || ''
self.parameterTypes = [
  { value: 'static', text: 'Constant value' },
  { value: 'runtimeVariable', text: 'Variable' },
  { value: 'member', text: 'Member' }
]
self.paramsSourceType = self.opts.paramsSourceType || 'static'
self.paramsHandler = self.opts.paramsHandler

self.onSourceSelect = function (evt) {
  self.sourceType = evt.target.value
  self.update()
  self.onValueChange()
}

function parseParams (input) {
  input = input.replace('{', '')
  input = input.replace('}', '')
  input = input.split(',')
  const res = []

  input.forEach(function (str) {
    const arr = str.split(':')
    const name = arr[0].trim()
    const innerRes = { name: name }
    if (arr[1].indexOf('runtime.variable.get') !== -1) {
      innerRes.type = 'runtimeVariable'
      const split = arr[1].split(/['"]/)
      if (split.length === 3) { innerRes.value = split[1] } else alert('Invalid pattern for "runtime.variable.get". Syntax error.')
    } else if (arr[1].indexOf('runtime.get') !== -1) {
      innerRes.type = 'runtimeMember'
      const split = arr[1].split(/['"]/)
      if (split.length === 3) { innerRes.value = split[1] } else throw new Error('Invalid pattern for "runtime.get". Syntax error.')
    } else {
      innerRes.type = 'static'
      let val = arr[1].trim()
      const floatVal = parseFloat(val)
      const dateVal = Date.parse(val)
      if (!isNaN(floatVal)) { innerRes.value = parseFloat(val) } else if (!isNaN(dateVal) && dateVal > 0) { innerRes.value = Date.parse(val) } else {
        if (val.match(/^'.*'$|^".*"$/)) {
          val = val.substring(1, val.length - 1)
          innerRes.value = val
        }
      }
    }
    if (innerRes.value) res.push(innerRes)
  })
  return res
}

self.serializeState = function () {
  const res = {}
  res.dsType = self.refs.dsType.value
  res.staticFunctionName = self.refs.staticFunctionName.value
  res.serverFunctionName = self.refs.dsType.value ? self.refs.serverApiMethod.value : ''
  res.params = self.refs.params && self.refs.params.value
  res.parsedParams = res.params ? parseParams(res.params) : ''
  res.paramsSourceType = self.paramsSourceType
  res.paramsHandler = self.paramsSourceType === 'function'
    ? self.paramsHandler
    : ''
  return res
}

self.on('mount', function () {
  runtime.get('server')
    .then(function (server) {
      self.apiMethods = Object.keys(server)
      self.apiMethods.unshift('')
      self.update()
    })
})

self.onValueChange = function () {
  self.trigger('value-changed')
}

self.onParamsSourceTypeChanged = ({ target: { value } }) => {
  self.update({ paramsSourceType: value })
  self.trigger('value-changed')
}

self.onParamsHandlerChange = ({ target: { value } }) => {
  self.update({ paramsHandler: value })
  self.trigger('value-changed')
}
