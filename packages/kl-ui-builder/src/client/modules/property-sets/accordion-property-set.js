import { getAdditionalFields } from './helpers'

function AccordionSet () {
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
      new InnerFormField({
        label: 'Child form'
      }),
      new BoolField({
        label: 'Expand by default',
        fieldName: 'expandByDefault'
      })
    ], 'General properties'),
    new PropertyGroup([
      new ValueField()
    ], 'Accordion title'),
    new PropertyGroup([new DependencyListField()], 'Dependencies'),
    ...getAdditionalFields(['elements'])
  ]

  const api = {
    type: 'AccordionPropertySet',
    caption: 'Accordion',
    getMembers () {
      return pSet
    }
  }

  return api
}

module.exports = AccordionSet
