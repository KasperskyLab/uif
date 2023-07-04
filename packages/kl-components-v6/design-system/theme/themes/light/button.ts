import {
  ButtonMode as Type,
  ButtonColorConfig as Scope,
  ButtonSize as Size,
  ButtonSizeConfig as SizeConfig
} from '../../../../src/button/types'
import { ComponentThemeContext } from '../config'
import { BORDER_RADIUS, SPACES } from '../variables'
import { getTextSizes, TextTypes } from './typography'

export const button = ({ colors }: ComponentThemeContext): Record<Type, Scope> => ({
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
    focus: {
      background: colors.mainInteractPrimary,
      border: `0 0 0 4px ${colors.mainInteractFocus}`
    },
    disabled: {
      background: colors.elements.seporator,
      color: colors.textIconsElements.disabled,
      border: 'none'
    }
  },
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
    normal: {
      background: 'transparent',
      color: colors.textIconsElements.primary,
      border: `0 0 0 1px ${colors.elements.seporatorbold}`
    },
    hover: {
      background: colors.bg.alternative2
    },
    active: {
      background: colors.elements.seporator,
      border: `0 0 0 1px ${colors.elements.seporatorbold}`
    },
    focus: {
      background: colors.textIconsElements['secondary-invert'],
      border: `0 0 0 4px ${colors.mainInteractFocus}`
    },
    disabled: {
      background: colors.bg.alternative,
      color: colors.textIconsElements.disabled,
      border: `0 0 0 1px ${colors.elements.seporator}`
    }
  },
  tertiary: {
    normal: {
      background: 'transparent',
      color: colors.textIconsElements.primary,
      border: 'none'
    },
    hover: {
      background: colors.bg.alternative2
    },
    active: {
      background: colors.elements.seporator,
      border: 'none'
    },
    focus: {
      background: colors.textIconsElements['secondary-invert'],
      border: `0 0 0 4px ${colors.mainInteractFocus}`
    },
    disabled: {
      background: 'transparent',
      color: colors.textIconsElements.disabled,
      border: 'none'
    }
  },
  danger: {
    normal: {
      background: colors.dangerPrimary,
      color: colors.foregroundInvertedColor,
      border: 'none'
    },
    hover: {
      background: colors.dangerSecondary,
      border: 'none'
    },
    active: {
      background: colors.dangerPressed,
      border: 'none'
    },
    focus: {
      background: colors.dangerPrimary,
      border: `0 0 0 4px ${colors.mainInteractFocus}`
    },
    disabled: {
      background: colors.elements.seporator,
      color: colors.textIconsElements.disabled,
      border: 'none'
    }
  },
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
    focus: {
      background: colors.bg.base,
      border: `0 0 0 4px ${colors.mainInteractFocus}`
    },
    disabled: {
      background: colors.elements['seporatorbold-invert'],
      color: colors.textIconsElements['disabled-invert'],
      border: 'none'
    }
  },
  invertedSecondary: {
    normal: {
      background: 'transparent',
      color: colors.textIconsElements['primary-invert'],
      border: `0 0 0 1px ${colors.elements['seporator-invert']}`
    },
    hover: {
      background: colors.elements['seporator-invert']
    },
    active: {
      background: colors.elements['seporator-invert'],
      border: `0 0 0 1px ${colors.elements['seporator-invert']}`
    },
    focus: {
      background: colors.elements['seporator-invert'],
      border: `0 0 0 4px ${colors.mainInteractFocus}`
    },
    disabled: {
      background: colors.elements['seporatorbold-invert'],
      color: colors.textIconsElements['disabled-invert'],
      border: `0 0 0 1px ${colors.elements['seporator-invert']}`
    }
  },
  invertedTertiary: {
    normal: {
      background: 'transparent',
      color: colors.textIconsElements['primary-invert'],
      border: 'none'
    },
    hover: {
      background: colors.elements['seporator-invert']
    },
    active: {
      background: colors.elements['seporator-invert'],
      border: 'none'
    },
    focus: {
      background: colors.elements['seporator-invert'],
      border: `0 0 0 4px ${colors.mainInteractFocus}`
    },
    disabled: {
      background: 'transparent',
      color: colors.textIconsElements['disabled-invert'],
      border: 'none'
    }
  }
})

export const buttonSize: Record<Size, SizeConfig> = {
  extraLarge: {
    padding: `${SPACES[5]}px ${SPACES[12]}px`,
    height: `${SPACES[24]}px`,
    borderRadius: `${BORDER_RADIUS[4]}px`,
    ...getTextSizes(TextTypes.L1)
  },
  large: {
    padding: `${SPACES[4]}px ${SPACES[10]}px`,
    height: `${SPACES[20]}px`,
    borderRadius: `${BORDER_RADIUS[4]}px`,
    ...getTextSizes(TextTypes.L2)
  },
  medium: {
    padding: `${SPACES[3]}px ${SPACES[6]}px`,
    height: `${SPACES[16]}px`,
    borderRadius: `${BORDER_RADIUS[2]}px`,
    ...getTextSizes(TextTypes.L3)
  },
  small: {
    padding: `${SPACES[2]}px ${SPACES[4]}px`,
    height: `${SPACES[12]}px`,
    borderRadius: `${BORDER_RADIUS[2]}px`,
    ...getTextSizes(TextTypes.L4)
  }
}
