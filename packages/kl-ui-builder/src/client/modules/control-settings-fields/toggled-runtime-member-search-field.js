const builder = require('./builder')

function ToggledRuntimeMemberSearchField (config) {
  config = config || {}

  return {
    id: config.fieldName,
    type: 'ToggledRuntimeMemberSearchField',
    noCaption: true,
    fieldName: config.fieldName,
    title: config.label,
    localized: config.localized,
    excludeFromJSON: config.excludeFromJSON,
    render: function (opts) {
      return builder.build('toggled-runtime-member-search', _.extend({}, config, opts))
    },
    buildJSON: function (memberState) {
      const result = {}
      result[config.fieldName] = memberState ? memberState.memberName : ''
      return result
    },
    validate: function (state) {
      return state.slct !== ''
    }
  }
}

module.exports = ToggledRuntimeMemberSearchField
