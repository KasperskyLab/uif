/* eslint-disable no-undef */
const self = this
self.rows = []
self.on('mount', function () {
  let rows = []
  if (opts.input) {
    rows.push({ text: opts.input })
  } else if (opts.rows) {
    rows = opts.rows
  }
  self.rows = rows
  self.update()
})

self.addNewRow = function () {
  self.rows.push({
    text: ''
  })
  self.update()
}

self.saveRowName = function (evt) {
  evt.item.row.text = evt.target.value.trim()
  self.trigger('value-changed')
}

self.getValue = function () {
  return self.rows
}

self.serializeState = function () {
  return {
    rows: self.rows.reduce((acc, item) => {
      if (item && item.text && item.text.length) {
        acc.push(item)
      }
      return acc
    }, [])
  }
}

self.onValueChange = function () {
  self.trigger('value-changed')
}

self.removeRow = function (evt) {
  self.rows.splice(evt.item.i, 1)
  self.update()
  self.trigger('value-changed')
}
