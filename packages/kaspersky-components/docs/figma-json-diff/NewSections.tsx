import { NewSectionsData } from './diffCss'
import React from 'react'
import { ColorItem } from './ColorItem'
import { NewSectionsProps } from './types'

export const NewSections = ({ data }: NewSectionsProps) => (
  <NewSectionsData>
    <h2>New sections</h2>
    <div>
      {
        data.length
          ? data.map(([key, value]) =>
            <div key={key}>
              <h3>{key}</h3>
              <div>
                {
                  value.map(([sectionItemKey, sectionItemValue], index: number) =>
                    sectionItemValue.type === 'color'
                      ? <ColorItem
                          index={`${index + 1}.`}
                          colorName={sectionItemKey}
                          colorValue={sectionItemValue}
                        />
                      : <div className='json-unknown-data'>
                          <span className='json-unknown-data-index'>{index + 1}.</span>
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
)
