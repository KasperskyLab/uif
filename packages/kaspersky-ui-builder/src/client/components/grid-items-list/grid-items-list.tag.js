const self = this
self.gridItems = []
self.areas = runtime.variable.get('grid.areas') || ['']

runtime.variable.onChange('grid.areas', newValue => {
  self.areas = newValue
  for (const gridItemIndex in self.gridItems) {
    if (!newValue.includes(self.gridItems[gridItemIndex].areaName)) {
      self.gridItems[gridItemIndex].areaName = self.areas[0]
    }
    if (newValue.length > 1) {
      self.gridItems[gridItemIndex].span = ''
    }
  }
  self.update()
})

self.on('mount', function () {
  self.gridItems = self.opts.items || []
  self.areas = runtime.variable.get('grid.areas') || ['']
  self.update()
})

self.deleteGridItem = (gridItem) => (e) => {
  const gridItemIndex = gridItem
  self.gridItems.splice(gridItemIndex, 1)
  for (let index = gridItemIndex; index < self.gridItems.length; index++) {
    self.gridItems[index].id -= 1
  }
  self.trigger('value-changed')
}

self.addNewgridItem = function () {
  self.gridItems.push({
    areaName: self.areas[0],
    span: '',
    id: self.gridItems.length + 1
  })
  self.trigger('value-changed')
}

self.changeAreaName = (gridItem) => ({ target: { value } }) => {
  self.gridItems[gridItem].areaName = value
  self.trigger('value-changed')
}

self.changeSpan = (gridItem) => ({ target: { value } }) => {
  self.gridItems[gridItem].span = value
  self.trigger('value-changed')
}

self.serializeState = function () {
  return { items: self.gridItems }
}
