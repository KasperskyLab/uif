import { ToolbarColorConfig } from '../../../../src/toolbar/types'
import { ComponentThemeContext } from '../config'

export const toolbar = ({ colors }: ComponentThemeContext): ToolbarColorConfig => ({
  mode: {
    normal: {
      background: colors.elements.seporator,
      color: colors.textIconsElements.primary,
      iconColor: colors.textIconsElements.secondary
    }
  }
})
