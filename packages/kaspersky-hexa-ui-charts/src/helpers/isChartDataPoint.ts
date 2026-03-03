import { IChartData, IChartDataPoint } from '../types/chartData'

export function isChartData<T = unknown> (data: unknown): data is IChartData<T> {
  if (!Array.isArray(data)) {
    return false
  }

  if (data.length === 0) {
    return true
  }

  const bunch = data[0]

  return isChartDataPoint(bunch)
}

export function isChartDataPoint<T = unknown> (data: unknown): data is IChartDataPoint<T> {
  return !!data && typeof data === 'object' && 'value' in data && 'metric' in data
}
