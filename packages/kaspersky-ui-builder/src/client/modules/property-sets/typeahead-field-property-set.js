import { getAdditionalFields } from './helpers'

let tbCr = 0
function TypeaheadFieldPropertySet () {
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
        label: constants.placeholder.label,
        fieldName: constants.placeholder.field,
        localized: true
      }),
      new TextField({
        label: constants.searchText.label,
        fieldName: constants.searchText.field
      }),
      new TextField({
        label: constants.filteredProperty.label,
        fieldName: constants.filteredProperty.field
      }),
      new BoolField({
        label: 'Multiselect',
        fieldName: 'multiselect'
      }),
      new BoolField({
        label: 'Allow user items',
        fieldName: 'allowAddOwnItems'
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
    id: ++tbCr,
    type: 'TypeaheadFieldPropertySet',
    caption: 'Typeahead',
    getMembers: function () {
      return pSet
    }
  }

  return api
}

module.exports = TypeaheadFieldPropertySet
