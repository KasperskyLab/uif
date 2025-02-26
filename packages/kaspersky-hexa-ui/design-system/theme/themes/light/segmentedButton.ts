import { focus } from '@design-system/tokens/focus'
import {
  SegmentedButtonColorConfig as ColorConfig,
  SegmentedButtonMode as Mode,
  SegmentedButtonSize as Size,
  SegmentedButtonSizeConfig as SizeConfig
} from '@src/segmented-button/types'

import { ComponentThemeContext } from '../config'

export const segmentedButton = ({ colors, effects }: ComponentThemeContext): Record<Mode, ColorConfig> => {
  const getModeConfig = (mode: Mode): ColorConfig => ({
    checked: {
      enabled: {
        background: colors.segmented_button_checkbox_item[mode].bg.enabled,
        color: colors.segmented_button_checkbox_item[mode].text,
        border: colors.segmented_button_checkbox_item[mode].border
      },
      hover: {
        background: colors.segmented_button_checkbox_item[mode].bg.hover
      },
      active: {
        background: colors.segmented_button_checkbox_item[mode].bg.active
      },
      disabled: {
        background: colors.segmented_button.bg.disabled
      }
    },
    unchecked: {
      enabled: {
        background: colors.segmented_button_radio_item.bg.enabled,
        color: colors.segmented_button_radio_item.text.enabled,
        border: colors.segmented_button.bg.enabled
      },
      hover: {
        background: colors.segmented_button_radio_item.bg.hover
      },
      active: {
        background: colors.segmented_button_radio_item.bg.active
      },
      disabled: {
        border: colors.segmented_button_radio_item.border.disabled_selected,
        color: colors.segmented_button_radio_item.text.disabled
      }
    },
    ...focus({ colors, effects })
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
    padding: '1px 8px'
  },
  large: {
    padding: '5px 8px'
  }
}
