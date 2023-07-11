import { getAdditionalFields } from 'helpers'

function ToolbarPropertySet () {
  const pSet = [
    new PropertyGroup([
      new TextField({
        label: constants.CTRL_LABEL_ALIAS,
        fieldName: constants.FIELD_ALIAS
      }),
      new TextField({
        label: constants.CTRL_LABEL_ID,
        fieldName: constants.FIELD_NAME,
        required: true
      }),
      new TextField({
        label: constants.CTRL_LABEL_TOPIC_ID,
        fieldName: constants.FIELD_TOPIC_ID
      }),
      new TextField({
        label: constants.toolbar.labelItemsGetter,
        fieldName: constants.toolbar.itemsGetter,
        required: true
      }),
      new OptionalFunctionField({
        label: constants.toolbar.labelStateResolver,
        fieldName: constants.toolbar.itemsStateResolver
      }),
      new TextField({
        label: constants.toolbar.labelEventName,
        fieldName: constants.toolbar.eventName
      })
    ], 'General settings'),
    new PropertyGroup([new LockSourceField()], 'Lock group'),
    new PropertyGroup([new AccordionSourceField()], 'Accordion'),
    new PropertyGroup([new DependencyListField()], 'Dependencies'),
    ...getAdditionalFields(['elements'])
  ]

  const api = {
    type: 'ToolbarPropertySet',
    getMembers: function () {
      return pSet
    }
  }

  return api
}

module.exports = ToolbarPropertySet
