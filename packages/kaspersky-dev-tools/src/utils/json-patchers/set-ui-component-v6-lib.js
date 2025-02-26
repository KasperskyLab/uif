const { extractArgValue, isFormExcludet, isFromAlreadyMigrated, migrationList, message } = require('./helpers')
const COMPONENT_LIBRARY = 'v6'
const typesWithSubElements = [
  ...['control-group', 20],
  ...['data-table', 31]
]

const updateProductSectionElement = el => {
  return {
    ...el,
    componentLibraryNext: COMPONENT_LIBRARY,
    elements: Array.isArray(el.elements) && typesWithSubElements.includes(el.type)
      ? el.elements.map(updateProductSectionElement)
      : el.elements,
    gridItems: el.gridItems && Array.isArray(el.gridItems)
      ? el.gridItems.map(gridItem => ({
          ...gridItem,
          innerComponents: Array.isArray(gridItem.innerComponents)
            ? gridItem.innerComponents.map(updateProductSectionElement)
            : gridItem.innerComponents
        }))
      : el.gridItems
  }
}

const updateBuilderSectionElement = el => {
  if (!el || !el.state) {
    return el
  }

  const elements = el.state.elements
  const gridItems = el.state.gridItems

  return {
    ...el,
    state: {
      ...el.state,
      componentLibraryNext: {
        slct: COMPONENT_LIBRARY
      },
      elements: Array.isArray(elements) && typesWithSubElements.includes(el.type)
        ? elements.map(updateBuilderSectionElement)
        : elements,
      gridItems: gridItems && gridItems.items && Array.isArray(gridItems.items)
        ? {
            ...gridItems,
            items: gridItems.items.map(gridItem => ({
              ...gridItem,
              innerComponents: Array.isArray(gridItem.innerComponents)
                ? gridItem.innerComponents.map(updateBuilderSectionElement)
                : gridItem.innerComponents
            }))
          }
        : gridItems
    }
  }
}

const setUiComponentV6lib = ({ fs, path }) => {
  const UI_FORMS_PATH = path.join('./client/ui/')
  const FILE_EXT = '.json'
  const specificFormArray = extractArgValue('--only') || []
  const excludeArray = extractArgValue('--exclude')

  return new Promise((resolve) => {
    const formNames = fs.readdirSync(UI_FORMS_PATH)
      .filter(file => path.extname(file) === FILE_EXT)

    const resolvedFormNames = specificFormArray.length
      ? formNames.filter(file => specificFormArray.includes(file.replace(FILE_EXT, '')))
      : formNames

    // eslint-disable-next-line no-console
    console.log(`${message.startingPatchV6} ${UI_FORMS_PATH}
    `)

    resolvedFormNames.forEach(file => {
      if (isFormExcludet({ file, excludeArray })) {
        // eslint-disable-next-line no-console
        console.log(`${message.skipped} ${file}`)
        return
      }

      // eslint-disable-next-line no-console
      console.log(`${message.reading} ${file}`)
      const json = JSON.parse(fs.readFileSync(`${UI_FORMS_PATH}${file}`))

      if (isFromAlreadyMigrated(json, migrationList.offsets)) {
        // eslint-disable-next-line no-console
        console.log(`${message.alreadyMigrated} ${file}`)
        return
      }
      const currentMigrationInfo = json.state.migrationInfo || []
      const migrationSet = new Set([...currentMigrationInfo, migrationList.v6])
      const updatedJSON = {
        ...json,
        state: {
          ...json.state,
          migrationInfo: [...migrationSet]
        },
        elements: json.elements.map(updateBuilderSectionElement),
        json: {
          ...json.json,
          elements: json.json.elements.map(updateProductSectionElement)
        }
      }

      if (Object.keys(updatedJSON).length) {
        fs.writeFileSync(`${UI_FORMS_PATH}${file}`, JSON.stringify(updatedJSON, null, 2), { encoding: 'utf-8' })
        // eslint-disable-next-line no-console
        console.log(`${message.updated} ${file}`)
      }
    })

    // eslint-disable-next-line no-console
    console.log(message.donePatchV6)
    resolve()
  })
}

module.exports = setUiComponentV6lib
