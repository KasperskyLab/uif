// var builder = require('./builder')

// function LinkButtonField(config) {
//     config = config || {}

//     return {
//         type: 'KeyValueListField',
//         fieldName: config.fieldName,
//         title: config.label,
//         excludeFromJSON: config.excludeFromJSON,
//         localized: config.localized,
//         render: function (opts) {
//             return builder.build('key-value-list', _.extend({}, config, opts))
//         },
//         buildJSON: function (memberState) {
//             var result = {}
//             result[config.fieldName] = memberState ? memberState.items : ''
//             return result
//         }
//     }
// }

// module.exports = KeyValueListField
