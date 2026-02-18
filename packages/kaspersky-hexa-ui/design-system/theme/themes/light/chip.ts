import { focus } from '@design-system/tokens/focus'
import { Size } from '@design-system/types'
import {
  ChipColorConfig,
  ChipSize,
  ChipSizeConfig
} from '@src/chip/types'

import { ComponentThemeContext } from '../config'
import { SPACES } from '../variables'

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
    height: `${SPACES[12]}px`,
    padding: `${SPACES[2]}px ${SPACES[4]}px`
  },
  [Size.Large]: {
    height: `${SPACES[16]}px`,
    padding: `${SPACES[2]}px ${SPACES[6]}px`
  }
}
