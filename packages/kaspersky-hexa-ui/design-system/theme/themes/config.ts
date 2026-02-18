import { effects } from '@kaspersky/hexa-ui-core/colors/js'

import { ThemeConfig, ThemeKey } from '../../types'

import { DARK_THEME } from './dark'
import { LIGHT_THEME } from './light'
import { colors } from './light/colors'

export type KeyValueMap<T, V> = {
  [Key in T as string | number | symbol]: V
}

export const THEME_CONFIG: KeyValueMap<ThemeKey, ThemeConfig> = {
  [ThemeKey.Light]: LIGHT_THEME,
  [ThemeKey.Dark]: DARK_THEME
}

export type ComponentThemeContext = {
  colors: typeof colors,
  effects: typeof effects
}
