import { assertUnreachable } from '@helpers/typesHelpers'
import { Chip } from '@src/chip'
import { Link } from '@src/link'
import { TFunction } from 'i18next'
import React, { ReactNode, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { useTableContext } from '../../context/TableContext'
import { ITableProps, TableColumn, TableInternalFilterItems, TableRecord } from '../../types'
import {
  EnumFilter,
  EnumOption,
  EnumOptionsMap,
  FilterConfig,
  FilterOperation,
  FilterType,
  SidebarFilter
} from '../Filters'
import {
  findColumnByName,
  formatDate,
  getEnumOptionsMap,
  isFilterConfig,
  isGroup,
  isMultipleOp,
  isRangeValue,
  isSidebarFilter,
  prefix
} from '../Filters/helpers'

/** @deprecated Use TableInternalFilterItemsChipProps */
export interface FilterItemTagProps {
  text?: string,
  counter?: number,
  onClose?: (e?: React.MouseEvent<HTMLElement>) => void,
  testId?: string
}

const StyledFilterItems = styled.div`
  display: none;
  
  &:has(.ant-tag:not(.ant-tag-hidden)) {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
  }
`

export const getEnumOptionLabel = (
  filter: EnumFilter,
  enumOptionsMap?: Record<string, EnumOption[]>
): ReactNode => {
  try {
    if (!Object.keys(enumOptionsMap || {}).length) return filter.value
    const options = enumOptionsMap![filter.name]
    const foundOption = options.find(option => option.value === filter.value)!
    return foundOption.label || foundOption.value
  } catch (e) {
    console.error(`${prefix} Can't get label for filter: ${JSON.stringify(filter)}`, e)
    return filter.value
  }
}

type GetFilterItemProps = {
  dateFormat?: string,
  enumOptionsMap?: EnumOptionsMap,
  t: TFunction
}

type GetFilterItemLabelProps = <T extends TableRecord> (config: {
  columns: TableColumn<T>[],
  filter: SidebarFilter<T>
} & GetFilterItemProps) => ReactNode

type GetFilterItemConditionProps = (config: { filter: FilterConfig } & GetFilterItemProps) => ReactNode

function joinReactNodes (nodes: ReactNode[], joiner: string) {
  const temp = [...nodes]
  const out = [temp.shift()]

  while (temp.length > 0) {
    out.push(joiner, temp.shift())
  }

  return out
}

const getFilterItemLabel: GetFilterItemLabelProps = ({
  columns,
  filter,
  dateFormat = 'MM/DD/YYYY',
  enumOptionsMap,
  t
}) => {
  if (isFilterConfig(filter)) {
    const { name: filterName, attribute } = filter

    const filterTitle = getFilterTitle(columns, filter.name, filter.attribute?.name)
    const name = filterTitle || attribute?.name || filterName

    return <>{name} {getFilterItemCondition({ filter, dateFormat, enumOptionsMap, t })}</>
  } else if (isGroup(filter) && filter.items.length && isFilterConfig(filter.items[0])) {
    const itemInGroup: FilterConfig = filter.items[0]
    const { name: filterName, attribute } = itemInGroup

    const filterTitle = getFilterTitle(columns, itemInGroup.name, itemInGroup.attribute?.name)
    const name = filterTitle || attribute?.name || filterName

    return (
      <>
        {name} {
          filter.items.filter(isFilterConfig).map((item, index) => (
            <>
              {getFilterItemCondition({ filter: item, dateFormat, enumOptionsMap, t })}
              {index !== filter.items.filter(isFilterConfig).length - 1 && <> {t('table.columnsSettings.filtering.operators.or')} </>}
            </>
          ))
        }
      </>
    )
  }
}

const getFilterItemCondition: GetFilterItemConditionProps = ({
  filter,
  dateFormat = 'MM/DD/YYYY',
  enumOptionsMap,
  t
}) => {
  const { condition, type, value } = filter

  if (condition === FilterOperation.empty || condition === FilterOperation.nempty) {
    return t(`table.filterTag.${condition}`)
  }

  switch (type) {
    case FilterType.Boolean:
      return `${condition} ${value ? t('common.yes') : t('common.no')}`
    case FilterType.DateRange:
      return `${condition} ${formatDate(value.from, dateFormat)}-${formatDate(value.to, dateFormat)}`
    case FilterType.DateTime:
      if (isRangeValue(value)) {
        return (
          t(`table.filterTag.${condition}`, {
            from: formatDate(value.from, dateFormat),
            to: formatDate(value.to, dateFormat)
          }).replace(/&#x2F;/g, '/')
        )
      }

      return `${condition} ${formatDate(value, dateFormat)}`
    case FilterType.Enum: {
      if (isMultipleOp(filter.condition)) {
        const labels = filter.value.map((v: any) => getEnumOptionLabel({ ...filter, value: v } as EnumFilter, enumOptionsMap))

        if (filter.condition === FilterOperation.cont_and) {
          return <>= {joinReactNodes(labels, ' & ')}</>
        }

        if (filter.condition === FilterOperation.cont_or) {
          return <>= {joinReactNodes(labels, ' | ')}</>
        }

        if (filter.condition === FilterOperation.ncont_or) {
          return <>≠ {joinReactNodes(labels, ' | ')}</>
        }
      }

      return <>{condition} {getEnumOptionLabel(filter as EnumFilter, enumOptionsMap)}</>
    }
    case FilterType.Text:
      if (condition === FilterOperation.cont || condition === FilterOperation.ncont) {
        return t(`table.filterTag.${condition}`, { value })
      }

      return `${condition} "${value}"`
    case FilterType.Number:
    case FilterType.Radio:
      if (condition === FilterOperation.cont || condition === FilterOperation.ncont) {
        return t(`table.filterTag.${condition}`, { value })
      }

      return `${condition} ${value}`
  }
  assertUnreachable(type, 'Incorrect filter item')
  return ''
}

const getFilterTestId = <T extends TableRecord = TableRecord> (filter: SidebarFilter<T>) => {
  let name = ''
  let condition = ''

  if (isFilterConfig(filter)) {
    name = filter.name
    condition = getConditionTestId([filter])
  } else if (isGroup(filter) && filter.items.length && isFilterConfig(filter.items[0])) {
    name = filter.items[0].name
    condition = getConditionTestId(filter.items.filter(isFilterConfig))
  }

  return `table-active-filter-${name}${condition}`
}

const getConditionTestId = (filters: FilterConfig[]) => (
  filters
    .map(filter => {
      const { condition, type, value } = filter
      if (value && type === 'dateRange') {
        const from = value.from ?? ''
        const to = value.to ?? ''
        return `${condition}:${from}-${to}`
      }
      return `${condition}:${String(value ?? '')}`
    })
    .join('-or-')
)

type FilterItemsProps<T extends TableRecord = TableRecord> = TableInternalFilterItems & Pick<ITableProps<T>, 'onSidebarFiltersChange' | 'columns'>

export function FilterItems <T extends TableRecord = TableRecord> (props: FilterItemsProps<T>) {
  const { filterApi, dateFormat } = useTableContext<T>()
  const { t } = useTranslation()
  const klId = 'table-filters-reset-button'

  const [filterItems, setFilterItems] = useState<SidebarFilter<T>[]>([])
  const [tagItems, setTagItems] = useState(props.items || [])
  const [enumOptionsMap, setEnumOptionsMap] = useState<Record<string, EnumOption[]>>({})

  const hasColumns = !!props.columns?.length

  useEffect(() => {
    if (filterApi && hasColumns) {
      const getFilterItems = () => {
        setFilterItems(filterApi.getSidebarFilters())
        getEnumOptionsMap(props.columns!).then(setEnumOptionsMap)
      }

      getFilterItems()
      return filterApi.subscribe(getFilterItems)
    }
  }, [filterApi, hasColumns])

  useEffect(() => {
    if (filterApi) return

    setTagItems(props.items || [])
  }, [props.items])

  useEffect(() => {
    if (!filterApi) return
    setTagItems(filterItems.map(filter => ({
      text: getFilterItemLabel<T>({
        columns: props.columns!,
        filter,
        dateFormat,
        enumOptionsMap,
        t
      }),
      key: getFilterTestId<T>(filter),
      onClose: () => {
        filterApi.removeFilter(filter)
        props.onSidebarFiltersChange?.(filterApi.getRootGroupFilters().filter(isFilterConfig))
      }
    })))
  }, [filterItems, enumOptionsMap, t])

  const onClearFilterApi = () => {
    if (filterApi) {
      filterApi.resetFilters(undefined, filterItem => !isSidebarFilter(filterItem))
      props.onSidebarFiltersChange?.(filterApi.getRootGroupFilters().filter(isFilterConfig))
    } else {
      props.onClear?.()
    }
  }

  return (
    <StyledFilterItems>
      {
        tagItems.map(({ text, key, ...item }) => (
          <Chip {...item} key={key} label={text} testId={key} />
        ))
      }
      {
        tagItems.length && (
          <Link
            onClick={props.onClear || onClearFilterApi}
            klId={klId}
            testId={klId}
          >
            {props.clearLinkText || t('table.columnsSettings.clear')}
          </Link>
        )
      }
    </StyledFilterItems>
  )
}

const getFilterTitle = <T extends TableRecord = TableRecord>(
  columns: TableColumn<T>[],
  name?: string,
  attribute?: string
): ReactNode => {
  try {
    const targetColumn = findColumnByName(columns, name!)
    return targetColumn?.filterAttributes?.find(el => el.name === attribute)?.label || targetColumn?.title
  } catch (e) {
    console.error('Can\'t get filter title', e)
    return ''
  }
}
