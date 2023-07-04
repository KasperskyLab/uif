const { extractArgValue, isFormExcludet, message } = require('./helpers')

const predefinedIndentBeforeCssClasses = {
  'indent-checkbox': 101,
  'indent-toggle': 102,
  'indent-label': 103
}

const indentCssClasses = [
  'indent-1',
  'indent-2',
  'indent-3',
  'indent-top-1',
  'indent-top-2',
  'indent-top-3',
  'indent-both-1',
  'indent-both-2',
  'indent-both-3',
  'indent-bottom-1',
  'indent-bottom-2',
  'indent-bottom-3',
  'indent-top-negative-1',
  'indent-top-negative-2',
  'indent-top-negative-3',
  'indent-bottom-negative-1',
  'indent-bottom-negative-2',
  'indent-bottom-negative-3',
  ...Object.keys(predefinedIndentBeforeCssClasses)
]

const typesWithSubElements = [
  ...['control-group', 20],
  ...['data-table', 31]
]

const filterIndentCSSClasses = (classesString) => {
  return typeof classesString === 'string' && classesString
    ? classesString
        .split(' ')
        .filter(className => !indentCssClasses.some(indent => indent === className))
        .join(' ')
    : ''
}

const parseValueFromClassName = ({ customCssClasses, subString }) => {
  return customCssClasses
    ? (parseInt(customCssClasses
        .split(' ')
        .map(cssClass => {
          return Object.keys(predefinedIndentBeforeCssClasses).some(key => key === cssClass)
            ? `indent-${predefinedIndentBeforeCssClasses[cssClass]}`
            : cssClass
        })
        .find(cssClass => cssClass.replace(/-\d+/, '') === subString) || '').replace(/^\D+/g, '')) || 0
    : 0
}

const resolveOffsets = ({
  indent = 0,
  offsetBottom = 0,
  offsetTop = 0,
  offsetAfter = 0,
  customClass: customCssClasses
}) => {
  const valuesFromClassName = customCssClasses
    ? {
        cssClassLeft: parseValueFromClassName({ customCssClasses, subString: 'indent' }),
        cssClassTop: parseValueFromClassName({ customCssClasses, subString: 'indent-top' }),
        cssClassTopNegative: parseValueFromClassName({ customCssClasses, subString: 'indent-top-negative' }),
        cssClassBottom: parseValueFromClassName({ customCssClasses, subString: 'indent-bottom' }),
        cssClassBottomNegative: parseValueFromClassName({ customCssClasses, subString: 'indent-bottom-negative' }),
        cssClassBoth: parseValueFromClassName({ customCssClasses, subString: 'indent-both' })
      }
    : {}

  return {
    indent:
      indent ||
      valuesFromClassName.cssClassLeft ||
      valuesFromClassName.cssClassBoth ||
      0,
    offsetBottom:
      offsetBottom ||
      valuesFromClassName.cssClassBottom ||
      (valuesFromClassName.cssClassBottomNegative ? -valuesFromClassName.cssClassBottomNegative : 0) ||
      0,
    offsetTop:
      offsetTop ||
      valuesFromClassName.cssClassTop ||
      (valuesFromClassName.cssClassTopNegative ? -valuesFromClassName.cssClassTopNegative : 0) ||
      0,
    offsetAfter:
      offsetAfter ||
      valuesFromClassName.cssClassBoth ||
      0,
    customClass: customCssClasses && filterIndentCSSClasses(customCssClasses)
  }
}

const updateProductSectionElement = el => {
  return {
    ...el,
    style: el.style && {
      ...el.style,
      ...resolveOffsets(el.style)
    },
    elements: Array.isArray(el.elements) && typesWithSubElements.includes(el.type)
      ? el.elements.map(updateProductSectionElement)
      : el.elements
  }
}

const updateBuilderSectionElement = el => {
  const elements = el.state && el.state.elements
  return {
    ...el,
    state: {
      ...el.state,
      style: el.state.style && {
        ...el.state.style,
        ...resolveOffsets(el.state.style)
      },
      elements: Array.isArray(elements) && typesWithSubElements.includes(el.type)
        ? elements.map(updateBuilderSectionElement)
        : elements
    }
  }
}

const replaceCssClassesWithOffsets = async ({ fs, path }) => {
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
    console.log(`${message.startingPatchOffsets} ${UI_FORMS_PATH}
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
    console.log(message.donePatchOffsets)
    resolve()
  })
}

module.exports = replaceCssClassesWithOffsets
