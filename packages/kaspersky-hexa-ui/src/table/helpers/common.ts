import { REACT_SERVICE_PARAMS, READONLY_COLUMNS } from '../modules/constants'
import { TableColumn } from '../types'

export const extractText = function (
  jsx: { props?: any, children?: any } | string,
  joinPattern = ''
): string {
  const resultText = []

  const removeTags = (html: string): string => {
    const regex = /(<([^>]+)>)/ig
    return html.replace(regex, '')
  }

  if (!jsx) {
    return ''
  }

  if (typeof jsx === 'string') {
    resultText.push(jsx)
  } else if (jsx.props && jsx.props.dangerouslySetInnerHTML) {
    const html = jsx.props.dangerouslySetInnerHTML.__html
    resultText.push(html ? removeTags(html) : '')
  } else {
    if (Array.isArray(jsx)) {
      jsx.forEach((children: any) => resultText.push(extractText(children)))
    } else {
      resultText.push(extractText(jsx.props.children))
    }
  }

  return resultText.join(joinPattern)
}

export const isColumnReadonly = (
  column: TableColumn
): boolean => READONLY_COLUMNS.includes(column)

export const isReactServiceParam = (key: string) => REACT_SERVICE_PARAMS.includes(key)

export const safeWidth = (
  width: string | number,
  baseValue: number
): string | number | undefined => {
  if (typeof width === 'string' && width.endsWith('%')) {
    const numericValue = parseFloat(width)

    if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 100) {
      const pixelValue = (numericValue / 100) * baseValue
      return pixelValue
    }
  } else if (typeof width === 'number' && width >= 0) {
    return width
  }

  return undefined // todo: проставить дефолтное значене
}

type TypeSafeColumn = Omit<TableColumn, 'sorter' | 'filters'>

export const safeColumns = (
  columns: TableColumn[],
  baseValue: number
): TypeSafeColumn[] =>
  columns.map(({ sorter: _sorter, filters: _filters, ...col }) => {
    return {
      ...col,
      width: safeWidth(col.width as string | number, baseValue)
    }
  })
