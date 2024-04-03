import { ComponentThemeContext } from '../config'
import {
  ActionButtonMode,
  ActionButtonColorConfig,
  ActionButtonSize,
  ActionButtonSizeConfig
} from '@src/action-button/types'
import { SPACES } from '../variables'
import { focus } from '@design-system/tokens/focus'

export const actionButton = ({
  colors
}: ComponentThemeContext): Record<ActionButtonMode, ActionButtonColorConfig> => ({
  ghost: {
    normal: {
      text: colors.textIconsElements.secondary,
      background: colors.bg.transparent
    },
    hover: {
      background: colors.elements.separator
    },
    active: {
      background: colors.elements['separator-bold']
    },
    disabled: {
      text: colors.textIconsElements.disabled
    },
    ...focus({ colors })
  },
  filled: {
    normal: {
      text: colors.textIconsElements.secondary,
      background: colors.elements.separator
    },
    hover: {
      background: colors.elements['separator-bold']
    },
    active: {
      background: colors.elements.line
    },
    disabled: {
      text: colors.textIconsElements.disabled
    },
    ...focus({ colors })
  },
  ghostInverted: {
    normal: {
      text: colors.textIconsElements['secondary-invert'],
      background: colors.bg.transparent
    },
    hover: {
      background: colors.elements['separator-invert']
    },
    active: {
      background: colors.elements['separator-bold-invert']
    },
    disabled: {
      text: colors.textIconsElements['disabled-invert']
    },
    ...focus({ colors })
  },
  filledInverted: {
    normal: {
      text: colors.textIconsElements['secondary-invert'],
      background: colors.elements['separator-invert']
    },
    hover: {
      background: colors.elements['separator-bold-invert']
    },
    active: {
      background: colors.elements['line-invert']
    },
    disabled: {
      text: colors.textIconsElements['disabled-invert']
    },
    ...focus({ colors })
  }
})

export const actionButtonSize: Record<ActionButtonSize, ActionButtonSizeConfig> = {
  small: {
    padding: `${SPACES[1]}px ${SPACES[2]}px`,
    gap: `${SPACES[1]}px`,
    paddingLabel: `${SPACES[1]}px ${SPACES[2]}px`,
    paddingIcon: `${SPACES[1]}px`
  },
  medium: {
    padding: `0 ${SPACES[2]}px 0 0`,
    gap: `${SPACES[1]}px`,
    paddingLabel: `0 ${SPACES[2]}px`,
    paddingIcon: '0'
  },
  large: {
    padding: `0 ${SPACES[2]}px`,
    gap: `${SPACES[2]}px`,
    paddingLabel: `0 ${SPACES[2]}px`,
    paddingIcon: `${SPACES[1]}px`
  }
}
