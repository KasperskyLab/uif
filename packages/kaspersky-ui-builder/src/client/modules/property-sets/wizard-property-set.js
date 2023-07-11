import { getAdditionalFields } from './helpers'

function WizardPropertySet () {
  const pSet = [
    new PropertyGroup([
      new WizardStepsField({
        label: '',
        fieldName: 'elements'
      }),
      new OptionalFunctionField({
        label: 'Get steps from handler',
        fieldName: 'customStepsGetter'
      })
    ],
    'General settings'),
    ...getAdditionalFields(['elements'])
  ]

  const api = {
    type: 'WizardPropertySet',
    caption: 'Wizzard',
    getMembers: function () {
      return pSet
    }
  }

  return api
}

module.exports = WizardPropertySet
