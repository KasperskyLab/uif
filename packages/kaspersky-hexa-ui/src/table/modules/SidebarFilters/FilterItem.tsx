import { Card } from '@src/card'
import { Field } from '@src/field'
import { Select } from '@src/select'
import { OptionType } from '@src/select/types'
import cn from 'classnames'
import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { TableColumn } from '../..'
import { FilterConfigInternal, FilterOperation } from '../Filters'

import { FilterItemCondition } from './FilterItemCondition'
import { FilterItemValue } from './FilterItemValue'
import { FilterValidation } from './items/types'
import styles from './SidebarFilters.module.scss'

type FilterItemProps = {
  index: number,
  handlePropertyChange: (columnIndex: string, id?: string, attribute?: string) => void,
  handleFilterChange: (filterTo: FilterConfigInternal, id?: string) => void,
  handleRemove: (filter: FilterConfigInternal) => void,
  columnsToShow: TableColumn[],
  filter: FilterConfigInternal
} & FilterValidation

export function FilterItem ({
  index,
  handlePropertyChange,
  handleFilterChange,
  handleRemove,
  columnsToShow,
  filter,
  validationMessage
}: FilterItemProps): JSX.Element {
  const { t } = useTranslation()

  const properties: OptionType[] = useMemo(() => (
    columnsToShow.map(column => (
      {
        label: column.title,
        value: column.dataIndex,
        key: column.key
      }
    ))
  ), [columnsToShow])

  const column = useMemo(() => (
    columnsToShow.find((column) => filter.name === column?.dataIndex)
  ), [columnsToShow, filter.name])

  const attributes: OptionType[] = column?.filterAttributes?.map(({ label, name }) => ({
    label,
    value: name,
    key: name
  })) || []

  const showValue = filter.condition !== FilterOperation.empty && filter.condition !== FilterOperation.nempty

  return (
    <Card
      size="large"
      mode="filled"
      closable={true}
      onCloseButtonClick={() => handleRemove(filter)}
      testId={`table-filter-item-${index}`}
      klId={`table-filter-item-${index}`}
    >
      <div className={styles.filterItemContainer} role="filter">
        <div className={cn(
          styles.propertyRow
        )}>
          <Field
            label={t('table.columnsSettings.filtering.property')}
            control={
              <Select
                value={columnsToShow.find(el => filter.name === el.dataIndex)?.dataIndex as string}
                onChange={property => handlePropertyChange(property, filter.id)}
                options={properties}
                testId={`filter-item-property-select-${index}`}
              />
            }
          />
          {attributes.length > 0 && <Field
            label={t('table.columnsSettings.filtering.attribute')}
            control={
              <Select
                value={filter?.attribute?.name || attributes[0].value}
                onChange={(attribute: string) => handlePropertyChange(filter.name, filter.id, attribute )}
                options={attributes}
                testId={`filter-item-property-attribute-select-${index}`}
              />
            }
          />}
        </div>
        <div
          className={cn(
            styles.valueRow,
            styles.grid48
          )}
        >
          <FilterItemCondition
            handleFilterChange={handleFilterChange}
            filter={filter}
            operations={column?.filterType?.operations || []}
            index={index}
          />
          {showValue && (
            <Field
              message={t(validationMessage || '') ?? undefined}
              control={
                <FilterItemValue
                  index={index}
                  filter={filter}
                  onChange={filterTo => handleFilterChange(filterTo, filter.id)}
                  columns={columnsToShow}
                  validationMessage={validationMessage}
                />
              }
            />
          )}
        </div>
      </div>
    </Card>
  )
}
