import { CardColorConfig, CardSize, CardMode, CardSizeConfig } from '@src/card/types'

import { ComponentThemeContext } from '../config'

export const card = ({ colors }: ComponentThemeContext): Record<CardMode, CardColorConfig> => ({
  base: {
    enabled: {
      background: colors.card.base.bg.enabled,
      border: colors.card.base.border.enabled
    },
    hover: {
      background: colors.card.base.bg.hover,
      border: colors.card.base.border.hover
    },
    active: {
      background: colors.card.base.bg.active,
      border: colors.card.base.border.active
    }
  },
  filled: {
    enabled: {
      background: colors.card.filled.bg.enabled,
      border: colors.card.filled.border.enabled
    },
    hover: {
      background: colors.card.filled.bg.hover,
      border: colors.card.filled.border.hover
    },
    active: {
      background: colors.card.filled.bg.active,
      border: colors.card.filled.border.active
    }
  },
  selected: {
    enabled: {
      background: colors.card.selected.bg.enabled,
      border: colors.card.selected.border.enabled
    },
    hover: {
      background: colors.card.selected.bg.hover,
      border: colors.card.selected.border.hover
    },
    active: {
      background: colors.card.selected.bg.active,
      border: colors.card.selected.border.active
    }
  }
})

export const cardSize: Record<CardSize, CardSizeConfig> = {
  small: {
    padding: '8px'
  },
  medium: {
    padding: '16px'
  },
  large: {
    padding: '24px'
  }
}
