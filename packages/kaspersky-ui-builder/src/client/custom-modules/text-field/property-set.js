import { getAdditionalFields } from 'helpers'

let tbCr = 0
function TextFieldPropertySet () {
  const pSet = [
    new PropertyGroup([
      new TextField({
        label: constants.CTRL_LABEL_LBL_TEXT,
        fieldName: constants.FIELD_TITLE,
        localized: true
      }),
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
        label: 'Placeholder',
        fieldName: 'placeholder'
      }),
      new BoolField({
        label: 'Use textarea',
        fieldName: 'isMultiline'
      })
    ], 'General settings'),
    new PropertyGroup([
      new ValueField()
    ], 'Value'),
    new PropertyGroup([new LockSourceField()], 'Lock group'),
    new PropertyGroup([new AccordionSourceField()], 'Accordion'),
    new PropertyGroup([new StyleField()], 'Control style'),
    new PropertyGroup([new DependencyListField()], 'Dependencies'),
    new PropertyGroup([
      new BoolField({
        label: 'Allow special chars',
        fieldName: 'allowSpecialChars'
      }),
      new ValidationListField()
    ], 'Validation'),
    ...getAdditionalFields(['elements'])
  ]

  const api = {
    id: ++tbCr,
    type: 'TextFieldPropertySet',
    caption: 'Text field',
    getMembers: function () {
      return pSet
    }
  }

  return api
}

module.exports = TextFieldPropertySet
