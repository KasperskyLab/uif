import { Button } from '@src/button'
import { Locale } from '@src/locale'
import React from 'react'

import { Cross, Plus } from '@kaspersky/hexa-ui-icons/16'

import { TableRecord } from '../../types'
import { FilterConfigInternal } from '../Filters'

import { getNewFilter } from './filters'
import styles from './SidebarFilters.module.scss'
import { FilterToolbarProps } from './types'

const FilterToolbar = <T extends TableRecord = TableRecord>({
  onChange,
  filters,
  columns,
  additionalButtons
}: FilterToolbarProps<T>): JSX.Element => {
  const handleAdd = async () => {
    const newFilter: FilterConfigInternal = await getNewFilter(columns[0])
    onChange([...filters, newFilter])
  }

  const handleClearAll = () => {
    onChange([])
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
      {additionalButtons?.map((button, index) => (
        <Button
          key={button?.testId || button.testId || index}
          {...button}
          mode="tertiary"
        />
      ))}
    </div>
  )
}

export default FilterToolbar
