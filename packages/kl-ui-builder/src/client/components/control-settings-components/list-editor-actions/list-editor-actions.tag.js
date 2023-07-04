const self = this

self.actions = [
  {
    type: 'Add',
    text: 'Add',
    selected: false
  },
  {
    type: 'Edit',
    text: 'Edit',
    selected: false
  },
  {
    type: 'Delete',
    text: 'Delete',
    selected: false
  },
  {
    type: 'Up',
    text: 'Up',
    selected: false
  },
  {
    type: 'Down',
    text: 'Down',
    selected: false
  },
  {
    type: 'Filter',
    text: 'Filter',
    selected: false
  }
]

self.saveSelection = function (evt) {
  evt.item.selected = !evt.item.selected
  self.trigger('value-changed')
}

self.serializeState = function () {
  return { actions: self.actions }
}

self.on('mount', function () {
  const savedActions = opts.actions
    ? opts.actions.reduce((obj, { type, selected }) => {
        obj[type] = selected
        return obj
      }, {})
    : {}

  self.actions = self.actions.map(action => ({
    ...action,
    selected: !!savedActions[action.type]
  }))
  self.update()
})
