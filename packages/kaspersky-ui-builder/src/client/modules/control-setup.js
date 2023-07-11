const components = require('../custom-modules/components.json')

function getControlMarkup (type) {
  if (type === null) return
  let res = ''
  switch (type) {
    case undefined:
      res = '<div class="ctrl no-ctrl"></div>'
      break
    case 0:
      res = require('../custom-modules/text-field/template.html')
      break
    case 1:
      res = require('../templates/artboard-control-templates/select.html')
      break
    case 2:
      res = require('../templates/artboard-control-templates/textarea.html')
      break
    case 3:
      res = require('../templates/artboard-control-templates/checkbox.html')
      break
    case 4:
      res = require('../templates/artboard-control-templates/state-selector.html')
      break
    case 5:
      res = require('../templates/artboard-control-templates/toggle.html')
      break
    case 6:
      // res = require('../templates/artboard-control-templates/list-editor.html')
      break
    case 7:
      res = require('../templates/artboard-control-templates/ui-sequence-trigger.html')
      break
    case 8:
      res = require('../templates/artboard-control-templates/password-input.html')
      break
    case 9:
      res = require('../templates/artboard-control-templates/url-input.html')
      break
    case 13:
      res = require('../templates/artboard-control-templates/text.html')
      break
    case 14:
      res = require('../templates/artboard-control-templates/time-input.html')
      break
    case 15:
      res = require('../templates/artboard-control-templates/date-input.html')
      break
    case 16:
      res = require('../templates/artboard-control-templates/header.html')
      break
    case 17:
      res = require('../templates/artboard-control-templates/lock-group.html')
      break
    case 18:
      res = require('../templates/artboard-control-templates/custom-component.html')
      break
    case 19:
      res = require('../templates/artboard-control-templates/accordion.html')
      break
    case 20:
      break
    case 21:
      res = require('../templates/artboard-control-templates/labeltext.html')
      break
    case 22:
      res = require('../templates/artboard-control-templates/typeahead.html')
      break
    case 23:
      // res = require( '../templates/artboard-control-templates/segmented-form-group.html' )
      break
    case 24:
      // res = require( '../templates/artboard-control-templates/wizard.html' )
      break
    case 25:
      res = require('../templates/artboard-control-templates/text.html')
      break
    case 26:
      res = require('../templates/artboard-control-templates/icon.html')
      break
    case 27:
      res = require('../templates/artboard-control-templates/component-toggle.html')
      break
    case 28:
      res = require('../templates/artboard-control-templates/button.html')
      break
    case 29:
      res = require('../templates/artboard-control-templates/link.html')
      break
    case 30:
      res = require('../templates/artboard-control-templates/checkbox-group.html')
      break
    case 31:
      // res = require('../templates/artboard-control-templates/data-table.html')
      break
    case 32:
      res = require('../templates/artboard-control-templates/auto-tree.html')
      break
    case 33:
      res = require('../templates/artboard-control-templates/validation.html')
      break
    case 34:
      res = require('../templates/artboard-control-templates/action-bar.html')
      break
    case 35:
      res = require('../templates/artboard-control-templates/markdown.html')
      break
    case 36:
      res = require('../templates/artboard-control-templates/agreement.html')
      break
    default: {
      const templatePath = _.get(components, [type, 'template'])
      if (templatePath) {
        res = require('../custom-modules/' + templatePath)
      }
    }
  }
  return res
}

