const self = this
self.columns = []
const booleadFields = ['checkbox']
self.filtersSettingsOpened = {}

self.on('mount', function () {
  self.columns = opts.columns || []
  self.propertyFields = [
    ...opts.defaultFields,
    ...(opts.additionalFields || []).map(field => ({
      ...field,
      fieldName: `additionalFields.${field.fieldName}`
    }))]
  self.update()
})

self.addNewItem = function () {
  self.columns.push({
    text: ''
  })
  self.update()
}

self.saveColumnName = function (evt) {
  evt.item.column.text = evt.target.value.trim()
  self.trigger('value-changed')
}

self.getValue = function () {
  return self.columns
}

self.serializeState = function () {
  return { columns: self.columns }
}

self.onValueChange = function () {
  self.trigger('value-changed')
}

self.removeColumn = function (evt) {
  const columnIndex = evt.item.i
  self.columns.splice(columnIndex, 1)
  self.update()
  self.trigger('value-changed')
  runtime.trigger(`column:drop#${self.controlSetupId}`, columnIndex)
}

self.filtersSettingsToggle = index => () => {
  self.filtersSettingsOpened[index] = !self.filtersSettingsOpened[index]
  if (!self.columns[index].filters) {
    self.columns[index].filters = {
      hideColumnAvailable: true,
      showByDefault: true,
      filterColumnAvailable: true,
      localizeField: false,
      type: 'text'
    }
  }
  self.update()
}

self.setProperty = (index, property) => ({ target: { value } }) => {
  const isPropertyUnique = ({ fieldName: propertyToCompare, unique }) => unique && propertyToCompare === property

  if (!value) {
    _.unset(self.columns[index], property)
  } else {
    const isUnique = self.propertyFields.some(isPropertyUnique)
    if (isUnique) {
      self.columns.forEach((column, indexToCompare) => {
        if (index !== indexToCompare) _.set(column, property, false)
      })
      _.set(self.columns[index], property, !_.get(self.columns[index], property))
    } else {
      const isBoolean = booleadFields.includes(self.propertyFields.find(({ fieldName }) => property === fieldName).type)
      _.set(
        self.columns[index],
        property,
        isBoolean
          ? !_.get(self.columns[index], property)
          : value)
    }
  }
  self.onValueChange()
  self.update()
}

self.checkDependency = ({ depends, column }) => {
  return depends.equals.some(value => _.get(column, depends.on) === value)
}
