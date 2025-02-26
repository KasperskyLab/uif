import { CardColorConfig, CardSize, CardMode, CardSizeConfig } from '@src/card/types'

export const card = (): Record<CardMode, CardColorConfig> => ({
  base: {
    enabled: {
      background: 'var(--card--base--bg--enabled)',
      color: 'var(--card_title--text)',
      border: 'var(--card--base--border--enabled)'
    },
    hover: {
      background: 'var(--card--base--bg--hover)',
      border: 'var(--card--base--border--hover)'
    },
    active: {
      background: 'var(--card--base--bg--active)',
      border: 'var(--card--base--border--active)'
    }
  },
  filled: {
    enabled: {
      background: 'var(--card--filled--bg--enabled)',
      color: 'var(--card_title--text)',
      border: 'var(--card--filled--border--enabled)'
    },
    hover: {
      background: 'var(--card--filled--bg--hover)',
      border: 'var(--card--filled--border--hover)'
    },
    active: {
      background: 'var(--card--filled--bg--active)',
      border: 'var(--card--filled--border--active)'
    }
  },
  selected: {
    enabled: {
      background: 'var(--card--selected--bg--enabled)',
      color: 'var(--card_title--text)',
      border: 'var(--card--selected--border--enabled)'
    },
    hover: {
      background: 'var(--card--selected--bg--hover)',
      border: 'var(--card--selected--border--hover)'
    },
    active: {
      background: 'var(--card--selected--bg--active)',
      border: 'var(--card--selected--border--active)'
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
