import { Search } from '@src/search'
import { SearchProps } from '@src/search/types'
import Mark from 'mark.js'
import React, { Key, ReactElement, SetStateAction, useState } from 'react'

import { extractText } from '../../helpers/common'
import { TableRecord } from '../../types'

type renderFunction = (data: React.ReactNode, row: any) => any

const findInColumnRender = function (
  render: renderFunction,
  cell: React.ReactNode,
  row: any,
  pattern: string) {
  if (!render) {
    return false
  }

  const renderResult = render(cell, row)
  const source = renderResult?.children
    ? {
        props: {
          children: renderResult.children
        }
      }
    : renderResult

  const text = extractText(source).toLowerCase()

  return text.indexOf(pattern.toLowerCase()) >= 0
}

interface ISearchModuleProps {
  setFilteredRows: (val: Record<string, unknown>[]) => void,
  setExpandedRowKeys: (val: SetStateAction<Key[]>) => void,
  dataSource?: readonly TableRecord[],
  onSearch?: (searchString: string) => void,
  columns?: any[],
  tableContainer?: HTMLDivElement | null,
  enableSearchHighlighting?: boolean
}

const SearchModule = ({
  setFilteredRows,
  setExpandedRowKeys,
  dataSource = [],
  onSearch,
  columns,
  tableContainer,
  enableSearchHighlighting
}: ISearchModuleProps): ReactElement => {
  const [searchValue, setSearchValue] = useState('')

  const highlightResult = () => {
    // Starting the highlighting after mounting a new data source
    setTimeout(() => {
      const table = tableContainer
      if (table) {
        const markInstance = new Mark(table.querySelector('tbody') as HTMLElement)

        markInstance.unmark({
          done: function () {
            if (searchValue) {
              markInstance.mark(searchValue, {})
            }
          }
        })
      }
    }, 0)
  }

  const columnsRenders = columns?.reduce(
    (result, column) => {
      if (result[column.dataIndex]) {
        result[column.dataIndex].push(column.render)
      } else {
        result[column.dataIndex] = [column.render]
      }

      return result
    },
    [])

  const filterValues = (value?: string) => {
    const valueToSearch = value ?? searchValue
    if (onSearch) {
      onSearch(valueToSearch)
      return
    }

    let filteredRows = []

    if (valueToSearch.length > 0) {
      const filterRows = (currentLevelRows: readonly TableRecord[]) => {
        const currentLevelFilteredRows: TableRecord[] = []
        currentLevelRows.forEach((currentLevelRow) => {
          const row = { ...currentLevelRow }
          let isPassFilter = false
          for (const key in row) {
            if (row[key] && typeof row[key] === 'string') {
              const parts = row[key].split(new RegExp(`(${valueToSearch})`, 'gi'))

              if (parts.length > 1) {
                isPassFilter = true
              }

              if (columnsRenders[key]) {
                const res = columnsRenders[key]
                  .reduce(
                    (result: boolean, render: renderFunction) =>
                      result || findInColumnRender(render, row[key], row, searchValue),
                    false)

                isPassFilter = isPassFilter || res
              }
            }
          }
          if (row.children) {
            row.children = filterRows(row.children)
            if (!isPassFilter && row.children.length > 0) {
              setExpandedRowKeys((oldKeys) => [...oldKeys, row.key])
              isPassFilter = true
            }
          }
          if (isPassFilter) {
            currentLevelFilteredRows.push(row)
          }
        })
        return currentLevelFilteredRows
      }
      filteredRows = filterRows(dataSource)
    } else {
      filteredRows.push(...dataSource)
    }
    enableSearchHighlighting && highlightResult()
    setFilteredRows(filteredRows)
  }

  const onClearClick = () => {
    setSearchValue('')
    filterValues('')
  }

  return <Search
    testId="table-search"
    klId="table-search"
    value={searchValue}
    onChange={setSearchValue as SearchProps['onChange']}
    onPressEnter={() => filterValues()}
    onClearClick={onClearClick}
  />
}

export {
  SearchModule as Search
}
