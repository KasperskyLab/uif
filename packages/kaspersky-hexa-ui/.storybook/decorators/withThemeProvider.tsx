import { GlobalStyle } from '@design-system/global-style'
import { ThemeProvider } from '@design-system/theme'
import { themeColors } from '@design-system/tokens'
import { ThemeKey } from '@design-system/types'
import React, { FC, HTMLAttributes } from 'react'
import styled from 'styled-components'

export const withThemeProvider = (Story: FC, context: any) => {
  const themeKey = context.globals.theme || ThemeKey.Light
  const direction = context.globals.direction || 'ltr'

  return (
    <ThemeProvider theme={themeKey}>
      <GlobalStyle />
      <StoryLayoutContainer theme={themeKey} dir={direction}>
        <Story {...context} theme={themeKey} />
      </StoryLayoutContainer>
    </ThemeProvider>
  )
}

export const StoryLayoutContainer = styled.div<HTMLAttributes<HTMLDivElement>>(
  (props: { theme: ThemeKey, inverted?: boolean }) => ({
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    padding: '1.5rem',
    margin: '-1rem',
    alignItems: 'flex-start',
    minHeight: '100vh',
    background: props.inverted ? props.theme === ThemeKey.Light ? '#AB94F1' : '#1DA189' : themeColors.bg.base[props.theme]
  })
)
