import { get } from 'lodash'

type TDate = {
  type: string,
  value: string
}

export const defaultSortFunction = (data: any[], propName: string, isAsc: boolean): any[] => {
  return [...data.sort((rowA, rowB) => {
    let parseValue = (v: any) => (typeof v === 'string') ? v.toUpperCase() : v

    const propValueA = get(rowA, propName)
    const propValueB = get(rowB, propName)
    if (propValueA?.type === 'datetime' && propValueB?.type === 'datetime') {
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
