import { button as defaultButtonCreator, buttonSize as defaultButtonSize } from '../light/button'
import {
  ButtonMode as Type,
  ButtonColorConfig as Scope,
  ButtonSize as Size,
  ButtonSizeConfig as SizeConfig
} from '../../../../src/button/types'
import { ComponentThemeContext } from '../config'

export const button = ({ colors }: ComponentThemeContext): Record<Type, Scope> => {
  const defaultButton = defaultButtonCreator({ colors })

  return {
    ...defaultButton,
    primaryBlue: {
      ...defaultButton.primaryBlue,
      normal: {
        ...defaultButton.primaryBlue.normal,
        color: colors.fixedNeutralColors.fixedneutralcolor_primarywhite
      },
      disabled: {
        background: colors.elements.seporator,
        color: colors.textIconsElements.disabled,
        border: 'none'
      }
    },
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
      },
      focus: {
        background: colors.bg['base-invert'],
        border: `0 0 0 4px ${colors.mainInteractFocus}`
      },
      disabled: {
        background: colors.elements.seporator,
        color: colors.textIconsElements.disabled,
        border: 'none'
      }
    },
    secondary: {
      ...defaultButton.secondary,
      normal: {
        background: 'transparent',
        color: colors.textIconsElements.primary,
        border: `0 0 0 1px ${colors.elements.seporatorbold}`
      },
      hover: {
        background: colors.elements.seporator
      },
      active: {
        background: colors.elements.seporatorbold,
        border: `0 0 0 1px ${colors.elements.seporatorbold}`
      },
      focus: {
        background: colors.elements.seporatorbold,
        border: `0 0 0 4px ${colors.mainInteractFocus}`
      },
      disabled: {
        background: colors.elements.seporator,
        color: colors.textIconsElements.disabled,
        border: `0 0 0 1px ${colors.elements.seporator}`
      }
    },
    tertiary: {
      ...defaultButton.tertiary,
      normal: {
        background: 'transparent',
        color: colors.textIconsElements.primary,
        border: 'none'
      },
      hover: {
        background: colors.elements.seporator
      },
      active: {
        background: colors.elements.seporatorbold,
        border: 'none'
      },
      focus: {
        background: colors.elements.seporatorbold,
        border: `0 0 0 4px ${colors.mainInteractFocus}`
      },
      disabled: {
        background: 'transparent',
        color: colors.textIconsElements.disabled,
        border: 'none'
      }
    },
    invertedPrimary: {
      ...defaultButton.invertedPrimary
    },
    invertedSecondary: {
      ...defaultButton.invertedSecondary
    },
    invertedTertiary: {
      ...defaultButton.invertedTertiary
    }
  }
}

export const buttonSize: Record<Size, SizeConfig> = {
  ...defaultButtonSize
}
