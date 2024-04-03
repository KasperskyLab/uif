const fs = require('fs')

const keysToLowerCase = (data) => {
  return Object.fromEntries(Object.entries(data).map(([groupKey, groupValue]) => {
    return [
      groupKey.toLowerCase(),
      Object.fromEntries(Object.entries(groupValue).map(([colorKey, colorValue]) => {
        return colorValue.type
          ? [
              colorKey.toLowerCase(),
              {
                ...colorValue
              }
            ]
          : [
              colorKey.toLowerCase(),
              Object.fromEntries(Object.entries(colorValue)
                .map(([paletteKey, paletteValue]) =>
                  [
                    paletteKey.toLowerCase(),
                    {
                      ...paletteValue
                    }
                  ]
                ))
            ]
      }))
    ]
  }))
}

const excludedGroups = ['light', 'dark', 'helpers']

const deprecatedMap = {
  seporator: 'separator',
  seporatorbold: 'separator-bold',
  'seporator-invert': 'separator-invert',
  'seporatorbold-invert': 'separator-bold-invert',
  baseicon: 'base-icon',
  inprogress: 'in-progress',
  resolved_solved: 'resolved-solved',
  inincedent: 'in-incident',
  primarywhite: 'primary-white',
  secondarywhite: 'secondary-white',
  secondary2white: 'secondary2-white',
  disabledwhite: 'disabled-white',
  linewhite: 'line-white',
  baseiconwhite: 'base-icon-white',
  'baseicon-invert': 'base-icon-invert',
  seporatorwhite: 'separator-white',
  seporatorboldwhite: 'separator-bold-white',
  alternative2white: 'alternative2-white',
  alternativewhite: 'alternative-white',
  basewhite: 'base-white'
}

const resolveUpdatedJson = ({ currentData, latestData }) => {
  console.log(`
  Starting update colors
  
  deprecatedMap: ${JSON.stringify(deprecatedMap, null, '\t')}
  
  excluded: ${excludedGroups.join(', ')}
  
  `)

  return Object.fromEntries([
    ...Object.entries(currentData || {}).map(([groupKey, groupValue]) => {
      return [
        groupKey,
        {
          ...latestData[groupKey],
          ...Object.fromEntries(
            Object.entries(groupValue || {}).map(([colorKey, colorValue]) => {
              console.log(`     Color ${groupKey}.${colorKey} updated`)
              delete colorValue.comment
              return colorValue.type
                ? [
                    colorKey.toLowerCase(),
                    {
                      ...colorValue,
                      ...latestData[groupKey][colorKey],
                      ...latestData[groupKey][deprecatedMap[colorKey]]
                    }
                  ]
                : [
                    colorKey.toLowerCase(),
                    {
                      ...latestData[groupKey][colorKey],
                      ...Object.fromEntries(
                        Object.entries(colorValue || {}).map(([paletteKey, paletteValue]) => {
                          return [
                            paletteKey.toLowerCase(),
                            {
                              ...paletteValue,
                              ...latestData[groupKey][colorKey][paletteKey]
                            }
                          ]
                        })
                      )
                    }
                  ]
            })
          )
        }
      ]
    }),
    ...Object.entries(latestData || {}).filter(([groupKey, groupValue]) => {
      return !Object.keys(currentData || {}).some((existedKey) => {
        return existedKey === groupKey || excludedGroups.includes(groupKey)
      })
    })
  ]
  )
}

const updateFigmaJson = (cb) => {
  const JSON_PATH = './design-system/tokens/'
  const JSON_FILENAME_CURRENT = 'figma-colors-tokens.json'
  const JSON_FILENAME_LATEST = 'figma-tokens-2023.json'
  try {
    const currentJson = JSON.parse(fs.readFileSync(`${JSON_PATH}${JSON_FILENAME_CURRENT}`))
    const latestJson = keysToLowerCase(JSON.parse(fs.readFileSync(`${JSON_PATH}${JSON_FILENAME_LATEST}`)))
    const resolvedNewJson = resolveUpdatedJson({
      currentData: currentJson,
      latestData: keysToLowerCase(latestJson)
    })
    fs.writeFileSync(
      `${JSON_PATH}${JSON_FILENAME_CURRENT}`,
      JSON.stringify(resolvedNewJson, null, 2),
      { encoding: 'utf-8' })

    console.log(`
  Done!
  
  Source: ${JSON_PATH}${JSON_FILENAME_LATEST}
  Destination: ${JSON_PATH}${JSON_FILENAME_CURRENT}
  
  `)
  } catch (error) {
    console.log(error)
  }
  cb()
}

module.exports = updateFigmaJson
