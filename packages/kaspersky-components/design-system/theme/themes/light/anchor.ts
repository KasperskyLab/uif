import { AnchorColorConfig } from '@src/anchor-links/Anchor/types'
import { AnchorLinkColorConfig } from '@src/anchor-links/AnchorLink/types'
import { ComponentThemeContext } from '../config'
import { focus } from '@design-system/tokens/focus'

export const anchor = ({ colors }: ComponentThemeContext): AnchorColorConfig & AnchorLinkColorConfig => ({
  background: colors.bg.alternative2,
  default: {
    enabled: {
      color: colors.textIconsElements.primary
    },
    hover: {
      background: colors.elements['separator-solid']
    },
    pressed: {
      background: colors.elements['separator-bold-solid']
    }
  },
  active: {
    background: colors.bg.base
  },
  boxShadow: '0px 0px 1px 0px rgba(9, 30, 66, 0.31), 0px 1px 1px 0px rgba(9, 30, 66, 0.25)',
  ...focus({ colors })
})
