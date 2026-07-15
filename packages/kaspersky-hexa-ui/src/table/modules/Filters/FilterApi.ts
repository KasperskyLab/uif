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
  isSidebarFilter,
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

type FilterApiConstructor<T extends TableRecord = TableRecord> = FiltersStateManagerConstructor & {
  customFilterFunction?: ITableProps<T>['customFilterFunction'],
  defaultFilters?: ITableProps<T>['defaultFilters']
  enableNestedFilters?: ITableProps<T>['enableNestedFilters']
  columns: TableColumn<T>[]
}

export class FilterApi<T extends TableRecord = TableRecord> extends FiltersStateManager<T> {
  enumOptionsMap: EnumOptionsMap = {}
  customFilterFunction: TableCustomFilterFunction<T> | undefined
  enableNestedFilters: boolean

  constructor ({
    columns,
    customFilterFunction,
    defaultFilters,
    enableNestedFilters = false,
    ...rest
  }: FilterApiConstructor<T>) {
    super(rest)
    this.enableNestedFilters = enableNestedFilters
    this.initColumnGroups(columns)
    if (defaultFilters) this.initDefaultFilters(prepareFilters(defaultFilters, columns))
    if (customFilterFunction) this.customFilterFunction = customFilterFunction

    console.log(`${prefix} FilterApi initialized`)
  }

  initColumnGroups (columns: TableColumn<T>[]) {
    columns.forEach(column => {
      if (column.key !== undefined && column.key !== null) {
        const groupId = `column.${column.key}`
        if (!this.isGroupExists(groupId)) {
          this.createGroup({ id: groupId, logicOperation: column.filterType?.logicOperation })
        }
      } else {
        console.warn(`${prefix} Column should have key. Column: ${column}`)
      }
    })
  }

  public setEnumOptionsMap (options: EnumOptionsMap) {
    this.enumOptionsMap = options
  }

  public filterRows (rows: T[]): T[] {
    if (this.customFilterFunction) {
      return this.filterRowsWithCustomFunction(rows)
    }

    return rows.filter((row) => this.rowMatchesGroup(row, this.rootGroup))
  }

  private filterRowsWithCustomFunction (rows: T[]): T[] {
    if (!this.customFilterFunction) return rows

    const filters = this.rootGroup.items.filter(this.enableNestedFilters ? isSidebarFilter : isFilterConfig)

    let filteredRows: T[] = []
    const setFilteredRows = (newRows: T[]) => {
      filteredRows = newRows
    }

    this.customFilterFunction(rows, filters, setFilteredRows, {
      isMatch: this.isMatch.bind(this),
      parseDate,
      rowMatchesFilter: this.rowMatchesFilter.bind(this),
      rowMatchesGroup: this.rowMatchesGroup.bind(this)
    })

    return filteredRows
  }

  private rowMatchesFilter (row: T, filter: FilterConfig, translateFn?: (key: string) => string): boolean {
    const { name, value, type = FilterType.Text, condition = FilterOperation.eq, attribute } = filter
    let filterValue = value
    let fieldValue: any = get(row, attribute ? `${name}.${attribute.name}` : name)

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

    fieldValue = translateFn?.(fieldValue) || fieldValue

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
    return this.isMatch({
      type,
      condition,
      filterName: name,
      filterValue,
      fieldValue
    })
  }

  private rowMatchesGroup (row: T, group: FilterGroup<T>, translateFn?: (key: string) => string): boolean {
    if (group.items.length === 0) return true

    const results = group.items.map(item => {
      if (isFilterConfig(item)) {
        return this.rowMatchesFilter(row, item, translateFn)
      } else if (isFilterFromColumn(item)) {
        return item.predicate!(row)
      } else if (isGroup(item)) {
        return this.rowMatchesGroup(row, item, translateFn)
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
      {
        const normalizedField = parseDate(fieldValue)
        if (isNaN(normalizedField)) {
          return condition === FilterOperation.neq
        }

        if (condition === FilterOperation.eq) {
          const target = parseDate(filterValue)
          if (isNaN(target)) return false
          return normalizedField === target
        }

        if (condition === FilterOperation.neq) {
          return !this.isMatch({ ...params, condition: FilterOperation.eq })
        }

        if (condition === FilterOperation.range) {
          const from = parseDate(filterValue.from)
          const to = parseDate(filterValue.to)
          if (isNaN(from) || isNaN(to)) return false
          return from <= normalizedField && normalizedField <= to
        }

        if (condition === FilterOperation.nrange) {
          return !this.isMatch({ ...params, condition: FilterOperation.range })
        }

        return this.isMatch({ ...params, type: FilterType.Number })
      }
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
