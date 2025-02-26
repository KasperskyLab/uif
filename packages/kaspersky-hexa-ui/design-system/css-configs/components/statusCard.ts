import {
  StatusCardColorConfig,
  StatusCardMode,
  StatusCardSize,
  StatusCardSizeConfig
} from '@src/status-card/types'

export const statusCard = (): Record<StatusCardMode, StatusCardColorConfig> => ({
  error: {
    background: 'var(--status_card--bg--error)',
    border: 'var(--status_card--border--error)',
    color: 'var(--status_card--text--error)',
    icon: 'var(--status_card--bg--icon)',
    image: 'var(--status_card--bg--error_hexagon)'
  },
  critical: {
    background: 'var(--status_card--bg--critical)',
    border: 'var(--status_card--border--critical)',
    color: 'var(--status_card--text--critical)',
    icon: 'var(--status_card--bg--icon)',
    image: 'var(--status_card--bg--critical_hexagon)'
  },
  success: {
    background: 'var(--status_card--bg--success)',
    border: 'var(--status_card--border--success)',
    color: 'var(--status_card--text--success)',
    icon: 'var(--status_card--bg--icon)',
    image: 'var(--status_card--bg--success_hexagon)'
  },
  warning: {
    background: 'var(--status_card--bg--warning)',
    border: 'var(--status_card--border--warning)',
    color: 'var(--status_card--text--warning)',
    icon: 'var(--status_card--bg--icon)',
    image: 'var(--status_card--bg--warning_hexagon)'
  }
})

export const statusCardSize: Record<StatusCardSize, StatusCardSizeConfig> = {
  small: {
    imageWidth: 50,
    imageHeight: 48,
    iconSize: 16
  },
  medium: {
    imageWidth: 104,
    imageHeight: 100,
    iconSize: 32
  },
  large: {
    imageWidth: 150,
    imageHeight: 140,
    iconSize: 54
  }
}
