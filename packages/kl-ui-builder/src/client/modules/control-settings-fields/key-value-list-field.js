const builder = require('./builder')

function convertTo (type, value) {
  let res = value
  switch (type) {
    case 'number':
      res = parseInt(res, 10)
      break
    case 'string':
      res = '' + res
      break
    case 'boolean':
      res = (/^true$|^1$/i).test(res)
      break
    case 'number[]':
      res = res.map(v => parseInt(res, 10))
      break
    case 'string[]':
      res = res.map(v => '' + res)
      break
    case 'boolean[]':
      res = res.map(v => (/^true$|^1$/i).test(res))
      break
    default:
      break
  }
  return res
}

function KeyValueListField (config) {
  config = config || {}

  return {
    type: 'KeyValueListField',
    fieldName: config.fieldName,
    title: config.label,
    showOutline: true,
    excludeFromJSON: config.excludeFromJSON,
    localized: config.localized,
    render: function (opts) {
      return builder.build('key-value-list', _.extend({}, config, opts))
    },
    buildJSON: function (memberState) {
      const currentFieldInfo = runtime.variable.get('currentFieldInfo')
      const valueType = currentFieldInfo.valueType

      const result = {}
      if (!memberState) return result
      switch (memberState.sourceType) {
        case '0':
          result[config.fieldName] = memberState.items.map(item => {
            item.value = convertTo(valueType, item.value)
            return item
          })
          break
        case '1':
          result[config.fieldName] = {
            name: memberState.source,
            type: 'function'
          }
          break
        case '2':
          result[config.fieldName] = {
            name: memberState.variable,
            type: 'variable'
          }
          break
      }
      return result
    }
  }
}

module.exports = KeyValueListField
