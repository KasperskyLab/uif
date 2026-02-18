import { getTextSizes } from '@design-system/tokens'
import { focus } from '@design-system/tokens/focus'
import {
  SegmentedControlColorConfig as ColorConfig,
  SegmentedControlSize as Size,
  SegmentedControlSizeConfig as SizeConfig
} from '@src/segmented-control/types'

import { TextTypes } from '@kaspersky/hexa-ui-core/typography/js'

import { ComponentThemeContext } from '../config'

export const segmentedControl = ({ colors, effects }: ComponentThemeContext): ColorConfig => {
  return {
    bar: {
      background: colors.segmented_control.bg.enabled,
      dividerColor: colors.divider.bg.light
    },
    button: {
      enabled: {
        background: colors.segmented_control.bg.enabled,
        color: colors.segmented_control_item.text.enabled
      },
      hover: {
        color: colors.segmented_control_item.text.hover
      },
      active: {
        background: colors.segmented_control_item.bg.enabled_selected,
        border: colors.segmented_control_item.border.enabled_selected
      },
      disabled: {
        background: colors.segmented_control_item.bg.disabled,
        color: colors.segmented_control_item.text.disabled
      },
      ...focus({ effects })
    }
  }
}

export const segmentedControlSize: Record<Size, SizeConfig> = {
  small: {
    padding: '0 8px',
    height: '20px',
    radius: '4px',
    ...getTextSizes(TextTypes.BTM4)
  },
  medium: {
    padding: '0 10px',
    height: '24px',
    radius: '4px',
    ...getTextSizes(TextTypes.BTM3)
  },
  large: {
    padding: '0 10px',
    height: '32px',
    radius: '8px',
    ...getTextSizes(TextTypes.BTM3)
  }
}
