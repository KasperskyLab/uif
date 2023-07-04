const self = this
let forms
let ctrlReceiver
let activeForm
let activeFormSetup
let activeControlSetup

const parentElementToChildrenMap = {}

const LOCK_TYPE = 17
const ACCORDION_TYPE = 19

self.active = false
self.state = {}

self.getForm = function () {
  return activeFormSetup
}

self.onDragOver = function (evt) {
  evt.preventDefault()
  // Set the dropEffect to move
  evt.dataTransfer.dropEffect = 'move'
}

self.onComponentDrop = function (evt) {
  evt.preventDefault()
  // Get the id of the target and add the moved element to the target's DOM
  const data = evt.dataTransfer.getData('text')
  evt.target.appendChild(document.getElementById(data))
}

self.on('mount', function () {
  getForms()
})

function registerControlReceiver (receiver) {
  ctrlReceiver = receiver
}

function unRegisterControlReceiver (receiver) {
  if (ctrlReceiver && receiver.controlSetup.id !== ctrlReceiver.opts.setup.id) ctrlReceiver = null
}

function handleControlAddition (controlSetup) {
  if (activeControlSetup) { activeControlSetup.active = false }
  controlSetup.active = true
  if (ctrlReceiver) { ctrlReceiver.addControl(controlSetup) } else {
    // let currentActiveCtrlIndex = activeFormSetup.controlSetupList.lastIndexOf(activeControlSetup);
    //        if(currentActiveCtrlIndex >= 0){
    //            activeFormSetup.controlSetupList.splice(currentActiveCtrlIndex + 1, 0, controlSetup);
    //        }else{
    activeFormSetup.controlSetupList.push(controlSetup)
    // }
    self.update()
  }
}

function handleControlDeletion () {
  if (_.get(ctrlReceiver, 'opts.setup', null) === activeControlSetup) {
    deleteControl(activeControlSetup)
  } else if (ctrlReceiver) {
    ctrlReceiver.deleteControl(activeControlSetup)
  } else {
    deleteControl(activeControlSetup)
  }
}

function activateControlSetup (controlSetup) {
  activeControlSetup = controlSetup
  runtime.variable.set('active-control', activeControlSetup)
  runtime.trigger('render-settings', activeControlSetup)
}

const formsToSave = []
function createNewChildForm () {
  const prevForm = activeFormSetup
  formsToSave.push(prevForm)
  const newFormSetup = new ControlSetup(-1)
  newFormSetup.parentFormId = activeFormSetup.id
  newFormSetup.parentElementId = activeControlSetup.id // link to concrete JSON node (element)
  prevForm.children = activeFormSetup.children || []
  prevForm.children.push(newFormSetup.id)

  activeFormSetup = newFormSetup
  self.drafts = activeFormSetup.controlSetupList
  activateFormSetup(newFormSetup)
  return newFormSetup
}

function createNewForm () {
  const res = new ControlSetup(-1)

  // self.active = true
  res.title = {
    text: 'Form propertis',
    icon: 'form-settings'
  }

  return res
}

function createNewFormAndActivate () {
  const newFormSetup = createNewForm()
  activateFormSetup(newFormSetup)
  const form = getFormResult(newFormSetup)
  form.js = {
    context: '{}',
    code: ''
  }
  goToForm(form)
}

function onCreateNewForm (isInitialLoad) {
  if (!isInitialLoad) runtime.trigger('control-settings:clear')
  createNewFormAndActivate()
  runtime.trigger('pills:select#artboardModes', 1)
}

function deactivateFormSetup () {
  self.active = false
  self.update()
}

function renderForm (form, isInitialLoad) {
  if (ctrlReceiver && ctrlReceiver.gridItem) {
    return
  }
  const existingElements = _.get(form, 'json.elements', [])
  saveParentElementsToChildrenRelation(existingElements)
  activeFormSetup = new ControlSetup(-1, form.id, form.state)
  activeFormSetup.id = form.id
  activeFormSetup.state = form.state
  activeFormSetup.elements = form.elements
  activeFormSetup.children = form.children
  activeFormSetup.parentElementId = form.parentElementId
  activeFormSetup.parentFormId = form.parentFormId
  runtime.trigger('form:set', form)
  runtime.trigger('code:raw:set', form.js.code)

  if (form.js.context) {
    runtime.trigger('context:raw:set', form.js.context)
  }

  if (activeFormSetup.elements) {
    form.elements.forEach(function (savedState) {
      self.addControl(new ControlSetup(savedState.type, savedState.id, savedState.state), isInitialLoad)
    })
  }
  self.drafts = activeFormSetup.controlSetupList
  self.update()
  activateFormSetup(activeFormSetup)
}

