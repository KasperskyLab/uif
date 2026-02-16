/* eslint-disable react/display-name */
import { Button } from '@src/button'
import { Locale } from '@src/locale'
import { Select } from '@src/select'
import { Sidebar } from '@src/sidebar'
import { TableModule } from '@src/table/modules'
import { ActiveFilter } from '@src/table/modules/SortingAndFilters'
import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'

import { ITableProps } from '../../types'

import FilterItem from './FilterItem'
import FilterItemCondition from './FilterItemCondition'
import FilterRow from './FilterRow'
import { getNewFilter, getTableFilters } from './filters'
import FilterToolbar from './FilterToolbar'
import { FilterConfig } from './types'

const FilterList = styled.div`
  display: grid;
  gap: 16px;

  & + & {
    padding-top: 16px;
  }
`

const StyledFooter = styled.div`
  display: flex;
  gap: 12px;
`

export const FilterSidebar: TableModule = (Component) =>
  (props: ITableProps) => {
    if (!props.useFiltersSidebar) {
      return <Component {...props} />
    }

    const columnsToShow = useMemo(() => {
      return (props.columns || []).filter(column => column.show)
    }, [props.columns])

    const [filteredData, setFilteredData] = useState(props?.dataSource)
    const [appliedFilters, setAppliedFilters] = useState<ActiveFilter>({})
    const [filters, setFilters] = useState<FilterConfig[]>(props?.defaultFiltersConfig || [])
    const [filtersForRestore, setFiltersForRestore] = useState<FilterConfig[]>(props?.defaultFiltersConfig || [])

    useEffect(() => {
      handleApply()
    }, [])

    const restoreFilters = () => {
      setFilters(filtersForRestore)
    }

    const handleApply = () => {
      const activeFilters = getTableFilters(filters)

      setAppliedFilters(activeFilters)

      let preparedData = props.dataSource || []
      preparedData = preparedData.filter((row) => (
        Object.values(activeFilters).every((filters) => (
          Object.values(filters).some((predicate) => predicate(row))
        ))
      ))

      setFilteredData(preparedData)
      setFiltersForRestore(filters)
      props?.onFiltersChange?.(filters)
      props?.onCloseFilterSidebar?.()
    }

    const handleRemove = (removeIndex: number) => {
      setFilters(filters.filter((_, index) => index !== removeIndex))
    }

    const handleFilterChange = (changedIndex: number, changedFilter: FilterConfig) => {
      const newFilters = filters.map((filter, index) => index === changedIndex ? changedFilter : filter)
      setFilters(newFilters)
    }

    const handlePropertyChange = async (name: string, index: number) => {
      const column = columnsToShow.find(column => column.key === name)
      if (column) {
        const filter = await getNewFilter(column)
        handleFilterChange(index, filter)
      }
    }

    return (
      <>
        <Sidebar
          size="small"
          onClose={() => {
            restoreFilters()
            props.onCloseFilterSidebar?.()
          }}
          visible={props.showFilterSidebar}
          title="Filter"
          subHeader={<FilterToolbar columns={columnsToShow} filters={filters} onChange={setFilters} />}
          footer={
            <StyledFooter>
              <Button onClick={handleApply}>
                <Locale localizationKey="table.columnsSettings.apply" />
              </Button>
              <Button onClick={() => {
                restoreFilters()
                props.onCloseFilterSidebar?.()
              }} mode="secondary">
                <Locale localizationKey="table.columnsSettings.cancel" />
              </Button>
            </StyledFooter>
          }
        >
          <FilterList>
            {filters.map((item, index) => (
              <FilterItem key={`filter-item-${index}`} onRemove={() => handleRemove(index)}>
                <FilterRow title={<Locale localizationKey="table.columnsSettings.filtering.property" />}>
                  <Select
                    value={columnsToShow.find(el => item.name === el.dataIndex)?.title as string}
                    onChange={(value) => handlePropertyChange(value, index)}
                    options={columnsToShow?.map(
                      (column) => (
                        {
                          label: column.title,
                          value: column.title,
                          key: column.key
                        }
                      )
                    )}
                  />
                </FilterRow>
                <FilterItemCondition
                  filter={item}
                  onChange={(filter: FilterConfig) => handleFilterChange(index, filter)}
                  columns={columnsToShow}
                />
              </FilterItem>
            ))}
          </FilterList>
        </Sidebar>
        <Component {...props} appliedFilters={appliedFilters} dataSource={filteredData} />
      </>
    )
  }
