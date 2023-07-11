const builder = require('./builder')

function WizardStepsField (config) {
  config = config || {}
  return {
    type: 'WizardStepsField',
    fieldName: config.fieldName,
    title: config.label,
    localized: config.localized,
    excludeFromJSON: config.excludeFromJSON,
    render: function (opts) {
      return builder.build('wizard-steps', _.extend({}, config, opts))
    },
    buildJSON: function ({ steps }) {
      return {
        steps: steps.map(step => {
          if (!step.customButtons) {
            delete step.customButtonsGetter
          }
          delete step.customButtons
          step.buttons = step.buttons
            .filter(({ active }) => active)
            .map(button => {
              if (!button.active) {
                delete button.handler
              }
              delete button.active
              delete button.useHandler
              return button
            })
          return step
        })
      }
    }
  }
}

module.exports = WizardStepsField
