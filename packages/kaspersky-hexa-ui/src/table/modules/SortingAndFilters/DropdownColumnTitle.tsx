import { SetState } from '@helpers/hooks/useStateProps'
import { shouldForwardProp } from '@helpers/shouldForwardProp'
import { Dropdown, DropdownItemProps, DropdownProps } from '@src/dropdown'
import cn from 'classnames'
import React, { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { ArrowDownMini, Filter, Sort2, Sort3 } from '@kaspersky/hexa-ui-icons/16'

import {
  EnumFilterType,
  ITableProps,
  TableColumn,
  TableRecord
} from '../../types'
import { EnumOption, FilterApi, FilterConfig, FilterType } from '../Filters'
import {
  convertColumnFiltersToFilterFromColumn,
  getEnumFilters,
  getNotEnumFilters,
  isFilterConfig,
  isFilterFromColumn,
  isSameItem,
  resolveEnumOptions
} from '../Filters/helpers'
import { ActiveSorting, SortType } from '../SortingAndFilters'

import {
  createEnumFilter,
  FilterRow,
  getEnumFilter,
  getStringWithCondition,
  TABLE_HEADER_TEST_ID_PREFIX as TEST_ID_PREFIX
} from './helpers'

const StyledColumn = styled.div.withConfig<{
  isPressed?: boolean
}>({
  shouldForwardProp
})`
  color: var(--table_cell--text--enabled);
  cursor: pointer;
  padding: 10px 0;
  max-width: 100%;
  
  &:hover {
    background: var(--table_cell_header--bg--hover);
  }
  
  &:active {
    background: var(--table_cell_header--bg--active);
  }

  ${(props) => props.isPressed && `
    background: var(--table_cell_header--bg--hover);
  `}
`

const TitleLine = styled.div`
  display: inline-grid;
  grid-template-columns: minmax(0, auto) max-content;
  align-items: center;
  gap: var(--spacing--gap_dependent);

  &&& .table-header-title .hexa-ui-ellipsis {
    display: inline-grid;
    width: auto;
  }

  .table-header-icon {
    height: 16px;
    flex: 0 0 auto;
  }
`

type DropdownColumnTitleProps<T extends TableRecord = TableRecord> = Pick<
  TableColumn<T>,
  'title' |
  'columnId' |
  'columnServerField' |
  'isSortable' |
  'filterName' |
  'sortingAttributes' |
  'filters' |
  'allowMultipleFilters' |
  'showEnumFiltersInColumn' |
  'showFilterIcon' |
  'closeDropdownOnSelect'
> & {
  columnKey: string,
  filterApi?: FilterApi<T> | null,
  enumOptionsGetter: EnumFilterType['getAvailableOptions']
  activeSorting: ActiveSorting<T>,
  setActiveSorting: SetState<ActiveSorting<T>>
} & Pick<ITableProps<T>, 'klId' | 'testId' | 'onDropdownFiltersChange'>

export const DropdownColumnTitle = function DropdownColumnTitleComponent <T extends TableRecord = TableRecord> ({
  testId,
  klId,
  columnKey,
  filterName = columnKey,
  title,
  columnId,
  columnServerField,
  isSortable,
  sortingAttributes,
  filters: availableFilters,
  showEnumFiltersInColumn,
  filterApi,
  enumOptionsGetter,
  onDropdownFiltersChange,
  activeSorting,
  setActiveSorting,
  closeDropdownOnSelect = true,
  showFilterIcon,
  allowMultipleFilters
}: DropdownColumnTitleProps<T>): React.ReactElement {
  const groupId = `column.${columnKey}`

  const { t } = useTranslation()

  const [dropdownOpened, setDropdownOpened] = useState(false)
  const [filters, setFilters] = useState(filterApi?.getRootGroupFilters()!)
  const [enumOptions, setEnumOptions] = useState<EnumOption[]>([])

  useEffect(() => {
    if (enumOptionsGetter && showEnumFiltersInColumn && dropdownOpened) {
      resolveEnumOptions(enumOptionsGetter, undefined, columnKey)
        .then(res => res && setEnumOptions(res))
    }
  }, [enumOptionsGetter, showEnumFiltersInColumn, dropdownOpened])

  useEffect(() => {
    if (!filterApi) return

    const setFiltersCallback = () => setFilters(filterApi.getRootGroupFilters())

    setFiltersCallback()

    return filterApi.subscribe(setFiltersCallback)
  }, [filterApi])

  const filterItems: DropdownItemProps[] | false = useMemo(() => {
    if (availableFilters && filterApi) {
      const filterGroupItems = filterApi.getGroupItems(groupId)

      return availableFilters.map((availableFilter, index) => {
        const filterFromColumn = {
          ...convertColumnFiltersToFilterFromColumn(availableFilter, columnKey),
          isUserDefined: true
        }

        const isChecked = filterGroupItems
          ?.filter(filter => isSameItem(filter, filterFromColumn))
          .length

        const onClick = () => {
          if (allowMultipleFilters) {
            if (isChecked) {
              filterApi.removeFilter(filterFromColumn, groupId)
            } else {
              filterApi.addFilter(filterFromColumn, groupId)
            }
          } else {
            if (isChecked) {
              filterApi.resetFilters(groupId)
            } else {
              filterApi.setExternalFilters([filterFromColumn], groupId)
            }
          }
          const columnFiltersAfterChangge = filterApi.getGroupItems(groupId)
          columnFiltersAfterChangge && onDropdownFiltersChange?.
          (
            columnFiltersAfterChangge
              .filter(item => isFilterFromColumn(item))
              .map(item => availableFilters.find(el => el.name === item.filterName)!)
          )
        }

        const postfix = `${TEST_ID_PREFIX}-${index}-filters`
        const itemTestId = getStringWithCondition(postfix, testId)
        const itemKlId = getStringWithCondition(postfix, klId)
        const key = `${availableFilter.name}-${index}`

        const item: DropdownItemProps = {
          testId: itemTestId,
          klId: itemKlId,
          key,
          className: cn({ 'ant-dropdown-menu-item-selected': !allowMultipleFilters && isChecked }),
          onClick: !allowMultipleFilters ? onClick : undefined,
          children: allowMultipleFilters ? (
            <FilterRow
              allowMultipleFilters={allowMultipleFilters}
              isChecked={!!isChecked}
              onClick={onClick}
              elementBefore={availableFilter.elementBefore}
              name={availableFilter.name}
              localizationKey={availableFilter.localizationKey}
            />
          ) : availableFilter.name
        }

        return item
      })
    }

    return false
  }, [availableFilters, filters, filterApi, columnKey, allowMultipleFilters])

  const enumFilters: DropdownItemProps[] | false = useMemo(() => {
    if (filterItems || !filterApi || !showEnumFiltersInColumn || !enumOptions) return false

    return enumOptions.map(option => {
      const enumFilter = getEnumFilter(filterName, option.value, filters)

      const onClick = () => {
        if (enumFilter) {
          filterApi.removeFilter(enumFilter)
        } else {
          const newFilter = createEnumFilter(filterName, option.value)

          if (allowMultipleFilters) {
            filterApi.addFilter(newFilter)
          } else {
            if (!filters) return

            const filtersWithoutThisColumn = filters.filter(filter => (
              isFilterConfig(filter) && !(filter.name === filterName && filter.type === FilterType.Enum)
            ))

            const newFilters = [
              ...filtersWithoutThisColumn,
              newFilter
            ]
            filterApi.setExternalSidebarFilters(newFilters as FilterConfig[])
          }
        }
      }

      const postfix = `${TEST_ID_PREFIX}-${filterName}-enum-filter-${option.value}`
      const itemTestId = getStringWithCondition(postfix, testId)

      const item: DropdownItemProps = {
        testId: itemTestId,
        key: itemTestId,
        className: cn({ 'ant-dropdown-menu-item-selected': !allowMultipleFilters && !!enumFilter }),
        onClick: !allowMultipleFilters ? onClick : undefined,
        children: allowMultipleFilters ? (
          <FilterRow
            allowMultipleFilters={allowMultipleFilters}
            isChecked={!!enumFilter}
            onClick={onClick}
            name={option.label}
          />
        ) : option.label
      }

      return item
    })
  }, [filterApi, filterName, filters, filterItems, enumOptions])

  let sortIcon: null | React.ReactElement = null
  const filterIcon = showFilterIcon ?? (
    (filterApi?.getGroupItems(groupId).length || getEnumFilters(filters).find(filter => filter.name === filterName))
      ? <Filter className="table-header-icon" testId={getStringWithCondition(`${TEST_ID_PREFIX}-${columnKey}-filtering-icon`, testId)} />
      : undefined
  )
  const dropdownArrow = (
    <ArrowDownMini className="table-header-icon" testId={getStringWithCondition(`${TEST_ID_PREFIX}-arrow-${columnKey}`, testId)} />
  )

  const sortItems: DropdownItemProps | false = useMemo(() => {
    if (isSortable || sortingAttributes) {
      const getSortingOptions = (prefix: string, field: string, attribute?: string): DropdownItemProps[] => {
        return [
          {
            key: 'asc' as SortType,
            nameLocalizationKey: 'table.columnDropdown.ascending',
            icon: <Sort3 />
          },
          {
            key: 'desc' as SortType,
            nameLocalizationKey: 'table.columnDropdown.descending',
            icon: <Sort2 />
          }
        ].map((sortType) => {
          const isSortingSelected =
            activeSorting?.field === field &&
            activeSorting?.attribute === attribute &&
            activeSorting?.direction === sortType.key

          const postfix = `${prefix}-${field}-sorting-${attribute ? `${attribute}-${sortType.key}` : sortType.key}`

          return {
            testId: getStringWithCondition(postfix, testId),
            klId: getStringWithCondition(postfix, klId),
            key: postfix,
            className: cn({ 'ant-dropdown-menu-item-selected': isSortingSelected }),
            onClick: () => {
              setActiveSorting({
                field,
                attribute: attribute ?? undefined,
                direction: sortType.key,
                columnId,
                columnServerField,
                isDefaultSortDisabled: activeSorting.isDefaultSortDisabled
              })
            },
            componentsBefore: [sortType.icon],
            children: t(sortType.nameLocalizationKey)
          }
        })
      }

      return {
        type: 'group',
        title: t('table.columnDropdown.sorting'),
        children: sortingAttributes
          ? sortingAttributes.map(({ label, attribute, field = columnKey }): DropdownItemProps => {
              const postfixField = `${TEST_ID_PREFIX}-${field}-sorting-${attribute}`
              const isSelected = field === activeSorting.field && attribute === activeSorting.attribute

              return {
                type: 'submenu',
                testId: getStringWithCondition(postfixField, testId),
                klId: getStringWithCondition(postfixField, klId),
                className: cn({ 'ant-dropdown-menu-item-selected': isSelected }),
                title: label,
                children: getSortingOptions(TEST_ID_PREFIX, field, attribute)
              }
            })
          : getSortingOptions(TEST_ID_PREFIX, columnKey)
      }
    }

    return false
  }, [t, isSortable, sortingAttributes, activeSorting, testId, klId, columnId, columnServerField, columnKey])

  if (activeSorting?.field === columnKey) {
    const testIdValue = getStringWithCondition(`${TEST_ID_PREFIX}-active-sorting-${columnKey}`, testId)

    sortIcon = activeSorting.direction === 'asc'
      ? <Sort3 testId={testIdValue} />
      : <Sort2 testId={testIdValue} />
  }

  const overlay: DropdownItemProps[] = useMemo(() => [
    sortItems,
    sortItems && filterItems && { type: 'divider', children: null } as DropdownItemProps,
    (filterItems || enumFilters) && {
      type: 'group',
      title: t('table.columnDropdown.filters'),
      children: filterItems || enumFilters
    } as DropdownItemProps
  ].filter(item => item !== false), [t, sortItems, filterItems, enumFilters])

  const footer: DropdownProps['footer'] = useMemo(() => {
    if (!filterApi || !filterItems && !enumFilters) return
    const testIdFooter = getStringWithCondition(`${TEST_ID_PREFIX}-filters-reset-button`, testId)
    const klIdFooter = getStringWithCondition(`${TEST_ID_PREFIX}-filters-reset-button`, klId)

    return {
      type: 'action',
      children: t('table.columnDropdown.resetFilters'),
      testId: testIdFooter,
      klId: klIdFooter,
      key: 'resetFiltersButton',
      sticky: true,
      onClick: filterItems
        ? () => {
            filterApi.setExternalFilters([], groupId)
          }
        : () => {
            filterApi.setExternalSidebarFilters(getNotEnumFilters(filters))
          }
    }
  }, [t, filterItems, enumFilters, testId, klId, filterApi])

  return (
    <Dropdown
      popupMaxHeight={370}
      trigger={['click']}
      onVisibleChange={open => setDropdownOpened(open)}
      visible={dropdownOpened}
      selectedItemsKeys={[]}
      overlay={overlay}
      footer={footer}
      testId={getStringWithCondition(`${TEST_ID_PREFIX}-${columnKey}-popup`, testId)}
      klId={getStringWithCondition(`${TEST_ID_PREFIX}-${columnKey}-popup`, klId)}
      onOverlaySelect={closeDropdownOnSelect ? () => setDropdownOpened(false) : undefined}
    >
      <StyledColumn
        className="kl6-table-dropdown"
        isPressed={dropdownOpened}
        data-testid={getStringWithCondition(`${TEST_ID_PREFIX}-${columnKey}-title`, testId)}
      >
        <TitleLine>
          <span className="table-header-title">
            {title}
          </span>

          <span className="table-header-icon">
            {!sortIcon && !filterIcon && dropdownArrow} {sortIcon} {filterIcon}
          </span>
        </TitleLine>
      </StyledColumn>
    </Dropdown>
  )
}
