import merge from 'lodash/merge'
import { ComponentProps } from 'react'
import { useTheme as useStyledTheme } from 'styled-components'

import { COMPONENTS_CONFIG } from '../../css-configs/components'
import { ThemeConfig, ThemeKey } from '../../types'
import { THEME_CONFIG } from '../themes/config'

/**
 * Merging the static THEME_CONFIG[themeKey] + COMPONENTS_CONFIG does not depend on the component — it is the same for every instance
 * with a given themeKey. Previously the merge ran inside useMemo, i.e. on EVERY component mount (hundreds of deep theme merges
 * on large tables, ~1.8s total), and it also mutated the shared THEME_CONFIG[themeKey]. Cache the result once per themeKey, without mutation.
 */
const themeConfigCache = new Map<ThemeKey, ThemeConfig & typeof COMPONENTS_CONFIG>()

const getThemeConfig = (themeKey: ThemeKey) => {
  const cached = themeConfigCache.get(themeKey)
  if (cached) return cached

  const config = merge({}, THEME_CONFIG[themeKey], COMPONENTS_CONFIG)
  themeConfigCache.set(themeKey, config)
  return config
}

export const useTheme = (props?: ComponentProps<any>) => {
  const themeContext = useStyledTheme() as ThemeConfig
  const themeKey: ThemeKey = props?.theme ?? themeContext?.key ?? ThemeKey.Light

  return getThemeConfig(themeKey)
}
