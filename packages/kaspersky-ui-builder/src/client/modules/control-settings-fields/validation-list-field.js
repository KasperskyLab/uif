const builder = require('./builder')

function mapValidationRule ({
  id,
  method,
  from,
  to,
  allowEmptyValue,
  condition,
  lengthSize,
  functionName,
  equalsTo,
  notEqualsTo
}) {
  const rule = { method }
  switch (method) {
    case 'range':
      rule.params = {
        range: [from, to].join('-')
      }
      break
    case 'rangeEnum':
      rule.params = {
        range: [from, to].join('-'),
        allowEmptyValue: allowEmptyValue
      }
      break
    case 'length':
      rule.params = {
        condition: condition,
        length: Number(lengthSize)
      }
      break
    case 'regexp':
      rule.params = { condition }
      break
    case 'password':
      rule.preventIncorrectInput = true
      break
    case 'integer':
      rule.preventIncorrectInput = true
      break
    case 'function':
      delete rule.method
      rule.source = {
        command: functionName
      }
      break
    case 'equality':
      rule.params = { equalsTo }
      break
    case 'notEqual':
      rule.params = { notEqualsTo }
      break
  }
  return rule
}

function ValidationListField (config) {
  config = config || { fieldName: 'validation' }
  let component
  const id = shortid.generate()
  const rules = []
  return {
    id: id,
    type: 'ValidationListField',
    fieldName: 'validation',
    render: function (opts) {
      component = builder.build('validation-list', _.extend({}, config, opts))
      return component
    },
    addValidation: function (rule) {
      rules.push(rule)
    },
    removeValidation: function (rule) {
      delete rules.splice(rules.indexOf(rule))
    },
    buildJSON: function (memberState) {
      let rules = []
      let type = '0'
      const result = { }
      if (memberState) {
        type = memberState.type
        rules = memberState.rules.map(mapValidationRule)
      } else if (component) {
        component.getValidationSetupList().forEach(function (validationSetup) {
          rules.push(mapValidationRule(validationSetup.serializeState()))
        })
        type = component.type
      }

      result[config.fieldName] = { type, rules }
      if (!rules.length) return null
      return result
    }
  }
}

module.exports = ValidationListField
