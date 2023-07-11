function TypeToClass (type) {
  return {
    text: TextField,
    select: SelectField,
    checkbox: BoolField,
    'optional-text': OptionalFunctionField
  }[type]
}

export function getAdditionalFields (fields) {
  if (typeof fields === 'string') {
    fields = [fields]
  }

  const additionalFields = fields.reduce((arr, field) => {
    customFields[field] && arr.push(...customFields[field])
    return arr
  }, [])

  return additionalFields.length
    ? [
        new PropertyGroup(
          [
            new TextField({
              label: 'Model property',
              fieldName: 'prop'
            }),
            ...additionalFields.map(({ type, ...props }) => new TypeToClass(type)(props))
          ],
          'Additional fields'
        )
      ]
    : []
}

export function createFieldMapperPropertyGroup ({
  fieldTitle = 'Title not specified',
  fieldName
}) {
  const onLabelSourceChanged = (value = 'text') => {
    switch (value) {
      case 'mapToProperty':
        labelInput.hidden = true
        labelMappingProperty.hidden = false
        labelHandler.hidden = true
        labelRuntimeVariable.hidden = true
        break
      case 'handler':
        labelInput.hidden = true
        labelMappingProperty.hidden = true
        labelHandler.hidden = false
        labelRuntimeVariable.hidden = true
        break
      case 'runtimeVariable':
        labelInput.hidden = true
        labelMappingProperty.hidden = true
        labelHandler.hidden = true
        labelRuntimeVariable.hidden = false
        break
      case 'text':
      default:
        labelInput.hidden = false
        labelMappingProperty.hidden = true
        labelHandler.hidden = true
        labelRuntimeVariable.hidden = true
        break
    }
    runtime.trigger('control-settings:refresh')
  }

  const labelSourceSelector = new SelectField({
    label: 'Datasource type',
    fieldName: `${fieldName}Type`,
    onChange: onLabelSourceChanged,
    onMount: onLabelSourceChanged,
    items: [
      {
        value: 'text',
        text: 'Text (constant)'
      },
      {
        value: 'mapToProperty',
        text: 'Map to model property'
      },
      {
        value: 'handler',
        text: 'Get from handler'
      },
      {
        value: 'runtimeVariable',
        text: 'runtime.variable'
      }
    ]
  })

  const labelInput = new TextField({
    label: 'Text',
    fieldName: `${fieldName}Fixed`,
    localized: true
  })

  const labelMappingProperty = new TextField({
    label: 'Model property',
    fieldName: `${fieldName}ModelProperty`
  })

  const labelHandler = new TextField({
    label: 'Handler name',
    fieldName: `${fieldName}HandlerName`
  })

  const labelRuntimeVariable = new TextField({
    label: 'runtime.variable name',
    fieldName: `${fieldName}RuntimeVariableName`
  })

  return new PropertyGroup([
    labelSourceSelector,
    labelInput,
    labelMappingProperty,
    labelHandler,
    labelRuntimeVariable
  ], fieldTitle)
}
