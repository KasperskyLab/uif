import { shouldForwardProp } from '@helpers/shouldForwardProp'
import { Checkbox } from '@src/checkbox'
import { Dropdown } from '@src/dropdown'
import { Locale } from '@src/locale'
import cn from 'classnames'
import React, { FC, ReactElement, useState } from 'react'
import styled, { css } from 'styled-components'

import { ArrowDownMini, Filter, Sort2, Sort3 } from '@kaspersky/hexa-ui-icons/16'

import styles from '../../../dropdown/styles/Dropdown.module.scss'
import { useTableContext } from '../../context/TableContext'
import { fromTableProps } from '../../tableCss'
import { ColumnFilter, CustomSorter, ITableProps, SortingAttributes, TableColumn, TableCssConfig } from '../../types'
import { FilterApi } from '../Filters'
import { convertColumnFiltersToFilterFromColumn, isFilterFromColumn, isSameItem } from '../Filters/helpers'
import { ActiveSorting, SortType } from '../SortingAndFilters'

const iconCss = css`
  min-height: 20px;
  min-width: 16px;
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
  padding: 10px 0;
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

const StyledDropdown = styled(Dropdown.Menu)`
  &&& {
    padding-bottom: 0;

    .hexa-ui-dropdown-item-divider-wrapper {
      background: var(--dropdown_item--bg--enabled);
      position: sticky;
      bottom: 40px;
      margin-top: 4px;

      .hexa-ui-dropdown-item-divider {
        margin-bottom: 0;
      }
    }

    .hexa-ui-dropdown-item-action {
      position: sticky;
      bottom: 0;
      padding: 10px 12px;
    }
  }
`

const StyledFilterRow = styled.div`
  display: flex;
  align-items: start;
  gap: 4px;
  cursor: pointer;
`

const TitleLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`

const ElementBefore = styled.span`
  display: flex;
  align-items: center;
  min-height: 20px;
`

interface ISortInfo {
  key: SortType,
  name: React.ReactNode,
  icon: React.ReactElement
}

interface IDropdownColumnTitleProps extends Pick<TableColumn, 'showFilterIcon'> {
  testId?: string,
  klId?: string,
  dataIndex: string,
  title?: string | ReactElement,
  columnId?: string,
  isSortable?: boolean,
  sortingAttributes?: SortingAttributes,
  sorter?: CustomSorter,
  availableFilters?: ColumnFilter[],
  allowMultipleFilters: boolean,
  closeDropdownOnSelect?: boolean,
  filterApi?: FilterApi | null,
  onDropdownFiltersChange: ITableProps['onDropdownFiltersChange'],
  activeSorting: ActiveSorting,
  setActiveSorting: (val: ActiveSorting) => void
}