function goToForm (form) {
  runtime.trigger('pills:select#artboardModes', 1)
  activeForm = form
  renderForm(form)
  runtime.trigger('form:opened', activeFormSetup)
  runtime.trigger('javascript:functions:apply')
}

function unloadForm () {
  runtime.trigger('pills:select#artboardModes', 0)
  runtime.trigger('clear-settings')
  self.drafts = []
  activeForm = null
  activeFormSetup = null
  self.update()
}

function getForms () {
  runtime.trigger('forms:get', function (formList) {
    forms = formList
  })
}

function getControlNames (callback) {
  const res = []
  activeFormSetup.controlSetupList.forEach(function (setup) {
    processControlSetup(setup)
    if (['control-group', 'repeater'].includes(setup.getControlType())) _.forEach(setup.getState().elements, processControlSetup)
  })
  function processControlSetup (setup) {
    const state = setup.state || setup.getState()
    const ctrl = {}
    if (state.alias && state.alias.input) { ctrl.displayName = state.alias.input } else if (state.title && state.title.input) { ctrl.displayName = state.title.input } else { ctrl.displayName = state.id.input }

    if (ctrl.displayName) {
      ctrl.id = state.id.input
      res.push(ctrl)
    }
  }
  callback(res)
}

function getControlNamesByType (controlType, callback) {
  const CONTROL_GROUP_TYPE = 20
  const res = []

  activeFormSetup.controlSetupList.forEach(getControl)
  callback(res)

  function getControl (setup) {
    if (setup.type === CONTROL_GROUP_TYPE) _.forEach(setup.getState().elements, getControl)
    if (setup.type !== controlType) return

    const state = setup.state || setup.getState()
    const ctrl = {}

    if (state.alias && state.alias.input) { ctrl.displayName = state.alias.input } else if (state.title && state.title.input) { ctrl.displayName = state.title.input } else { ctrl.displayName = state.id.input }
    ctrl.id = state.id.input
    res.push(ctrl)
  }
}

function getControl (id, callback) {
  let res
  activeFormSetup.controlSetupList.forEach(function (setup) {
    const idField = setup.getState().id
    if (idField && idField.input === id) { res = setup }
  })
  callback(res)
}

function getActiveControl (callback) {
  callback(activeControlSetup)
}

function getActiveForm (cb) {
  return cb(activeForm)
}

function saveParentElementsToChildrenRelation (elements) {
  elements.forEach(element => {
    switch (element.type) {
      case 'list-editor':
      case 'data-table':
        parentElementToChildrenMap[element.id] = element.editor
        break
      case 'form-trigger':
      case 'component-toggle':
        parentElementToChildrenMap[element.id] = element.elements
        break
    }

    if (['control-group', 'repeater'].includes(element.type) && element.elements) {
      saveParentElementsToChildrenRelation(element.elements)
    }
  })
}

function getChildFormId (parentElementId) {
  const activeFormElments = _.get(activeForm, 'json.elements', [])

  function getChildFormIdInner (formElements) {
    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i]
      if (element.id === parentElementId) {
        switch (element.type) {
          case 'list-editor':
          case 'data-table':
            return element.editor
          case 'form-trigger':
          case 'component-toggle':
            return element.elements
        }
      }

      if (['control-group', 'repeater'].includes(element.type) && element.elements) {
        const retEl = getChildFormIdInner(element.elements)
        if (retEl) {
          return retEl
        }
      }
    }
  }

  return getChildFormIdInner(activeFormElments)
}

function setupChildForm () {
  const currentElId = activeControlSetup.id
  const childFormId = getChildFormId(currentElId)
  const childForm = _.find(forms, { id: childFormId })
  if (childForm) {
    goToForm(childForm)
  } else {
    const newForm = createNewChildForm()
    parentElementToChildrenMap[currentElId] = newForm.id
    runtime.trigger('saveForm')
    activeForm = newForm
  }
}

