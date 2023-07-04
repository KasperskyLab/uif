const self = this
self.forms = []
let activeNode

self.getChildNodes = function (node) {
  return map[node.id]
}
var map = {}

self.on('mount', function () {
  renderForms()
})

runtime.on('form-explorer:tree:refresh', renderForms)

function renderForms () {
  runtime.trigger('forms:get', function (pureForms) {
    map = {}
    const formsObject = _.cloneDeep(pureForms)
    const forms = Object.keys(formsObject).map(formId => formsObject[formId])
    forms.forEach(function (form) {
      const parentId = form.parentFormId
      if (parentId) {
        if (!map[parentId]) map[parentId] = []
        map[parentId].push(form)
      }
    })
    self.forms = []
    self.update()
    self.forms = forms.filter(({ parentFormId }) => !parentFormId)
    self.update()
  })
}

self.onNodeSelect = function (node) {
  if (activeNode) {
    if (activeNode === node) return
    activeNode.active = false
    activeNode.update()
  }
  activeNode = node
}

self.onCreateNewForm = function () {
  runtime.trigger('form:create')
}

self.onOpenForm = function (evt) {
  evt.stopPropagation()
  const model = _.get(evt, 'item.node')
  model && runtime.trigger('form:load', model)
}

self.allFormsExpanded = false
self.toggleAllFormsExpand = () => {
  self.allFormsExpanded = !self.allFormsExpanded
  runtime.triggerDelayed(`forms-list:${
        self.allFormsExpanded
            ? 'expand-all'
            : 'collapse-all'
    }`)
}
