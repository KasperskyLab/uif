import { getAdditionalFields } from './helpers'

function AgreementPropertySet () {
  const pSet = [
    new PropertyGroup([
      new TextField({
        label: constants.CTRL_LABEL_ID,
        fieldName: constants.FIELD_NAME,
        required: true
      })
    ], 'General properties'),
    new PropertyGroup([
      new ValueField({ lite: true, fieldName: 'value' })
    ], 'Value'),
    new PropertyGroup([new DependencyListField()], 'Dependencies'),
    ...getAdditionalFields(['elements'])
  ]
  const api = {
    type: 'AgreementPropertySet',
    caption: 'Agreement',
    getMembers () {
      return pSet
    }
  }

  return api
}

module.exports = AgreementPropertySet
