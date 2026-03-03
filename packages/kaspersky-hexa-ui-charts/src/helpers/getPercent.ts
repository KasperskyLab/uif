import { round } from 'lodash'

export const cutNumberToPrecision = (num: number, precision?: number): number => {
  return round(num, precision)
}

export const getPercent = (num: number, total: number, precision?: number): number => {
  return cutNumberToPrecision((num / total) * 100, precision)
}
