const builder = require('./builder')

function SearchField (config) {
  config = config || {}
  let tag
  return {
    title: config.label,
    type: 'SearchField',
    render: function (opts) {
      tag = builder.build('search-input', _.extend({}, config, opts))
      return tag
    }
  }
}

module.exports = SearchField
