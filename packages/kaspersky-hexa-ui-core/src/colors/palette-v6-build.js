const fs = require('fs')
const path = require('path')

const renamedTokensMap = JSON.parse(fs.readFileSync(path.resolve(__dirname, './v6-tokens/figma-renamed-tokens.json')))

const jsonData = {
  'figma-base-tokens': JSON.parse(fs.readFileSync(path.resolve(__dirname, './v6-tokens/figma-base-tokens.json'))),
  'figma-semantic-tokens': JSON.parse(fs.readFileSync(path.resolve(__dirname, './v6-tokens/figma-semantic-tokens.json'))),
  'figma-fixedneutral-tokens': JSON.parse(fs.readFileSync(path.resolve(__dirname, './v6-tokens/figma-fixedneutral-tokens.json')))
}

const getCollections = (fileName) => {
  if (!(fileName in jsonData)) throw new Error('unregistered json file name')
  const { collections } = jsonData[`${fileName}`]
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

const getStaticPalette = () => {
  const [baseCollection] = getCollections('figma-base-tokens')
  const [mode] = getModes(baseCollection)
  return getStaticColors(mode)
}

const getFixedNeutralColors = () => {
  const [fixedNeutralCollection] = getCollections('figma-fixedneutral-tokens')
  const [{ variables }] = getModes(fixedNeutralCollection)
  return variables.reduce((fixedNeutralColors, { name, description }) => {
    const [prefix, colorname] = name.split('/')
    return { ...fixedNeutralColors, [`${prefix}_${colorname}`]: staticPalette[description.split('/').pop()] }
  }, {})
}

const staticPalette = getStaticPalette()

const resolveColorValue = (value, isAlias) => {
  if (isAlias && typeof value === 'object') return staticPalette[value.name.split('/').pop()]
  if (!isAlias && typeof value === 'string') return value
  throw new Error('unknown color value', value)
}

const getSections = ({ variables }) => {
  return variables.reduce((sections, { name, value, isAlias }) => {
    const [sectionName, sectionItem] = name
      .split('/')

    const aliases = Object.fromEntries(Object.entries(renamedTokensMap)
      .filter(([, mappedToItem]) => mappedToItem === sectionItem)
      .map(([oldName]) => {
        return [oldName, resolveColorValue(value, isAlias)]
      }))

    const [cleanSectionItem] = sectionItem.toLowerCase().split('[deprecated]')

    return {
      ...sections,
      [sectionName.toLowerCase()]: {
        ...sections[`${sectionName}`],
        [cleanSectionItem]: resolveColorValue(value, isAlias),
        ...aliases
      }
    }
  }, {})
}

const getCollectionByName = (collectionName) => {
  return getCollections('figma-semantic-tokens')
    .filter(({ name }) => name === collectionName).pop()
}

const getGroupedThemes = () => {
  const collection = getCollectionByName('colors 1_6')
  const themeSections = getModes(collection)
  return themeSections.reduce((theme, { name: themeName, variables }) => {
    const sections = getSections({ variables })
    return { [themeName.toLowerCase()]: sections, ...theme }
  }, {})
}

const getGroupedSections = () => {
  const collection = getCollectionByName('colors 1_6')
  const themeSections = getModes(collection)
  return themeSections.reduce((section, { name: themeName, variables }) => {
    const sections = getSections({ variables })

    mergeDeep(section, Object.entries(sections).reduce((groups, [groupName, group]) => {
      return {
        ...groups,
        [groupName.toLowerCase()]: Object.entries(group).reduce((groupItems, [groupItem, itemValue]) => {
          const [cleanGroupNane] = groupItem.toLowerCase().split('[deprecated]')
          return {
            ...groupItems,
            [cleanGroupNane]: { [themeName.toLowerCase()]: itemValue }
          }
        }, {})
      }
    }, {}))

    return {
      ...section
    }
  }, { ...getFixedNeutralColors() })
}

const isObject = (item) => {
  return (item && typeof item === 'object' && !Array.isArray(item))
}
const mergeDeep = (target, ...sources) => {
  if (!sources.length) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      const sourceValue = source[`${key}`]
      if (isObject(sourceValue)) {
        if (!target[`${key}`]) Object.assign(target, { [key]: {} })
        mergeDeep(target[`${key}`], sourceValue)
      } else {
        Object.assign(target, { [key]: sourceValue })
      }
    }
  }

  return mergeDeep(target, ...sources)
}

const sortThemes = (a, b) => {
  const [nameA] = a
  const [nameB] = b
  if (nameA > nameB) return -1
  if (nameA < nameB) return 1
  return 0
}

const getPaletteCssVarsString = () => {
  const palette = getStaticPalette()
  const entries = Object.entries(palette).reduce((string, [colorName, value]) => {
    return `${string} --color--${colorName}: ${value};\n`
  }, '')

  return `:root {
    ${entries}
  }`
}

const getThemedCssVarsString = () => {
  const groupedThemes = getGroupedThemes()
  return Object.entries(groupedThemes).sort(sortThemes).reduce((cssString, [themeName, section]) => {
    const cssSectionString = Object.entries(section).reduce((sectionString, [sectionName, sectionValue]) => {
      const cssVariablesString = Object.entries(sectionValue).reduce((entryString, [entryName, entryValue]) => {
        const [cleanEntryName] = entryName.split('[deprecated]')
        return `${entryString}  --${sectionName.toLowerCase()}--${cleanEntryName.toLowerCase()}: ${entryValue};\n`
      }, '')
      return `${sectionString}${cssVariablesString}`
    }, '')
    const prefix = themeName === 'dark' ? '\n.theme-dark {\n' : '\n:root,\n.theme-light {\n'
    const suffix = '}\n'
    return `${cssString}${prefix}${cssSectionString}${suffix}`
  }, '')
}

const showLog = () => {
  console.log('\x1b[35m', 'Registered JSONs:\n')
  Object.entries(jsonData).forEach(([fileName, fileData], index) => {
    const { version, collections } = fileData
    console.log('\x1b[34m', ` ${index + 1}. ${fileName}`)
    console.log(`     version: ${version}`)
    console.log('\x1b[35m', '     collections:')
    console.log(collections.map(({ name }, index) => `       ${index + 1} ${name}`).join(',\n'))
  })
  console.log('\n')
}

module.exports = {
  getGroupedSections,
  getGroupedThemes,
  getPaletteCssVarsString,
  getSections,
  getStaticColors,
  getStaticPalette,
  getThemedCssVarsString,
  showLog
}
