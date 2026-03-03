import { IStackedChartData, IStackedChartDataPoint } from '../types/chartData'

export function isStackedChartData<T = unknown> (data: unknown): data is IStackedChartData<T> {
  if (!Array.isArray(data)) {
    return false
  }

  if (data.length === 0) {
    return true
  }

  const bunch = data[0]

  return isStackedChartDataPoint(bunch)
}

export function isStackedChartDataPoint<T = unknown> (data: unknown): data is IStackedChartDataPoint<T> {
  return !!data && typeof data === 'object' && 'name' in data && 'data' in data
}
