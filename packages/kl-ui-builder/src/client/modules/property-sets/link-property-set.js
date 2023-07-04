import { getAdditionalFields } from './helpers'

/* eslint-disable */
function LinkPropertySet () {
  const routeTitle = new TextField({
    label: 'Route',
    fieldName: 'route'
  })
  const handlerTitle = new TextField({
    label: 'Handler name',
    fieldName: 'handler'
  })

  const targetBlank = new BoolField({
    label: 'Open in new tab',
    fieldName: 'targetBlank'
  })

  const onModeChanged = (value = 'href') => {
    switch (value) {
      case 'route':
        routeTitle.hidden = false
        handlerTitle.hidden = true
        targetBlank.hidden = true
        break
      case 'handler':
        routeTitle.hidden = true
        handlerTitle.hidden = false
        targetBlank.hidden = true
        break
      case 'href':
      case 'name':
      default:
        routeTitle.hidden = true
        handlerTitle.hidden = true
        targetBlank.hidden = false
        break
    }
    runtime.trigger('control-settings:refresh')
  }

  const modeSelector = new SelectField({
    label: 'Mode',
    fieldName: 'mode',
    onChange: onModeChanged,
    onMount: onModeChanged,
    items: [
      {
        value: 'href',
        text: 'PAss value to «href»'
      },
      {
        value: 'name',
        text: 'Pass value to «name»'
      },
      {
        value: 'route',
        text: 'Pass value to route params'
      },
      {
        value: 'handler',
        text: 'Invoke function on cick'
      }
    ]
  })

  const labelInput = new TextField({
    label: 'Text',
    fieldName: 'label',
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
    label: 'Datasource type',
    fieldName: 'labelType',
    onChange: onLabelSourceChanged,
    onMount: onLabelSourceChanged,
    items: [
      {
        value: 'text',
        text: 'Text (constant)'
      },
      {
        value: 'mapToProperty',
        text: 'Map to property'
      },
      {
        value: 'handler',
        text: 'Get from handler'
      }
    ]
  })

  const pSet = [
    new PropertyGroup([
      TextField({
        label: constants.CTRL_LABEL_ID,
        fieldName: constants.FIELD_NAME,
        required: true
      }),
      new TextField({
        label: constants.CTRL_LABEL_ALIAS,
        fieldName: constants.FIELD_ALIAS
      }),
      new ValueField(),
      TextField({
        label: constants.CTRL_LABEL_TOPIC_ID,
        fieldName: constants.FIELD_TOPIC_ID
      }),
      new TextField({
        label: constants.CTRL_LABEL_DESCRIPTION,
        fieldName: constants.FIELD_DESCRIPTION
      }),
      new TextField({
        label: 'Icon class',
        fieldName: 'iconClass'
      })
    ], 'General settings'),
    new PropertyGroup([
      modeSelector,
      routeTitle,
      handlerTitle,
      targetBlank
    ], 'Link behavior'),
    new PropertyGroup([
      labelSourceSelector,
      labelInput,
      labelMappingProperty,
      labelHandler
    ], 'Link text'),
    new PropertyGroup([
      new LockSourceField()],
    'Lock group'),
    new PropertyGroup([
      new AccordionSourceField()
    ], 'Accordion'),
    new PropertyGroup([new StyleField({
      rules: ['indent', 'offsetBottom', 'offsetTop', 'offsetAfter', 'customClass', 'state']
    })], 'Control style'),
    new PropertyGroup([
      new DependencyListField(),
      new DependantsField()
    ], 'Dependencies'),
    ...getAdditionalFields(['elements'])
  ]

  const api = {
    type: 'LinkPropertySet',
    caption: 'Link',
    getMembers () {
      return pSet
    }
  }

  return api
}
/* eslint-enable */

module.exports = LinkPropertySet
