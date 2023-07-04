const self = this

const okBtn = {
  type: 'ok',
  text: 'OK',
  selected: false,
  caption: 'btn.OK'
}
const cancelBtn = {
  type: 'cancel',
  text: 'Cancel',
  selected: false,
  caption: 'btn.Cancel'
}
const nextBtn = {
  type: 'next',
  text: 'Next',
  selected: false,
  caption: 'btn.Next'
}
const prevBtn = {
  type: 'prev',
  text: 'Back',
  selected: false,
  caption: 'btn.Back'
}

const buttons = {
  ok: okBtn,
  cancel: cancelBtn,
  next: nextBtn,
  prev: prevBtn
}

self.serializeState = serializeState
self.on('mount', onMount)
runtime.on('window:mode:set', onWindowModeChange)

function onWindowModeChange (mode) {
  self.buttons = []
  self.update()
  switch (mode) {
    case 'popup':
      self.buttons = [okBtn, cancelBtn]
      break
    case 'wizard':
      self.buttons = [okBtn, cancelBtn, prevBtn, nextBtn]
      break
    case 'flyout-panel':
      self.buttons = [okBtn, cancelBtn]
      break
    default:
      self.buttons = []
      break
  }
  self.update()
}

function serializeState () {
  const res = []
  let tags = self.tags['button-setup']
  if (!tags) return
  if (!Array.isArray(tags)) {
    tags = [tags]
  }
  tags.forEach(function (tag) {
    res.push(tag.serializeState())
  })
  return {
    buttons: res
  }
}

function onMount () {
  if (!opts.buttons) {
    self.buttonsState = [{}, {}, {}, {}, {}]
  } else {
    self.buttonsState = opts.buttons
    self.buttons = opts.buttons.map(function (val) {
      return _.assign({}, buttons[val.type], val)
    })
  }
  self.update()
}
