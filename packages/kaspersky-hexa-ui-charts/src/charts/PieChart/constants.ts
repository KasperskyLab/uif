export const PIE_CHART_CORNER_RADIUS = 4
export const PIE_CHART_INNER_RADIUS_RATIO = 0.6
export const PIE_CHART_INNER_PAD_ANGLE = 0
export const PIE_CHART_RADIUS_HOVER_INCREASE = 10

export const PIE_CHART_SIZE_CONFIG = {
  large: {
    dimension: 180,
    innerRadiusRatio: 0.6,
    cornerRadius: 4,
    outlineWidth: 2
  },
  medium: {
    dimension: 120,
    innerRadiusRatio: 0.64,
    cornerRadius: 4,
    outlineWidth: 1.4
  },
  small: {
    dimension: 80,
    innerRadiusRatio: 0.75,
    cornerRadius: 2,
    outlineWidth: 1
  }
} as const

export type PieChartSize = keyof typeof PIE_CHART_SIZE_CONFIG;

export const PIE_CHART_SIZE_BREAKPOINTS = {
  large: PIE_CHART_SIZE_CONFIG.large.dimension,
  medium: PIE_CHART_SIZE_CONFIG.medium.dimension
} as const

export const PIE_CHART_ZERO_PADDING = { top: 0, right: 0, bottom: 0, left: 0 }
