import { ComponentProps } from 'react'
import { useTheme as useStyledTheme } from 'styled-components'
import merge from 'lodash/merge'

import { COMPONENTS_CONFIG } from '../../css-configs/components'
import { ThemeConfig, ThemeKey } from '../../types'
import { THEME_CONFIG } from '../themes/config'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useTheme = (props?: ComponentProps<any>) => {
  const themeContext = useStyledTheme() as ThemeConfig
  const themeKey: ThemeKey = props?.theme ?? themeContext?.key ?? ThemeKey.Light
  return merge(THEME_CONFIG[themeKey], COMPONENTS_CONFIG)
}
