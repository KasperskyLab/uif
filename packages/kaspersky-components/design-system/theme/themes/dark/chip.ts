import { ComponentThemeContext } from '../config'
import { ChipColorConfig } from '@src/chip/types'
import { chip as defaultChip, chipSize as defaultChipSize } from '../light/chip'

export const chip = ({ colors }: ComponentThemeContext): ChipColorConfig =>
  defaultChip({ colors })

export const chipSize = defaultChipSize