/**
 * Add control to the artboard contol list and render it
 * @param {Object} controlSetup Setup ibkect decribing one single control
 */
self.addControl = function (controlSetup, isInitialLoad) {
  if (ctrlReceiver) { ctrlReceiver.addControl(controlSetup) } else {
    activeFormSetup.controlSetupList.push(controlSetup)
    if (!isInitialLoad) { self.update() }
  }
}

function deleteControl (controlSetup) {
  activeFormSetup.controlSetupList.splice(activeFormSetup.controlSetupList.indexOf(controlSetup), 1)
  self.update()
}

function linkChildForms (form) {
  function linkElements (elem) {
    switch (elem.type) {
      case 'form-trigger':
      case 'component-toggle':
        elem.elements = parentElementToChildrenMap[elem.id]
        break
      case 'data-table':
      case 'list-editor':
        elem.editor = parentElementToChildrenMap[elem.id]
        break
      case 'control-group':
      case 'repeater':
        if (elem.elements && elem.elements.length) {
          elem.elements.forEach(el => {
            linkElements(el)
          })
        }
        break
      default:
        break
    }
  }
  if (!_.isEmpty(form)) {
    form.json.elements.forEach(function (elem) {
      linkElements(elem)
    })
  }
}

function getFormResult (setup) {
  const elements = []
  const childJSON = []
  const form = {}
  // state of controls. Their values
  form.state = setup.getState()
  form.name = 'Form ' + setup.id
  if (form.state && form.state.name && form.state.name.input) {
    form.name = form.state.name.input
  }

  if (_.get(form, 'state.id.input', false)) {
    form.id = form.state.id.input
  }

  if (setup.childElementId) { form.childElementId = setup.childElementId }
  setup.controlSetupList.forEach(function (setup) {
    const fieldJSON = setup.buildJSON()
    fieldJSON.scope = form.id
    fieldJSON.id = fieldJSON.id || setup.id
    if (form.state.isInSilentChangeMode.checkbox) {
      if (['control-group', 'repeater'].includes(fieldJSON.type)) {
        fieldJSON.elements.forEach(element => {
          element.isInSilentChangeMode = true
        })
      } else {
        fieldJSON.isInSilentChangeMode = true
      }
    }
    childJSON.push(fieldJSON)
    elements.push(setup.serialize())
  })
  const formJSON = setup.buildJSON()
  const json = {}

  if (formJSON.type !== 'ui-sequence') {
    json.type = formJSON.type
    json.buttons = formJSON.buttons
  }
  json.rootForm = formJSON.rootForm
  json.ignoreDomainValidation = formJSON.ignoreDomainValidation
  json.domain = formJSON.domain
  json.elements = childJSON

  form.json = json

  linkChildForms(form)

  form.elements = elements
  form.children = setup.children
  form.parentFormId = formJSON.parentFormId
  form.parentElementId = setup.parentElementId
  form.dataSource = formJSON.dataSource
  form.dataSaveAction = formJSON.dataSaveAction
  form.useCache = formJSON.useCache
  form.objectType = formJSON.objectType
  form.objectId = formJSON.objectId
  form.section = formJSON.section
  form.title = formJSON.title
  form.init = formJSON.init
  form.scope = form.id
  form.mode = json.type
  form.navigationTitle = formJSON.navigationChecked && formJSON.navigationTitle
  form.navigationGroup = formJSON.navigationChecked && formJSON.navigationGroup
  form.customButtonsGetter = formJSON.customButtonsGetter
  form.onRendered = formJSON.onRendered
  form.onDispose = formJSON.onDispose
  form.isParentEntity = formJSON.isParentEntity
  form.actionBarAssistantBootstrapper = formJSON.actionBarAssistantBootstrapper
  form.ignoreFormCloseOnDomainSave = formJSON.ignoreFormCloseOnDomainSave
  form.isInSilentChangeMode = formJSON.isInSilentChangeMode
  form.modelTrackerIsOff = formJSON.modelTrackerIsOff
  form.author = formJSON.author
  form.topicId = formJSON.topicId
  form.version = formJSON.version
  form.dataModelName = formJSON.dataModelName
  const { form: formAdditionalFields = [] } = customFields
  if (formAdditionalFields.length) {
    form.customFields = {}
    formAdditionalFields.forEach(({ fieldName }) => {
      form.customFields[fieldName] = formJSON[fieldName]
    })
  }

  form.js = {}
  runtime.trigger('context:raw:get', function (ctx) {
    form.js.context = ctx
    runtime.trigger('code:raw:get', function (code) {
      form.js.code = code
    })
  })
  return form
}

