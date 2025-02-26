import { focus } from '@design-system/css-configs/tokens/focus'
import { ComponentContext } from '@design-system/css-configs/types'
import { getTextSizes } from '@design-system/tokens/typography'
import {
  ButtonMode as Type,
  ButtonColorConfig as Scope,
  ButtonSize as Size,
  ButtonSizeConfig as SizeConfig
} from '@src/button/types'

import { TextTypes } from '@kaspersky/hexa-ui-core/typography/js'

import { BORDER_RADIUS, SPACES } from '../../theme/themes/variables'

export const button = ({ effects }: ComponentContext): Record<Type, Scope> => {
  const defaultDisabled = {
    background: 'var(--button--primary--bg--disabled)',
    color: 'var(--button--primary--text--disabled)'
  }

  return {
    primary: {
      enabled: {
        background: 'var(--button--primary--bg--enabled)',
        color: 'var(--button--primary--text--enabled)',
        border: 'none'
      },
      hover: {
        background: 'var(--button--primary--bg--hover)'
      },
      active: {
        background: 'var(--button--primary--bg--active)'
      },
      disabled: {
        ...defaultDisabled
      },
      ...focus({ effects })
    },
    secondary: {
      enabled: {
        background: 'var(--button--secondary--bg--enabled)',
        color: 'var(--button--secondary--text--enabled)',
        border: '1px solid var(--button--secondary--border--enabled)'
      },
      hover: {
        background: 'var(--button--secondary--bg--hover)'
      },
      active: {
        background: 'var(--button--secondary--bg--active)'
      },
      disabled: {
        ...defaultDisabled,
        border: '1px solid transparent'
      },
      ...focus({ effects })
    },
    tertiary: {
      enabled: {
        background: 'var(--button--tertiary--bg--enabled)',
        color: 'var(--button--tertiary--text--enabled)',
        border: 'none'
      },
      hover: {
        background: 'var(--button--tertiary--bg--hover)'
      },
      active: {
        background: 'var(--button--tertiary--bg--active)'
      },
      disabled: {
        ...defaultDisabled
      },
      ...focus({ effects })
    },
    dangerFilled: {
      enabled: {
        background: 'var(--button--destructive--bg--enabled)',
        color: 'var(--button--destructive--text--enabled)',
        border: 'none'
      },
      hover: {
        background: 'var(--button--destructive--bg--hover)'
      },
      active: {
        background: 'var(--button--destructive--bg--active)'
      },
      disabled: {
        ...defaultDisabled
      },
      ...focus({ effects })
    },
    dangerOutlined: {
      enabled: {
        background: 'var(--button--destructive_secondary--bg--enabled)',
        color: 'var(--button--destructive_secondary--text--enabled)',
        border: '1px solid var(--button--destructive_secondary--border--enabled)'
      },
      hover: {
        background: 'var(--button--destructive_secondary--bg--hover)'
      },
      active: {
        background: 'var(--button--destructive_secondary--bg--active)'
      },
      disabled: {
        ...defaultDisabled,
        border: '1px solid transparent'
      },
      ...focus({ effects })
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
