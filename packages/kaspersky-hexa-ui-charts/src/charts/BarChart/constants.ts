export const BAR_CHART_SIZE_CONFIG = {
  large: {
    barWidth: 32,
    cornerRadius: 8,
    distanceBetweenBar: { min: 8, max: 32 },
    distanceBetweenBarGroup: { min: 16, max: 32 },
    distanceBetweenBarInGroup: 8,
    axisFontSize: 14,
    tickLetterSize: 7.4,
    padding: { min: 8, max: 32 }
  },
  medium: {
    barWidth: 24,
    cornerRadius: 4,
    distanceBetweenBar: { min: 8, max: 24 },
    distanceBetweenBarGroup: { min: 16, max: 24 },
    distanceBetweenBarInGroup: 6,
    axisFontSize: 12,
    tickLetterSize: 6.4,
    padding: { min: 8, max: 24 }
  },
  small: {
    barWidth: 16,
    cornerRadius: 2,
    distanceBetweenBar: { min: 8, max: 16 },
    distanceBetweenBarGroup: { min: 16, max: 16 },
    distanceBetweenBarInGroup: 4,
    axisFontSize: 10,
    tickLetterSize: 6.4,
    padding: { min: 8, max: 16 }
  }
} as const

export type BarChartSize = keyof typeof BAR_CHART_SIZE_CONFIG;

export const TIMELINE_BAR_MIN_WIDTH = 4

export const TIMELINE_BAR_SIZE_CONFIG = {
  large: {
    minWidth: 32,
    cornerRadius: 8,
    gap: 8
  },
  medium: {
    minWidth: 24,
    cornerRadius: 4,
    gap: 4
  },
  small: {
    minWidth: 9,
    cornerRadius: 2,
    gap: 2
  },
  extraSmall: {
    minWidth: 4,
    cornerRadius: 0,
    gap: 1
  }
} as const

export type TimelineBarSizeConfig = typeof TIMELINE_BAR_SIZE_CONFIG[keyof typeof TIMELINE_BAR_SIZE_CONFIG]
