const self = this
self.forms = {}
self.mode = self.opts.mode

self.onValueChange = function () {
  self.mode = _.get(self, 'refs.mode.value')
  self.childFormId = _.get(self, 'refs.childFormId.value')
  self.trigger('value-changed')
  self.update()
}

self.serializeState = function () {
  const res = {}

  res.mode = _.get(self, 'refs.mode.value', '0')
  res.childFormId = _.get(self, 'refs.childFormId.value', null)

  return res
}

function getForms () {
  let activeFormId
  runtime.trigger('form:get-active', function ({ id }) {
    activeFormId = id
  })
  runtime.trigger('forms:get', function (forms) {
    self.forms = _.reduce(forms, (accum, form) => {
      accum[form.id] = form.name
      return accum
    }, {})
    delete self.forms[activeFormId]
  })
}

self.on('before-mount', function () {
  getForms()
})
