import { focus } from '@design-system/tokens/focus'
import { getTextSizes } from '@design-system/tokens/typography'
import { LinkColorConfig, LinkSizeConfig, LinkSize } from '@src/link/types'

import { TextTypes } from '@kaspersky/hexa-ui-core/typography/js'

import { ComponentThemeContext } from '../config'
import { BORDER_RADIUS, SPACES } from '../variables'

export const link = ({ colors, effects }: ComponentThemeContext): LinkColorConfig => ({
  enabled: {
    color: colors.link.default.text.enabled
  },
  visited: {
    color: colors.link.visited.text.enabled
  },
  hover: {
    color: colors.link.default.text.hover
  },
  active: {
    color: colors.link.default.text.active
  },
  disabled: {
    color: colors.link.default.text.disabled
  },
  ...focus({ colors, effects })
})

export const linkSize: Record<LinkSize | 'noSize', LinkSizeConfig> = {
  medium: {
    borderRadius: `${BORDER_RADIUS[2]}px`,
    borderWidth: `${SPACES[2]}px`,
    ...getTextSizes(TextTypes.BTM3)
  },
  large: {
    borderRadius: `${BORDER_RADIUS[2]}px`,
    borderWidth: `${SPACES[2]}px`,
    ...getTextSizes(TextTypes.BTM2)
  },
  noSize: {
    borderRadius: `${BORDER_RADIUS[2]}px`,
    borderWidth: `${SPACES[2]}px`
  }
}
