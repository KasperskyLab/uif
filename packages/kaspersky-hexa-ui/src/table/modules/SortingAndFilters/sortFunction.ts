import { get } from 'lodash'

import { CustomSorter, DefaultSorter, TableRecord } from '../../types'

type TDate = {
  type: string,
  value: string
}

export const defaultSortFunction: DefaultSorter = <T extends Record<string, unknown>>(rows: T[], propName: keyof T, isAsc: boolean): T[] => {
  return [...(rows).sort((rowA, rowB) => {
    let parseValue = (v: any) => (typeof v === 'string') ? v.toUpperCase() : v

    const propValueA = get(rowA, propName)
    const propValueB = get(rowB, propName)
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
