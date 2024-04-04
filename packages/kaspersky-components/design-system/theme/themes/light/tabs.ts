import { TabsColorConfig } from '@src/tabs/types'
import { ComponentThemeContext } from '../config'
import { focus } from '@design-system/tokens/focus'

export const tabs = ({ colors }: ComponentThemeContext): TabsColorConfig => ({
  selected: {
    enabled: {
      color: colors.mainInteractPrimary,
      border: colors.mainInteractPrimary,
      background: colors.bg.base
    },
    hover: {
      background: colors.mainInteractSecondaryInverted
    },
    pressed: {
      background: colors.mainInteractTertiaryInverted
    },
    disabled: {
      color: colors.textIconsElements['disabled-solid']
    }
  },
  unSelected: {
    enabled: {
      color: colors.textIconsElements.primary,
      border: colors.elements['separator-bold-solid'],
      background: colors.bg.base
    },
    hover: {
      background: colors.elements['separator-solid']
    },
    pressed: {
      background: colors.elements['separator-bold-solid']
    }
  },
  divider: {
    color: colors.elements['separator-bold-solid']
  },
  ...focus({ colors })
})
