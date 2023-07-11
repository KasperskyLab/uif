import { ComponentThemeContext } from '../config'
import { BORDER_RADIUS } from '../variables'

export const accordion = ({ colors }: ComponentThemeContext): any => ({
  borderRadius: `${BORDER_RADIUS[2]}px`,
  upBorderRadius: `${BORDER_RADIUS[2]}px ${BORDER_RADIUS[2]}px 0 0`,
  downBorderRadius: `0 0 ${BORDER_RADIUS[2]}px ${BORDER_RADIUS[2]}px`,
  borderColor: colors.elements.seporatorbold,
  default: {
    titleBackground: colors.bg.base,
    contentBackground: colors.bg.base
  },
  active: {
    titleBackground: colors.bg.base,
    contentBackground: colors.bg.base
  },
  disabled: {
    titleBackground: colors.bg.base,
    contentBackground: colors.bg.base
  }
})
