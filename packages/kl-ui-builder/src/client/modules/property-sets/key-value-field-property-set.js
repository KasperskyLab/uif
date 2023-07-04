import { getAdditionalFields } from './helpers'

let tbCr = 0
function KeyValueFieldPropertySet () {
  const pSet = [
    new PropertyGroup([
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
    type: 'LabeltextFieldPropertySet',
    caption: 'Key:Value',
    getMembers () {
      return pSet
    },
    jsonPatch (json) {
      const { value, title } = json
      const modifiedJson = json
      if (typeof value === 'string') {
        modifiedJson.value = [{
          label: title,
          description: [value]
        }]
      }
      return modifiedJson
    }
  }

  return api
}

module.exports = KeyValueFieldPropertySet
