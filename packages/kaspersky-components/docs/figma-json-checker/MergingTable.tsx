// @ts-ignore
import React, {useState} from 'react'
import classnames from 'classnames'

import { ColorItemRow, MergingDataTable, TooltipRow, NewSectionsData } from './diffCss'
import { Current, Latest } from './data'
import { hexToRGBA, isColorsEqual } from './hex-to-rgba'
import { Tooltip } from '../../src/tooltip'
import { Text } from '../../src/typography'

const RenderSectionColumn = ({ data }) => {
  return <div className='merging-column'>
    {data?.map(([key, value]: [string, Record<string, any>], index) => {
      if (key === null) {
        return <div> - </div>
      }
      switch (value.type) {
        case 'color': return <ColorItem
          index={`${index+1}.`}
          colorName={key}
          colorValue={value}
        />
        case undefined: return <div className='merging-static-colors'>
          <h4 className='static-color'>
            <span className='static-color-index'>{index+1}.</span><
            span>{key}</span>
          </h4>
          { Object.entries(value)
            .map(([, [staticPaletteColorKey, staticPaletteColorValue]]: [string, any], staticPaletteKeyIndex) => {
              return staticPaletteColorValue.type === 'color'
                ? <ColorItem
                  index={`${index+1}.${staticPaletteKeyIndex+1}.`}
                  colorName={staticPaletteColorKey}
                  colorValue={staticPaletteColorValue}
                />
                : <div>unknown type</div>
          })}
        </div>
      }
    })}
  </div>
}

const MergingSection = ({ section }) => {
  return <div className='merging-section'>
    <h3>{section.sectionName}</h3>
    <div className='merging-table'>
      <RenderSectionColumn data={section.currentSectionWithChanges}/>
      <RenderSectionColumn data={section.latestSectionValue}/>
    </div>
  </div>
}

const ResolveColor = ({ color }) => {
  return color
    ? <div className='json-color-value'>
        <div className='json-color-value-original'>{color}</div>
          {
            color?.startsWith('#')
              ? <div>{hexToRGBA(color)}</div>
              : null
          }
      </div>
    : null
}

const RenderAllColorProps = ({ value }) => {
  return <div>
    {Object.entries(value).map(([propKey, propValue]) =>
      propKey
        ? <TooltipRow>
            <span>{propKey}:</span>
            <span>{String(propValue)}</span>
          </TooltipRow>
        : null
    )}
  </div>
}

const ICON = {
  removed: '❌',
  affected: '⚠️',
  isNew: '✳️'
}

const QuickStats = ({ counter }) => {
  return <Text type="BTR3">
    <div>{ICON.isNew} New: {counter.new}</div>
    <div>{ICON.affected} Affected: {counter.affected}</div>
    <div>{ICON.removed} Deprecated: {counter.removed}</div>
  </Text>
}

const ResolveIconStatus = ({ value }) => {
  return <div className='json-color-status'>{[
    value.removed && ICON.removed,
    value.affected && ICON.affected,
    value.isNew && ICON.isNew
  ].filter(Boolean)}</div>
}

const ColorBox = ({ value }) =>{
  return <Tooltip
    placement='right'
    autoAdjustOverflow={false}
    arrowPointAtCenter
    title={<RenderAllColorProps value={value}/>}>
      <div className='json-color-box' style={{backgroundColor: value?.value || 'red'}}></div>
  </Tooltip>
}

export const ColorItem = ({ index, colorName, colorValue}) => {
  return <ColorItemRow
    className={classnames(
      { 'json-color-removed': colorValue.removed },
      { 'json-color-affected': colorValue.affected },
      { 'json-color-new': colorValue.isNew }
    )}>
    <div className='json-color-index'>{index}</div>
    <ColorBox value={colorValue} />
    <div className='json-color-name'>
      <ResolveIconStatus value={colorValue} />
      <div>{colorName}</div>
    </div>
    <ResolveColor color={colorValue?.value} />
  </ColorItemRow>
}

