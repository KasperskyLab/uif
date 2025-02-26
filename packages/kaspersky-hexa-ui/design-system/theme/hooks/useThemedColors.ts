import { useTheme } from './useTheme'
import { themeColors } from '../../tokens/palette'
import { Theme } from '../../types'

export type ThemedColors = {
  [ElementOrFixedColor in keyof typeof themeColors]: typeof themeColors[ElementOrFixedColor] extends string
    ? string
    : { [ColorName in keyof typeof themeColors[ElementOrFixedColor]]: string }
}

export const useThemedColors = (_theme?: Theme) => {
  const theme = useTheme({ theme: _theme })

  return theme.colors
}
