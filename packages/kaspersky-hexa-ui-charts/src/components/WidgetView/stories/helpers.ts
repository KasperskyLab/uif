import { IChartData, IStackedChartData } from '../../../types/chartData'
import { LegendItemType, TLegendItem } from '../../../widgets/Legend'

export const toLegendItemsFromStackedSeries = (data: IStackedChartData): TLegendItem[] => {
  return data.map((series) => ({
    kind: LegendItemType.Row,
    title: series.name,
    tooltip: series.name,
    color: series.color,
    value: series.data.reduce((sum, point) => sum + point.value, 0),
    payload: series
  }))
}

export const toLegendItemsFromPieData = (data: IChartData): TLegendItem[] => {
  return data.map((point) => ({
    kind: LegendItemType.Row,
    title: formatMetric(point.metric),
    tooltip: formatMetric(point.metric),
    color: point.color,
    value: point.value,
    payload: point
  }))
}

export const formatMetric = (metric: string | number | Date): string => {
  if (metric instanceof Date) {
    return metric.toLocaleDateString()
  }

  return String(metric)
}

