import { ComponentThemeContext } from '../config'
import { DividerColorConfig, DividerMode } from '@src/divider/types'

export const divider = ({ colors }: ComponentThemeContext): Record<DividerMode, DividerColorConfig> => ({
  normal: {
    color: colors.elements['separator-bold-solid']
  },
  light: {
    color: colors.elements['separator-solid']
  },
  bold: {
    color: colors.elements['line-solid']
  }
})
