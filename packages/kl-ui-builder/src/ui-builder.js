const path = require('path')

const uiBuilder = require('./')

const buildTypeField = {
  type: 'select',
  label: 'Build type',
  fieldName: 'buildType',
  items: [{
    text: 'Any',
    value: 'any'
  }, {
    text: 'Hosted',
    value: 'cloud'
  }, {
    text: 'On-Premise',
    value: 'local'
  }]
}

const componentLibrary = {
  type: 'select',
  label: 'Component library',
  fieldName: 'componentLibrary',
  items: [{
    value: 'riot',
    text: 'riot'
  }, {
    value: 'react',
    text: 'react'
  }]
}

const {
  UI_BUILDER_FORMS_PATH = path.join(__dirname, '../', 'assets', 'ui')
} = process.env

uiBuilder.setup({
  paths: {
    forms: UI_BUILDER_FORMS_PATH,
    projectRoot: path.join(__dirname)
  },
  port: 7000,
  pluginId: undefined,
  customFields: {
    form: [buildTypeField],
    elements: [buildTypeField, componentLibrary],
    dataTableColumns: [buildTypeField, componentLibrary],
    grid: [buildTypeField, { ...componentLibrary, items: componentLibrary.items.filter(elem => elem.value === 'react') }]
  }
})

uiBuilder.on('form:changed', function (formId, form) {
  // eslint-disable-next-line no-console
  console.log(`FORM ${formId} CHANGED. JSON:`, form.id)
})

uiBuilder.start()
