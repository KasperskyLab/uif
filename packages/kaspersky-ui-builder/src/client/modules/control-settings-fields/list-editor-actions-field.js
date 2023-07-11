const builder = require('./builder')

function ListEditorActionsField (config) {
  config = config || {}
  return {
    type: 'ListEditorActionsField',
    fieldName: config.fieldName,
    title: config.label,
    localized: config.localized,
    excludeFromJSON: config.excludeFromJSON,
    render: function (opts) {
      return builder.build('list-editor-actions', _.extend({}, config, opts))
    },
    buildJSON: function (memberState) {
      const result = {}
      result[config.fieldName] = []
      if (!memberState) return result

      const actions = _.map(_.filter(memberState.actions, { selected: true }), 'type')
      result[config.fieldName] = actions
      return result
    }
  }
}

module.exports = ListEditorActionsField
