// ButtonsListField
const builder = require('./builder')
const captionsByType = {
  ok: 'btn.OK',
  cancel: 'btn.Cancel',
  next: 'btn.Next',
  prev: 'btn.Back'
}
function ButtonsListField (config) {
  config = config || {}

  return {
    type: 'ButtonsListField',
    fieldName: config.fieldName,
    title: config.label,
    excludeFromJSON: config.excludeFromJSON,
    localized: config.localized,
    render: function (opts) {
      return builder.build('buttons-list', _.extend({}, config, opts))
    },
    buildJSON: function (memberState) {
      const result = { buttons: [] }
      if (!memberState) return result
      memberState.buttons.forEach(function (button) {
        if (!button.active) return
        const buttonJSON = { caption: captionsByType[button.type], type: button.type }
        if (button.fncName) {
          buttonJSON.handler = button.fncName
        }
        result.buttons.push(buttonJSON)
      })
      return result
    }
  }
}

module.exports = ButtonsListField
