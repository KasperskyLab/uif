import { SearchCssConfig } from '../../../../src/search/types'
import { ComponentThemeContext } from '../config'

export const search = ({ colors }: ComponentThemeContext): SearchCssConfig => ({
  mode: {
    normal: {
      background: colors.bg.base,
      borderColor: colors.defaultPalette.marina300,
      color: colors.textIconsElements.primary,
      iconColor: colors.textIconsElements.secondary
    }
  }
})
