const self = this
self.mode = 0
self.activePill = 0
self.isToolboxVisible = false

let activeMode = 0
self.items = [
  { title: 'Forms', mode: 0, hidden: true, icon: 'form' },
  { title: 'Design', mode: 1, hidden: true, icon: 'i-group2' }
]

self.getState = function () {
  return self.state
}

self.getMode = function () {
  return self.mode
}

function tryActivatePill (mode) {
  if (mode === 3) {
    runtime.trigger('control-setups:validate', function (valid) {
      if (valid) {
        runtime.trigger('publishJSON')
        activatePill(mode)
      }
    })
  } else activatePill(mode)
}

function activatePill (mode) {
  self.items[activeMode].active = false
  self.items[mode].active = true
  activeMode = mode
  self.mode = mode
  runtime.trigger('toggle-right-side', mode === 1)
  self.update()
}

function onContextReady () {
  self.mode = 0
  self.items[0].hidden = false
  self.items[1].hidden = false
  updatePills()
  self.update()
  runtime.trigger('right-side:mode:swith:file')
}

function onFormOpened () {
  self.update()
  runtime.trigger('right-side:mode:swith:design')
}

runtime.on('form:opened', onFormOpened)
runtime.on('context-ready', onContextReady)
runtime.on('pills-click#artboardModes', tryActivatePill)

self.isRightSideVisible = true
self.toggleRightSide = function () {
  self.isRightSideVisible = !self.isRightSideVisible
  runtime.trigger('toggle-right-side', self.isRightSideVisible)
  self.update()
}

function updatePills () {
  self.refs.artboardModes.root._tag.update()
}

self.on('mount', function () {
  function switchToNextPill () {
    let next = activeMode + 1
    if (next > 4) next = 0
    activatePill(next)
  }

  function switchToPrevPill () {
    let next = activeMode - 1
    if (next < 0) next = 4
    activatePill(next)
  }

  key('ctrl+1', self.toggleToolbox)
  key('ctrl+2', self.toggleRightSide)
  key('shift+right', switchToNextPill)
  key('shift+left', switchToPrevPill)
})
