import {
  LinkColorConfig,
  LinkSizeConfig
} from '../../../../src/link/types'
import { ComponentThemeContext } from '../config'
import { BORDER_RADIUS, SPACES } from '../variables'

export const link = ({
  colors
}: ComponentThemeContext): LinkColorConfig => ({
  normal: {
    color: colors.elements['accent-link']
  },
  hover: {
    color: colors.mainInteractSecondary
  },
  focus: {
    color: colors.elements['accent-link']
  },
  active: {
    color: colors.mainInteractTertiary
  },
  disabled: {
    color: colors.textIconsElements.disabled
  },
  focusOutline: {
    color: colors.mainInteractFocus
  }
})

export const linkSize: LinkSizeConfig = {
  gap: `${SPACES[4]}px`,
  borderRadius: `${BORDER_RADIUS[3]}px`,
  outlineWidth: `${SPACES[2]}px`
}
