import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../design-system/theme/hooks';
import { SPACES } from '../../design-system/theme/themes/variables'
import { Text } from '../../src';

const StyledSizeExample = styled.div<{size: keyof typeof  SPACES}>`
  display: flex;
  .ds-info {
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
export const Sizing = (): any => {
  const theme = useTheme()
  return (
    <>
      <h1 style={{color: theme.colors.mainInteractPrimary}}>SPACES</h1>
        {Object.entries(SPACES).map(([key, value]) => {
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