function getPropertySet (type) {
  const EmptyPropertySet = require('./property-sets/empty-property-set')
  const ArtBoardPropertySet = require('./property-sets/artboard-property-set')
  //   var LabeltextFieldPropertySet = require('./property-sets/labeltext-field-property-set')
  const KeyValueFieldPropertySet = require('./property-sets/key-value-field-property-set')
  const TypeaheadFieldPropertySet = require('./property-sets/typeahead-field-property-set')
  const SelectFieldPropertySet = require('./property-sets/select-field-property-set')
  const TextAreaFieldPropertySet = require('./property-sets/text-area-field-property-set')
  const CheckboxFieldPropertySet = require('./property-sets/checkbox-field-property-set')
  const StateSelectorPropertySet = require('./property-sets/state-selector-property-set')
  const CheckboxGroupPropertySet = require('./property-sets/checkbox-group-property-set')
  const SegmentedContentPropertySet = require('./property-sets/segmented-form-group-property-set')
  const TogglePropertySet = require('./property-sets/toggle-property-set')
  const ListEditorPropertySet = require('./property-sets/list-editor-property-set')
  const ControlGroupPropertySet = require('./property-sets/control-group-property-set')
  const RepeaterPropertySet = require('./property-sets/repeater-property-set')
  const ComponentTogglePropertySet = require('./property-sets/component-toggle-property-set')
  const PasswordFieldPropertySet = require('./property-sets/password-field-property-set')
  const UrlInputFieldPropertySet = require('./property-sets/url-input-field-property-set')
  const LabelFieldPropertySet = require('./property-sets/label-field-property-set')
  const TimeFieldPropertySet = require('./property-sets/time-field-property-set')
  const DateFieldPropertySet = require('./property-sets/date-field-property-set')
  const HeaderFieldPropertySet = require('./property-sets/header-field-property-set')
  const UISequenceTriggerPropertySet = require('./property-sets/ui-sequence-trigger-property-set')
  const LockGroupPropertySet = require('./property-sets/lock-group-property-set')
  const CustomComponentPropertySet = require('./property-sets/custom-component-property-set')
  const AccordionPropertySet = require('./property-sets/accordion-property-set')
  const WizardPropertySet = require('./property-sets/wizard-property-set')
  const LocaleTextPropertySet = require('./property-sets/locale-text-field-property-set')
  const IconPropertySet = require('./property-sets/icon-property-set')
  const ButtonPropertySet = require('./property-sets/button-property-set')
  const LinkPropertySet = require('./property-sets/link-property-set')
  const DataTablePropertySet = require('./property-sets/data-table-property-set')
  const AutoTreePropertySet = require('./property-sets/auto-tree-property-set')
  const ValidationPropertySet = require('./property-sets/validation-property-set')
  const ActionBarPropertySet = require('./property-sets/action-bar-property-set')
  const MarkdownPropertySet = require('./property-sets/markdown-property-set')
  const AgreementPropertySet = require('./property-sets/agreement-property-set')
  const TextboxPropertySet = require('../custom-modules/text-field/property-set')
  let res

  switch (type) {
    case undefined:
    case null:
      res = new EmptyPropertySet()
      break
    case -1:
      res = new ArtBoardPropertySet()
      break
    case 0:
      res = new TextboxPropertySet()
      break
    case 1:
      res = new SelectFieldPropertySet()
      break
    case 2:
      res = new TextAreaFieldPropertySet()
      break
    case 3:
      res = new CheckboxFieldPropertySet()
      break
    case 4:
      res = new StateSelectorPropertySet()
      break
    case 5:
      res = new TogglePropertySet()
      break
    case 6:
      res = new ListEditorPropertySet()
      break
    case 7:
      res = new UISequenceTriggerPropertySet()
      break
    case 8:
      res = new PasswordFieldPropertySet()
      break
    case 9:
      res = new UrlInputFieldPropertySet()
      break
    case 10:
      // res = new TextFieldPropertySet()
      // popup
      break
    case 11:
      // res = new TextFieldPropertySet()
      // wizard
      break
    case 12:
      // res = new TextFieldPropertySet()
      // wizard step
      break
    case 13:
      res = new LabelFieldPropertySet()
      // text
      break
    case 14:
      res = new TimeFieldPropertySet()
      // text
      break
    case 15:
      res = new DateFieldPropertySet()
      // text
      break
    case 16:
      res = new HeaderFieldPropertySet()
      // text
      break
    case 17:
      res = new LockGroupPropertySet()
      // text
      break
    case 18:
      res = new CustomComponentPropertySet()
      // text
      break
    case 19:
      res = new AccordionPropertySet()
      // text
      break
    case 20:
      res = new ControlGroupPropertySet()
      // text
      break
    case 21:
      res = new KeyValueFieldPropertySet()
      // text
      break
    case 22:
      res = new TypeaheadFieldPropertySet()
      // text
      break
    case 23:
      res = new SegmentedContentPropertySet()
      // text
      break
    case 24:
      res = new WizardPropertySet()
      // text
      break
    case 25:
      res = new LocaleTextPropertySet()
      // text
      break
    case 26:
      res = new IconPropertySet()
      // text
      break
    case 27:
      res = new ComponentTogglePropertySet()
      break
    case 28:
      res = new ButtonPropertySet()
      break
    case 29:
      res = new LinkPropertySet()
      break
    case 30:
      res = new CheckboxGroupPropertySet()
      break
    case 31:
      res = new DataTablePropertySet()
      break
    case 32:
      res = new AutoTreePropertySet()
      break
    case 33:
      res = new ValidationPropertySet()
      break
    case 34:
      res = new ActionBarPropertySet()
      break
    case 35:
      res = new MarkdownPropertySet()
      break
    case 36:
      res = new AgreementPropertySet()
      break
    case 37:
      res = new RepeaterPropertySet()
      break
    default: {
      const propertySetPath = _.get(components, [type, 'propertySet'])
      if (propertySetPath) {
        const PropertySet = require('../custom-modules/' + propertySetPath)
        res = new PropertySet()
      }
    }
  }
  return res
}

