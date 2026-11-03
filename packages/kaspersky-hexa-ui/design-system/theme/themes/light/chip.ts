import { focus } from '@design-system/tokens/focus'
import { Size } from '@design-system/types'
import {
  ChipColorConfig,
  ChipSize,
  ChipSizeConfig
} from '@src/chip/types'

import { ComponentThemeContext } from '../config'

export const chip = ({ colors, effects }: ComponentThemeContext): ChipColorConfig => ({
  enabled: {
    background: colors.chip.bg.enabled,
    color: colors.chip.text.enabled
  },
  hover: {
    background: colors.chip.bg.hover
  },
  active: {
    background: colors.chip.bg.active
  },
  disabled: {
    background: colors.chip.bg.disabled,
    color: colors.chip.text.disabled
  },
  ...focus({ effects })
})

export const chipSize: Record<ChipSize, ChipSizeConfig> = {
  [Size.Medium]: {
    height: '24px',
    padding: '4px 8px'
  },
  [Size.Large]: {
    height: '32px',
    padding: '4px 12px'
  }
}
