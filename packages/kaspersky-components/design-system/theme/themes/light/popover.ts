import { PopoverCssConfig } from '@src/popover/types'
import { ComponentThemeContext } from '../config'

export const popover = ({ colors }: ComponentThemeContext): PopoverCssConfig => ({
  background: colors.bg.base,
  color: colors.textIconsElements.primary,
  boxShadow: '0px 3px 5px 0px #091e4233',
  boxShadowLine: '0px 0px 1px 0px #091e42a3',
  arrowBoxShadow: '0px 0px 3px 0px #091e4233'
})
