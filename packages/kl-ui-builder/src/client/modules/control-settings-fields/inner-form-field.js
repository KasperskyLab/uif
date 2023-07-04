const builder = require('./builder')

function InnerFormField (config) {
  config = config || { fieldName: 'style' }
  config.fieldName = 'accordion'
  //    config.fieldName  = config.fieldName || 'childFormId';

  return {
    type: 'InnerFormField',
    title: 'Accordion type',
    showOutline: true,
    fieldName: config.fieldName,
    excludeFromJSON: config.excludeFromJSON,
    render: function (opts) {
      return builder.build('inner-form-setup', _.extend({}, config || {}, opts))
    },
    buildJSON: function (memberState) {
      const result = {}
      result.mode = memberState.mode
      result.childFormId = memberState.childFormId

      //            if ( memberState ) {
      //                _.each(config.rules, ruleName => {
      //                    result[config.fieldName][ruleName] = memberState[ruleName];
      //                });
      //            }

      return result
    }
  }
}

module.exports = InnerFormField
