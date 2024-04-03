import {
  InformationCardColorConfig,
  InformationCardSizeConfig,
  InformationCardSize
} from '@src/informationCard/types'
import { ComponentThemeContext } from '../config'
import { SPACES } from '../variables'
import { getTextSizes, textLevels } from './typography'
import { Size } from '@design-system/types'
import { focus } from '@design-system/tokens/focus'

export const informationCard = ({ colors }: ComponentThemeContext): InformationCardColorConfig => ({
  unSelected: {
    enabled: {
      background: colors.bg.base,
      color: colors.textIconsElements.primary,
      descriptionColor: colors.textIconsElements['secondary-solid'],
      border: colors.elements['separator-bold-solid']
    },
    hover: {
      background: colors.elements['separator-solid']
    },
    pressed: {
      background: colors.elements['separator-bold-solid']
    },
    disabled: {
      background: colors.bg.base,
      color: colors.textIconsElements['disabled-solid'],
      border: colors.elements['separator-solid']
    },
    ...focus({ colors })
  },
  selected: {
    enabled: {
      background: colors.mainInteractPrimaryInverted,
      border: colors.mainInteractBorderInverted,
      color: colors.textIconsElements.primary,
      descriptionColor: colors.textIconsElements['secondary-solid']
    },
    hover: {
      background: colors.mainInteractSecondaryInverted
    },
    pressed: {
      background: colors.mainInteractTertiaryInverted
    },
    disabled: {
      background: colors.elements['separator-solid'],
      color: colors.textIconsElements['disabled-solid'],
      border: colors.elements['separator-solid']
    },
    ...focus({ colors })
  }
})

export const informationCardSize: Record<InformationCardSize, InformationCardSizeConfig> = {
  [Size.Small]: {
    padding: `${SPACES[8]}px ${SPACES[12]}px`,
    ...getTextSizes(textLevels.H6)
  },
  [Size.Medium]: {
    padding: `${SPACES[12]}px`,
    ...getTextSizes(textLevels.H5)
  }
}
