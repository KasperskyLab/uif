import { getAdditionalFields } from './helpers'

function ActionBarPropertySet () {
  const pSet = [
    new PropertyGroup([
      new TextField({
        label: constants.CTRL_LABEL_ID,
        fieldName: constants.FIELD_NAME,
        required: true
      })
    ], 'General properties'),
    ...getAdditionalFields(['elements'])
  ]

  const api = {
    type: 'ActionBarPropertySet',
    caption: 'Action bar',
    getMembers () {
      return pSet
    }
  }

  return api
}

module.exports = ActionBarPropertySet
