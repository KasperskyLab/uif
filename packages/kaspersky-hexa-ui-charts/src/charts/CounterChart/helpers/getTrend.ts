import round from 'lodash/round'

export function getTrend (current: number, previous: number, precision = 2): string {
  if (current === previous) {
    return '0 %'
  }

  if (previous === 0) {
    return '- %'
  }

  const trend = round(((current - previous) / previous) * 100, precision)
  return `${trend} %`
}
