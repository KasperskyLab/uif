import {
  ButtonMode as Type,
  ButtonColorConfig as Scope,
  ButtonSize as Size,
  ButtonSizeConfig as SizeConfig
} from '@src/button/types'

import { ComponentThemeContext } from '../config'
import { button as defaultButton, buttonSize as defaultButtonSize } from '../light/button'

export const button = ({ colors, effects }: ComponentThemeContext): Record<Type, Scope> => defaultButton({ colors, effects })

export const buttonSize: Record<Size, SizeConfig> = defaultButtonSize
