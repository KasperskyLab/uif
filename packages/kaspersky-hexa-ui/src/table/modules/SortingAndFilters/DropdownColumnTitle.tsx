import { SPACES } from '@design-system/theme/themes/variables'
import { shouldForwardProp } from '@helpers/shouldForwardProp'
import { Checkbox } from '@src/checkbox'
import { Dropdown } from '@src/dropdown'
import { Locale } from '@src/locale'
import cn from 'classnames'
import React, { ReactElement, useState } from 'react'
import styled, { css } from 'styled-components'

import { ArrowDownMini, Filter, Sort2, Sort3 } from '@kaspersky/icons/16'

import { useTableContext } from '../../context/TableContext'
import { fromTableProps } from '../../tableCss'
import { ColumnFilter, CustomSorter, TableCssConfig } from '../../types'
import { ActiveFilter, ActiveSorting, SortType } from '../SortingAndFilters'

const iconCss = css`
  min-width: fit-content;
`

const TEST_ID_PREFIX = 'table-header-dropdown'

const StyledArrowDownMini = styled(ArrowDownMini)`${iconCss}`
const StyledFilter = styled(Filter)`${iconCss}`
const StyledSort2 = styled(Sort2)`${iconCss}`
const StyledSort3 = styled(Sort3)`${iconCss}`

const StyledColumn = styled.div.withConfig<{
  cssConfig: TableCssConfig,
  isPressed?: boolean
}>({
  shouldForwardProp
})`
  color: ${fromTableProps('root.color')};
  cursor: pointer;
  padding: ${SPACES[5]}px 0;
  width: fit-content;
  max-width: 100%;
  
  &:hover {
    background: ${fromTableProps('headCell.hover.background')};
  }
  
  &:active {
    background: ${fromTableProps('headCell.active.background')};
  }

  ${(props) => props.isPressed && `
    background: ${fromTableProps('headCell.active.background')(props)};
  `}
`

const StyledDropdown = styled(Dropdown.Menu)``

const StyledFilterRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${SPACES[2]}px;
`

const TitleLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${SPACES[2]}px;
`

interface ISortInfo {
  key: SortType,
  name: React.ReactNode,
  icon: React.ReactElement
}

interface IDropdownColumnTitleProps {
  testId?: string,
  klId?: string,
  dataIndex: string,
  title?: string | ReactElement,
  columnId?: string,
  isSortable?: boolean,
  sorter?: CustomSorter,
  filters?: ColumnFilter[],
  allowMultipleFilters: boolean,
  activeFilters?: ActiveFilter,
  setActiveFilters?: (arg0: ActiveFilter) => void,
  setActiveOriginalFilters?: (changeHandler: (filters: unknown[]) => unknown[]) => void,
  activeSorting: ActiveSorting,
  setActiveSorting: (val: ActiveSorting) => void
}

