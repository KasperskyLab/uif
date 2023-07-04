import { ComponentThemeContext } from '../config'
import { DividerColorConfig, DividerMode, DividerSizeConfig, DividerType } from '../../../../src/divider/types'
import { SPACES, BORDER_RADIUS } from '../variables'

export const divider = ({ colors }: ComponentThemeContext): DividerColorConfig => ({
  normal: {
    color: colors.elements.seporatorbold
  },
  light: {
    color: colors.elements.seporator
  },
  bold: {
    color: colors.textIconsElements.primary
  }
})

export const dividerSize: Record<DividerMode | DividerType, DividerSizeConfig> = {
  normal: {
    thickness: '1px'
  },
  light: {
    thickness: '1px'
  },
  bold: {
    thickness: '2px',
    radius: '2px'

  },
  horizontal: {
    margin: SPACES[8]
  },
  vertical: {
    margin: SPACES[4]
  }
}
