/* eslint-disable */
const { COMPONENTS, JSON_DATA } = require('./constants')

const getCollections = (fileName) => {
  if (!(fileName in JSON_DATA)) throw new Error('unregistered json file name')
  const { collections } = JSON_DATA[`${fileName}`]
  return collections
}

const getModes = ({ modes }) => {
  return modes.map(({ name, variables }) => {
    return { name: name, variables: variables }
  })
}

const getStaticColors = ({ variables }) => {
  return variables.reduce((result, { name, value }) => {
    const colorName = name
      .split('/')
      .pop()
    return { [colorName]: value, ...result }
  }, {})
}

const getStaticTokens = () => {
  const [baseCollection] = getCollections('static-tokens')
  const [mode] = getModes(baseCollection)
  return getStaticColors(mode)
}

const staticPalette = getStaticTokens()

const getCSSVarName = (colorName) => `--color--${colorName}`

const resolveColorValue = (value, isAlias, resolveToCSSVar) => {
  if (isAlias && typeof value === 'object') {
    const staticColor = value.name.split('/').pop()
    return resolveToCSSVar ? `var(${getCSSVarName(staticColor)})` : staticPalette[staticColor]
  }
  if (!isAlias && typeof value === 'string') return value
  throw new Error('unknown color value', value)
}

const getSections = ({ variables, resolveToCSSVar = false }) => {
  const buildNestedSection = (sections, sectionNameArray, value, isAlias) => {
    const [currentSection, ...remainingSections] = sectionNameArray

    if (remainingSections.length === 0) {
      return {
        ...sections,
        [currentSection.toLowerCase()]: resolveColorValue(value, isAlias, resolveToCSSVar)
      }
    }

    return {
      ...sections,
      [currentSection.toLowerCase()]: buildNestedSection(
        sections[currentSection?.toLowerCase()] || {},
        remainingSections,
        value,
        isAlias
      )
    }
  }

  return variables.reduce((sections, { name, value, type, isAlias }) => {
    if (type !== 'color') return {}

    const sectionNameArray = name.replace(' ', '_').split('/')
    return buildNestedSection(sections, sectionNameArray, value, isAlias)
  }, {})
}

const getCollectionByName = (fileName, collectionName) => {
  return getCollections(fileName)
    .filter(({ name }) => name === collectionName).pop()
}

const deepReduce = (obj, themeName) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      return {
        ...acc,
        [key.toLowerCase()]: deepReduce(value, themeName)
      }
    } else {
      return {
        ...acc,
        [key.toLowerCase()]: { [themeName.toLowerCase()]: value }
      }
    }
  }, {})
}

const isObject = (item) => {
  return (item && typeof item === 'object' && !Array.isArray(item))
}

const deepMerge = (target, ...sources) => {
  if (!sources.length) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      const sourceValue = source[`${key}`]
      if (isObject(sourceValue)) {
        if (!target[`${key}`]) Object.assign(target, { [key]: {} })
        deepMerge(target[`${key}`], sourceValue)
      } else {
        Object.assign(target, { [key]: sourceValue })
      }
    }
  }

  return deepMerge(target, ...sources)
}

const getTokens = (collection) => {
  const themeSections = getModes(collection)
  return themeSections.reduce((section, { name: themeName, variables }) => {
    const sections = getSections({ variables })

    deepMerge(section, deepReduce(sections, themeName))

    return { ...section }
  }, {})
}

const getProductTokens = () => {
  return getTokens(getCollectionByName('product-tokens', 'Product colors'))
}

const getComponentTokens = () => {
  return getTokens(getCollectionByName('component-tokens', 'Component tokens'))
}

const sortThemes = (a, b) => {
  const [nameA] = a
  const [nameB] = b
  if (nameA > nameB) return -1
  if (nameA < nameB) return 1
  return 0
}

const getStaticCSSVarsString = () => {
  const palette = getStaticTokens()
  return `:root {
${Object.entries(palette).reduce((string, [colorName, value]) => {
    return `${string}  ${getCSSVarName(colorName)}: ${value};\n`
  }, '')}}`
}

const getGroupedThemes = ({ fileName, collectionName, resolveToCSSVar = false }) => {
  const collection = getCollectionByName(fileName, collectionName)
  const themeSections = getModes(collection)
  return themeSections.reduce((theme, { name: themeName, variables }) => {
    const sections = getSections({ variables, resolveToCSSVar })
    return {
      [themeName.toLowerCase()]: sections,
      ...theme
    }
  }, {})
}

