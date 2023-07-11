import { getAdditionalFields } from './helpers'

function IconPropertySet () {
  const pSet = [
    new PropertyGroup([
      new TextField({
        label: constants.CTRL_LABEL_ID,
        fieldName: constants.FIELD_NAME,
        required: true
      }),
      new TextField({
        label: 'Click handler',
        fieldName: 'click_handler'
      })
    ], 'General settings'),
    new PropertyGroup([new ValueField()], 'Value'),
    new PropertyGroup([new AccordionSourceField()], 'Accordion'),
    new PropertyGroup([new StyleField()], 'Control style'),
    new PropertyGroup([new DependencyListField()], 'Dependencies'),
    ...getAdditionalFields(['elements'])
  ]
  const api = {
    type: 'IconPropertySet',
    caption: 'Icon',
    getMembers () {
      return pSet
    }
  }
  return api
}
module.exports = IconPropertySet
