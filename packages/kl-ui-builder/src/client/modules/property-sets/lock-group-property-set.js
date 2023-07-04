import { getAdditionalFields } from './helpers'

function LockGroupPropertySet () {
  const pSet = [
    new PropertyGroup([
      new ValueListField({
        label: 'Lock info path',
        fieldName: 'lockInfoPath'
      }),
      new ToggledRuntimeMemberSearchField({
        label: 'Get lock value from handler',
        fieldName: 'getterFncName'
      }),
      new ToggledRuntimeMemberSearchField({
        label: 'onChange setter',
        fieldName: 'setterFncName'
      }),
      new BoolField({
        label: 'Alway hidden',
        fieldName: 'alwaysHidden'
      }),
      new BoolField({
        label: 'Show only title',
        fieldName: 'isTitleVisible'
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
        label: constants.CTRL_LABEL_ID,
        fieldName: constants.FIELD_NAME,
        required: true
      }),
      new TextField({
        label: constants.CTRL_LABEL_TOPIC_ID,
        fieldName: constants.FIELD_TOPIC_ID
      })
    ], 'General settings'),
    new PropertyGroup([StyleField({
      rules: ['indent', 'offsetBottom', 'offsetTop', 'offsetAfter', 'state']
    })], 'Control style'),
    new PropertyGroup([
      new DependencyListField(),
      new DependantsField()
    ], 'Dependencies'),
    ...getAdditionalFields(['elements'])
  ]
  const api = {
    type: 'LockGroupPropertySet',
    caption: 'Lock group',
    getMembers: function () {
      return pSet
    },
    jsonPatch: function (json) {
      if (!json.columns) return json
      return json
    }
  }

  return api
}

module.exports = LockGroupPropertySet
