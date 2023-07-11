import { getAdditionalFields } from './helpers'

function onAddNewForm () {
  runtime.trigger('ui-sequence-trigger:child:setup')
}

function ComponentTogglePropertySet () {
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
        label: constants.CTRL_LABEL_DESCRIPTION,
        fieldName: constants.FIELD_DESCRIPTION,
        localized: true
      }),
      new TextField({
        label: 'Expand title',
        fieldName: 'expandTitle',
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
      }),
      new LinkButtonField({
        fieldName: 'lnkChildForm',
        text: 'Child form',
        onclick: onAddNewForm
      }),
      new BoolField({
        label: 'Automatically open child form on enable',
        fieldName: 'autoExpand'
      })
    ], 'General settings'),
    new PropertyGroup([
      new ValueField()
    ], 'Value'),
    new PropertyGroup([new LockSourceField()], 'Lock group'),
    new PropertyGroup([new AccordionSourceField()], 'Accordion'),
    new PropertyGroup([new DependencyListField()], 'Dependencies'),
    ...getAdditionalFields(['elements'])
  ]

  const api = {
    caption: 'Group switch',
    getMembers () {
      return pSet
    }
  }

  return api
}

module.exports = ComponentTogglePropertySet
