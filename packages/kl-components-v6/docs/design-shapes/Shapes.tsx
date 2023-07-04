import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../design-system/theme/hooks';
import { BORDER_RADIUS, SPACES } from '../../design-system/theme/themes/variables'
import { Text } from '../../src';

const StyledSizeExample = styled.div<{size: keyof typeof  SPACES}>`
  display: flex;
  .ds-info {
    font-size: ${({theme: {spaces}}) => spaces[4]}px;
    color: ${({theme: {colors}}) => colors.mainInteractPrimary};
    width: 200px;
  }
  
  .ds-example {
    width: 300px;
    height: ${({size, theme: {spaces}}) => `${spaces[size]}px`|| '4px'};
    background: ${({theme: {colors}}) => colors.defaultPalette.marina500};
    margin: 10px 0;
  }
`

export const Shapes = (): any => {
  const theme = useTheme()
  return (
    <>
      <h1 style={{color: theme.colors.mainInteractPrimary}}>BORDER_RADIUS</h1>
        {Object.entries(BORDER_RADIUS).map(([key, value]) => {
          return <div key={key}>
            <StyledSizeExample size={key}>
              <div className='ds-info'>
                <Text level='BodyTextRegular/3' color={theme.colors.mainInteractPrimary}>{key} Unit - {value}px</Text>
              </div>
                <div className='ds-example'></div>
            </StyledSizeExample>
          </div>
        })}
    </>
  )
}
