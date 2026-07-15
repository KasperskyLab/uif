import type { VictoryBarProps } from 'victory'

import { BAR_CHART_SIZE_CONFIG, BarChartSize, TIMELINE_BAR_SIZE_CONFIG, TimelineBarSizeConfig } from './constants'

export const getBarChartCornerRadius = (cornerRadius: number): VictoryBarProps['cornerRadius'] => ({
  topLeft: cornerRadius,
  topRight: cornerRadius
})

export const getTimelineBarSizeConfig = (barWidth: number): TimelineBarSizeConfig => {
  if (barWidth >= TIMELINE_BAR_SIZE_CONFIG.large.minWidth) {
    return TIMELINE_BAR_SIZE_CONFIG.large
  }

  if (barWidth >= TIMELINE_BAR_SIZE_CONFIG.medium.minWidth) {
    return TIMELINE_BAR_SIZE_CONFIG.medium
  }

  if (barWidth >= TIMELINE_BAR_SIZE_CONFIG.small.minWidth) {
    return TIMELINE_BAR_SIZE_CONFIG.small
  }

  return TIMELINE_BAR_SIZE_CONFIG.extraSmall
}

export const getTimelineBarSizeConfigByAvailableWidth = (
  availableWidth: number
): TimelineBarSizeConfig => {
  if (availableWidth - TIMELINE_BAR_SIZE_CONFIG.large.gap >= TIMELINE_BAR_SIZE_CONFIG.large.minWidth) {
    return TIMELINE_BAR_SIZE_CONFIG.large
  }

  if (availableWidth - TIMELINE_BAR_SIZE_CONFIG.medium.gap >= TIMELINE_BAR_SIZE_CONFIG.medium.minWidth) {
    return TIMELINE_BAR_SIZE_CONFIG.medium
  }

  if (availableWidth - TIMELINE_BAR_SIZE_CONFIG.small.gap >= TIMELINE_BAR_SIZE_CONFIG.small.minWidth) {
    return TIMELINE_BAR_SIZE_CONFIG.small
  }

  return TIMELINE_BAR_SIZE_CONFIG.extraSmall
}

export const getTimelineBarGap = (barWidth: number): number => {
  return getTimelineBarSizeConfig(barWidth).gap
}

export const getTimelineBarCornerRadius = (barWidth: number, size?: BarChartSize): VictoryBarProps['cornerRadius'] => {
  const cornerRadius = size
    ? BAR_CHART_SIZE_CONFIG[size].cornerRadius
    : getTimelineBarSizeConfig(barWidth).cornerRadius

  return getBarChartCornerRadius(Math.min(cornerRadius, barWidth / 2))
}

