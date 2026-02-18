import { assertUnreachable } from '@helpers/typesHelpers'
import { Chip } from '@src/chip'
import { Link } from '@src/link'
import { TFunction } from 'i18next'
import React, { ReactNode, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { useTableContext } from '../../context/TableContext'
import { ITableProps, TableColumn, TableInternalFilterItems } from '../../types'
import { EnumFilter, EnumOption, EnumOptionsMap, FilterConfig, FilterOperation, FilterType } from '../Filters'
import { formatDate, isFilterConfig, isMultipleOp, isRangeValue, prefix } from '../Filters/helpers'

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
    const options = enumOptionsMap![filter.name]
    const foundOption = options.find(option => option.value === filter.value)!
    return foundOption.label || foundOption.value
  } catch (e) {
    console.error(`${prefix} Can't get label for filter: ${JSON.stringify(filter)}`, e)
    return filter.value
  }
}

type GetFilterItemTextProps = (config: {
  filter: FilterConfig,
  dateFormat?: string,
  enumOptionsMap?: EnumOptionsMap,
  filterTitle?: ReactNode,
  t: TFunction
}) => ReactNode

function joinReactNodes (nodes: ReactNode[], joiner: string) {
  const temp = [...nodes]
  const out = [temp.shift()]

  while (temp.length > 0) {
    out.push(joiner, temp.shift())
  }

  return out
}

const getFilterItemLabel: GetFilterItemTextProps = ({
  filter,
  filter: { name: filterName, condition, type, value, attribute },
  dateFormat = 'MM/DD/YYYY',
  enumOptionsMap,
  filterTitle,
  t
}) => {
  const name = filterTitle || attribute?.name || filterName
  const NameCondition = <>{name} {condition} </>

  if (condition === FilterOperation.empty || condition === FilterOperation.nempty) {
    return <>{name} {t(`table.filterTag.${condition}`)}</>
  }

  switch (type) {
    case FilterType.Boolean:
      return (
        <>
          {NameCondition}
          {value ? t('common.yes') : t('common.no')}
        </>
      )
    case FilterType.DateRange:
      return (
        <>
          {NameCondition}
          {formatDate(value.from, dateFormat)}
          &nbsp;-&nbsp;
          {formatDate(value.to, dateFormat)}
        </>
      )
    case FilterType.DateTime:
      if (isRangeValue(value)) {
        return <>
          {name} {t(`table.filterTag.${condition}`, {
            from: formatDate(value.from, dateFormat),
            to: formatDate(value.to, dateFormat)
          }).replace(/&#x2F;/g, '/')}
        </>
      }

      return <>{NameCondition}{formatDate(value, dateFormat)}</>
    case FilterType.Enum: {
      if (isMultipleOp(filter.condition)) {
        const labels = filter.value.map((v: any) => getEnumOptionLabel({ ...filter, value: v } as EnumFilter, enumOptionsMap))

        if (filter.condition === FilterOperation.cont_and) {
          return <>{name} = {joinReactNodes(labels, ' & ')}</>
        }

        if (filter.condition === FilterOperation.cont_or) {
          return <>{name} = {joinReactNodes(labels, ' | ')}</>
        }

        if (filter.condition === FilterOperation.ncont_or) {
          return <>{name} ≠ {joinReactNodes(labels, ' | ')}</>
        }
      }

      return <>{NameCondition}{getEnumOptionLabel(filter as EnumFilter, enumOptionsMap)}</>
    }
    case FilterType.Text:
    case FilterType.Number:
    case FilterType.Radio:
      if (condition === FilterOperation.cont || condition === FilterOperation.ncont) {
        return <>{name} {t(`table.filterTag.${condition}`, { value })}</>
      }

      return <>{NameCondition}{value}</>
  }
  assertUnreachable(type, 'Incorrect filter item')
  return ''
}


type FilterItemsProps = TableInternalFilterItems & Pick<ITableProps, 'onSidebarFiltersChange' | 'columns'>

export function FilterItems (props: FilterItemsProps) {
  const { filterApi, dateFormat, enumOptionsMap } = useTableContext()
  const { t } = useTranslation()
  const klId = 'table-filters-reset-button'

  const [filterItems, setFilterItems] = useState<FilterConfig[]>([])
  const [tagItems, setTagItems] = useState(props.items || [])
  
  useEffect(() => {
    if (filterApi) {
      const getFilterItems = () => {
        setFilterItems(
          filterApi
            .getRootGroupFilters()
            .filter(isFilterConfig)
        )
      }

      getFilterItems()
      return filterApi.subscribe(getFilterItems)
    }
  }, [filterApi])

  useEffect(() => {
    if (filterApi) return

    setTagItems(props.items || [])
  }, [props.items])

  useEffect(() => {
    if (!filterApi) return
    setTagItems(filterItems.map(filter => ({
      text: getFilterItemLabel({
        filter,
        dateFormat,
        enumOptionsMap,
        filterTitle: getFilterTitle(props.columns!, filter.name, filter.attribute?.name),
        t
      }),
      key: JSON.stringify(filter),
      onClose: () => {
        filterApi.removeFilter(filter)
        props.onSidebarFiltersChange?.(filterApi.getRootGroupFilters().filter(isFilterConfig))
      }
    })))
  }, [filterItems, enumOptionsMap, t])

  const onClearFilterApi = () => {
    if (filterApi) {
      filterApi.resetFilters(undefined, filterItem => !isFilterConfig(filterItem))
      props.onSidebarFiltersChange?.(filterApi.getRootGroupFilters().filter(isFilterConfig))
    } else {
      props.onClear?.()
    }
  }

  return <StyledFilterItems>
    {
      tagItems.map(item => (
        <Chip key={item.key} label={item.text} onClose={item.onClose} />
      ))
    }
    {
      tagItems.length && (
        <Link
          onClick={props.onClear || onClearFilterApi}
          klId={klId}
          testId={klId}
        >
          {props.clearLinkText ||  t('table.columnsSettings.clear')}
        </Link>
      )
    }
  </StyledFilterItems>
}

const getFilterTitle = (
  columns: TableColumn[],
  dataIndex: TableColumn['dataIndex'],
  attribute?: string
): ReactNode => {
  try {
    const targetColumn = columns.find(column => column.dataIndex === dataIndex)
    return targetColumn?.filterAttributes?.find(el => el.name === attribute)?.label || targetColumn?.title 
  } catch (e) {
    console.error('Can\'t get filter title', e)
    return ''
  }
}