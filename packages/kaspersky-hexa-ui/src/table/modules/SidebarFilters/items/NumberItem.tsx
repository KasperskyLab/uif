import { Textbox } from '@src/input'
import { SegmentedButton } from '@src/segmented-button'
import { Select } from '@src/select'
import React, { useMemo } from 'react'

import { useTableContext } from '../../../context/TableContext'
import styles from '../SidebarFilters.module.scss'

import { NumberItemProps } from './types'

export const NumberItem: React.FC<NumberItemProps> = ({ filter, onChange, min, validationStatus, units, index }) => {
  const unitOptions = useMemo(() => (
    units?.options.map(option => ({ value: option.value, label: option.label ?? option.value }))
  ), [units])

  const handleChange = (value: number | null) => {
    onChange({ ...filter, value })
  }

  const handleUnitChange = (unit?: string) => {
    onChange({ ...filter, unit })
  }

  const isServerFiltering = useTableContext(state => state.isServerFiltering)

  return (
    <div className={styles.numberWithUnits}>
      <Textbox.Number
        className={styles.numberTextBox}
        testId={`filter-item-value-${index}`}
        value={filter.value as number | undefined}
        min={min}
        onChange={handleChange as (value?: number | string) => void}
        validationStatus={validationStatus}
      />
      {units && isServerFiltering && (
        units.control === 'segmented-button'
          ? (
              <SegmentedButton
                className={styles.unitSegmented}
                items={units.options.map(option => ({ value: option.value, text: option.label ?? option.value }))}
                value={filter.unit ? [filter.unit] : []}
                onChange={([value]) => handleUnitChange(value)}
                testId="filter-item-unit-segmented"
              />
            )
          : (
              <Select
                className={styles.unitSelect}
                value={filter.unit}
                options={unitOptions}
                onChange={(value: string) => handleUnitChange(value)}
                testId="filter-item-unit-select"
              />
            )
      )}
    </div>
  )
}
