import { getAdditionalFields } from './helpers'

function CheckboxFieldPropertySet () {
  const labelInput = new TextField({
    label: 'Text',
    fieldName: constants.FIELD_TITLE,
    localized: true
  })

  const labelMappingProperty = new TextField({
    label: 'Model property',
    fieldName: 'labelMappingProperty'
  })

  const labelHandler = new TextField({
    label: 'Handler name',
    fieldName: 'labelHandler'
  })

  const onLabelSourceChanged = (value = 'text') => {
    switch (value) {
      case 'mapToProperty':
        labelInput.hidden = true
        labelMappingProperty.hidden = false
        labelHandler.hidden = true
        break
      case 'handler':
        labelInput.hidden = true
        labelMappingProperty.hidden = true
        labelHandler.hidden = false
        break
      case 'text':
      default:
        labelInput.hidden = false
        labelMappingProperty.hidden = true
        labelHandler.hidden = true
        break
    }
    runtime.trigger('control-settings:refresh')
  }

  const labelSourceSelector = new SelectField({
    label: 'Source type',
    fieldName: 'labelType',
    onChange: onLabelSourceChanged,
    onMount: onLabelSourceChanged,
    items: [
      {
        value: 'text',
        text: 'Constant'
      },
      {
        value: 'mapToProperty',
        text: 'Model property'
      },
      {
        value: 'handler',
        text: 'Handler'
      }
    ]
  })
  const pSet = [
    new PropertyGroup([
      new TextField({
        label: constants.CTRL_LABEL_ALIAS,
        fieldName: constants.FIELD_ALIAS
      }),
      new TextField({
        label: constants.CTRL_LABEL_DESCRIPTION,
        fieldName: constants.FIELD_DESCRIPTION
      }),
      new TextField({
        label: constants.CTRL_LABEL_ID,
        fieldName: constants.FIELD_NAME,
        required: true
      }),
      new TextField({
        label: constants.CTRL_LABEL_TOPIC_ID,
        fieldName: constants.FIELD_TOPIC_ID
      })
    ], 'General settings'),
    new PropertyGroup([
      labelSourceSelector,
      labelInput,
      labelMappingProperty,
      labelHandler
    ], 'Label text'),
    new PropertyGroup([
      new ValueField()
    ], 'Value'),
    new PropertyGroup([new LockSourceField()], 'Lock group'),
    new PropertyGroup([new AccordionSourceField()], 'Accordion'),
    new PropertyGroup([new StyleField({
      rules: ['indent', 'offsetBottom', 'offsetTop', 'offsetAfter', 'customClass', 'state']
    })], 'Control style'),
    new PropertyGroup([new DependencyListField()], 'Dependencies'),
    new PropertyGroup([new ValidationListField()], 'Validation'),
    ...getAdditionalFields(['elements'])
  ]

  const api = {
    type: 'CheckboxFieldPropertySet',
    caption: 'Checkbox',
    getMembers () {
      return pSet
    }
  }

  return api
}

module.exports = CheckboxFieldPropertySet
