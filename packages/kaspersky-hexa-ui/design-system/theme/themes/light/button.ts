import { focus } from '@design-system/tokens/focus'
import { getTextSizes } from '@design-system/tokens/typography'
import {
  ButtonMode as Type,
  ButtonColorConfig as Scope,
  ButtonSize as Size,
  ButtonSizeConfig as SizeConfig
} from '@src/button/types'

import { TextTypes } from '@kaspersky/hexa-ui-core/typography/js'

import { ComponentThemeContext } from '../config'
import { BORDER_RADIUS, SPACES } from '../variables'

export const button = ({ colors, effects }: ComponentThemeContext): Record<Type, Scope> => {
  const defaultDisabled = {
    background: colors.button.primary.bg.disabled,
    color: colors.button.primary.text.disabled,
    border: 'none'
  }

  return {
    primary: {
      enabled: {
        background: colors.button.primary.bg.enabled,
        color: colors.button.primary.text.enabled,
        border: 'none'
      },
      hover: {
        background: colors.button.primary.bg.hover
      },
      active: {
        background: colors.button.primary.bg.active
      },
      disabled: {
        ...defaultDisabled
      },
      ...focus({ colors, effects })
    },
    secondary: {
      enabled: {
        background: colors.button.secondary.bg.enabled,
        color: colors.button.secondary.text.enabled,
        border: `1px solid ${colors.button.secondary.border.enabled}`
      },
      hover: {
        background: colors.button.secondary.bg.hover
      },
      active: {
        background: colors.button.secondary.bg.active
      },
      disabled: {
        ...defaultDisabled
      },
      ...focus({ colors, effects })
    },
    tertiary: {
      enabled: {
        background: colors.button.tertiary.bg.enabled,
        color: colors.button.tertiary.text.enabled,
        border: 'none'
      },
      hover: {
        background: colors.button.tertiary.bg.hover
      },
      active: {
        background: colors.button.tertiary.bg.active
      },
      disabled: {
        ...defaultDisabled
      },
      ...focus({ colors, effects })
    },
    dangerFilled: {
      enabled: {
        background: colors.button.destructive.bg.enabled,
        color: colors.button.destructive.text.enabled,
        border: 'none'
      },
      hover: {
        background: colors.button.destructive.bg.hover
      },
      active: {
        background: colors.button.destructive.bg.active
      },
      disabled: {
        ...defaultDisabled
      },
      ...focus({ colors, effects })
    },
    dangerOutlined: {
      enabled: {
        background: colors.button.destructive_secondary.bg.enabled,
        color: colors.button.destructive_secondary.text.enabled,
        border: `1px solid ${colors.button.destructive_secondary.border.enabled}`
      },
      hover: {
        background: colors.button.destructive_secondary.bg.hover
      },
      active: {
        background: colors.button.destructive_secondary.bg.active
      },
      disabled: {
        ...defaultDisabled
      },
      ...focus({ colors, effects })
    }
  }
}

export const buttonSize: Record<Size, SizeConfig> = {
  extraLarge: {
    padding: `${SPACES[5]}px ${SPACES[12]}px`,
    height: `${SPACES[24]}px`,
    minWidth: '80px',
    borderRadius: `${BORDER_RADIUS[4]}px`,
    ...getTextSizes(TextTypes.BTM2)
  },
  large: {
    padding: `${SPACES[4]}px ${SPACES[10]}px`,
    height: `${SPACES[20]}px`,
    minWidth: '80px',
    borderRadius: `${BORDER_RADIUS[4]}px`,
    ...getTextSizes(TextTypes.BTM3)
  },
  medium: {
    padding: `${SPACES[3]}px ${SPACES[6]}px`,
    height: `${SPACES[16]}px`,
    minWidth: '80px',
    borderRadius: `${BORDER_RADIUS[4]}px`,
    ...getTextSizes(TextTypes.BTM3)
  },
  small: {
    padding: `${SPACES[2]}px ${SPACES[4]}px`,
    height: `${SPACES[12]}px`,
    minWidth: '64px',
    borderRadius: `${BORDER_RADIUS[2]}px`,
    ...getTextSizes(TextTypes.BTM4)
  }
}
