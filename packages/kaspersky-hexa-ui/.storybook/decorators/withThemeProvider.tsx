import React, { FC, HTMLAttributes } from 'react'
import styled from 'styled-components'
import { useDarkMode } from 'storybook-dark-mode'
import { ThemeKey } from '@design-system/types'
import { ThemeProvider } from '@design-system/theme'
import { GlobalStyle } from '@design-system/global-style'
import { themeColors } from '@design-system/tokens'

export const withThemeProvider = (Story: FC, context: any) => {
  const themeKey = useDarkMode() ? ThemeKey.Dark : ThemeKey.Light
  document.documentElement.setAttribute('data-theme', themeKey)

  return (
    <ThemeProvider theme={themeKey}>
      <GlobalStyle />
      <StoryLayoutContainer theme={themeKey}>
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
    background: props.inverted ? props.theme === ThemeKey.Light ? '#AB94F1' : '#1DA189' : themeColors.bg.base[props.theme],
  })
)
