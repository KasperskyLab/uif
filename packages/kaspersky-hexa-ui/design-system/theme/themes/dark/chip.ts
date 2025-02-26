import { ChipColorConfig } from '@src/chip/types'

import { ComponentThemeContext } from '../config'
import { chip as defaultChip, chipSize as defaultChipSize } from '../light/chip'

export const chip = ({ colors, effects }: ComponentThemeContext): ChipColorConfig =>
  defaultChip({ colors, effects })

export const chipSize = defaultChipSize
