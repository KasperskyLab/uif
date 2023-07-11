import { getAdditionalFields } from './helpers'

function CustomComponentSet () {
  const pSet = [
    new PropertyGroup([
      new TextField({
        label: 'Component name',
        fieldName: 'type'
      }),
      new TextAreaField({
        label: 'Component params',
        fieldName: 'customParams'
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
    new PropertyGroup([new StyleField({
      rules: ['indent', 'offsetBottom', 'offsetTop', 'offsetAfter', 'customClass', 'state']
    })], 'Control style'),
    new PropertyGroup([new ValidationListField()], 'Validation'),
    new PropertyGroup([new DependencyListField()], 'Dependencies'),
    ...getAdditionalFields(['elements'])
  ]

  const api = {
    type: 'CustomComponentPropertySet',
    caption: 'Custom component',
    getMembers () {
      return pSet
    }
  }

  return api
}

module.exports = CustomComponentSet
