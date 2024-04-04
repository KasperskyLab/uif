import React from 'react'
import { Level3, MergingSectionProps } from './types'
import { ColorItem } from './ColorItem'

const RenderSectionColumn = ({ data }: { data: Level3[] }) => (
  <div className='merging-column'>
    {data.map(([key, value], index: number) => {
      if (key === null) {
        return <div> - </div>
      }
      if (Array.isArray(value)) {
        return (
          <div className='merging-static-colors' key={index + 1}>
            <h4 className='static-color'>
              <span className='static-color-index'>{index + 1}.</span>
              <span>{key}</span>
            </h4>
            {
              value.map(
                ([staticPaletteColorKey, staticPaletteColorValue], staticPaletteKeyIndex) => (
                  staticPaletteColorValue.type === 'color'
                    ? <ColorItem
                      key={`${index + 1}.${staticPaletteKeyIndex + 1}.`}
                      index={`${index + 1}.${staticPaletteKeyIndex + 1}.`}
                      colorName={staticPaletteColorKey}
                      colorValue={staticPaletteColorValue}
                    />
                    : <div>unknown type</div>
                ))
            }
          </div>
        )
      } else {
        return (
          <ColorItem
            key={`${index + 1}.`}
            index={`${index + 1}.`}
            colorName={key}
            colorValue={value}
          />
        )
      }
    })}
  </div>
)

export const MergingSection = ({ section }: MergingSectionProps) => (
  <div className='merging-section'>
    <h3>{section.sectionName}</h3>
    <div className='merging-table'>
      <RenderSectionColumn data={section.currentSectionWithChanges}/>
      <RenderSectionColumn data={section.latestSectionValue}/>
    </div>
  </div>
)
