import React from 'react'
import cn from 'classnames'
import styled from 'styled-components'
import { Dropdown } from '../../../dropdown'
import { Checkbox } from '../../../checkbox'
import { Icon } from '../../../icon'
import { ActiveFilter, ActiveSorting, SortType } from './SortingAndFilters'
import { Locale } from '../../../locale'
import { useTableContext } from '../../context/TableContext'
import { TableCssConfig } from '../../types'
import { fromTableProps } from '../../tableCss'
import { BORDER_RADIUS, SPACES } from '../../../../design-system/theme/themes/variables'

const StyledColumn = styled.div.withConfig<{ cssConfig: TableCssConfig }>({
  shouldForwardProp: prop => !['cssConfig'].includes(prop)
})`
  color: ${fromTableProps('root.color')};
  cursor: pointer;
  width: fit-content;
  padding: ${SPACES[2]}px ${SPACES[2]}px 0;
  margin-left: -${SPACES[2]}px;
  max-width: 100%;
  line-height: 1;
  
  &:hover {
    color: ${fromTableProps('root.color')};
    > span {
      border-bottom: 1px dashed ${fromTableProps('root.color')};
    }
  }
  
  &.ant-dropdown-open {
    color: ${fromTableProps('root.color')};
    > span {
      border-bottom: 1px dashed ${fromTableProps('root.color')};
    }
  }
  
  &.filtered {
    background-color: ${fromTableProps('root.backgroundColor')};
    border-radius: ${BORDER_RADIUS[2]}px;
    color: ${fromTableProps('root.color')};
  }
  
  .icon {
    background-color: transparent!important;
    padding: 0!important;
    border: none!important;
    position: relative;
    top: -${SPACES[1]}px;
  }
`

const StyledDropDown = styled(Dropdown.Menu)`
  .ant-dropdown-menu-item {
    >span {
      margin-left: ${SPACES[4]}px;
    }
    .icon {
      float: right;
    }
  }
`

const StyledFilterRow = styled.div`
  display: flex;
  gap: ${SPACES[4]}px;
`

const TitleLine = styled.div`
  display: flex;
  flex-direction: row;

`
interface ISortInfo {
  key: SortType,
  name: React.ReactNode
}

interface IDropdownColumnTitleProps {
  dataIndex: string,
  title: string | React.ReactElement,
  columnId: string,
  isSortable?: boolean,
  filters?: any[],
  activeFilters?: ActiveFilter,
  setActiveFilters?: (arg0: ActiveFilter) => void,
  setActiveOriginalFilters?: (changeHandler: (filters: unknown[]) => unknown[]) => void,
  activeSorting: ActiveSorting,
  setActiveSorting: (val: ActiveSorting) => void,
  allowMultipleFilters: boolean
}

export const DropdownColumnTitle: React.FC<IDropdownColumnTitleProps> = (
  {
    dataIndex,
    title,
    columnId,
    isSortable,
    filters,
    activeFilters,
    setActiveFilters,
    setActiveOriginalFilters,
    activeSorting,
    setActiveSorting,
    allowMultipleFilters
  }): React.ReactElement => {
  const { cssConfig } = useTableContext()

  const resetFilters = (dataIndex: string) => {
    const newFilters = { ...activeFilters, [dataIndex]: {} }

    delete newFilters[dataIndex]
    setActiveFilters && setActiveFilters(newFilters)
  }

  const removeUndefinedInitialFilters = (filters: any[], activeFilters: ActiveFilter, dataIndex: string): ActiveFilter => {
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

  const classNames: {[className: string]: boolean} = {}
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
            onClick={() => { changeFilterState(!isChecked) }}
            key={filter.name}
          >
            <StyledFilterRow>
              <Checkbox checked={isChecked} />
              <span>{filter.name}</span>
            </StyledFilterRow>
          </Dropdown.MenuItem>
        )
      }

      return (
        <Dropdown.MenuItem key={filter.name}
          onClick={() => { changeFilterState(!isChecked) }}
        >
          {filter.name} {isChecked ? <Icon size='small' name='Check' /> : null }
        </Dropdown.MenuItem>)
    })

    if (dataIndex in activeFilters) {
      classNames.filtered = Object.keys(activeFilters[dataIndex]).length > 0
    }
  }

  let sortItems: null | React.ReactElement[] = null
  let sortIcon: null | React.ReactElement = null

  if (isSortable && setActiveSorting) {
    const defaultSortTypes: ISortInfo[] = [
      {
        key: 'asc',
        name: <Locale localizationKey='table.columnDropdown.ascending' />
      },
      {
        key: 'desc',
        name: <Locale localizationKey='table.columnDropdown.descending' />
      }
    ]

    sortItems = defaultSortTypes.map((sortType) => {
      const isSortingSelected = activeSorting && activeSorting.field === dataIndex && activeSorting.direction === sortType.key

      return (
        <Dropdown.MenuItem
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
          {sortType.name} {isSortingSelected ? <Icon size='small' name='Check' /> : null}
        </Dropdown.MenuItem>
      )
    })

    if (activeSorting && activeSorting.field === dataIndex) {
      if (activeSorting.direction === 'asc') {
        sortIcon = <Icon name='Arrowdown' size='small' />
      } else {
        sortIcon = <Icon name='Arrowup' size='small' />
      }
    }
  }

  if (!cssConfig) {
    return <></>
  }

  return (
    <Dropdown
      shouldUsePortal={false}
      trigger={['click']}
      overlay={
        <StyledDropDown multiple={false}>
          {
            sortItems
          }
          {
            sortItems && filterItems && [
              <Dropdown.MenuDivider key='filterDivider' />,
              <Dropdown.MenuItem key="filters" disabled={true}>
                <Locale localizationKey='table.columnDropdown.filters' />
              </Dropdown.MenuItem>
            ]
          }
          {
            filterItems
          }
          {
            filterItems && [
              <Dropdown.MenuDivider key='resetFiltersDivider' />,
              <Dropdown.MenuItem key='resetFiltresButton' onClick={() => resetFilters(dataIndex)}>
                <Locale localizationKey='table.columnDropdown.resetFilters' />
              </Dropdown.MenuItem>
            ]
          }
        </StyledDropDown>
      }
    >
      <StyledColumn className={cn(classNames)} cssConfig={cssConfig}>
        <TitleLine>
          <span>{title}</span> {sortIcon}
        </TitleLine>
      </StyledColumn>
    </Dropdown>
  )
}
