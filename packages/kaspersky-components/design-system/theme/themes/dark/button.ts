import { button as defaultButtonCreator, buttonSize as defaultButtonSize } from '../light/button'
import {
  ButtonMode as Type,
  ButtonColorConfig as Scope,
  ButtonSize as Size,
  ButtonSizeConfig as SizeConfig
} from '@src/button/types'
import { ComponentThemeContext } from '../config'

export const button = ({ colors }: ComponentThemeContext): Record<Type, Scope> => {
  const defaultButton = defaultButtonCreator({ colors })

  return {
    ...defaultButton,
    primary: {
      ...defaultButton.primary,
      normal: {
        ...defaultButton.primary.normal,
        color: colors.textIconsElements['primary-invert']
      }
    },
    /** @deprecated  */
    primaryBlue: {
      ...defaultButton.primaryBlue,
      normal: {
        ...defaultButton.primaryBlue.normal,
        color: colors.fixedNeutralColors.fixedneutralcolor_primarywhite
      }
    },
    /** @deprecated  */
    primaryBlack: {
      ...defaultButton.primaryBlack,
      normal: {
        background: colors.bg['alternative2-invert'],
        color: colors.textIconsElements['primary-invert'],
        border: 'none'
      },
      hover: {
        background: colors.bg['base-invert']
      },
      active: {
        background: colors.textIconsElements.secondary
      }
    }
  }
}

export const buttonSize: Record<Size, SizeConfig> = {
  ...defaultButtonSize
}
