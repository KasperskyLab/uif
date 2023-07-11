import { getAdditionalFields } from './helpers'

function LocaleTextPropertySet () {
  const pSet = [
    new PropertyGroup([
      new TextField({
        label: constants.CTRL_LABEL_ALIAS,
        fieldName: constants.FIELD_ALIAS
      }),
      new TextField({
        label: constants.CTRL_LABEL_TOPIC_ID,
        fieldName: constants.FIELD_TOPIC_ID
      }),
      new TextField({
        label: constants.CTRL_LABEL_ID,
        fieldName: constants.FIELD_NAME,
        required: true
      })
    ], 'General settings'),
    new PropertyGroup([
      new LocaleValueField()
    ], 'Value'),
    new PropertyGroup([new AccordionSourceField()], 'Accordion'),
    new PropertyGroup([new StyleField()], 'Control style'),
    new PropertyGroup([new DependencyListField()], 'Dependencies'),
    ...getAdditionalFields(['elements'])
  ]

  const api = {
    type: 'LocaleTextFieldPropertySet',
    caption: 'Localized text',
    getMembers: function () {
      return pSet
    }
  }

  return api
}

module.exports = LocaleTextPropertySet
