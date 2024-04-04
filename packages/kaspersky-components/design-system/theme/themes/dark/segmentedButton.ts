import {
  SegmentedButtonMode as Mode,
  SegmentedButtonColorConfig as ColorConfig,
  SegmentedButtonSize as Size,
  SegmentedButtonSizeConfig as SizeConfig
} from '@src/segmented-button/types'
import {
  segmentedButtonSize as defaultSegmentedButtonSize,
  segmentedButton as defaultSegmentedButton
} from '../light/segmentedButton'
import { ComponentThemeContext } from '../config'

export const segmentedButton = ({ colors }: ComponentThemeContext): Record<Mode, ColorConfig> => (
  defaultSegmentedButton({ colors })
)

export const segmentedButtonSize: Record<Size, SizeConfig> = defaultSegmentedButtonSize
