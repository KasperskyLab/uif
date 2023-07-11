import { getAdditionalFields } from 'helpers'

/* eslint-disable */
function AnchorPropertySet () {
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
        label: constants.anchor.labelItemsGetter,
        fieldName: constants.anchor.itemsGetter,
        required: true
      }),
      new OptionalFunctionField({
        label: constants.anchor.labelStateResolver,
        fieldName: constants.anchor.itemsStateResolver
      }),
      new TextField({
        label: constants.anchor.labelEventName,
        fieldName: constants.anchor.eventName
      })
    ], 'General settings'),
    new PropertyGroup([new LockSourceField()], 'Lock group'),
    new PropertyGroup([new AccordionSourceField()], 'Accordion'),
    new PropertyGroup([new DependencyListField()], 'Dependencies'),
    ...getAdditionalFields(['elements'])
  ]

  const api = {
    type: 'AnchorPropertySet',
    getMembers: function () {
      return pSet
    }
  }

  return api
}
/* eslint-enable */

module.exports = AnchorPropertySet
