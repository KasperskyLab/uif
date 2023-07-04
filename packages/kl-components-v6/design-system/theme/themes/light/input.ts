import {
  InputColorConfig,
  InputSizeConfig
} from '../../../../src/input/types'
import { ComponentThemeContext } from '../config'
import { SPACES, BORDER_RADIUS } from '../variables'
import { getTextSizes, TextTypes } from './typography'

export const input = ({ colors }: ComponentThemeContext): InputColorConfig => {
  return {
    normal: {
      placeholderColor: colors.textIconsElements.secondary2,
      color: colors.textIconsElements.primary,
      background: colors.bg.base,
      outline: colors.elements.seporatorbold
    },
    hover: {
      outline: colors.defaultPalette.marina300
    },
    focus: {
      outline: colors.defaultPalette.marina300
    },
    disabled: {
      color: colors.textIconsElements.disabled,
      background: colors.elements.seporator,
      outline: 'transparent'
    },
    readonly: {
      color: colors.textIconsElements.secondary,
      background: colors.elements.seporator,
      outline: 'transparent'
    },
    negative: {
      outline: colors.criticalitystatuses.high
    },
    positive: {
      outline: colors.criticalitystatuses.positive
    }
  }
}

export const inputSize: InputSizeConfig = {
  large: {
    padding: `${SPACES[5]}px ${SPACES[4]}px`,
    height: '40px',
    borderRadius: `${SPACES[4]}px`,
    ...getTextSizes(TextTypes.BTR3)
  },
  medium: {
    padding: `${SPACES[3]}px ${SPACES[4]}px`,
    height: '32px',
    borderRadius: `${BORDER_RADIUS[4]}px`,
    ...getTextSizes(TextTypes.BTR3)
  },
  small: {
    padding: `${SPACES[2]}px ${SPACES[4]}px`,
    height: '24px',
    borderRadius: `${BORDER_RADIUS[2]}px`,
    ...getTextSizes(TextTypes.BTR4)
  }
}