const NewSections = ({data}) => {
  return <NewSectionsData>
    <h2>New sections</h2>
    <div>
      {
        data.length
          ? data.map(([key, value]) =>
            <div>
              <h3>{key}</h3>
              <div>
                {
                  Object.entries(value)
                    .map(([sectionItemKey, sectionItemValue]: [string, Record<string, any>], index) =>
                      sectionItemValue.type === 'color'
                        ? <ColorItem
                            index={`${index+1}.`}
                            colorName={sectionItemKey}
                            colorValue={sectionItemValue}
                          />
                        : <div className='json-unknown-data'>
                            <span className='json-unknown-data-index'>{index+1}.</span>
                            <span>{sectionItemKey}:</span>
                            <div>
                              <div>Stringify value: </div>
                              <pre>{JSON.stringify(sectionItemValue, null, 4)}</pre>
                            </div>
                          </div>
                  )
                }
              </div>
            </div>
          )
          : <div>Empty</div>
      }
    </div>
  </NewSectionsData>
}

export const MergingTable = () => {
  const counter = {
    new: 0,
    affected: 0,
    removed: 0
  }
  const currentData = Object.entries(Current)
  const latestData = Object.entries(Latest)
    .map(([section, sectionValue]: [string, Record<string, any>]) =>
      [
        section.toLowerCase(),
        {
          ...sectionValue
        }
      ]
    )

  const newSectionData = latestData.filter(([sectionKey]: [string, Record<string, any>]) =>
    !currentData.some(([key]) => key === sectionKey)
  )

  const mergingSectionsData = currentData.map(([sectionKey, currentSectionValue]) => {
    const [[, latestSectionValueObject = null] = []] = latestData.filter(([latestSectionKey]) => latestSectionKey === sectionKey)
    const latestSectionValue = latestSectionValueObject
      ? Object.entries(latestSectionValueObject)
        .map(([colorKey, colorValue]: [string, Record<any, any>]) => {
          if (!colorValue.type) {
            const paletteColorsWithDiff = Object.entries(colorValue)
              .map(([paletteColorName, paletteColorValue]: [string, Record<any, any>]) =>
                [
                  paletteColorName.toLowerCase(),
                  {
                    ...paletteColorValue
                  }
                ]
              )

            return [
              colorKey.toLowerCase(),
              {
                ...paletteColorsWithDiff
              }
            ]
          }

          const [ [, { value: sameNameColor = false } = {}] = [] ] = Object.entries(currentSectionValue)
            .filter(([currentColorKey]) => currentColorKey === colorKey.toLowerCase())

          const isAffected = sameNameColor && (!isColorsEqual(sameNameColor, colorValue.value))

          !sameNameColor && (counter.new = counter.new+1)
          isAffected && (counter.affected = counter.affected+1)

          return [
            colorKey.toLowerCase(),
            {
              ...colorValue,
              affected: isAffected,
              isNew: !sameNameColor
            }
          ]
        })
      : []

    const currentSectionWithChanges = Object.entries(currentSectionValue)
      .map(([colorKey, colorValue]) => {
        if (!colorValue.type) {
          const paletteColorsWithDiff = Object.entries(colorValue)
            .map(([paletteColorName, paletteColorValue]: [string, Record<any, any>]) => {
              const [[, latestColorGroup ] = []] = latestSectionValue
                .filter(([colorGroupKey]) => colorGroupKey === colorKey)
              // @ts-ignore
              const [[, { value: sameNameColor } = {}] = []] = Object.values(latestColorGroup)
                .filter(([latestColorKey]) => latestColorKey === paletteColorName)

              const isAffected = sameNameColor && (!isColorsEqual(sameNameColor, paletteColorValue.value))
              isAffected && (counter.affected = counter.affected+1)

              return [
                paletteColorName,
                {
                  ...paletteColorValue,
                  affected: isAffected,
                  removed: !sameNameColor
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
        // @ts-ignore
        const [[, { value: sameNameColor } = {}] = []] = latestSectionValue.filter(([latestColorKey]) =>
          latestColorKey === colorKey
        ) || [[, false]]

        !sameNameColor && (counter.removed = counter.removed+1)

        return [
          colorKey,
          {
            ...colorValue,
            affected: sameNameColor && (!isColorsEqual(sameNameColor, colorValue.value)),
            removed: !sameNameColor
          }
        ]
      }).filter(Boolean)

    return {
      sectionName: sectionKey,
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
    {mergingSectionsData.map(section => <MergingSection section={section}/>)}
    <NewSections data={newSectionData}/>
  </MergingDataTable>
}
