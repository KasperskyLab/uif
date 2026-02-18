import { assertUnreachable } from '@helpers/typesHelpers'
import get from 'lodash/get'

import { ITableProps, TableColumn, TableRecord } from '../../types'
import { getEnumOptionLabel } from '../ToolbarIntegration/FilterItems'

import { FiltersStateManager, FiltersStateManagerConstructor } from './FiltersStateManager'
import {
  isEmptyValue,
  isFilterConfig,
  isFilterFromColumn,
  isGroup,
  parseDate,
  parseEnumValue,
  prefix
} from './helpers'
import { prepareFilters } from './prepareFilters'
import {
  EnumFilter,
  EnumOptionsMap,
  FilterConfig,
  FilterGroup,
  FilterIsMatchProps,
  FilterOperation,
  FilterType,
  TableCustomFilterFunction
} from './types'

type FilterApiConstructor = FiltersStateManagerConstructor & {
  customFilterFunction?: ITableProps['customFilterFunction'],
  predefinedFilters?: ITableProps['predefinedFilters']
  columns: TableColumn[]
}

export class FilterApi extends FiltersStateManager {
  enumOptionsMap: EnumOptionsMap = {}
  customFilterFunction: TableCustomFilterFunction | undefined

  constructor ({
    columns,
    customFilterFunction,
    predefinedFilters,
    ...rest
  }: FilterApiConstructor) {
    super(rest)
    this.initColumnGroups(columns)
    if (predefinedFilters) this.initPredefinedFilters(prepareFilters(predefinedFilters, columns))
    if (customFilterFunction) this.customFilterFunction = customFilterFunction
  }

  initColumnGroups (columns: TableColumn[]) {
    columns.forEach(column => {
      if (column.dataIndex !== undefined && column.dataIndex !== null) {
        const groupId = `column.${column.dataIndex}`
        if (!this.isGroupExists(groupId)) {
          this.createGroup({ id: groupId, logicOperation: column.filterType?.logicOperation })
        }
      } else {
        console.warn(`${prefix} Column should have dataIndex. Column: ${column}`)
      }
    })

    console.log(`${prefix} FilterApi initialized`)
  }

  public setEnumOptionsMap (options: EnumOptionsMap) {
    this.enumOptionsMap = options
  }

  public filterRows (rows: TableRecord[]): TableRecord[] {
    if (this.customFilterFunction) {
      return this.filterRowsWithCustomFunction(rows)
    }

    return rows.filter((row) => this.rowMatchesGroup(row, this.rootGroup))
  }

  private filterRowsWithCustomFunction (rows: TableRecord[]): TableRecord[] {
    if (!this.customFilterFunction) return rows

    const filters: FilterConfig[] = this.rootGroup.items.filter(isFilterConfig)

    let filteredRows: TableRecord[] = []
    const setFilteredRows = (newRows: TableRecord[]) => {
      filteredRows = newRows
    }

    this.customFilterFunction(rows, filters, setFilteredRows, {
      isMatch: this.isMatch.bind(this),
      parseDate,
      rowMatchesFilter: this.rowMatchesFilter.bind(this)
    })

    return filteredRows
  }

  private rowMatchesFilter (row: TableRecord, filter: FilterConfig): boolean {
    const { name, value, type = FilterType.Text, condition = FilterOperation.eq, attribute } = filter
    let filterValue = value
    let fieldValue = get(row, attribute ? `${name}.${attribute.name}` : name)

    if (
      isEmptyValue(fieldValue) &&
      condition !== FilterOperation.empty &&
      type !== FilterType.Text &&
      type !== FilterType.DateTime &&
      type !== FilterType.Enum
    ) return false

    if (typeof fieldValue === 'object' && fieldValue?.text) {
      fieldValue = fieldValue.text
    }

    if (condition === FilterOperation.empty) {
      return isEmptyValue(fieldValue)
    }
    
    if (condition === FilterOperation.nempty) {
      return !isEmptyValue(fieldValue)
    }

    switch (type) {
      case FilterType.Text:
        if (typeof fieldValue === 'undefined') fieldValue = ''
        if (Array.isArray(fieldValue)) fieldValue = fieldValue.join('')
        break
      case FilterType.Number:
      case FilterType.Boolean:
        filterValue = +filterValue
        fieldValue = +fieldValue
        break
      case FilterType.Enum:
        filterValue = parseEnumValue(filterValue)
        fieldValue = parseEnumValue(fieldValue)
        break
      case FilterType.DateRange:
      case FilterType.DateTime:
        fieldValue = parseDate(fieldValue?.type === 'datetime' ? fieldValue.value : fieldValue)
        break
      case FilterType.Radio:
        break
      default:
        assertUnreachable(type, '[hexa-ui]: Incorrect filter operation')
    }
    return this.isMatch({ type, condition, filterName: name, filterValue, fieldValue })
  }

