import React from 'react'

import { REACT_SERVICE_PARAMS, READONLY_COLUMNS } from '../modules/constants'
import { TableColumn, TableRecord } from '../types'

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

export const isColumnReadonly = <T extends TableRecord = TableRecord>(
  column: TableColumn<T>
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

export type TypeSafeColumn<T extends TableRecord = TableRecord> = Omit<TableColumn<T>, 'sorter' | 'filters'>

export const safeColumns = <T extends TableRecord = TableRecord>(
  columns: TableColumn<T>[],
  baseValue: number
): TypeSafeColumn<T>[] =>
  columns.map(({ sorter: _sorter, filters: _filters, ...col }) => {
    return {
      ...col,
      width: safeWidth(col.width as string | number, baseValue)
    }
  })

export const findParentForClassName = (el: HTMLElement, className: string) => {
  let node: HTMLElement | null = el.parentNode as HTMLElement
  while (node?.getElementsByClassName(className).length === 0) {
    if (!node.parentNode) {
      node = null
      break
    }
    node = node.parentNode as HTMLElement
  }
  return node
}

export const flattenDataSource = <T extends TableRecord = TableRecord>(items: T[]): T[] =>
  items.flatMap(x => [x, ...(x.children ? flattenDataSource(x.children as T[]) : [])])

export const checkExpandableGrouping = (columns: Pick<TableColumn, 'expandableGrouping'>[]) =>
  columns.some(({ expandableGrouping }) => expandableGrouping)

export const checkExpandableRows = (rows: TableRecord[]) =>
  rows.some(({ children }) => Array.isArray(children))

export const findColumn = <T extends TableRecord = TableRecord>(columns: TableColumn<T>[], dataIndex: TableColumn<T>['dataIndex']) =>
  columns.find(column => column.dataIndex === dataIndex)

export const isRenderCellObject = (node: unknown): node is { children: React.ReactNode, props?: Record<string, unknown> } => (
  Boolean(node) &&
  typeof node === 'object' &&
  !React.isValidElement(node) &&
  'children' in (node as Record<string, unknown>)
)
