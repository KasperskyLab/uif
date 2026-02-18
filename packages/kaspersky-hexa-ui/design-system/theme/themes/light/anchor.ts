import { focus } from '@design-system/tokens/focus'
import { AnchorColorConfig } from '@src/anchor-links/Anchor/types'
import { AnchorLinkColorConfig } from '@src/anchor-links/AnchorLink/types'

import { ComponentThemeContext } from '../config'

export const anchor = ({ colors, effects }: ComponentThemeContext): AnchorColorConfig & AnchorLinkColorConfig => ({
  background: colors.anchor_links.bg,
  default: {
    enabled: {
      background: colors.anchor_links_item.bg.enabled,
      color: colors.anchor_links_item.text
    },
    hover: {
      background: colors.anchor_links_item.bg.hover
    },
    pressed: {
      background: colors.anchor_links_item.bg.active
    }
  },
  active: {
    background: colors.anchor_links_item.bg.enabled_selected
  },
  boxShadow: `${effects.elevation.small[1]} ${colors.elevation.small[1]}, ${effects.elevation.small[2]} ${colors.elevation.small[2]}`,
  ...focus({ effects })
})