  private rowMatchesGroup (row: TableRecord, group: FilterGroup): boolean {
    if (group.items.length === 0) return true

    const results = group.items.map(item => {
      if (isFilterConfig(item)) {
        return this.rowMatchesFilter(row, item)
      } else if (isFilterFromColumn(item)) {
        return item.predicate!(row)
      } else if (isGroup(item)) {
        return this.rowMatchesGroup(row, item)
      }
      console.warn(`${prefix} Incorrect filter item. It filters out as if this filter doesn't exist.
        \n Filter item: ${item}`)
      return true
    })

    return group.logicOperation === 'OR' ? results.some(Boolean) : results.every(Boolean)
  }

  private isMatch (params: FilterIsMatchProps): boolean {
    const { filterName, filterValue, fieldValue, condition, type } = params

    if (condition === FilterOperation.empty) {
      return isEmptyValue(fieldValue)
    }
    
    if (condition === FilterOperation.nempty) {
      return !this.isMatch({ ...params, condition: FilterOperation.empty })
    }

    let result
    const textFieldValue = fieldValue?.toString().toLowerCase()

    switch (type) {
      case FilterType.Text:
      case FilterType.Radio: {
        const textFilterValue = filterValue?.toLowerCase() || ''
        switch (condition) {
          case FilterOperation.cont:
            return fieldValue && ~textFieldValue.indexOf(filterValue.toLowerCase())
          case FilterOperation.ncont:
            return !(fieldValue && ~textFieldValue.indexOf(filterValue.toLowerCase()))
          case FilterOperation.regexp:
            return new RegExp(filterValue).test(textFieldValue)
          case FilterOperation.neq:
            return textFilterValue !== textFieldValue
          case FilterOperation.eq:
          default:
            return textFilterValue === textFieldValue
        }
      }
      case FilterType.DateRange:
        result = filterValue.from <= fieldValue && fieldValue <= filterValue.to
        break
      case FilterType.DateTime:
        if (condition === FilterOperation.eq) {
          const from = new Date(filterValue)
          from.setHours(0, 0, 0, 0)

          const to = new Date(filterValue)
          to.setHours(23, 59, 59, 999)

          return this.isMatch({
            ...params,
            condition: FilterOperation.range,
            filterValue: { from: parseDate(from), to: parseDate(to) }
          })
        }

        if (condition === FilterOperation.neq) {
          return !this.isMatch({ ...params, condition: FilterOperation.eq })
        }

        if (condition === FilterOperation.range) {
          return filterValue.from <= fieldValue && fieldValue <= filterValue.to
        }

        if (condition === FilterOperation.nrange) {
          return !this.isMatch({ ...params, condition: FilterOperation.range })
        }

        return this.isMatch({ ...params, type: FilterType.Number })
      case FilterType.IP:
        result = filterValue.ipFrom <= fieldValue && fieldValue <= filterValue.ipTo
        break
      case FilterType.DaysBefore:
        result = filterValue <= fieldValue
        break
      case FilterType.Enum:
        if (condition === FilterOperation.cont_and) {
          // TODO: implement
          return false
        }

        if (condition === FilterOperation.cont_or) {
          return filterValue.includes(fieldValue)
        }

        if (condition === FilterOperation.ncont_or) {
          return !filterValue.includes(fieldValue)
        }

        if (condition === FilterOperation.regexp) {
          const label = getEnumOptionLabel({ name: filterName, value: fieldValue } as EnumFilter, this.enumOptionsMap)

          if (typeof label !== 'string') {
            console.warn(`${prefix} Enum label is ReactNode. Can not filter by regex.`)
            return false
          }

          return new RegExp(filterValue).test(label.toLowerCase())
        }

        return this.isMatch({ ...params, type: FilterType.Number })
      default:
        switch (condition) {
          case FilterOperation.gt:
            return fieldValue > filterValue
          case FilterOperation.ge:
            return fieldValue >= filterValue
          case FilterOperation.lt:
            return fieldValue < filterValue
          case FilterOperation.le:
            return fieldValue <= filterValue
          case FilterOperation.neq:
            return filterValue !== fieldValue
          case FilterOperation.eq:
          default:
            return filterValue === fieldValue
        }
    }

    return condition === FilterOperation.eq ? result : !result
  }
}
