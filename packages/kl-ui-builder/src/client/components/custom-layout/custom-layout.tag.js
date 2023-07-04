const self = this

// rows
self.rows = null
self.rowsValid = true
self.saveRowsChange = (evt) => {
  const newValue = evt.target.value.trim()
  // more than 1 times:
  // ( ( number + type(fr OR px OR %) ) OR auto ) AND optional space
  const reg = /^(([0-9]+(fr|px|%)|auto) )+$/
  self.rowsValid = `${newValue} `.match(reg) !== null
  self.rows = newValue
  self.update()
  self.trigger('value-changed')
}

// columns
self.columns = null
self.columnsValid = true
self.saveColumnsChange = (evt) => {
  const newValue = evt.target.value.trim()
  // more than 1 times:
  // ( ( number + type(fr OR px OR %) ) OR auto ) AND optional space
  const reg = /^(([0-9]+(fr|px|%)|auto) )+$/
  self.columnsValid = `${newValue} `.match(reg) !== null
  self.columns = newValue
  self.update()
  self.trigger('value-changed')
}

// areas
self.useAreas = false
self.changeUseAreas = ({ target: { checked } }) => {
  self.useAreas = checked
  areaUpdate()
}
self.areas = [
  ['new_area']
]

self.on('mount', function () {
  self.rows = self.opts.rows || '1fr'
  self.columns = self.opts.columns || '1fr'
  self.useAreas = self.opts.useAreas || false
  self.areas = self.opts.areas || [['new_area']]
  areaUpdate()
  self.update()
})

self.deleteAreaRow = function (evt) {
  if (self.areas.length === 1) {
    return
  }
  const rowIndex = evt.item.row
  self.areas.splice(rowIndex, 1)
  areaUpdate()
}

self.deleteAreaColumn = function (evt) {
  if (self.areas[0].length === 1) {
    return
  }
  for (const row in self.areas) {
    self.areas[row].splice(evt.item.column, 1)
  }
  areaUpdate()
}

self.addAreaRow = function () {
  const newRow = Array(self.areas[0].length)
  newRow.fill('new_area')
  self.areas.push(newRow)
  areaUpdate()
  self.update()
}

self.addAreaColumn = function (e) {
  for (const row in self.areas) {
    self.areas[row].push('new_area')
  }
  areaUpdate()
  self.update()
}

self.setUpdatedArea = (row, column) => function (evt) {
  self.areas[row][column] = evt.target.value.trim()
  areaUpdate()
  self.update()
}

function areaUpdate () {
  if (self.useAreas) {
    const areaArray = Array.from(
      new Set(_.flattenDeep(self.areas))
    )
    areaArray.push('')
    runtime.variable.set('grid.areas', areaArray)
    self.rows = new Array(self.areas.length).fill('1fr').join(' ')
    self.columns = new Array(self.areas[0].length).fill('1fr').join(' ')
  } else {
    runtime.variable.set('grid.areas', [''])
  }
  self.update()
  self.trigger('value-changed')
}

self.validateAreaName = function (areaName) {
  return /^[\w]+$/.test(areaName)
}

self.serializeState = function () {
  return {
    rows: self.rows,
    columns: self.columns,
    useAreas: self.useAreas,
    areas: self.areas
  }
}
