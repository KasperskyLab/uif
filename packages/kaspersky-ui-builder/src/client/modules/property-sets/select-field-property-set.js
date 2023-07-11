import { getAdditionalFields } from './helpers'

function SelectFieldPropertySet () {
  const pSet = [
    new PropertyGroup([
      new KeyValueListField({
        label: 'List elements',
        fieldName: 'elements'
      }),
      new TextField({
        label: constants.CTRL_LABEL_ALIAS,
        fieldName: constants.FIELD_ALIAS
      }),
      new TextField({
        label: constants.CTRL_LABEL_LBL_TEXT,
        fieldName: constants.FIELD_TITLE,
        localized: true
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
        label: constants.placeholder.label,
        fieldName: constants.placeholder.field,
        localized: true
      })
    ], 'General settings'),
    new PropertyGroup([
      new ValueField()
    ], 'Value'),
    new PropertyGroup([new LockSourceField()], 'Lock group'),
    new PropertyGroup([new AccordionSourceField()], 'Accordion'),
    new PropertyGroup([new StyleField()], 'Control style'),
    new PropertyGroup([new DependencyListField()], 'Dependencies'),
    new PropertyGroup([new ValidationListField()], 'Validation'),
    ...getAdditionalFields(['elements'])
  ]

  const api = {
    type: 'SelectFieldPropertySet',
    caption: 'Dropdown list',
    getMembers: function () {
      return pSet
    }
  }

  return api
}

module.exports = SelectFieldPropertySet
