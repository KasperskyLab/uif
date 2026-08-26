import { Search } from '@src/search'
import { useTableContext, useTableUpdate } from '@src/table'
import { Toolbar } from '@src/toolbar'
import Mark from 'mark.js'
import React, {
  Key,
  ReactElement,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react'

import { extractText } from '../../helpers/common'
import { TableRecord } from '../../types'

type renderFunction = (data: React.ReactNode, row: any) => any

const findInColumnRender = function (
  render: renderFunction,
  cell: React.ReactNode,
  row: any,
  pattern: string
) {
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

interface ISearchModuleProps<T extends TableRecord = TableRecord> {
  setFilteredRows: (val: T[]) => void,
  setExpandedRowKeys: (val: SetStateAction<Key[]>) => void,
  dataSource?: readonly T[],
  onSearch?: (searchString: string) => void,
  onClientSearch?: (searchString: string, row: T, index: number) => boolean,
  clientSearchFields?: (keyof T)[]
  columns?: any[],
  tableContainer?: HTMLDivElement | null,
  collapsibleSearch?: boolean,
  enableSearchHighlighting?: boolean
  placeholder?: string
}

const escapeRegexp = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const SearchModule = <T extends TableRecord = TableRecord>({
  setFilteredRows,
  setExpandedRowKeys,
  dataSource = [],
  onSearch,
  onClientSearch,
  clientSearchFields,
  columns,
  tableContainer,
  collapsibleSearch = false,
  enableSearchHighlighting,
  placeholder
}: ISearchModuleProps<T>): ReactElement => {
  const [searchValue, setSearchValue] = useState('')
  const highlightTimeoutRef = useRef<ReturnType<typeof setTimeout>>()

  const highlightResult = () => {
    // Starting the highlighting after mounting a new data source
    highlightTimeoutRef.current = setTimeout(() => {
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

  useEffect(() => () => {
    if (highlightTimeoutRef.current) {
      clearTimeout(highlightTimeoutRef.current)
    }
  }, [])

  const columnsRenders = columns?.reduce(
    (result, column) => {
      if (result[column.dataIndex]) {
        result[column.dataIndex].push(column.render)
      } else {
        result[column.dataIndex] = [column.render]
      }

      return result
    },
    []
  )

  const filterValues = (value?: string) => {
    const valueToSearch = value ?? searchValue
    if (onSearch) {
      onSearch(valueToSearch)
      return
    }

    if (onClientSearch) {
      setFilteredRows(dataSource.filter((row, index) => onClientSearch(valueToSearch, row, index)))
      return
    }

    let filteredRows = []

    if (valueToSearch.length > 0) {
      const filterRows = (currentLevelRows: readonly T[]) => {
        const currentLevelFilteredRows: T[] = []
        currentLevelRows.forEach((currentLevelRow) => {
          const row = { ...currentLevelRow }
          let isPassFilter = false
          for (const key in row) {
            if (key === 'key' || clientSearchFields?.length && !clientSearchFields.includes(key)) {
              continue
            }

            if (row[key] && typeof row[key] === 'string') {
              const parts = row[key].split(new RegExp(`(${escapeRegexp(valueToSearch)})`, 'gi'))

              if (parts.length > 1) {
                isPassFilter = true
              }

              if (!isPassFilter && columnsRenders[key]) {
                const res = columnsRenders[key]
                  .reduce(
                    (result: boolean, render: renderFunction) =>
                      result || findInColumnRender(render, row[key], row, searchValue),
                    false
                  )

                isPassFilter = isPassFilter || res
              }
            }
          }
          if (row.children) {
            row.children = filterRows(row.children as T[])
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
      filteredRows = dataSource as T[]
    }
    enableSearchHighlighting && highlightResult()

    // TODO: переделать логику с выставлением данных в useEffect, заменить на однокоммитные операции (useMemo) #10082646
    setFilteredRows(filteredRows)
  }

  const { useDataSourceFunction, useV3TestId } = useTableContext(state => ({
    useDataSourceFunction: state.useDataSourceFunction,
    useV3TestId: state.useV3TestId
  }))
  const updateContext = useTableUpdate<T>()

  useEffect(() => {
    updateContext({ searchValue })
  }, [searchValue])

  const onClearClick = () => {
    setSearchValue('')
    filterValues('')
  }

  const SearchToRender = collapsibleSearch ? Toolbar.CollapsibleSearch : Search

  return (
    <SearchToRender
      testId="table-search"
      klId="table-search"
      value={searchValue}
      onChange={setSearchValue}
      onPressEnter={!useDataSourceFunction ? () => filterValues() : undefined}
      onClearClick={onClearClick}
      searchIconTestId={useV3TestId ? 'toggle-table-search' : undefined}
      placeholder={placeholder}
    />
  )
}

export {
  SearchModule as Search
}
