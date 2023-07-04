import { getAdditionalFields } from './helpers'

const syncValue = new TextField({
  fieldName: 'syncValue'
})
syncValue.hidden = false

function onSyncTypeChanged (type) {
  switch (type) {
    case 'variable':
      syncValue.hidden = false
      break
    case 'event':
      syncValue.hidden = false
      break
    default:
      syncValue.hidden = true
  }
  runtime.trigger('control-settings:refresh')
}

function ValidationComponentPropertySet () {
  const pSet = [
    new PropertyGroup([
      new ValueField()
    ], 'Value'),
    new PropertyGroup([
      new StyleField({
        rules: ['indent', 'offsetBottom', 'offsetTop', 'offsetAfter', 'customClass']
      })
    ], 'Styles'),
    new PropertyGroup([
      new SelectField({
        label: 'Validate:',
        fieldName: 'syncType',
        onChange: onSyncTypeChanged,
        onMount: onSyncTypeChanged,
        items: [
          {
            value: 'onFormSave',
            text: 'On Form save'
          },
          {
            value: 'model',
            text: 'On model change'
          },
          {
            value: 'variable',
            text: 'runtime.variable on change'
          },
          {
            value: 'event',
            text: 'runtime.trigger / runtime.on'
          }
        ]
      }),
      syncValue,
      new TextField({
        label: 'Handler name',
        fieldName: 'validationFunction'
      }),
      new BoolField({
        label: 'Scroll to element',
        fieldName: 'scrollToElement'
      })
    ], 'Validation'),
    ...getAdditionalFields(['elements'])
  ]

  const api = {
    type: 'ValidationComponentPropertySet',
    caption: 'Validation',
    getMembers: function () {
      return pSet
    }
  }

  return api
}

module.exports = ValidationComponentPropertySet