function saveForm () {
  formsToSave.push(activeFormSetup)

  function processLastFormToSave (childElementId) {
    const setup = formsToSave.pop()
    if (!setup) return
    const lastForm = getFormResult(setup)
    forms[lastForm.id] = lastForm

    saveRemoteForm(lastForm)
    if (!formsToSave.length) getChildForms(setup).forEach(saveRemoteForm)

    processLastFormToSave()
  }

  function saveRemoteForm (form) {
    runtime.get('socket')
      .then(function (socket) {
        socket.emit('write-form', form.name, form)
      })
  }

  function getChildForms (setup) {
    const currentFormId = setup.id
    const newFormId = _.get(setup, 'state.id.input')
    const childIds = _.get(activeForm, 'children', [])
    const isNewFormId = currentFormId !== newFormId
    let childForms = []

    if (isNewFormId && childIds.length) {
      childForms = childIds.map(childId => {
        return forms[childId]
      })
      childForms.forEach(childForm => {
        _.set(childForm, 'parentFormId', newFormId)
      })
    }

    return childForms
  }

  processLastFormToSave()
  //    runtime.trigger( 'serializeForms' )

  runtime.trigger('form-explorer:tree:refresh')
}

runtime.on('saveForm', saveForm)

// function linkForms () {
//   if (formsToSave.length) {
//     _.find(formsToSave, { childElementId: activeControlSetup.id })
//   }
// }

self.onArtBoardClick = function (evt) {
  activateFormSetup(activeFormSetup)
}

function validate (cb) {
  let res = true
  self.valid = activeFormSetup.validate()
  activeFormSetup.controlSetupList.forEach(function (setup) {
    if (setup.validate() === false) { res = false }
  })
  self.update()
  cb(res)
}

runtime.on('control-setups:validate', validate)

// on artboard click
function activateFormSetup (formSetup) {
  ctrlReceiver = null

  formSetup = formSetup || activeFormSetup
  if (!formSetup) return
  activeFormSetup = formSetup
  runtime.trigger('component-draft:deactivate')
  runtime.trigger('component-draft:activate', activeFormSetup)

  self.active = true
  self.update()
}

function deleteForm () {
  if (!activeFormSetup) {
    return
  }

  if (confirm('Are use sure you want to delete this form?')) {
    runtime.trigger('delete-form', activeForm)
  }
}

function switchSelection () {
  if (activeControlSetup) { activeControlSetup.deactivate() }
}

function operateMultiselection () {
  runtime.trigger('component-draft:activate', activeFormSetup)
  self.active = true
  self.update()
}

function copyControls () {
  const selectedControls = _.filter(activeFormSetup.controlSetupList, control => control._active)
  runtime.trigger('form-controls:store', selectedControls)
}

function selectAll () {
  _.each(activeFormSetup.controlSetupList, control => {
    control.activate()
  })
  self.drafts = activeFormSetup.controlSetupList
  self.update()
}

function getStoredControls () {
  runtime.trigger('form-controls:get')
}

function pasteControls (controls) {
  if (ctrlReceiver) {
    ctrlReceiver.pasteControls(controls)
    return
  }
  if (Array.isArray(controls)) {
    activeFormSetup.controlSetupList = activeFormSetup.controlSetupList.concat(controls)
  }
  self.drafts = activeFormSetup.controlSetupList
  self.update()
}

const getControlNamesAccordion = _.partial(getControlNamesByType, ACCORDION_TYPE)
const getControlNamesLock = _.partial(getControlNamesByType, LOCK_TYPE)