const getCSSVarsString = ({ groupedThemes, shouldReturnObject }) => {
  const generateCSSVariables = (section, path = '') =>
    typeof section === 'object'
      ? Object.entries(section).reduce((acc, [key, value]) => {
        if (typeof value === 'object' && value !== null) {
          return acc + generateCSSVariables(value, `${path}--${key.toLowerCase()}`)
        } else {
          return acc + `  ${path}--${key.toLowerCase()}: ${value};\n`
        }
      }, '')
      : `  ${path}: ${section};\n`

  return shouldReturnObject
    ? Object.entries(groupedThemes).sort(sortThemes).reduce((cssStringObject, [themeName, section]) => {
      const cssThemedStringObject = Object.entries(section).reduce((acc, [key, value]) => {
        const cssVariablesString = generateCSSVariables(value, `--${key}`)
        const prefix = themeName === 'dark' ? '\n.theme-dark,\n.hexa-ui-dark-theme {\n' : '\n:root,\n.theme-light,\n.hexa-ui-light-theme {\n'
        const suffix = '}\n'
        deepMerge(acc, { [key]: { [themeName]: `${prefix}${cssVariablesString}${suffix}` } })

        return { ...acc }
      }, {})

      deepMerge(cssStringObject, cssThemedStringObject)

      return cssStringObject
    }, {})
    : Object.entries(groupedThemes).sort(sortThemes).reduce((cssString, [themeName, section]) => {
      const cssVariablesString = generateCSSVariables(section)
      const prefix = themeName === 'dark' ? '\n.theme-dark,\n.hexa-ui-dark-theme {\n' : '\n:root,\n.theme-light,\n.hexa-ui-light-theme {\n'
      const suffix = '}\n'
      return `${cssString}${prefix}${cssVariablesString}${suffix}`
    }, '')
}

const mergeObjectByPrefixes = (prefixes, obj) => {
  const result = {}
  prefixes.forEach(prefix => {
    if (!result[prefix]) {
      result[prefix] = { light: '', dark: '' }
    }
    Object.keys(obj).forEach(key => {
      if (key.startsWith(prefix)) {
        result[prefix].light += obj[key].light
        result[prefix].dark += obj[key].dark
      }
    })
  })
  return result
}

const getProductCSSVarsString = (shouldReturnObject = false) =>
  getCSSVarsString({
    groupedThemes: getGroupedThemes({ fileName: 'product-tokens', collectionName: 'Product colors', resolveToCSSVar: true }),
    shouldReturnObject
  })

const getComponentCSSVarsString = (shouldReturnObject = false) => {
  const result = getCSSVarsString({
    groupedThemes: getGroupedThemes({ fileName: 'component-tokens', collectionName: 'Component tokens', resolveToCSSVar: true }),
    shouldReturnObject
  })

  return shouldReturnObject ? mergeObjectByPrefixes(COMPONENTS, result) : result
}

const getProductTokensShortcuts = () =>
  getGroupedThemes({ fileName: 'product-tokens', collectionName: 'Product colors' })

const getComponentTokensShortcuts = () =>
  getGroupedThemes({ fileName: 'component-tokens', collectionName: 'Component tokens' })

const resolveEffectValue = (value) => (
  value.effects.reduce((effects, { offset, radius, spread }, index) => {
    return { ...effects, [index + 1]: `${offset.x}px ${offset.y}px ${radius}px ${spread}px` }
  }, {})
)

const getEffectsTokens = () => {
  const effectsCollection = getCollectionByName('component-tokens', 'Effects')
  const [mode] = getModes(effectsCollection)

  const buildNestedSection = (sections, sectionNameArray, value) => {
    const [currentSection, ...remainingSections] = sectionNameArray

    if (remainingSections.length === 0) {
      return {
        ...sections,
        [currentSection.toLowerCase()]: resolveEffectValue(value)
      }
    }

    return {
      ...sections,
      [currentSection.toLowerCase()]: buildNestedSection(
        sections[currentSection?.toLowerCase()] || {},
        remainingSections,
        value
      )
    }
  }

  return mode.variables.reduce((sections, { name, value, type }) => {
    if (type !== 'effect') return {}

    const sectionNameArray = name.replace(' ', '_').split('/')
    return buildNestedSection(sections, sectionNameArray, value)
  }, {})
}

const showLog = () => {
  console.log('\x1b[35m', 'Registered JSONs:\n')
  Object.entries(JSON_DATA).forEach(([fileName, fileData], index) => {
    const { version, collections } = fileData
    console.log('\x1b[34m', ` ${index + 1}. ${fileName}`)
    console.log(`     version: ${version}`)
    console.log('\x1b[35m', '     collections:')
    console.log(collections.map(({ name }, index) => `       ${index + 1} ${name}`).join(',\n'))
  })
  console.log('\n')
}

module.exports = {
  showLog,
  getStaticTokens,
  getProductTokens,
  getComponentTokens,
  getEffectsTokens,
  getProductTokensShortcuts,
  getComponentTokensShortcuts,
  getStaticCSSVarsString,
  getProductCSSVarsString,
  getComponentCSSVarsString
}
