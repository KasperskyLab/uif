import { focus } from '@design-system/tokens/focus'
import {
  ActionButtonMode,
  ActionButtonColorConfig,
  ActionButtonSize,
  ActionButtonSizeConfig
} from '@src/action-button/types'

import { ComponentThemeContext } from '../config'
import { SPACES } from '../variables'

export const actionButton = ({ colors, effects }: ComponentThemeContext): Record<ActionButtonMode, ActionButtonColorConfig> => ({
  ghost: {
    enabled: {
      text: colors.action_button.text.ghost.enabled,
      icon: colors.action_button.icon.ghost.enabled,
      background: colors.action_button.bg.ghost.enabled
    },
    hover: {
      text: colors.action_button.text.ghost.hover,
      icon: colors.action_button.icon.ghost.hover,
      background: colors.action_button.bg.ghost.hover
    },
    active: {
      text: colors.action_button.text.ghost.active,
      icon: colors.action_button.icon.ghost.active,
      background: colors.action_button.bg.ghost.active
    },
    disabled: {
      text: colors.action_button.text.ghost.disabled,
      icon: colors.action_button.icon.ghost.disabled,
      background: colors.action_button.bg.ghost.disabled
    },
    ...focus({ colors, effects })
  },
  filled: {
    enabled: {
      text: colors.action_button.text.filled.enabled,
      icon: colors.action_button.icon.filled.enabled,
      background: colors.action_button.bg.filled.enabled
    },
    hover: {
      text: colors.action_button.text.filled.hover,
      icon: colors.action_button.icon.filled.hover,
      background: colors.action_button.bg.filled.hover
    },
    active: {
      text: colors.action_button.text.filled.active,
      icon: colors.action_button.icon.filled.active,
      background: colors.action_button.bg.filled.active
    },
    disabled: {
      text: colors.action_button.text.filled.disabled,
      icon: colors.action_button.icon.filled.disabled,
      background: colors.action_button.bg.filled.disabled
    },
    ...focus({ colors, effects })
  },
  ghostInverted: {
    enabled: {
      text: colors.action_button.text.ghost_inverted.enabled,
      icon: colors.action_button.icon.ghost_inverted.enabled,
      background: colors.action_button.bg.ghost_inverted.enabled
    },
    hover: {
      text: colors.action_button.text.ghost_inverted.hover,
      icon: colors.action_button.icon.ghost_inverted.hover,
      background: colors.action_button.bg.ghost_inverted.hover
    },
    active: {
      text: colors.action_button.text.ghost_inverted.active,
      icon: colors.action_button.icon.ghost_inverted.active,
      background: colors.action_button.bg.ghost_inverted.active
    },
    disabled: {
      text: colors.action_button.text.ghost_inverted.disabled,
      icon: colors.action_button.icon.ghost_inverted.disabled,
      background: colors.action_button.bg.ghost_inverted.disabled
    },
    ...focus({ colors, effects })
  },
  filledInverted: {
    enabled: {
      text: colors.action_button.text.filled_inverted.enabled,
      icon: colors.action_button.icon.filled_inverted.enabled,
      background: colors.action_button.bg.filled_inverted.enabled
    },
    hover: {
      text: colors.action_button.text.filled_inverted.hover,
      icon: colors.action_button.icon.filled_inverted.hover,
      background: colors.action_button.bg.filled_inverted.hover
    },
    active: {
      text: colors.action_button.text.filled_inverted.active,
      icon: colors.action_button.icon.filled_inverted.active,
      background: colors.action_button.bg.filled_inverted.active
    },
    disabled: {
      text: colors.action_button.text.filled_inverted.disabled,
      icon: colors.action_button.icon.filled_inverted.disabled,
      background: colors.action_button.bg.filled_inverted.disabled
    },
    ...focus({ colors, effects })
  },
  onLight: {
    enabled: {
      text: colors.action_button.text.on_light.enabled,
      icon: colors.action_button.icon.on_light.enabled,
      background: colors.action_button.bg.on_light.enabled
    },
    hover: {
      text: colors.action_button.text.on_light.hover,
      icon: colors.action_button.icon.on_light.hover,
      background: colors.action_button.bg.on_light.hover
    },
    active: {
      text: colors.action_button.text.on_light.active,
      icon: colors.action_button.icon.on_light.active,
      background: colors.action_button.bg.on_light.active
    },
    disabled: {
      text: colors.action_button.text.on_light.disabled,
      icon: colors.action_button.icon.on_light.disabled,
      background: colors.action_button.bg.on_light.disabled
    },
    ...focus({ colors, effects })
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
