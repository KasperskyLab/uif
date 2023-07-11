const self = this
self.actionBarIsVisible = false
self.items = [
  {
    title: 'Properties',
    mode: 0,
    hidden: true,
    eventTitle: 'props',
    icon: 'settings2'
  },
  {
    title: 'Data',
    mode: 1,
    active: true,
    eventTitle: 'data',
    icon: 'data'
  },
  {
    title: 'Functions',
    mode: 2,
    eventTitle: 'functions',
    icon: 'code6'
  },
  {
    title: 'Help',
    mode: 3,
    eventTitle: 'manuals',
    icon: 'vendor help circle'
  }
]
self.formActive = false

let activeMode = 1
self.mode = 1

function activatePill (mode) {
  self.items[activeMode].active = false
  self.items[mode].active = true
  if (activeMode === 1) {
    runtime.trigger('pills-click#right-side:dataJSON-set', mode)
  }
  if (activeMode === 2) {
    runtime.trigger('javascript:functions:apply')
  }
  activeMode = mode
  self.mode = mode
  //    if ( mode == 1 ) {

  //    }
  self.update()
}

runtime.on('pills-click#setupModes', activatePill)

function switchToNextPill () {
  let next = activeMode + 1
  if (next > 2) next = 0
  activatePill(next)
}

function switchToPrevPill () {
  let next = activeMode - 1
  if (next < 0) next = 2
  activatePill(next)
}

function onFormOpened () {
  self.formActive = true
  self.items[0].hidden = false
  const oldItems = self.items
  self.items = []
  self.update()
  self.items = oldItems
  activatePill(0)
  self.update()
}

function toggleButtons (controlSetup) {
  self.actionBarIsVisible = true
  self.deleteButtonIsVisible = controlSetup.type === -1
  self.update()
}

self.deleteForm = function () {
  runtime.trigger('right-side:buttons:delete:click')
}

self.saveForm = function (event) {
  _.set(event, 'target.disabled', true)
  runtime.trigger('right-side:buttons:save:click')
  setTimeout(() => {
    _.set(event, 'target.disabled', false)
  }, 1000)
}

self.visible = true

runtime.on('toggle-right-side', function (visible) {
  self.visible = visible
  self.update()
})

runtime.on('form:opened', onFormOpened)

runtime.on('render-settings', toggleButtons)

key('shift+ctrl+right', switchToNextPill)
key('shift+ctrl+left', switchToPrevPill)
