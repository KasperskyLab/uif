import {
  ButtonMode as Type,
  ButtonColorConfig as Scope,
  ButtonSize as Size,
  ButtonSizeConfig as SizeConfig
} from '@src/button/types'
import { ComponentThemeContext } from '../config'
import { BORDER_RADIUS, SPACES } from '../variables'
import { getTextSizes, TextTypes } from './typography'
import { focus } from '@design-system/tokens/focus'

export const button = ({ colors }: ComponentThemeContext): Record<Type, Scope> => {
  const defaultDisabled = {
    background: colors.elements['separator-solid'],
    color: colors.textIconsElements['disabled-solid'],
    border: 'none'
  }

  return {
    primary: {
      normal: {
        background: colors.mainInteractPrimary,
        color: colors.foregroundInvertedColor,
        border: 'none'
      },
      hover: {
        background: colors.mainInteractSecondary
      },
      active: {
        background: colors.mainInteractTertiary
      },
      disabled: {
        ...defaultDisabled
      },
      ...focus({ colors })
    },
    secondary: {
      normal: {
        background: colors.bg.base,
        color: colors.textIconsElements.primary,
        border: `1px solid ${colors.elements['line-solid']}`
      },
      hover: {
        background: colors.elements['separator-solid']
      },
      active: {
        background: colors.elements['separator-bold-solid']
      },
      disabled: {
        ...defaultDisabled
      },
      ...focus({ colors })
    },
    tertiary: {
      normal: {
        background: 'transparent',
        color: colors.textIconsElements.primary,
        border: 'none'
      },
      hover: {
        background: colors.elements['separator-solid']
      },
      active: {
        background: colors.elements['separator-bold-solid']
      },
      disabled: {
        ...defaultDisabled
      },
      ...focus({ colors })
    },
    dangerFilled: {
      normal: {
        background: colors.dangerInteractPrimary,
        color: colors.foregroundInvertedColor,
        border: 'none'
      },
      hover: {
        background: colors.dangerInteractSecondary
      },
      active: {
        background: colors.dangerInteractTertiary
      },
      disabled: {
        ...defaultDisabled
      },
      ...focus({ colors })
    },
    dangerOutlined: {
      normal: {
        background: 'transparent',
        color: colors.dangerInteract.primary,
        border: `1px solid ${colors.dangerInteract.primary}`
      },
      hover: {
        background: colors.dangerInteract['primary-invert']
      },
      active: {
        background: colors.dangerInteract['secondary-invert']
      },
      disabled: {
        ...defaultDisabled
      },
      ...focus({ colors })
    },
    /** @deprecated  */
    primaryBlue: {
      normal: {
        background: colors.mainInteractPrimary,
        color: colors.foregroundInvertedColor,
        border: 'none'
      },
      hover: {
        background: colors.mainInteractSecondary,
        border: 'none'
      },
      active: {
        background: colors.mainInteractTertiary,
        border: 'none'
      },
      disabled: {
        ...defaultDisabled
      },
      ...focus({ colors })
    },
    /** @deprecated  */
    primaryBlack: {
      normal: {
        background: colors.bg['base-invert'],
        color: colors.foregroundInvertedColor,
        border: 'none'
      },
      hover: {
        background: colors.bg['alternative2-invert']
      },
      active: {
        background: colors.textIconsElements.secondary
      },
      disabled: {
        ...defaultDisabled
      },
      ...focus({ colors })
    },
    /** @deprecated  */
    danger: {
      normal: {
        background: colors.dangerInteractPrimary,
        color: colors.foregroundInvertedColor,
        border: 'none'
      },
      hover: {
        background: colors.dangerInteractSecondary,
        border: 'none'
      },
      active: {
        background: colors.dangerInteractTertiary,
        border: 'none'
      },
      disabled: {
        ...defaultDisabled
      },
      ...focus({ colors })
    },
    /** @deprecated  */
    invertedPrimary: {
      normal: {
        background: colors.bg.base,
        color: colors.textIconsElements.primary,
        border: 'none'
      },
      hover: {
        background: colors.bg.alternative2
      },
      active: {
        background: colors.textIconsElements['disabled-invert'],
        color: colors.foregroundInvertedColor,
        border: 'none'
      },
      disabled: {
        ...defaultDisabled
      },
      ...focus({ colors })
    },
    /** @deprecated  */
    invertedSecondary: {
      normal: {
        background: 'transparent',
        color: colors.textIconsElements['primary-invert'],
        border: `0 0 0 1px ${colors.elements['separator-invert']}`
      },
      hover: {
        background: colors.elements['separator-invert']
      },
      active: {
        background: colors.elements['separator-invert'],
        border: `0 0 0 1px ${colors.elements['separator-invert']}`
      },
      disabled: {
        ...defaultDisabled
      },
      ...focus({ colors })
    },
    /** @deprecated  */
    invertedTertiary: {
      normal: {
        background: 'transparent',
        color: colors.textIconsElements['primary-invert'],
        border: 'none'
      },
      hover: {
        background: colors.elements['separator-invert']
      },
      active: {
        background: colors.elements['separator-invert'],
        border: 'none'
      },
      disabled: {
        ...defaultDisabled
      },
      ...focus({ colors })
    }
  }
}

export const buttonSize: Record<Size, SizeConfig> = {
  extraLarge: {
    padding: `${SPACES[5]}px ${SPACES[12]}px`,
    height: `${SPACES[24]}px`,
    minWidth: '100px',
    borderRadius: `${BORDER_RADIUS[4]}px`,
    ...getTextSizes(TextTypes.BTM2)
  },
  large: {
    padding: `${SPACES[4]}px ${SPACES[10]}px`,
    height: `${SPACES[20]}px`,
    minWidth: '84px',
    borderRadius: `${BORDER_RADIUS[4]}px`,
    ...getTextSizes(TextTypes.BTM3)
  },
  medium: {
    padding: `${SPACES[3]}px ${SPACES[6]}px`,
    height: `${SPACES[16]}px`,
    minWidth: '68px',
    borderRadius: `${BORDER_RADIUS[4]}px`,
    ...getTextSizes(TextTypes.BTM3)
  },
  small: {
    padding: `${SPACES[2]}px ${SPACES[4]}px`,
    height: `${SPACES[12]}px`,
    minWidth: '34px',
    borderRadius: `${BORDER_RADIUS[2]}px`,
    ...getTextSizes(TextTypes.BTM4)
  }
}
