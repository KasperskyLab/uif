import { ComponentContext } from '@design-system/css-configs/types'
import { focus } from '@design-system/tokens/focus'
import {
  SegmentedButtonColorConfig as ColorConfig,
  SegmentedButtonMode as Mode,
  SegmentedButtonSize as Size,
  SegmentedButtonSizeConfig as SizeConfig
} from '@src/segmented-button/types'

export const segmentedButton = ({ effects }: ComponentContext): Record<Mode, ColorConfig> => {
  const getModeConfig = (mode: Mode): ColorConfig => ({
    checked: {
      enabled: {
        background: `var(--segmented_button_item--selected--${mode}--bg--enabled)`,
        color: `var(--segmented_button_item--selected--${mode}--text--enabled)`,
        border: `var(--segmented_button_item--selected--${mode}--border--enabled)`
      },
      hover: {
        background: `var(--segmented_button_item--selected--${mode}--bg--hover)`
      },
      active: {
        background: `var(--segmented_button_item--selected--${mode}--bg--active)`
      },
      disabled: {
        background: `var(--segmented_button_item--selected--${mode}--bg--disabled)`
      }
    },
    unchecked: {
      enabled: {
        background: 'var(--segmented_button_item--unselected--bg--enabled)',
        color: 'var(--segmented_button_item--unselected--text--enabled)',
        border: 'var(--segmented_button_item--unselected--border--enabled)'
      },
      hover: {
        background: 'var(--segmented_button_item--unselected--bg--hover)'
      },
      active: {
        background: 'var(--segmented_button_item--unselected--bg--active)'
      },
      disabled: {
        border: 'var(--segmented_button_item--unselected--border--disabled)',
        color: 'var(--segmented_button_item--unselected--text--disabled)'
      }
    },
    ...focus({ effects })
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
