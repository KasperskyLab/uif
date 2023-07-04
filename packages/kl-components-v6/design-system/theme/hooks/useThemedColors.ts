import { themeColors } from '../../tokens/palette'
import { THEME_CONFIG } from '../themes/config'
import { Theme } from '../../types'

export type ThemedColors = {
  [ElementOrFixedColor in keyof typeof themeColors]: typeof themeColors[ElementOrFixedColor] extends string
    ? string
    : { [ColorName in keyof typeof themeColors[ElementOrFixedColor]]: string }
}

export const useThemedColors = (_theme?: Theme) => {
  const theme = THEME_CONFIG[_theme || 'light']
  return THEME_CONFIG[theme.key].colors
}
