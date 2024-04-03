import React, { FC, HTMLAttributes, useEffect } from 'react'
import styled from 'styled-components'
import { useDarkMode } from 'storybook-dark-mode'
import { ThemeKey } from '@design-system/types'
import { ThemeProvider } from '@design-system/theme'
import { GlobalStyle } from '@design-system/global-style'

export const withThemeProvider = (Story: FC, context: any) => {
  const themeKey = useDarkMode() ? ThemeKey.Dark : ThemeKey.Light
  document.documentElement.setAttribute('data-theme', themeKey)

  /**
   * с обновлением сторибука до 7.6 эту конструкцию можно будет убрать, так как в API темезации
   * сторибука появится поле appPreviewBg. Скорее всего под это подстроится и аддон 'storybook-dark-mode',
   * но если нет, то можно будет в preview.tsx заменить свойство darkMode на
   *   darkMode: {
   *     light: { ...themes.light, appPreviewBg: '#FFFFFF' },
   *     dark: { ...themes.dark, appPreviewBg: '#1D1C28' }
   *   }
   */
  useEffect(() => {
    document.body.style.backgroundColor = themeKey === 'light' ? '#FFFFFF' : '#1D1C28'
  }, [themeKey])

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
    background: props.inverted ? props.theme === ThemeKey.Light ? '#AB94F1' : '#1DA189' : props.theme === ThemeKey.Light ? '#FFFFFF' : '#1D1C28',
    '& > div > h3': {
      color: props.theme !== ThemeKey.Light ? '#FFFFFF' : '#0D0D15'
    }
  })
)
