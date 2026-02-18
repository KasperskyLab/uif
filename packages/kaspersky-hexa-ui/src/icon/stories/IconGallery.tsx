import { StoryLabel } from '@sb/StoryComponents'
import { Tooltip } from '@src/tooltip'
import * as React from 'react'
import styled from 'styled-components'

import icons16 from '@kaspersky/hexa-ui-icons/16'
import icons24 from '@kaspersky/hexa-ui-icons/24'
import icons32 from '@kaspersky/hexa-ui-icons/32'
import icons40 from '@kaspersky/hexa-ui-icons/40'
import icons48 from '@kaspersky/hexa-ui-icons/48'
import icons8 from '@kaspersky/hexa-ui-icons/8'

const SizeWrapper = styled.div`
  margin: 40px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`

const IconWrapper = styled.span`
  align-items: center;

  .icon-name {
    display: block;
    font-size: 10px;
  }
`

export const IconGallery = (props: { color: string }) => {
  const folderSizes = [icons8, icons16, icons24, icons32, icons40, icons48]
  const folderSizesNames = ['Size 8', 'Size 16', 'Size 24', 'Size 32', 'Size 40', 'Size 48']
  return (<>
    <div>
      {
        folderSizes.map((size, index) => <>
          <StoryLabel label={folderSizesNames[index]} vertical/>
          <SizeWrapper key={`size${index}-key`}>
            {Object.keys(size).map((iconName) => {
              // @ts-ignore
              const SpecificStory = size[iconName]
              return <IconWrapper key={`${size}-${iconName}-key`}>
                <Tooltip text={iconName}><SpecificStory color={props.color}/></Tooltip>
              </IconWrapper>
            })}
          </SizeWrapper>
        </>)
      }
    </div>
  </>
  )
}
