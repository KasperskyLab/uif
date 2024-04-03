import { SidebarColorConfig, SidebarSize as Size, SidebarSizeConfig } from '../../../../src/sidebar/types'
import { ComponentThemeContext } from '../config'
import { SPACES } from '../variables'

export const sidebar = ({ colors }: ComponentThemeContext): SidebarColorConfig => ({
  normal: {
    drawer: {
      background: colors.background,
      borderColor: colors.elements['separator-bold-solid']
    },
    mask: {
      background: colors.textIconsElements.disabled
    }
  }
})

const commonSizes = {
  padding: `${SPACES[12]}px`,
  flexMarginLeft: SPACES[20],
  gap: `${SPACES[8]}px`
}

export const sidebarSize: Record<Size, SidebarSizeConfig> = {
  large: {
    width: 1200,
    ...commonSizes
  },
  medium: {
    width: 800,
    ...commonSizes
  },
  small: {
    width: 640,
    ...commonSizes
  },
  extraSmall: {
    width: 480,
    ...commonSizes
  }
}
