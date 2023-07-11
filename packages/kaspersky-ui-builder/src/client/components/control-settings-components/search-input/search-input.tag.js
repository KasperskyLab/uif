const self = this

let nextHighlight = 0
let inputedValue
self.searchData = null
self.active = false
self.value = self.opts.term
let searchFn = () => null

function eraseSearchResults () {
  self.searchData = null
  self.active = false
  self.update()
}

self.searchItemClick = function (e) {
  if (!self.searchData) return
  inputedValue = self.refs.input.value
  self.value = e.target.innerHTML
  self.trigger('value-changed')
  if (self.opts.onchange_handler) { self.opts.onchange_handler() }
  self.refs.input.value = e.target.innerHTML
  self.searchData = null
  self.active = false
  self.update()
}

self.onValueChange = function (e) {
  const query = e.target.value
  const strKeyCode = String(e.keyCode)
  self.value = query
  const arrowKeyCodes = ['37', '38', '39', '40']
  if (arrowKeyCodes.indexOf(strKeyCode) !== -1) return highLightByArrows(e)
  if (strKeyCode === '13') return selectOnEnter(e)
  inputedValue = query

  if (self.opts.search_function) {
    searchFn = self.opts.search_function
  }
  const searchResults = searchFn(query)

  if (self.opts.onchange_handler) { self.opts.onchange_handler() }

  if (!searchResults) return eraseSearchResults()

  self.searchData = searchResults.map(function (result) {
    return {
      title: result,
      highlight: false
    }
  })

  self.active = true

  self.update()
}

function selectOnEnter (e) {
  if (!self.searchData) return
  const selected = _.find(self.searchData, function (i) {
    return i.highlight
  })
  eraseSearchResults()
  if (!selected) return
  self.value = selected.title
  self.refs.input.value = selected.title
  self.trigger('value-changed')
  self.parent.trigger('value-changed')
  if (self.opts.onchange_handler) { self.opts.onchange_handler() }
}

function highLightByArrows (event) {
  let reset = false
  if (!self.searchData) return

  const highLightIndex = self.searchData.findIndex(function (item) {
    return item.highlight
  })

  if (event.keyCode === '40') nextHighlight = highLightIndex + 1
  if (event.keyCode === '38') nextHighlight = highLightIndex - 1
  if (event.keyCode === '39' && highLightIndex !== -1) {
    event.target.value = self.searchData[highLightIndex].title
    return
  }
  if (event.keyCode === '37') {
    if (highLightIndex === -1) return
    event.target.value = inputedValue
    reset = true
  }

  if (nextHighlight === self.searchData.length) nextHighlight = 0
  if (nextHighlight < 0) nextHighlight = self.searchData.length - 1
  if (highLightIndex !== -1) self.searchData[highLightIndex].highlight = false
  if (!reset) self.searchData[nextHighlight].highlight = true
  self.update()
}