function getManual (type) {
  let res = ''
  if (type === null || Number.isNaN(type)) return
  switch (type) {
    case -1:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 14:
    case 15:
    case 16:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 37:
    case 6:
    case 13:
    case 17:
    case 24:
    case 31:
    case 36:
      break
    default: {
      const manualPath = _.get(components, [type, 'manual'])
      if (manualPath) {
        res = require('../custom-modules/' + manualPath)
      }
    }
  }
  return res
}

function getComponentType (type) {
  if (type == null) return

  let res
  switch (type) {
    case 0:
      res = 'textbox'
      break
    case 1:
      res = 'select'
      break
    case 2:
      res = 'textarea'
      break
    case 3:
      res = 'checkbox'
      break
    case 4:
      res = 'state-selector'
      break
    case 5:
      res = 'toggle'
      break
    case 6:
      res = 'list-editor'
      break
    case 7:
      res = 'form-trigger'
      break
    case 8:
      res = 'password-input'
      break
    case 9:
      res = 'url-input'
      break
    case 10:
      break
    case 11:
      break
    case 12:
      break
    case 13:
      res = 'text'
      break
    case 14:
      res = 'time-input'
      break
    case 15:
      res = 'date-input'
      break
    case 16:
      res = 'header'
      break
    case 17:
      res = 'lock-group'
      break
    case 18:
      res = 'custom-component'
      break
    case 19:
      res = 'accordion'
      break
    case 20:
      res = 'control-group'
      break
    case 21:
      res = 'key-value-pair'
      break
    case 22:
      res = 'typeahead'
      break
    case 23:
      res = 'segmented-form-group'
      break
    case 24:
      res = 'auto-wizard'
      break
    case 25:
      res = 'locale'
      break
    case 26:
      res = 'icon'
      break
    case 27:
      res = 'component-toggle'
      break
    case 28:
      res = 'button'
      break
    case 29:
      res = 'link'
      break
    case 30:
      res = 'checkbox-group'
      break
    case 31:
      res = 'data-table'
      break
    case 32:
      res = 'auto-tree'
      break
    case 33:
      res = 'validation'
      break
    case 34:
      res = 'action-bar'
      break
    case 35:
      res = 'auto-markdown'
      break
    case 36:
      res = 'auto-agreement'
      break
    case 37:
      res = 'repeater'
      break
    default: {
      res = type
    }
  }
  return res
}

function getIcon (type) {
  if (type == null) return

  let res
  switch (type) {
    case 0:
      res = 'uib textbox'
      break
    case 1:
      res = 'uib i-dropdown'
      break
    case 2:
      res = 'uib text'
      break
    case 3:
      res = 'uib i-checkbox'
      break
    case 4:
      res = 'uib i-radio'
      break
    case 5:
      res = 'uib switch'
      break
    case 6:
      res = 'uib i-list'
      break
    case 7:
      res = 'uib popup'
      break
    case 8:
      res = 'uib key'
      break
    case 9:
      res = 'uib link'
      break
    case 10:
    case 11:
    case 12:
      break
    case 13:
      res = 'uib text'
      break
    case 14:
      res = 'uib time'
      break
    case 15:
      res = 'uib date'
      break
    case 16:
      res = 'uib i-header'
      break
    case 17:
      res = 'uib i-lock'
      break
    case 18:
      res = 'uib wizard-step'
      break
    case 21:
      res = 'uib textbox'
      break
    case 22:
      res = 'uib textbox'
      break
    case 23:
      res = 'uib i-header'
      break
    case 24:
      res = 'uib popup'
      break
    case 25:
      res = 'uib text'
      break
    case 26:
      res = 'uib images'
      break
    case 27:
      res = 'uib switch'
      break
    case 28:
      res = 'uib vendor square full'
      break
    case 29:
      res = 'uib link'
      break
    case 30:
      res = 'uib i-checkbox'
      break
    case 31:
      res = 'uib i-list'
      break
    case 32:
      res = 'uib i-list'
      break
    case 33:
      res = 'uib i-checkbox'
      break
    case 34:
      res = 'uib vendor ellipsis horizontal'
      break
    case 35:
      res = 'uib custom-component'
      break
    case 36:
      res = 'uib vendor handshake'
      break
    case 37:
      res = 'retweet'
      break
    default: {
      res = _.get(components, [type, 'toolbox', 'icon'])
    }
  }
  return res
}

function getComponent (type) {
  const componentPath = _.get(components, [type, 'component'])
  return componentPath && require('../custom-modules/' + componentPath)
}

function getCaption (type) {
  return _.get(components, [type, 'toolbox', 'title'])
}

