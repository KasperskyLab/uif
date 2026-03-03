import { add, Duration } from 'date-fns'
import { random } from 'lodash'

import { IStackedChartData } from '../../../types/chartData'
import { TimelineBarChartProps } from '../components/TimelineBarChart'

const now = new Date()

function getDateArrayByRandomValue (durationType: keyof Duration, randomNumber: number, total = 40, title?: string) {
  return Array.from({ length: total }).map((_, idx) => {
    const metric = add(now, { [durationType]: idx })

    return {
      metric,
      value: random(randomNumber),
      originalPayload: add(now, { [durationType]: idx }),
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