export const DropdownColumnTitle: FC<IDropdownColumnTitleProps> = ({
  testId,
  klId,
  dataIndex,
  title,
  columnId,
  isSortable,
  sortingAttributes,
  sorter,
  availableFilters,
  filterApi,
  onDropdownFiltersChange,
  activeSorting,
  setActiveSorting,
  closeDropdownOnSelect = true,
  showFilterIcon,
  allowMultipleFilters
}): React.ReactElement => {
  const { cssConfig } = useTableContext()
  const groupId = `column.${dataIndex}`

  const [dropdownOpened, setDropdownOpened] = useState(false)
  const [filterGroupItems, setFilterGroupItems] = useState(filterApi?.getGroupItems(groupId))

  const classNames: {[className: string]: boolean} = { 'kl6-table-dropdown': true }
  let filterItems: null | React.ReactElement[] = null

  if (availableFilters && filterApi) {
    filterItems = availableFilters.map((availableFilter, index) => {
      const filterFromColumn = {
        ...convertColumnFiltersToFilterFromColumn(availableFilter, dataIndex),
        isUserDefined: true
      }

      const isChecked = filterGroupItems && filterGroupItems
        .filter(filter => isSameItem(filter, filterFromColumn))
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
        onDropdownFiltersChange?.(
          filterApi
            .getGroupItems(groupId)
            .filter(item => isFilterFromColumn(item))
            .map(item => availableFilters.find(el => el.name === item.filterName)!)
        )
        setFilterGroupItems(filterApi.getGroupItems(groupId))
      }

      return (
        allowMultipleFilters
          ? (
              <Dropdown.InnerActions
                data-testid={testId ? `${testId}-${TEST_ID_PREFIX}-${index}-filters` : `${TEST_ID_PREFIX}-${index}-filters`}
                kl-id={klId ? `${klId}-${TEST_ID_PREFIX}-${index}-filters` : `${TEST_ID_PREFIX}-${index}-filters`}
                key={`${availableFilter.name}-${index}`}
              >
                <StyledFilterRow onClick={onClick}>
                  <Checkbox checked={!!isChecked} />
                  {availableFilter.elementBefore && <ElementBefore>{availableFilter.elementBefore}</ElementBefore>}
                  <span>{availableFilter.localizationKey ? <Locale localizationKey={availableFilter.localizationKey}/> : availableFilter.name}</span>
                </StyledFilterRow>
              </Dropdown.InnerActions>
            )
          : <Dropdown.MenuItem
              data-testid={testId ? `${testId}-${TEST_ID_PREFIX}-filters` : `${TEST_ID_PREFIX}-${index}-filters`}
              kl-id={klId ? `${klId}-${TEST_ID_PREFIX}-filters` : `${TEST_ID_PREFIX}-${index}-filters`}
              className={isChecked ? 'ant-dropdown-menu-item-selected' : ''}
              onClick={onClick}
              key={`${availableFilter.name}-${index}`}
            >
              {availableFilter.name}
            </Dropdown.MenuItem>
      )
    })
  }

  let sortItems: null | React.ReactElement[] = null
  let sortIcon: null | React.ReactElement = null
  const filterIcon: undefined | ReactElement = (showFilterIcon ?? filterApi?.getGroupItems(groupId).length) ? <StyledFilter /> : undefined

  if ((sorter || isSortable || sortingAttributes) && setActiveSorting) {
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

    sortItems = sortingAttributes 
      ? sortingAttributes.map(({label, attribute, field}) => {
        const sortingProperty = attribute || field
        return (
          <Dropdown.SubMenu
            data-testid={testId ? `${testId}-${TEST_ID_PREFIX}-${sortingProperty}` : `${TEST_ID_PREFIX}-${sortingProperty}`}
            kl-id={klId ? `${klId}-${TEST_ID_PREFIX}-${sortingProperty}` : `${TEST_ID_PREFIX}-${sortingProperty}`}
            key={sortingProperty as string | number}
            title={label}
          >
            {
              defaultSortTypes.map((sortType) => {
                const isSortingSelected = activeSorting && activeSorting.field === dataIndex && activeSorting.direction === sortType.key
        
                return (
                  <Dropdown.MenuItem
                    data-testid={testId ? `${testId}-${TEST_ID_PREFIX}-${sortType.key}` : `${TEST_ID_PREFIX}-${sortType.key}`}
                    kl-id={klId ? `${klId}-${TEST_ID_PREFIX}-${sortType.key}` : `${TEST_ID_PREFIX}-${sortType.key}`}
                    className={isSortingSelected ? 'ant-dropdown-menu-item-selected' : ''}
                    key={`${sortingProperty}-${sortType.key}`}
                    onClick={() => {
                      setActiveSorting({
                        field,
                        attribute,
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
            }
          </Dropdown.SubMenu>
        ) 
      })
      : defaultSortTypes.map((sortType) => {
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
      visible={dropdownOpened}
      selectedItemsKeys={[]}
      overlay={
        <StyledDropdown
          data-testid={testId ? `${testId}-${TEST_ID_PREFIX}` : TEST_ID_PREFIX}
          kl-id={klId ? `${klId}-${TEST_ID_PREFIX}` : TEST_ID_PREFIX}
          multiple={false}
          onClick={closeDropdownOnSelect ? () => setDropdownOpened(false) : undefined}
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
              <div key="resetFiltersDivider" className="hexa-ui-dropdown-item-divider-wrapper">
                <Dropdown.MenuDivider className="hexa-ui-dropdown-item-divider" />
              </div>,
              <Dropdown.MenuItem
                data-testid={testId ? `${testId}-${TEST_ID_PREFIX}-filters-reset-button` : `${TEST_ID_PREFIX}-filters-reset-button`}
                kl-id={klId ? `${klId}-${TEST_ID_PREFIX}-filters-reset-button` : `${TEST_ID_PREFIX}-filters-reset-button`}
                className={cn(styles.dropdownItemAction, 'hexa-ui-dropdown-item-action')}
                key="resetFiltersButton"
                onClick={filterApi
                  ? () => {
                      filterApi.setExternalFilters([], groupId)
                      setFilterGroupItems(filterApi.getGroupItems(groupId))
                    }
                  : undefined}
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
