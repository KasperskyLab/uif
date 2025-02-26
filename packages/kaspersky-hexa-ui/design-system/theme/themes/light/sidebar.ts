import { SidebarColorConfig, SidebarSize as Size, SidebarSizeConfig } from '@src/sidebar/types'

import { ComponentThemeContext } from '../config'
import { SPACES } from '../variables'

export const sidebar = ({ colors }: ComponentThemeContext): SidebarColorConfig => ({
  drawer: {
    background: colors.sidebar.bg,
    border: colors.sidebar.border
  },
  mask: {
    background: colors.overlay.bg
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
