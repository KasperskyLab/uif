import { ActionButton } from '@src/action-button'
import { Card } from '@src/card'
import { Field } from '@src/field'
import { Select } from '@src/select'
import { OptionType } from '@src/select/types'
import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { PlusS } from '@kaspersky/hexa-ui-icons/16'

import { useTableContext } from '../../context/TableContext'
import { TableRecord } from '../../types'
import { FilterType } from '../Filters'
import { findColumnByName, isFilterConfigInternal, isSidebarGroupInternal } from '../Filters/helpers'

import { FilterItemRow } from './FilterItemRow'
import { getFilterConfigFromGroup } from './helpers'
import styles from './SidebarFilters.module.scss'
import { FilterItemProps } from './types'

export function FilterItem <T extends TableRecord = TableRecord> ({
  index,
  handlePropertyChange,
  handleFilterChange,
  handleRemove,
  handleFilterAdd,
  handleRemoveFilterRow,
  columnsToShow,
  filter,
  invalidFilters
}: FilterItemProps<T>): JSX.Element {
  const { t } = useTranslation()

  const { enableNestedFilters } = useTableContext()

  const filterConfig = useMemo(() => getFilterConfigFromGroup(filter)!, [filter])

  const properties: OptionType[] = useMemo(() => (
    columnsToShow.map(column => (
      {
        label: column.title,
        value: column.filterName || column.key,
        key: column.key
      }
    ))
  ), [columnsToShow])

  const column = useMemo(() => (
    findColumnByName(columnsToShow, filterConfig.name)
  ), [columnsToShow, filterConfig.name])

  const attributes: OptionType[] = column?.filterAttributes?.map(({ label, name }) => ({
    label,
    value: name,
    key: name
  })) || []

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
        <div className={styles.propertyRow}>
          <Field
            label={t('table.columnsSettings.filtering.property')}
            control={(
              <Select
                value={column?.filterName || column?.key || ''}
                onChange={property => handlePropertyChange(property, filter.id)}
                options={properties}
                testId={`filter-item-property-select-${index}`}
              />
            )}
          />
          {attributes.length > 0 && (
            <Field
              label={t('table.columnsSettings.filtering.attribute')}
              control={(
                <Select
                  value={filterConfig?.attribute?.name || attributes[0].value}
                  onChange={(attribute: string) => handlePropertyChange(filterConfig.name, filter.id, attribute)}
                  options={attributes}
                  testId={`filter-item-property-attribute-select-${index}`}
                />
              )}
            />
          )}
        </div>
        {
          isSidebarGroupInternal(filter)
            ? filter.items.filter(isFilterConfigInternal).map((item, indexInner) => (
                <FilterItemRow
                  key={item.id}
                  filter={item}
                  column={column}
                  handleFilterChange={handleFilterChange}
                  handleRemoveFilterRow={filter.items.length > 1 ? () => handleRemoveFilterRow(filter.id, item.id) : undefined}
                  validationMessage={invalidFilters.find(invalidFilter => invalidFilter.id === item.id)?.validationMessage}
                  showOperator={indexInner !== 0}
                  index={index * filter.items.length + indexInner}
                />
              ))
            : (
                <FilterItemRow
                  filter={filter}
                  column={column}
                  handleFilterChange={handleFilterChange}
                  validationMessage={invalidFilters.find(invalidFilter => invalidFilter.id === filter.id)?.validationMessage}
                  index={index}
                />
              )
        }
        {enableNestedFilters && filterConfig.type !== FilterType.Boolean && (
          <span className={styles.addFilterRowButton}>
            <ActionButton size="large" icon={<PlusS />} onClick={() => handleFilterAdd(filterConfig.name, filter.id)}>
              {t('table.columnsSettings.filtering.addCondition')}
            </ActionButton>
          </span>
        )}
      </div>
    </Card>
  )
}
