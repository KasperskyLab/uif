import { DataSaveActionField } from '../control-settings-fields/data-save-action-field'
import { getAdditionalFields } from './helpers'

function ArtBoardPropertySet () {
  const buttonsListField = new ButtonsListField({
    label: 'Control buttons',
    fieldName: 'buttons'
  })

  const customButtonsField = new OptionalFunctionField({
    label: 'Custom buttons getter',
    fieldName: 'customButtonsGetter'
  })

  function onFormModeChanged (mode) {
    runtime.trigger('window:mode:set', mode)
    switch (mode) {
      case 'popup':
        buttonsListField.hidden = false
        customButtonsField.hidden = true
        break
      case 'flyout-panel':
        buttonsListField.hidden = false
        customButtonsField.hidden = false
        break
      default:
        buttonsListField.hidden = true
        customButtonsField.hidden = true
    }
    runtime.trigger('control-settings:refresh')
  }

  function buildParentFormsList () {
    const selectTag = this
    runtime.trigger('forms:get', formsObject => {
      runtime.trigger('form:get-active', ({ parentFormId } = {}) => {
        const forms = Object.keys(formsObject).map(id => {
          const { name: text, id: value } = formsObject[id]
          return { text, value }
        })
        selectTag.opts.items = [{
          text: '-',
          value: null
        }, ...forms]
        selectTag.opts.slct = parentFormId
        selectTag.update()
      })
    })
  }

  const navigationTitle = new TextField({
    label: '?Navigation title',
    fieldName: 'navigationTitle',
    localized: true
  })
  navigationTitle.hidden = true

  const navigationGroup = new TextField({
    label: 'Navigation group',
    fieldName: 'navigationGroup',
    localized: true
  })
  navigationGroup.hidden = true

  function onNavigationChecked (value) {
    navigationTitle.hidden = !value
    navigationGroup.hidden = !value
  }

  const dataModelNameField = new TextField({
    label: 'Model name',
    fieldName: 'dataModelName'
  })
  dataModelNameField.hidden = true

  function onFormVersionChanged (version) {
    dataModelNameField.hidden = !version
    runtime.trigger('control-settings:refresh')
  }

  const pSet = [
    new PropertyGroup([
      new TextField({
        label: 'Form ID',
        fieldName: constants.FIELD_NAME,
        required: true
      }),
      new TextField({
        label: 'Help topic ID',
        fieldName: 'topicId'
      }),
      new TextField({
        label: 'Form file name',
        fieldName: 'name',
        required: true,
        excludeFromJSON: true
      }),
      new TextField({
        label: 'Form title',
        fieldName: 'title',
        localized: true,
        required: true
      }),
      new SelectField({
        label: 'Form version',
        fieldName: 'version',
        onChange: onFormVersionChanged,
        onMount: onFormVersionChanged,
        items: [{
          value: '',
          text: 'v1.0'
        }, {
          value: '2',
          text: 'v2.0'
        }]
      }),
      dataModelNameField,
      new BoolField({
        label: 'Display form in navigation',
        fieldName: 'navigationChecked',
        onChange: (value) => {
          onNavigationChecked(value)
          runtime.trigger('control-settings:refresh')
        },
        onMount: onNavigationChecked
      }),
      navigationTitle,
      navigationGroup,

      new BoolField({
        label: 'Root form',
        fieldName: 'rootForm'
      }),
      new BoolField({
        label: 'Ignore domain validation',
        fieldName: 'ignoreDomainValidation'
      }),
      new SelectField({
        label: 'Object type',
        fieldName: 'objectType',
        items: [
          {
            value: '',
            text: ''
          },
          {
            value: '0',
            text: 'Policy'
          },
          {
            value: '4',
            text: 'Profile'
          },
          {
            value: '1',
            text: 'Task'
          },
          {
            value: '6',
            text: 'Task (initial)'
          },
          {
            value: '7',
            text: 'Task (custom schedule)'
          },
          {
            value: '2',
            text: 'Local task'
          },
          {
            value: '3',
            text: 'Settings'
          },
          {
            value: '5',
            text: 'Distributive'
          },
          {
            value: '8',
            text: 'Report'
          }
        ],
        required: true
      }),
      new TextField({
        label: 'Domain',
        fieldName: 'domain'
      }),
      new TextField({
        label: 'Author',
        fieldName: 'author'
      })
    ], 'General settings'),
    new PropertyGroup([
      new DataSourceField({
        label: 'Data source',
        fieldName: 'dataSource',
        defaultServerApiMethod: 'getFormModel'
      }),
      new DataSaveActionField({
        label: 'Data save action',
        fieldName: 'dataSaveAction',
        defaultServerApiMethod: 'setFormModel',
        hideHandlerOption: true
      }),
      new BoolField({
        label: 'Use cache',
        fieldName: 'useCache'
      }),
      new BoolField({
        label: 'Don`t show action-bar on form change',
        fieldName: 'isInSilentChangeMode'
      }),
      new BoolField({
        label: 'Do not track form changes',
        fieldName: 'modelTrackerIsOff'
      }),
      new BoolField({
        label: 'Is parent entity',
        fieldName: 'isParentEntity'
      }),
      new OptionalFunctionField({
        label: 'Setup action bar with handler',
        fieldName: 'actionBarAssistantBootstrapper'
      }),
      new BoolField({
        label: 'Don`t close form when saving domain',
        fieldName: 'ignoreFormCloseOnDomainSave'
      })
    ], 'Data'),
    new PropertyGroup([
      new FormInitFunctionField({
        label: '',
        fieldName: 'init'
      }),
      new OptionalFunctionField({
        label: 'Invoke handler onRender',
        fieldName: 'onRendered'
      }),
      new OptionalFunctionField({
        label: 'Invoke handler onClose',
        fieldName: 'onDispose'
      })
    ], 'Event handler'),
    new PropertyGroup([
      new SelectField({
        label: 'View type',
        fieldName: 'type',
        onChange: onFormModeChanged,
        onMount: onFormModeChanged,
        items: [
          {
            value: 'ui-sequence',
            text: 'Sequence'
          },
          {
            value: 'detail-page',
            text: 'Details-page'
          },
          {
            value: 'flyout-panel',
            text: 'Flyout-panel'
          }
        ]
      }),
      buttonsListField,
      customButtonsField,
      new SelectField({
        label: 'Parent form',
        fieldName: 'parentFormId',
        onMount: buildParentFormsList,
        items: []
      })
    ], 'View'),
    ...getAdditionalFields('form')
  ]

  const api = {
    getMembers () {
      return pSet
    },
    onUpdate: function onUpdate (cb) {
      cb && cb()
    },
    jsonPatch (json) {
      return json
    }
  }

  return api
}

module.exports = ArtBoardPropertySet
