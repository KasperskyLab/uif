import React from 'react'
import { MergingDataTable } from './diffCss'
import { Current, Latest } from './data'
import { isColorsEqual } from './hex-to-rgba'
import { Text } from '@src/typography'
import { ColorInfo, Level3, MergingSectionData, MergingTableCounter } from './types'
import { MergingSection } from './MergingSection'
import { NewSections } from './NewSections'

export const deprecatedMap = {
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

const isTokenDeprecated = (colorKey: string) => {
  return deprecatedNames.some(deprecatedColorName => colorKey === deprecatedColorName)
}

const deprecatedNames = Object.keys(deprecatedMap) || []

export const ICON = {
  deprecated: '🚧',
  removed: '❌',
  affected: '⚠️',
  isNew: '✳️'
}

const QuickStats = ({ counter }: { counter: MergingTableCounter }) => (
  <Text type="BTR3">
    <div>{ICON.isNew} New: {counter.new}</div>
    <div>{ICON.affected} Affected: {counter.affected}</div>
    <div>{ICON.deprecated} Deprecated: {counter.deprecated}</div>
    <div>{ICON.removed} Removed: {counter.removed}</div>
  </Text>
)

const ToObjectEntries: any = (object: Record<string, any>) => {
  const entries = Object.entries(object)
  if (typeof entries[0][1] !== 'object') {
    return object
  } else {
    return entries.map(([key, value]) => ([
      key.toLowerCase(),
      ToObjectEntries(value)
    ]))
  }
}

export const MergingTable = () => {
  const counter: MergingTableCounter = {
    new: 0,
    affected: 0,
    removed: 0,
    deprecated: 0
  }

  const currentData = ToObjectEntries(Current)
  const latestData = ToObjectEntries(Latest)

  const newSectionData = latestData.filter(([sectionKey]: [string]) =>
    !currentData.some(([key]: [string]) => key === sectionKey)
  )

  const findValueMatchedByKey = (whereToFind: [string, any][], matchingKey: string) => (
    whereToFind.filter(([key]) => key === matchingKey)
  )

  const mergingSectionsData: MergingSectionData[] = currentData.map(([currentSectionKey, currentSectionValue]: [string, Level3[]]) => {
    let latestSectionValue: Level3[] = findValueMatchedByKey(latestData, currentSectionKey)[0][1] || []
    latestSectionValue = latestSectionValue.map(([colorKey, colorValue]: Level3) => {
      if (Array.isArray(colorValue)) {
        return [colorKey, colorValue]
      }

      const sameNameColor = findValueMatchedByKey(currentSectionValue, colorKey)[0][1].value

      const affected = sameNameColor && (!isColorsEqual(sameNameColor, colorValue.value))

      !sameNameColor && (counter.new += 1)
      affected && (counter.affected += 1)

      return [colorKey, { ...colorValue, affected, isNew: !sameNameColor }]
    })

    const currentSectionWithChanges = currentSectionValue
      .map(([colorKey, colorValue]: Level3) => {
        if (Array.isArray(colorValue)) {
          const paletteColorsWithDiff = colorValue
            .map(([paletteColorName, paletteColorValue]: [string, ColorInfo]) => {
              const latestColorGroup = findValueMatchedByKey(latestSectionValue, colorKey)[0][1]

              const sameNameColor = findValueMatchedByKey(latestColorGroup, paletteColorName)[0][1].value

              const isAffected = sameNameColor && (!isColorsEqual(sameNameColor, paletteColorValue.value))
              isAffected && (counter.affected += 1)

              return [
                paletteColorName,
                {
                  ...paletteColorValue,
                  affected: isAffected,
                  removed: !sameNameColor && !isTokenDeprecated(paletteColorName),
                  deprecated: isTokenDeprecated(paletteColorName)
                }
              ]
            })

          return [
            colorKey,
            {
              ...paletteColorsWithDiff
            }
          ]
        }
        const sameNameColorRaw = findValueMatchedByKey(latestSectionValue, colorKey)
        const sameNameColor = sameNameColorRaw.length ? sameNameColorRaw[0][1].value : false

        !sameNameColor && !isTokenDeprecated(colorKey) && (counter.removed += 1)
        isTokenDeprecated(colorKey) && (counter.deprecated += 1)

        return [
          colorKey,
          {
            ...colorValue,
            affected: sameNameColor && (!isColorsEqual(sameNameColor, colorValue.value)),
            removed: !sameNameColor && !isTokenDeprecated(colorKey),
            deprecated: isTokenDeprecated(colorKey)
          }
        ]
      }).filter(Boolean)

    return {
      sectionName: currentSectionKey,
      currentSectionWithChanges,
      latestSectionValue
    }
  })

  return <MergingDataTable>
    <h1>Figma colors JSON comparison <QuickStats counter={counter} /></h1>
    <div className='merging-table'>
      <div className='merging-column'><h2>Current</h2></div>
      <div className='merging-column'><h2>Latest</h2></div>
    </div>
    {mergingSectionsData.map((section, index: number) => <MergingSection key={index} section={section}/>)}
    <NewSections data={newSectionData}/>
  </MergingDataTable>
}
