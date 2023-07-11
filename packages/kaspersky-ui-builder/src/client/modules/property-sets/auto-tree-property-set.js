import { getAdditionalFields } from './helpers'

function AutoTreePropertySet () {
  const compactMode = new BoolField({
    label: 'Compact mode',
    fieldName: 'compact',
    onChange: onCompactModeToggle,
    onMount: onCompactModeToggle
  })

  function onCompactModeToggle (value) {
    compactDescriptionHandler.hidden = !value
    runtime.trigger('control-settings:refresh')
  }

  const compactDescriptionHandler = new TextField({
    label: 'Description getter for compact mode',
    fieldName: 'descriptionGetter'
  })

  const pSet = [
    new PropertyGroup([
      new TextField({
        label: constants.CTRL_LABEL_ID,
        fieldName: constants.FIELD_NAME,
        required: true
      }),
      new TextField({
        label: constants.CTRL_LABEL_TOPIC_ID,
        fieldName: constants.FIELD_TOPIC_ID
      }),
      new BoolField({
        label: 'Cache entries',
        fieldName: 'cacheEntries'
      }),
      new BoolField({
        label: constants.hideSelectedEntriesCounter.label,
        fieldName: constants.hideSelectedEntriesCounter.field
      }),
      compactMode,
      compactDescriptionHandler
    ], 'General settings'),
    new PropertyGroup([
      new ValueField()
    ], 'Value'),
    new PropertyGroup(
      [
        new OptionalFunctionField({
          label: 'Custom buttons getter',
          fieldName: 'customActionsResolver'
        }),
        new OptionalFunctionField({
          label: 'Sync buttons state handler',
          fieldName: 'actionsStateResolver'
        }),
        new BoolField({
          label: 'Single selection mode',
          fieldName: 'isInSingleSelectionMode'
        })
      ],
      'Toolbar'
    ),
    new PropertyGroup(
      [
        new OptionalTextField({
          label: 'Runtime variable to get selected rows',
          fieldName: 'selectionSyncEnvVarName'
        })
      ],
      'Data exchange with external modules'
    ),
    new PropertyGroup(
      [
        new OptionalFunctionField({
          label: 'Child row resolver',
          fieldName: 'childRowResolver'
        }),
        new BoolField({
          label: 'Select child rows when parent is selected',
          fieldName: 'syncSelectToChildren'
        })
      ],
      'Tree view'
    ),
    new PropertyGroup([new LockSourceField()], 'Lock group'),
    new PropertyGroup([new AccordionSourceField()], 'Accordion'),
    new PropertyGroup(
      [new StyleField({
        rules: ['indent', 'offsetBottom', 'offsetTop', 'offsetAfter', 'customClass', 'state']
      })],
      'Styles'
    ),
    new PropertyGroup([new DependencyListField()], 'Dependencies'),
    new PropertyGroup([new ValidationListField()], 'Validation'),
    ...getAdditionalFields(['elements'])
  ]
  const api = {
    type: 'AutoTreePropertySet',
    caption: 'Tree',
    getMembers () {
      return pSet
    },
    jsonPatch (json) {
      return json
    }
  }

  return api
}

module.exports = AutoTreePropertySet
