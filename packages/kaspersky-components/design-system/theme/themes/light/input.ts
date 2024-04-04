import { InputColorConfig, InputSizeConfig } from '@src/input/types'
import { ComponentThemeContext } from '../config'
import { SPACES, BORDER_RADIUS } from '../variables'
import { getTextSizes, TextTypes } from './typography'
import { focus } from '@design-system/tokens/focus'

export const input = ({ colors }: ComponentThemeContext): InputColorConfig => {
  return {
    normal: {
      placeholderColor: colors.textIconsElements['secondary2-solid'],
      color: colors.textIconsElements.primary,
      background: colors.bg.base,
      borderColor: colors.elements['line-solid']
    },
    hover: {
      borderColor: colors.mainInteractSecondary
    },
    disabled: {
      color: colors.textIconsElements['disabled-solid'],
      background: colors.elements['separator-solid'],
      borderColor: 'transparent'
    },
    readonly: {
      color: colors.textIconsElements['secondary2-solid']
    },
    invalid: {
      borderColor: colors.dangerInteract.primary
    },
    valid: {
      borderColor: colors.criticalitystatuses.positive
    },
    ...focus({ colors })
  }
}

export const inputSize: InputSizeConfig = {
  medium: {
    padding: `${SPACES[3]}px ${SPACES[6]}px`,
    height: '32px',
    borderRadius: `${BORDER_RADIUS[4]}px`,
    ...getTextSizes(TextTypes.BTR3)
  },
  /** @deprecated. Only 'medium' size allowed */
  large: {
    padding: `${SPACES[5]}px ${SPACES[4]}px`,
    height: '40px',
    borderRadius: `${SPACES[4]}px`,
    ...getTextSizes(TextTypes.BTR3)
  },
  /** @deprecated. Only 'medium' size allowed */
  small: {
    padding: `${SPACES[2]}px ${SPACES[4]}px`,
    height: '24px',
    borderRadius: `${BORDER_RADIUS[2]}px`,
    ...getTextSizes(TextTypes.BTR4)
  }
}
