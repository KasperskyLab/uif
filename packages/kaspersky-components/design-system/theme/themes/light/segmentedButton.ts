import {
  SegmentedButtonMode as Mode,
  SegmentedButtonColorConfig as ColorConfig,
  SegmentedButtonSize as Size,
  SegmentedButtonSizeConfig as SizeConfig
} from '@src/segmented-button/types'
import { ComponentThemeContext } from '../config'
import { SPACES } from '../variables'
import { focus } from '@design-system/tokens/focus'

export const segmentedButton = ({ colors }: ComponentThemeContext): Record<Mode, ColorConfig> => {
  const getModeConfig = (mode: Mode): ColorConfig => ({
    checked: {
      normal: {
        background: colors.tagsoutlined[`${mode}-bg-base`],
        color: colors.tagsoutlined[mode],
        border: colors.tagsoutlined[`${mode}-border`]
      },
      hover: {
        background: colors.tagsoutlined[`${mode}-bg-hover`]
      },
      active: {
        background: colors.tagsoutlined[`${mode}-bg-active`]
      },
      disabled: {
        background: colors.elements['separator-solid']
      }
    },
    unchecked: {
      normal: {
        background: colors.bg.base,
        color: colors.textIconsElements['secondary2-solid'],
        border: colors.elements['separator-bold-solid']
      },
      hover: {
        background: colors.elements['separator-solid']
      },
      active: {
        background: colors.elements['separator-bold-solid']
      },
      disabled: {
        border: colors.elements['separator-solid'],
        color: colors.textIconsElements['disabled-solid']
      }
    },
    ...focus({ colors })
  })

  return {
    marina: getModeConfig('marina'),
    grey: getModeConfig('grey'),
    red: getModeConfig('red'),
    orange: getModeConfig('orange'),
    yellow: getModeConfig('yellow'),
    grass: getModeConfig('grass'),
    emerald: getModeConfig('emerald'),
    marengo: getModeConfig('marengo'),
    purple: getModeConfig('purple'),
    violet: getModeConfig('violet')
  }
}

export const segmentedButtonSize: Record<Size, SizeConfig> = {
  medium: {
    padding: `${SPACES[1]}px ${SPACES[4]}px`
  },
  large: {
    padding: `${SPACES[3]}px ${SPACES[6]}px`
  }
}
