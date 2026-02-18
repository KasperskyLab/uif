import { Button } from '@src/button'
import { Locale } from '@src/locale'
import React from 'react'

import { Cross, Plus } from '@kaspersky/hexa-ui-icons/16'

import { TableColumn } from '../../types'
import { FilterConfigInternal } from '../Filters'
import { isFilterConfigInternal } from '../Filters/helpers'

import { getNewFilter } from './filters'
import styles from './SidebarFilters.module.scss'

export type FilterToolbarProps = {
  filters: FilterConfigInternal[],
  onChange: (filters: FilterConfigInternal[]) => void,
  columns: TableColumn[]
}

const FilterToolbar: React.FC<FilterToolbarProps> = ({ onChange, filters, columns }) => {
  const handleAdd = async () => {
    const newFilter: FilterConfigInternal = await getNewFilter(columns[0])
    onChange([...filters, newFilter])
  }

  const handleClearAll = () => {
    onChange(filters.filter(filter => !isFilterConfigInternal(filter)))
  }

  return (
    <div className={styles.filtersToolbar}>
      <Button
        iconBefore={<Plus />}
        mode="tertiary"
        onClick={handleAdd}
        testId="table-filters-add-button"
        klId="filters_add_button"
      >
        <Locale localizationKey="table.columnsSettings.filtering.add" />
      </Button>
      {filters.length > 0 && (
        <Button
          iconBefore={<Cross />}
          mode="tertiary"
          onClick={handleClearAll}
          testId="table-filters-clear-all-button"
          klId="filters_clear_all_button"
        >
          <Locale localizationKey="table.columnsSettings.filtering.clearAll" />
        </Button>
      )}
    </div>
  )
}

export default FilterToolbar
