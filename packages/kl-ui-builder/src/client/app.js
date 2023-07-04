const services = require('./services')

const socket = services.socket()

let context = {}
let contextReady = false

require('./templates/artboard-control-templates/')
require('./modules')

// region subscriptions
runtime.on('forms:get', publishForms)
runtime.on('forms:get:by-id', getFormById)
runtime.on('delete-form', deleteForm)
runtime.on('app:state:ready-to-mount', () => {
  riot.mount('app')
  runtime.trigger('context-ready')
  runtime.trigger('pills-click#artboardModes', 0)
  runtime.trigger('form-setup:activate')
})
// endregion

function initFormRouting () {
  window.onhashchange = navigateToFormByHash
  runtime.on('form:load', model => { window.location.hash = '/' + model.id })
}

runtime.on('pills-click#artboardModes', mode => {
  if (mode === 0) window.location.hash = ''
})

document.querySelector('body').addEventListener('click', event => {
  const href = event.target && event.target.getAttribute('href')
  if (href === '#') event.preventDefault()
})

function navigateToFormByHash () {
  const id = window.location.hash.slice(2)

  if (!id) return

  const model = context.forms[id]

  if (model) {
    runtime.trigger('form:load', model)
  } else {
    alert(`Form with id ${id} not found`)
  }
}

function publishForms (cb) {
  cb(context.forms)
}

function getFormById (id, cb) {
  cb(context.forms[id])
}

function deleteForm (form) {
  delete context.forms[form.id]
  const parentID = form.parentFormId
  let parentForm

  runtime.trigger('form-explorer:tree:refresh')
  runtime.get('socket').then((socket) => {
    socket.emit('delete-form', form.name)
  })
  if (parentID) {
    parentForm = context.forms[parentID]
    parentForm.children = _.remove(parentForm.children, form.id)
    socket.emit('write-form', parentForm.name, parentForm)
    runtime.trigger('form:load', parentForm)
  } else {
    runtime.trigger('form:unload')
  }
}

shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@')

contextReady = true
context = { forms: [] }
initFormRouting()
runtime.triggerDelayed('app:state:ready-to-mount')
if (window.location.hash) navigateToFormByHash()

runtime.get('socket').then((socket) => {
  socket.on('set-forms', (forms) => {
    context.forms = forms
    if (contextReady) {
      runtime.trigger('form-explorer:tree:refresh')
    }
  })
  socket.emit('get-forms')
})
