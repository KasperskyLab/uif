import { AnchorColorConfig, AnchorSizeConfig, AnchorLinkSizeConfig, AnchorLinkColorConfig } from '../../../../src/anchor-links/types'
import { ComponentThemeContext } from '../config'
import { BORDER_RADIUS, SPACES } from '../variables'
import { getTextSizes, textLevels } from './typography'

export const anchors = ({ colors }: ComponentThemeContext): AnchorColorConfig & AnchorLinkColorConfig => ({
  background: colors.bg.alternative2,
  active: {
    color: colors.textIconsElements.primary,
    background: colors.bg.base,
    hover: {
      color: colors.textIconsElements.primary,
      background: colors.bg.base
    }
  },
  normal: {
    color: colors.textIconsElements.primary,
    hover: {
      color: colors.textIconsElements.primary
    }
  }
})

export const anchorsSize: AnchorSizeConfig & AnchorLinkSizeConfig = {
  wrapper: {
    padding: `${SPACES[2]}px`,
    borderRadius: `${BORDER_RADIUS[6]}px`
  },
  links: {
    padding: `${SPACES[5]}px ${SPACES[8]}px`,
    borderRadius: `${BORDER_RADIUS[4]}px`,
    fontSize: getTextSizes(textLevels.L3).fontSize
  }
}
