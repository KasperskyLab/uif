import { ScrollbarColorConfig } from '@src/scrollbar/types'
import { ComponentThemeContext } from '../config'

export const scrollbar = ({ colors }: ComponentThemeContext): ScrollbarColorConfig => ({
  normal: {
    trackColor: colors.bg.transparent,
    thumbColor: colors.elements['line-solid']
  },
  hover: {
    trackColor: colors.elements['separator-solid'],
    thumbColor: colors.textIconsElements['secondary2-solid']
  },
  active: {
    trackColor: colors.elements['separator-solid'],
    thumbColor: colors.textIconsElements['secondary2-solid']
  }
})
