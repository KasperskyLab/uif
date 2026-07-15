import { getStableValue } from '@sb/data'
import { add, Duration } from 'date-fns'

import { TimelineBarChartProps } from '../components/TimelineBarChart'

const FIXED_NOW = new Date(2026, 0, 1, 12, 0, 0)

function getDateArrayByRandomValue (
  durationType: keyof Duration,
  maxValue: number,
  total = 40,
  title?: string
) {
  return Array.from({ length: total }).map((_, pointIndex) => {
    const metric = add(FIXED_NOW, { [durationType]: pointIndex })

    return {
      metric,
      value: getStableValue(maxValue, pointIndex),
      originalPayload: metric,
      title: title && ((metric: string) => `${title}${metric}`)
    }
  })
}

export const oneWeekPeriodData = [{
  name: '',
  data: getDateArrayByRandomValue('days', 5, 10)
}]

export const oneWeekPeriodStackedData = [{
  name: 'Main tenant',
  color: 'var(--color-emerald400)',
  data: getDateArrayByRandomValue('days', 20, 10)
}, {
  name: 'Root tenant',
  color: 'var(--color-purple400)',
  data: getDateArrayByRandomValue('days', 20, 10)
}]

export const oneWeekPeriodDomain: TimelineBarChartProps['domain'] = [oneWeekPeriodData[0].data[0].metric, oneWeekPeriodData[0].data[oneWeekPeriodData[0].data.length - 1].metric]

export const singleStackedBarChartDataOne = [
  {
    name: 'Закрыт',
    data: getDateArrayByRandomValue('days', 50, 20),
    color: 'var(--color-marengo500)'
  }
]

export const singleStackedBarChartData: TimelineBarChartProps['data'] = [
  ...singleStackedBarChartDataOne,
  {
    name: 'Открыт',
    data: getDateArrayByRandomValue('days', 20, 20),
    color: 'var(--color-marina500)'
  },
  {
    name: 'Назначен',
    data: getDateArrayByRandomValue('days', 5, 20),
    color: 'var(--color-purple500)'
  }
]

export const singleStackedBarChartDomain: TimelineBarChartProps['domain'] = [
  singleStackedBarChartData[0].data[0].metric as Date,
  singleStackedBarChartData[0].data[singleStackedBarChartData[0].data.length - 1].metric as Date
]

export const groupStackedBarChartData = [
  {
    name: 'Current',
    data: getDateArrayByRandomValue('weeks', 50, 5, 'current '),
    group: 'current',
    color: 'var(--color-marengo500)'
  },
  {
    name: 'Previous',
    data: getDateArrayByRandomValue('weeks', 30, 5, 'previous '),
    group: 'previous',
    color: 'var(--color-marina500)'
  }
]
const singlePointDate = add(FIXED_NOW, { hours: -2})
export const singlePointData: TimelineBarChartProps['data'] = [
  {
    name: 'High',
    color: 'var(--color-marina500)',
    data: [
      {
        metric: singlePointDate,
        value: 10
      }
    ]
  }
]

export const singlePointDomain: TimelineBarChartProps['domain'] = [
  add(singlePointDate, {hours: -1}),
  add(singlePointDate, {hours: 2})
]
