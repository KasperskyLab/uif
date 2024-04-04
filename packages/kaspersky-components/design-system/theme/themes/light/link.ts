import { LinkColorConfig, LinkSizeConfig, LinkSize } from '@src/link/types'
import { ComponentThemeContext } from '../config'
import { BORDER_RADIUS, SPACES } from '../variables'
import { getTextSizes, TextTypes } from './typography'
import { focus } from '@design-system/tokens/focus'

export const link = ({ colors }: ComponentThemeContext): LinkColorConfig => ({
  normal: {
    color: colors.mainInteractPrimary
  },
  visited: {
    color: colors.mainInteractPrimary
  },
  hover: {
    color: colors.mainInteractSecondary
  },
  active: {
    color: colors.mainInteractTertiary
  },
  disabled: {
    color: colors.textIconsElements['disabled-solid']
  },
  ...focus({ colors })
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