self.on('mount', function () {
  key('esc', switchSelection)
  key('⌘+backspace, del', function () {
    runtime.trigger('control:delete', handleControlDeletion)
  })
  key('⌘+s', saveForm)
  key('ctrl+s', saveForm)
  key('ctrl+c', copyControls)
  key('ctrl+a', selectAll)
  key('ctrl+v', getStoredControls)
  key('shift+up', () => runtime.trigger('control:moveUp'))
  key('shift+down', () => runtime.trigger('control:moveDown'))

  runtime.on('form:load', goToForm)
  runtime.on('form:unload', unloadForm)
  runtime.on('form:create', onCreateNewForm)
  runtime.on('form:control:add', handleControlAddition)
  runtime.on('form:control:get-names', getControlNames)
  runtime.on('form:lock-control:get-names', getControlNamesLock)
  runtime.on('form:accordion-control:get-names', getControlNamesAccordion)
  runtime.on('form:control:get', getControl)
  runtime.on('form:control:get-active', getActiveControl)
  runtime.on('form:get-active', getActiveForm)
  runtime.on('control-receiver:register', registerControlReceiver)
  runtime.on('control-receiver:unregister', unRegisterControlReceiver)
  runtime.on('component-draft:activate', activateControlSetup)
  runtime.on('control:delete', handleControlDeletion)
  runtime.on('control:moveUp', handleMove.bind(null, moveUp))
  runtime.on('control:moveDown', handleMove.bind(null, moveDown))
  runtime.on('list-editor:editor:setup', setupChildForm)
  runtime.on('ui-sequence-trigger:child:setup', setupChildForm)
  runtime.on('form-setup:deactivate', deactivateFormSetup)
  runtime.on('form-setup:activate', activateFormSetup)
  runtime.on('form-setup:delete', deleteForm)
  runtime.on('component-draft:multiselection', operateMultiselection)
  runtime.on('form-controls:stored-controls', pasteControls)
})

self.on('unmount', function () {
  key.unbind('esc')
  key.unbind('⌘+backspace, del')
  key.unbind('⌘+s')
  key.unbind('ctrl+s')
  key.unbind('shift+up')
  key.unbind('shift+down')
  key.unbind('f4')
  key.unbind('ctrl+c')
  key.unbind('ctrl+a')
  key.unbind('ctrl+v')

  runtime.off('form:load', goToForm)
  runtime.off('form:unload', unloadForm)
  runtime.off('form:create', onCreateNewForm)
  runtime.off('form:control:add', handleControlAddition)
  runtime.off('form:control:get-names', getControlNames)
  runtime.off('form:lock-control:get-names', getControlNamesLock)
  runtime.off('form:accordion-control:get-names', getControlNamesAccordion)
  runtime.off('form:control:get', getControl)
  runtime.off('form:control:get-active', getActiveControl)
  runtime.off('form:get-active', getActiveForm)
  runtime.off('control-receiver:register', registerControlReceiver)
  runtime.off('control-receiver:unregister', unRegisterControlReceiver)
  runtime.off('component-draft:activate', activateControlSetup)
  runtime.off('control:delete', handleControlDeletion)
  runtime.off('control:moveUp', handleMove.bind(null, moveUp))
  runtime.off('control:moveDown', handleMove.bind(null, moveDown))
  runtime.off('list-editor:editor:setup', setupChildForm)
  runtime.off('ui-sequence-trigger:child:setup', setupChildForm)
  runtime.off('form-setup:deactivate', deactivateFormSetup)
  runtime.off('form-setup:activate', activateFormSetup)
  runtime.off('form-setup:delete', deleteForm)
  runtime.off('component-draft:multiselection', operateMultiselection)
  runtime.off('form-controls:stored-controls', pasteControls)
})

function handleMove (moveHandler) {
  if (ctrlReceiver) return
  moveHandler()
}

function moveUp () {
  const activeCSIndex = activeFormSetup.controlSetupList.indexOf(activeControlSetup)
  const trgIndex = activeCSIndex - 1
  if (trgIndex >= 0) {
    const current = activeFormSetup.controlSetupList[activeCSIndex]
    const prev = activeFormSetup.controlSetupList[trgIndex]
    activeFormSetup.controlSetupList[activeCSIndex] = prev
    activeFormSetup.controlSetupList[trgIndex] = current
  }
  self.update()
}

function moveDown () {
  const activeCSIndex = activeFormSetup.controlSetupList.indexOf(activeControlSetup)
  const trgIndex = activeCSIndex + 1
  if (trgIndex < activeFormSetup.controlSetupList.length) {
    const current = activeFormSetup.controlSetupList[activeCSIndex]
    const next = activeFormSetup.controlSetupList[trgIndex]
    activeFormSetup.controlSetupList[activeCSIndex] = next
    activeFormSetup.controlSetupList[trgIndex] = current
  }
  self.update()
}