/**
 * Object contaning all the information to successfully render control on the artboard and it's properties on the right
 * pane
 * @param {number} type Type of control to create, e.g. Textbox, Dropdown etc
 * @param {number} id Id to assign to component
 * @param {object} state Object representing the serialized state of control. Control's value and other meta info is
 *     retrieved from this object
 * @returns object
 */
function ControlSetup (type, id, state) {
  state = state || {}
  const json = {}
  const propSet = getPropertySet(type)

  function render () {
    return getControlMarkup(type)
  }

  function setFieldState (propName, propState) {
    state[propName] = propState
  }

  function setFieldJSON (propName, fieldJSON) {
    json[propName] = fieldJSON
  }

  function getProperties () {
    let res = []
    if (propSet) {
      res = propSet.getMembers()
    }
    return res
  }

  function validate () {
    let res = true
    propSet.getMembers().forEach((prop) => {
      if (!prop.required) return res
      if (state[prop.fieldName]) {
        if (prop.validate) {
          const valResult = prop.validate(state[prop.fieldName])
          if (ctrlValidationHandler) ctrlValidationHandler(valResult)
          if (!valResult) res = false
        }
      }
    })
    api.validated = true
    return res
  }

  function highlightValidationState () {
    // propSet.getMembers().forEach(function(prop) {
    //   if(!prop.required) return res
    // })
    // api.validated = true
    // return res
  }

  // function resolveContainerSupport (type) {
  //   return type == 6
  // }

  function resolveTagName () {
    let res = ''
    switch (type) {
      case 6:
        res = 'list-editor-setup'
        break
      case 20:
        res = 'control-group-setup'
        break
      case 23:
        res = 'segmented-form-group-setup'
        break
      case 24:
        res = 'wizard-setup'
        break
      case 26:
        res = 'icon'
        break
      case 31:
        res = 'list-editor-setup'
        break
      case 37:
        res = 'repeater'
        break
      default:
        if (components[type]) {
          res = components[type].tag
        }
    }
    return res
  }

  let ctrlValidationHandler

  function onSetValidationState (cb) {
    ctrlValidationHandler = cb
  }

  let onActivateCallback
  let onDeactivateCallback
  const csId = id || shortid.generate()

  var api = {
    id: csId,
    icon: getIcon(type),
    getState () {
      return state
    },
    // isContainer: resolveContainerSupport(type),
    tag: resolveTagName(),
    type,
    setFieldState,
    setFieldJSON,
    render,
    getProperties,
    getPropertySet () {
      return propSet
    },
    manual: getManual(type),
    clone () {
      return new ControlSetup(type, shortid.generate(), _.clone(state))
    },
    serialize () {
      const id = state.id && state.id.input
      const res = { type, id: id || csId, state }
      if (this.index != null) {
        res.index = this.index
      }
      return res
    },
    buildJSON () {
      runtime.variable.set('currentFieldInfo', {
        id: csId,
        valueType: state.value ? state.value.valueType : 'string'
      })
      let json = buildJSONinner(type, getProperties(), state)
      if (propSet.jsonPatch) {
        json = propSet.jsonPatch(json)
      }
      return json
    },
    activate () {
      if (onActivateCallback) {
        onActivateCallback()
      }
    },
    deactivate () {
      if (onDeactivateCallback) {
        onDeactivateCallback()
      }
    },
    onActivate (cb) {
      onActivateCallback = cb
    },
    onDeactivate (cb) {
      onDeactivateCallback = cb
    },
    isEmpty () {
      return type === undefined
    },
    getControlType () {
      return getComponentType(type)
    },
    validate,
    highlightValidationState,
    onSetValidationState,
    component: getComponent(type),
    caption: getCaption(type)
  }

  if (type === -1) {
    api.title = {
      text: 'Form properties',
      icon: 'vendor settings'
    }
  }

  if (type === -1) {
    api.controlSetupList = []
  }

  return api
}

function dropEmptyProperties (res) {
  const propsToExclude = ['highlightChanges']
  const propsToDelete = []
  Object.keys(res).forEach((key) => {
    if (propsToExclude.indexOf(key) !== -1) return
    if (res[key] === '') {
      propsToDelete.push(key)
    }
  })
  propsToDelete.forEach((prop) => {
    delete res[prop]
  })
  return res
}

function buildJSONinner (type, propertyGroups, state) {
  const result = {
    type: getComponentType(type)
  }
  function processPropertyInfo (member) {
    if (!member.buildJSON || member.excludeFromJSON) return
    const memberJSON = member.buildJSON(state[member.fieldName])
    _.extend(result, memberJSON)
  }
  propertyGroups.forEach((propInfo) => {
    if (propInfo.items) {
      propInfo.items.forEach((member) => {
        processPropertyInfo(member)
      })
    } else {
      processPropertyInfo(propInfo)
    }
  })
  dropEmptyProperties(result)
  return result
}

module.exports = ControlSetup
