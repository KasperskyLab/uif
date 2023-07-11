const self = this
self.setupList = []
self.type = opts.type

self.on('mount', function () {
  self.on('validation-removed', onValidationRemoved)
  self.setupList = self.opts.rules || []
  self.ignoreComponentValidation = self.opts.ignoreComponentValidation
  self.opts.type = self.type
  self.update()
})

function onValidationRemoved (index) {
  self.setupList.splice(index, 1)
  self.update()
}

self.onChangeType = function (evt) {
  self.type = Number(evt.target.value)
  self.update()
  self.trigger('value-changed')
}

self.addValidation = function () {
  self.setupList.push({})
  self.update()
}

self.removeValidation = function () {
  self.setupList = []
  self.update()
}

self.getValidationSetupList = function () {
  let tags = self.tags['validation-setup']
  if (!tags) return []
  if (!Array.isArray(tags)) { tags = [tags] }
  return tags
}

self.serializeState = function () {
  const rules = []
  let tags = self.tags['validation-setup']
  if (!tags) return
  if (!Array.isArray(tags)) tags = [tags]

  tags.forEach(function (tag) {
    rules.push(tag.serializeState())
  })

  return {
    type: self.type,
    rules
  }
}
