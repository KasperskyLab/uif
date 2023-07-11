import { getAdditionalFields } from './helpers'

function RepeaterPropertySet () {
  const pSet = [
    new PropertyGroup([
      new TextField({
        label: constants.CTRL_LABEL_ALIAS,
        fieldName: constants.FIELD_ALIAS
      }),
      new ControlGroupElementsField({
        fieldName: 'elements'
      }),
      new TextField({
        label: constants.CTRL_LABEL_ID,
        fieldName: constants.FIELD_NAME,
        required: true
      })
    ], 'General settings'),
    new PropertyGroup([
      new ValueField()
    ], 'Value'),
    new PropertyGroup([new LockSourceField()], 'Lock group'),
    new PropertyGroup([new AccordionSourceField()], 'Accordion'),
    new PropertyGroup([new StyleField()], 'Control style'),
    new PropertyGroup([new DependencyListField()], 'Dependencies'),
    ...getAdditionalFields(['elements'])
  ]
  const api = {
    type: 'RepeaterPropertySet',
    caption: 'Loop',
    getMembers () {
      return pSet
    },
    jsonPatch (json) {
      if (!json.elements) {
        json.elements = []
      }

      return json
    }
  }

  return api
}

module.exports = RepeaterPropertySet
