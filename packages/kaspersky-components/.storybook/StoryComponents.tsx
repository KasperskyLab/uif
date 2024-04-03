import { HTMLAttributes } from 'react'
import * as React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from '@design-system/global-style'
import { Theme, ThemeKey } from '@design-system/types'
import { useTheme } from '@design-system/theme'
import { StoryLayoutContainer } from '@sb/decorators/withThemeProvider'


/**
 * @deprecated Story is wrapped by StoryLayout by default.
 * Go to '.storybook/decorators to see details'
*/
export const StoryLayout: React.FC<
  HTMLAttributes<HTMLDivElement> & { theme?: ThemeKey | Theme, inverted?: boolean }
> = (props) => {

  const theme = useTheme()
  return (
    <>
      <GlobalStyle />
      <StoryLayoutContainer theme={props.theme || theme.key} {...props} />
    </>
  )
}

export const StoryWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`

export const StoryColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`
