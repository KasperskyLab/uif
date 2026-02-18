/* eslint-disable */
const { COMPONENTS, JSON_DATA, JSON_OLD_DATA } = require('./constants')

const getCollections = (fileName, data = JSON_DATA) => {
  if (!(fileName in data)) throw new Error('unregistered json file name ' + fileName)
  const { collections } = data[`${fileName}`]
  return collections
}

const getCollectionByName = (fileName, collectionName, data = JSON_DATA) => {
  return getCollections(fileName, data)
    .filter(({ name }) => name === collectionName).pop()
}

const getModes = ({ modes }) => {
  return modes.map(({ name, variables }) => {
    return { name: name, variables: variables }
  })
}

const getStaticValues = ({ variables }, fullTokenName) => {
  return variables.reduce((result, { name, value }) => {
    const tokenName = fullTokenName
      ?
        name
          .split('/')
          .join('_')
      : name
          .split('/')
          .pop()
    return { [tokenName]: value, ...result }
  }, {})
}

const getStaticTokens = (fileName, collectionName, fullTokenName) => {
  const baseCollection = getCollectionByName(fileName, collectionName)
  const [mode] = getModes(baseCollection)
  return getStaticValues(mode, fullTokenName)
}

const staticPalette = getStaticTokens('static-tokens', 'staticColors')

const getCSSVarName = (colorName) => `--color--${colorName}`

const resolveTokenValue = (value, isAlias, resolveToCSSVar) => {
  if (isAlias && typeof value === 'object') {
    const staticToken = value.name.split('/').pop()
    return resolveToCSSVar ? `var(${getCSSVarName(staticToken)})` : staticPalette[staticToken]
  }
  if (!isAlias && typeof value === 'string') return value
  throw new Error('unknown token value', value)
}

const getSections = ({ variables, resolveToCSSVar = false }) => {
  const buildNestedSection = (sections, sectionNameArray, value, isAlias) => {
    const [currentSection, ...remainingSections] = sectionNameArray

    if (remainingSections.length === 0) {
      return {
        ...sections,
        [currentSection.toLowerCase()]: resolveTokenValue(value, isAlias, resolveToCSSVar)
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
  return getTokens(getCollectionByName('product-tokens', 'product_colors'))
}

const getComponentTokens = () => {
  return getTokens(getCollectionByName('component-tokens', 'Component tokens'))
}

const getWidgetTokens = () => {
  return getTokens(getCollectionByName('widget-tokens', 'widget_tokens'))
}

const sortThemes = (a, b) => {
  const [nameA] = a
  const [nameB] = b
  if (nameA > nameB) return -1
  if (nameA < nameB) return 1
  return 0
}

const getStaticCSSVarsString = () => {
  const palette = getStaticTokens('static-tokens', 'staticColors')
  const spacings = getStaticTokens('product-tokens', 'spacing', true)
  const corner_radius = getStaticTokens('product-tokens', 'corner_radius', true)
  return `:root {
${Object.entries(palette).reduce((string, [tokenName, value]) => {
    return `${string}  ${getCSSVarName(tokenName)}: ${value};\n`
  }, '')}
${Object.entries(spacings).reduce((string, [tokenName, value]) => {
    return `${string}  --spacing--${tokenName}: ${value}px;\n`
  }, '')}
${Object.entries(corner_radius).reduce((string, [tokenName, value]) => {
    return `${string}  --radius--${tokenName}: ${value}px;\n`
  }, '')}
  }`
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
    groupedThemes: getGroupedThemes({ fileName: 'product-tokens', collectionName: 'product_colors', resolveToCSSVar: true }),
    shouldReturnObject
  })

const getComponentCSSVarsString = (shouldReturnObject = false) => {
  const result = getCSSVarsString({
    groupedThemes: getGroupedThemes({ fileName: 'component-tokens', collectionName: 'Component tokens', resolveToCSSVar: true }),
    shouldReturnObject
  })

  return shouldReturnObject ? mergeObjectByPrefixes(COMPONENTS, result) : result
}

const getWidgetCSSVarsString = (shouldReturnObject = false) => {
  const result = getCSSVarsString({
    groupedThemes: getGroupedThemes({ fileName: 'widget-tokens', collectionName: 'widget_tokens', resolveToCSSVar: true }),
    shouldReturnObject
  })

  return shouldReturnObject ? mergeObjectByPrefixes(COMPONENTS, result) : result
}

const getProductTokensShortcuts = () =>
  getGroupedThemes({ fileName: 'product-tokens', collectionName: 'product_colors' })

const getComponentTokensShortcuts = () =>
  getGroupedThemes({ fileName: 'component-tokens', collectionName: 'Component tokens' })

const getWidgetTokensShortcuts = () =>
  getGroupedThemes({ fileName: 'widget-tokens', collectionName: 'widget_tokens' })

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

const checkVariablesChange = (oldVariables, newVariables) => {
  const namesInNewVariables = newVariables.map(obj => obj.name)
  for (const obj of oldVariables) {
    if (!namesInNewVariables.includes(obj.name)) {
      return true
    }
  }
  return false
}

const checkStructureChange = (oldModes, newModes) => {
  if (oldModes.length !== newModes.length) return true

  const zippedModes = oldModes.map((oldMode, i) => [oldMode, newModes[i]])

  for (const [oldMode, newMode] of zippedModes) {
    if (oldMode.name !== newMode.name) {
      return true
    }
    return checkVariablesChange(oldMode.variables, newMode.variables)
  }
}

const checkTokensChange = ({ dataSwapped = false }) => {
  const tokenTypes = [
    { name: 'static-tokens', collectionName: 'staticColors' },
    { name: 'product-tokens', collectionName: 'product_colors' },
    { name: 'product-tokens', collectionName: 'spacing' },
    { name: 'product-tokens', collectionName: 'corner_radius' },
    { name: 'component-tokens', collectionName: 'Component tokens' },
    { name: 'component-tokens', collectionName: 'Effects' },
    { name: 'widget-tokens', collectionName: 'widget_tokens' }
  ]

  return tokenTypes.some(({ name, collectionName }) => {
    const oldTokens = getCollectionByName(name, collectionName, dataSwapped ? JSON_DATA : JSON_OLD_DATA).modes
    const newTokens = getCollectionByName(name, collectionName, dataSwapped ? JSON_OLD_DATA : JSON_DATA).modes
    const rc = checkStructureChange(oldTokens, newTokens)
    console.log(rc ? '\x1b[31;1m' : '\x1b[32;1m', `${name} / ${collectionName} - ${rc ? 'FAIL' : 'OK'}`)
    return rc
  })
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
  checkTokensChange,
  getStaticTokens,
  getProductTokens,
  getComponentTokens,
  getWidgetTokens,
  getEffectsTokens,
  getProductTokensShortcuts,
  getComponentTokensShortcuts,
  getWidgetTokensShortcuts,
  getStaticCSSVarsString,
  getProductCSSVarsString,
  getComponentCSSVarsString,
  getWidgetCSSVarsString
}
