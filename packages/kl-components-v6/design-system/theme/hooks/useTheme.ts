import { ComponentProps } from 'react'
import { useTheme as useStyledTheme } from 'styled-components'
import { THEME_CONFIG } from '../themes/config'
import { ThemeConfig, ThemeKey } from '../../types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useTheme = (props?: ComponentProps<any>): ThemeConfig => {
  const themeContext = useStyledTheme() as ThemeConfig
  const themeKey: ThemeKey = props?.theme ?? themeContext?.key ?? ThemeKey.Light
  return THEME_CONFIG[themeKey]
}
