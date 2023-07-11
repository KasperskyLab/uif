import { getAdditionalFields, createFieldMapperPropertyGroup } from './helpers'

function onAddNewForm () {
  runtime.trigger('ui-sequence-trigger:child:setup')
}

function UISequenceTriggerPropertySet () {
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
        label: 'Expand title',
        fieldName: 'expandTitle',
        localized: true
      }),
      new TextField({
        label: 'Description (DEPRECATED, use section "Description")',
        fieldName: constants.FIELD_DESCRIPTION,
        localized: true
      }),
      new TextField({
        label: constants.CTRL_LABEL_ID,
        fieldName: constants.FIELD_NAME,
        required: true
      }),
      new BoolField({
        label: 'Show action-bar in child form',
        fieldName: 'showActionBar'
      }),
      new SelectField({
        label: 'View mode',
        fieldName: 'controlType',
        items: [
          {
            value: 'button',
            text: 'Button'
          },
          {
            value: 'link',
            text: 'Link'
          }
        ]
      }),
      new TextField({
        label: constants.CTRL_LABEL_TOPIC_ID,
        fieldName: constants.FIELD_TOPIC_ID
      }),
      new LinkButtonField({
        fieldName: 'lnkEditor',
        text: 'Child form',
        onclick: onAddNewForm
      })
    ], 'General settings'),
    createFieldMapperPropertyGroup({
      fieldTitle: 'Description',
      fieldName: 'dynamicDescription'
    }),
    new PropertyGroup([new StyleField({
      rules: ['indent', 'offsetBottom', 'offsetTop', 'offsetAfter', 'customClass', 'state']
    })], 'Control style'),
    new PropertyGroup([new LockSourceField()], 'Lock group'),
    new PropertyGroup([new DependencyListField()], 'Dependencies'),
    ...getAdditionalFields(['elements'])
  ]

  const api = {
    getMembers: function () {
      return pSet
    },
    caption: 'Form trigger',
    type: 'UISequenceTriggerPropertySet'
  }

  return api
}

module.exports = UISequenceTriggerPropertySet
