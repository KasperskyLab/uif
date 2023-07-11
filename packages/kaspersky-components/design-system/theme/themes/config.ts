import { StyleHelpers } from '../../../style-helpers'
import { ThemeKey, ThemeConfig } from '../../types'
import { DARK_THEME } from './dark'
import { LIGHT_THEME } from './light'
import { colors } from './light/colors'

export const THEME_CONFIG: StyleHelpers.KeyValueMap<ThemeKey, ThemeConfig> = {
  [ThemeKey.Light]: LIGHT_THEME,
  [ThemeKey.Dark]: DARK_THEME
}
export type ComponentThemeContext = {
  colors: typeof colors,
}
