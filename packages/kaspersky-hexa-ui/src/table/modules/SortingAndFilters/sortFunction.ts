import get from 'lodash/get'

import { CustomSorter, DefaultSorter, TableRecord } from '../../types'

type TDate = {
  type: string,
  value: string
}

export const defaultSortFunction: DefaultSorter = <T extends Record<string, unknown | any>>(rows: T[], field: keyof T, isAsc: boolean, attribute: string): T[] => {
  return [...(rows).sort((rowA, rowB) => {
    let parseValue = (v: any) => (typeof v === 'string') ? v.toUpperCase() : v

    const path = attribute ? `${field as string}.${attribute}` : field

    const propValueA = get(rowA, path)
    const propValueB = get(rowB, path)
    if ((propValueA as any)?.type === 'datetime' && (propValueB as any)?.type === 'datetime') {
      parseValue = (v: TDate) => new Date(v.value).getTime()
    }

    const parsedPropValueA = parseValue(propValueA)
    const parsedPropValueB = parseValue(propValueB)

    if (parsedPropValueA === parsedPropValueB) {
      return 0
    } else if ((parsedPropValueA > parsedPropValueB && isAsc) || (parsedPropValueA < parsedPropValueB && !isAsc)) {
      return 1
    } else {
      return -1
    }
  })]
}

export const customSortFunctionWrapper = (data: TableRecord[], sorter: CustomSorter, isAsc: boolean): TableRecord[] => {
  return [...data.sort((a, b) => sorter(a, b, isAsc))]
}
