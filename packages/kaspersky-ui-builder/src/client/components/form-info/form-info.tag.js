const self = this

self.onParentClick = function (evt) {
  runtime.trigger('form:load', evt.item._id)
}

self.onChildClick = function (evt) {
  runtime.trigger('form:load', evt.item._id)
}

runtime.on('form:set', function (formInfo) {
  self.parents = formInfo.parentForm
  self.children = formInfo.childForm
})
