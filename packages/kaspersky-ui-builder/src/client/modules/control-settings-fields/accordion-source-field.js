const builder = require('./builder')

function AccordionSourceField (config) {
  config = config || {}
  config.label = 'Control is managed by the accordion'
  config.fieldName = 'accordion'
  let tag
  return {
    type: 'AccordionSourceField',
    fieldName: config.fieldName,
    required: config.required,
    title: config.label,
    excludeFromJSON: config.excludeFromJSON,
    showOutline: true,
    outlineHeader: 'Accordion',
    localized: config.localized,
    render: function (opts) {
      tag = builder.build('accordion-source-mapper', _.extend({}, config, opts))
      return tag
    },
    buildJSON: function (memberState) {
      const result = {}
      result[config.fieldName] = memberState ? memberState.accordionSource : ''
      return result
    },
    validate: function (state) {
      this.valid = state.input !== ''
      return this.valid
    }
  }
}

module.exports = AccordionSourceField
