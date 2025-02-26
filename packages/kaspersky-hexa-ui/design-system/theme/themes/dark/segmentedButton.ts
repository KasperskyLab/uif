import {
  SegmentedButtonMode as Mode,
  SegmentedButtonColorConfig as ColorConfig,
  SegmentedButtonSize as Size,
  SegmentedButtonSizeConfig as SizeConfig
} from '@src/segmented-button/types'

import { ComponentThemeContext } from '../config'
import {
  segmentedButtonSize as defaultSegmentedButtonSize,
  segmentedButton as defaultSegmentedButton
} from '../light/segmentedButton'

export const segmentedButton = ({ colors, effects }: ComponentThemeContext): Record<Mode, ColorConfig> =>
  defaultSegmentedButton({ colors, effects })

export const segmentedButtonSize: Record<Size, SizeConfig> = defaultSegmentedButtonSize
