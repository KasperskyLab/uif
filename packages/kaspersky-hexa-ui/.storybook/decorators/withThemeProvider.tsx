import { GlobalStyle } from '@design-system/global-style'
import { ThemeProvider } from '@design-system/theme'
import { themeColors } from '@design-system/tokens'
import { ThemeKey } from '@design-system/types'
import React, { FC, HTMLAttributes, useEffect } from 'react'
import styled from 'styled-components'

export const withThemeProvider = (Story: FC, context: any) => {
  const themeKey = context.globals.theme || ThemeKey.Light
  const direction = context.globals.direction || 'ltr'
  const isFullscreenLayout = context.parameters?.layout === 'fullscreen'

  useEffect(() => {
    document.body.setAttribute('dir', direction)
    return () => { document.body.removeAttribute('dir') }
  }, [direction])

  return (
    <ThemeProvider theme={themeKey}>
      <GlobalStyle />
      {isFullscreenLayout ? (
        <div>
          <Story {...context} theme={themeKey} />
        </div>
      ) : (
        <StoryLayoutContainer theme={themeKey}>
          <Story {...context} theme={themeKey} />
        </StoryLayoutContainer>
      )}
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
