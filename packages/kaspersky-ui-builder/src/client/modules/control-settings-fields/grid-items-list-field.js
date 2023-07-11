const builder = require('./builder')
const ControlSetup = require('../control-setup')

const mapGridItem = gridItem => {
  const { innerComponents = [] } = gridItem

  return {
    ...gridItem,
    innerComponents: innerComponents.map(
      elem => ControlSetup(elem.type, elem.id, elem.state).buildJSON()
    )
  }
}

function GridItemsListField (config) {
  config = config || {}

  return {
    type: 'GridItemsListField',
    fieldName: config.fieldName,
    title: config.label,
    localized: config.localized,
    render: function (opts) {
      return builder.build('grid-items-list', _.extend({}, config, opts))
    },
    excludeFromJSON: config.excludeFromJSON,
    buildJSON: function ({ items = [] }) {
      return {
        [config.fieldName]: items.map(mapGridItem)
      }
    }
  }
}

module.exports = GridItemsListField
