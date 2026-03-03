import { random } from "lodash"
import { add, Duration } from 'date-fns'
import { IStackedChartData } from "../src/types/chartData"

export const colors = [
  'var(--chart--base--series--purple--primary--500)',
  'var(--chart--base--series--marina--primary--500)',
  'var(--chart--base--series--orange--primary--300)',
  'var(--chart--base--series--grass--primary--500)',
  'var(--chart--base--series--violet--primary--500)'
]

const numberFormatter = new Intl.NumberFormat('en-US', {
  style: 'percent'
})

export function generateData (total = 1, totalInStack = 5, maxRandomValue = 1000): IStackedChartData {
  return Array.from({ length: total }).map((_, idx) => ({
    name: numberFormatter.format(idx),
    color: colors[idx % colors.length],
    data: Array.from({ length: totalInStack }).map((_, idx) => ({ metric: 10 * idx, value: random(0, maxRandomValue), originalPayload: idx.toString() }))
  }))
}

const now = new Date()

export function generateTimelineData (total = 1, totalInStack = 20, maxRandomValue = 1000, durationType: keyof Duration = 'days', title?: string): IStackedChartData {
  return Array.from({ length: total }).map((_, idx) => ({
    name: numberFormatter.format(idx),
    color: colors[idx % colors.length],
    data: Array.from({ length: totalInStack }).map((_, idx) => {
      const metric = add(now, { [durationType]: idx })

      return ({ metric,
        value: random(maxRandomValue),
        originalPayload: add(now, { [durationType]: idx }),
        title: title && ((metric: string) => `${title}${metric}`) })
      })
    })
  )
}