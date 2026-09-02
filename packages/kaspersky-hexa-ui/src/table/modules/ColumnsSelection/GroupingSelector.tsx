import { Radio, RadioOption } from '@src/radio'
import { Text } from '@src/typography'
import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { SelectorWrapper } from './SelectorWrapper'

export interface GroupingSelectorProps {
  groupBy: string,
  setGroupBy: (value: string) => void,
  options: RadioOption[],
  searchValue?: string
}

export const GroupingSelector = ({
  groupBy,
  setGroupBy,
  options,
  searchValue
}: GroupingSelectorProps) => {
  const { t } = useTranslation()

  const filteredOptions = useMemo(() => {
    if (!searchValue) return options

    return options.filter((group) => group.value.toLowerCase().includes(searchValue.toLowerCase()))
  }, [options, searchValue])

  return (
    <SelectorWrapper>
      <Radio
        vertical
        className="grouping-item"
        options={[{ label: <Text type="BTM3">{t('table.columnsSettings.noGrouping')}</Text>, value: '' }, ...filteredOptions]}
        onChange={(e) => {
          setGroupBy(e.target.value)
        }}
        value={groupBy}
      />
    </SelectorWrapper>
  )
}
