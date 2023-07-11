import { getAdditionalFields } from './helpers'

function ButtonPropertySet () {
  const pSet = [
    new PropertyGroup([
      new TextField({
        label: 'Text',
        fieldName: 'label',
        localized: true
      }),
      new TextField({
        label: constants.CTRL_LABEL_ALIAS,
        fieldName: constants.FIELD_ALIAS
      }),
      new TextField({
        label: 'Click handler',
        fieldName: 'click_handler'
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
    new PropertyGroup([new LockSourceField()], 'Lock group'),
    new PropertyGroup([new AccordionSourceField()], 'Accordion'),
    new PropertyGroup([new StyleField({
      rules: ['indent', 'offsetBottom', 'offsetTop', 'offsetAfter', 'customClass', 'state']
    })], 'Control style'),
    new PropertyGroup([new DependencyListField(), new DependantsField()], 'Dependencies'),
    ...getAdditionalFields(['elements'])
  ]

  const api = {
    type: 'ButtonPropertySet',
    caption: 'Button',
    getMembers () {
      return pSet
    }
  }

  return api
}

module.exports = ButtonPropertySet
