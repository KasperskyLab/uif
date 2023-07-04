const { extractArgValue, isFormExcludet, message } = require('./helpers')
const COMPONENT_LIBRARY = 'v6'
const typesWithSubElements = [
  ...['control-group', 20],
  ...['data-table', 31]
]

const updateProductSectionElement = el => {
  return {
    ...el,
    componentLibrary: COMPONENT_LIBRARY,
    componentLibraryPrevious: el.componentLibrary || 'riot',
    elements: Array.isArray(el.elements) && typesWithSubElements.includes(el.type)
      ? el.elements.map(updateProductSectionElement)
      : el.elements
  }
}

const updateBuilderSectionElement = el => {
  const prevSlct = el.state.componentLibraryPrevious && el.state.componentLibraryPrevious.slct
  const slct = el.state.componentLibrary && el.state.componentLibrary.slct
  const elements = el.state && el.state.elements
  return {
    ...el,
    state: {
      ...el.state,
      componentLibrary: {
        ...el.state.componentLibrary,
        slct: COMPONENT_LIBRARY
      },
      componentLibraryPrevious: {
        slct: prevSlct || slct || 'riot'
      },
      elements: Array.isArray(elements) && typesWithSubElements.includes(el.type)
        ? elements.map(updateBuilderSectionElement)
        : elements
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
      const updatedJSON = {
        ...json,
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
