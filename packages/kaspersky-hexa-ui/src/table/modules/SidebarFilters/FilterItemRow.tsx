import { ActionButton } from '@src/action-button'
import { Field } from '@src/field'
import { Text } from '@src/typography'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { CrossM } from '@kaspersky/hexa-ui-icons/16'

import { TableRecord } from '../../types'
import { FilterOperation, FilterType } from '../Filters'

import { FilterItemCondition } from './FilterItemCondition'
import { FilterItemValue } from './FilterItemValue'
import styles from './SidebarFilters.module.scss'
import { FilterItemRowProps } from './types'

export function FilterItemRow <T extends TableRecord = TableRecord> ({
  filter,
  column,
  handleFilterChange,
  handleRemoveFilterRow,
  validationMessage,
  showOperator,
  index
}: FilterItemRowProps<T>) {
  const { t } = useTranslation()

  const showValue = filter.condition !== FilterOperation.empty && filter.condition !== FilterOperation.nempty
  const showConditionSelect = filter.type !== FilterType.Boolean

  return (
    <div className={styles.valueRow}>
      {showConditionSelect && (
        <div className={styles.filterCondition}>
          {showOperator && (
            <span className={styles.filterAttribute}>
              <Text color="disabled" type="BTR4">{t('table.columnsSettings.filtering.operators.or')}</Text>
            </span>
          )}
          <FilterItemCondition
            handleFilterChange={handleFilterChange}
            filter={filter}
            operations={column?.filterType?.operations || []}
            index={index}
          />
        </div>
      )}
      {showValue && (
        <Field
          message={t(validationMessage || '') ?? undefined}
          control={(
            <FilterItemValue
              index={index}
              filter={filter}
              onChange={filterTo => handleFilterChange(filterTo, filter.id)}
              column={column}
              validationMessage={validationMessage}
            />
          )}
        />
      )}
      {handleRemoveFilterRow && (
        <span className={styles.filterAttribute}>
          <ActionButton icon={<CrossM />} onClick={handleRemoveFilterRow} />
        </span>
      )}
    </div>
  )
}