export const DropdownColumnTitle: React.FC<IDropdownColumnTitleProps> = (
  {
    testId,
    klId,
    dataIndex,
    title,
    columnId,
    isSortable,
    sorter,
    filters,
    activeFilters,
    setActiveFilters,
    setActiveOriginalFilters,
    activeSorting,
    setActiveSorting,
    allowMultipleFilters
  }): React.ReactElement => {
  const { cssConfig } = useTableContext()

  const [dropdownOpened, setDropdownOpened] = useState(false)

  const resetFilters = (dataIndex: string) => {
    const newFilters = { ...activeFilters, [dataIndex]: {} }

    delete newFilters[dataIndex]
    setActiveFilters && setActiveFilters(newFilters)
  }

  const removeUndefinedInitialFilters = (filters: ColumnFilter[], activeFilters: ActiveFilter, dataIndex: string): ActiveFilter => {
    if (activeFilters[dataIndex] && filters) {
      const newFilters = { ...activeFilters }

      const filterNames = filters.map(filter => filter.name)
      const activeFiltersNames = Object.keys(newFilters[dataIndex])

      const isDefinedFilter = (filterName: string) => {
        return (filterNames.findIndex(x => x.localeCompare(filterName) === 0) > -1)
      }

      activeFiltersNames.forEach(filter => {
        if (!isDefinedFilter(filter)) {
          delete newFilters[dataIndex][filter]
        }
      })

      return newFilters
    }

    return activeFilters
  }

  const classNames: {[className: string]: boolean} = { 'kl6-table-dropdown': true }
  let filterItems: null | React.ReactElement[] = null

  if (filters && activeFilters && setActiveFilters) {
    filterItems = filters.map((filter) => {
      const deleteFilter = (currentActiveFilters: ActiveFilter) => {
        delete currentActiveFilters[dataIndex][filter.name]

        if (Object.keys(currentActiveFilters[dataIndex]).length === 0) {
          delete currentActiveFilters[dataIndex]
        }

        setActiveFilters({ ...currentActiveFilters })
      }

      const changeFilterState = (isActive: boolean): void => {
        setActiveOriginalFilters && setActiveOriginalFilters(filters => {
          const existingFilters = allowMultipleFilters
            ? filters
            : []
          return !isActive
            ? existingFilters.filter(item => item !== filter)
            : [...existingFilters, filter]
        })
        const activeFiltersTmp = removeUndefinedInitialFilters(filters, { ...activeFilters }, dataIndex)
        if (setActiveFilters) {
          if (isActive) {
            const newFilter = allowMultipleFilters
              ? {
                  ...activeFiltersTmp,
                  [dataIndex]: {
                    ...activeFiltersTmp[dataIndex],
                    [filter.name]: filter.filter
                  }
                }
              : {
                  ...activeFiltersTmp,
                  [dataIndex]: { [filter.name]: filter.filter }
                }

            setActiveFilters(newFilter)
          } else {
            deleteFilter(activeFiltersTmp)
          }
        }
      }

      const isChecked: boolean = activeFilters &&
        (dataIndex in activeFilters) &&
        (filter.name in activeFilters[dataIndex])

      if (allowMultipleFilters) {
        return (
          <Dropdown.MenuItem
            data-testid={testId ? `${testId}-${TEST_ID_PREFIX}-filters` : `${TEST_ID_PREFIX}-filters`}
            kl-id={klId ? `${klId}-${TEST_ID_PREFIX}-filters` : `${TEST_ID_PREFIX}-filters`}
            className={isChecked ? 'ant-dropdown-menu-item-selected' : ''}
            onClick={() => { changeFilterState(!isChecked) }}
            key={filter.name}
          >
            <StyledFilterRow>
              <Checkbox checked={isChecked} />
              <span>{filter.localizationKey ? <Locale localizationKey={filter.localizationKey}/> : filter.name}</span>
            </StyledFilterRow>
          </Dropdown.MenuItem>
        )
      }

      return (
        <Dropdown.MenuItem
          data-testid={testId ? `${testId}-${TEST_ID_PREFIX}-filters` : `${TEST_ID_PREFIX}-filters`}
          kl-id={klId ? `${klId}-${TEST_ID_PREFIX}-filters` : `${TEST_ID_PREFIX}-filters`}
          key={filter.name}
          className={isChecked ? 'ant-dropdown-menu-item-selected' : ''}
          onClick={() => { changeFilterState(!isChecked) }}
        >
          {filter.name}
        </Dropdown.MenuItem>)
    })

    if (dataIndex in activeFilters) {
      classNames.filtered = Object.keys(activeFilters[dataIndex]).length > 0
    }
  }

  let sortItems: null | React.ReactElement[] = null
  let sortIcon: null | React.ReactElement = null
  const filterIcon: undefined | React.ReactElement = activeFilters?.[dataIndex] && <StyledFilter />

  if ((sorter || isSortable) && setActiveSorting) {
    const defaultSortTypes: ISortInfo[] = [
      {
        key: 'asc',
        name: <Locale localizationKey="table.columnDropdown.ascending" />,
        icon: <StyledSort3 />
      },
      {
        key: 'desc',
        name: <Locale localizationKey="table.columnDropdown.descending" />,
        icon: <StyledSort2 />
      }
    ]

    sortItems = defaultSortTypes.map((sortType) => {
      const isSortingSelected = activeSorting && activeSorting.field === dataIndex && activeSorting.direction === sortType.key

      return (
        <Dropdown.MenuItem
          data-testid={testId ? `${testId}-${TEST_ID_PREFIX}-${sortType.key}` : `${TEST_ID_PREFIX}-${sortType.key}`}
          kl-id={klId ? `${klId}-${TEST_ID_PREFIX}-${sortType.key}` : `${TEST_ID_PREFIX}-${sortType.key}`}
          className={isSortingSelected ? 'ant-dropdown-menu-item-selected' : ''}
          key={sortType.key}
          onClick={() => {
            setActiveSorting({
              field: dataIndex,
              direction: sortType.key,
              columnId,
              isDefaultSortDisabled: activeSorting.isDefaultSortDisabled
            })
          }}
        >
          <StyledFilterRow>
            {sortType.icon} {sortType.name}
          </StyledFilterRow>
        </Dropdown.MenuItem>
      )
    })

    if (activeSorting && activeSorting.field === dataIndex) {
      sortIcon = activeSorting.direction === 'asc' ? <StyledSort3 /> : <StyledSort2 />
    }
  }

  if (!cssConfig) {
    return <></>
  }

  return (
    <Dropdown
      popupMaxHeight={370}
      trigger={['click']}
      onVisibleChange={open => setDropdownOpened(open)}
      overlay={
        <StyledDropdown
          data-testid={testId ? `${testId}-${TEST_ID_PREFIX}` : TEST_ID_PREFIX}
          kl-id={klId ? `${klId}-${TEST_ID_PREFIX}` : TEST_ID_PREFIX}
          multiple={false}
          onClick={() => setDropdownOpened(false)}
        >
          {
            sortItems && [
              <Dropdown.GroupTitle key="sorting">
                <Locale localizationKey="table.columnDropdown.sorting" />
              </Dropdown.GroupTitle>
            ]
          }
          {
            sortItems
          }
          {
            sortItems && filterItems && [
              <Dropdown.MenuDivider key="filterDivider" />
            ]
          }
          {
            filterItems && [
              <Dropdown.GroupTitle key="filters">
                <Locale localizationKey="table.columnDropdown.filters" />
              </Dropdown.GroupTitle>
            ]
          }
          {
            filterItems
          }
          {
            filterItems && [
              <Dropdown.MenuDivider key="resetFiltersDivider" />,
              <Dropdown.MenuItem
                data-testid={testId ? `${testId}-${TEST_ID_PREFIX}-filters-reset-button` : `${TEST_ID_PREFIX}-filters-reset-button`}
                kl-id={klId ? `${klId}-${TEST_ID_PREFIX}-filters-reset-button` : `${TEST_ID_PREFIX}-filters-reset-button`}
                className="kl6-dropdown-item-action"
                key="resetFiltresButton"
                onClick={() => resetFilters(dataIndex)}
              >
                <Locale localizationKey="table.columnDropdown.resetFilters" />
              </Dropdown.MenuItem>
            ]
          }
        </StyledDropdown>
      }
    >
      <StyledColumn className={cn(classNames)} cssConfig={cssConfig} isPressed={dropdownOpened}>
        <TitleLine>
          {title} {!sortIcon && !filterIcon && <StyledArrowDownMini />} {sortIcon} {filterIcon}
        </TitleLine>
      </StyledColumn>
    </Dropdown>
  )
}
